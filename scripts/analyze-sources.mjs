#!/usr/bin/env node
/**
 * Analyze all entries to determine new type/source mapping for the refactor.
 * Run: node scripts/analyze-sources.mjs
 */
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const ROOT = 'src/data/entries/en';

function walk(dir) {
  const results = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      results.push(...walk(full));
    } else if (name.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/^(\w[\w-]*):\s*"?([^"]*)"?\s*$/);
    if (m) fm[m[1]] = m[2];
  }
  return fm;
}

function domainFromUrl(url) {
  try {
    const host = new URL(url).hostname;
    return host.replace(/^www\./, '');
  } catch {
    return url;
  }
}

function domainToSlug(domain) {
  const map = {
    'en.wikipedia.org': 'wikipedia',
    'bitcointalk.org': 'bitcointalk',
    'lesswrong.com': 'lesswrong',
    'x.com': 'x',
    'twitter.com': 'x',
    'bitslog.com': 'bitslog',
    'satoshi.nakamotoinstitute.org': 'nakamotoinstitute',
    'nakamotoinstitute.org': 'nakamotoinstitute',
    'cypherpunks.venona.com': 'cypherpunks-mailing-list',
    'coindesk.com': 'coindesk',
    'cnbc.com': 'cnbc',
    'plan99.net': 'plan99',
    'blog.plan99.net': 'plan99',
    'en.bitcoin.it': 'bitcoin-wiki',
    'bitcoin.it': 'bitcoin-wiki',
    'bitcoinmagazine.com': 'bitcoin-magazine',
    'bitcoindefense.org': 'bitcoin-defense',
    'alcor.org': 'alcor',
    'unenumerated.blogspot.com': 'unenumerated',
    'p2pfoundation.ning.com': 'p2pfoundation',
    'wiki.p2pfoundation.net': 'p2pfoundation',
    'wired.com': 'wired',
    'newyorker.com': 'new-yorker',
    'newsweek.com': 'newsweek',
    'forbes.com': 'forbes',
    'judiciary.uk': 'uk-judiciary',
    'news.slashdot.org': 'slashdot',
    'slashdot.org': 'slashdot',
    'cointelegraph.com': 'cointelegraph',
    'coingeek.com': 'coingeek',
    'mempool.space': 'mempool',
    'blockchain.com': 'blockchain-com',
    'stephanlivera.com': 'stephan-livera',
    'linkedin.com': 'linkedin',
    'medium.com': 'medium',
    'mail-archive.com': 'mail-archive',
    'metzdowd.com': 'cryptography-mailing-list',
    'sourceforge.net': 'sourceforge',
    'bitcoin.org': 'bitcoin-org',
    'github.com': 'github',
    'lists.linuxfoundation.org': 'bitcoin-dev-list',
    'breakermag.com': 'breaker-mag',
    'blog.dustintrammell.com': 'dustin-trammell-blog',
    'npr.org': 'npr',
    'bbc.co.uk': 'bbc',
    'bbc.com': 'bbc',
    'economist.com': 'economist',
    'blog.lopp.net': 'lopp-blog',
    'uncommons.cc': 'uncommons',
    'blog.uncommons.cc': 'uncommons',
  };
  return map[domain] || domain.replace(/\./g, '-');
}

function oldSourceToType(oldSource) {
  const map = {
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
  return map[oldSource] || null;
}

function aftermathTypeToType(at) {
  const map = {
    'biography': 'biography',
    'court-testimony': 'court-document',
    'interview': 'article',
    'blog': 'article',
    'media': 'article',
    'retrospective': 'article',
    'article': 'article',
    'academic': 'article',
  };
  return map[at] || 'article';
}

// Analyze
const files = walk(ROOT);
const entries = files.map(f => {
  const content = readFileSync(f, 'utf-8');
  const fm = parseFrontmatter(content);
  const domain = fm.sourceUrl ? domainFromUrl(fm.sourceUrl) : '';
  return {
    file: relative(ROOT, f),
    oldSource: fm.source || '',
    aftermathType: fm.aftermathType || '',
    sourceUrl: fm.sourceUrl || '',
    domain,
    newType: fm.source === 'aftermath'
      ? aftermathTypeToType(fm.aftermathType)
      : oldSourceToType(fm.source),
    newSource: fm.source === 'aftermath'
      ? domainToSlug(domain)
      : fm.source === 'correspondence'
        ? domainToSlug(domain)
        : fm.source === 'whitepaper'
          ? 'bitcoin-org'
          : fm.source === 'bip'
            ? domainToSlug(domain)
            : fm.source,
  };
});

// Summary
console.log('=== OLD SOURCE DISTRIBUTION ===');
const oldCounts = {};
entries.forEach(e => { oldCounts[e.oldSource] = (oldCounts[e.oldSource] || 0) + 1; });
Object.entries(oldCounts).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${k}: ${v}`));

console.log('\n=== NEW TYPE DISTRIBUTION ===');
const typeCounts = {};
entries.forEach(e => { typeCounts[e.newType] = (typeCounts[e.newType] || 0) + 1; });
Object.entries(typeCounts).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${k}: ${v}`));

console.log('\n=== NEW SOURCE DISTRIBUTION ===');
const sourceCounts = {};
entries.forEach(e => { sourceCounts[e.newSource] = (sourceCounts[e.newSource] || 0) + 1; });
Object.entries(sourceCounts).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${k}: ${v}`));

console.log('\n=== AFTERMATH ENTRIES (new type + source) ===');
entries.filter(e => e.oldSource === 'aftermath').forEach(e => {
  console.log(`  ${e.file}`);
  console.log(`    type: ${e.newType}, source: ${e.newSource}, aftermathType: ${e.aftermathType}`);
  console.log(`    domain: ${e.domain}`);
});

console.log('\n=== CORRESPONDENCE SOURCE DISTRIBUTION ===');
const corrSources = {};
entries.filter(e => e.oldSource === 'correspondence').forEach(e => {
  corrSources[e.newSource] = (corrSources[e.newSource] || 0) + 1;
});
Object.entries(corrSources).sort((a, b) => b[1] - a[1]).forEach(([k, v]) => console.log(`  ${k}: ${v}`));

console.log(`\nTotal entries: ${entries.length}`);
console.log(`Unique new types: ${Object.keys(typeCounts).length}`);
console.log(`Unique new sources: ${Object.keys(sourceCounts).length}`);
