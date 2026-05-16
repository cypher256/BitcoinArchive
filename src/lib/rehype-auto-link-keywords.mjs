/**
 * rehype-auto-link-keywords.mjs — Server-side keyword auto-linking
 *
 * Reads `src/data/keyword-index.json` (produced by
 * `scripts/generate-keyword-index.mjs`) and converts the first occurrence
 * of each keyword in body prose into a link to the keyword's definition
 * page.
 *
 * Two keyword classes are handled:
 *
 *   - concept: linked to `/{locale}/entries/{entry-id}/`. Defined by an
 *     entry's frontmatter `inlineLinkKeywords`. Eligible target types are
 *     editorial only (analysis / article / biography).
 *
 *   - person: linked to `/{locale}/participants/{slug}/`. Aggregated
 *     from every entry's `participants[].name` and the JA display-name
 *     map in `src/i18n/participants.ts`. Replaces the legacy
 *     client-side `AutoLinkNames.astro` runtime scan.
 *
 * Exclusions (skipped via HAST ancestor check, mirroring
 * `rehype-strip-archive-links.mjs`):
 *
 *   - Inside an existing `<a>` (no double-linking)
 *   - Inside `<code>` or `<pre>` (don't auto-link identifiers)
 *   - Inside a `<blockquote>` (primary-source quote — same convention
 *     used by `rehype-strip-archive-links` for verbatim block detection)
 *   - Inside `<aside class="editor-inline">` (editor notes from
 *     `remark-editorial-marker.mjs` — these are editorial overlay; we
 *     keep their links manual to preserve the editor's intent)
 *   - File path matches `VERBATIM_DIRS` (forum / correspondence /
 *     emails / bip) — whole-file primary records
 *   - Self-link: keyword's target is the page being rendered
 *
 * Per-page first-match-only: a keyword is linked at most once per
 * rendered page. After the first link is inserted, subsequent
 * occurrences are left as plain text (visual-noise reduction, matches
 * legacy AutoLinkNames behavior).
 *
 * Longest-first matching: keywords are sorted by descending length so
 * that "Bitcoin Core" is preferred over "Bitcoin" inside "Bitcoin Core".
 *
 * Word-boundary handling:
 *   - ASCII keywords use lookaround word boundaries — "Hearn" inside
 *     "Pearns" does not match.
 *   - JA / CJK keywords have no analogous boundary in plain Unicode,
 *     so longest-first sorting is the primary protection (e.g.,
 *     「サトシ・ナカモト」 matches before 「サトシ」 inside the same string).
 *
 * Pipeline placement: this plugin must run AFTER
 * `rehype-strip-archive-links` (so that verbatim http(s) URLs are
 * already neutralized; auto-link skips blockquotes anyway, but this
 * keeps responsibilities separable). It must run before any plugin that
 * wraps content (table / mermaid wrappers).
 */
import { readFileSync, existsSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { visitParents } from 'unist-util-visit-parents';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..', '..');
const INDEX_PATH = path.join(ROOT, 'src/data/keyword-index.json');

// Verbatim file path fragments — any file whose vfile.path contains one
// of these is whole-record primary source. Matches the list maintained
// by `rehype-strip-archive-links.mjs`.
const VERBATIM_DIRS = [
  '/forum/',
  '/correspondence/',
  '/emails/',
  '/bip/',
];

// MIRROR_BASE is hard-coded here rather than imported because the
// runtime base differs by deployment (CF_PAGES = '/' vs GitHub
// Pages = '/BitcoinArchive'). We mimic `remark-rewrite-base.mjs`.
import { MIRROR_BASE } from '../../site-config.mjs';

let cachedIndex = null;
let cachedMtimeMs = 0;

function loadIndex() {
  if (!existsSync(INDEX_PATH)) {
    // Index missing — treat as no-op rather than fail. Run
    // `generate-keyword-index.mjs` (wired into npm dev/build/check).
    return { en: { concept: {}, person: {} }, ja: { concept: {}, person: {} } };
  }
  // Invalidate cache when the index file changes on disk (so a
  // re-run of `generate-keyword-index.mjs` during `npm run dev` is
  // picked up without restarting the dev server).
  const mtime = statSync(INDEX_PATH).mtimeMs;
  if (cachedIndex && mtime === cachedMtimeMs) return cachedIndex;
  cachedIndex = JSON.parse(readFileSync(INDEX_PATH, 'utf-8'));
  cachedMtimeMs = mtime;
  matcherCache.clear();
  return cachedIndex;
}

function detectLocale(filePath) {
  if (filePath.includes('/translations/ja/')) return 'ja';
  return 'en';
}

function detectEntryId(filePath) {
  // Recover the entry id (e.g., `analysis/2014-03-19-...`) from the
  // absolute path. Used for self-link detection.
  const enMatch = filePath.match(/\/src\/data\/entries\/en\/(.+)\.md$/);
  if (enMatch) return enMatch[1];
  const jaMatch = filePath.match(/\/src\/data\/translations\/ja\/(.+)\.md$/);
  if (jaMatch) return jaMatch[1];
  return null;
}

// Cache of entry file path → { type, primarySlug }. Used so that a
// biography entry's body doesn't auto-link to the participant whose
// page hosts it (mirrors `excludeSlug` behavior in legacy
// AutoLinkNames). The self-skip applies ONLY when the entry is a
// biography — non-biography entries (analysis / aftermath / article)
// whose primary participant happens to match a keyword target should
// still get the link, since the rendered URL is `/entries/<id>/`,
// not `/participants/<slug>/`. Read lazily on first use.
const primaryParticipantCache = new Map();

function detectEntryMeta(filePath) {
  if (!filePath) return { type: null, primarySlug: null };
  if (primaryParticipantCache.has(filePath)) return primaryParticipantCache.get(filePath);
  let type = null;
  let primarySlug = null;
  try {
    const content = readFileSync(filePath, 'utf-8');
    if (content.startsWith('---\n')) {
      const end = content.indexOf('\n---\n', 4);
      const fm = end > 0 ? content.slice(4, end) : '';
      const typeMatch = fm.match(/^type\s*:\s*"([^"]+)"\s*$/m);
      if (typeMatch) type = typeMatch[1];
      const lines = fm.split('\n');
      let inBlock = false;
      for (let i = 0; i < lines.length; i++) {
        if (/^participants\s*:\s*$/.test(lines[i])) { inBlock = true; continue; }
        if (!inBlock) continue;
        const m = lines[i].match(/^\s+slug\s*:\s*"([^"]+)"\s*$/);
        if (m) { primarySlug = m[1]; break; }
        if (/^[a-zA-Z]/.test(lines[i])) break; // exited the block
      }
    }
  } catch {
    // file unreadable — leave both null
  }
  const meta = { type, primarySlug };
  primaryParticipantCache.set(filePath, meta);
  return meta;
}

