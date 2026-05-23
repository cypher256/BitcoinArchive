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

/**
 * Per-file render errors that astro sync logs but does NOT promote to
 * a non-zero exit code (glob-loader skips the broken file and continues).
 * The CI `astro build` workflow catches these via a post-step grep on
 * build.log and promotes them to exit 1. We mirror that gate here so
 * the same class of failure (markdown parse errors, remark plugin
 * errors like broken blockquote chains for quote markers) is caught
 * during `npm run check` in ~30 seconds instead of only surfacing
 * after a 20-minute production build.
 *
 * Keep this list aligned with `.github/workflows/deploy.yml`'s
 * "Fail build on per-page render errors" step.
 */
const PER_FILE_ERROR_PATTERNS = [
  /\[ERROR\]\s+\[glob-loader\]/,
  /Failed to parse Markdown file/,
];

function isTransientLine(line) {
  return TRANSIENT_PATTERNS.some((re) => re.test(line));
}

function hasPerFileError(text) {
  return PER_FILE_ERROR_PATTERNS.some((re) => re.test(text));
}

function runSync(label, { suppressTransient }) {
  const result = spawnSync('npx', ['astro', 'sync'], {
    encoding: 'utf8',
    shell: false,
  });

  const stdoutRaw = result.stdout ?? '';
  const stderrRaw = result.stderr ?? '';

  const stderrFiltered = suppressTransient
    ? stderrRaw
        .split('\n')
        .filter((line) => line.length > 0 && !isTransientLine(line))
        .join('\n')
    : stderrRaw;

  if (suppressTransient) {
    // First pass: don't print stdout (the second pass will emit canonical
    // progress). Only print stderr that survived the transient filter.
    if (stderrFiltered.trim().length > 0) {
      process.stderr.write(stderrFiltered + '\n');
    }
  } else {
    // Second pass: print everything so the user sees real progress.
    if (stdoutRaw) process.stdout.write(stdoutRaw);
    if (stderrRaw) process.stderr.write(stderrRaw);
  }

  if (result.status !== 0) {
    console.error(`astro sync (${label}) failed with exit code ${result.status}`);
    if (suppressTransient && stdoutRaw) process.stdout.write(stdoutRaw);
    process.exit(result.status);
  }

  // Promote per-file render errors to exit 1. astro sync logs them as
  // [ERROR] [glob-loader] but exits 0 because it skipped the broken
  // file and finished syncing the rest. CI catches this via build.log
  // grep; we mirror that gate here so local `npm run check` catches it.
  const combined = stdoutRaw + '\n' + stderrRaw;
  if (hasPerFileError(combined)) {
    console.error(
      `\n[sync-content] ERROR: per-file render error detected during astro sync (${label}).\n` +
      `  See lines above. astro sync internally swallows these (exit 0) but they break\n` +
      `  the production build. Promoting to exit 1 to match the CI build gate.`
    );
    process.exit(1);
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
