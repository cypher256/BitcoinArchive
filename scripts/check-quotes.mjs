/**
 * check-quotes.mjs — AST-based quote structure validator
 *
 * Parses markdown files with remark and validates:
 * - quote markers match frontmatter quotes[]
 * - markers are followed by reachable blockquotes
 * - parent references are valid and non-circular
 * - EN/JA quote IDs are in sync
 * - no legacy attribution patterns remain
 *
 * Run: npm run check:quotes
 */

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const enDir = path.resolve(__dirname, '../src/data/entries/en');
const jaDir = path.resolve(__dirname, '../src/data/translations/ja');

const QUOTE_MARKER_RE = /^<!--\s*quote:\s*(\w+)\s*-->$/;
const LEGACY_PATTERNS = [
  /\[Quote from:/,
  / wrote:$/m,
  /^Quoting /m,
];

// Real person names that should always have personSlug set.
// If quote.person matches one of these but personSlug is null,
// the JA renderer will fall back to the English name instead of katakana.
const REAL_NAMES_REQUIRING_SLUG = new Set([
  'Satoshi Nakamoto', 'Satoshi', 'satoshi',
  'Hal Finney', 'Hal',
  'Adam Back',
  'Wei Dai',
  'Nick Szabo',
  'Mike Hearn',
  'Martti Malmi', 'sirius-m', 'Sirius', 'mmalmi@cc.hut.fi',
  'Laszlo Hanyecz',
  'Ray Dillinger', 'Ray Dillinger (Bear)',
  'Jeff Garzik', 'jgarzik', 'gavinandresen',
  'Gavin Andresen',
  'Dustin Trammell', 'Dustin D. Trammell',
  'Peter Todd',
  'Craig Wright',
  'James A. Donald', 'James Donald',
  'Liberty Standard', 'NewLibertyStandard',
  'Eugen Leitl',
]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function walkDir(dir) {
  if (!existsSync(dir)) return [];
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walkDir(full));
    } else if (full.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

function parseFrontmatterManual(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: '' };

  const fmText = match[1];
  const body = match[2];

  // Extract quotes[] from YAML manually
  // Find the quotes: line, then collect all subsequent lines that start with
  // 2+ spaces (continuation) until a non-indented line or EOF.
  const quotes = [];
  const fmLines = fmText.split('\n');
  let qStart = -1;
  let qEnd = -1;
  for (let i = 0; i < fmLines.length; i++) {
    if (fmLines[i] === 'quotes:') {
      qStart = i + 1;
      qEnd = fmLines.length;
      for (let j = i + 1; j < fmLines.length; j++) {
        if (!/^\s/.test(fmLines[j])) {
          qEnd = j;
          break;
        }
      }
      break;
    }
  }
  if (qStart !== -1) {
    const quotesBlock = fmLines.slice(qStart, qEnd).join('\n');
    const entries = quotesBlock.split(/\n  - /).map(s => s.replace(/^  - /, '')).filter(Boolean);
    for (const entry of entries) {
      const lines = entry.split('\n').map(l => l.replace(/^    /, ''));
      const quote = {};
      for (const line of lines) {
        const kv = line.match(/^(\w+):\s*"?([^"]*)"?\s*$/);
        if (kv) {
          quote[kv[1]] = kv[2] === 'null' ? null : kv[2];
        }
      }
      if (quote.id) quotes.push(quote);
    }
  }

  return { frontmatter: { quotes }, body };
}

// ---------------------------------------------------------------------------
// AST Checks
// ---------------------------------------------------------------------------

