#!/usr/bin/env node
/**
 * fill-source-entry-id.mjs
 *
 * Adds sourceEntryId to quotes[] entries that have person/personSlug/date
 * but missing sourceEntryId. Resolution strategy mirrors what
 * Python prototyping established:
 *
 *   1. Exact (topic, authorSlug, MM:SS) match within ±13h
 *   2. Same (topic, MM:SS) with unique candidate
 *   3. Same (dir, MM:SS) for non-bitcointalk
 *   4. inReplyTo + person match for top-level (parent=null) quote
 *   5. Same topic, same author, most recent strictly before this entry
 *   6. Same dir, same author, most recent strictly before this entry
 *
 * Applies to both EN (src/data/entries/en/...) and JA
 * (src/data/translations/ja/...) — sourceEntryId is locale-neutral.
 *
 * Usage:
 *   node scripts/fill-source-entry-id.mjs --dry-run
 *   node scripts/fill-source-entry-id.mjs --apply
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const VERBOSE = args.includes('--verbose');

const VERBATIM_DIRS = ['emails', 'forum', 'correspondence', 'sourceforge', 'bip'];
const enBase = path.join(root, 'src/data/entries/en');
const jaBase = path.join(root, 'src/data/translations/ja');

function walk(dir) {
  const out = [];
  let entries;
  try { entries = readdirSync(dir); } catch { return out; }
  for (const e of entries) {
    const full = path.join(dir, e);
    let st;
    try { st = statSync(full); } catch { continue; }
    if (st.isDirectory()) out.push(...walk(full));
    else if (full.endsWith('.md')) out.push(full);
  }
  return out;
}

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  return { fmText: m[1], body: m[2], raw: content };
}

// Lightweight YAML parser for our specific frontmatter shape. We do not want
// a full yaml dep — just need to: detect quotes:, extract per-quote fields,
// and rewrite quotes-block with sourceEntryId inserted.
function extractFrontmatterField(fmText, field) {
  const lines = fmText.split('\n');
  for (const line of lines) {
    const m = line.match(new RegExp(`^${field}:\\s*"?(.*?)"?\\s*$`));
    if (m) return m[1];
  }
  return null;
}

function extractParticipants(fmText) {
  // participants:
  //   - name: "X"
  //     slug: "y"
  const lines = fmText.split('\n');
  const out = [];
  let inP = false;
  let cur = null;
  for (const line of lines) {
    if (/^participants:\s*$/.test(line)) { inP = true; continue; }
    if (inP) {
      if (/^[a-zA-Z_]+:/.test(line)) { inP = false; if (cur) out.push(cur); cur = null; continue; }
      const m1 = line.match(/^\s*-\s*name:\s*"?(.*?)"?\s*$/);
      if (m1) { if (cur) out.push(cur); cur = { name: m1[1] }; continue; }
      const m2 = line.match(/^\s*slug:\s*"?(.*?)"?\s*$/);
      if (m2 && cur) { cur.slug = m2[1]; continue; }
    }
  }
  if (cur) out.push(cur);
  return out;
}

function extractQuotes(fmText) {
  const lines = fmText.split('\n');
  const out = [];
  let inQ = false;
  let cur = null;
  for (const line of lines) {
    if (/^quotes:\s*$/.test(line)) { inQ = true; continue; }
    if (inQ) {
      if (/^[a-zA-Z_]+:/.test(line)) { inQ = false; if (cur) out.push(cur); cur = null; continue; }
      const idM = line.match(/^\s*-\s*id:\s*"?(\w+)"?\s*$/);
      if (idM) { if (cur) out.push(cur); cur = { id: idM[1], _lines: [line] }; continue; }
      if (cur) {
        cur._lines.push(line);
        const m = line.match(/^\s*(\w+):\s*"?(.*?)"?\s*$/);
        if (m) cur[m[1]] = m[2];
      }
    }
  }
  if (cur) out.push(cur);
  return out;
}

function parseDate(s) {
  if (!s) return null;
  const d = new Date(s);
  if (isNaN(d.getTime())) return null;
  return d;
}

function authorSlug(fm, parts) {
  if (fm.isSatoshi === 'true' || fm.isSatoshi === true) return 'satoshi-nakamoto';
  const a = fm.author;
  if (!a) return null;
  for (const p of parts) {
    if (p.name === a) return p.slug;
  }
  const al = a.toLowerCase();
  for (const p of parts) {
    if ((p.name || '').toLowerCase() === al) return p.slug;
  }
  for (const p of parts) {
    const pn = (p.name || '').toLowerCase();
    if (al.includes(pn) || pn.includes(al)) return p.slug;
  }
  if (parts.length === 1) return parts[0].slug;
  return null;
}

function getTopic(filePath) {
  const m = filePath.match(/forum\/bitcointalk\/topic-(\d+)\//);
  return m ? m[1] : null;
}

function getDir(entryId) {
  return path.posix.dirname(entryId);
}

function entryIdFromPath(filePath, base) {
  return filePath.substring(base.length + 1).replace(/\.md$/, '');
}

// Build EN index
console.log('Building EN index...');
const enFiles = [];
for (const d of VERBATIM_DIRS) {
  enFiles.push(...walk(path.join(enBase, d)));
}
const enIndex = new Map(); // entryId -> { date, authorSlug, topic, inReplyTo, dir, path }
for (const fp of enFiles) {
  const content = readFileSync(fp, 'utf8');
  const parsed = parseFrontmatter(content);
  if (!parsed) continue;
  const fm = {};
  for (const line of parsed.fmText.split('\n')) {
    const m = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
    if (m) fm[m[1]] = m[2];
  }
  const parts = extractParticipants(parsed.fmText);
  const eid = entryIdFromPath(fp, enBase);
  const aslug = authorSlug(fm, parts);
  enIndex.set(eid, {
    date: parseDate(fm.date),
    authorSlug: aslug,
    author: fm.author,
    topic: getTopic(fp),
    inReplyTo: fm.inReplyTo && fm.inReplyTo !== 'None' ? fm.inReplyTo : null,
    dir: getDir(eid),
    path: fp,
  });
}
console.log(`Indexed ${enIndex.size} EN entries`);

// Build lookups
const Ltauthor_mmss = new Map();
const Ltmmss = new Map();
const Ldmmss = new Map();
const Lta = new Map();
const Lda = new Map();
function addToMap(map, key, val) {
  const k = JSON.stringify(key);
  const arr = map.get(k) || [];
  arr.push(val);
  map.set(k, arr);
}
function getFromMap(map, key) {
  return map.get(JSON.stringify(key)) || [];
}
for (const [eid, info] of enIndex) {
  if (!info.date) continue;
  const mm = info.date.getUTCMinutes();
  const ss = info.date.getUTCSeconds();
  if (info.authorSlug) {
    addToMap(Ltauthor_mmss, [info.topic, info.authorSlug, mm, ss], eid);
    if (info.topic) addToMap(Lta, [info.topic, info.authorSlug], eid);
    else addToMap(Lda, [info.dir, info.authorSlug], eid);
  }
  addToMap(Ltmmss, [info.topic, mm, ss], eid);
  addToMap(Ldmmss, [info.dir, mm, ss], eid);
}

// Resolution
function resolveSourceEntryId(quotePersonSlug, quoteDate, parent, eid, info, fm) {
  const topic = info.topic;
  const dir = info.dir;
  const inReplyTo = info.inReplyTo;
  const qDate = parseDate(quoteDate);

  // Strategy 1: (topic, authorSlug, MM, SS)
  if (qDate && quotePersonSlug) {
    const cands = getFromMap(Ltauthor_mmss, [topic, quotePersonSlug, qDate.getUTCMinutes(), qDate.getUTCSeconds()]);
    const valid = [];
    for (const cid of cands) {
      const cd = enIndex.get(cid)?.date;
      if (!cd) continue;
      const diff = Math.abs(cd - qDate) / 3600_000;
      if (diff < 13 && cid !== eid) valid.push({ diff, cid });
    }
    valid.sort((a,b)=>a.diff-b.diff);
    if (valid.length) return valid[0].cid;
  }

  // Strategy 2: (topic, MM, SS) — unique
  if (qDate) {
    const cands = getFromMap(Ltmmss, [topic, qDate.getUTCMinutes(), qDate.getUTCSeconds()]);
    const valid = [];
    for (const cid of cands) {
      if (cid === eid) continue;
      const cd = enIndex.get(cid)?.date;
      if (!cd) continue;
      const diff = Math.abs(cd - qDate) / 3600_000;
      if (diff < 13) valid.push({ diff, cid });
    }
    valid.sort((a,b)=>a.diff-b.diff);
    if (valid.length === 1) return valid[0].cid;
    if (valid.length > 1 && quotePersonSlug) {
      const f = valid.filter(v => enIndex.get(v.cid)?.authorSlug === quotePersonSlug);
      if (f.length) return f[0].cid;
    }
  }

  // Strategy 3: (dir, MM, SS) for non-topic
  if (qDate && !topic) {
    const cands = getFromMap(Ldmmss, [dir, qDate.getUTCMinutes(), qDate.getUTCSeconds()]);
    const valid = [];
    for (const cid of cands) {
      if (cid === eid) continue;
      const cd = enIndex.get(cid)?.date;
      if (!cd) continue;
      const diff = Math.abs(cd - qDate) / 3600_000;
      if (diff < 13) valid.push({ diff, cid });
    }
    valid.sort((a,b)=>a.diff-b.diff);
    if (valid.length === 1) return valid[0].cid;
  }

  // Strategy 4: inReplyTo for top-level quote
  if (inReplyTo && (!parent || parent === '')) {
    const ti = enIndex.get(inReplyTo);
    if (ti && (!quotePersonSlug || ti.authorSlug === quotePersonSlug)) return inReplyTo;
  }

  // Strategy 5: same topic, same author, most recent before
  if (topic && quotePersonSlug) {
    const cands = getFromMap(Lta, [topic, quotePersonSlug]);
    const myDate = info.date;
    if (myDate && cands.length) {
      const prior = [];
      for (const cid of cands) {
        const cd = enIndex.get(cid)?.date;
        if (cd && cd < myDate && cid !== eid) prior.push({ cd, cid });
      }
      prior.sort((a,b)=>b.cd-a.cd);
      if (prior.length) return prior[0].cid;
    }
  }

  // Strategy 6: same dir, same author, most recent before
  if (!topic && quotePersonSlug) {
    const cands = getFromMap(Lda, [dir, quotePersonSlug]);
    const myDate = info.date;
    if (myDate && cands.length) {
      const prior = [];
      for (const cid of cands) {
        const cd = enIndex.get(cid)?.date;
        if (cd && cd < myDate && cid !== eid) prior.push({ cd, cid });
      }
      prior.sort((a,b)=>b.cd-a.cd);
      if (prior.length) return prior[0].cid;
    }
  }

  return null;
}

// Process a single file (either EN or JA): insert sourceEntryId into quotes
function processFile(filePath, base, applyMode) {
  const content = readFileSync(filePath, 'utf8');
  const parsed = parseFrontmatter(content);
  if (!parsed) return { changed: 0, total: 0 };

  // Check if quotes: exists
  if (!/^quotes:\s*$/m.test(parsed.fmText)) return { changed: 0, total: 0 };

  const fm = {};
  for (const line of parsed.fmText.split('\n')) {
    const m = line.match(/^(\w+):\s*"?(.*?)"?\s*$/);
    if (m) fm[m[1]] = m[2];
  }
  const parts = extractParticipants(parsed.fmText);
  const eid = entryIdFromPath(filePath, base);
  // For JA files, look up via en-equivalent path (EN drives the index)
  // But the entry id is the same, so just use eid as-is
  let info = enIndex.get(eid);
  if (!info) {
    // JA-only file? Build a minimal info from this file
    info = {
      date: parseDate(fm.date),
      authorSlug: authorSlug(fm, parts),
      topic: getTopic(filePath),
      inReplyTo: fm.inReplyTo && fm.inReplyTo !== 'None' ? fm.inReplyTo : null,
      dir: getDir(eid),
    };
  }

  const quotes = extractQuotes(parsed.fmText);
  if (!quotes.length) return { changed: 0, total: 0 };

  // Resolve each quote
  let changed = 0;
  const resolutions = [];
  for (const q of quotes) {
    if (q.sourceEntryId) { resolutions.push(null); continue; } // already has
    const r = resolveSourceEntryId(q.personSlug, q.date, q.parent, eid, info, fm);
    resolutions.push(r);
    if (r) changed++;
  }

  if (!changed) return { changed: 0, total: quotes.length };

  // Rewrite quotes block in fmText
  // Approach: find quotes: ... section, rebuild it preserving original lines
  // but inserting `    sourceEntryId: "..."` line after `    id: "qN"` or
  // after last field of that quote.
  // Group lines per quote: emit each quote's existing field lines, then append
  // sourceEntryId at the end. Stylistically matches existing entries where
  // sourceEntryId is the last field in each quote block (after id/person/
  // personSlug/date).
  const fmLines = parsed.fmText.split('\n');
  const newLines = [];
  let inQ = false;
  let curBlock = null; // { idx, idIndent }
  function flushBlock() {
    if (!curBlock) return;
    const { idx, idIndent } = curBlock;
    if (idx >= 0 && resolutions[idx] && !quotes[idx].sourceEntryId) {
      newLines.push(`${idIndent}  sourceEntryId: "${resolutions[idx]}"`);
    }
    curBlock = null;
  }
  for (let i = 0; i < fmLines.length; i++) {
    const line = fmLines[i];
    if (/^quotes:\s*$/.test(line)) { flushBlock(); inQ = true; newLines.push(line); continue; }
    if (inQ && /^[a-zA-Z_]+:/.test(line) && !/^\s/.test(line)) {
      flushBlock();
      inQ = false;
    }
    if (inQ) {
      const idM = line.match(/^(\s+)-\s*id:\s*"?(\w+)"?\s*$/);
      if (idM) {
        flushBlock();
        const idIndent = idM[1];
        const id = idM[2];
        const idx = quotes.findIndex(q => q.id === id);
        curBlock = { idx, idIndent };
      }
    }
    newLines.push(line);
  }
  flushBlock();

  const newFmText = newLines.join('\n');
  const newContent = `---\n${newFmText}\n---\n${parsed.body}`;

  if (applyMode) {
    writeFileSync(filePath, newContent);
  }
  return { changed, total: quotes.length, resolutions, quotes };
}

// Process EN + JA
let totalEnChanged = 0, totalEnFiles = 0;
let totalJaChanged = 0, totalJaFiles = 0;

const jaFiles = [];
for (const d of VERBATIM_DIRS) jaFiles.push(...walk(path.join(jaBase, d)));

console.log(`\nProcessing EN (${enFiles.length} files)...`);
for (const fp of enFiles) {
  const r = processFile(fp, enBase, APPLY);
  if (r.changed > 0) {
    totalEnFiles++;
    totalEnChanged += r.changed;
    if (VERBOSE) console.log(`  EN ${fp.substring(enBase.length+1)}: +${r.changed}/${r.total}`);
  }
}

console.log(`\nProcessing JA (${jaFiles.length} files)...`);
for (const fp of jaFiles) {
  const r = processFile(fp, jaBase, APPLY);
  if (r.changed > 0) {
    totalJaFiles++;
    totalJaChanged += r.changed;
    if (VERBOSE) console.log(`  JA ${fp.substring(jaBase.length+1)}: +${r.changed}/${r.total}`);
  }
}

console.log(`\n=== Summary ===`);
console.log(`EN: ${totalEnChanged} sourceEntryId additions across ${totalEnFiles} files`);
console.log(`JA: ${totalJaChanged} sourceEntryId additions across ${totalJaFiles} files`);
console.log(`Mode: ${APPLY ? 'APPLIED' : 'DRY-RUN (use --apply to write)'}`);
