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
 *   WHY NOT JUST ONE PASS, OR WHY NOT GREP IT OUT?
 * ============================================================
 *
 * Running `astro sync` once and accepting the noise is unacceptable
 * because it makes `npm run check` output ambiguous: a real problem
 * and the transient noise look identical to a casual reader. CI logs
 * become hard to read; reviewers waste time chasing phantom failures.
 *
 * Running once and grepping out `Duplicate id` lines is brittle — it
 * would silently swallow a *real* future duplicate. We must not lose
 * that signal.
 *
 * Running `astro sync` twice is the only option that (a) produces
 * clean output, (b) preserves any real issue Astro flags, and (c)
 * costs essentially nothing because the second pass hits a warm cache
 * (~1 second).
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

function runSync(label) {
  const result = spawnSync('npx', ['astro', 'sync'], {
    stdio: 'inherit',
    shell: false,
  });
  if (result.status !== 0) {
    console.error(`astro sync (${label}) failed with exit code ${result.status}`);
    process.exit(result.status);
  }
}

// First pass: warms the .astro/ cache. Transient cross-collection
// duplicate-id warnings from the glob-loader may appear here; they are
// not real duplicates (see header comment).
runSync('first pass — cache warm-up');

// Second pass: produces the canonical output. Any warnings here would
// indicate a real issue.
runSync('second pass — canonical');
