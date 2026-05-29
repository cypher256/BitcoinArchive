#!/usr/bin/env node
/**
 * audit-en-inline-in-ja.mjs
 *
 * Detect English text embedded INLINE in JA body prose (not in `> ...`
 * blockquotes — those are handled by TODO #1's audit-untranslated-ja-
 * blockquotes.mjs and must not be touched here).
 *
 * Scope: src/data/translations/ja/**\/*.md, excluding:
 *  - frontmatter (between leading `---` ... `---`)
 *  - fenced code blocks (```...```)
 *  - inline code (single backticks)
 *  - lines starting with `>` (block quote — TODO #1's domain)
 *  - HTML comments (<!-- ... -->)
 *  - URL targets inside [text](url) — only `url` is excluded, `text` stays
 *
 * 8 inline-quote patterns, all requiring inner content to START with
 * `[A-Za-z]` (per TODO §検出ロジック). The English-dominance check
 * (≥4 consecutive ASCII letters AND ASCII letter count > CJK char
 * count) is applied to the captured inner content:
 *
 *   1.  *"English ..."*        — italic + double quote
 *   2.  *'English ...'*        — italic + single quote
 *   3.  **English ...**        — bold
 *   4.  *English ...*          — italic only
 *   5.  「English ...」        — kagi-kakko (Japanese single brackets)
 *   6.  『English ...』        — nijuu-kagi (Japanese double brackets)
 *   7.  "English ..."          — straight double quote
 *   8.  'English ...'          — straight single quote
 *
 * Output: temp/en-inline-in-ja.md (file-by-file listing).
 *
 * Line numbers in the report are **original file line numbers** —
 * the source is masked in-place (excluded regions replaced with
 * spaces, newlines preserved), so character offsets and line numbers
 * stay correct.
 *
 * For each hit the script suggests a tentative auto-classification:
 *
 *   A      — natural-language sentence (candidate for JA `「」` translation)
 *   B-title — title-like (candidate for JA `『』` rewrite or EN retention)
 *   B-id    — identifier-like (candidate for inline `code` rewrap)
 *   C       — unclassified, needs human review
 *
 * IMPORTANT: A/B-title/B-id/C are TENTATIVE labels for human triage.
 * A is NOT a confirmed translation target. The TODO requires a human
 * pass (stage 2) before any content file is modified. Treat the
 * report as a candidate queue, not an action list.
 *
 * Usage:
 *   node scripts/audit-en-inline-in-ja.mjs            # writes temp/en-inline-in-ja.md
 *   node scripts/audit-en-inline-in-ja.mjs --summary  # console summary only
 */

import { readdir, readFile, writeFile, mkdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const JA_ROOT = 'src/data/translations/ja';
const REPORT_PATH = 'temp/en-inline-in-ja.md';

// ---------------------------------------------------------------------------
// Pattern definitions. Order matters: longer / more specific patterns
// are tried first. Inner content must START with `[A-Za-z]` per TODO
// §検出ロジック (prevents false positives like `*サイファー...*`).
// ---------------------------------------------------------------------------
const PATTERNS = [
  { name: '*"..."*', re: /(?<![*\w])\*"([A-Za-z][^"*\n]{1,})"\*/g },
  { name: "*'...'*", re: /(?<![*\w])\*'([A-Za-z][^'*\n]{1,})'\*/g },
  { name: '**...**', re: /\*\*([A-Za-z][^*\n]{1,})\*\*/g },
  { name: '*...*', re: /(?<![*\w])\*([A-Za-z][^*\n]{1,})\*(?!\*)/g },
  { name: '「」', re: /「([A-Za-z][^「」\n]{1,})」/g },
  { name: '『』', re: /『([A-Za-z][^『』\n]{1,})』/g },
  { name: '"..."', re: /"([A-Za-z][^"\n]{1,})"/g },
  { name: "'...'", re: /'([A-Za-z][^'\n]{1,})'/g },
];

