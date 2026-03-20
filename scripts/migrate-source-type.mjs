#!/usr/bin/env node
/**
 * Migration script: Split `source` into `type` + `source`.
 * - Adds `type` field (content format)
 * - Replaces `source` with actual platform/publication
 * - Removes `aftermathType` (merged into `type`)
 *
 * Run: node scripts/migrate-source-type.mjs [--dry-run]
 *
 * Processes both EN and JA entries.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const DRY_RUN = process.argv.includes('--dry-run');
const DIRS = [
  'src/data/entries/en',
  'src/data/translations/ja',
];

// ── Domain → Source slug mapping ──────────────────────────────
const DOMAIN_MAP = {
  // Forums
  'bitcointalk.org': 'bitcointalk',
  'p2pfoundation.ning.com': 'p2pfoundation',
  'wiki.p2pfoundation.net': 'p2pfoundation',
  // Mailing lists
  'metzdowd.com': 'cryptography-mailing-list',
  'mail-archive.com': 'cryptography-mailing-list',
  // Development
  'sourceforge.net': 'sourceforge',
  'github.com': 'github',
  // Archives
  'satoshi.nakamotoinstitute.org': 'nakamotoinstitute',
  'nakamotoinstitute.org': 'nakamotoinstitute',
  'en.bitcoin.it': 'bitcoin-wiki',
  'bitcoin.it': 'bitcoin-wiki',
  'mmalmi.github.io': 'malmi-email-archive',
  'gwern.net': 'gwern',
  'riski.wiki': 'riski-wiki',
  // Author sites
  'plan99.net': 'plan99',
  'blog.plan99.net': 'plan99',
  'bitslog.com': 'bitslog',
  'unenumerated.blogspot.com': 'unenumerated',
  'gavinthink.blogspot.com': 'gavin-andresen-blog',
  'blog.lopp.net': 'lopp-blog',
  'blog.dustintrammell.com': 'dustin-trammell-blog',
  'serhack.me': 'serhack',
  'ofnumbers.com': 'of-numbers',
  'forensicxs.com': 'forensicxs',
  'blog.uncommons.cc': 'uncommons',
  'opencrypto.org': 'opencrypto',
  // News / Media
  'coindesk.com': 'coindesk',
  'cnbc.com': 'cnbc',
  'wired.com': 'wired',
  'newyorker.com': 'new-yorker',
  'newsweek.com': 'newsweek',
  'forbes.com': 'forbes',
  'npr.org': 'npr',
  'bbc.co.uk': 'bbc',
  'bbc.com': 'bbc',
  'economist.com': 'economist',
  'news.slashdot.org': 'slashdot',
  'slashdot.org': 'slashdot',
  'bitcoinmagazine.com': 'bitcoin-magazine',
  'cointelegraph.com': 'cointelegraph',
  'coingeek.com': 'coingeek',
  'chainbulletin.com': 'chain-bulletin',
  'breakermag.com': 'breaker-mag',
  // Platforms
  'x.com': 'x',
  'twitter.com': 'x',
  'blog.twitter.com': 'x',
  'linkedin.com': 'linkedin',
  'whale-alert.medium.com': 'medium',
  'medium.com': 'medium',
  // Research / Academic
  'lesswrong.com': 'lesswrong',
  'journals.plos.org': 'plos',
  'blog.bitmex.com': 'bitmex-research',
  // Crypto specific
  'bitcoindefense.org': 'bitcoin-defense',
  'mempool.space': 'mempool',
  'blockchain.com': 'blockchain-com',
  'forum.bitcoin.com': 'bitcoin-com-forum',
  'alcor.org': 'alcor',
  'stephanlivera.com': 'stephan-livera',
  // Bitcoin core
  'bitcoin.org': 'bitcoin-org',
  // Legal
  'judiciary.uk': 'uk-judiciary',
  // Wikipedia
  'en.wikipedia.org': 'wikipedia',
  // Other
  'extropians.com': 'extropians',
  'cypherpunks.venona.com': 'cypherpunks-mailing-list',
  'lists.linuxfoundation.org': 'bitcoin-dev-list',
};

// ── Old source → New type mapping ──────────────────────────────
const SOURCE_TO_TYPE = {
  'bitcointalk': 'forum-post',
  'p2pfoundation': 'forum-post',
  'sourceforge': 'forum-post',
  'cryptography-mailing-list': 'mailing-list',
  'bitcoin-list': 'mailing-list',
  'p2p-research-list': 'mailing-list',
  'correspondence': 'correspondence',
  'whitepaper': 'whitepaper',
  'bip': 'bip',
};

// ── aftermathType → New type mapping ──────────────────────────
const AFTERMATH_TYPE_MAP = {
  'biography': 'biography',
  'court-testimony': 'court-document',
  'interview': 'article',
  'blog': 'article',
  'media': 'article',
  'retrospective': 'article',
  'article': 'article',
  'academic': 'article',
};

// ── Non-aftermath source → keep same (already good platform names) ──
// For these, the old source value IS the new source value.
const KEEP_SOURCE = new Set([
  'bitcointalk', 'p2pfoundation', 'sourceforge',
  'cryptography-mailing-list', 'bitcoin-list', 'p2p-research-list',
]);

function domainFromUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

function domainToSlug(domain) {
  return DOMAIN_MAP[domain] || domain.replace(/\./g, '-');
}

function walk(dir) {
  const results = [];
  try {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) {
        results.push(...walk(full));
      } else if (name.endsWith('.md')) {
        results.push(full);
      }
    }
  } catch { /* dir doesn't exist */ }
  return results;
}

