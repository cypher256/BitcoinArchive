#!/usr/bin/env node
/**
 * Generate quote-translation fix candidates.
 *
 * This script intentionally does not modify content files. It runs
 * audit-quote-translation-consistency.mjs, finds groups where exactly one
 * body translation is available, and writes a review queue to:
 *
 *   temp/quote-fix-candidates.md
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const TEMP = path.join(ROOT, 'temp');
const OUT_PATH = path.join(TEMP, 'quote-fix-candidates.md');
const CHECK_RAW_PATH = path.join(TEMP, 'quote-fix-candidates.raw.txt');
const POLITE_BODY_RE =
  /(?:です|でした|ます|ました|ません|ましょう)(?=$|[\s。、！？!?：:；;」』）)\]])|ください|でしょう|ございま|しております|しています/;

mkdirSync(TEMP, { recursive: true });

function runCheck() {
  try {
    execSync(`node scripts/audit-quote-translation-consistency.mjs > ${JSON.stringify(CHECK_RAW_PATH)} 2>&1`, {
      cwd: ROOT,
      stdio: 'ignore',
    });
  } catch (error) {
    if (!existsSync(CHECK_RAW_PATH)) throw error;
  }
  return readFileSync(CHECK_RAW_PATH, 'utf-8');
}

function stripOuterQuotes(text) {
  const trimmed = text.trim();
  return trimmed.replace(/^"|"$/g, '');
}

function parseGroups(raw) {
  const groups = [];
  let current = null;

  const finishCurrent = () => {
    if (!current) return;
    groups.push(current);
    current = null;
  };

  for (const line of raw.split('\n')) {
    if (line.startsWith('[divergent translation]')) {
      finishCurrent();
      current = { kind: 'divergent', en: '', variants: [] };
      continue;
    }

    if (line.startsWith('[visual-only divergence]')) {
      finishCurrent();
      current = { kind: 'visual-only', en: '', variants: [] };
      continue;
    }

    if (line.trim() === '') {
      finishCurrent();
      continue;
    }

    if (!current) continue;

    if (line.startsWith('  EN: ')) {
      current.en = stripOuterQuotes(line.slice(6));
    } else if (line.startsWith('  JA variant: ')) {
      current.variants.push({
        ja: stripOuterQuotes(line.slice(14)),
        files: [],
      });
    } else if (current.variants.length > 0 && /^\s+src\/data\//.test(line)) {
      current.variants[current.variants.length - 1].files.push(line.trim());
    }
  }

  finishCurrent();
  return groups;
}

function jaTranslationPath(enPath) {
  return enPath.replace('src/data/entries/en/', 'src/data/translations/ja/');
}

function flagsForCandidate(kind, jaFile, canonicalJa) {
  const flags = [];

  if (kind === 'visual-only') flags.push('VISUAL-ONLY');

  const absoluteJaFile = path.join(ROOT, jaFile);
  if (existsSync(absoluteJaFile)) {
    const content = readFileSync(absoluteJaFile, 'utf-8');
    if (content.includes('> >') || content.includes('>>')) {
      flags.push('NESTED');
    }
  }

  if (POLITE_BODY_RE.test(canonicalJa)) {
    flags.push('POLITE-BODY');
  }

  return flags.length > 0 ? ` [${flags.join('] [')}]` : '';
}

const raw = runCheck();
const groups = parseGroups(raw);

let candidateCount = 0;
let skippedNoBody = 0;
let skippedBodySplit = 0;
let flaggedPolite = 0;
let flaggedNested = 0;
let visualOnlyCandidates = 0;

const out = [];
out.push(`# Quote fix candidates (generated ${new Date().toISOString().slice(0, 10)})`);
out.push('');
out.push('This file is a review queue only. It does not represent applied edits.');
out.push('');
out.push(`Parsed groups: ${groups.length}`);

for (const group of groups) {
  const bodyJas = new Map();

  for (const variant of group.variants) {
    for (const file of variant.files) {
      if (!file.includes(', body)')) continue;
      if (!bodyJas.has(variant.ja)) bodyJas.set(variant.ja, []);
      bodyJas.get(variant.ja).push(file);
    }
  }

  if (bodyJas.size === 0) {
    skippedNoBody++;
    continue;
  }

  if (bodyJas.size > 1) {
    skippedBodySplit++;
    out.push('');
    out.push(`## [SKIP: body-split] ${group.en.slice(0, 120)}`);
    for (const [ja, files] of bodyJas) {
      out.push(`Body: ${ja.slice(0, 160)}`);
      for (const file of files) out.push(`- ${file}`);
    }
    continue;
  }

  const canonicalJa = [...bodyJas.keys()][0];
  const bodyFiles = [...bodyJas.values()][0];

  for (const variant of group.variants) {
    if (variant.ja === canonicalJa) continue;

    for (const file of variant.files) {
      if (!file.includes(', quote)')) continue;

      const match = file.match(/^(src\/data\/\S+\.md)\s+\(paragraph #(\d+)/);
      if (!match) continue;

      const jaFile = jaTranslationPath(match[1]);
      const flags = flagsForCandidate(group.kind, jaFile, canonicalJa);
      if (flags.includes('POLITE-BODY')) flaggedPolite++;
      if (flags.includes('NESTED')) flaggedNested++;
      if (group.kind === 'visual-only') visualOnlyCandidates++;

      candidateCount++;
      out.push('');
      out.push(`## Candidate #${candidateCount}${flags}`);
      out.push(`Kind: ${group.kind}`);
      out.push(`EN: ${group.en}`);
      out.push(`Canonical body JA: ${canonicalJa}`);
      out.push(`Divergent quote JA: ${variant.ja}`);
      out.push(`Quote file: ${jaFile} (paragraph #${match[2]})`);
      out.push('Body source:');
      for (const bodyFile of bodyFiles) out.push(`- ${bodyFile}`);
    }
  }
}

out.push('');
out.push('---');
out.push(`Candidates: ${candidateCount}`);
out.push(`Visual-only candidates: ${visualOnlyCandidates}`);
out.push(`Skipped no-body: ${skippedNoBody}`);
out.push(`Skipped body-split: ${skippedBodySplit}`);
out.push(`Flagged polite-body: ${flaggedPolite}`);
out.push(`Flagged nested: ${flaggedNested}`);

writeFileSync(OUT_PATH, `${out.join('\n')}\n`, 'utf-8');

console.log(`Written ${candidateCount} candidates to ${path.relative(ROOT, OUT_PATH)}`);
console.log(`Parsed: ${groups.length} groups`);
console.log(`Skipped: ${skippedNoBody} no-body, ${skippedBodySplit} body-split`);
console.log(`Flagged: ${flaggedPolite} polite-body, ${flaggedNested} nested`);
