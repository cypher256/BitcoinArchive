#!/usr/bin/env node
/**
 * fix-ja-punct-spacing.mjs — remove half-width spaces stranded between two
 * Japanese characters, where "Japanese" includes JA punctuation
 * (、。「」『』（）etc.). Example: "なるほど、 「同じ」 トランザクション" →
 * "なるほど、「同じ」トランザクション".
 *
 * Companion auto-fix for the JA × JA stranded-space rule in
 * check-ja-spacing.mjs. The exclusions below mirror that checker exactly so
 * the two stay in lock-step (a space the checker ignores is never rewritten):
 *   - .astro JS comments (// and block) — blanked by the checker, protected here
 *   - fenced code blocks (```), incl. Mermaid line-wrap labels
 *   - frontmatter `---` delimiters and `slug:` lines
 *   - inline code spans (`...`) and markdown URL parts `](...)`, per line
 * The spaced em / horizontal-bar dash ( — / ― ) is a sanctioned clause bridge
 * (STYLE_GUIDE_JA "禁止句読点") and is left untouched (not in the JA class).
 *
 * Dry-run by default; pass --apply to write. Targets the same dirs as
 * check-ja-spacing.mjs. Index-based: it only ever deletes a half-width space,
 * never alters any other character.
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
const JA_ONE = new RegExp(`[${JA_INNER}${JA_PUNCT_INNER}]`, 'u');

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

// Mark every character index that the checker excludes from scanning, so we
// never delete a space inside one of those regions.
function protectedMask(text, isAstro) {
  const n = text.length;
  const prot = new Uint8Array(n);
  const mark = (s, e) => {
    for (let i = Math.max(0, s); i < Math.min(n, e); i++) prot[i] = 1;
  };

  // .astro JS comments (block + line) — the checker blanks these before scan.
  if (isAstro) {
    for (const re of [/\/\*[\s\S]*?\*\//g, /\/\/[^\n]*/g]) {
      let m;
      while ((m = re.exec(text))) mark(m.index, m.index + m[0].length);
    }
  }

  // Per-line: fences, frontmatter delimiters / slug, then inline code & URLs.
  let off = 0;
  let inFence = false;
  let inFm = false;
  let lineNo = 0;
  for (const line of text.split('\n')) {
    const start = off;
    const end = off + line.length;
    let wholeLine = false;

    if (!isAstro) {
      if (lineNo === 0 && line === '---') {
        inFm = true;
        wholeLine = true;
      } else if (inFm && line === '---') {
        inFm = false;
        wholeLine = true;
      }
    }
    if (!wholeLine) {
      if (/^```/.test(line)) {
        inFence = !inFence;
        wholeLine = true;
      } else if (inFence) {
        wholeLine = true;
      } else if (inFm && /^\s*slug:/.test(line)) {
        wholeLine = true;
      }
    }

    if (wholeLine) {
      mark(start, end);
    } else {
      for (const re of [/`[^`]+`/g, /\]\([^)]*\)/g]) {
        let m;
        re.lastIndex = 0;
        while ((m = re.exec(line))) mark(start + m.index, start + m.index + m[0].length);
      }
    }
    off = end + 1;
    lineNo += 1;
  }
  return prot;
}

let filesChanged = 0;
let spacesRemoved = 0;

for (const root of targets) {
  for (const file of walk(root)) {
    const text = readFileSync(file, 'utf8');
    const prot = protectedMask(text, file.endsWith('.astro'));
    const n = text.length;
    const buf = [];
    let removed = 0;
    for (let i = 0; i < n; i++) {
      if (
        text[i] === ' ' &&
        prot[i] === 0 &&
        i > 0 &&
        i < n - 1 &&
        JA_ONE.test(text[i - 1]) &&
        JA_ONE.test(text[i + 1])
      ) {
        removed += 1;
        continue; // delete this stranded space
      }
      buf.push(text[i]);
    }
    if (removed > 0) {
      filesChanged += 1;
      spacesRemoved += removed;
      if (APPLY) writeFileSync(file, buf.join(''), 'utf8');
    }
  }
}

console.log(
  `${APPLY ? 'APPLIED' : 'DRY-RUN'}: removed ${spacesRemoved} stranded space(s) across ${filesChanged} file(s).`
);
