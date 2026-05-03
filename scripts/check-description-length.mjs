#!/usr/bin/env node
/**
 * check-description-length.mjs — verify entry frontmatter `description` stays
 * short enough to render legibly on entry-list cards.
 *
 * Why this script exists:
 *   /entries listing pages render the frontmatter `description` verbatim
 *   (no truncation — see src/pages/{en,ja}/entries/index.astro). When a
 *   description grows past a few hundred characters, the entry card visually
 *   dominates the listing and pushes other entries out of view. The fix is
 *   to keep the description short (essential triplet: subject, headline
 *   finding, key caveat) and put longer exposition in the body.
 *
 * Thresholds (per-language):
 *   EN: 200 chars
 *   JA: 100 chars (full-width chars occupy ~2x the pixel width of Latin
 *                  half-width chars; 100 full-width ≈ 200 half-width visually)
 *
 *   Rationale is documented in STYLE_GUIDE.md § Description Policy. In short:
 *   the dominant practical constraints are (a) social-share preview windows
 *   (OGP / Twitter Card, ~200 chars) and (b) entry-list card legibility
 *   (verbatim render, ~1-2 lines). Google SERP's stricter cap (160/80) is
 *   no longer binding because Google auto-generates SERP snippets from body
 *   content. Update STYLE_GUIDE.md before changing these numbers.
 *
 * Mode:
 *   - WARN: list violators, exit 0 (default; for staged adoption)
 *   - STRICT: list violators, exit 1 (after all existing violations cleaned)
 *
 *   Pass --strict to enable STRICT mode. The build pipeline currently runs
 *   in WARN mode while existing violations are being resolved.
 *
 * Output:
 *   Sorted descending by length so the worst offenders appear first.
 */

import { readdir, readFile } from 'fs/promises';
import { join } from 'path';

const STRICT = process.argv.includes('--strict');
const ROOTS = [
  { path: 'src/data/entries/en', max: 200, lang: 'EN' },
  { path: 'src/data/translations/ja', max: 100, lang: 'JA' },
];

async function* walkMd(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walkMd(p);
    else if (entry.name.endsWith('.md')) yield p;
  }
}

// Extract a frontmatter description value. Handles single-line double-quoted
// form: description: "..." (with escaped \" inside). Multi-line YAML block
// scalars (|, >) and unquoted forms are not used in this archive's frontmatter
// for description fields, so we don't try to parse them.
function extractDescription(content) {
  const match = content.match(/^description:\s*"((?:[^"\\]|\\.)*)"/m);
  if (!match) return null;
  // Unescape \" to " for accurate length counting
  return match[1].replace(/\\"/g, '"');
}

const violations = [];
for (const root of ROOTS) {
  for await (const file of walkMd(root.path)) {
    const content = await readFile(file, 'utf-8');
    const desc = extractDescription(content);
    if (desc === null) continue;
    if (desc.length > root.max) {
      violations.push({ file, len: desc.length, max: root.max, lang: root.lang });
    }
  }
}

violations.sort((a, b) => (b.len - b.max) - (a.len - a.max));

for (const v of violations) {
  const rel = v.file.replace(process.cwd() + '/', '');
  console.error(`✗ ${v.lang} ${String(v.len).padStart(4)} chars (max ${v.max}): ${rel}`);
}

if (violations.length === 0) {
  console.log(`✓ all descriptions within caps (EN ≤ 200, JA ≤ 100)`);
  process.exit(0);
}

console.error(`\n${violations.length} description(s) exceed the cap.`);
console.error(`Caps: EN 200 chars, JA 100 chars. See STYLE_GUIDE.md § Description Policy.`);
if (STRICT) {
  process.exit(1);
}
console.error(`(WARN mode: exit 0. Pass --strict to fail the build.)`);
process.exit(0);
