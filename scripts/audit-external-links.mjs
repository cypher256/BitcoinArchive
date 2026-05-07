#!/usr/bin/env node
/**
 * audit-external-links.mjs — Dead-link reporter for editor-written content
 *
 * Scans editor-written entries (aftermath/, analysis/, bip/, sourceforge/)
 * for external http(s) URLs in the body and frontmatter (sourceUrl,
 * secondarySources[].url) and checks each URL with an HTTP HEAD/GET.
 *
 * For each URL, classifies the result as:
 *   - ok: 200 with no significant redirect
 *   - redirect: working but landed on a different URL (informational)
 *   - lossy-redirect: 200 but redirected to root or unrelated location
 *     (the original page is effectively gone)
 *   - 404 / dead: explicit failure
 *   - error: network error, timeout
 *
 * Writes a categorized report to temp/dead-external-links-YYYYMMDD.md.
 * The editor reads the report and updates the markdown source manually.
 *
 * NOTE: This script does NOT touch verbatim primary records
 * (forum/correspondence/emails). Those are handled by
 * src/lib/rehype-strip-archive-links.mjs at build time, which strips
 * clickability rather than monitoring URL liveness.
 *
 * Usage:
 *   node scripts/audit-external-links.mjs           # default: editor body + all frontmatter
 *   node scripts/audit-external-links.mjs --body    # editor body only
 *   node scripts/audit-external-links.mjs --frontmatter  # frontmatter only
 *   node scripts/audit-external-links.mjs --concurrency 30
 *   node scripts/audit-external-links.mjs --timeout 10000
 *
 * Exit codes:
 *   0 — scan completed (regardless of dead links found; report is informational)
 *   1 — scan failed (script error, not dead links)
 */
import { readdirSync, readFileSync, statSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');

// ---------------------------------------------------------------------------
// CLI args
// ---------------------------------------------------------------------------
const args = process.argv.slice(2);
const SCAN_BODY = args.includes('--body') || (!args.includes('--frontmatter'));
const SCAN_FRONTMATTER = args.includes('--frontmatter') || (!args.includes('--body'));
const CONCURRENCY = parseInt(getFlag('--concurrency', '20'), 10);
const TIMEOUT_MS = parseInt(getFlag('--timeout', '15000'), 10);

function getFlag(name, fallback) {
  const idx = args.indexOf(name);
  if (idx === -1 || idx + 1 >= args.length) return fallback;
  return args[idx + 1];
}

// ---------------------------------------------------------------------------
// Scan target dirs (editor-written content + frontmatter from all)
// ---------------------------------------------------------------------------
const EDITOR_DIRS = [
  'src/data/entries/en/aftermath',
  'src/data/entries/en/analysis',
  'src/data/entries/en/bip',
  'src/data/entries/en/sourceforge',
  'src/data/translations/ja/aftermath',
  'src/data/translations/ja/analysis',
  'src/data/translations/ja/bip',
  'src/data/translations/ja/sourceforge',
];

const ALL_DIRS = [
  'src/data/entries/en',
  'src/data/translations/ja',
];

function walk(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (full.endsWith('.md')) out.push(full);
  }
  return out;
}

function splitFrontmatter(content) {
  if (!content.startsWith('---\n')) return { fm: '', body: content };
  const end = content.indexOf('\n---\n', 4);
  if (end === -1) return { fm: '', body: content };
  return { fm: content.slice(4, end), body: content.slice(end + 5) };
}

// ---------------------------------------------------------------------------
// URL extraction
// ---------------------------------------------------------------------------
const HTTP_URL_RE = /https?:\/\/[^\s)"'\\<>]+/g;

// extracts URLs from frontmatter `sourceUrl: "..."` and `url: "..."` fields
function extractFrontmatterUrls(fm) {
  const urls = [];
  const fieldRe = /^\s*(?:sourceUrl|url)\s*:\s*"(https?:\/\/[^"]+)"/gm;
  let m;
  while ((m = fieldRe.exec(fm)) !== null) urls.push(m[1]);
  return urls;
}

// extracts URLs from body markdown
function extractBodyUrls(body) {
  // Strip code blocks first to avoid matching URLs inside code samples
  const stripped = body
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`\n]*`/g, '');
  const urls = [];
  let m;
  HTTP_URL_RE.lastIndex = 0;
  while ((m = HTTP_URL_RE.exec(stripped)) !== null) {
    // trim trailing punctuation that isn't part of a URL
    let url = m[0].replace(/[.,;:]+$/, '');
    urls.push(url);
  }
  return urls;
}

