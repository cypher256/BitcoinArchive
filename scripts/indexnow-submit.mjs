#!/usr/bin/env node
/**
 * indexnow-submit.mjs — after a Cloudflare deploy, notify IndexNow
 * (Bing, Yandex, Seznam, Naver — NOT Google, which does not use IndexNow) of
 * the site's URLs so the participating engines recrawl changed pages quickly.
 *
 * Operational tool. Run by .github/workflows/deploy-cloudflare.yml after the
 * Pages deploy step. Best-effort: any failure logs a warning and exits 0, so a
 * ping problem never un-publishes or reddens an already-successful deploy.
 *
 * Single sources it relies on — nothing about the site is restated here:
 *   - origin : PRIMARY_ORIGIN from site-config.mjs (the canonical indexed host;
 *              the github.io mirror is a shared-host subpath and is never pinged)
 *   - key    : the public key file public/<key>.txt — the very file the engines
 *              fetch to verify ownership. Discovered from disk, not hardcoded,
 *              so the key lives in exactly one place.
 *   - urls   : the generated sitemap in dist/ (already built with that origin)
 *
 * Flags:
 *   --dry-run   resolve key + URLs and print the payload, but send nothing.
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PRIMARY_ORIGIN } from '../site-config.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC = path.join(ROOT, 'public');
const DIST = path.join(ROOT, 'dist');
const ENDPOINT = 'https://api.indexnow.org/indexnow';
const DRY = process.argv.includes('--dry-run');

// The IndexNow key file is public/<key>.txt whose stem is a hex token and whose
// body is exactly that token (the shape the engines validate). That uniquely
// identifies it among public/*.txt — llms.txt etc. fail both the name and the
// body test — so the key file itself is the single source for the key.
function findKey() {
  if (!existsSync(PUBLIC)) return null;
  for (const f of readdirSync(PUBLIC)) {
    const m = f.match(/^([0-9a-fA-F]{8,128})\.txt$/);
    if (!m) continue;
    const body = readFileSync(path.join(PUBLIC, f), 'utf8').trim();
    if (body === m[1]) return m[1];
  }
  return null;
}

// All <loc> URLs from the generated sitemap: sitemap-index.xml points at one or
// more child sitemaps (@astrojs/sitemap emits sitemap-0.xml, -1, …); fall back
// to sitemap-0.xml if no index is present.
function sitemapUrls() {
  const locs = (xml) => [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  const index = path.join(DIST, 'sitemap-index.xml');
  let files;
  if (existsSync(index)) {
    const children = locs(readFileSync(index, 'utf8')).filter((u) => u.endsWith('.xml'));
    files = children.length ? children.map((u) => path.join(DIST, path.basename(u))) : [];
  } else {
    files = [path.join(DIST, 'sitemap-0.xml')];
  }
  const urls = new Set();
  for (const f of files) {
    if (existsSync(f)) for (const u of locs(readFileSync(f, 'utf8'))) urls.add(u);
  }
  return [...urls];
}

function chunk(arr, n) {
  const out = [];
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
  return out;
}

async function main() {
  const key = findKey();
  if (!key) {
    console.warn('indexnow: no public/<key>.txt key file found — skipping (best-effort).');
    return;
  }
  const host = new URL(PRIMARY_ORIGIN).host;
  const keyLocation = `${PRIMARY_ORIGIN.replace(/\/$/, '')}/${key}.txt`;
  console.log(`indexnow: host=${host} key=${key.slice(0, 6)}… keyLocation=${keyLocation}`);

  const urlList = sitemapUrls().filter((u) => {
    try { return new URL(u).host === host; } catch { return false; }
  });
  if (!urlList.length) {
    console.warn('indexnow: no sitemap URLs in dist/ — skipping (run this after the build).');
    return;
  }

  // IndexNow accepts up to 10,000 URLs per request; chunk to stay under it.
  for (const batch of chunk(urlList, 10000)) {
    if (DRY) {
      console.log(`indexnow: [dry-run] would POST ${batch.length} URLs to ${ENDPOINT}`);
      continue;
    }
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({ host, key, keyLocation, urlList: batch }),
      });
      // 200 OK and 202 Accepted (key validation pending) are both success.
      const ok = res.status === 200 || res.status === 202;
      console.log(`indexnow: ${ok ? 'ok' : 'WARN'} HTTP ${res.status} for ${batch.length} URLs`);
    } catch (e) {
      console.warn(`indexnow: ping failed (${e.message}) — ignored (best-effort).`);
    }
  }
}

main();
