#!/usr/bin/env node
/**
 * fix-ja-ascii-spacing.mjs — Insert missing half-width space at JA × ASCII boundaries.
 *
 * Per STYLE_GUIDE_JA.md "Half-width space convention":
 *   - JA × ASCII boundary → half-width space
 *   - ASCII × JA boundary → half-width space
 *   - JA × JA → no space
 *
 * The archive accumulated thousands of violations of the JA-ASCII rule
 * over years of editorial work. This script applies the rule
 * mechanically across the JA file set, with carefully scoped
 * exclusions for legitimate compound forms (date formats, middle-dot
 * separators, code spans, URL contents).
 *
 * Patterns fixed:
 *   - JA-letter + ASCII-alnum  → insert space between
 *   - ASCII-alnum + JA-letter  → insert space between
 *   - JA + [ASCII-link-text]   → JA + space + [
 *   - [ASCII-link-text](url) + JA → ](url) + space + JA
 *
 * Excluded:
 *   - Files under primary-source verbatim directories
 *     (forum / correspondence / emails / sourceforge / bip) — entire
 *     bodies skipped because they are translations of historical
 *     records and the editor's spacing decisions there are
 *     verbatim-faithful, not subject to mechanical rewriting
 *   - Lines starting with `>` (blockquote) in editorial files —
 *     primary-source quotes embedded in narrative entries; the
 *     spacing inside the quote is part of the quoted text
 *   - Inside fenced code blocks (```...```)
 *   - Inside inline code (`...`)
 *   - Inside markdown link URL parts (`(...)` after `]`)
 *   - YAML frontmatter (preserved as-is — structured data; see also
 *     fix-ja-link-spacing.mjs which handles secondarySources note
 *     fields with similar precision)
 *   - Date / quantity convention: digit + counter kanji
 *     (年月日時分秒個件人名回倍円元度番枚次代世紀ヶ箇 etc.) BOTH directions
 *   - Middle-dot `・` adjacency (Windows・Linux pattern)
 *   - JA-link-text boundaries (JA × JA across a link is not a violation)
 *
 * Run modes:
 *   node scripts/fix-ja-ascii-spacing.mjs            (apply, default)
 *   node scripts/fix-ja-ascii-spacing.mjs --dry-run  (report only)
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const targets = [
  path.resolve(repoRoot, 'src/data/translations/ja'),
  // .astro components hold JA chart / timeline labels in TS data
  // structures. Same JA × ASCII rule applies; the masking branch
  // for .astro keeps comments out and processes string literals.
  path.resolve(repoRoot, 'src/components'),
];

const DRY_RUN = process.argv.includes('--dry-run');

const J = '[\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FFF\\u3005\\u30FC]';
const A = '[A-Za-z0-9]';
const COUNTER_KANJI = /[年月日時分秒個件人名回倍円元度番枚次代世紀ヶ箇]/;
const VERBATIM_DIRS = ['/forum/', '/correspondence/', '/emails/', '/sourceforge/', '/bip/'];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (full.endsWith('.md') || full.endsWith('.astro')) out.push(full);
  }
  return out;
}

// Mask code blocks, inline code, frontmatter, and markdown link URL
// parts so the regex doesn't touch their contents. Returns
// { masked, masks }, with masks[i] holding the original text for
// placeholder " MASK<i> ".
function maskExclusions(content, ext) {
  const masks = [];
  const placeholder = (idx) => ` MASK${idx} `;
  let masked = content;
  if (ext === '.astro') {
    // Astro file: mask JS/TS line and block comments so JA inside
    // them isn't flagged. The Astro frontmatter (top --- ... ---)
    // contains TS code with JA labels — DO NOT mask it.
    masked = masked.replace(/\/\*[\s\S]*?\*\//g, (m) => {
      masks.push(m);
      return placeholder(masks.length - 1);
    });
    masked = masked.replace(/\/\/[^\n]*/g, (m) => {
      masks.push(m);
      return placeholder(masks.length - 1);
    });
  }
  // YAML frontmatter (.md only) is processed in-place (no mask).
  // Title and description string values are user-visible (rendered
  // as page titles and card subtitles), so they follow the same JA
  // × ASCII spacing rule as body prose. YAML keys are
  // conventionally ASCII so they don't have JA × ASCII boundaries.
  // Fenced code blocks
  masked = masked.replace(/```[\s\S]*?```/g, (m) => {
    masks.push(m);
    return placeholder(masks.length - 1);
  });
  // Inline code spans
  masked = masked.replace(/`[^`\n]+`/g, (m) => {
    masks.push(m);
    return placeholder(masks.length - 1);
  });
  // Markdown link URL parts: keep the `]` (so link-end boundary
  // checks still work) and mask ONLY the `(url)` portion. masks[i]
  // stores just `(url)`, so unmask reproduces the original `](url)`
  // (the `]` in the text + `(url)` from the placeholder = `](url)`).
  masked = masked.replace(/\]\(([^)\n]+)\)/g, (full, url) => {
    masks.push(`(${url})`);
    return ']' + placeholder(masks.length - 1);
  });
  // Blockquote lines (.md only): each `> ...` line is a primary-source
  // quote in an editorial entry (per STYLE_GUIDE.md "Editorial /
  // Narrative Entries"). The spacing inside the quote belongs to the
  // quoted text and must not be mechanically rewritten. Mask each
  // such line as a single placeholder to keep its content invariant.
  if (ext === '.md') {
    masked = masked.replace(/^[ \t]*>.*$/gm, (m) => {
      masks.push(m);
      return placeholder(masks.length - 1);
    });
  }
  return { masked, masks };
}

function unmask(masked, masks) {
  return masked.replace(/ MASK(\d+) /g, (_, n) => masks[Number(n)]);
}

let totalFiles = 0;
let totalFixes = 0;
const samples = [];

const allFiles = [];
for (const t of targets) allFiles.push(...walk(t));

for (const file of allFiles) {
  // Skip primary-source verbatim files entirely. Their bodies are
  // translated reproductions of historical records; the editor's
  // spacing decisions there are part of the verbatim faithfulness
  // and must not be mechanically rewritten.
  if (VERBATIM_DIRS.some((d) => file.includes(d))) continue;
  const ext = file.endsWith('.astro') ? '.astro' : '.md';
  const original = readFileSync(file, 'utf-8');
  const { masked, masks } = maskExclusions(original, ext);
  let fixed = masked;
  let fileFixes = 0;
  const recordSample = (kind, before, after) => {
    fileFixes++;
    if (samples.length < 8) {
      const rel = file.replace(repoRoot + '/', '');
      samples.push(`  ${rel} [${kind}]: "${before}" → "${after}"`);
    }
  };

  // Pass 1: ASCII + JA (with date/counter and middle-dot exclusions)
  fixed = fixed.replace(new RegExp(`(${A})(${J})`, 'gu'), (m, a, j) => {
    if (/[0-9]/.test(a) && COUNTER_KANJI.test(j)) return m; // date/counter
    if (j === '・') return m;                                // middle dot
    recordSample('ascii→ja', m, `${a} ${j}`);
    return `${a} ${j}`;
  });

  // Pass 2: JA + ASCII (with middle-dot + counter-then-digit exclusion).
  // The counter exclusion fires on the `counter-kanji + digit` direction
  // too (e.g., `1996年2月5日` has both `1996+年` and `年+2`, `月+5` etc.).
  fixed = fixed.replace(new RegExp(`(${J})(${A})`, 'gu'), (m, j, a) => {
    if (j === '・') return m;
    if (COUNTER_KANJI.test(j) && /[0-9]/.test(a)) return m;
    recordSample('ja→ascii', m, `${j} ${a}`);
    return `${j} ${a}`;
  });

  // Pass 3: JA + [ASCII-link-text — `[` not in ASCII_ALNUM, so direct
  // pass missed it. Match link text first char on the masked content.
  fixed = fixed.replace(
    new RegExp(`(${J})\\[(${A})`, 'gu'),
    (m, j, a) => {
      recordSample('ja→[ascii]', m, `${j} [${a}`);
      return `${j} [${a}`;
    }
  );

  // Pass 4: [...ASCII-link-text](url) + JA — after URL masking the
  // line is `…ASCII] MASK<n> JA-letter` (one space on each side of
  // the MASK token). To insert a space at the original `)` × JA
  // boundary, double the trailing space so unmask emits `(url) JA`
  // instead of `(url)JA`. Unmask matches ` MASK<n> ` greedily
  // including ONE trailing space; the second space stays as the
  // post-link separator.
  fixed = fixed.replace(
    new RegExp(`(\\[(?:[^\\]\\n]|\\\\\\])*${A}\\] MASK\\d+ )(${J})`, 'gu'),
    (m, prefix, j) => {
      recordSample('[ascii-link]→ja', `${prefix.slice(-30)}${j}`, `${prefix.slice(-30)} ${j}`);
      return `${prefix} ${j}`;
    }
  );

  if (fileFixes === 0) continue;
  totalFiles++;
  totalFixes += fileFixes;

  if (!DRY_RUN) {
    writeFileSync(file, unmask(fixed, masks), 'utf-8');
  }
}

console.log(`${DRY_RUN ? '[dry-run] ' : ''}Files modified: ${totalFiles}`);
console.log(`${DRY_RUN ? '[dry-run] ' : ''}Total fixes:    ${totalFixes}`);
if (DRY_RUN && samples.length > 0) {
  console.log('Samples:');
  for (const s of samples) console.log(s);
}
