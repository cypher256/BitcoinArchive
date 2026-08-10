#!/usr/bin/env node
/**
 * Verify that every public entry has a usable citation route and that its
 * EN/JA mirrors point to the same source records.
 *
 * This is deliberately a metadata gate. It does not decide whether an
 * editorial claim is accurate or whether a link is worth adding; those are
 * human/audit decisions governed by the private citation policy and the
 * public style guides.
 */
import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const LOCALES = [
  { name: 'en', base: path.join(ROOT, 'src/data/entries/en') },
  { name: 'ja', base: path.join(ROOT, 'src/data/translations/ja') },
];

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const file = path.join(dir, name);
    const stat = statSync(file);
    if (stat.isDirectory()) walk(file, out);
    else if (stat.isFile() && name.endsWith('.md')) out.push(file);
  }
  return out;
}

function frontmatter(file) {
  const content = readFileSync(file, 'utf8');
  const match = content.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  return match ? match[1] : '';
}

function scalar(text, key) {
  const match = text.match(new RegExp(`^${key}:\\s*(?:"([^"]*)"|'([^']*)'|(\\S+))\\s*$`, 'm'));
  return match ? (match[1] ?? match[2] ?? match[3]) : null;
}

function secondaryUrls(text) {
  const lines = text.split('\n');
  const urls = [];
  let inSection = false;
  for (const line of lines) {
    if (/^secondarySources:\s*$/.test(line)) {
      inSection = true;
      continue;
    }
    if (inSection && /^[A-Za-z][A-Za-z0-9_-]*:\s*/.test(line)) {
      inSection = false;
    }
    if (!inSection) continue;
    const match = line.match(/^\s+url:\s*(?:"([^"]*)"|'([^']*)'|(\S+))\s*$/);
    if (match) urls.push(match[1] ?? match[2] ?? match[3]);
  }
  return urls;
}

function parse(file, locale) {
  const fm = frontmatter(file);
  const relative = path.relative(LOCALES.find((x) => x.name === locale).base, file);
  return {
    locale,
    relative,
    file: path.relative(ROOT, file),
    type: scalar(fm, 'type') ?? 'unknown',
    sourceUrl: scalar(fm, 'sourceUrl'),
    secondaryUrls: secondaryUrls(fm),
  };
}

function validUrl(value) {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function sorted(values) {
  return [...new Set(values)].sort();
}

const entries = new Map();
const failures = [];
for (const locale of LOCALES) {
  const map = new Map();
  for (const file of walk(locale.base)) {
    const entry = parse(file, locale.name);
    map.set(entry.relative, entry);
    const citations = [entry.sourceUrl, ...entry.secondaryUrls].filter(Boolean);
    if (citations.length === 0) {
      failures.push(`${entry.file}: no sourceUrl or secondarySources URL`);
    }
    for (const url of citations) {
      if (!validUrl(url)) failures.push(`${entry.file}: invalid citation URL ${url}`);
    }
    if (entry.sourceUrl && entry.secondaryUrls.includes(entry.sourceUrl)) {
      failures.push(`${entry.file}: sourceUrl is duplicated in secondarySources`);
    }
    if (new Set(entry.secondaryUrls).size !== entry.secondaryUrls.length) {
      failures.push(`${entry.file}: duplicate URL in secondarySources`);
    }
  }
  entries.set(locale.name, map);
}

const en = entries.get('en');
const ja = entries.get('ja');
for (const relative of new Set([...en.keys(), ...ja.keys()])) {
  const enEntry = en.get(relative);
  const jaEntry = ja.get(relative);
  if (!enEntry) {
    failures.push(`ja/${relative}: missing EN mirror`);
    continue;
  }
  if (!jaEntry) {
    failures.push(`en/${relative}: missing JA mirror`);
    continue;
  }
  const enSources = sorted([enEntry.sourceUrl, ...enEntry.secondaryUrls].filter(Boolean));
  const jaSources = sorted([jaEntry.sourceUrl, ...jaEntry.secondaryUrls].filter(Boolean));
  if (enSources.join('\n') !== jaSources.join('\n')) {
    failures.push(`${relative}: EN/JA citation URL sets differ`);
  }
}

console.log(`Citation parity: ${en.size} EN / ${ja.size} JA entries scanned.`);
if (failures.length) {
  console.error(`Citation parity FAILED: ${failures.length} issue(s).`);
  for (const failure of failures.slice(0, 80)) console.error(`- ${failure}`);
  if (failures.length > 80) console.error(`- ... ${failures.length - 80} more`);
  process.exit(1);
}
console.log('Citation parity: all entries have a citation route and matching EN/JA citation URL sets.');
