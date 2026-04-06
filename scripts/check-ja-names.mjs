/**
 * check-ja-names.mjs — Japanese person-name linter for Bitcoin Institute
 *
 * Checks that person names in JA translation files use katakana forms
 * in body text, titles, and descriptions. Names in metadata fields
 * (author, slug, url, sourceUrl, speaker annotations, Quote attributions,
 * email headers, code blocks) are excluded.
 *
 * Run: npm run check:ja-names
 */

import { readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const jaDir = path.resolve(__dirname, '../src/data/translations/ja');

// -------------------------------------------------------------------------
// Person name mappings: English → Katakana
// -------------------------------------------------------------------------
const NAME_MAP = {
  'Gavin Andresen': 'ギャビン・アンドレセン',
  'Hal Finney': 'ハル・フィニー',
  'Adam Back': 'アダム・バック',
  'Wei Dai': 'ウェイ・ダイ',
  'Nick Szabo': 'ニック・サボ',
  'Mike Hearn': 'マイク・ハーン',
  'Martti Malmi': 'マルッティ・マルミ',
  'Laszlo Hanyecz': 'ラズロ・ハニエツ',
  'Ray Dillinger': 'レイ・ディリンジャー',
  'Jeff Garzik': 'ジェフ・ガージック',
  'Dustin Trammell': 'ダスティン・トランメル',
  'Peter Todd': 'ピーター・トッド',
  'Craig Wright': 'クレイグ・ライト',
  'James Donald': 'ジェームズ・ドナルド',
};

// -------------------------------------------------------------------------
// Lines / patterns to skip (not body text)
// -------------------------------------------------------------------------
function isMetadataOrExcluded(line, inFrontmatter, inCodeBlock) {
  if (inFrontmatter || inCodeBlock) return true;

  const trimmed = line.trimStart();

  // Quote attribution lines — keep English per style guide
  if (/^\[Quote from:/.test(trimmed)) return true;
  if (/^> \[Quote from:/.test(trimmed)) return true;

  // NAME wrote: email attribution — keep English per style guide
  if (/wrote:/.test(trimmed) && /^>?\s*\w/.test(trimmed)) return true;

  // Speaker annotations
  if (/<!--\s*speaker:/.test(trimmed)) return true;

  // Email headers (To:, From:, Subject:, Date:, CC:)
  if (/^>?\s*(To|From|Subject|Date|CC|宛先|差出人):/.test(trimmed)) return true;

  // Email addresses
  if (/<[^>]+@[^>]+>/.test(trimmed)) return true;

  // Email signatures (NAME<br> pattern)
  if (/<br>/.test(trimmed)) return true;

  // Lines discussing name rendering itself ("Martti Malmiと表記するか")
  if (/と表記/.test(trimmed)) return true;

  // Lines where someone states their own name ("僕の名前はNAME")
  if (/名前は/.test(trimmed)) return true;

  // Username/handle context ("ユーザー名を...「NAME」に変更")
  if (/ユーザー名/.test(trimmed)) return true;

  // Code comments (lines starting with #)
  if (/^>?\s*#\s/.test(trimmed)) return true;

  // Nested blockquote forwarded signatures (>> NAME)
  if (/^>{2,}\s*[A-Z]/.test(trimmed) && trimmed.split(/\s+/).length <= 3) return true;

  // Source/secondary source name fields in frontmatter-like areas
  if (/^\s*-\s*name:\s*"/.test(trimmed)) return true;

  // URL lines
  if (/^\s*url:\s*"/.test(trimmed)) return true;
  if (/^\s*sourceUrl:\s*"/.test(trimmed)) return true;

  return false;
}

// -------------------------------------------------------------------------
// Walk directory
// -------------------------------------------------------------------------
function walkDir(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      results.push(...walkDir(full));
    } else if (full.endsWith('.md')) {
      results.push(full);
    }
  }
  return results;
}

// -------------------------------------------------------------------------
// Main check
// -------------------------------------------------------------------------
const files = walkDir(jaDir);
const violations = [];

for (const file of files) {
  const content = readFileSync(file, 'utf-8');
  const lines = content.split('\n');
  let inFrontmatter = false;
  let frontmatterCount = 0;
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track frontmatter
    if (line.trim() === '---') {
      frontmatterCount++;
      inFrontmatter = frontmatterCount < 2;
      continue;
    }

    // Track code blocks
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    // Check title and description in frontmatter
    if (frontmatterCount === 1) {
      // Only check title and description fields, not author/name/slug/url
      if (/^\s*(title|description):/.test(line)) {
        for (const [eng, kata] of Object.entries(NAME_MAP)) {
          if (line.includes(eng)) {
            violations.push({
              file: path.relative(process.cwd(), file),
              line: i + 1,
              name: eng,
              katakana: kata,
              context: line.trim().substring(0, 100),
              type: 'frontmatter',
            });
          }
        }
      }
      continue;
    }

    // Skip non-body lines
    if (isMetadataOrExcluded(line, inFrontmatter, inCodeBlock)) continue;

    // Check body text
    for (const [eng, kata] of Object.entries(NAME_MAP)) {
      if (line.includes(eng)) {
        violations.push({
          file: path.relative(process.cwd(), file),
          line: i + 1,
          name: eng,
          katakana: kata,
          context: line.trim().substring(0, 100),
          type: 'body',
        });
      }
    }
  }
}

// -------------------------------------------------------------------------
// Report
// -------------------------------------------------------------------------
if (violations.length === 0) {
  console.log('✓ No English person names found in JA body text, titles, or descriptions.');
  process.exit(0);
} else {
  console.error(`✗ Found ${violations.length} English person name(s) in JA files:\n`);
  for (const v of violations) {
    console.error(`  ${v.file}:${v.line}`);
    console.error(`    ${v.name} → ${v.katakana} (${v.type})`);
    console.error(`    ${v.context}`);
    console.error();
  }
  process.exit(1);
}
