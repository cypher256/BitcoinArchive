#!/usr/bin/env node
/**
 * fix-ja-punct-spacing.mjs — remove half-width spaces stranded between two
 * Japanese characters, where "Japanese" includes JA punctuation
 * (、。「」『』（）etc.). Example: "なるほど、 「同じ」 トランザクション" →
 * "なるほど、「同じ」トランザクション".
 *
 * Companion auto-fix for the JA × JA stranded-space rule in
 * check-ja-spacing.mjs (which counts JA punctuation). Mirrors the checker's
 * exclusions so the two converge:
 *   - skip fenced code blocks (```), incl. Mermaid labels whose ASCII spaces
 *     are intentional line-wrap break points
 *   - mask inline code spans (`...`) and markdown URL parts `](...)`
 *   - skip frontmatter `slug:` lines
 * The spaced em / horizontal-bar dash ( — / ― ) is a sanctioned clause bridge
 * and is left untouched (not in the JA class).
 *
 * Dry-run by default; pass --apply to write. Targets the same dirs as
 * check-ja-spacing.mjs.
 */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..');
const APPLY = process.argv.includes('--apply');

const targets = [
  path.resolve(repoRoot, 'src/data/translations/ja'),
  path.resolve(repoRoot, 'src/data/entries/en'),
  path.resolve(repoRoot, 'src/components'),
];

const JA_INNER = '\\u3040-\\u309F\\u30A0-\\u30FF\\u4E00-\\u9FFF\\u3005\\u30FC';
const JA_PUNCT_INNER = '、。，．・「」『』（）〔〕【】〈〉《》！？：；';
const JA_ANY = `[${JA_INNER}${JA_PUNCT_INNER}]`;
// Lookbehind/lookahead so every stranded space is removed in one pass,
// including consecutive runs of JA chars separated by spaces.
const STRANDED = new RegExp(`(?<=${JA_ANY}) (?=${JA_ANY})`, 'gu');
// Plain-ASCII sentinel wrapping a span index; ASCII so STRANDED never matches
// across it, and a token that does not occur in the corpus.
const OPEN = 'ZqZ';
const CLOSE = 'ZqZ';

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (full.endsWith('.md') || full.endsWith('.astro')) out.push(full);
  }
  return out;
}

let filesChanged = 0;
let spacesRemoved = 0;

for (const root of targets) {
  for (const file of walk(root)) {
    const isAstro = file.endsWith('.astro');
    const lines = readFileSync(file, 'utf8').split('\n');
    let inFence = false;
    let inFrontmatter = false;
    let fileTouched = false;

    for (let i = 0; i < lines.length; i++) {
      const raw = lines[i];

      if (!isAstro) {
        if (i === 0 && raw === '---') {
          inFrontmatter = true;
          continue;
        }
        if (inFrontmatter && raw === '---') {
          inFrontmatter = false;
          continue;
        }
      }
      if (/^```/.test(raw)) {
        inFence = !inFence;
        continue;
      }
      if (inFence) continue;
      if (inFrontmatter && /^\s*slug:/.test(raw)) continue;

      // Mask inline code spans and markdown URL parts so spaces inside them
      // are never touched, then remove stranded spaces, then restore verbatim.
      const spans = [];
      const stash = (m) => `${OPEN}${spans.push(m) - 1}${CLOSE}`;
      const masked = raw.replace(/`[^`]+`/g, stash).replace(/\]\([^)]*\)/g, stash);

      const fixed = masked.replace(STRANDED, () => {
        spacesRemoved += 1;
        fileTouched = true;
        return '';
      });

      lines[i] = fixed.replace(new RegExp(`${OPEN}(\\d+)${CLOSE}`, 'g'), (_, n) => spans[Number(n)]);
    }

    if (fileTouched) {
      filesChanged += 1;
      if (APPLY) writeFileSync(file, lines.join('\n'), 'utf8');
    }
  }
}

console.log(
  `${APPLY ? 'APPLIED' : 'DRY-RUN'}: removed ${spacesRemoved} stranded space(s) across ${filesChanged} file(s).`
);
