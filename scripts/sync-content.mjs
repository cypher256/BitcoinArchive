#!/usr/bin/env node

/**
 * sync-content.mjs — Run `astro sync` twice intentionally.
 *
 * ============================================================
 *   WHY TWO PASSES?
 * ============================================================
 *
 * Astro v5's glob-loader emits transient `Duplicate id "..."` warnings
 * on the first sync after a cold cache. The warnings reference files
 * inside `src/data/translations/ja/...` and `src/data/entries/en/...`
 * — but those directories are explicitly defined as **separate
 * collections** in `src/content.config.ts`:
 *
 *     const entries    = defineCollection({ loader: glob({
 *         pattern: '**\/*.md', base: './src/data/entries/en' })  });
 *     const entries_ja = defineCollection({ loader: glob({
 *         pattern: '**\/*.md', base: './src/data/translations/ja' }) });
 *
 * There is no actual duplicate. The warning is a side effect of the
 * loader walking the directory tree before the in-memory cache for the
 * companion collection has settled. The warnings disappear on the
 * second sync (the cache is warm and the loader has a stable view of
 * both collections). This was observed and confirmed in 2026-04 during
 * the relatedEntries-cap reform.
 *
 * ============================================================
 *   WHY TWO PASSES AND NOT JUST ONE WITH A GREP FILTER?
 * ============================================================
 *
 * Running `astro sync` once and accepting the noise is unacceptable
 * because it makes `npm run check` output ambiguous: a real problem
 * and the transient noise look identical to a casual reader. CI logs
 * become hard to read; reviewers waste time chasing phantom failures.
 *
 * Running once with a grep filter on stderr is brittle: a *real*
 * future duplicate would also be filtered out and silently swallowed.
 * That signal must not be lost.
 *
 * The two-pass design solves both: the first pass is the warm-up and
 * we filter its stderr (the transient duplicate-id warnings only —
 * any other stderr line is passed through, so real errors on the
 * first pass are still visible). The second pass is the canonical
 * pass and runs with `stdio: 'inherit'` — no filtering. If a real
 * duplicate id appears, it will surface on the second pass and reach
 * the user.
 *
 * Cost is essentially zero: the second pass hits a warm cache (~1s).
 *
 * ============================================================
 *   WHAT ABOUT REAL DUPLICATE IDS?
 * ============================================================
 *
 * Real duplicate-id detection is the responsibility of
 * `scripts/check-duplicate-ids.mjs`, which is deterministic and not
 * subject to this transient state. Both scripts run as part of
 * `npm run check`. If a real duplicate is ever introduced, that
 * dedicated script will fail loudly — the Astro glob-loader's noisy
 * first pass is not the safety net.
 *
 * ============================================================
 *   FUTURE: WHEN CAN WE REMOVE THIS?
 * ============================================================
 *
 * If a future Astro release fixes the transient-warning behavior of
 * its glob-loader (the bug is upstream — separate collections should
 * never report cross-collection duplicates), this script can be
 * reduced to a single `astro sync` call. Re-test after Astro upgrades
 * by clearing `.astro/` and running this script — if the first pass
 * is silent, the workaround is no longer needed.
 *
 * The duplicate-id verification responsibility remains with
 * check-duplicate-ids.mjs regardless.
 */

import { spawnSync } from 'node:child_process';

/**
 * Lines we recognize as the transient cross-collection duplicate-id
 * warning from Astro v5's glob-loader. Anything else is passed through
 * (so real errors on the first pass are still visible).
 */
const TRANSIENT_PATTERNS = [
  /\[WARN\]\s+\[glob-loader\]\s+Duplicate id\b/,
  /Later items with the same id will overwrite earlier ones/,
];

function isTransientLine(line) {
  return TRANSIENT_PATTERNS.some((re) => re.test(line));
}

function runSync(label, { suppressTransient }) {
  if (suppressTransient) {
    // Pipe both streams so we can filter the duplicate-id warnings out
    // of the first pass. stdout (sync progress) is discarded entirely
    // since the second pass will print its own canonical progress.
    const result = spawnSync('npx', ['astro', 'sync'], {
      encoding: 'utf8',
      shell: false,
    });
    const stderr = (result.stderr ?? '')
      .split('\n')
      .filter((line) => line.length > 0 && !isTransientLine(line))
      .join('\n');
    if (stderr.trim().length > 0) {
      process.stderr.write(stderr + '\n');
    }
    if (result.status !== 0) {
      console.error(`astro sync (${label}) failed with exit code ${result.status}`);
      // Fall back to printing whatever stdout we captured, so the user
      // sees the failure context even though we suppressed transient noise.
      if (result.stdout) process.stdout.write(result.stdout);
      process.exit(result.status);
    }
    return;
  }

  // Canonical pass: stream the output directly so the user sees the
  // real `[content] Synced content` / `[types] Generated` lines.
  const result = spawnSync('npx', ['astro', 'sync'], {
    stdio: 'inherit',
    shell: false,
  });
  if (result.status !== 0) {
    console.error(`astro sync (${label}) failed with exit code ${result.status}`);
    process.exit(result.status);
  }
}

// First pass: warms the .astro/ cache. Suppresses the transient
// cross-collection duplicate-id warnings from the glob-loader (see
// header comment for why those are not real duplicates). Real errors
// on the first pass are still printed.
runSync('first pass — cache warm-up', { suppressTransient: true });

// Second pass: produces the canonical output. Any warnings here would
// indicate a real issue.
runSync('second pass — canonical', { suppressTransient: false });
