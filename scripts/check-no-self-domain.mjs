#!/usr/bin/env node
/**
 * check-no-self-domain.mjs — Reject `sourceUrl` / `secondarySources[].url`
 * values that point back at this archive's own deployment domains.
 *
 * `sourceUrl` and `secondarySources[]` exist to point a reader at an
 * independent, external reference (STYLE_GUIDE.md "Source Citation:
 * sourceUrl vs secondarySources"). A URL on this site's own deployment
 * domain is not external by definition, regardless of whether it
 * happens to resolve — citing yourself is not a citation.
 *
 * Incident (2026-08-02): five entries used a self-referencing or
 * outright fictional "own domain" (bitcoininstitute.com,
 * www.bitcoin-institute.org — neither ever configured, see
 * site-config.mjs) as sourceUrl. Nothing caught it because no check
 * enforced the internal/external distinction.
 *
 * Usage:
 *   node scripts/check-no-self-domain.mjs           # report only (exit 0 always)
 *   node scripts/check-no-self-domain.mjs --strict  # exit 1 if any violation
 */

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { PRIMARY_ORIGIN, MIRROR_ORIGIN } from '../site-config.mjs';

const EN_DIR = 'src/data/entries/en';
const JA_DIR = 'src/data/translations/ja';
const STRICT = process.argv.includes('--strict');

// Real deployment domains (from site-config.mjs) plus every fictional
// "own domain" string found in the 2026-08-02 incident. New fictional
// variants that slip in later will not be caught here automatically --
// this list guards against recurrence of a *known* string, not against
// every possible future hallucinated domain.
const SELF_DOMAINS = [
  new URL(PRIMARY_ORIGIN).hostname,
  new URL(MIRROR_ORIGIN).hostname,
  'bitcoininstitute.com',
  'bitcoin-institute.org',
];

function walk(dir) {
  const out = [];
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir)) {
    const p = path.join(dir, e);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (p.endsWith('.md')) out.push(p);
  }
  return out;
}

function extractFrontmatter(content) {
  const m = content.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : null;
}

function parseSourceUrl(fm) {
  const m = fm.match(/^sourceUrl:\s*"?([^"\n]+?)"?\s*$/m);
  return m ? m[1].trim() : null;
}

function parseSecondarySourceUrls(fm) {
  const lines = fm.split('\n');
  const urls = [];
  let inBlock = false;
  for (const line of lines) {
    if (/^secondarySources:/.test(line)) {
      inBlock = true;
      continue;
    }
    if (inBlock) {
      if (/^[a-zA-Z]/.test(line)) {
        inBlock = false;
        continue;
      }
      const m = line.match(/^\s+url:\s*"?([^"\n]+?)"?\s*$/);
      if (m) urls.push(m[1].trim());
    }
  }
  return urls;
}

function isSelfDomain(url) {
  let hostname;
  try {
    hostname = new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return false;
  }
  return SELF_DOMAINS.some((d) => hostname === d.replace(/^www\./, ''));
}

const allFiles = [...walk(EN_DIR), ...walk(JA_DIR)];
const violations = [];

for (const file of allFiles) {
  const content = readFileSync(file, 'utf-8');
  const fm = extractFrontmatter(content);
  if (!fm) continue;
  const rel = path.relative(process.cwd(), file);

  const sourceUrl = parseSourceUrl(fm);
  if (sourceUrl && isSelfDomain(sourceUrl)) {
    violations.push({ file: rel, field: 'sourceUrl', url: sourceUrl });
  }
  for (const url of parseSecondarySourceUrls(fm)) {
    if (isSelfDomain(url)) {
      violations.push({ file: rel, field: 'secondarySources[].url', url });
    }
  }
}

if (violations.length === 0) {
  console.log('✓ No sourceUrl / secondarySources entries point at this archive\'s own domain.');
  process.exit(0);
}

console.error(`✗ Found ${violations.length} self-domain citation(s):\n`);
for (const v of violations) {
  console.error(`  ${v.file}`);
  console.error(`    ${v.field}: ${v.url}`);
}
console.error(`\nsourceUrl / secondarySources must point at an independent external`);
console.error(`reference, not this site's own domain (${SELF_DOMAINS.join(', ')}).`);
console.error(`See STYLE_GUIDE.md "Source Citation: sourceUrl vs secondarySources".`);

process.exit(STRICT ? 1 : 0);
