#!/usr/bin/env node
/**
 * Generate git-dates.json from git history.
 * For each entry, track createdAt and updatedAt **separately for EN and JA**:
 *   - en.createdAt / en.updatedAt: from src/data/entries/en/<id>.md history
 *   - ja.createdAt / ja.updatedAt: from src/data/translations/ja/<id>.md history
 *
 * EN and JA are usually edited together, so the two updatedAt values are typically
 * identical, but they diverge legitimately when only one side is touched (e.g. a
 * JA-only translation pass, or an EN-only fact correction). Each language page
 * shows its own updatedAt so the displayed date reflects what was actually edited
 * in that language.
 *
 * Runs a single `git log` command for efficiency (batch processing).
 */
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join } from 'path';

const ROOT = join(import.meta.dirname, '..');
const OUTPUT = join(ROOT, 'src', 'data', 'git-dates.json');

// Paths relative to repo root
const EN_PREFIX = 'src/data/entries/en/';
const JA_PREFIX = 'src/data/translations/ja/';

function run() {
  // Ensure full git history is available (Cloudflare Pages uses shallow clone)
  try {
    const isShallow = execSync('git rev-parse --is-shallow-repository', { cwd: ROOT, encoding: 'utf-8' }).trim();
    if (isShallow === 'true') {
      console.log('Shallow clone detected — fetching full history for accurate git dates...');
      execSync('git fetch --unshallow', { cwd: ROOT, encoding: 'utf-8' });
    }
  } catch {
    // Ignore — not a git repo or fetch failed; proceed with available history
  }

  // Single git command: all commits with dates and changed file names
  const raw = execSync(
    'git log --all --format="COMMIT %aI" --name-only --diff-filter=ACMR',
    { cwd: ROOT, encoding: 'utf-8', maxBuffer: 50 * 1024 * 1024 }
  );

  // Parse: for each file, track earliest and latest commit date
  /** @type {Map<string, { createdAt: string, updatedAt: string }>} */
  const fileMap = new Map();
  let currentDate = '';

  for (const line of raw.split('\n')) {
    if (line.startsWith('COMMIT ')) {
      currentDate = line.slice(7).trim();
      continue;
    }
    const trimmed = line.trim();
    if (!trimmed || !currentDate) continue;

    // Only process entry .md files
    if (!trimmed.endsWith('.md')) continue;
    if (!trimmed.startsWith(EN_PREFIX) && !trimmed.startsWith(JA_PREFIX)) continue;

    const existing = fileMap.get(trimmed);
    if (!existing) {
      fileMap.set(trimmed, { createdAt: currentDate, updatedAt: currentDate });
    } else {
      // git log is newest-first, so first seen = updatedAt, last seen = createdAt
      existing.createdAt = currentDate; // keep overwriting → ends up as oldest
    }
  }

  // Build output keyed by entry ID with separate per-language records.
  /** @type {Record<string, { en?: { createdAt: string, updatedAt: string }, ja?: { createdAt: string, updatedAt: string } }>} */
  const result = {};

  for (const [filePath, dates] of fileMap) {
    let entryId = '';
    let lang = '';
    if (filePath.startsWith(EN_PREFIX)) {
      entryId = filePath.slice(EN_PREFIX.length).replace(/\.md$/, '');
      lang = 'en';
    } else if (filePath.startsWith(JA_PREFIX)) {
      // JA shares the same entry ID as EN
      entryId = filePath.slice(JA_PREFIX.length).replace(/\.md$/, '');
      lang = 'ja';
    }
    if (!entryId || !lang) continue;

    if (!result[entryId]) result[entryId] = {};
    result[entryId][lang] = { createdAt: dates.createdAt, updatedAt: dates.updatedAt };
  }

  // Sort keys for stable output
  const sorted = Object.fromEntries(
    Object.entries(result).sort(([a], [b]) => a.localeCompare(b))
  );

  writeFileSync(OUTPUT, JSON.stringify(sorted, null, 2) + '\n', 'utf-8');
  console.log(`Generated ${OUTPUT} (${Object.keys(sorted).length} entries)`);
}

run();
