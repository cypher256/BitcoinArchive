#!/usr/bin/env node
/**
 * check-no-self-domain.mjs — Reject `sourceUrl` / `secondarySources[].url`
 * values that point back at this archive's own deployment domains, and
 * reject `source` (the taxonomy field) when it names this project itself
 * instead of a genuine external venue.
 *
 * `sourceUrl` and `secondarySources[]` exist to point a reader at an
 * independent, external reference (STYLE_GUIDE_CORE.md "Source Citation:
 * sourceUrl vs secondarySources"). `source` is a different field — the
 * taxonomy axis behind `/sources/[source]/` — but the same principle
 * applies: it must name the actual external platform/publication content
 * came from (STYLE_GUIDE_CORE.md "Source Field (Taxonomy)"), never this
 * project. A URL or slug that resolves to this site's own identity is
 * not external by definition, regardless of whether it happens to
 * resolve — citing yourself is not a citation.
 *
 * Incident (2026-08-02): five entries used a self-referencing or
 * outright fictional "own domain" (bitcoininstitute.com,
 * www.bitcoin-institute.org — neither ever configured, see
 * site-config.mjs) as sourceUrl; four of those five also had
 * source: "bitcoinarchive" / "bitcoin-institute" and were fixed in the
 * same pass. A fifth entry created minutes earlier had the same
 * source: "bitcoin-institute" self-reference but no self-domain
 * sourceUrl, so it fell outside that pass's sourceUrl-only sweep and
 * was not caught until 2026-08-19. Nothing enforced the source field
 * because this check only ever parsed sourceUrl / secondarySources.
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

// `source` is a bare taxonomy slug, not a URL, so it needs its own
// literal denylist rather than hostname parsing. Same caveat as
// SELF_DOMAINS: guards against recurrence of known strings, not every
// possible future self-referential slug.
const SELF_SOURCE_SLUGS = ['bitcoin-institute', 'bitcoinarchive'];

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

function parseSource(fm) {
  const m = fm.match(/^source:\s*"?([^"\n]+?)"?\s*$/m);
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

  const source = parseSource(fm);
  if (source && SELF_SOURCE_SLUGS.includes(source)) {
    violations.push({ file: rel, field: 'source', url: source });
  }
}

if (violations.length === 0) {
  console.log('✓ No sourceUrl / secondarySources / source entries self-cite this archive.');
  process.exit(0);
}

console.error(`✗ Found ${violations.length} self-citation(s):\n`);
for (const v of violations) {
  console.error(`  ${v.file}`);
  console.error(`    ${v.field}: ${v.url}`);
}
console.error(`\nsourceUrl / secondarySources must point at an independent external`);
console.error(`reference, not this site's own domain (${SELF_DOMAINS.join(', ')}).`);
console.error(`See STYLE_GUIDE_CORE.md "Source Citation: sourceUrl vs secondarySources".`);
console.error(`\nsource must name a genuine external platform/publication, not this`);
console.error(`project itself (${SELF_SOURCE_SLUGS.join(', ')}).`);
console.error(`See STYLE_GUIDE_CORE.md "Source Field (Taxonomy)".`);

process.exit(STRICT ? 1 : 0);
