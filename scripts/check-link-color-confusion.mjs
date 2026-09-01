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
 * one). Adding a new `color: var(--color-accent)` selector requires the
 * same verification before adding it here -- this script is a gate, not
 * a rubber stamp.
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

// selector -> file it was verified in (documentation only; not checked
// against the file, so the same selector text is allowed anywhere).
const ALLOWLIST = new Set([
  '.type-badge', // real <a> (EntryMeta.astro)
  '.qa-card .qa-pill', // real <a> (remark-faq-card.mjs output)
  '.footer-links .novel-link', // real <a> (Footer.astro)
  '.character-epithet', // inside a real <a class="character-card"> (CharacterIntro.astro)
  '.scale-btn.active', // real <button> (SupplyCurveComparison.astro)
  '.site-title:hover', // real <a> (Header.astro)
  '.mode-toggle:hover', // real <button> (Header.astro)
  '.mobile-menu-toggle:hover', // real <button> (Header.astro)
  '.share-button:hover', // real <button> (ShareButton.astro)
  ".share-button[data-share-state='copied']", // real <button> (ShareButton.astro)
  '.not-found a', // real <a>, also underlined (404.astro)
  '.stat-number', // inside a real <a class="stat"> (index.astro)
  '.view-all:hover', // real <a> (index.astro)
  '.rank-count', // inside a real <a class="rank-item"> (index.astro)
  '.buy-links a:hover', // real <a> (novel/index.astro)
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

// Finds the selector governing a given line: the nearest preceding line
// ending in `{`. A CSS property declaration never ends in `{` (it ends
// in `;` or is a bare value line), so this is unambiguous -- including
// for pseudo-class/attribute selectors like `:hover` or `[data-x='y']`
// that contain colons themselves.
function findSelector(lines, propLineIndex) {
  for (let i = propLineIndex; i >= 0; i--) {
    const line = lines[i].trim();
    if (line.endsWith('{')) {
      return line.slice(0, -1).trim();
    }
  }
  return null;
}

const COLOR_RE = /^\s*color:\s*var\(--color-accent\)\s*;/;

function main() {
  const files = SCAN_DIRS.flatMap((d) => walk(path.join(ROOT, d)));
  const violations = [];

  for (const file of files) {
    const rel = path.relative(ROOT, file);
    const lines = readFileSync(file, 'utf8').split('\n');
    lines.forEach((line, idx) => {
      if (!COLOR_RE.test(line)) return;
      const selector = findSelector(lines, idx - 1);
      if (selector && ALLOWLIST.has(selector)) return;
      violations.push({ file: rel, line: idx + 1, selector: selector ?? '(unknown)' });
    });
  }

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
      'one), add it to ALLOWLIST in scripts/check-link-color-confusion.mjs ' +
      'after verifying the markup. Otherwise switch to --color-text (or a ' +
      'warm/neutral token) and keep emphasis via font-weight/size/spacing.',
  );
  process.exitCode = 1;
}

main();
