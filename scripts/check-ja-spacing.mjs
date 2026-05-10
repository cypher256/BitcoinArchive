#!/usr/bin/env node
/**
 * Detects half-width spaces between two Japanese characters in prose.
 *
 * Convention (STYLE_GUIDE_JA.md "Half-width space convention"):
 *   - JA × ASCII boundary  → half-width space   (e.g. "本仮説は A 群")
 *   - ASCII × JA boundary  → half-width space   (e.g. "A 群")
 *   - JA × JA              → NO space           (e.g. "A 群候補", not "A 群 候補")
 *
 * The trap: bulk replacements like `グループ A` → `A 群` move the ASCII
 * letter from the right edge of the token to the left edge, leaving a
 * stranded trailing space between two Japanese characters.
 *
 * Excluded contexts (where intra-line spacing may be intentional):
 *   - fenced code blocks (```), including Mermaid timeline labels
 *     where ASCII spaces are intentional break points for line wrap
 *   - inline code spans (`...`)
 *   - URL-bearing markdown link bodies in `(http...)` / `(/...)`
 *   - YAML frontmatter `slug:` values
 *
 * Run: `npm run check:ja-spacing`
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');

const targets = [
  path.resolve(repoRoot, 'src/data/translations/ja'),
  path.resolve(repoRoot, 'src/data/entries/en'),
  path.resolve(repoRoot, 'src/components'),
];

function walkFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walkFiles(full));
    else if (full.endsWith('.md') || full.endsWith('.astro')) out.push(full);
  }
  return out;
}

// Japanese letter classes. Excludes JA punctuation (「」、。 etc.) since
// the issue is letters-with-stranded-space, not punctuation.
const JA_LETTER = '[\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FFF\\u3005\\u30FC]';
const JA_JA_SPACE = new RegExp(`(${JA_LETTER}) (${JA_LETTER})`, 'gu');

// Inverse-direction patterns (informational / non-blocking).
//
// The half-width-space convention also requires a space at JA × ASCII
// and ASCII × JA boundaries. The cases below are MISSING-SPACE
// violations of that rule, the inverse of the JA × JA STRANDED-SPACE
// check above. They are reported as warnings, not blocking errors,
// because:
//
//   - The pattern produces unavoidable false positives on legitimate
//     compound forms (URL fragments, currency code suffixes, file
//     extensions adjacent to JA labels) that an editor must judge
//     case by case.
//   - The original JA × JA stranded-space check was the high-incident
//     class (a side-effect of bulk replacements); the inverse direction
//     is more often a deliberate editorial choice that the editor may
//     accept or reject per occurrence.
//
// Bringing them under the script gives editors a TODO list to walk;
// it does not auto-fail the build until the editorial process catches
// up. If the warning count drops to a manageable level later, the
// failure mode can be promoted.
const ASCII_ALNUM = '[A-Za-z0-9]';
const JA_THEN_ASCII = new RegExp(`(${JA_LETTER})(${ASCII_ALNUM})`, 'gu');
const ASCII_THEN_JA = new RegExp(`(${ASCII_ALNUM})(${JA_LETTER})`, 'gu');

// Markdown-link-aware variants. After URL masking, neither the link
// boundary chars (`[`, `]`, `_`) match ASCII_ALNUM, so the direct
// patterns above cannot detect link-edge boundaries. These two
// patterns run on the masked line and capture the link text edge
// chars to determine if a space is needed:
//   - JA + [ASCII-link-text]    → space needed before [
//   - [...ASCII-link-text]_JA   → space needed after ] (i.e., after
//                                  the original `)`)
const JA_THEN_LINK_ASCII = new RegExp(`(${JA_LETTER})\\[(${ASCII_ALNUM})`, 'gu');
const ASCII_LINK_END_THEN_JA = new RegExp(
  `\\[(?:[^\\]\\n]|\\\\\\])*(${ASCII_ALNUM})\\]_(${JA_LETTER})`,
  'gu'
);

// Punctuation tolerance: middle-dot `・` (U+30FB) is a JA-typography
// separator (e.g., `Windows・Linux・macOS`) where adding a space on
// either side would disrupt the convention. Skip warnings whose
// boundary char is `・`.
function isMiddleDotBoundary(left, right) {
  return left === '・' || right === '・';
}

// Counter-kanji exclusion. JA conventionally attaches a counter
// kanji directly to a preceding digit without a space — `2010年`,
// `5月`, `15時`, `100件`, `21,000,000円` etc. The same applies in
// the inverse direction within compound dates: `1996年2月5日` has
// `年2` and `月5` boundaries that the rule "needs a space" would
// flag as violations, but JA convention keeps the entire date
// compact. Both directions are excluded.
const COUNTER_KANJI = /[年月日時分秒個件人名回倍円元度番枚次代世紀ヶ箇]/;
function isDigitFollowedByCounter(left, right) {
  return /[0-9]/.test(left) && COUNTER_KANJI.test(right);
}
function isCounterFollowedByDigit(left, right) {
  return COUNTER_KANJI.test(left) && /[0-9]/.test(right);
}

// JA × JA stranded space ACROSS a markdown link boundary. The plain
// JA_JA_SPACE check above masks `](url)` as `]x`, which means a JA char
// adjacent to a markdown link is hidden behind ASCII placeholders and
// missed. These two patterns recover the boundary cases:
//
//   ・ JA + " " + [JA-leading link text](url)
//     e.g. `参考は [サトシ仮説](url) ...` → `は[サトシ仮説](url) ...`
//
//   ・ [JA-trailing link text](url) + " " + JA
//     e.g. `... [サトシ仮説](url) を参照` → `[サトシ仮説](url)を参照`
//
// In both cases the JA × JA boundary requires NO space per the
// half-width-space convention; the link text edge character is
// considered the adjacent character on the link side.
const JA_LINK_LEFT = new RegExp(
  `(${JA_LETTER}) \\[(${JA_LETTER})(?:[^\\]\\n]|\\\\\\])*\\]\\([^)\\n]+\\)`,
  'gu'
);
const JA_LINK_RIGHT = new RegExp(
  `\\[(?:[^\\]\\n]|\\\\\\])*(${JA_LETTER})\\]\\([^)\\n]+\\) (${JA_LETTER})`,
  'gu'
);

const violations = [];
const warnings = [];
let scanned = 0;

// Verbatim faithfulness applies to PRIMARY-SOURCE QUOTED CONTENT
// (lines that begin with `>` blockquote prefix in editorial files,
// AND the body of files under verbatim directories that reproduces
// the historical text directly). It does NOT apply to editor-added
// content inside the same files — `editorNote` frontmatter,
// translator-added prose introducing the quote, `description`
// fields, etc. Those are editorial JA prose and follow the
// JA × ASCII spacing rule.
//
// The previous design "skip the entire verbatim file" was too
// coarse: it hid violations in editorial inserts living inside
// primary-source files. The current rule is "skip only the
// blockquote LINES" and apply to everything else.

for (const root of targets) {
  for (const file of walkFiles(root)) {
    scanned += 1;
    const isAstro = file.endsWith('.astro');
    let text = readFileSync(file, 'utf8');
    // For .astro: strip JS line and block comments so JA × JA spaces inside
    // them are not flagged (comments are not reader-facing prose). Frontmatter
    // logic below is .md-specific — in .astro the top `---` block is TS code
    // (not YAML) and contains the JA labels we want to scan.
    if (isAstro) {
      text = text.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
      text = text.replace(/\/\/[^\n]*/g, (m) => ' '.repeat(m.length));
    }
    const lines = text.split('\n');

    let inFence = false;
    let inFrontmatter = false;
    let frontmatterDone = false;

    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i];

      // Frontmatter delimiters (.md only)
      if (!isAstro) {
        if (i === 0 && raw === '---') {
          inFrontmatter = true;
          continue;
        }
        if (inFrontmatter && raw === '---') {
          inFrontmatter = false;
          frontmatterDone = true;
          continue;
        }
      }

      // Code fences
      if (/^```/.test(raw)) {
        inFence = !inFence;
        continue;
      }
      if (inFence) continue;

      // Skip slug-only frontmatter lines (slug values commonly have spaces)
      if (inFrontmatter && /^\s*slug:/.test(raw)) continue;

      // Replace inline code spans and markdown URL parts with a NEUTRAL
      // placeholder ('_') that is neither a JA letter nor an ASCII
      // alphanumeric. This way:
      //  - JA_JA_SPACE check still avoids false JA × JA matches across
      //    the placeholder (placeholder isn't JA, breaks the run).
      //  - The new ASCII × JA / JA × ASCII checks below don't see the
      //    placeholder as ASCII (it isn't), so they don't misfire on
      //    masked URLs or code spans.
      let stripped = raw.replace(/`[^`]+`/g, '_');
      stripped = stripped.replace(/\]\([^)]*\)/g, ']_');

      const matches = [...stripped.matchAll(JA_JA_SPACE)];
      for (const m of matches) {
        const idx = m.index ?? 0;
        const start = Math.max(0, idx - 12);
        const end = Math.min(stripped.length, idx + m[0].length + 12);
        const ctx = stripped.slice(start, end);
        violations.push({
          file: path.relative(repoRoot, file),
          line: i + 1,
          found: m[0],
          suggested: m[1] + m[2],
          context: ctx.trim(),
        });
      }

      // Markdown-link boundary checks run on the ORIGINAL line (not the
      // URL-stripped form), since they need to inspect the link text's
      // edge characters and the URL itself.
      const leftMatches = [...raw.matchAll(JA_LINK_LEFT)];
      for (const m of leftMatches) {
        const idx = m.index ?? 0;
        const start = Math.max(0, idx - 8);
        const end = Math.min(raw.length, idx + m[0].length + 4);
        const ctx = raw.slice(start, end);
        violations.push({
          file: path.relative(repoRoot, file),
          line: i + 1,
          found: `${m[1]} [${m[2]}…`,
          suggested: `${m[1]}[${m[2]}…`,
          context: ctx.trim(),
        });
      }
      const rightMatches = [...raw.matchAll(JA_LINK_RIGHT)];
      for (const m of rightMatches) {
        const idx = m.index ?? 0;
        const start = Math.max(0, idx - 4);
        const end = Math.min(raw.length, idx + m[0].length + 8);
        const ctx = raw.slice(start, end);
        violations.push({
          file: path.relative(repoRoot, file),
          line: i + 1,
          found: `…${m[1]}](url) ${m[2]}`,
          suggested: `…${m[1]}](url)${m[2]}`,
          context: ctx.trim(),
        });
      }

      // --- Warnings: ASCII × JA / JA × ASCII missing-space ---
      // Skip blockquote (`>`) lines — primary-source quotes whose
      // spacing is part of the quoted text, not subject to the
      // editorial spacing rule. Verbatim-directory files are NOT
      // skipped wholesale: their `editorNote` frontmatter, translator-
      // added prose introducing the quote, and `description` fields
      // are editorial inserts and DO follow the rule.
      if (/^[ \t]*>/.test(raw)) continue;
      // Run on the masked text (URLs / inline code stripped to '_').
      // Each match is an editorial candidate for a half-width space,
      // NOT a build failure.
      for (const m of stripped.matchAll(JA_THEN_ASCII)) {
        if (isMiddleDotBoundary(m[1], m[2])) continue;
        if (isCounterFollowedByDigit(m[1], m[2])) continue;
        const idx = m.index ?? 0;
        const start = Math.max(0, idx - 12);
        const end = Math.min(stripped.length, idx + m[0].length + 12);
        warnings.push({
          file: path.relative(repoRoot, file),
          line: i + 1,
          found: m[0],
          suggested: `${m[1]} ${m[2]}`,
          context: stripped.slice(start, end).trim(),
          kind: 'ja→ascii',
        });
      }
      for (const m of stripped.matchAll(ASCII_THEN_JA)) {
        // Date / quantity convention (e.g., "2010年", "5月", "100件").
        if (isDigitFollowedByCounter(m[1], m[2])) continue;
        if (isMiddleDotBoundary(m[1], m[2])) continue;
        const idx = m.index ?? 0;
        const start = Math.max(0, idx - 12);
        const end = Math.min(stripped.length, idx + m[0].length + 12);
        warnings.push({
          file: path.relative(repoRoot, file),
          line: i + 1,
          found: m[0],
          suggested: `${m[1]} ${m[2]}`,
          context: stripped.slice(start, end).trim(),
          kind: 'ascii→ja',
        });
      }
      // Link-start `JA[ASCII-text]` — `[` is not in ASCII_ALNUM, so
      // this case is not covered by JA_THEN_ASCII above.
      for (const m of stripped.matchAll(JA_THEN_LINK_ASCII)) {
        const idx = m.index ?? 0;
        const start = Math.max(0, idx - 12);
        const end = Math.min(stripped.length, idx + m[0].length + 12);
        warnings.push({
          file: path.relative(repoRoot, file),
          line: i + 1,
          found: `${m[1]}[${m[2]}…`,
          suggested: `${m[1]} [${m[2]}…`,
          context: stripped.slice(start, end).trim(),
          kind: 'ja→[ascii-link]',
        });
      }
      // Link-end `[…ASCII-text](url)JA` — after URL masking the line
      // looks like `…ASCII]_JA`, which the direct ASCII × JA pattern
      // doesn't see (the `_` placeholder isn't in ASCII_ALNUM).
      for (const m of stripped.matchAll(ASCII_LINK_END_THEN_JA)) {
        const idx = m.index ?? 0;
        const start = Math.max(0, idx - 8);
        const end = Math.min(stripped.length, idx + m[0].length + 8);
        warnings.push({
          file: path.relative(repoRoot, file),
          line: i + 1,
          found: `…${m[1]}](url)${m[2]}`,
          suggested: `…${m[1]}](url) ${m[2]}`,
          context: stripped.slice(start, end).trim(),
          kind: '[ascii-link]→ja',
        });
      }
    }
  }
}

