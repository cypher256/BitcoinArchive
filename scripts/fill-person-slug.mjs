/**
 * fill-person-slug.mjs — Fill missing personSlug in quotes[]
 *
 * Phase 2 migration scripts forgot to set personSlug. This means JA
 * rendering uses the raw English person name instead of the katakana
 * mapping from participants.ts.
 *
 * This script:
 * 1. Reads participants.ts to build a name → slug mapping
 *    (uses both the slug→ja mapping and the participants[] in entries)
 * 2. For each EN entry with quotes[], looks up person → slug
 * 3. Adds personSlug field where matched
 * 4. Mirrors the change to the JA file
 *
 * Read-only mapping sources, deterministic frontmatter update only.
 * Does NOT modify body text.
 *
 * Usage:
 *   node scripts/fill-person-slug.mjs --dry-run  # preview
 *   node scripts/fill-person-slug.mjs --apply    # apply
 */

import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const enDir = path.resolve(__dirname, '../src/data/entries/en');
const jaDir = path.resolve(__dirname, '../src/data/translations/ja');

// ---------------------------------------------------------------------------
// Build name → slug mapping
// ---------------------------------------------------------------------------

// Manual aliases for name variants and email addresses
const MANUAL_ALIASES = {
  // Satoshi variants
  'Satoshi': 'satoshi-nakamoto',
  'satoshi': 'satoshi-nakamoto',
  'Satoshi Nakamoto': 'satoshi-nakamoto',
  // Gavin Andresen handle variants
  'gavinandresen': 'gavin-andresen',
  // Martti Malmi variants
  'mmalmi@cc.hut.fi': 'martti-malmi',
  'sirius-m': 'martti-malmi',
  'Sirius': 'martti-malmi',
  'sirius': 'martti-malmi',
  // Liberty Standard
  'Liberty Standard': 'newlibertystandard',
  'liberty standard': 'newlibertystandard',
  // Ray Dillinger
  'Ray Dillinger (Bear)': 'ray-dillinger',
  'Ray Dillinger': 'ray-dillinger',
  // Hal Finney
  'Hal': 'hal-finney',
  'hal': 'hal-finney',
  // Other variants
  'Dustin D. Trammell': 'dustin-trammell',
  'James A. Donald': 'james-donald',
  'Jeff Garzik': 'jeff-garzik',
  'jgarzik': 'jeff-garzik',
};

function buildNameSlugMap() {
  const map = new Map();
  for (const [name, slug] of Object.entries(MANUAL_ALIASES)) {
    map.set(name, slug);
  }

  // 1. From all entries' participants[]
  function walk(dir) {
    for (const entry of readdirSync(dir)) {
      const full = path.join(dir, entry);
      if (statSync(full).isDirectory()) walk(full);
      else if (full.endsWith('.md')) {
        const content = readFileSync(full, 'utf-8');
        const match = content.match(/^---\n([\s\S]*?)\n---/);
        if (!match) continue;
        const fm = match[1];
        // Extract participants[]
        const partsMatch = fm.match(/^participants:\n((?:  - [\s\S]*?)+?)(?=\n[a-z])/m);
        if (!partsMatch) continue;
        const lines = partsMatch[1].split('\n');
        let currentName = null;
        for (const line of lines) {
          const nameMatch = line.match(/^\s*- name:\s*"([^"]+)"/);
          if (nameMatch) currentName = nameMatch[1];
          const slugMatch = line.match(/^\s*slug:\s*"([^"]+)"/);
          if (slugMatch && currentName) {
            map.set(currentName, slugMatch[1]);
            // Also map lowercase variant
            if (currentName !== currentName.toLowerCase()) {
              map.set(currentName.toLowerCase(), slugMatch[1]);
            }
            currentName = null;
          }
        }
      }
    }
  }
  walk(enDir);

  return map;
}

// ---------------------------------------------------------------------------
// Update file
// ---------------------------------------------------------------------------

