#!/usr/bin/env node
// scripts/screenshot-themes.mjs
//
// Group D of the modernization plan (temp/temp_0510_モダン化リデザイン計画.md
// § Phase 5). Captures every preview-phase theme variant on a fixed list of
// representative pages and emits a single side-by-side comparison HTML
// at `temp/screenshots/index.html` (= rows: pages, cols: theme/mode).
//
// USAGE
//   1. In one terminal, run the dev server:
//        npm run dev
//      and wait for "Local: http://localhost:4321/BitcoinArchive/" to appear.
//
//   2. In another terminal, run:
//        node scripts/screenshot-themes.mjs
//      (or: npm run screenshot:themes)
//
// The script does NOT spawn its own astro dev. We assume the user already
// runs the dev server. Reasons:
//   - dev-server boot includes pre-build steps (`generate-derived-related`,
//     git-dates, keyword index) and takes ~10-20s. Spawning + tearing it
//     down per-run is heavier than a one-time terminal.
//   - on a stable dev server, the script is repeatable: edit a token,
//     re-run, see the grid update.
//
// Output:
//   temp/screenshots/{theme}-{mode}-{page-id}.png
//   temp/screenshots/index.html  (open in browser to compare)
//
// All output paths are under temp/ which is gitignored; the script itself
// is committed (= part of repo).

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const REPO_ROOT = path.resolve(__dirname, '..');
const OUT_DIR = path.join(REPO_ROOT, 'temp', 'screenshots');

const BASE = 'http://localhost:4321/BitcoinArchive';

// 6 themes available via URL param.
const THEMES = ['retro', 'modern-a', 'modern-b', 'modern-c', 'modern-d', 'modern-e'];

// 3-way mode is `light` / `dark` / system (no attribute). For preview
// grids we capture the two explicit modes; modern-c is dark-only by
// design so we skip its `light` variant.
const MODES = ['light', 'dark'];

// Representative page list. Chosen to exercise different visual
// elements (homepage network graph, primary-source verbatim, analysis
// table, d3 swimlane, Mermaid timeline + gantt + quadrant, biography,
// d3 price chart). Keep this in sync with the Phase 5 spec.
const PAGES = [
  { id: 'home',                  path: '/' },
  { id: 'entry-wei-dai',         path: '/entries/correspondence/wei-dai/2008-08-22-satoshi-to-wei-dai/' },
  { id: 'analysis-cypherpunk',   path: '/entries/analysis/2008-10-31-cypherpunk-independent-arrival/' },
  { id: 'analysis-swimlane',     path: '/entries/analysis/2008-08-20-satoshi-activity-timeline/' },
  { id: 'analysis-mermaid-tl',   path: '/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/' },
  { id: 'analysis-mermaid-misc', path: '/entries/analysis/2008-10-31-satoshi-identity-hypotheses-overview/' },
  { id: 'participant-satoshi',   path: '/participants/satoshi-nakamoto/' },
  { id: 'chart',                 path: '/chart/' },
];

// Combinations: theme × mode, with modern-c skipping light.
function combos() {
  const out = [];
  for (const theme of THEMES) {
    for (const mode of MODES) {
      if (theme === 'modern-c' && mode === 'light') continue;
      out.push({ theme, mode });
    }
  }
  return out;
}

function comboLabel(c) {
  return `${c.theme} / ${c.mode}`;
}

function fileFor(theme, mode, pageId) {
  return `${theme}-${mode}-${pageId}.png`;
}

async function ensureOutDir() {
  await fs.promises.mkdir(OUT_DIR, { recursive: true });
}

async function checkServer() {
  // Quick liveness probe before launching the browser.
  try {
    const res = await fetch(`${BASE}/`, { method: 'GET' });
    if (!res.ok) {
      console.error(`[screenshot-themes] Dev server responded ${res.status} at ${BASE}/`);
      console.error('[screenshot-themes] Start it with `npm run dev` in another terminal.');
      process.exit(1);
    }
  } catch (err) {
    console.error(`[screenshot-themes] Cannot reach dev server at ${BASE}/`);
    console.error('[screenshot-themes] Start it with `npm run dev` in another terminal.');
    console.error(`[screenshot-themes] Underlying error: ${err.message}`);
    process.exit(1);
  }
}

