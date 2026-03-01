#!/usr/bin/env node
/**
 * Generate git-dates.json from git history.
 * For each entry .md file, extract:
 *   - createdAt: date of the first commit that added the file
 *   - updatedAt: date of the most recent commit that touched the file
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

  // Build output keyed by entry ID (relative path without .md, under en/)
  /** @type {Record<string, { createdAt: string, updatedAt: string }>} */
  const result = {};

  for (const [filePath, dates] of fileMap) {
    let entryId = '';
    if (filePath.startsWith(EN_PREFIX)) {
      entryId = filePath.slice(EN_PREFIX.length).replace(/\.md$/, '');
    } else if (filePath.startsWith(JA_PREFIX)) {
      // JA shares the same entry ID as EN
      entryId = filePath.slice(JA_PREFIX.length).replace(/\.md$/, '');
    }
    if (!entryId) continue;

    // Merge: use earliest createdAt and latest updatedAt across EN/JA
    const existing = result[entryId];
    if (!existing) {
      result[entryId] = { createdAt: dates.createdAt, updatedAt: dates.updatedAt };
    } else {
      if (dates.createdAt < existing.createdAt) existing.createdAt = dates.createdAt;
      if (dates.updatedAt > existing.updatedAt) existing.updatedAt = dates.updatedAt;
    }
  }

  // Sort keys for stable output
  const sorted = Object.fromEntries(
    Object.entries(result).sort(([a], [b]) => a.localeCompare(b))
  );

  writeFileSync(OUTPUT, JSON.stringify(sorted, null, 2) + '\n', 'utf-8');
  console.log(`Generated ${OUTPUT} (${Object.keys(sorted).length} entries)`);
}

run();
