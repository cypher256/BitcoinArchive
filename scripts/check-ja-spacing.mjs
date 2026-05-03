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
];

function walkMarkdownFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walkMarkdownFiles(full));
    else if (full.endsWith('.md')) out.push(full);
  }
  return out;
}

// Japanese letter classes. Excludes JA punctuation (「」、。 etc.) since
// the issue is letters-with-stranded-space, not punctuation.
const JA_LETTER = '[\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FFF\\u3005\\u30FC]';
const JA_JA_SPACE = new RegExp(`(${JA_LETTER}) (${JA_LETTER})`, 'gu');

const violations = [];
let scanned = 0;

for (const root of targets) {
  for (const file of walkMarkdownFiles(root)) {
    scanned += 1;
    const text = readFileSync(file, 'utf8');
    const lines = text.split('\n');

    let inFence = false;
    let inFrontmatter = false;
    let frontmatterDone = false;

    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i];

      // Frontmatter delimiters
      if (i === 0 && raw === '---') {
        inFrontmatter = true;
        continue;
      }
      if (inFrontmatter && raw === '---') {
        inFrontmatter = false;
        frontmatterDone = true;
        continue;
      }

      // Code fences
      if (/^```/.test(raw)) {
        inFence = !inFence;
        continue;
      }
      if (inFence) continue;

      // Skip slug-only frontmatter lines (slug values commonly have spaces)
      if (inFrontmatter && /^\s*slug:/.test(raw)) continue;

      // Replace inline code spans with a single ASCII placeholder so the
      // JA × JA boundary check sees the intervening ASCII boundary (the
      // code span itself is ASCII content, so a half-width space adjacent
      // to it is a JA × ASCII boundary, not a JA × JA boundary).
      let stripped = raw.replace(/`[^`]+`/g, 'x');
      // Replace markdown link URL parts with a placeholder for the same reason
      stripped = stripped.replace(/\]\([^)]*\)/g, ']x');

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
    }
  }
}

if (violations.length === 0) {
  console.log(`✓ JA spacing check passed. ${scanned} files scanned, no JA × JA stranded spaces.`);
  process.exit(0);
}

console.error(`✗ Found ${violations.length} JA × JA stranded space(s) (no space between two Japanese characters):`);
console.error('');
for (const v of violations) {
  console.error(`  ${v.file}:${v.line}`);
  console.error(`    "…${v.context}…"`);
  console.error(`    "${v.found}" → "${v.suggested}"  (drop the space between two Japanese characters)`);
  console.error('');
}
console.error('See STYLE_GUIDE_JA.md § "Half-width space convention".');
console.error(`Total: ${violations.length} violation(s) across ${scanned} files.`);
process.exit(1);