// Detect legacy attribution prose that immediately precedes a blockquote.
// Returns array of { line: <1-based>, text, kind } objects. A "candidate" is
// a non-blockquote, non-html-comment, non-empty line whose next significant
// line (skipping empty lines and skippable HTML comments) is a blockquote.
// Among candidates, lines matching one of the legacy attribution shapes are
// flagged. See temp/0521_引用旧形式マイグレーション計画.md.
const JA_LEGACY_SUFFIXES = [
  /の投稿\s*[:：]\s*$/,
  /の書き込み\s*[:：]\s*$/,
  /の引用\s*[:：]\s*$/,
  /は次のように書いた\s*[:：]?\s*$/,
  /は次のように書いている\s*[:：。.]?\s*$/,
  /が書いた\s*[:：]\s*$/,        // "NAMEが書いた：" — Hushmail JA reply form
  /が書き込んだ\s*[:：]\s*$/,
  /が引用した\s*[:：]\s*$/,
];
const EN_LEGACY_SUFFIXES = [
  / wrote:\s*$/,
  / writes:\s*$/,
  /^Quoting [^\n]+:\s*$/,
  /^Lainaus [^\n]+:\s*$/,
  /^On [^,\n]+,[^\n]+ wrote:\s*$/,
];
const SPEAKER_HTML_RE = /^<!--\s*speaker:\s*(.+?)\s*-->$/;
const QUOTE_MARKER_HTML_RE = /^<!--\s*quote:\s*\w+\s*-->$/;
const SKIPPABLE_LINE_HTML_RE = /^<!--\s*(tone-skip|\/tone-skip|audit:quote-skip|narrator:)/;

function detectLegacyAttributionLines(body) {
  const lines = body.split('\n');
  const flagged = [];
  let inCode = false;
  // First pass: find every blockquote start line index
  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    if (raw.startsWith('```')) inCode = !inCode;
    if (inCode) continue;
    const t = raw.trim();
    if (t === '') continue;
    if (raw.startsWith('>')) continue;
    if (t.startsWith('<!--')) continue;

    // Find next significant line
    let nextIsBlockquote = false;
    for (let j = i + 1; j < lines.length; j++) {
      const r = lines[j];
      const rt = r.trim();
      if (rt === '') continue;
      if (rt.startsWith('<!--')) {
        // skip skippable HTML comments + speaker markers + quote markers
        if (SPEAKER_HTML_RE.test(rt) || QUOTE_MARKER_HTML_RE.test(rt) || SKIPPABLE_LINE_HTML_RE.test(rt)) continue;
        break;
      }
      if (r.startsWith('>')) {
        nextIsBlockquote = true;
      }
      break;
    }
    if (!nextIsBlockquote) continue;

    // Now this line is a candidate preceding a blockquote.
    let kind = null;
    for (const re of JA_LEGACY_SUFFIXES) {
      if (re.test(t)) { kind = 'ja-legacy-suffix'; break; }
    }
    if (!kind) {
      for (const re of EN_LEGACY_SUFFIXES) {
        if (re.test(t)) { kind = 'en-legacy-suffix'; break; }
      }
    }
    if (!kind) {
      // JA: "On <date>... NAME は次のように書いている。" Gmail-style
      if (/^\d{4}\s*年\s*\d{1,2}\s*月\s*\d{1,2}\s*日.*書いている。?$/.test(t)) {
        kind = 'ja-on-date-form';
      }
    }
    if (!kind) {
      // Bare NAME: / NAME： before blockquote (catches Ray's レイ・ディリンジャー：).
      // Tight guard to avoid prose-mid false positives like
      // "ここで起きた混乱を軽減できるだろう：" or
      // "他の議論にもかかわらず、現在の次のステップは：":
      //   - short (<= 25 chars)
      //   - ends with :/： only
      //   - no sentence-ending punctuation before the colon
      //   - no Japanese particles (は、が、を、に、で、と、の、も、より) which
      //     indicate the line is mid-sentence prose rather than a name attribution
      const beforeColon = t.replace(/[:：]\s*$/, '');
      if (t.length <= 25
        && /^[^[\(（\.。]+[:：]\s*$/.test(t)
        && !/[\.。]/.test(beforeColon)
        && !/[はがをにでとのもより]/.test(beforeColon)) {
        kind = 'bare-name-colon';
      }
    }
    if (kind) {
      flagged.push({ line: i + 1, text: t, kind });
    }
  }
  return flagged;
}

// Detect <!-- speaker: NAME --> followed by a blockquote without a
// <!-- quote: qN --> marker — "speaker-without-quote-marker". Catches
// two cases:
//   - speaker=unknown: original asker never identified (Feb 22 What's next?)
//   - speaker=<named>: speaker known but no quote marker / sourceEntryId
//     (e.g., Ray Nov 6 quoting James A. Donald with no primary entry yet,
//     Satoshi Nov 6 sni4 quoting James A. Donald with neither marker)
// Both warrant investigation: the primary entry should exist (create if
// missing), and the <!-- quote: qN --> marker + quotes[] entry should be
// added so the attribution renders as a real link.
function detectSpeakerWithoutQuoteMarker(body) {
  const lines = body.split('\n');
  const flagged = [];
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    const speakerMatch = t.match(SPEAKER_HTML_RE);
    if (!speakerMatch) continue;
    const speakerName = speakerMatch[1];
    // "reset" sets the speaker back to the entry author — by definition
    // resets the speaker context, not introducing a new quoted speaker.
    if (speakerName === 'reset') continue;

    // Find next significant line, allowing skippable HTML. If a quote
    // marker appears between this speaker and the upcoming blockquote,
    // this section is structurally covered.
    let nextBq = false;
    let sawQuoteMarkerAfter = false;
    for (let j = i + 1; j < lines.length; j++) {
      const r = lines[j];
      const rt = r.trim();
      if (rt === '') continue;
      if (rt.startsWith('<!--')) {
        if (QUOTE_MARKER_HTML_RE.test(rt)) { sawQuoteMarkerAfter = true; break; }
        if (SPEAKER_HTML_RE.test(rt) || SKIPPABLE_LINE_HTML_RE.test(rt)) continue;
        break;
      }
      if (r.startsWith('>')) nextBq = true;
      break;
    }
    if (!nextBq || sawQuoteMarkerAfter) continue;

    // Local "covered by chain" check: scan BACKWARD from this speaker
    // toward the nearest non-blockquote, non-comment prose line (= end
    // of an upstream quoted chain). If a <!-- quote: qN --> marker
    // appears between that prose boundary and the current speaker, the
    // current speaker is inside an already-attributed quote chain and
    // we don't flag it. If we hit prose before any quote marker, this
    // speaker starts a NEW quoted chain that needs its own marker.
    // EN/JA parity is the editor's responsibility when adding markers:
    // both sides must mirror, otherwise verify-translations.sh fails.
    let coveredByLocalChain = false;
    for (let j = i - 1; j >= 0; j--) {
      const r = lines[j];
      const rt = r.trim();
      if (rt === '') continue;
      if (rt.startsWith('<!--')) {
        if (QUOTE_MARKER_HTML_RE.test(rt)) { coveredByLocalChain = true; break; }
        // Speaker / skippable HTML comments don't break the chain
        continue;
      }
      if (r.startsWith('>')) continue; // still inside the upstream blockquote chain
      // Reached a non-blockquote prose line — end of chain, NOT covered
      break;
    }
    if (coveredByLocalChain) continue;

    const kind = speakerName === 'unknown'
      ? 'speaker-unknown-no-quote-marker'
      : 'speaker-named-no-quote-marker';
    flagged.push({ line: i + 1, text: t, kind, speaker: speakerName });
  }
  return flagged;
}

