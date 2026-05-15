#!/usr/bin/env node
/**
 * convert-naked-blockquotes.mjs
 *
 * Convert verbatim-content entries with naked blockquotes (no
 * `<!-- quote: -->` marker, no `quotes:` frontmatter) into the structured
 * attribution form, using TEXT MATCHING against candidate parent entries.
 *
 * Why text matching (not heuristics):
 *   Heuristics like "most recent prior post by same author" can pick the
 *   wrong source. e.g. Levine quotes Satoshi's original 2008-10-31 paper
 *   announcement, but the most-recent-prior-by-Satoshi heuristic would
 *   pick the satoshi-1 reply from 2008-11-02. Text matching avoids the
 *   confusion: we look at the quote's actual sentence and find which
 *   archived entry contains it.
 *
 * Algorithm (per blockquote):
 *   1. Extract the quote text (concatenate `> ` lines, strip leading `>`).
 *   2. Normalize: lowercase, collapse whitespace, drop punctuation.
 *   3. Search candidate sources: same topic (forum/bitcointalk/topic-XXX)
 *      or same dir (non-bitcointalk).
 *   4. For each candidate, normalize its body and check whether the
 *      quote text is a substring (or 90%+ word-overlap with a contiguous
 *      window) of the candidate's body.
 *   5. If exactly one candidate matches with high confidence, use it as
 *      `sourceEntryId`. Else: skip the file.
 *
 * Files matching exactly one candidate are transformed:
 *   - `quotes:` frontmatter appended with person/personSlug/sourceEntryId
 *   - `<!-- quote: qN -->` marker inserted above each blockquote
 *   - JA: also wraps with `<!-- tone-skip --> / <!-- /tone-skip -->`
 *
 * Files that don't match cleanly are left as-is — never edited on
 * speculation. Better to leave a few cites missing than to insert wrong
 * cross-references.
 *
 * Usage:
 *   node scripts/convert-naked-blockquotes.mjs --dry-run
 *   node scripts/convert-naked-blockquotes.mjs --apply
 *   node scripts/convert-naked-blockquotes.mjs --apply --only path-substr
 *   node scripts/convert-naked-blockquotes.mjs --apply --report
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import process from 'node:process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const REPORT = args.includes('--report');
const onlyIdx = args.indexOf('--only');
const ONLY = onlyIdx >= 0 ? args[onlyIdx + 1] : null;

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

function parseFm(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) return null;
  return { fmText: m[1], body: m[2] };
}

function fmField(fmText, field) {
  for (const line of fmText.split('\n')) {
    const m = line.match(new RegExp(`^${field}:\\s*"?(.*?)"?\\s*$`));
    if (m) return m[1] === 'None' ? null : m[1];
  }
  return null;
}

function fmParticipants(fmText) {
  const lines = fmText.split('\n');
  const out = [];
  let inP = false;
  let cur = null;
  for (const line of lines) {
    if (/^participants:\s*$/.test(line)) { inP = true; continue; }
    if (inP) {
      if (/^[a-zA-Z_]+:/.test(line) && !/^\s/.test(line)) { if (cur) out.push(cur); cur = null; inP = false; continue; }
      const m1 = line.match(/^\s*-\s*name:\s*"?(.*?)"?\s*$/);
      if (m1) { if (cur) out.push(cur); cur = { name: m1[1] }; continue; }
      const m2 = line.match(/^\s*slug:\s*"?(.*?)"?\s*$/);
      if (m2 && cur) cur.slug = m2[1];
    }
  }
  if (cur) out.push(cur);
  return out;
}

function authorSlug(fm, parts) {
  if (fmField(fm, 'isSatoshi') === 'true') return 'satoshi-nakamoto';
  const a = fmField(fm, 'author');
  if (!a) return null;
  for (const p of parts) if (p.name === a) return p.slug;
  const al = a.toLowerCase();
  for (const p of parts) if ((p.name || '').toLowerCase() === al) return p.slug;
  for (const p of parts) {
    const pn = (p.name || '').toLowerCase();
    if (al.includes(pn) || pn.includes(al)) return p.slug;
  }
  if (parts.length === 1) return parts[0].slug;
  return null;
}

function getTopic(fp) { const m = fp.match(/forum\/bitcointalk\/topic-(\d+)\//); return m ? m[1] : null; }
function entryId(fp, base) { return fp.substring(base.length + 1).replace(/\.md$/, ''); }

// Build per-locale indexes. sourceEntryId is locale-neutral so the entry-id
// keys are identical across en/ja, but bodies differ — text matching must use
// the same-locale body.
console.log('Indexing EN entries...');
const enFiles = [];
for (const d of VERBATIM_DIRS) enFiles.push(...walk(path.join(enBase, d)));
const enIndex = new Map();
for (const fp of enFiles) {
  const c = readFileSync(fp, 'utf8');
  const p = parseFm(c);
  if (!p) continue;
  const parts = fmParticipants(p.fmText);
  enIndex.set(entryId(fp, enBase), {
    date: fmField(p.fmText, 'date') ? new Date(fmField(p.fmText, 'date')) : null,
    authorSlug: authorSlug(p.fmText, parts),
    author: fmField(p.fmText, 'author'),
    topic: getTopic(fp),
    dir: path.posix.dirname(entryId(fp, enBase)),
    body: p.body,
  });
}
console.log(`Indexed ${enIndex.size} EN entries.`);

console.log('Indexing JA entries...');
const jaFiles = [];
for (const d of VERBATIM_DIRS) jaFiles.push(...walk(path.join(jaBase, d)));
const jaIndex = new Map();
for (const fp of jaFiles) {
  const c = readFileSync(fp, 'utf8');
  const p = parseFm(c);
  if (!p) continue;
  const parts = fmParticipants(p.fmText);
  jaIndex.set(entryId(fp, jaBase), {
    date: fmField(p.fmText, 'date') ? new Date(fmField(p.fmText, 'date')) : null,
    authorSlug: authorSlug(p.fmText, parts),
    author: fmField(p.fmText, 'author'),
    topic: getTopic(fp),
    dir: path.posix.dirname(entryId(fp, jaBase)),
    body: p.body,
  });
}
console.log(`Indexed ${jaIndex.size} JA entries.`);

// ---------------------------------------------------------------------------
// Text normalisation + matching
// ---------------------------------------------------------------------------

// Normalise: lowercase, collapse whitespace, strip punctuation and `>` markers,
// drop empty tokens. We compare on normalised whole text (substring) so
// nested-quote markers `> >` or `>>` should be stripped to single quote depth.
function normaliseText(s) {
  return s
    .replace(/^>+\s*/gm, '')      // strip blockquote markers per line
    .replace(/<!--[\s\S]*?-->/g, '') // strip html comments
    .replace(/`[^`]*`/g, '')      // strip code spans (URL-y noise inside)
    .replace(/\bhttps?:\/\/\S+/g, '') // strip raw URLs
    .replace(/[^\p{L}\p{N}\s]/gu, ' ') // strip punctuation
    .replace(/\s+/g, ' ')         // collapse whitespace
    .toLowerCase()
    .trim();
}

// Score 0..1 based on how much of `quoteNorm` (as tokens) appears
// contiguously in `candidateNorm` (as tokens). We use the longest common
// substring of tokens normalised by length of quote.
function matchScore(quoteNorm, candidateNorm) {
  if (!quoteNorm) return 0;
  // Cheap full-substring check first
  if (candidateNorm.includes(quoteNorm)) return 1.0;
  // Token-window: sliding window of quote tokens, see if substantial overlap
  const qTokens = quoteNorm.split(' ');
  const cTokens = candidateNorm.split(' ');
  if (qTokens.length < 4) return 0; // too short for fuzzy
  // For each starting position in candidate, count consecutive matches
  let best = 0;
  for (let i = 0; i <= cTokens.length - 4; i++) {
    // Try to align: find longest run where cTokens[i+k] === qTokens[k]
    let run = 0;
    while (run < qTokens.length && i + run < cTokens.length && cTokens[i + run] === qTokens[run]) run++;
    if (run > best) best = run;
  }
  return best / qTokens.length;
}

function findBlockquotes(body) {
  const lines = body.split('\n');
  const bqs = [];
  let i = 0;
  while (i < lines.length) {
    if (lines[i].startsWith('>')) {
      const start = i;
      const text = [];
      while (i < lines.length && (lines[i].startsWith('>') || (lines[i].trim() === '' && i+1 < lines.length && lines[i+1].startsWith('>')))) {
        if (lines[i].startsWith('>')) text.push(lines[i]);
        i++;
      }
      const end = i - 1;
      bqs.push({ startLine: start, endLine: end, text: text.join('\n') });
    } else i++;
  }
  return bqs;
}

// ---------------------------------------------------------------------------
// Source resolution via text matching
// ---------------------------------------------------------------------------

// First-pass cache of EN resolutions so JA can adopt them when its own
// text matching is too weak (translated body may not contain the JA
// blockquote text verbatim).
const enResolutionCache = new Map(); // entryId -> [{ sourceEntryId, person, personSlug, bq } | null]

function resolveSource(filePath, base) {
  const c = readFileSync(filePath, 'utf8');
  const parsed = parseFm(c);
  if (!parsed) return { skip: 'no-frontmatter' };
  // Skip files that already have quotes: frontmatter
  if (/^quotes:\s*$/m.test(parsed.fmText)) return { skip: 'has-quotes-fm' };
  const eid = entryId(filePath, base);
  // Pick the same-locale index for body matching
  const isJA = base === jaBase;
  const localeIndex = isJA ? jaIndex : enIndex;
  let info = localeIndex.get(eid);
  if (!info) {
    const parts = fmParticipants(parsed.fmText);
    info = {
      date: fmField(parsed.fmText, 'date') ? new Date(fmField(parsed.fmText, 'date')) : null,
      authorSlug: authorSlug(parsed.fmText, parts),
      author: fmField(parsed.fmText, 'author'),
      topic: getTopic(filePath),
      dir: path.posix.dirname(eid),
    };
  }

  const bqs = findBlockquotes(parsed.body);
  if (!bqs.length) return { skip: 'no-blockquote' };

  // Build candidate pool: same topic, OR same dir (in matching locale).
  // Constraint: candidate date must be strictly before the current entry's
  // date — a quote source cannot be from a future post. This prevents the
  // text-matcher from picking a later entry that quotes the same text back
  // (very common in reply chains).
  const candidates = [];
  for (const [eeid, ii] of localeIndex) {
    if (eeid === eid) continue;
    if (!ii.body) continue;
    if (info.date && ii.date && ii.date >= info.date) continue;
    if (info.topic) {
      if (ii.topic === info.topic) candidates.push({ eid: eeid, ii });
    } else {
      if (ii.dir === info.dir) candidates.push({ eid: eeid, ii });
    }
  }

  if (!candidates.length) return { skip: 'no-candidates' };

  // Pre-normalise candidate bodies once
  for (const c of candidates) c.normBody = normaliseText(c.ii.body);

  const resolutions = [];
  for (const bq of bqs) {
    const quoteNorm = normaliseText(bq.text);
    if (quoteNorm.length < 15) { resolutions.push(null); continue; } // too short for reliable match
    // Score each candidate
    const scored = candidates.map(c => ({ eid: c.eid, score: matchScore(quoteNorm, c.normBody), ii: c.ii }));
    scored.sort((a, b) => b.score - a.score);
    const top = scored[0];
    const second = scored[1];
    // Accept if top score >= 0.7 and clearly better than second
    if (top && top.score >= 0.7) {
      if (!second || top.score - second.score >= 0.15 || top.score >= 0.95) {
        resolutions.push({ sourceEntryId: top.eid, score: top.score, person: top.ii.author, personSlug: top.ii.authorSlug, bq });
        continue;
      }
    }
    resolutions.push(null);
  }

  // Require all blockquotes to resolve. For JA, fall back to EN cache when
  // the JA blockquote text doesn't text-match (the JA translation may
  // paraphrase the original). We pair JA blockquotes with EN resolutions by
  // ordinal (1st JA bq → 1st EN bq, etc.). EN file must already have been
  // processed and got per-bq resolutions.
  if (resolutions.some(r => !r)) {
    if (isJA) {
      const enRes = enResolutionCache.get(eid);
      if (enRes && enRes.length === resolutions.length && enRes.every(x => x)) {
        // adopt EN resolutions, pair with JA bq positions
        const adopted = resolutions.map((r, idx) => {
          if (r) return r;
          const er = enRes[idx];
          // Replace bq with JA bq at same ordinal position
          return { sourceEntryId: er.sourceEntryId, score: er.score, person: er.person, personSlug: er.personSlug, bq: bqs[idx] };
        });
        return { resolutions: adopted, body: parsed.body, fmText: parsed.fmText, info };
      }
    }
    return { skip: 'unresolvable', resolutions, body: parsed.body, fmText: parsed.fmText };
  }

  // Cache EN resolutions for later JA reuse
  if (!isJA) enResolutionCache.set(eid, resolutions);

  return { resolutions, body: parsed.body, fmText: parsed.fmText, info };
}

// ---------------------------------------------------------------------------
// Transformation
// ---------------------------------------------------------------------------

function applyTransform(filePath, base, resolutions, body, fmText) {
  // Append `quotes:` to frontmatter
  const quoteYaml = ['quotes:'];
  resolutions.forEach((r, idx) => {
    const id = `q${idx + 1}`;
    quoteYaml.push(`  - id: "${id}"`);
    if (r.person) quoteYaml.push(`    person: "${r.person.replace(/"/g, '\\"')}"`);
    if (r.personSlug) quoteYaml.push(`    personSlug: "${r.personSlug}"`);
    if (r.sourceEntryId) quoteYaml.push(`    sourceEntryId: "${r.sourceEntryId}"`);
  });
  const newFmText = fmText + '\n' + quoteYaml.join('\n');

  // Insert markers into body (bottom-up to preserve indices)
  const isJA = filePath.includes('/translations/ja/');
  const bodyLines = body.split('\n');
  const sortedRes = resolutions.map((r, idx) => ({ ...r, qid: `q${idx + 1}` })).sort((a, b) => b.bq.startLine - a.bq.startLine);
  for (const r of sortedRes) {
    if (isJA) {
      bodyLines.splice(r.bq.endLine + 1, 0, '<!-- /tone-skip -->');
    }
    const prefix = isJA
      ? [`<!-- quote: ${r.qid} -->`, '<!-- tone-skip -->']
      : [`<!-- quote: ${r.qid} -->`];
    bodyLines.splice(r.bq.startLine, 0, ...prefix);
  }
  return `---\n${newFmText}\n---\n${bodyLines.join('\n')}`;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const summary = { processed: 0, applied: 0, skip: {} };
