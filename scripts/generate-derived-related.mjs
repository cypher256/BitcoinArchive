#!/usr/bin/env node
/**
 * generate-derived-related.mjs — Derived relatedEntries computation
 *
 * Produces src/data/derived-related.json, mapping each entry id to an
 * ordered list of auto-derived related entry ids with scores.
 *
 * Scoring (simple, editor-intent based):
 *   +50  both entries inline-link each other in body (mutual reference)
 *        — added to both entries' derived lists
 *   +30  one-way inline link (source cites target in body): added to
 *        BOTH entries' derived lists so the relation surfaces from
 *        either side. Reader on target discovers who cited it, and
 *        reader on source discovers what it cited.
 *
 * The UI (RelatedEntries.astro) merges manual frontmatter.relatedEntries
 * (priority) with this derived list and caps at 10 items.
 *
 * This script mirrors the entry-indexing logic of check-internal-links.mjs.
 * Kept as a separate script (not a shared module) to keep each script
 * self-contained and auditable.
 */

import { readdirSync, readFileSync, statSync, existsSync, writeFileSync, mkdirSync } from 'fs';
import path from 'path';
import { MIRROR_BASE } from '../site-config.mjs';

// Escape MIRROR_BASE for embedding in a regex literal.
const MIRROR_BASE_RE = MIRROR_BASE.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const EN_DIR = 'src/data/entries/en';
const OUTPUT = 'src/data/derived-related.json';

// ---------------------------------------------------------------------------
// File / frontmatter helpers (mirrors check-internal-links.mjs)
// ---------------------------------------------------------------------------

function walk(dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  // Sort readdirSync output for deterministic traversal (across OS / FS).
  for (const entry of readdirSync(dir).sort()) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...walk(full));
    else if (full.endsWith('.md')) results.push(full);
  }
  return results;
}

function parseFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  if (!m) return null;
  const fm = { participants: [], type: null };
  const lines = m[1].split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const simple = line.match(/^(\w[\w-]*):\s*"?([^"\n]*?)"?\s*$/);
    if (simple && simple[1] === 'type') fm.type = simple[2].trim();
    if (/^participants:/.test(line)) {
      let j = i + 1;
      let cur = null;
      while (j < lines.length && /^(  -|    )/.test(lines[j])) {
        const l = lines[j];
        if (/^  - name:/.test(l)) {
          if (cur) fm.participants.push(cur);
          cur = { name: null, slug: null };
          const v = l.match(/"([^"]*)"|:\s*(.+)/);
          if (v) cur.name = (v[1] || v[2] || '').trim();
        } else if (/^    slug:/.test(l) && cur) {
          const v = l.match(/"([^"]*)"|:\s*(.+)/);
          if (v) cur.slug = (v[1] || v[2] || '').trim();
        }
        j++;
      }
      if (cur) fm.participants.push(cur);
    }
  }
  return fm;
}

function computeEntryId(relPath) {
  const withoutExt = relPath.replace(/\.md$/, '');
  const parts = withoutExt.split(path.sep);
  const basename = parts.pop();
  return [...parts, basename.replaceAll('.', '')].join('/');
}

// Thread detection (mirrors data/threads.ts)
function resolveThreadIdFromEntryId(id) {
  const parts = id.split('/');
  if (parts.length < 3) return null;
  if (parts[0] === 'correspondence') return `correspondence/${parts[1]}`;
  if (parts[0] === 'forum' && parts.length >= 4) return `${parts[0]}/${parts[1]}/${parts[2]}`;
  if (parts[0] === 'emails' && parts.length >= 4) return `${parts[0]}/${parts[1]}/${parts[2]}`;
  return null;
}

// ---------------------------------------------------------------------------
// Index entries and build biographyBySlug
// ---------------------------------------------------------------------------

const entries = new Map(); // id -> { threadId, isBiography, relatedEntries (ignored here) }
const biographyBySlug = new Map(); // slug -> biography entry id

for (const file of walk(EN_DIR)) {
  const rel = path.relative(EN_DIR, file);
  const id = computeEntryId(rel);
  const content = readFileSync(file, 'utf-8');
  const fm = parseFrontmatter(content);
  if (!fm) continue;
  const isBiography = fm.type === 'biography';
  entries.set(id, { threadId: resolveThreadIdFromEntryId(id), isBiography });
  if (isBiography && fm.participants[0]?.slug) {
    biographyBySlug.set(fm.participants[0].slug, id);
  }
}