// ---------------------------------------------------------------------------
// English-dominance check on captured inner content.
//
// A captured string is English-dominant when:
//   - It contains a run of ≥4 ASCII letters (anchor)
//   - It contains ≥3 English-word tokens (start-with-letter + 2+ letters)
//   - OR (pure English with no CJK chars and ≥4 ASCII letters)
//
// This rejects JA-dominant strings with embedded ASCII proper nouns
// (e.g. `BDB → LevelDB 移行` should NOT be flagged as English).
// ---------------------------------------------------------------------------
const CJK_RE = /[぀-ゟ゠-ヿ一-鿿]/g;
const ASCII_LETTERS_RE = /[A-Za-z]/g;
const FOUR_PLUS_ASCII_RUN_RE = /[A-Za-z]{4,}/;
const ENGLISH_WORD_RE = /^[A-Za-z][A-Za-z'.,\-]*$/;

function isEnglishInner(s) {
  if (!FOUR_PLUS_ASCII_RUN_RE.test(s)) return false;
  const words = s.trim().split(/\s+/).filter(Boolean);
  const englishWords = words.filter(
    (w) => ENGLISH_WORD_RE.test(w) && /[A-Za-z]{2,}/.test(w),
  ).length;
  const asciiCount = (s.match(ASCII_LETTERS_RE) || []).length;
  const cjkCount = (s.match(CJK_RE) || []).length;

  if (englishWords >= 3) return true;
  // Short pure-English phrase (no CJK present) — still English
  if (cjkCount === 0 && asciiCount >= 4) return true;
  return false;
}

// ---------------------------------------------------------------------------
// In-place source masking. Excluded regions are replaced with spaces
// while newlines are preserved, so character offsets and line numbers
// in the masked string match the original file exactly.
// ---------------------------------------------------------------------------
function maskSource(text) {
  const chars = text.split('');

  function maskRange(start, end) {
    for (let i = start; i < end && i < chars.length; i++) {
      if (chars[i] !== '\n') chars[i] = ' ';
    }
  }

  // 1. Frontmatter
  if (text.startsWith('---\n')) {
    const close = text.indexOf('\n---\n', 4);
    if (close !== -1) maskRange(0, close + 5);
  }

  // 2. Fenced code blocks
  let m;
  const fenceRe = /```[\s\S]*?```/g;
  while ((m = fenceRe.exec(text)) !== null) {
    maskRange(m.index, m.index + m[0].length);
  }

  // 3. HTML comments
  const htmlRe = /<!--[\s\S]*?-->/g;
  while ((m = htmlRe.exec(text)) !== null) {
    maskRange(m.index, m.index + m[0].length);
  }

  // 4. Inline code (single backticks, no newlines)
  const inlineCodeRe = /`[^`\n]+`/g;
  while ((m = inlineCodeRe.exec(text)) !== null) {
    maskRange(m.index, m.index + m[0].length);
  }

  // 5. URL targets inside [text](url) — keep `]()` structure but
  //    mask the URL between the parens so any `*...*` etc. inside
  //    the URL isn't detected.
  const urlRe = /\]\(([^)\n]+)\)/g;
  while ((m = urlRe.exec(text)) !== null) {
    maskRange(m.index + 2, m.index + 2 + m[1].length);
  }

  // 6. Lines starting with `>` (blockquote, TODO #1's domain)
  let pos = 0;
  while (pos < text.length) {
    const lineEnd = text.indexOf('\n', pos);
    const end = lineEnd === -1 ? text.length : lineEnd;
    if (/^\s*>/.test(text.slice(pos, end))) {
      maskRange(pos, end);
    }
    if (lineEnd === -1) break;
    pos = lineEnd + 1;
  }

  return chars.join('');
}

// ---------------------------------------------------------------------------
// Auto-classification heuristics.
//
// Goal: shrink A to a high-quality candidate set for human triage.
// Demote code/log/UI/title-like strings to B-* so the manual A pass
// stays focused. False-negatives (a true A demoted to B/C) are
// preferable to false-positives (B/C surfacing as A).
//
// Reference: TODO §「A から外すべき条件」 lists the categories below.
// ---------------------------------------------------------------------------

// B-id: code identifiers, log/error/exception vocabulary, std lib,
// SVN/GitHub references, common C/C++ keywords, format specifiers,
// hex literals, file paths. Also matches Python errors, formula
// notation (HTML <sub>/<sup>, math operators), and template-string
// patterns (key=<...>).
const CODE_LOG_VOCAB_RE = new RegExp(
  [
    '\\b(?:commit|SVN|svn|GitHub|github|git\\s+\\w+)\\b',
    '\\bstd::', // std::bad_alloc, std::string etc.
    '\\bw[xX][A-Z][A-Za-z]+\\b', // wxString, wxWindow
    '\\bC[A-Z][a-z][A-Za-z]+\\b', // CBlock, CTransaction, CWallet, CScript
    '\\b(?:printf|sprintf|fprintf|nullptr|inline\\s+(?:void|int|bool)|throw|catch|assert|errno|terminate\\s+called)\\b',
    '\\b(?:Exception|FATAL|DEBUG|TRACE)\\b',
    '\\b(?:bitcoind|bitcoin\\.exe|wallet\\.dat|db\\.log|blk\\d+\\.dat)\\b',
    '0x[0-9a-fA-F]{4,}', // hex error code / address
    '%[dsxulif]', // printf format specifier
    '\\bnPriority\\b',
    // Python / generic runtime errors
    '\\b(?:ImportError|ModuleNotFoundError|RuntimeError|TypeError|ValueError|KeyError|AttributeError|NameError|IndexError|SyntaxError|DLL\\s+load\\s+failed)\\b',
    // Math / formula notation
    '<sub>|<sup>',
    '⋅|\\|\\|', // dot product, concat
    '\\bmod\\s+n\\b',
    '\\bhash\\([^)]+\\)', // hash(...)
    '\\bint\\([^)]+\\)', // int(...)
    'lift_x|tagged_hash|compact_size|TapBranch|TapLeaf|BIP0340',
    // Template / config string patterns: key=<value> or KEY=<...>
    '\\w+\\s*=\\s*<[^>]+>',
  ].join('|'),
);

// B-id: short proper-name patterns containing initial (`X.` or `St.`)
// or middle initial (`First J. Last`).
//   E.g. "St. Jude", "Mr. Smith"
const PROPER_NAME_RE = /^[A-Z][a-z]*\.\s+[A-Z]\w*(?:\.\s+[A-Z]\w*|\s+[A-Z]\w*)*$/;
//   E.g. "Constance J. Wells", "John F. Kennedy"
const MIDDLE_INITIAL_NAME_RE = /^[A-Z][a-z]+\s+[A-Z]\.\s+[A-Z][a-z]+$/;

// B-id: short SVN / commit-style action message (verb-led, ≤8 words).
//   E.g. "Add a built-in SHA256/SHA512 implementation", "get external ip from irc"
const COMMIT_VERB_RE =
  /^(?:Add|Remove|Implement|Update|Fix|Bump|Refactor|Replace|Move|Rename|Drop|Disable|Enable|Switch|Convert|Use|get)\b/;

// B-title: title with mid-string colon (`Subtitle: explanation`).
//   E.g. "Bitcoin Core v0.1: a code walkthrough"
const TITLE_WITH_COLON_RE = /^[A-Z][^.!?]*:\s+[A-Za-z]/;

// B-title: short citation fragment ending with `,` (paper title in a
// reference list). E.g. "How to time-stamp a digital document,".
const CITATION_FRAGMENT_RE = /^[A-Z][^.!?]{4,}[,.]$/;

// B-id: log / error / warning / instruction message prefixes
const LOG_ERROR_PREFIX_RE =
  /^(?:Warning|Error|FATAL|DEBUG|INFO|TRACE|Cannot|Unable to|Could not|Failed to|Please\s+(?:upgrade|install|configure|wait|check|enter))[\s:,]/i;

// B-id: known UI label / event / status phrases (verbatim or stem match).
// Add to this list as new false-positives are discovered.
const UI_LABEL_RE = new RegExp(
  [
    '^from\\s+where\\s+I\\s+am',
    '^Received\\s+with',
    '^Generated(?:\\s+-|\\s*\\(|$|\\s+matures)',
    '^Your\\s+Address',
    '^payment\\s+to\\b',
    '^Start\\s+\\w+\\s+on\\s+window\\s+system\\s+startup',
    '^we\\s+accept\\s+Bitcoin',
    '^Development\\s+has\\s+moved\\s+to',
    '^Disable\\s+\\w+\\s+(?:feature\\s+)?for\\s+now',
    '^create\\s+and\\s+edit\\s+\\w+\\s+items?',
    '^tabs\\s+for\\s+',
    '^This\\s+software\\s+is\\s+in\\s+beta',
    '^Securely\\s+using\\s+',
    '^The\\s+application\\s+was\\s+unable',
    '^Recipient\\s+is\\s+not\\s+accepting',
    '^From:\\s+\\w+',
    '^Global\\s+chain\\s+is\\s+currently',
    '^Generated\\s*-\\s*Warning',
    '^Bitcoin\\s+v\\d', // version label
    '^Minimize\\s+to\\s+the\\s+tray',
    '^Send\\s+(?:and\\s+)?receive',
    '^Click\\s+(?:OK|Cancel|here)',
    '^The\\s+block\\s+was\\s+not\\s+received',
  ].join('|'),
  'i',
);

// B-title: email subject / release / version prefixes
const SUBJECT_TITLE_PREFIX_RE =
  /^(?:Re:|Fwd?:|FW:|Version\b|Release\b|Update\b|Patch\b|Released\b|Beta\b|Alpha\b|RC\d|Bitcoin\s+v\d|BIP[\s-]?\d+\s+[A-Z])/i;

// B-title: short questions (≤10 words ending in `?`) usually = forum/article titles
const SHORT_QUESTION_RE = /\?\s*$/;

function classify(inner) {
  const trimmed = inner.trim();
  const words = trimmed.split(/\s+/).filter(Boolean);

  // B-id: no internal whitespace, looks like an identifier
  if (!/\s/.test(trimmed) && /^[A-Za-z][A-Za-z0-9._\-]*$/.test(trimmed)) {
    return { tag: 'B-id', reason: 'identifier-like (no spaces)' };
  }

  // B-id: code / log / error vocabulary
  if (CODE_LOG_VOCAB_RE.test(trimmed)) {
    return { tag: 'B-id', reason: 'code/log/error vocabulary' };
  }
  if (LOG_ERROR_PREFIX_RE.test(trimmed)) {
    return { tag: 'B-id', reason: 'log/error/instruction prefix' };
  }
  if (UI_LABEL_RE.test(trimmed)) {
    return { tag: 'B-id', reason: 'UI label / status message' };
  }
  if (PROPER_NAME_RE.test(trimmed) || MIDDLE_INITIAL_NAME_RE.test(trimmed)) {
    return { tag: 'B-id', reason: 'proper name with initials' };
  }
  if (COMMIT_VERB_RE.test(trimmed) && words.length <= 8 && !/[.!?]$/.test(trimmed)) {
    return { tag: 'B-id', reason: 'commit-style action message' };
  }

  // B-title: subject / release / version prefix
  if (SUBJECT_TITLE_PREFIX_RE.test(trimmed)) {
    return { tag: 'B-title', reason: 'subject/release/version prefix' };
  }

  // B-title: title with mid-string colon ("Title: subtitle")
  if (TITLE_WITH_COLON_RE.test(trimmed) && words.length <= 14) {
    return { tag: 'B-title', reason: 'title with mid-colon' };
  }

  // B-title: short question (≤10 words ending in `?`) — likely a forum/article title
  if (SHORT_QUESTION_RE.test(trimmed) && words.length <= 10) {
    return { tag: 'B-title', reason: 'short question (likely title)' };
  }

  // B-title: citation fragment ending in `,` (paper title in reference list)
  if (CITATION_FRAGMENT_RE.test(trimmed) && words.length <= 12) {
    return { tag: 'B-title', reason: 'citation fragment (ends with comma/period)' };
  }

  // B-id: JA-dominant content with embedded English proper nouns / code.
  // If the inner has many CJK chars, the line is JA-mainline with EN
  // fragments — not an English quote to translate.
  const cjkCount = (trimmed.match(CJK_RE) || []).length;
  if (cjkCount >= 5) {
    return { tag: 'B-id', reason: 'JA-dominant with EN fragments' };
  }

  // B-title: 2..14 words, majority capitalized, no mid-sentence period
  if (words.length >= 2 && words.length <= 14) {
    const capRatio = words.filter((w) => /^[A-Z]/.test(w)).length / words.length;
    const hasMidPeriod = /\.\s+[A-Z]/.test(trimmed);
    if (capRatio >= 0.5 && !hasMidPeriod) {
      return { tag: 'B-title', reason: `${words.length}-word title-case` };
    }
  }

  // A: sentence-like prose
  if (
    /\b(we|i|you|they|the|this|that|when|if|because|with|for)\b/i.test(trimmed) ||
    /\.\s+[A-Z]/.test(trimmed) ||
    words.length >= 5
  ) {
    return { tag: 'A', reason: 'sentence-like prose' };
  }

  return { tag: 'C', reason: 'short fragment, manual review' };
}

// ---------------------------------------------------------------------------
// Walker.
// ---------------------------------------------------------------------------
async function walk(dir) {
  const out = [];
  const ents = await readdir(dir, { withFileTypes: true });
  for (const e of ents) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.isFile() && e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

function lineNumberOf(text, offset) {
  let n = 1;
  for (let i = 0; i < offset && i < text.length; i++) {
    if (text[i] === '\n') n++;
  }
  return n;
}

// ---------------------------------------------------------------------------
// Main.
// ---------------------------------------------------------------------------
const SUMMARY_ONLY = process.argv.includes('--summary');

const files = await walk(JA_ROOT);
files.sort();

const perFile = new Map();
const patternCounts = Object.fromEntries(PATTERNS.map((p) => [p.name, 0]));
const tagCounts = { A: 0, 'B-title': 0, 'B-id': 0, C: 0 };

for (const file of files) {
  const raw = await readFile(file, 'utf8');
  const masked = maskSource(raw);

  // Dedup: nested matches attributed only to outermost
  const claimed = [];
  function overlaps(s, e) {
    for (const [cs, ce] of claimed) {
      if (s < ce && e > cs) return true;
    }
    return false;
  }

  for (const { name, re } of PATTERNS) {
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(masked)) !== null) {
      const start = m.index;
      const end = m.index + m[0].length;
      const inner = m[1];
      if (!isEnglishInner(inner)) continue;
      if (overlaps(start, end)) continue;
      claimed.push([start, end]);
      const cls = classify(inner);
      patternCounts[name]++;
      tagCounts[cls.tag]++;
      const ln = lineNumberOf(masked, start);
      const rel = relative('.', file);
      if (!perFile.has(rel)) perFile.set(rel, []);
      perFile.get(rel).push({
        pattern: name,
        inner: inner.trim().slice(0, 120),
        tag: cls.tag,
        reason: cls.reason,
        line: ln,
        offset: start,
      });
    }
  }
}

const totalHits = Object.values(patternCounts).reduce((a, b) => a + b, 0);
const totalFiles = perFile.size;

const SUMMARY = [];
SUMMARY.push(`# en-inline-in-ja audit\n`);
SUMMARY.push(`Generated by \`scripts/audit-en-inline-in-ja.mjs\`.`);
SUMMARY.push(`Scope: ${JA_ROOT}/**/*.md. Excludes frontmatter, fenced code blocks, inline code, \`>\` blockquote lines, HTML comments, URL targets.\n`);
SUMMARY.push(`Line numbers are **original file line numbers** (source is masked in-place with newlines preserved).\n`);
SUMMARY.push(`**Total hits**: ${totalHits} across ${totalFiles} files.\n`);
SUMMARY.push(`> **Important**: A/B-title/B-id/C are **tentative auto-labels for human triage**, NOT confirmed actions. \`A\` is a candidate for translation, not a confirmed translation target. The TODO requires a human review pass (stage 2) before any file is modified. Treat this report as a candidate queue.\n`);

