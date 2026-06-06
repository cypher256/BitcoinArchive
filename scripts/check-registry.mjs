#!/usr/bin/env node
/**
 * check-registry.mjs — verify the script ledger (scripts/CHECKS.md) matches
 * reality (files in scripts/, ports in package.json).
 *
 * The ledger catalogues EVERY standalone script in scripts/ so its identity
 * and tier are readable without forensic investigation:
 *   - check-*     = gate (deterministic / suppression-equipped; check port or hook)
 *   - audit-*     = manual heuristic (audit: port)
 *   - operational = pipeline (run by dev/build/check) or manual tool
 *
 * Checks (deterministic — exits 1 on any violation, no false positives):
 *   1. coverage — every scripts/*.mjs and scripts/*.sh is listed in CHECKS.md
 *   2. ghost    — every script filename CHECKS.md lists actually exists
 *   3. wiring   — check-* has a check port (or hook); audit-* has an audit: port
 *                 (operational scripts need only be catalogued, no wiring)
 */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SCRIPTS = path.join(ROOT, 'scripts');
const CHECKS_MD = path.join(SCRIPTS, 'CHECKS.md');
const SELF = path.basename(fileURLToPath(import.meta.url));

// Naming exceptions managed as check-equivalents in the ledger (the archive
// has none; the novel repo grandfathers measure-prose.py). filename -> tier.
const GRANDFATHERED = {};

// Standalone-script filename token (.mjs or .sh). Used both to read the ledger
// and to enforce coverage. scripts/lib/ modules are not standalone scripts.
const SCRIPT_RE = /[\w-]+\.(?:mjs|sh)/g;

function scriptFiles() {
  const out = {};
  for (const f of readdirSync(SCRIPTS).sort()) {
    if (!f.endsWith('.mjs') && !f.endsWith('.sh')) continue;
    if (f.startsWith('check-')) out[f] = 'check';
    else if (f.startsWith('audit-')) out[f] = 'audit';
    else out[f] = GRANDFATHERED[f] ?? 'operational';
  }
  return out;
}

function registeredInMd() {
  if (!existsSync(CHECKS_MD)) return null;
  return new Set(readFileSync(CHECKS_MD, 'utf8').match(SCRIPT_RE) ?? []);
}

function npmScripts() {
  return JSON.parse(readFileSync(path.join(ROOT, 'package.json'), 'utf8')).scripts ?? {};
}

function hookText() {
  // Archive hooks live in local .git/hooks (commit-msg / post-commit) and are
  // not committed; check-registry is wired into check/build, not a hook. Read
  // any committed .githooks dir defensively for parity with the novel repo.
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
  const files = scriptFiles();
  const registered = registeredInMd();
  if (registered === null) {
    console.error(`check-registry: CHECKS.md not found (${CHECKS_MD})`);
    process.exit(1);
  }
  const ports = npmScripts();
  const hook = hookText();
  const errors = [];

  // 1. coverage — every script catalogued
  for (const f of Object.keys(files)) {
    if (!registered.has(f)) errors.push(`uncatalogued: scripts/${f} is missing from CHECKS.md`);
  }
  // 2. ghost — every catalogued script exists
  for (const r of registered) {
    if (!existsSync(path.join(SCRIPTS, r))) {
      errors.push(`ghost: CHECKS.md lists ${r} but it does not exist in scripts/`);
    }
  }
  // 3. wiring — gates must be reachable (operational scripts: catalogued only)
  for (const [f, tier] of Object.entries(files)) {
    if (tier === 'operational') continue;
    const refs = Object.entries(ports)
      .filter(([, cmd]) => cmd.includes(f))
      .map(([name]) => name);
    if (tier === 'audit') {
      if (!refs.some((n) => n.startsWith('audit:'))) {
        errors.push(`wiring: scripts/${f} (audit-) has no audit: port`);
      }
    } else {
      const wired = refs.some((n) => n.startsWith('check')) || hook.includes(f) || f === SELF;
      if (!wired) {
        errors.push(`wiring: scripts/${f} (check-) has no check: port / hook wiring`);
      }
    }
  }

  if (errors.length) {
    console.error('Script ledger (scripts/CHECKS.md) is inconsistent:');
    for (const e of errors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log(`check-registry: OK (${Object.keys(files).length} scripts catalogued and consistent)`);
}

main();
