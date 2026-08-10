#!/usr/bin/env node
/**
 * run-check-parallel.mjs — runs the same scripts as the old `check:run`
 * `&&` chain, but concurrently within each dependency phase instead of
 * one script at a time.
 *
 * Phases (each phase must finish before the next starts):
 *   0. check-registry.mjs        — fail fast if the script ledger itself
 *      is inconsistent, before spending time on anything else.
 *   1. generators                — generate-derived-related.mjs,
 *      generate-derived-commentaries.mjs, generate-git-dates.mjs,
 *      generate-keyword-index.mjs. Each writes a distinct JSON file, so
 *      they don't conflict with each other. check-inline-link-coverage.mjs
 *      (phase 2) reads keyword-index.json, so phase 1 must finish first.
 *   2. validators                — every other check-*.mjs. All read-only
 *      against source markdown, except check-mermaid.mjs (writes into its
 *      own mkdtempSync() dir — unique per process, no collision) and
 *      check-editorial-markers.mjs (writes temp/editorial_violations.md,
 *      a name no other script in this list touches). None of them read a
 *      file another one in this phase writes, so they're safe in parallel.
 *   3. sync-content.mjs          — kept last, matching the old chain's
 *      order.
 *
 * Unlike the old `&&` chain, a failure doesn't stop its siblings within
 * the same phase — every script in the phase still runs, so one `npm run
 * check` shows every failure at once instead of just the first one
 * alphabetically/positionally. The overall run still exits non-zero if
 * anything failed, and still stops before the next phase.
 */
import { spawn } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function run(scriptArgs) {
  const [script, ...args] = scriptArgs;
  return new Promise((resolve) => {
    const child = spawn('node', [path.join(__dirname, script), ...args], {
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    let out = '';
    let err = '';
    child.stdout.on('data', (d) => (out += d));
    child.stderr.on('data', (d) => (err += d));
    child.on('close', (code) => resolve({ label: [script, ...args].join(' '), code, out, err }));
  });
}

function report(results) {
  let failed = false;
  for (const r of results) {
    if (r.code !== 0) failed = true;
    console.log(`\n${r.code === 0 ? '✓' : '✗ FAILED'} ${r.label}${r.code === 0 ? '' : ` (exit ${r.code})`}`);
    if (r.out.trim()) process.stdout.write(r.out.endsWith('\n') ? r.out : r.out + '\n');
    if (r.err.trim()) process.stderr.write(r.err.endsWith('\n') ? r.err : r.err + '\n');
  }
  return failed;
}

async function runPhase(name, scriptArgsList) {
  console.log(`\n=== ${name} (${scriptArgsList.length} script${scriptArgsList.length > 1 ? 's' : ''}, parallel) ===`);
  const results = await Promise.all(scriptArgsList.map(run));
  if (report(results)) {
    console.error(`\n✗ ${name} phase failed — stopping before the next phase.`);
    process.exit(1);
  }
}

async function main() {
  const startedAt = Date.now();

  await runPhase('Registry', [['check-registry.mjs']]);

  await runPhase('Generators', [
    ['generate-derived-related.mjs'],
    ['generate-derived-commentaries.mjs'],
    ['generate-git-dates.mjs'],
    ['generate-keyword-index.mjs'],
  ]);

  await runPhase('Validators', [
    ['check-markdown-image-alt.mjs'],
    ['check-participants.mjs'],
    ['check-ja-tone.mjs'],
    ['check-ja-names.mjs'],
    ['check-ja-titles.mjs'],
    ['check-ja-tags.mjs'],
    ['check-ja-participant-slugs.mjs'],
    ['check-ja-block-notation.mjs'],
    ['check-ja-spacing.mjs'],
    ['check-ja-glossary.mjs', '--ignore-file', '.ja-glossary-ignore'],
    ['check-description-length.mjs', '--strict'],
    ['check-source-duplication.mjs', '--strict'],
    ['check-no-self-domain.mjs', '--strict'],
    ['check-citation-parity.mjs'],
    ['check-halving-consistency.mjs'],
    ['check-quotes.mjs'],
    ['check-quote-translation-consistency.mjs'],
    ['check-tweet-metadata.mjs'],
    ['check-duplicate-ids.mjs'],
    ['check-internal-links.mjs'],
    ['check-inline-link-coverage.mjs'],
    ['check-mermaid.mjs'],
    ['check-mermaid-ja-wrap.mjs'],
    ['check-editorial-markers.mjs', '--strict'],
    ['check-llms-counts.mjs'],
  ]);

  await runPhase('Content sync', [['sync-content.mjs']]);

  console.log(`\n✓ check complete in ${((Date.now() - startedAt) / 1000).toFixed(1)}s`);
}

main();