// Build a single combined regex for the locale's keywords, sorted
// longest-first. Keywords are escaped for regex literal use. Returned
// shape: { regex, keywords }.
//   keywords[i] is the original keyword string for capture group i+1
//   (we use a single alternation, so we use the matched string itself
//    to look up the target — no group indexing needed).
function buildMatcher(localeIndex) {
  const all = [];
  for (const [kw, target] of Object.entries(localeIndex.concept)) {
    all.push({ kw, kind: 'concept', target });
  }
  for (const [kw, slug] of Object.entries(localeIndex.person)) {
    all.push({ kw, kind: 'person', target: slug });
  }
  if (all.length === 0) return null;
  // Longest-first so 'Bitcoin Core' beats 'Bitcoin' inside 'Bitcoin Core'
  all.sort((a, b) => b.kw.length - a.kw.length);
  const lookup = new Map();
  for (const e of all) {
    if (!lookup.has(e.kw)) lookup.set(e.kw, e); // first wins
  }
  const escaped = all.map((e) => e.kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  // Word boundaries: build a single regex without lookarounds applied
  // uniformly — instead we test boundary post-match per keyword (since
  // some keywords are JA, some ASCII).
  const re = new RegExp(`(${escaped.join('|')})`, 'g');
  return { regex: re, lookup };
}

// Per-locale matcher cache — built lazily on first use.
const matcherCache = new Map();

function getMatcher(locale) {
  // Invoke loadIndex() unconditionally so its mtime check has a
  // chance to invalidate `matcherCache` when the underlying
  // keyword-index.json changes between requests in `npm run dev`.
  // Returning the cached matcher without calling loadIndex would
  // strand stale matchers across regenerations.
  const idx = loadIndex()[locale];
  if (matcherCache.has(locale)) return matcherCache.get(locale);
  const m = idx ? buildMatcher(idx) : null;
  matcherCache.set(locale, m);
  return m;
}

// Word-boundary check for a match at position `start` of length `len`
// inside `text`. Only enforces boundaries on sides whose terminal
// character is ASCII alphanumeric — JA/CJK keywords have no boundary
// in plain Unicode and rely on longest-first sorting instead.
function isWordBoundaryOK(text, start, kw) {
  const before = start > 0 ? text[start - 1] : '';
  const after = start + kw.length < text.length ? text[start + kw.length] : '';
  const headAscii = /[A-Za-z0-9]/.test(kw[0]);
  const tailAscii = /[A-Za-z0-9]/.test(kw[kw.length - 1]);
  if (headAscii && /[A-Za-z0-9]/.test(before)) return false;
  if (tailAscii && /[A-Za-z0-9]/.test(after)) return false;
  // Reject "name + space + capital letter" pattern (e.g., 'Red Hat'
  // would otherwise match 'Red' alone). Mirrors AutoLinkNames behavior.
  if (tailAscii && /^ [A-Z]/.test(text.slice(start + kw.length))) return false;
  return true;
}

function isInsideTag(ancestors, tagName) {
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const node = ancestors[i];
    if (node.type === 'element' && node.tagName === tagName) return true;
  }
  return false;
}