async function captureOne(context, page, theme, mode, idx, total) {
  const url = `${BASE}${page.path}?theme=${theme}`;
  const outFile = path.join(OUT_DIR, fileFor(theme, mode, page.id));
  const t0 = Date.now();

  const p = await context.newPage();
  let status = 'ok';
  let httpStatus = 0;
  try {
    // Pre-set localStorage on the origin so the head-earliest inline
    // script in BaseLayout picks up the chosen mode on first paint
    // (no FOUC). We can only access localStorage after navigation, so
    // we navigate twice: once to set, once to capture.
    await p.goto(`${BASE}/`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await p.evaluate((m) => { try { localStorage.setItem('mode', m); } catch (_) {} }, mode);

    const resp = await p.goto(url, { waitUntil: 'domcontentloaded', timeout: 45000 });
    httpStatus = resp ? resp.status() : 0;
    if (!resp || !resp.ok()) {
      status = `http ${httpStatus}`;
    } else {
      // Allow d3 components and Mermaid SVGs to settle. networkidle
      // can hang on dev (HMR keeps a websocket open), so we use load
      // + a fixed buffer. 1500ms is empirically enough for the d3
      // chart mount + theme listener tick.
      await p.waitForLoadState('load', { timeout: 30000 }).catch(() => {});
      await p.waitForTimeout(1500);
    }

    await p.screenshot({ path: outFile, fullPage: false });
  } catch (err) {
    status = `err: ${err.message.split('\n')[0]}`;
  } finally {
    await p.close();
  }

  const ms = Date.now() - t0;
  const tag = `${theme}-${mode}-${page.id}`;
  console.log(`[${idx}/${total}] ${tag.padEnd(42)} ${ms.toString().padStart(5)}ms  ${status}`);
  return { theme, mode, pageId: page.id, file: fileFor(theme, mode, page.id), ms, status, httpStatus };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderIndexHtml(results) {
  const cs = combos();
  // Look up by `${theme}-${mode}-${pageId}` for fast cell render.
  const byKey = new Map(results.map(r => [`${r.theme}-${r.mode}-${r.pageId}`, r]));

  const headerRow = ['<th class="rowhead">page</th>']
    .concat(cs.map(c => `<th><div class="theme">${escapeHtml(c.theme)}</div><div class="mode">${escapeHtml(c.mode)}</div></th>`))
    .join('');

  const bodyRows = PAGES.map(pg => {
    const cells = cs.map(c => {
      const r = byKey.get(`${c.theme}-${c.mode}-${pg.id}`);
      if (!r) return '<td class="empty">—</td>';
      if (r.status !== 'ok') {
        return `<td class="failed"><div class="cell-status">${escapeHtml(r.status)}</div></td>`;
      }
      const file = encodeURIComponent(r.file);
      const previewUrl = `${BASE}${pg.path}?theme=${c.theme}`;
      return `
        <td>
          <a href="${file}" target="_blank" rel="noopener" title="open ${escapeHtml(r.file)} full size">
            <img src="${file}" alt="${escapeHtml(`${c.theme} ${c.mode} ${pg.id}`)}" loading="lazy" />
          </a>
          <div class="cell-meta">
            <a href="${escapeHtml(previewUrl)}" target="_blank" rel="noopener">live ↗</a>
            <span class="ms">${r.ms}ms</span>
          </div>
        </td>
      `;
    }).join('');
    return `
      <tr>
        <th class="rowhead">
          <div class="page-id">${escapeHtml(pg.id)}</div>
          <div class="page-path"><code>${escapeHtml(pg.path)}</code></div>
        </th>
        ${cells}
      </tr>
    `;
  }).join('');

  const okCount = results.filter(r => r.status === 'ok').length;
  const totalCount = results.length;
  const generated = new Date().toISOString();

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>BitcoinArchive — theme comparison grid</title>
<style>
  body { margin: 0; padding: 24px; background: #1a1a1a; color: #f0f0f0;
         font: 13px/1.4 -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
  h1 { font-size: 18px; margin: 0 0 4px; }
  .meta { color: #888; margin-bottom: 16px; font-size: 12px; }
  .grid-wrap { overflow: auto; border: 1px solid #333; border-radius: 4px; background: #111; }
  table { border-collapse: separate; border-spacing: 0; }
  th, td { vertical-align: top; padding: 8px; border-right: 1px solid #2a2a2a; border-bottom: 1px solid #2a2a2a; }
  th { background: #222; position: sticky; top: 0; z-index: 2; text-align: left; }
  th.rowhead { position: sticky; left: 0; z-index: 3; background: #222; min-width: 200px; }
  th.rowhead .page-id { font-weight: 600; color: #f0f0f0; }
  th.rowhead .page-path { color: #888; font-size: 11px; word-break: break-all; }
  th .theme { font-weight: 600; color: #f0f0f0; }
  th .mode { font-size: 11px; color: #aaa; }
  td img { display: block; width: 320px; height: auto; border: 1px solid #333; }
  td.failed { background: #2a1414; color: #ff8888; min-width: 320px; text-align: center; }
  td.empty { background: #1a1a1a; color: #555; text-align: center; }
  .cell-meta { display: flex; justify-content: space-between; margin-top: 4px; font-size: 11px; color: #888; }
  .cell-meta a { color: #79b8ff; text-decoration: none; }
  .cell-meta a:hover { text-decoration: underline; }
  .cell-status { padding: 12px; }
  .legend { margin-top: 16px; color: #888; font-size: 12px; }
  .legend code { background: #222; padding: 1px 4px; border-radius: 3px; }
</style>
</head>
<body>
  <h1>BitcoinArchive — theme comparison grid</h1>
  <div class="meta">
    Generated ${escapeHtml(generated)} · ${okCount}/${totalCount} screenshots captured ·
    rows = page, cols = theme/mode · click a thumbnail to open the full PNG ·
    click <code>live ↗</code> to open the live dev URL.
  </div>
  <div class="grid-wrap">
    <table>
      <thead><tr>${headerRow}</tr></thead>
      <tbody>${bodyRows}</tbody>
    </table>
  </div>
  <div class="legend">
    Skipped: <code>modern-c / light</code> (modern-c is dark-only by design).
    Failures show the HTTP status or error message in the cell.
  </div>
</body>
</html>
`;
}

async function main() {
  const startedAt = Date.now();
  await ensureOutDir();
  await checkServer();

  const cs = combos();
  const tasks = [];
  for (const page of PAGES) {
    for (const c of cs) {
      tasks.push({ page, theme: c.theme, mode: c.mode });
    }
  }

  console.log(`[screenshot-themes] capturing ${tasks.length} screenshots`);
  console.log(`[screenshot-themes] pages=${PAGES.length} themes=${THEMES.length} modes=${MODES.length} (modern-c/light skipped)`);
  console.log(`[screenshot-themes] output: ${path.relative(REPO_ROOT, OUT_DIR)}/`);
  console.log('');

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    deviceScaleFactor: 1,
    // Tell the server we want en (default locale, no /ja prefix).
    locale: 'en-US',
  });

  const results = [];
  let i = 0;
  for (const t of tasks) {
    i += 1;
    const r = await captureOne(context, t.page, t.theme, t.mode, i, tasks.length);
    results.push(r);
  }

  await context.close();
  await browser.close();

  // Write comparison HTML.
  const indexHtml = renderIndexHtml(results);
  const indexPath = path.join(OUT_DIR, 'index.html');
  await fs.promises.writeFile(indexPath, indexHtml, 'utf8');

  // Summary.
  const okCount = results.filter(r => r.status === 'ok').length;
  const totalMs = Date.now() - startedAt;
  const avgMs = results.length ? Math.round(results.reduce((s, r) => s + r.ms, 0) / results.length) : 0;

  console.log('');
  console.log(`[screenshot-themes] done: ${okCount}/${results.length} ok in ${(totalMs / 1000).toFixed(1)}s (avg ${avgMs}ms/shot)`);

  const failed = results.filter(r => r.status !== 'ok');
  if (failed.length) {
    console.log('');
    console.log(`[screenshot-themes] ${failed.length} failure(s):`);
    for (const f of failed) {
      console.log(`  - ${f.theme}-${f.mode}-${f.pageId}: ${f.status}`);
    }
  }

  console.log('');
  console.log(`[screenshot-themes] open: file://${indexPath}`);
}

main().catch((err) => {
  console.error('[screenshot-themes] fatal:', err);
  process.exit(1);
});