// ---------------------------------------------------------------------------
// Scan inline links: build sourceId -> Set<targetId>
// ---------------------------------------------------------------------------

const BASE_PATTERN = new RegExp(`\\]\\(${MIRROR_BASE_RE}(\\/[^)#]*?)(#[^)]*)?\\)`, 'g');

function extractEntryIdFromTarget(target) {
  const pm = target.match(/^(?:\/ja)?\/participants\/([^/]+)\/?$/);
  if (pm) return biographyBySlug.get(pm[1]) || null;
  const em = target.match(/^(?:\/ja)?\/entries\/(.+?)\/?$/);
  if (!em) return null;
  const raw = em[1];
  if (raw.startsWith('threads/')) return null;
  const parts = raw.split('/');
  const basename = parts.pop();
  return [...parts, basename.replaceAll('.', '')].join('/');
}

// sourceId -> Set<targetId>
const inlineRefs = new Map();

for (const file of walk(EN_DIR)) {
  const content = readFileSync(file, 'utf-8');
  const bodyStart = content.indexOf('\n---\n', 4);
  const body = bodyStart > 0 ? content.slice(bodyStart + 5) : content;
  const sourceId = computeEntryId(path.relative(EN_DIR, file));
  if (!entries.has(sourceId)) continue;

  let match;
  BASE_PATTERN.lastIndex = 0;
  const targets = new Set();
  while ((match = BASE_PATTERN.exec(body)) !== null) {
    const t = extractEntryIdFromTarget(match[1]);
    if (t && t !== sourceId && entries.has(t)) targets.add(t);
  }
  if (targets.size > 0) inlineRefs.set(sourceId, targets);
}

// ---------------------------------------------------------------------------
// Score and emit derived-related
//
// For each entry X, collect candidates Y with scores:
//   - Y is inline-linked by X AND X is inline-linked by Y  → +50 (mutual)
//   - Y is inline-linked by X (one-way, Y is the cited entry)
//       from X's POV, Y gets score 30 on X's derived list
//   - Symmetrically: if Y inline-links X (one-way), X gets score 30 on Y's list
//
// Note: thread-internal pairs are excluded (threads auto-link).
// ---------------------------------------------------------------------------

// derived[entryId] = Map<targetId, score>
const derived = new Map();

function addCandidate(forId, candidateId, score) {
  if (forId === candidateId) return;
  const a = entries.get(forId);
  const b = entries.get(candidateId);
  if (!a || !b) return;
  if (a.threadId && b.threadId && a.threadId === b.threadId) return;
  if (!derived.has(forId)) derived.set(forId, new Map());
  const m = derived.get(forId);
  m.set(candidateId, Math.max(m.get(candidateId) || 0, score));
}

for (const [sourceId, targets] of inlineRefs) {
  for (const targetId of targets) {
    const reverseLinks = inlineRefs.get(targetId);
    const mutual = reverseLinks && reverseLinks.has(sourceId);
    if (mutual) {
      addCandidate(sourceId, targetId, 50);
      addCandidate(targetId, sourceId, 50);
    } else {
      // One-way inline link: surface the relation from both sides at
      // score 30. Target's list gets source (so a reader on target
      // discovers who cited it), and source's list gets target (so a
      // reader on source discovers what it cited).
      addCandidate(targetId, sourceId, 30);
      addCandidate(sourceId, targetId, 30);
    }
  }
}

// Convert to sorted arrays; cap per-entry at 20 items (UI takes top 10 after
// merging with manual list, but we keep a small buffer for flexibility).
const output = {};
// Deterministic ordering: primary key = score desc, secondary key = id asc.
// Without the secondary key, ties among many 30-point candidates would leave
// the slice-20 outcome environment-dependent (readdir order, Map insertion).
const sortedEntryIds = [...derived.keys()].sort();
for (const entryId of sortedEntryIds) {
  const sorted = [...derived.get(entryId).entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 20)
    .map(([id, score]) => ({ id, score }));
  output[entryId] = sorted;
}

mkdirSync(path.dirname(OUTPUT), { recursive: true });
writeFileSync(OUTPUT, JSON.stringify(output, null, 2) + '\n', 'utf-8');

const totalEntries = Object.keys(output).length;
const totalCandidates = Object.values(output).reduce((s, a) => s + a.length, 0);
console.log(`✓ Derived relatedEntries written to ${OUTPUT}`);
console.log(`  ${totalEntries} entries have at least one derived candidate`);
console.log(`  ${totalCandidates} total candidates (avg ${(totalCandidates / totalEntries).toFixed(1)} per entry)`);