// ---------------------------------------------------------------------------
// Build URL → [files] index
// ---------------------------------------------------------------------------
const urlIndex = new Map(); // url -> Set<file>

function addUrl(url, file) {
  if (!urlIndex.has(url)) urlIndex.set(url, new Set());
  urlIndex.get(url).add(file);
}

if (SCAN_BODY) {
  for (const dir of EDITOR_DIRS) {
    const fullDir = path.join(ROOT, dir);
    for (const file of walk(fullDir)) {
      const content = readFileSync(file, 'utf8');
      const { body } = splitFrontmatter(content);
      for (const url of extractBodyUrls(body)) {
        addUrl(url, path.relative(ROOT, file));
      }
    }
  }
}

if (SCAN_FRONTMATTER) {
  for (const dir of ALL_DIRS) {
    const fullDir = path.join(ROOT, dir);
    for (const file of walk(fullDir)) {
      const content = readFileSync(file, 'utf8');
      const { fm } = splitFrontmatter(content);
      for (const url of extractFrontmatterUrls(fm)) {
        addUrl(url, path.relative(ROOT, file));
      }
    }
  }
}

const allUrls = [...urlIndex.keys()];
console.log(`Scanning ${allUrls.length} unique URLs from ${[...new Set([...urlIndex.values()].flatMap((s) => [...s]))].length} files...`);

// ---------------------------------------------------------------------------
// HTTP check
// ---------------------------------------------------------------------------
// Status codes where HEAD is unsupported but the URL itself is likely fine
// when accessed with GET. Many CDN / app-server stacks reply 405 to HEAD
// or 501 (no HEAD implementation) while serving the same path normally
// for GET. Retrying on these status codes (not just on thrown errors)
// avoids classifying live URLs as client-error.
const HEAD_RETRY_STATUSES = new Set([405, 501]);

async function checkUrl(url) {
  const result = { url, status: null, finalUrl: null, verdict: null, error: null };
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    const fetchOpts = {
      redirect: 'follow',
      signal: controller.signal,
      headers: { 'User-Agent': 'BitcoinArchive-link-audit/1.0' },
    };
    let response;
    try {
      response = await fetch(url, { ...fetchOpts, method: 'HEAD' });
      // HEAD returned but with a status that suggests HEAD itself is the
      // problem, not the URL. Retry with GET before classifying.
      if (HEAD_RETRY_STATUSES.has(response.status)) {
        response = await fetch(url, { ...fetchOpts, method: 'GET' });
      }
    } catch (e) {
      // HEAD threw (network reset, connection refused, server hung up,
      // etc.). Retry once with GET before giving up — except on timeout,
      // which the outer catch handles uniformly.
      if (e.name === 'AbortError') throw e;
      response = await fetch(url, { ...fetchOpts, method: 'GET' });
    }
    clearTimeout(timer);
    result.status = response.status;
    result.finalUrl = response.url;

    // classify
    if (response.status >= 200 && response.status < 300) {
      // landed-URL analysis
      const finalPath = new URL(result.finalUrl).pathname;
      const origPath = new URL(url).pathname;
      const finalHost = new URL(result.finalUrl).host;
      const origHost = new URL(url).host;
      const sameHost = finalHost.replace(/^www\./, '') === origHost.replace(/^www\./, '');
      // lossy redirect: same host but landed on root, while original was a sub-path
      if (sameHost && origPath.length > 1 && (finalPath === '/' || finalPath === '')) {
        result.verdict = 'lossy-redirect';
      } else if (result.finalUrl !== url && url.replace(/^http:/, 'https:') !== result.finalUrl && url + '/' !== result.finalUrl) {
        result.verdict = 'redirect';
      } else {
        result.verdict = 'ok';
      }
    } else if (response.status === 404 || response.status === 410) {
      result.verdict = 'dead';
    } else if (response.status >= 400 && response.status < 500) {
      result.verdict = 'client-error';
    } else if (response.status >= 500) {
      result.verdict = 'server-error';
    } else {
      result.verdict = `status-${response.status}`;
    }
  } catch (e) {
    result.verdict = 'error';
    result.error = e.message || String(e);
  }
  return result;
}

