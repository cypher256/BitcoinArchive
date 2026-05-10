#!/usr/bin/env node
/**
 * generate-keyword-index.mjs — Auto-link keyword index generator
 *
 * Produces `src/data/keyword-index.json`, a per-locale map from keyword
 * string to its target entry. Used by `rehype-auto-link-keywords.mjs` to
 * mechanically convert keyword occurrences in body prose into links to
 * the target entry.
 *
 * Two keyword classes are produced per locale:
 *
 *   1. concept — declared explicitly via `inlineLinkKeywords` in
 *      frontmatter. Eligible target types are editorial only:
 *      analysis / article / biography. Primary-source types
 *      (forum-post / mailing-list / correspondence / whitepaper / bip /
 *      court-document) cannot claim keywords (recorded as errors).
 *
 *   2. person — aggregated from `participants[].name` and `slug` of
 *      every entry, but **only for participants who have a biography
 *      entry** (= editorial signal of "this is a recognized person with
 *      a definition page"). Forum-only handles like "user", "joe",
 *      "red" — which collide with common English words — are excluded
 *      to avoid false-positive auto-linking. For JA, the slug-to-
 *      display-name map in `src/i18n/participants.ts`
 *      (`participantDisplayNamesJaBySlug`) is consulted so that JA
 *      prose like 「アダム・バック」 also links. Biography entries can
 *      declare additional aliases via their frontmatter
 *      `inlineLinkKeywords` (e.g., a `mike-hearn` biography could add
 *      `["Hearn"]` to also link the surname-only form).
 *
 *      This is a deliberate narrowing from the legacy
 *      `AutoLinkNames.astro` runtime, which auto-linked every
 *      participant slug regardless of whether a biography existed —
 *      producing well-known false-positive matches on common English
 *      words. The narrowing is justified because:
 *        - A biography is the editorial commitment that a person is
 *          worth linking to;
 *        - Auto-linking should serve the reader (clear definition
 *          target), not feature-parity with legacy behavior.
 *      Editors who want to promote a non-bio participant to auto-link
 *      eligibility add a biography for them.
 *
 * Output shape:
 *   {
 *     "en": {
 *       "concept": { "<keyword>": "<entry-id>", ... },
 *       "person":  { "<name>": "<participant-slug>", ... }
 *     },
 *     "ja": { ... }
 *   }
 *
 * The two classes are separated because they resolve to different URL
 * patterns at link time:
 *   concept: `/{locale}/entries/{entry-id}/`
 *   person:  `/{locale}/participants/{participant-slug}/`
 *
 * Conflict detection (build-time errors):
 *   - Same concept keyword claimed by 2+ entries
 *   - A concept keyword equal to a person keyword
 *   (Person/person duplicate is impossible because `participants[].slug`
 *    keys the aggregate.)
 *
 * Run via `npm run dev` / `npm run build` / `npm run check` startup
 * (alongside `generate-derived-related.mjs`). Exits non-zero on any
 * error; warnings are informational.
 */
import { readdirSync, readFileSync, statSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');

const COLLECTIONS = [
  { name: 'en', base: path.join(ROOT, 'src/data/entries/en') },
  { name: 'ja', base: path.join(ROOT, 'src/data/translations/ja') },
];

const OUTPUT = path.join(ROOT, 'src/data/keyword-index.json');

// Editorial types eligible to claim concept keywords. Anything else is
// primary-source and cannot be a definition target.
const CONCEPT_ELIGIBLE_TYPES = new Set(['analysis', 'article', 'biography']);

// ---------------------------------------------------------------------------
// File / frontmatter helpers
// ---------------------------------------------------------------------------

function walk(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir).sort()) {
    const full = path.join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (st.isFile() && name.endsWith('.md')) out.push(full);
  }
  return out;
}

function splitFrontmatter(content) {
  if (!content.startsWith('---\n')) return { fm: '', body: content };
  const end = content.indexOf('\n---\n', 4);
  if (end < 0) return { fm: '', body: content };
  return { fm: content.slice(4, end), body: content.slice(end + 5) };
}

function entryIdFromPath(absPath, base) {
  return path.relative(base, absPath).replace(/\.md$/, '');
}

function parseTypeField(fm) {
  const m = fm.match(/^type\s*:\s*"([^"]+)"\s*$/m);
  return m ? m[1] : null;
}