// Both violation classes are blocking. The JA × JA stranded-space
// class catches bulk-replacement leftovers; the JA × ASCII / link-
// boundary missing-space class catches the inverse rule. Both
// belong in `npm run check` and both fail the build when present —
// the matching auto-fix is `scripts/fix-ja-ascii-spacing.mjs`.
const allIssues = [
  ...violations.map((v) => ({ ...v, severity: 'jaja-stranded' })),
  ...warnings.map((w) => ({ ...w, severity: 'asciija-missing' })),
];

if (allIssues.length === 0) {
  console.log(`✓ JA spacing check passed. ${scanned} files scanned, no boundary violations.`);
  process.exit(0);
}

if (violations.length > 0) {
  // The `violations` array mixes two kinds detected on the same
  // pass: direct text JA × JA stranded space (caught by JA_JA_SPACE)
  // and JA × JA boundary across a markdown link (caught by
  // JA_LINK_LEFT / JA_LINK_RIGHT). The two are remediated by
  // different scripts: direct text is a manual fix (no auto-fix
  // exists), link-boundary is `fix-ja-link-spacing.mjs`. We can
  // distinguish them structurally — link-boundary `found` strings
  // contain the literal `[` or `](url)`. Report them in two
  // labelled sections so the editor follows the right path.
  const linkBoundary = violations.filter((v) => v.found.includes('[') || v.found.includes('](url)'));
  const direct = violations.filter((v) => !linkBoundary.includes(v));

  if (direct.length > 0) {
    console.error(`✗ ${direct.length} JA × JA stranded space(s) (direct text):`);
    console.error('');
    for (const v of direct) {
      console.error(`  ${v.file}:${v.line}`);
      console.error(`    "…${v.context}…"`);
      console.error(`    "${v.found}" → "${v.suggested}"  (drop the space)`);
      console.error('');
    }
    console.error('Manual fix required (no auto-fix).');
    console.error('');
  }

  if (linkBoundary.length > 0) {
    console.error(`✗ ${linkBoundary.length} JA × JA stranded space(s) at markdown-link boundary:`);
    console.error('');
    for (const v of linkBoundary) {
      console.error(`  ${v.file}:${v.line}`);
      console.error(`    "…${v.context}…"`);
      console.error(`    "${v.found}" → "${v.suggested}"  (drop the space)`);
      console.error('');
    }
    console.error('Auto-fix: `node scripts/fix-ja-link-spacing.mjs`');
    console.error('');
  }
}

