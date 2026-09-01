#!/usr/bin/env node
/**
 * check-link-color-confusion.mjs
 *
 * Enforces the "Link-color confusion rule" in STYLE_GUIDE_VISUAL.md: a
 * `color: var(--color-accent)` declaration on a CSS selector must be an
 * allowlisted, verified-real link/button, or it fails. `--color-accent`
 * is navy-blue and in dark mode (#7aa3d4) sits next to --color-link
 * (#7ab8ff) -- close enough that non-link text painted with it reads as
 * clickable. `border-color` / `background` / `text-decoration-color`
 * uses are exempt (STYLE_GUIDE_VISUAL.md explicitly allows --color-accent
 * for structural UI where the element shape already signals
 * non-clickability); only the text-fill `color:` property is checked.
 *
 * Every entry in ALLOWLIST below was manually verified against the
 * component/page markup to confirm the selector is a real <a> or
 * <button> (or, for :hover/:focus/[data-state] rules, a pseudo-state on
 * one). Keyed by `relativeFile::selector`, not bare selector text, so
 * reusing the same class name in an unrelated future file does not
 * silently inherit the exemption -- it has to be verified again. Adding
 * a new `color: var(--color-accent)` selector requires the same
 * verification before adding it here -- this script is a gate, not a
 * rubber stamp.
 *
 * Parsing approach: strip `/* ... *\/` comments (blanked out, not
 * deleted, so line numbers stay correct), then repeatedly match
 * `SELECTOR { BODY }` where BODY contains no braces -- this naturally
 * extracts innermost blocks first regardless of `@media`/`@supports`
 * wrapping, which is all a rule needs since at-rule conditions don't
 * change which selector governs a declaration. A selector list
 * (`.a, .b { ... }`) is split on top-level commas and each branch is
 * checked independently, so an unlisted selector can't ride through by
 * being comma-joined with an allowlisted one. Declarations are split on
 * `;` within the body, so a missing trailing semicolon on the last
 * declaration (valid CSS) is still caught.
 *
 * Incident history: the same mistake shipped three times before this
 * check existed -- novel timeline labels (f3a449325, 2026-05-23, which
 * is also when the STYLE_GUIDE_VISUAL.md rule was written), then in one
 * session on 2026-08-31/09-01 across the FAQ card question heading
 * (8643cca36), the halving-card reward number and code-analysis trait
 * label (76d336eef), and the 404 page heading. A written rule and a
 * Read-the-Guide gate trigger were not enough on their own; this static
 * check exists so the next unlisted selector fails fast instead of
 * shipping.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');

const SCAN_DIRS = ['src/components', 'src/pages', 'src/styles', 'src/layouts'];
const EXTENSIONS = new Set(['.astro', '.css']);

// `relativeFile::selector` -> verified real link/button. The file part
// must match exactly (see file header) -- copying an allowlisted
// selector string into a different file does not exempt it there.
const ALLOWLIST = new Set([
  'src/styles/global.css::.type-badge', // real <a> (EntryMeta.astro markup)
  'src/styles/global.css::.qa-card .qa-pill', // real <a> (remark-faq-card.mjs output)
  'src/components/Footer.astro::.footer-links .novel-link', // real <a>
  'src/components/CharacterIntro.astro::.character-epithet', // inside a real <a class="character-card">
  'src/components/SupplyCurveComparison.astro::.scale-btn.active', // real <button>
  'src/components/Header.astro::.site-title:hover', // real <a>
  'src/components/Header.astro::.mode-toggle:hover', // real <button>
  'src/components/Header.astro::.mobile-menu-toggle:hover', // real <button>
  'src/components/ShareButton.astro::.share-button:hover', // real <button>
  "src/components/ShareButton.astro::.share-button[data-share-state='copied']", // real <button>
  'src/pages/404.astro::.not-found a', // real <a>, also underlined
  'src/pages/ja/404.astro::.not-found a', // real <a>, also underlined
  'src/pages/index.astro::.stat-number', // inside a real <a class="stat">
  'src/pages/ja/index.astro::.stat-number', // inside a real <a class="stat">
  'src/pages/index.astro::.view-all:hover', // real <a>
  'src/pages/ja/index.astro::.view-all:hover', // real <a>
  'src/pages/index.astro::.rank-count', // inside a real <a class="rank-item">
  'src/pages/ja/index.astro::.rank-count', // inside a real <a class="rank-item">
  'src/pages/novel/index.astro::.buy-links a:hover', // real <a>
  'src/pages/ja/novel/index.astro::.buy-links a:hover', // real <a>
]);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (EXTENSIONS.has(path.extname(name))) out.push(full);
  }
  return out;
}

// Blanks out `/* ... */` comment bodies (keeps newlines, so line numbers
// computed from character offsets afterward stay correct).
function stripComments(text) {
  return text.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
}

function lineAt(text, index) {
  let line = 1;
  for (let i = 0; i < index; i++) if (text.charCodeAt(i) === 10) line++;
  return line;
}

// Extracts <style>...</style> block contents from an .astro file, each
// paired with the absolute character offset (into the ORIGINAL file
// text) where its content begins, so line numbers reported later map
// back to the real file. For a .css file, the whole file is one block
// at offset 0.
function extractStyleBlocks(text, isAstro) {
  if (!isAstro) return [{ content: text, offset: 0 }];
  const blocks = [];
  const re = /<style\b[^>]*>([\s\S]*?)<\/style>/g;
  let m;
  while ((m = re.exec(text))) {
    blocks.push({ content: m[1], offset: m.index + m[0].indexOf(m[1]) });
  }
  return blocks;
}

// Innermost `SELECTOR { BODY }` blocks, BODY containing no braces --
// this naturally skips past @media/@supports wrappers since the regex
// engine backtracks past their opening `{` looking for a brace-free
// body, landing on the nested rule instead. offset is added to every
// reported position so line numbers are relative to the original file.
const BLOCK_RE = /([^{}]+)\{([^{}]*)\}/g;
const DECL_RE = /^color\s*:\s*var\(\s*--color-accent\s*\)$/i;

function checkFile(file) {
  const rel = path.relative(ROOT, file).split(path.sep).join('/');
  const raw = readFileSync(file, 'utf8');
  const isAstro = path.extname(file) === '.astro';
  const found = [];

  for (const { content, offset } of extractStyleBlocks(raw, isAstro)) {
    const stripped = stripComments(content);
    let m;
    BLOCK_RE.lastIndex = 0;
    while ((m = BLOCK_RE.exec(stripped))) {
      const [full, selectorText, body] = m;
      const bodyStart = m.index + selectorText.length + 1; // +1 for the `{`

      let declPos = 0;
      for (const rawDecl of body.split(';')) {
        const decl = rawDecl.replace(/\s+/g, ' ').trim();
        if (DECL_RE.test(decl)) {
          const leadingWs = rawDecl.match(/^\s*/)[0].length;
          const absIndex = offset + bodyStart + declPos + leadingWs;
          const selectors = selectorText
            .split(',')
            .map((s) => s.replace(/\s+/g, ' ').trim())
            .filter(Boolean);
          for (const selector of selectors) {
            if (!ALLOWLIST.has(`${rel}::${selector}`)) {
              found.push({ file: rel, line: lineAt(raw, absIndex), selector });
            }
          }
        }
        declPos += rawDecl.length + 1; // +1 for the removed `;`
      }
    }
  }
  return found;
}

function main() {
  const files = SCAN_DIRS.flatMap((d) => walk(path.join(ROOT, d)));
  const violations = files.flatMap(checkFile);

  if (violations.length === 0) {
    console.log('✓ Link-color confusion check passed. No unlisted `color: var(--color-accent)` selectors.');
    return;
  }

  console.log(`✗ ${violations.length} unlisted \`color: var(--color-accent)\` selector(s):\n`);
  for (const v of violations) {
    console.log(`  ${v.file}:${v.line}  ${v.selector}`);
  }
  console.log(
    '\nSTYLE_GUIDE_VISUAL.md "Link-color confusion rule": --color-accent is ' +
      'navy-blue and in dark mode is near-indistinguishable from --color-link. ' +
      'If the flagged selector is a real <a>/<button> (or a pseudo-state on ' +
      'one), add `<file>::<selector>` to ALLOWLIST in ' +
      'scripts/check-link-color-confusion.mjs after verifying the markup. ' +
      'Otherwise switch to --color-text (or a warm/neutral token) and keep ' +
      'emphasis via font-weight/size/spacing.',
  );
  process.exitCode = 1;
}

main();