// ---------------------------------------------------------------------------
// Run with concurrency
// ---------------------------------------------------------------------------
async function runConcurrent(items, fn, concurrency) {
  const results = [];
  let cursor = 0;
  let completed = 0;
  const total = items.length;

  async function worker() {
    while (true) {
      const i = cursor++;
      if (i >= items.length) return;
      const r = await fn(items[i]);
      results[i] = r;
      completed++;
      if (completed % 50 === 0 || completed === total) {
        process.stderr.write(`\r  checked ${completed}/${total}  `);
      }
    }
  }

  const workers = Array.from({ length: concurrency }, worker);
  await Promise.all(workers);
  process.stderr.write('\n');
  return results;
}

const startTime = Date.now();
const results = await runConcurrent(allUrls, checkUrl, CONCURRENCY);
const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
console.log(`Scan complete in ${elapsed}s.`);

// ---------------------------------------------------------------------------
// Categorize and write report
// ---------------------------------------------------------------------------
const buckets = {
  dead: [],            // 404 / 410
  'lossy-redirect': [], // 200 but landed on root
  'client-error': [],   // 4xx other
  'server-error': [],   // 5xx
  error: [],            // network failure
  redirect: [],         // working but moved (informational)
  ok: [],
};

for (const r of results) {
  buckets[r.verdict] = buckets[r.verdict] || [];
  buckets[r.verdict].push(r);
}

const today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
const tempDir = path.join(ROOT, 'temp');
if (!existsSync(tempDir)) mkdirSync(tempDir, { recursive: true });
const reportPath = path.join(tempDir, `dead-external-links-${today}.md`);

const lines = [];
lines.push(`# External link audit report`);
lines.push('');
lines.push(`Generated: ${new Date().toISOString()}`);
lines.push(`Scope: ${SCAN_BODY ? 'body' : ''}${SCAN_BODY && SCAN_FRONTMATTER ? ' + ' : ''}${SCAN_FRONTMATTER ? 'frontmatter' : ''}`);
lines.push(`Concurrency: ${CONCURRENCY}, timeout: ${TIMEOUT_MS}ms, scan time: ${elapsed}s`);
lines.push('');
lines.push(`## Summary`);
lines.push('');
lines.push(`| Verdict | Count |`);
lines.push(`|---|---:|`);
for (const [verdict, items] of Object.entries(buckets)) {
  if (items.length > 0) lines.push(`| ${verdict} | ${items.length} |`);
}
lines.push(`| **total** | ${results.length} |`);
lines.push('');

function emitBucket(title, key, note) {
  const items = buckets[key] || [];
  if (items.length === 0) return;
  lines.push(`## ${title} (${items.length})`);
  lines.push('');
  if (note) {
    lines.push(`> ${note}`);
    lines.push('');
  }
  // Group by file
  const byFile = new Map();
  for (const r of items) {
    const files = [...urlIndex.get(r.url)];
    for (const f of files) {
      if (!byFile.has(f)) byFile.set(f, []);
      byFile.get(f).push(r);
    }
  }
  for (const [file, rs] of [...byFile.entries()].sort()) {
    lines.push(`### ${file}`);
    for (const r of rs) {
      const line = [`- \`${r.url}\``];
      if (r.status) line.push(`(${r.status})`);
      if (r.finalUrl && r.finalUrl !== r.url) line.push(`→ ${r.finalUrl}`);
      if (r.error) line.push(`[${r.error}]`);
      lines.push(line.join(' '));
    }
    lines.push('');
  }
}

emitBucket('❌ Dead (404 / 410, action required)', 'dead', '原 URL のコンテンツは消失。代替を探して markdown を更新するか、出典を差し替える。');
emitBucket('⚠️ Lossy redirect (page → root, action recommended)', 'lossy-redirect', '原 URL は今もアクセス可能だが、リダイレクト先がルートやトップページで、元のコンテンツが事実上消失している。代替を探す。');
emitBucket('⚠️ Client error (4xx other)', 'client-error', '403 等。代替確認。');
emitBucket('⚠️ Server error (5xx, may be transient)', 'server-error', 'サーバー側の一時エラー。再走で解消する可能性あり。');
emitBucket('⚠️ Network error / timeout', 'error', '到達不能。ネットワーク or DNS 失敗。');
emitBucket('ℹ️ Redirected (still working, informational)', 'redirect', '機能的には OK だが新 URL に書き換えると安定する。');

writeFileSync(reportPath, lines.join('\n'), 'utf8');
console.log(`Report written: ${path.relative(ROOT, reportPath)}`);

// Summary to stdout
console.log('');
console.log('Summary:');
for (const [verdict, items] of Object.entries(buckets)) {
  if (items.length > 0) console.log(`  ${verdict}: ${items.length}`);
}
console.log(`  total: ${results.length}`);