if (warnings.length > 0) {
  console.error(`✗ ${warnings.length} JA × ASCII boundary violation(s) (missing half-width space):`);
  console.error('');
  const PER_FILE_CAP = 5;
  const byFile = new Map();
  for (const w of warnings) {
    if (!byFile.has(w.file)) byFile.set(w.file, []);
    byFile.get(w.file).push(w);
  }
  let shown = 0;
  for (const [file, list] of byFile) {
    const slice = warnings.length <= 30 ? list : list.slice(0, PER_FILE_CAP);
    for (const w of slice) {
      console.error(`  ${w.file}:${w.line}  [${w.kind}]`);
      console.error(`    "…${w.context}…"`);
      console.error(`    "${w.found}" → "${w.suggested}"`);
      shown++;
    }
    if (list.length > slice.length) {
      console.error(`  …and ${list.length - slice.length} more in ${file}`);
    }
    console.error('');
  }
  console.error(`Shown ${shown} of ${warnings.length} JA × ASCII issues.`);
  console.error('Auto-fix: `node scripts/fix-ja-ascii-spacing.mjs`');
  console.error('');
}

console.error('See STYLE_GUIDE_JA.md § "Half-width space convention".');
console.error(`Total: ${allIssues.length} violation(s) across ${scanned} files.`);
process.exit(1);
