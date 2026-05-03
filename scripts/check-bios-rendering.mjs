#!/usr/bin/env node
/**
 * check-bios-rendering.mjs — visually verify participant bio mermaid timelines
 * render without column overflow at a target viewport width.
 *
 * Why this script exists:
 *   Mermaid timeline diagrams wrap labels only at whitespace. Japanese labels
 *   without internal spaces (e.g. "サトシ最有力候補と名指される") cannot
 *   wrap, and overflow the column box on any viewport narrower than the
 *   unbroken span. check-mermaid.mjs only validates syntax — it cannot
 *   detect visual overflow. This script renders each bio page in a real
 *   browser at the target width and saves screenshots for manual review.
 *
 *   Pair this script with check-mermaid.mjs after editing any bio timeline:
 *     1. node scripts/check-mermaid.mjs            # syntax
 *     2. node scripts/check-bios-rendering.mjs     # layout
 *
 * Prerequisites:
 *   - Astro dev server running: `npm run dev` (default http://localhost:4321)
 *   - playwright installed: `npm install playwright` then
 *     `npx playwright install chromium` if first run
 *
 * Usage:
 *   node scripts/check-bios-rendering.mjs
 *   node scripts/check-bios-rendering.mjs --width 800 --out /tmp/bio-check
 *   node scripts/check-bios-rendering.mjs --slugs satoshi-nakamoto,adam-back
 *
 * Flags:
 *   --width <px>    viewport width in pixels (default: 1100)
 *   --height <px>   viewport height in pixels (default: 1500)
 *   --out <dir>     output directory for PNGs (default: /tmp)
 *   --slugs <list>  comma-separated participant slugs
 *                   (default: all 5 core bios)
 *   --base <url>    dev server base URL
 *                   (default: http://localhost:4321/BitcoinArchive)
 *
 * Output files: <out>/bio-<slug>.png
 *
 * Exit codes:
 *   0 — all screenshots captured
 *   1 — dev server unreachable, playwright missing, or render failed
 */

import { chromium } from 'playwright';
import { existsSync, mkdirSync } from 'fs';

const args = process.argv.slice(2);
function flag(name, fallback) {
  const idx = args.indexOf(name);
  if (idx === -1 || idx + 1 >= args.length) return fallback;
  return args[idx + 1];
}

const WIDTH = parseInt(flag('--width', '1100'), 10);
const HEIGHT = parseInt(flag('--height', '1500'), 10);
const OUT = flag('--out', '/tmp');
const BASE = flag('--base', 'http://localhost:4321/BitcoinArchive');
const DEFAULT_SLUGS = [
  'satoshi-nakamoto',
  'gavin-andresen',
  'hal-finney',
  'adam-back',
  'wei-dai',
];
const SLUGS = flag('--slugs', '').split(',').filter(Boolean).length
  ? flag('--slugs', '').split(',').filter(Boolean)
  : DEFAULT_SLUGS;

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: 2,
});

const results = [];
for (const slug of SLUGS) {
  const url = `${BASE}/ja/participants/${slug}/`;
  try {
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(1500);
    // Capture the inner SVG so the screenshot covers the full diagram
    // including horizontally scrolled columns, not just the visible
    // viewport portion of the .mermaid-scroll wrapper.
    const svg = page.locator('.mermaid-scroll svg').first();
    if (!(await svg.count())) {
      results.push({ slug, status: 'no-mermaid' });
      continue;
    }
    await svg.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    const outFile = `${OUT}/bio-${slug}.png`;
    await svg.screenshot({ path: outFile });
    results.push({ slug, status: 'ok', file: outFile });
  } catch (err) {
    results.push({ slug, status: 'error', error: err.message });
  }
}

await browser.close();

let exit = 0;
for (const r of results) {
  if (r.status === 'ok') console.log(`✓ ${r.slug} → ${r.file}`);
  else if (r.status === 'no-mermaid') {
    // All target bios are expected to contain a .mermaid-scroll diagram.
    // Missing one usually means the page rendered as 404 (e.g. dev server
    // running on a fallback port like 4322 instead of 4321) or the
    // diagram failed to render. Either way it must fail the check, not
    // pass silently.
    console.error(`✗ ${r.slug}: no .mermaid-scroll element found (404? wrong port? render failure?)`);
    exit = 1;
  }
  else {
    console.error(`✗ ${r.slug}: ${r.error}`);
    exit = 1;
  }
}
console.log(`\nViewport: ${WIDTH}×${HEIGHT}, output: ${OUT}/`);
process.exit(exit);
