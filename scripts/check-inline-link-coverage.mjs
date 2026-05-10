#!/usr/bin/env node
/**
 * check-inline-link-coverage.mjs — Auto-link coverage report
 *
 * Replaces the previous manual-link-only coverage check. Now that
 * `rehype-auto-link-keywords.mjs` mechanically converts keyword
 * occurrences in body prose into links to the target entry/person,
 * the question is no longer "did the editor remember to write
 * [X](url)?" but rather "is each declared keyword actually used in
 * other entries, and how many of its occurrences sit in skip
 * contexts (blockquote / aside / verbatim file / code) where
 * auto-linking is intentionally suppressed?"
 *
 * Inputs:
 *   - `src/data/keyword-index.json` (produced by
 *     `generate-keyword-index.mjs`)
 *   - All entry markdown sources (en + ja)
 *
 * For every keyword in the index, count its occurrences in the body
 * of every OTHER entry, classify each occurrence by where it sits:
 *
 *   - prose         → auto-link will fire (good — coverage proven)
 *   - blockquote    → skipped (primary-source quote; intentional)
 *   - aside         → skipped (editor note; intentional)
 *   - code          → skipped (identifier in code block / inline)
 *   - verbatim-file → skipped (forum / correspondence / emails /
 *                     sourceforge / bip — whole-file primary record)
 *
 * The script does not enforce anything by default; it just reports.
 * Pass `--strict` to exit non-zero when any declared keyword has
 * zero prose-context occurrences (= no entry will ever auto-link
 * to the target).
 *
 * Note: this is a coarse markdown analysis (not a full HAST parse).
 * It is sufficient for keyword-level auditing because the auto-link
 * plugin uses the same coarse exclusions. The actual rendering
 * authority remains the rehype plugin — this script only describes
 * what the plugin will do.
 */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');

const STRICT = process.argv.includes('--strict');

const COLLECTIONS = [
  { name: 'en', base: path.join(ROOT, 'src/data/entries/en') },
  { name: 'ja', base: path.join(ROOT, 'src/data/translations/ja') },
];

const VERBATIM_DIRS = [
  '/forum/', '/correspondence/', '/emails/', '/sourceforge/', '/bip/',
];

const INDEX_PATH = path.join(ROOT, 'src/data/keyword-index.json');

if (!existsSync(INDEX_PATH)) {
  console.error(`FAIL: ${path.relative(ROOT, INDEX_PATH)} not found. Run \`node scripts/generate-keyword-index.mjs\` first.`);
  process.exit(1);
}

const keywordIndex = JSON.parse(readFileSync(INDEX_PATH, 'utf-8'));

// ---------------------------------------------------------------------------
// Helpers
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

function entryIdFromPath(p, base) {
  return path.relative(base, p).replace(/\.md$/, '');
}

// Build a per-character context map. For each character index in body,
// the array holds a context id:
//   0 = prose (default), 1 = blockquote, 2 = aside, 3 = code
// O(1) classification per match without modifying body string (which
// would risk position drift if substitution length differs from
// original).
const CTX_PROSE = 0;
const CTX_BLOCKQUOTE = 1;
const CTX_ASIDE = 2;
const CTX_CODE = 3;

