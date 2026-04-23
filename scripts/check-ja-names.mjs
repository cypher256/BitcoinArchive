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
//
// Loaded from the authoritative list in src/i18n/participants.ts
// (properNameTranslationsJa). The file is parsed as text to keep this
// checker runnable under plain Node without TS tooling. Keeping both
// the checker and the runtime page code reading the same source of
// truth avoids drift.
// -------------------------------------------------------------------------
const participantsFile = path.resolve(
  __dirname,
  '../src/i18n/participants.ts',
);
const participantsTxt = readFileSync(participantsFile, 'utf-8');

function loadNameMap() {
  const map = {};
  // Extract the properNameTranslationsJa object body
  const m = participantsTxt.match(
    /properNameTranslationsJa\s*:\s*Record<[^>]+>\s*=\s*\{([\s\S]*?)\};/,
  );
  if (!m) {
    throw new Error(
      'Failed to parse properNameTranslationsJa from participants.ts',
    );
  }
  for (const entry of m[1].matchAll(/'([^']+)'\s*:\s*'([^']+)'/g)) {
    // Skip identity-mapped entries where the canonical JA form is the
    // English string itself (handles, brand names like NewLibertyStandard,
    // Twitter, Theymos). Flagging these would produce false positives.
    if (entry[1] === entry[2]) continue;
    map[entry[1]] = entry[2];
  }
  return map;
}

const NAME_MAP = loadNameMap();

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

  // Multi-line email signature lines where the closing '>' wraps to the
  // next line, e.g., "> 2009年11月8日 午前9:08、Satoshi Nakamoto <satoshin@gmx.com"
  // Pattern: leading '>', a date chunk, then a name followed by <local@
  if (/^>.*\d{4}年.*<[^>\s]+@/.test(trimmed)) return true;

  // "X の書き込み:" — Japanese equivalent of "X wrote:"
  if (/の書き込み:/.test(trimmed)) return true;

  // Japanese article / book titles enclosed in 「」 containing English names
  // (citations, not prose). Matches when the run is primarily English + ASCII
  // punctuation inside the 「」 pair.
  if (/「[^」]*[A-Za-z][^」]*」/.test(trimmed)) {
    // Only skip if the 「」 content is substantially English (>= 60% ASCII)
    const content = trimmed.match(/「([^」]*)」/)?.[1] ?? '';
    if (content.length > 0) {
      const asciiChars = content.match(/[\x20-\x7E]/g)?.length ?? 0;
      if (asciiChars / content.length >= 0.6) return true;
    }
  }

  // Organization names containing a person name, e.g., "Satoshi Nakamoto Institute"
  // These are brand/organization category (stays in English).
  if (/Satoshi Nakamoto Institute/.test(trimmed)) return true;

  // Standalone English name line (email signature footer).
  // Matches a line whose only content is a 2-4 word capitalized English
  // name, optionally preceded by a '>' blockquote marker. Common in
  // quoted email signatures where the name appears alone on its line.
  if (/^>?\s*[A-Z][A-Za-z.]+(?:\s+[A-Z][A-Za-z.]+){1,3}\s*$/.test(trimmed)) return true;

  // Lines with no Japanese characters at all (quoted foreign-language
  // content, e.g., Polish or German marketing pages reproduced verbatim).
  // If the line has no hiragana, katakana, or CJK unified ideographs,
  // treat it as foreign-language quoted content where English names are
  // carried through from the source.
  if (!/[぀-ゟ゠-ヿ一-鿿]/.test(trimmed)) return true;

  // Lines containing a raw URL (http:// or https://) in JA prose are
  // typically citations of external titles (YouTube, articles, etc.)
  // where English names carry through from the cited resource. Markdown
  // links [text](URL) are a different shape and are not matched here.
  if (/(?<!\]\()https?:\/\//.test(trimmed)) return true;

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
