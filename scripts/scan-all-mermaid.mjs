#!/usr/bin/env node
/**
 * scan-all-mermaid.mjs
 *
 * Walk every .md file under `src/data/entries/en/` and
 * `src/data/translations/ja/`, find ones that contain a
 * ```mermaid fenced block, derive the public URL, then visit
 * each URL with Playwright (dark mode forced) and collect the
 * set of unique node / cluster / note background colors used by
 * the rendered SVGs. Used to enumerate every color literal that
 * the rehype-mermaid-themer.mjs substitution table must cover.
 *
 * Prerequisite: `npm run dev` running on http://localhost:4321.
 *
 * Output: prints the deduplicated list of background colors
 * sorted alphabetically, one per line.
 */
import { chromium } from 'playwright';
import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';

const ROOTS = [
  { dir: 'src/data/entries/en', urlPrefix: '/BitcoinArchive/entries' },
  { dir: 'src/data/translations/ja', urlPrefix: '/BitcoinArchive/ja/entries' },
];

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

const allColors = new Set();
const perPageHits = [];

for (const path of pages) {
  const url = 'http://localhost:4321' + path;
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  } catch (e) {
    console.error('skip', path, e.message);
    continue;
  }
  await page.evaluate(() => document.documentElement.setAttribute('data-mode', 'dark'));
  await page.waitForTimeout(150);
  const colors = await page.evaluate(() => {
    const found = new Set();
    document.querySelectorAll('.mermaid-scroll svg').forEach((svg) => {
      svg.querySelectorAll('g.node, g.cluster, g.noteGroup, .note').forEach((node) => {
        const shape = node.querySelector('rect, polygon, path, ellipse, circle');
        if (!shape) return;
        const fill = window.getComputedStyle(shape).fill;
        if (fill) found.add(fill);
      });
    });
    return [...found];
  });
  if (colors.length) perPageHits.push({ path, colors });
  colors.forEach((c) => allColors.add(c));
}

await browser.close();

console.log('# Unique background colors (dark mode, all mermaid pages)');
[...allColors].sort().forEach((c) => console.log(c));
console.error(`\nScanned ${pages.length} pages, ${perPageHits.length} had mermaid SVGs`);