function migrateFile(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const fmMatch = content.match(/^(---\n)([\s\S]*?)(\n---)/);
  if (!fmMatch) return null;

  const fmBlock = fmMatch[2];
  const body = content.slice(fmMatch[0].length);

  // Extract values from frontmatter
  const getVal = (key) => {
    const m = fmBlock.match(new RegExp(`^${key}:\\s*"?([^"\\n]*)"?`, 'm'));
    return m ? m[1].trim() : '';
  };

  const oldSource = getVal('source');
  const sourceUrl = getVal('sourceUrl');
  const aftermathType = getVal('aftermathType');

  if (!oldSource) return null;

  // Determine new type
  let newType;
  if (oldSource === 'aftermath') {
    newType = AFTERMATH_TYPE_MAP[aftermathType] || 'article';
  } else {
    newType = SOURCE_TO_TYPE[oldSource];
  }
  if (!newType) return null;

  // Determine new source
  let newSource;
  if (KEEP_SOURCE.has(oldSource)) {
    newSource = oldSource;
  } else if (oldSource === 'whitepaper') {
    newSource = 'bitcoin-org';
  } else {
    // Derive from sourceUrl
    const domain = domainFromUrl(sourceUrl);
    newSource = domain ? domainToSlug(domain) : oldSource;
  }

  // Build new frontmatter
  let newFm = fmBlock;

  // 1. Replace source line with type + source (insert type before source)
  const sourceLineRegex = /^source:\s*.*$/m;
  const sourceMatch = newFm.match(sourceLineRegex);
  if (sourceMatch) {
    newFm = newFm.replace(sourceLineRegex, `type: "${newType}"\nsource: "${newSource}"`);
  }

  // 2. Remove aftermathType line
  newFm = newFm.replace(/^aftermathType:.*\n?/m, '');

  // Remove trailing blank lines in frontmatter
  newFm = newFm.replace(/\n+$/, '');

  const newContent = `---\n${newFm}\n---${body}`;

  if (newContent === content) return null;

  return { newContent, oldSource, newType, newSource, aftermathType };
}

// ── Main ──────────────────────────────────────────────────────
let totalFiles = 0;
let modifiedFiles = 0;
const changes = [];

for (const dir of DIRS) {
  const files = walk(dir);
  for (const filePath of files) {
    totalFiles++;
    const result = migrateFile(filePath);
    if (result) {
      modifiedFiles++;
      changes.push({ filePath, ...result });
      if (!DRY_RUN) {
        writeFileSync(filePath, result.newContent, 'utf-8');
      }
    }
  }
}

console.log(`${DRY_RUN ? '[DRY RUN] ' : ''}Processed ${totalFiles} files, modified ${modifiedFiles}`);

// Summary
const typeCounts = {};
const sourceCounts = {};
changes.forEach(c => {
  typeCounts[c.newType] = (typeCounts[c.newType] || 0) + 1;
  sourceCounts[c.newSource] = (sourceCounts[c.newSource] || 0) + 1;
});

console.log('\nType changes:');
Object.entries(typeCounts).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${k}: ${v}`));

console.log('\nSource changes:');
Object.entries(sourceCounts).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${k}: ${v}`));

if (DRY_RUN) {
  console.log('\nSample changes:');
  changes.slice(0, 5).forEach(c => {
    console.log(`  ${c.filePath}`);
    console.log(`    old: source=${c.oldSource} aftermathType=${c.aftermathType}`);
    console.log(`    new: type=${c.newType} source=${c.newSource}`);
  });
}