function checkFile(filePath, locale) {
  const content = readFileSync(filePath, 'utf-8');
  const { frontmatter, body } = parseFrontmatterManual(content);
  const quotes = frontmatter.quotes || [];
  const violations = [];
  const rel = path.relative(process.cwd(), filePath);

  // Scope: only entries authored BY Satoshi (author: "Satoshi Nakamoto").
  // The editorial rule is "when Satoshi quotes someone in his own
  // message, that quoted post should be in the Archive (linked via
  // sourceEntryId)." Non-Satoshi entries quoting each other — Ray
  // Dillinger quoting James A. Donald, Hal Finney quoting Wei Dai,
  // etc. — are outside the Archive's curation scope. Aftermath /
  // biography / analysis entries are editorial prose where "Hanyecz
  // recalled:" before a blockquote is natural narrative, not a legacy
  // attribution requiring structured conversion.
  //
  // Note: isSatoshi:true and even author:"Satoshi Nakamoto" include the
  // Satoshi biography stub and similar editorial entries. Filter to
  // primary-source types (mailing-list / correspondence / forum-post)
  // so only actual messages Satoshi sent are in scope. Editorial prose
  // in biographies / analyses / aftermath introducing a blockquote with
  // narrative attribution is the prose style §3 of STYLE_GUIDE_JA.md
  // explicitly preserves.
  const isSatoshiPrimarySource = /^author:\s*"Satoshi Nakamoto"/m.test(content)
    && /^type:\s*"(mailing-list|correspondence|forum-post)"/m.test(content);
  const isSatoshiAuthored = isSatoshiPrimarySource;
  if (isSatoshiAuthored) {
    const legacyLines = detectLegacyAttributionLines(body);
    for (const m of legacyLines) {
      violations.push({
        file: rel,
        check: 'legacy-attribution-prose',
        level: 'warn',
        msg: `Line ${m.line}: legacy attribution prose "${m.text}" (${m.kind}) precedes a blockquote — convert to <!-- quote: qN --> + quotes[] entry per STYLE_GUIDE_JA.md §「構造化された引用メタデータ」`,
      });
    }
    const speakerCandidates = detectSpeakerWithoutQuoteMarker(body);
    for (const m of speakerCandidates) {
      const checkKind = m.kind === 'speaker-unknown-no-quote-marker'
        ? 'speaker-unknown-candidate'
        : 'speaker-named-no-quote-marker';
      const detail = m.kind === 'speaker-unknown-no-quote-marker'
        ? 'investigate whether the original poster can be identified and a primary entry created'
        : `speaker "${m.speaker}" precedes a blockquote without a quote marker — add <!-- quote: qN --> + quotes[] (creating the source primary entry if missing)`;
      violations.push({
        file: rel,
        check: checkKind,
        level: 'warn',
        msg: `Line ${m.line}: ${detail} (0521 plan)`,
      });
    }
  }

  if (quotes.length === 0) {
    // Check for legacy patterns in files without quotes[]
    // Only flag [Quote from:] — "wrote:" in prose is too common for false positives
    if (/\[Quote from:/.test(body)) {
      violations.push({
        file: rel,
        check: 'legacy-pattern',
        level: 'error',
        msg: 'Legacy [Quote from:] attribution found (no quotes[] in frontmatter)',
      });
    }
    return violations;
  }

  // Parse body into AST
  const tree = unified().use(remarkParse).parse(body);

  // Collect all quote marker IDs from AST
  const markerIds = [];
  visit(tree, 'html', (node) => {
    const match = node.value.trim().match(QUOTE_MARKER_RE);
    if (match) markerIds.push(match[1]);
  });

  // Deep search inside blockquotes too
  function collectMarkers(node) {
    if (node.type === 'html') {
      const m = node.value.trim().match(QUOTE_MARKER_RE);
      if (m && !markerIds.includes(m[1])) markerIds.push(m[1]);
    }
    if (node.children) {
      for (const child of node.children) {
        collectMarkers(child);
      }
    }
  }
  collectMarkers(tree);

  // 1. Marker → quotes[] integrity
  for (const mid of markerIds) {
    if (!quotes.find(q => q.id === mid)) {
      violations.push({
        file: rel,
        check: 'marker-no-quote',
        level: 'error',
        msg: `Body marker "${mid}" has no matching entry in frontmatter quotes[]`,
      });
    }
  }

  // 2. quotes[] → marker integrity
  for (const q of quotes) {
    if (!markerIds.includes(q.id)) {
      violations.push({
        file: rel,
        check: 'quote-no-marker',
        level: 'error',
        msg: `Frontmatter quote "${q.id}" has no matching marker in body`,
      });
    }
  }

  // 3. Parent integrity
  const quoteIds = new Set(quotes.map(q => q.id));
  for (const q of quotes) {
    if (q.parent && !quoteIds.has(q.parent)) {
      violations.push({
        file: rel,
        check: 'parent-missing',
        level: 'error',
        msg: `Quote "${q.id}" references parent "${q.parent}" which does not exist`,
      });
    }
  }

  // 4. Parent non-circular
  for (const q of quotes) {
    const seen = new Set([q.id]);
    let current = q;
    while (current?.parent) {
      if (seen.has(current.parent)) {
        violations.push({
          file: rel,
          check: 'parent-circular',
          level: 'error',
          msg: `Circular parent chain detected for quote "${q.id}"`,
        });
        break;
      }
      seen.add(current.parent);
      current = quotes.find(qq => qq.id === current.parent);
    }
  }

  // 4b. personSlug missing for real person names
  // If quote.person matches a known real name but personSlug is missing,
  // JA pages will display raw English instead of katakana.
  for (const q of quotes) {
    if (!q.person) continue;
    if (q.personSlug) continue;
    if (REAL_NAMES_REQUIRING_SLUG.has(q.person)) {
      violations.push({
        file: rel,
        check: 'person-slug-missing',
        level: 'warn',
        msg: `Quote "${q.id}" has person "${q.person}" but no personSlug. JA will not show katakana.`,
      });
    }
  }

  // 5. Blockquote reachability (check that markers have an associated blockquote)
  //
  // A `<!-- quote: qN -->` marker is "reachable" if a blockquote follows it,
  // skipping over speaker/quote/tone-skip HTML comments. Two cases:
  //
  //   (a) Same-parent: a sibling blockquote later in the same parent.
  //   (b) Ancestor fallback: when the marker is the last significant child
  //       of its parent blockquote (because the email was nested), look at
  //       the next sibling of the *parent* blockquote in the grandparent,
  //       and so on up the chain. This handles nested email reply quoting
  //       where a `<!-- speaker: -->` HTML comment between the marker's
  //       blockquote and the next deeper quote breaks the AST nesting.
  function hasBlockquoteDescendant(node) {
    if (node.type === 'blockquote') return true;
    if (node.children) {
      for (const child of node.children) {
        if (hasBlockquoteDescendant(child)) return true;
      }
    }
    return false;
  }

  const SKIPPABLE_HTML_RE = /^<!--\s*(speaker:|quote:|tone-skip|\/tone-skip|audit:quote-skip)/;

  // Look for a reachable blockquote starting from index `startIdx + 1` in
  // `parent.children`, returning true if found (skipping skippable HTML).
  // If we reach the end without finding one, walk up `ancestors` and look
  // at the siblings after each ancestor's position in its own parent.
  function findFollowingBlockquote(parent, startIdx, ancestors) {
    // Phase 1: scan rest of current parent's children
    for (let j = startIdx + 1; j < parent.children.length; j++) {
      const sib = parent.children[j];
      if (sib.type === 'blockquote') return true;
      if (sib.type === 'html' && SKIPPABLE_HTML_RE.test(sib.value.trim())) continue;
      return false; // non-skippable, non-blockquote node blocks reachability
    }
    // Phase 2: walked off the end of `parent`. Walk up ancestors.
    for (let a = ancestors.length - 1; a >= 0; a--) {
      const { parent: ancParent, index: ancIdx } = ancestors[a];
      for (let j = ancIdx + 1; j < ancParent.children.length; j++) {
        const sib = ancParent.children[j];
        if (sib.type === 'blockquote') return true;
        if (sib.type === 'html' && SKIPPABLE_HTML_RE.test(sib.value.trim())) continue;
        return false;
      }
      // else: also walked off this ancestor's end, continue walking up
    }
    return false;
  }

  function checkBlockquoteReachable(node, ancestors = []) {
    if (!node.children) return;
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      if (child.type === 'html') {
        const m = child.value.trim().match(QUOTE_MARKER_RE);
        if (m) {
          const found = findFollowingBlockquote(node, i, ancestors);
          if (!found) {
            violations.push({
              file: rel,
              check: 'no-blockquote',
              level: 'error',
              msg: `Quote marker "${m[1]}" has no reachable blockquote`,
            });
          }
        }
      }
      // Recurse into blockquotes to check nested markers, tracking ancestor chain
      if (child.type === 'blockquote') {
        checkBlockquoteReachable(child, [...ancestors, { parent: node, index: i }]);
      }
    }
  }
  checkBlockquoteReachable(tree);

  // 6. Legacy [Quote from:] in body (even with quotes[])
  // Only check for [Quote from:] — "wrote:" in prose is a false positive
  if (/\[Quote from:/.test(body)) {
    violations.push({
      file: rel,
      check: 'legacy-with-quotes',
      level: 'error',
      msg: 'Legacy [Quote from:] attribution found in body alongside quotes[]',
    });
  }

  return violations;
}

// ---------------------------------------------------------------------------
// EN/JA sync check
// ---------------------------------------------------------------------------

function checkEnJaSync(enFile) {
  const rel = path.relative(enDir, enFile);
  const jaFile = path.join(jaDir, rel);
  const violations = [];

  if (!existsSync(jaFile)) return violations;

  const enContent = readFileSync(enFile, 'utf-8');
  const jaContent = readFileSync(jaFile, 'utf-8');
  const enParsed = parseFrontmatterManual(enContent);
  const jaParsed = parseFrontmatterManual(jaContent);

  const enIds = new Set((enParsed.frontmatter.quotes || []).map(q => q.id));
  const jaIds = new Set((jaParsed.frontmatter.quotes || []).map(q => q.id));

  if (enIds.size === 0 && jaIds.size === 0) return violations;

  for (const id of enIds) {
    if (!jaIds.has(id)) {
      violations.push({
        file: path.relative(process.cwd(), jaFile),
        check: 'en-ja-sync',
        level: 'error',
        msg: `EN has quote "${id}" but JA does not`,
      });
    }
  }
  for (const id of jaIds) {
    if (!enIds.has(id)) {
      violations.push({
        file: path.relative(process.cwd(), jaFile),
        check: 'en-ja-sync',
        level: 'error',
        msg: `JA has quote "${id}" but EN does not`,
      });
    }
  }

  return violations;
}

// ---------------------------------------------------------------------------
// Source-entry-id resolution check
//
// Editorial standard: a thread page is a complete record of the
// conversation. When entry A's body quotes a message by person X, the
// quoted message itself should be an entry of its own in the Archive
// (typically a sibling under the same thread directory), and entry A's
// `quotes[].sourceEntryId` should point to it. Otherwise the attribution
// renders as a link to X's biography, not to the post — the label reads
// "Xの投稿 / Quote from: X" but the destination is the bio. The bio link
// is a fallback, not the intended behavior.
//
// Three failure modes are flagged:
//
//   1. **missing-source-entry** — quote has personSlug (+ date) but no
//      sourceEntryId, AND no candidate sibling exists in the same thread
//      that matches by personSlug + date. The quoted post is absent from
//      the Archive. Either the entry needs to be added, or the quote
//      needs an explicit `sourceEntryId` pointing somewhere outside the
//      thread (in which case set it to silence this warning).
//
//   2. **source-entry-id-missing** — quote has no `sourceEntryId` but a
//      matching same-day sibling DOES exist in the same thread. Easy fix:
//      add `sourceEntryId` pointing to the sibling.
//
//   3. **source-entry-id-ambiguous** — quote has no `sourceEntryId` and
//      MULTIPLE same-day siblings by the same person exist. Manual
//      disambiguation required.
//
// All three are level "warn" (do not break the build) because the
// rendering still produces a working page; the bio-fallback is just
// misleading attribution, not a broken page.
// ---------------------------------------------------------------------------

function parseEntryMeta(content) {
  const dateMatch = content.match(/^date:\s*['"]?(\S+?)['"]?\s*$/m);
  const date = dateMatch ? dateMatch[1] : null;

  const slugs = [];
  // Capture the participants block: from `participants:` until the next
  // top-level YAML key (a line starting with a non-space).
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (fmMatch) {
    const fmLines = fmMatch[1].split('\n');
    let inParticipants = false;
    for (const line of fmLines) {
      if (line === 'participants:') { inParticipants = true; continue; }
      if (inParticipants) {
        if (!/^\s/.test(line)) { inParticipants = false; continue; }
        const m = line.match(/^\s+slug:\s*"?([\w-]+)"?\s*$/);
        if (m) slugs.push(m[1]);
      }
    }
  }
  return { date, slugs };
}

function checkSourceEntryIds(enFiles) {
  const violations = [];

  // Index: dir → [{entryId, slugs, date}]
  const dirIndex = new Map();
  for (const f of enFiles) {
    const content = readFileSync(f, 'utf-8');
    const meta = parseEntryMeta(content);
    if (!meta.date || meta.slugs.length === 0) continue;
    const rel = path.relative(enDir, f);
    const entryId = rel.replace(/\.md$/, '');
    const dir = path.dirname(rel);
    if (!dirIndex.has(dir)) dirIndex.set(dir, []);
    dirIndex.get(dir).push({ entryId, slugs: meta.slugs, date: meta.date });
  }

  for (const f of enFiles) {
    const content = readFileSync(f, 'utf-8');
    // Scope: only entries authored by Satoshi. The editorial rule is
    // narrower than "every quote must have a source entry" — it's "when
    // Satoshi quotes someone in his own message, that quoted post should
    // be in the Archive." Non-Satoshi entries quoting each other are
    // outside the Archive's curation scope.
    if (!/^isSatoshi:\s*true/m.test(content)) continue;

    const { frontmatter } = parseFrontmatterManual(content);
    const quotes = frontmatter.quotes || [];
    if (quotes.length === 0) continue;

    const rel = path.relative(enDir, f);
    const dir = path.dirname(rel);
    const siblings = dirIndex.get(dir) || [];

    for (const q of quotes) {
      if (!q.personSlug) continue;
      if (q.sourceEntryId) continue; // already set — no violation
      if (!q.date) {
        // Satoshi entry quotes someone, but the quote has no date or
        // sourceEntryId. Without a date we can't auto-find a match;
        // editor must either add `date` (so the check can verify the
        // post is in the Archive) or set `sourceEntryId` directly.
        violations.push({
          file: path.relative(process.cwd(), f),
          check: 'missing-source-entry',
          level: 'error',
          msg: `Satoshi-authored entry quotes ${q.person ?? q.personSlug} but the quote has neither date nor sourceEntryId. Add the quote.date (so the source post can be located in the Archive), or set sourceEntryId directly. Otherwise the attribution falls back to the participant biography page.`,
        });
        continue;
      }

      const qDay = q.date.slice(0, 10);
      const selfId = rel.replace(/\.md$/, '');

      const candidates = siblings.filter(s =>
        s.slugs.includes(q.personSlug) &&
        s.date.slice(0, 10) === qDay &&
        s.entryId !== selfId
      );

      if (candidates.length === 0) {
        // The quoted source is not in this thread. Either the entry is
        // missing from the Archive (the intended outcome of this check)
        // or sourceEntryId should point to an entry under a different
        // directory and is simply unset.
        violations.push({
          file: path.relative(process.cwd(), f),
          check: 'missing-source-entry',
          level: 'error',
          msg: `Quote "${q.id}" (person: ${q.person ?? q.personSlug}, date: ${q.date}) has no matching entry in the same thread "${dir}". Either add the quoted post as a sibling entry, or set sourceEntryId explicitly if it lives elsewhere.`,
        });
      } else if (candidates.length === 1) {
        violations.push({
          file: path.relative(process.cwd(), f),
          check: 'source-entry-id-missing',
          level: 'error',
          msg: `Quote "${q.id}" (person: ${q.person ?? q.personSlug}, date: ${q.date}) has a matching thread entry "${candidates[0].entryId}" — set sourceEntryId so the attribution links to the post, not the biography.`,
        });
      } else {
        violations.push({
          file: path.relative(process.cwd(), f),
          check: 'source-entry-id-ambiguous',
          level: 'error',
          msg: `Quote "${q.id}" (person: ${q.person ?? q.personSlug}, date: ${q.date}) has ${candidates.length} same-day sibling candidates in the same thread: ${candidates.map(c => c.entryId).join(', ')}. Set sourceEntryId explicitly.`,
        });
      }
    }
  }

  return violations;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const enFiles = walkDir(enDir);
const jaFiles = walkDir(jaDir);

const allViolations = [];

for (const f of enFiles) {
  allViolations.push(...checkFile(f, 'en'));
}
for (const f of jaFiles) {
  allViolations.push(...checkFile(f, 'ja'));
}
for (const f of enFiles) {
  allViolations.push(...checkEnJaSync(f));
}

allViolations.push(...checkSourceEntryIds(enFiles));

const errors = allViolations.filter(v => v.level === 'error');
const warnings = allViolations.filter(v => v.level === 'warn');

if (errors.length === 0 && warnings.length === 0) {
  console.log('✓ All quote structures are valid.');
  process.exit(0);
}

if (warnings.length > 0) {
  console.log(`⚠ ${warnings.length} warning(s):\n`);
  for (const w of warnings) {
    console.log(`  [${w.check}] ${w.file}`);
    console.log(`    ${w.msg}\n`);
  }
}

if (errors.length > 0) {
  console.error(`✗ ${errors.length} error(s):\n`);
  for (const e of errors) {
    console.error(`  [${e.check}] ${e.file}`);
    console.error(`    ${e.msg}\n`);
  }
  process.exit(1);
}

process.exit(0);