SUMMARY.push(`## By pattern\n`);
SUMMARY.push(`| Pattern | Count |`);
SUMMARY.push(`|---|---:|`);
for (const { name } of PATTERNS) {
  SUMMARY.push(`| \`${name}\` | ${patternCounts[name]} |`);
}
SUMMARY.push('');

SUMMARY.push(`## By auto-classification (tentative)\n`);
SUMMARY.push(`| Tag | Count | Meaning (human still confirms) |`);
SUMMARY.push(`|---|---:|---|`);
SUMMARY.push(`| A | ${tagCounts['A']} | sentence-like prose → candidate for JA \`「…」\` translation |`);
SUMMARY.push(`| B-title | ${tagCounts['B-title']} | title-like → candidate for JA \`『…』\` (or keep EN if a proper noun) |`);
SUMMARY.push(`| B-id | ${tagCounts['B-id']} | identifier-like → candidate for inline \`\` \`…\` \`\` |`);
SUMMARY.push(`| C | ${tagCounts['C']} | unclassified, needs human review |`);
SUMMARY.push('');

SUMMARY.push(`## By category directory\n`);
const byDir = new Map();
for (const [path, hits] of perFile) {
  const parts = path.split('/');
  // src/data/translations/ja/<category>/...
  const dir = parts.slice(0, 5).join('/');
  byDir.set(dir, (byDir.get(dir) || 0) + hits.length);
}
SUMMARY.push(`| Directory | Hits |`);
SUMMARY.push(`|---|---:|`);
for (const [d, c] of [...byDir.entries()].sort((a, b) => b[1] - a[1])) {
  SUMMARY.push(`| \`${d}\` | ${c} |`);
}
SUMMARY.push('');