function updateFile(filePath, nameSlugMap, dryRun) {
  const content = readFileSync(filePath, 'utf-8');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!fmMatch) return null;

  const fm = fmMatch[1];
  const body = fmMatch[2];

  // Find quotes[] block: starts with "quotes:", continues with "  -" or "    " indented lines
  const fmLines = fm.split('\n');
  let qStart = -1, qEnd = -1;
  for (let i = 0; i < fmLines.length; i++) {
    if (fmLines[i] === 'quotes:') {
      qStart = i;
      // Find end: first line that doesn't start with 2+ spaces
      for (let j = i + 1; j < fmLines.length; j++) {
        if (!fmLines[j].startsWith('  ')) {
          qEnd = j;
          break;
        }
      }
      if (qEnd === -1) qEnd = fmLines.length;
      break;
    }
  }
  if (qStart === -1) return null;

  const quotesBlock = fmLines.slice(qStart, qEnd).join('\n');
  const lines = quotesBlock.split('\n');
  const newLines = [];
  let modified = false;
  let pendingPerson = null;
  let hasSlug = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const personMatch = line.match(/^    person:\s*"([^"]+)"/);
    const slugMatch = line.match(/^    personSlug:/);
    const idMatch = line.match(/^  - id:/);

    if (idMatch) {
      // Flush previous quote
      if (pendingPerson && !hasSlug) {
        const slug = nameSlugMap.get(pendingPerson) || nameSlugMap.get(pendingPerson.toLowerCase());
        if (slug) {
          // Insert personSlug after person line
          for (let j = newLines.length - 1; j >= 0; j--) {
            if (newLines[j].match(/^    person:/)) {
              newLines.splice(j + 1, 0, `    personSlug: "${slug}"`);
              modified = true;
              break;
            }
          }
        }
      }
      pendingPerson = null;
      hasSlug = false;
    }

    if (personMatch) {
      pendingPerson = personMatch[1];
    }
    if (slugMatch) {
      hasSlug = true;
    }

    newLines.push(line);
  }

  // Flush last quote
  if (pendingPerson && !hasSlug) {
    const slug = nameSlugMap.get(pendingPerson) || nameSlugMap.get(pendingPerson.toLowerCase());
    if (slug) {
      for (let j = newLines.length - 1; j >= 0; j--) {
        if (newLines[j].match(/^    person:/)) {
          newLines.splice(j + 1, 0, `    personSlug: "${slug}"`);
          modified = true;
          break;
        }
      }
    }
  }

  if (!modified) return null;

  const newQuotesBlock = newLines.join('\n');
  const newFm = fm.replace(quotesBlock, newQuotesBlock);
  const newContent = `---\n${newFm}\n---\n${body}`;

  if (!dryRun) {
    writeFileSync(filePath, newContent, 'utf-8');
  }
  return { modified: true, sample: newQuotesBlock };
}

// ---------------------------------------------------------------------------
// Walk
// ---------------------------------------------------------------------------

function walkMd(dir) {
  const results = [];
  if (!existsSync(dir)) return results;
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...walkMd(full));
    else if (full.endsWith('.md')) results.push(full);
  }
  return results;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const args = process.argv.slice(2);
const dryRun = !args.includes('--apply');

console.log('Building name → slug mapping from all entries...');
const nameSlugMap = buildNameSlugMap();
console.log(`Mapping size: ${nameSlugMap.size} unique names`);

const enFiles = walkMd(enDir);
let enUpdated = 0;
let jaUpdated = 0;

for (const enFile of enFiles) {
  const enResult = updateFile(enFile, nameSlugMap, dryRun);
  if (enResult) enUpdated++;

  // Mirror to JA
  const rel = path.relative(enDir, enFile);
  const jaFile = path.join(jaDir, rel);
  if (existsSync(jaFile)) {
    const jaResult = updateFile(jaFile, nameSlugMap, dryRun);
    if (jaResult) jaUpdated++;
  }
}

console.log();
console.log(`Mode: ${dryRun ? 'DRY RUN' : 'APPLY'}`);
console.log(`EN files updated: ${enUpdated}`);
console.log(`JA files updated: ${jaUpdated}`);

if (dryRun) {
  console.log();
  console.log('Run with --apply to write changes.');
}
