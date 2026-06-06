#!/usr/bin/env node
/**
 * check-registry.mjs — verify the inspection-script ledger (scripts/CHECKS.md)
 * matches reality (files in scripts/, ports in package.json).
 *
 * Convention (full text in scripts/CHECKS.md):
 *   - check-* = gate. Deterministic or suppression-equipped (skip/ignore).
 *     Wired into `npm run check` (and usually `build`) via a `check`-named
 *     port, or via a git hook. Stops the build on failure.
 *   - audit-* = manual, explicitly invoked. Heuristic; false positives
 *     expected. Exposes an `audit:<name>` port. Never stops the build.
 *
 * Checks (deterministic — exits 1 on any violation, no false positives):
 *   1. unregistered — every check- / audit- script is listed in CHECKS.md
 *   2. ghost        — every script CHECKS.md lists actually exists in scripts/
 *   3. wiring       — audit-* has an `audit:` port; check-* has a `check`-named
 *                     port (or git-hook wiring)
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SCRIPTS = path.join(ROOT, 'scripts');
const CHECKS_MD = path.join(SCRIPTS, 'CHECKS.md');
const SELF = path.basename(fileURLToPath(import.meta.url));

// Naming exceptions: established names managed as check-equivalents in the
// ledger (the archive currently has none; the novel repo grandfathers
// measure-prose.py). Map filename -> tier ("check" | "audit").
const GRANDFATHERED = {};

const NAME_RE = /(?:check|audit)-[\w-]+\.mjs/g;

function verificationFiles() {
  const out = {};
  for (const f of readdirSync(SCRIPTS).sort()) {
    if (!f.endsWith('.mjs')) continue;
    if (f.startsWith('check-')) out[f] = 'check';
    else if (f.startsWith('audit-')) out[f] = 'audit';
    else if (f in GRANDFATHERED) out[f] = GRANDFATHERED[f];
  }
  return out;
}

function registeredInMd() {
  if (!existsSync(CHECKS_MD)) return null;
  return new Set(readFileSync(CHECKS_MD, 'utf8').match(NAME_RE) ?? []);
}

function npmScripts() {
  return JSON.parse(readFileSync(path.join(ROOT, 'package.json'), 'utf8')).scripts ?? {};
}

function hookText() {
  // Archive hooks live in local .git/hooks (commit-msg / post-commit) and are
  // not committed; check-registry for the archive is wired into check/build,
  // not a hook. Read any committed .githooks dir defensively for parity with
  // the novel repo's pre-commit wiring.
  const dir = path.join(ROOT, '.githooks');
  if (!existsSync(dir)) return '';
  return readdirSync(dir)
    .map((f) => {
      try {
        return readFileSync(path.join(dir, f), 'utf8');
      } catch {
        return '';
      }
    })
    .join('\n');
}

function main() {
  const files = verificationFiles();
  const registered = registeredInMd();
  if (registered === null) {
    console.error(`check-registry: CHECKS.md not found (${CHECKS_MD})`);
    process.exit(1);
  }
  const ports = npmScripts();
  const hook = hookText();
  const errors = [];

  // 1. unregistered
  for (const f of Object.keys(files)) {
    if (!registered.has(f)) errors.push(`unregistered: scripts/${f} is missing from CHECKS.md`);
  }
  // 2. ghost
  for (const r of registered) {
    if (!existsSync(path.join(SCRIPTS, r))) {
      errors.push(`ghost: CHECKS.md lists ${r} but it does not exist in scripts/`);
    }
  }
  // 3. wiring
  for (const [f, tier] of Object.entries(files)) {
    const refs = Object.entries(ports)
      .filter(([, cmd]) => cmd.includes(f))
      .map(([name]) => name);
    if (tier === 'audit') {
      if (!refs.some((n) => n.startsWith('audit:'))) {
        errors.push(`wiring: scripts/${f} (audit-) has no audit: port`);
      }
    } else {
      // check-*: a check-named port (incl. the `check`/`build` aggregates) or
      // a git hook, or check-registry itself.
      const wired = refs.some((n) => n.startsWith('check')) || hook.includes(f) || f === SELF;
      if (!wired) {
        errors.push(`wiring: scripts/${f} (check-) has no check: port / hook wiring`);
      }
    }
  }

  if (errors.length) {
    console.error('Inspection ledger (scripts/CHECKS.md) is inconsistent:');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`check-registry: OK (${Object.keys(files).length} scripts consistent with the ledger)`);
}

main();