// Parse list-of-strings frontmatter blocks like:
//   inlineLinkKeywords:
//     - "X"
//     - "Y"
function parseStringList(fm, key) {
  const lines = fm.split('\n');
  const out = [];
  let inBlock = false;
  for (const line of lines) {
    if (new RegExp(`^${key}\\s*:\\s*$`).test(line)) {
      inBlock = true;
      continue;
    }
    if (!inBlock) continue;
    const dq = line.match(/^\s*-\s*"((?:[^"\\]|\\.)*)"\s*$/);
    const sq = line.match(/^\s*-\s*'((?:[^'\\]|\\.)*)'\s*$/);
    if (dq) { out.push(dq[1]); continue; }
    if (sq) { out.push(sq[1]); continue; }
    if (/^\s*-\s/.test(line)) continue; // unrecognized item, skip
    if (/^\s*$/.test(line)) continue;    // blank line inside list, skip
    inBlock = false;
  }
  return out;
}

// Parse `participants:` block — list of { name, slug } objects.
function parseParticipants(fm) {
  const lines = fm.split('\n');
  const out = [];
  let inBlock = false;
  let cur = null;
  for (const line of lines) {
    if (/^participants\s*:\s*$/.test(line)) {
      inBlock = true;
      continue;
    }
    if (!inBlock) continue;
    const nameMatch = line.match(/^\s*-\s+name\s*:\s*"([^"]+)"\s*$/);
    const slugMatch = line.match(/^\s+slug\s*:\s*"([^"]+)"\s*$/);
    if (nameMatch) {
      if (cur) out.push(cur);
      cur = { name: nameMatch[1] };
    } else if (slugMatch && cur) {
      cur.slug = slugMatch[1];
    } else if (/^[a-zA-Z]/.test(line)) {
      if (cur) out.push(cur);
      cur = null;
      inBlock = false;
    }
  }
  if (cur) out.push(cur);
  return out;
}

// ---------------------------------------------------------------------------
// JA participant display-name map (extracted from participants.ts)
// ---------------------------------------------------------------------------

