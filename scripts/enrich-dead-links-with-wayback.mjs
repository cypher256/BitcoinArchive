#!/usr/bin/env node
// scripts/enrich-dead-links-with-wayback.mjs
//
// Reads the most recent dead-external-links report (from
// scripts/audit-external-links.mjs), queries Wayback Machine for each unique
// dead URL via the DIRECT URL form (not the wayback-available API, which
// returns false negatives), and emits an enriched report classifying each
// URL by Wayback availability and snapshot validity.
//
// Output categories:
//   - snapshot-found:   Wayback has a snapshot, content looks valid
//   - snapshot-is-404:  Wayback redirected to a snapshot whose title or body
//                        suggests a 404 page itself was archived
//   - snapshot-thin:    Wayback snapshot is implausibly small (<5KB)
//   - no-snapshot:      Wayback search returned nothing usable
//
// See STYLE_GUIDE.md "External Link Rot Handling" for the action policy.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const TEMP_DIR = 'temp';
const TIMEOUT_MS = 30000;
const SMALL_SNAPSHOT_BYTES = 5000;
const REQUEST_DELAY_MS = 500;

function findLatestReport() {
  const files = readdirSync(TEMP_DIR)
    .filter(f => /^dead-external-links-\d+\.md$/.test(f))
    .sort()
    .reverse();
  if (files.length === 0) {
    console.error('No dead-external-links report found. Run: npm run audit:external-links');
    process.exit(1);
  }
  return join(TEMP_DIR, files[0]);
}

function parseDeadSection(reportPath) {
  const content = readFileSync(reportPath, 'utf-8');
  const start = content.indexOf('## ❌ Dead');
  if (start === -1) {
    console.error('No "Dead" section in report');
    process.exit(1);
  }
  const next = content.indexOf('\n## ', start + 5);
  const section = content.slice(start, next === -1 ? content.length : next);

  const urlToFiles = new Map();
  let currentFile = null;
  for (const line of section.split('\n')) {
    const fileMatch = line.match(/^### (.+)$/);
    if (fileMatch) {
      currentFile = fileMatch[1].trim();
      continue;
    }
    const urlMatch = line.match(/^- `([^`]+)` \(\d{3}\)/);
    if (urlMatch && currentFile) {
      const url = urlMatch[1];
      if (!urlToFiles.has(url)) urlToFiles.set(url, []);
      urlToFiles.get(url).push(currentFile);
    }
  }
  return urlToFiles;
}

async function checkWayback(url) {
  // Use the no-timestamp form: web.archive.org/web/{URL} returns a 302 to the
  // closest snapshot. The wildcard form (web/2*/...) returns the calendar
  // page (HTTP 200 with x-location: calendar) and is not a redirect.
  const waybackUrl = `https://web.archive.org/web/${url}`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const resp = await fetch(waybackUrl, {
      redirect: 'follow',
      signal: ctrl.signal,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'
      }
    });
    clearTimeout(timer);
    const finalUrl = resp.url;
    const html = await resp.text();
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1].replace(/\s+/g, ' ').trim() : null;
    const lower = (title || '').toLowerCase();
    const looksLike404 =
      /(404|not\s*found|page\s*(?:cannot|could not)|page\s*missing|gone\s*\b)/i.test(lower) &&
      !/wayback/i.test(lower);
    const isSnapshot = /web\.archive\.org\/web\/\d+/.test(finalUrl);
    if (!resp.ok || !isSnapshot) {
      return { url, snapshot: null, reason: `wayback ${resp.status}, finalUrl=${finalUrl}` };
    }
    let verdict;
    if (looksLike404) verdict = 'snapshot-is-404';
    else if (html.length < SMALL_SNAPSHOT_BYTES) verdict = 'snapshot-thin';
    else verdict = 'snapshot-found';
    return { url, snapshot: finalUrl, htmlSize: html.length, title, verdict };
  } catch (e) {
    clearTimeout(timer);
    return { url, snapshot: null, error: e.message };
  }
}

async function main() {
  const reportPath = findLatestReport();
  console.log(`Reading: ${reportPath}`);
  const urlToFiles = parseDeadSection(reportPath);
  const urls = [...urlToFiles.keys()];
  console.log(`${urls.length} unique dead URLs across ${new Set([...urlToFiles.values()].flat()).size} files\n`);

  const results = [];
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    process.stdout.write(`[${i + 1}/${urls.length}] ${url.slice(0, 70)}... `);
    const r = await checkWayback(url);
    r.files = urlToFiles.get(url);
    results.push(r);
    console.log(r.verdict || r.reason || r.error || 'unknown');
    if (i < urls.length - 1) await new Promise(res => setTimeout(res, REQUEST_DELAY_MS));
  }

  const byVerdict = new Map();
  for (const r of results) {
    const v = r.verdict || 'no-snapshot';
    if (!byVerdict.has(v)) byVerdict.set(v, []);
    byVerdict.get(v).push(r);
  }

  // Markdown report
  const md = [];
  md.push('# Dead links enriched with Wayback verification');
  md.push('');
  md.push(`Source report: \`${reportPath}\``);
  md.push(`Generated: ${new Date().toISOString()}`);
  md.push('');
  md.push('## Summary');
  md.push('');
  md.push('| Verdict | URLs | Files affected |');
  md.push('|---|---:|---:|');
  for (const [v, group] of byVerdict.entries()) {
    const fileCount = new Set(group.flatMap(r => r.files)).size;
    md.push(`| ${v} | ${group.length} | ${fileCount} |`);
  }
  md.push(`| **total** | ${results.length} | |`);
  md.push('');
  md.push('Action policy: see `STYLE_GUIDE.md` § External Link Rot Handling.');
  md.push('');

  for (const [v, group] of byVerdict.entries()) {
    md.push(`## ${v} (${group.length})`);
    md.push('');
    for (const r of group) {
      md.push(`### \`${r.url}\``);
      md.push('');
      if (r.snapshot) md.push(`- Wayback snapshot: ${r.snapshot}`);
      if (r.title) md.push(`- Title: ${r.title}`);
      if (typeof r.htmlSize === 'number') md.push(`- HTML size: ${r.htmlSize.toLocaleString()} bytes`);
      if (r.reason) md.push(`- Note: ${r.reason}`);
      if (r.error) md.push(`- Error: ${r.error}`);
      md.push(`- Files (${r.files.length}):`);
      for (const f of r.files) md.push(`  - \`${f}\``);
      md.push('');
    }
  }

  const date = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const outFile = join(TEMP_DIR, `dead-links-wayback-enriched-${date}.md`);
  writeFileSync(outFile, md.join('\n'), 'utf-8');

  // JSON for downstream tooling
  const jsonFile = outFile.replace(/\.md$/, '.json');
  writeFileSync(jsonFile, JSON.stringify({ generated: new Date().toISOString(), source: reportPath, results }, null, 2), 'utf-8');

  console.log(`\nReports written:\n  ${outFile}\n  ${jsonFile}\n`);
  console.log('Summary:');
  for (const [v, group] of byVerdict.entries()) {
    console.log(`  ${v}: ${group.length}`);
  }
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