const appliedDetails = [];
function processFile(filePath, base) {
  summary.processed++;
  if (ONLY && !filePath.includes(ONLY)) return;
  const r = resolveSource(filePath, base);
  if (r.skip) {
    summary.skip[r.skip] = (summary.skip[r.skip] || 0) + 1;
    return;
  }
  const newContent = applyTransform(filePath, base, r.resolutions, r.body, r.fmText);
  if (APPLY) writeFileSync(filePath, newContent);
  summary.applied++;
  appliedDetails.push({ path: filePath.replace(root + '/', ''), resolutions: r.resolutions.map(rr => ({ sourceEntryId: rr.sourceEntryId, score: rr.score, person: rr.person })) });
}

console.log('\nProcessing EN files...');
for (const fp of enFiles) processFile(fp, enBase);
const enApplied = summary.applied;

summary.applied = 0;
console.log('Processing JA files...');
for (const fp of jaFiles) processFile(fp, jaBase);
const jaApplied = summary.applied;

console.log(`\n=== Summary ===`);
console.log(`Files processed: ${summary.processed}`);
console.log(`Files transformed${APPLY ? '' : ' (dry-run)'}: EN ${enApplied} + JA ${jaApplied}`);
console.log(`Skip reasons: ${JSON.stringify(summary.skip)}`);
if (REPORT) {
  console.log(`\n=== Applied details (first 30) ===`);
  for (const d of appliedDetails.slice(0, 30)) {
    console.log(`  ${d.path}`);
    for (const rr of d.resolutions) {
      console.log(`    score=${rr.score.toFixed(2)}  ${rr.person}  → ${rr.sourceEntryId}`);
    }
  }
}
console.log(`Mode: ${APPLY ? 'APPLIED' : 'DRY-RUN (use --apply to write)'}`);