function buildContextMap(body) {
  const ctx = new Uint8Array(body.length);
  // Fenced code blocks ```...```
  for (const m of body.matchAll(/```[\s\S]*?```/g)) {
    ctx.fill(CTX_CODE, m.index, m.index + m[0].length);
  }
  // Inline code `...` (single line only)
  for (const m of body.matchAll(/`[^`\n]*`/g)) {
    ctx.fill(CTX_CODE, m.index, m.index + m[0].length);
  }
  // Blockquote lines: any line whose first non-whitespace char is `>`.
  let cursor = 0;
  for (const line of body.split('\n')) {
    if (/^\s*>/.test(line)) ctx.fill(CTX_BLOCKQUOTE, cursor, cursor + line.length);
    cursor += line.length + 1; // +1 for newline
  }
  // Editor-note paragraphs: single-line *[Editor:...]* / *[Context:...]* /
  // *[編者注：...]* / *[補足：...]* markers.
  for (const m of body.matchAll(/^\s*\*\[(?:Editor:|Context:|編者注[：:]|補足[：:])[\s\S]*?\]\s*\*\s*$/gm)) {
    ctx.fill(CTX_ASIDE, m.index, m.index + m[0].length);
  }
  return ctx;
}

function makeKeywordRegex(kw) {
  const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const headAscii = /[A-Za-z0-9]/.test(kw[0]);
  const tailAscii = /[A-Za-z0-9]/.test(kw[kw.length - 1]);
  const prefix = headAscii ? '(?<![A-Za-z0-9])' : '';
  const suffix = tailAscii ? '(?![A-Za-z0-9])' : '';
  return new RegExp(prefix + escaped + suffix, 'g');
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

let totalProse = 0;
let totalSkipped = 0;
let unusedKeywords = 0;
const failures = [];

for (const { name: locale, base } of COLLECTIONS) {
  console.log(`\n=== Locale: ${locale} ===`);
  const files = walk(base);

  // Pre-compute per-file context maps + verbatim flag once.
  const fileInfo = new Map();
  for (const f of files) {
    const { body } = splitFrontmatter(readFileSync(f, 'utf-8'));
    const isVerbatimFile = VERBATIM_DIRS.some((d) => f.includes(d));
    fileInfo.set(f, { body, ctx: buildContextMap(body), isVerbatimFile });
  }

  const conceptKeywords = Object.entries(keywordIndex[locale]?.concept || {});
  const personKeywords = Object.entries(keywordIndex[locale]?.person || {});
  const allKeywords = [
    ...conceptKeywords.map(([kw, target]) => ({ kw, kind: 'concept', target })),
    ...personKeywords.map(([kw, slug]) => ({ kw, kind: 'person', target: slug })),
  ];

  console.log(`Keywords: ${conceptKeywords.length} concept + ${personKeywords.length} person = ${allKeywords.length} total`);

  let localeProse = 0;
  let localeSkipped = 0;

  for (const { kw, kind, target } of allKeywords) {
    const re = makeKeywordRegex(kw);
    const counts = { prose: 0, blockquote: 0, aside: 0, code: 0, 'verbatim-file': 0 };
    for (const f of files) {
      const fileBody = fileInfo.get(f);
      const fileId = entryIdFromPath(f, base);
      // Self-link skip: concept keyword mentioned in its own body.
      if (kind === 'concept' && fileId === target) continue;
      let m;
      re.lastIndex = 0;
      while ((m = re.exec(fileBody.body)) !== null) {
        if (fileBody.isVerbatimFile) {
          counts['verbatim-file']++;
          continue;
        }
        const c = fileBody.ctx[m.index];
        if (c === CTX_BLOCKQUOTE) counts.blockquote++;
        else if (c === CTX_ASIDE) counts.aside++;
        else if (c === CTX_CODE) counts.code++;
        else counts.prose++;
      }
    }
    const total = counts.prose + counts.blockquote + counts.aside + counts.code + counts['verbatim-file'];
    if (total === 0) {
      unusedKeywords++;
      console.log(`  ⚠ "${kw}" (${kind}, target=${target}) — 0 occurrences`);
      if (STRICT) failures.push(`[${locale}] keyword "${kw}" never appears in any entry body`);
      continue;
    }
    localeProse += counts.prose;
    localeSkipped += counts.blockquote + counts.aside + counts.code + counts['verbatim-file'];
    if (counts.prose === 0) {
      console.log(
        `  ⚠ "${kw}" (${kind}) — prose:0  ` +
        `bq:${counts.blockquote} aside:${counts.aside} ` +
        `code:${counts.code} verbatim:${counts['verbatim-file']} (occurrences exist but all in skip contexts)`
      );
    }
  }

  console.log(`Locale total — prose: ${localeProse}, skipped: ${localeSkipped}`);
  totalProse += localeProse;
  totalSkipped += localeSkipped;
}

console.log(`\n=== Summary ===`);
console.log(`Total prose-context occurrences (auto-linked): ${totalProse}`);
console.log(`Total skip-context occurrences (intentional skips): ${totalSkipped}`);
console.log(`Keywords never used: ${unusedKeywords}`);
if (totalProse === 0 && totalSkipped === 0) {
  console.log('No keyword usage detected.');
}

if (STRICT && failures.length > 0) {
  console.error(`\nFAIL: ${failures.length} strict-mode failures.`);
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}
process.exit(0);
