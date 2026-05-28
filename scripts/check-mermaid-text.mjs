#!/usr/bin/env node
/**
 * check-mermaid-text.mjs
 *
 * Walk every .md file under `src/data/entries/en/` and
 * `src/data/translations/ja/` that contains a ```mermaid block,
 * visit the rendered page with Playwright in dark mode, and
 * compute the WCAG 2.1 contrast ratio between every visible
 * label and its node background. Flag any label below 4.5:1
 * (WCAG AA for normal text).
 *
 * Prerequisite: `npm run dev` running on http://localhost:4321.
 *
 * Output: JSON array of per-page results
 *   { path, lowContrastCount, samples: [{ text, color, bg,
 *     contrast }] }
 *
 * Exit code: 0 if every page has lowContrastCount === 0,
 * 1 if any page has a failing label.
 */
import { chromium } from 'playwright';
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOTS = [
  { dir: 'src/data/entries/en', urlPrefix: '/BitcoinArchive/entries' },
  { dir: 'src/data/translations/ja', urlPrefix: '/BitcoinArchive/ja/entries' },
];

const WCAG_AA_THRESHOLD = 4.5;

async function walk(dir) {
  const out = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.isFile() && e.name.endsWith('.md')) out.push(p);
  }
  return out;
}

async function findPagesWithMermaid() {
  const pages = [];
  for (const { dir, urlPrefix } of ROOTS) {
    const files = await walk(dir);
    for (const f of files) {
      const body = await readFile(f, 'utf8');
      if (!body.includes('```mermaid')) continue;
      const rel = relative(dir, f).replace(/\.md$/, '/');
      pages.push(`${urlPrefix}/${rel}`);
    }
  }
  return pages;
}

const pages = await findPagesWithMermaid();
console.error(`Found ${pages.length} mermaid-bearing pages`);

const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 1200, height: 800 } });
const page = await ctx.newPage();

const results = [];

for (const path of pages) {
  const url = 'http://localhost:4321' + path;
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  } catch (e) {
    console.error('skip', path, e.message);
    continue;
  }
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-mode', 'dark');
    localStorage.setItem('mode', 'dark');
  });
  await page.waitForTimeout(200);

  // WCAG 2.1 relative luminance + contrast ratio.
  // Runs in the page context so getComputedStyle is available.
  const issues = await page.evaluate((WCAG_THRESHOLD) => {
    function parseColor(s) {
      if (!s) return null;
      const m = s.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const parts = m[1].split(',').map((x) => parseFloat(x.trim()));
      const [r, g, b, a = 1] = parts;
      return { r, g, b, a };
    }
    function srgbToLin(c) {
      const x = c / 255;
      return x <= 0.03928 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
    }
    function relLuminance(c) {
      return 0.2126 * srgbToLin(c.r) + 0.7152 * srgbToLin(c.g) + 0.0722 * srgbToLin(c.b);
    }
    function contrast(fg, bg) {
      const L1 = relLuminance(fg);
      const L2 = relLuminance(bg);
      const lighter = Math.max(L1, L2);
      const darker = Math.min(L1, L2);
      return (lighter + 0.05) / (darker + 0.05);
    }
    // Composite fg over bg using alpha (if fg has translucency the
    // effective color the eye sees is the blended one).
    function composite(fg, bg) {
      if (!fg || fg.a === 1) return fg;
      const a = fg.a;
      return {
        r: fg.r * a + bg.r * (1 - a),
        g: fg.g * a + bg.g * (1 - a),
        b: fg.b * a + bg.b * (1 - a),
        a: 1,
      };
    }

    const pageBg = parseColor(window.getComputedStyle(document.body).backgroundColor);
    const out = [];
    document.querySelectorAll('.mermaid-scroll svg').forEach((svg, svgIdx) => {
      const svgId = svg.id || `svg-${svgIdx}`;
      svg.querySelectorAll('text, tspan, foreignObject *').forEach((el) => {
        const text = (el.textContent || '').trim();
        if (!text) return;
        // Skip `<text>` elements that contain `<tspan>` children — the
        // tspans are inspected separately and define the actual rendered
        // glyph color. The wrapping `<text>` often has a different
        // `fill` (e.g. mermaid's `.actor { fill: var(--mermaid-node-bg) }`
        // is the actor box color, not the label color), which would
        // otherwise produce a false-positive low-contrast report
        // against the body bg.
        if (el.tagName.toLowerCase() === 'text' && el.querySelector('tspan')) return;
        const cs = window.getComputedStyle(el);
        // mermaid foreignObject labels use color; text/tspan use fill.
        const fgRaw = el.tagName.toLowerCase() === 'text' || el.tagName.toLowerCase() === 'tspan'
          ? cs.fill
          : cs.color;
        let fg = parseColor(fgRaw);
        if (!fg) return;
        // Find nearest background.
        const parent = el.closest('g.node, g.cluster, g.noteGroup, .note');
        let bg = null;
        if (parent) {
          const shape = parent.querySelector('rect, polygon, path, ellipse, circle');
          if (shape) bg = parseColor(window.getComputedStyle(shape).fill);
        }
        if (!bg) bg = pageBg;
        if (!bg) return;
        // Composite fg over bg before computing contrast (translucent
        // labels stack visually).
        const effectiveFg = composite(fg, bg);
        const ratio = contrast(effectiveFg, bg);
        out.push({
          svgId,
          text: text.slice(0, 40),
          color: `rgb(${fg.r}, ${fg.g}, ${fg.b})`,
          bg: `rgb(${bg.r}, ${bg.g}, ${bg.b})`,
          contrast: Math.round(ratio * 100) / 100,
        });
      });
    });
    return out.filter((i) => i.contrast < WCAG_THRESHOLD);
  }, WCAG_AA_THRESHOLD);

  // Dedupe by (text, bg) so repeated foreignObject text + tspan don't
  // overcount the same visual label.
  const seen = new Map();
  for (const i of issues) {
    const key = `${i.text}|${i.bg}`;
    if (!seen.has(key)) seen.set(key, i);
  }
  const deduped = [...seen.values()];

  results.push({
    path,
    lowContrastCount: deduped.length,
    samples: deduped.slice(0, 5),
  });
}

await browser.close();

console.log(JSON.stringify(results, null, 2));

const failing = results.filter((r) => r.lowContrastCount > 0);
console.error(`\n${results.length} pages scanned, ${failing.length} have labels < ${WCAG_AA_THRESHOLD}:1`);
process.exit(failing.length === 0 ? 0 : 1);