if (SUMMARY_ONLY) {
  console.log(SUMMARY.join('\n'));
  process.exit(0);
}

const FULL = [...SUMMARY];
FULL.push(`## Per-file detail\n`);
const sortedFiles = [...perFile.keys()].sort();
for (const path of sortedFiles) {
  const hits = perFile.get(path);
  FULL.push(`### \`${path}\` (${hits.length} hits)\n`);
  hits.sort((a, b) => a.line - b.line || a.offset - b.offset);
  FULL.push(`| Line | Offset | Pattern | Tag | Inner | Reason |`);
  FULL.push(`|---:|---:|---|---|---|---|`);
  for (const h of hits) {
    const innerEsc = h.inner.replace(/\|/g, '\\|').replace(/`/g, '\\`');
    FULL.push(`| ${h.line} | ${h.offset} | \`${h.pattern}\` | ${h.tag} | ${innerEsc} | ${h.reason} |`);
  }
  FULL.push('');
}

try {
  await stat('temp');
} catch {
  await mkdir('temp', { recursive: true });
}

await writeFile(REPORT_PATH, FULL.join('\n'));
console.log(`Wrote ${REPORT_PATH}`);
console.log(`Total: ${totalHits} hits across ${totalFiles} files`);
console.log(`Pattern breakdown:`);
for (const { name } of PATTERNS) {
  console.log(`  ${name.padEnd(12)} ${patternCounts[name]}`);
}
console.log(`Auto-class (tentative):`);
for (const [tag, c] of Object.entries(tagCounts)) {
  console.log(`  ${tag.padEnd(10)} ${c}`);
}