function isInsideEditorNote(ancestors) {
  for (let i = ancestors.length - 1; i >= 0; i--) {
    const node = ancestors[i];
    if (node.type !== 'element' || node.tagName !== 'aside') continue;
    const cls = node.properties?.className;
    if (Array.isArray(cls) && cls.includes('editor-inline')) return true;
  }
  return false;
}

function localizeBase() {
  // Same logic as remark-rewrite-base.mjs: when deployed to CF_PAGES,
  // base is '/'; otherwise it's MIRROR_BASE.
  return process.env.CF_PAGES ? '' : MIRROR_BASE;
}

function buildHref(locale, kind, target) {
  const base = localizeBase();
  const localePrefix = locale === 'ja' ? '/ja' : '';
  if (kind === 'concept') return `${base}${localePrefix}/entries/${target}/`;
  return `${base}${localePrefix}/participants/${target}/`;
}

export function rehypeAutoLinkKeywords() {
  return (tree, vfile) => {
    const filePath = vfile?.path || '';
    if (VERBATIM_DIRS.some((d) => filePath.includes(d))) return;

    const locale = detectLocale(filePath);
    const matcher = getMatcher(locale);
    if (!matcher) return;
    const selfId = detectEntryId(filePath);
    const { type: selfType, primarySlug: selfPrimarySlug } = detectEntryMeta(filePath);
    const linkedKeywords = new Set();

    // Pre-scan: mark any keyword whose text appears inside an
    // existing <a> as already-linked. Without this, the text-node
    // walker (which skips <a> subtrees) never sees text inside
    // manual markdown links like [Mike Hearn](/.../) and would
    // still auto-link a later plain occurrence, violating the
    // "one link per keyword per page" invariant. Mirrors the
    // first-pass logic of legacy AutoLinkNames.astro.
    visitParents(tree, 'element', (node) => {
      if (node.tagName !== 'a') return;
      // Concatenate all descendant text under this anchor.
      let txt = '';
      const stack = [...(node.children || [])];
      while (stack.length) {
        const c = stack.pop();
        if (c.type === 'text') txt += c.value;
        else if (c.children) stack.push(...c.children);
      }
      if (!txt) return;
      // Test every keyword (cheap — keyword count is bounded).
      for (const kw of matcher.lookup.keys()) {
        if (txt.includes(kw)) linkedKeywords.add(kw);
      }
    });

    visitParents(tree, 'text', (node, ancestors) => {
      if (!node.value || node.value.length === 0) return;

      // Ancestor exclusions (any one disqualifies the text node).
      if (isInsideTag(ancestors, 'a')) return;
      if (isInsideTag(ancestors, 'code')) return;
      if (isInsideTag(ancestors, 'pre')) return;
      if (isInsideTag(ancestors, 'blockquote')) return;
      if (isInsideEditorNote(ancestors)) return;

      const text = node.value;
      // Build new children array if any match is found. Otherwise leave
      // the text node intact for performance (most text nodes have no
      // matches).
      let cursor = 0;
      const out = [];
      matcher.regex.lastIndex = 0;
      let m;
      while ((m = matcher.regex.exec(text)) !== null) {
        const matchStart = m.index;
        const matched = m[0];
        const entry = matcher.lookup.get(matched);
        if (!entry) continue;
        if (linkedKeywords.has(matched)) continue; // first-match-only per page
        // Self-link skip: concept entry pointing at itself, or person
        // page for the participant whose biography page is being rendered.
        if (entry.kind === 'concept' && entry.target === selfId) continue;
        // Person self-link skip applies ONLY on biography pages — those
        // render at `/participants/<slug>/`, so linking the participant's
        // own name there is a no-op. For analysis / aftermath / article
        // entries whose primary participant happens to match the keyword
        // target, the rendered URL is `/entries/<id>/`, so the link is
        // meaningful and must not be suppressed.
        if (
          entry.kind === 'person' &&
          selfType === 'biography' &&
          selfPrimarySlug &&
          entry.target === selfPrimarySlug
        ) continue;
        if (!isWordBoundaryOK(text, matchStart, matched)) continue;

        // Emit any preceding plain text.
        if (matchStart > cursor) {
          out.push({ type: 'text', value: text.slice(cursor, matchStart) });
        }
        out.push({
          type: 'element',
          tagName: 'a',
          properties: {
            href: buildHref(locale, entry.kind, entry.target),
            className: ['auto-link', `auto-link--${entry.kind}`],
          },
          children: [{ type: 'text', value: matched }],
        });
        cursor = matchStart + matched.length;
        linkedKeywords.add(matched);
      }

      if (out.length === 0) return; // no matches → leave node alone
      // Trailing plain text.
      if (cursor < text.length) {
        out.push({ type: 'text', value: text.slice(cursor) });
      }
      // Replace the text node with the produced sequence.
      const parent = ancestors[ancestors.length - 1];
      const idx = parent.children.indexOf(node);
      if (idx === -1) return;
      parent.children.splice(idx, 1, ...out);
    });
  };
}

export default rehypeAutoLinkKeywords;
