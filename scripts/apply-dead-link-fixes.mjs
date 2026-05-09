#!/usr/bin/env node
// scripts/apply-dead-link-fixes.mjs
//
// Reads the enrichment JSON from enrich-dead-links-with-wayback.mjs and
// applies fixes per the policy in STYLE_GUIDE.md "External Link Rot Handling":
//
//   - snapshot-found    -> replace URL with Wayback snapshot URL across all
//                          affected files (in `secondarySources[].url` and any
//                          inline body links).
//   - no-snapshot etc.  -> remove the matching `secondarySources[]` entry
//                          (name + url + optional note). If the resulting
//                          secondarySources list would be empty, remove the
//                          entire `secondarySources:` block.
//
// The script edits Markdown files in place.
//
// Usage:
//   node scripts/apply-dead-link-fixes.mjs [--dry-run]

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const TEMP_DIR = 'temp';
const DRY_RUN = process.argv.includes('--dry-run');

function findLatestEnrichJson() {
  const files = readdirSync(TEMP_DIR)
    .filter(f => /^dead-links-wayback-enriched-\d+\.json$/.test(f))
    .sort()
    .reverse();
  if (files.length === 0) {
    console.error('No enriched JSON found. Run: node scripts/enrich-dead-links-with-wayback.mjs');
    process.exit(1);
  }
  return join(TEMP_DIR, files[0]);
}

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Replace the URL in `url: "OLD"` and `sourceUrl: "OLD"` lines with NEW
// (preserving the field name). Also replaces inline markdown links
// `(OLD)` with `(NEW)`.
function replaceUrl(content, oldUrl, newUrl) {
  // (?:source)?[Uu]rl: covers both `url:` (secondarySources items) and
  // `sourceUrl:` (top-level frontmatter). The captured prefix is preserved.
  const re1 = new RegExp(`(\\b(?:source)?[Uu]rl:\\s*)"${escapeRegex(oldUrl)}"`, 'g');
  const re2 = new RegExp(`(\\b(?:source)?[Uu]rl:\\s*)'${escapeRegex(oldUrl)}'`, 'g');
  const re3 = new RegExp(`\\(${escapeRegex(oldUrl)}\\)`, 'g');
  let next = content;
  next = next.replace(re1, `$1"${newUrl}"`);
  next = next.replace(re2, `$1"${newUrl}"`);
  next = next.replace(re3, `(${newUrl})`);
  return next;
}

// Remove a secondarySources entry whose url field matches deadUrl.
// The entry format expected:
//   - name: "..."
//     url: "<deadUrl>"
//     note: "..."   (optional)
// If the resulting secondarySources list becomes empty, remove the whole
// `secondarySources:` block too.
function removeSecondarySourcesEntry(content, deadUrl) {
  const lines = content.split('\n');
  const startIdx = lines.findIndex(l => l.trim() === 'secondarySources:');
  if (startIdx === -1) return { content, changed: false };

  // Find end of secondarySources block (next top-level frontmatter key, or
  // end of frontmatter '---').
  let endIdx = lines.length;
  for (let i = startIdx + 1; i < lines.length; i++) {
    const l = lines[i];
    if (l === '---') { endIdx = i; break; }
    if (/^[a-zA-Z][a-zA-Z0-9_]*:/.test(l)) { endIdx = i; break; }
  }

  // Inside [startIdx+1, endIdx), each entry begins with `  - name:` (two-space
  // indent). Group lines into entries.
  const entries = [];
  let cur = null;
  for (let i = startIdx + 1; i < endIdx; i++) {
    const l = lines[i];
    if (/^\s*-\s+name:/.test(l)) {
      if (cur) entries.push(cur);
      cur = { lines: [l], firstIdx: i };
    } else if (cur) {
      cur.lines.push(l);
    }
  }
  if (cur) entries.push(cur);

  // Identify which entries match the dead URL.
  const escaped = escapeRegex(deadUrl);
  const urlPattern = new RegExp(`url:\\s*['"]${escaped}['"]`);
  const keptEntries = entries.filter(e => !e.lines.some(l => urlPattern.test(l)));

  if (keptEntries.length === entries.length) return { content, changed: false };

  if (keptEntries.length === 0) {
    // Remove the entire secondarySources block, including blank line after
    const blockEnd = endIdx; // exclusive
    const out = lines.slice(0, startIdx).concat(lines.slice(blockEnd));
    return { content: out.join('\n'), changed: true };
  }

  // Rebuild: secondarySources: + keptEntries lines + everything after endIdx
  const before = lines.slice(0, startIdx + 1);
  const keptLines = keptEntries.flatMap(e => e.lines);
  const after = lines.slice(endIdx);
  return { content: before.concat(keptLines, after).join('\n'), changed: true };
}

function main() {
  const jsonPath = findLatestEnrichJson();
  console.log(`Reading: ${jsonPath}`);
  const data = JSON.parse(readFileSync(jsonPath, 'utf-8'));
  console.log(`${data.results.length} URLs to process${DRY_RUN ? ' [DRY-RUN]' : ''}\n`);

  const replaceList = data.results.filter(r => r.verdict === 'snapshot-found' && r.snapshot);
  const deleteList = data.results.filter(r => !r.verdict);

  console.log(`Replacements: ${replaceList.length} URLs`);
  console.log(`Deletions:    ${deleteList.length} URLs\n`);

  // Aggregate per-file changes
  const fileChanges = new Map();
  function pushChange(file, fn) {
    if (!fileChanges.has(file)) fileChanges.set(file, []);
    fileChanges.get(file).push(fn);
  }

  for (const r of replaceList) {
    for (const f of r.files) {
      pushChange(f, content => ({ content: replaceUrl(content, r.url, r.snapshot), op: `replace ${r.url} -> ${r.snapshot}` }));
    }
  }
  for (const r of deleteList) {
    for (const f of r.files) {
      pushChange(f, content => {
        const result = removeSecondarySourcesEntry(content, r.url);
        return { content: result.content, op: `delete ${r.url}`, changed: result.changed };
      });
    }
  }

  let modifiedFiles = 0;
  let totalOps = 0;
  for (const [file, ops] of fileChanges.entries()) {
    let content;
    try { content = readFileSync(file, 'utf-8'); }
    catch (e) { console.error(`SKIP ${file}: ${e.message}`); continue; }
    const original = content;
    const opsApplied = [];
    for (const op of ops) {
      const r = op(content);
      content = r.content;
      if (r.changed === undefined || r.changed) opsApplied.push(r.op);
    }
    if (content !== original) {
      modifiedFiles++;
      totalOps += opsApplied.length;
      console.log(`MODIFIED ${file} (${opsApplied.length} ops)`);
      for (const o of opsApplied) console.log(`  - ${o}`);
      if (!DRY_RUN) writeFileSync(file, content, 'utf-8');
    }
  }

  console.log(`\nTotal: ${modifiedFiles} files modified, ${totalOps} operations${DRY_RUN ? ' [DRY-RUN, no writes]' : ''}`);
}

main();