function loadJaParticipantNameMap() {
  const tsPath = path.join(ROOT, 'src/i18n/participants.ts');
  const src = readFileSync(tsPath, 'utf-8');
  // Locate the `participantDisplayNamesJaBySlug` block and extract entries.
  const start = src.indexOf('participantDisplayNamesJaBySlug');
  if (start < 0) throw new Error('participantDisplayNamesJaBySlug not found in src/i18n/participants.ts');
  const blockEnd = src.indexOf('\n};\n', start);
  if (blockEnd < 0) throw new Error('participantDisplayNamesJaBySlug block end not found');
  const block = src.slice(start, blockEnd);
  const map = {};
  for (const line of block.split('\n')) {
    const m = line.match(/^\s*'([^']+)'\s*:\s*'([^']+)'/);
    if (m) map[m[1]] = m[2];
  }
  return map;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const errors = [];
const warnings = [];
const jaNameMap = loadJaParticipantNameMap();

const result = { en: { concept: {}, person: {} }, ja: { concept: {}, person: {} } };

for (const { name: locale, base } of COLLECTIONS) {
  const files = walk(base);

  // --- pass 1: collect per-entry context ---------------------------------
  // For each entry: id, type, frontmatter inlineLinkKeywords, and the
  // primary participant slug (for biography entries). We need this
  // upfront because biography frontmatter keywords are person aliases
  // (target = participant slug), not concept keywords.
  const entryContexts = []; // { id, type, keywords, primarySlug }
  const bioSlugs = new Set(); // participant slugs that have a biography
  for (const file of files) {
    const { fm } = splitFrontmatter(readFileSync(file, 'utf-8'));
    const id = entryIdFromPath(file, base);
    const type = parseTypeField(fm);
    const keywords = parseStringList(fm, 'inlineLinkKeywords');
    const participants = parseParticipants(fm);
    const primarySlug = participants[0]?.slug ?? null;
    entryContexts.push({ id, type, keywords, primarySlug });
    if (type === 'biography' && primarySlug) bioSlugs.add(primarySlug);
  }

  // --- pass 2: concept keywords ------------------------------------------
  // analysis / article entries' inlineLinkKeywords -> concept keyword.
  // biography entries' inlineLinkKeywords are person-alias rather than
  // concept (handled in the person-keywords pass below).
  const conceptClaims = new Map(); // keyword -> [entry ids]
  for (const ctx of entryContexts) {
    if (ctx.keywords.length === 0) continue;
    if (ctx.type === 'biography') continue; // handled as person alias
    if (!CONCEPT_ELIGIBLE_TYPES.has(ctx.type)) {
      errors.push(
        `[${locale}] Entry "${ctx.id}" has type="${ctx.type}" but declares ` +
        `inlineLinkKeywords. Only analysis/article/biography may claim keywords.`
      );
      continue;
    }
    for (const kw of ctx.keywords) {
      if (!conceptClaims.has(kw)) conceptClaims.set(kw, []);
      conceptClaims.get(kw).push(ctx.id);
    }
  }
  for (const [kw, ids] of conceptClaims) {
    if (ids.length > 1) {
      errors.push(
        `[${locale}] Concept keyword "${kw}" is claimed by multiple entries: ` +
        ids.map((i) => `"${i}"`).join(', ') +
        '. Choose one definition or differentiate the keyword.'
      );
      continue;
    }
    result[locale].concept[kw] = ids[0];
  }

  // --- pass 3: person keywords (bio-slugs only + bio aliases) ------------
  // Walk all entries, collect participants[].name -> slug pairs, but
  // only emit person keywords for slugs in bioSlugs. Then augment with
  // biography entries' inlineLinkKeywords as additional aliases for
  // the same primary slug.
  const personByName = new Map(); // display name -> slug
  const seenSlugs = new Set();
  for (const ctx of entryContexts) {
    // We need participants[].name from the original frontmatter, not
    // just primarySlug — collect them all here.
  }
  // Re-walk participants from the file frontmatter (entryContexts only
  // captured primarySlug, not all participants). Cheap enough.
  for (const file of files) {
    const { fm } = splitFrontmatter(readFileSync(file, 'utf-8'));
    for (const p of parseParticipants(fm)) {
      if (!p.slug || !p.name) continue;
      if (seenSlugs.has(p.slug)) continue;
      seenSlugs.add(p.slug);
      if (!bioSlugs.has(p.slug)) continue; // bio-only filter
      if (!personByName.has(p.name)) personByName.set(p.name, p.slug);
      if (locale === 'ja') {
        const ja = jaNameMap[p.slug];
        if (ja && !personByName.has(ja)) personByName.set(ja, p.slug);
      }
    }
  }
  // Biography entry inlineLinkKeywords -> person aliases (target = primary slug)
  for (const ctx of entryContexts) {
    if (ctx.type !== 'biography') continue;
    if (!ctx.primarySlug) continue;
    if (ctx.keywords.length === 0) continue;
    for (const kw of ctx.keywords) {
      if (personByName.has(kw)) {
        const existing = personByName.get(kw);
        if (existing !== ctx.primarySlug) {
          errors.push(
            `[${locale}] Biography "${ctx.id}" declares alias "${kw}" but it ` +
            `already maps to slug "${existing}" (different person).`
          );
        }
        continue;
      }
      personByName.set(kw, ctx.primarySlug);
    }
  }
  for (const [name, slug] of personByName) {
    result[locale].person[name] = slug;
  }

  // --- concept/person collision detection --------------------------------
  for (const kw of Object.keys(result[locale].concept)) {
    if (Object.prototype.hasOwnProperty.call(result[locale].person, kw)) {
      errors.push(
        `[${locale}] Keyword "${kw}" is claimed by both a concept entry ` +
        `("${result[locale].concept[kw]}") and a person ` +
        `(slug "${result[locale].person[kw]}"). Differentiate the keyword.`
      );
    }
  }
}

// ---------------------------------------------------------------------------
// Report + write
// ---------------------------------------------------------------------------

if (warnings.length > 0) {
  console.warn(`\n=== Warnings (${warnings.length}) ===`);
  for (const w of warnings) console.warn(`  ${w}`);
}

if (errors.length > 0) {
  console.error(`\n=== Errors (${errors.length}) ===`);
  for (const e of errors) console.error(`  ${e}`);
  console.error(`\nFAIL: keyword index has conflicts. Resolve them before continuing.`);
  process.exit(1);
}

mkdirSync(path.dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, JSON.stringify(result, null, 2) + '\n', 'utf-8');

const summary = (locale) =>
  `${locale}: ${Object.keys(result[locale].concept).length} concept + ` +
  `${Object.keys(result[locale].person).length} person`;

console.log(`✓ keyword index written: ${path.relative(ROOT, OUTPUT)}`);
console.log(`  ${summary('en')}`);
console.log(`  ${summary('ja')}`);
