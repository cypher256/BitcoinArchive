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
import { findJaSectionLineRanges, lineInJaSection } from './lib/astro-ja-section.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targets = [
  path.resolve(__dirname, '../src/data/translations/ja'),
  path.resolve(__dirname, '../src/components'),
];

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
// Katakana drift detection: canonical JA forms vs malformed variants
//
// Loads all canonical katakana display names from both
//   - participantDisplayNamesJaBySlug
//   - properNameTranslationsJa
// and generates malformed variants by (a) removing all middle dots
// and (b) splitting any token at every interior position with an extra
// middle dot. Each variant is mapped to its canonical form so the
// detector can suggest the fix.
//
// Past incident (2026-06-02): "Paul Le Roux" was rendered as
// 「ポール・ル・ルー」 (two middle dots) in several JA files while the
// canonical entry in participants.ts is 「ポール・ルルー」 (one middle
// dot). The existing English-name check missed it because both forms
// are katakana; nothing flagged the drift until a human reader did.
// Similarly 「サトシナカモト」 (no middle dot) snuck into 6 email
// translations against the canonical 「サトシ・ナカモト」.
//
// Variants identical to another canonical entry (e.g. 「フィニー」 may
// occur as both a Hal Finney variant and a Fran Finney variant) are
// excluded so a real name is never flagged as a misspelling of another
// real name. The body-scan also strips every canonical name from the
// line before searching for variants, so a line that already contains
// the correct canonical form will not falsely fire on its substring.
// -------------------------------------------------------------------------
function loadAllCanonicalJa() {
  const set = new Set();
  const blocks = [
    /participantDisplayNamesJaBySlug\s*:\s*Record<[^>]+>\s*=\s*\{([\s\S]*?)\n\};/,
    /properNameTranslationsJa\s*:\s*Record<[^>]+>\s*=\s*\{([\s\S]*?)\n\};/,
  ];
  for (const re of blocks) {
    const m = participantsTxt.match(re);
    if (!m) continue;
    for (const entry of m[1].matchAll(/'([^']+)'\s*:\s*'([^']+)'/g)) {
      if (entry[1] === entry[2]) continue;
      // Only keep entries whose display form is built from katakana
      // and middle dots. Skips kanji-name slugs (e.g., 金子勇) and
      // brand-style entries (e.g., 「中国人民銀行」, COPA).
      if (/^[ァ-ヿ・ー]+$/.test(entry[2])) set.add(entry[2]);
    }
  }
  return set;
}

const ALL_CANONICAL_JA = loadAllCanonicalJa();

function generateMidDotVariants(canonical) {
  const variants = new Map();
  for (const c of canonical) {
    // (a) Remove all middle dots
    const noDot = c.replace(/・/g, '');
    if (noDot.length >= 2 && noDot !== c && !canonical.has(noDot)) {
      if (!variants.has(noDot)) variants.set(noDot, c);
    }
    // (b) Insert one extra middle dot at every interior position of
    //     each existing token
    const tokens = c.split('・');
    for (let ti = 0; ti < tokens.length; ti++) {
      const t = tokens[ti];
      if (t.length < 2) continue;
      for (let pos = 1; pos < t.length; pos++) {
        const left = t.slice(0, pos);
        const right = t.slice(pos);
        const newTokens = [...tokens.slice(0, ti), left, right, ...tokens.slice(ti + 1)];
        const variant = newTokens.join('・');
        if (variant !== c && !canonical.has(variant)) {
          if (!variants.has(variant)) variants.set(variant, c);
        }
      }
    }
  }
  return variants;
}

const MID_DOT_VARIANTS = generateMidDotVariants(ALL_CANONICAL_JA);

// -------------------------------------------------------------------------
// Known katakana misspellings that are NOT middle-dot variants.
//
// generateMidDotVariants only permutes middle dots (・), so a phonetic
// drift — a dropped 促音「ッ」, a long-vowel slip, etc. — is never
// generated and slips through until a human catches it.
//
// Past incident (2026-06-19): 「サスマン」 was used for Len Sassaman in 6
// places across 4 JA files while the canonical entry in participants.ts is
// 「サッサマン」 (the 促音「ッ」 was dropped). Both forms are katakana and
// neither is a middle-dot variant of the other, so nothing flagged it.
//
// Curate such variants here as [variant, canonical]. Each entry is folded
// into MID_DOT_VARIANTS and detected by the same body scan (which strips
// every canonical name from the line first, so a correct 「サッサマン」 on
// the line never false-fires on its 「サマン」 tail).
// -------------------------------------------------------------------------
const KNOWN_MISSPELLINGS = [
  ['サスマン', 'サッサマン'], // Len Sassaman — dropped 促音「ッ」
];
for (const [variant, canonical] of KNOWN_MISSPELLINGS) {
  if (ALL_CANONICAL_JA.has(variant)) continue; // never flag a real name
  if (!MID_DOT_VARIANTS.has(variant)) MID_DOT_VARIANTS.set(variant, canonical);
}

// -------------------------------------------------------------------------
// First-name detection map
//
// Catches the case where JA prose uses a bare first name (e.g., "Gavin が…")
// to refer to a mapped person whose full name (e.g., "Gavin Andresen") is
// the canonical NAME_MAP entry. NAME_MAP only has full-string keys, so
// `line.includes('Gavin Andresen')` does not fire when the JA text shortens
// to just "Gavin" — that gap reaches readers as English-in-JA-prose.
//
// Derivation rules:
//   - For each NAME_MAP entry whose key has ≥ 2 ASCII tokens AND the first
//     token is a Capitalised English first name, extract that token and
//     map it to the first katakana segment of the value (split on '・').
//   - Skip honorifics (Dr / Sir / Mr / Mrs / Ms) that are not first names.
//   - If two mapped people share a first name, the first one encountered
//     wins for the katakana value (the violation still fires on the bare
//     first name; resolution to the right person is left to the fixer).
// -------------------------------------------------------------------------
const FIRST_NAME_MAP = {};
for (const [eng, kata] of Object.entries(NAME_MAP)) {
  const parts = eng.split(/\s+/);
  if (parts.length < 2) continue;
  if (!/^[A-Z][a-z]+$/.test(parts[0])) continue;
  if (['Dr', 'Sir', 'Mr', 'Mrs', 'Ms'].includes(parts[0])) continue;
  const fnKata = kata.split('・')[0]; // first katakana segment
  if (!FIRST_NAME_MAP[parts[0]]) FIRST_NAME_MAP[parts[0]] = fnKata;
}

// Pre-build the bare-first-name regex once.
const FIRST_NAME_RE = new RegExp(
  '\\b(' + Object.keys(FIRST_NAME_MAP).map((s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b',
  'g',
);

const JA_CHAR_RE = /[぀-ゟ゠-ヿ一-鿿]/g;
const ASCII_LETTER_RE = /[A-Za-z]/g;

// -------------------------------------------------------------------------
// First-name exception patterns — keep the bare first name in English.
//
// These match real-world JA writing conventions documented in earlier
// audits; each pattern has at least one observed example in the corpus.
//
//   1. 「FN ...」 with majority-English content (UI label, English title)
//   2. 『FN ...』 with majority-English content (cited paper / book title)
//   3. Composite / brand: "Papa FN", "FN-Ray", "FN-Jr", "FN <Last>",
//      "FN <Initial>. <Last>" (e.g., John J. Ray III)
//   4. Etymology / handle wordplay: 合成語 / 造語 / 逆綴り / "(retep)"
//   5. Implementation-name list: "(Satoshi、BitcoinJ、bitcoin-js)"
//   6. Pull-quote line (starts with '>') with ≥ 2× English-to-JA letter ratio
//   7. Multi-line UI label: prev line has unclosed 「, current line closes
//      with 」 and FN is before that 」
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// Full-name exemption — symmetric to isFirstNameExempt cases 1 and 2.
// Skip a full-name hit (e.g., "Satoshi Nakamoto") when the name appears
// inside an English-majority cited-work title 「...」 or 『...』. The title
// is the work's literal English name; translating the person component
// alone would corrupt the title.
// -------------------------------------------------------------------------
function isFullNameExempt(line, fullName) {
  for (const m of line.matchAll(/「([^」]*)」/g)) {
    if (!m[1].includes(fullName)) continue;
    const ja = (m[1].match(JA_CHAR_RE) || []).length;
    const en = (m[1].match(ASCII_LETTER_RE) || []).length;
    if (en > 0 && en >= ja) return true;
  }
  for (const m of line.matchAll(/『([^』]*)』/g)) {
    if (!m[1].includes(fullName)) continue;
    const ja = (m[1].match(JA_CHAR_RE) || []).length;
    const en = (m[1].match(ASCII_LETTER_RE) || []).length;
    if (en > 0 && en >= ja) return true;
  }
  return false;
}

function isFirstNameExempt(line, prevLine, fn) {
  const fnEsc = fn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // 1. 「...」 English-majority
  for (const m of line.matchAll(/「([^」]*)」/g)) {
    if (!m[1].includes(fn)) continue;
    const ja = (m[1].match(JA_CHAR_RE) || []).length;
    const en = (m[1].match(ASCII_LETTER_RE) || []).length;
    if (en > 0 && en >= ja) return true;
  }
  // 2. 『...』 English-majority
  for (const m of line.matchAll(/『([^』]*)』/g)) {
    if (!m[1].includes(fn)) continue;
    const ja = (m[1].match(JA_CHAR_RE) || []).length;
    const en = (m[1].match(ASCII_LETTER_RE) || []).length;
    if (en > 0 && en >= ja) return true;
  }
  // 3. Composite / brand
  if (new RegExp(fnEsc + '[\\s.][A-Z]\\.?\\s?[A-Z]?[a-z]*').test(line)) return true;
  if (new RegExp('Papa\\s' + fnEsc).test(line)) return true;
  if (new RegExp(fnEsc + '-(Ray|Jr)\\b').test(line)) return true;
  if (new RegExp('-' + fnEsc + '\\b').test(line)) return true;
  // 4. Etymology / wordplay
  if (/合成語|造語|逆綴り|逆\)/.test(line)) return true;
  // 5. Implementation-name list "(FN、Other、…)"
  if (new RegExp('\\(\\s*' + fnEsc + '\\s*[、,]\\s*[A-Z]').test(line)) return true;
  // 6. Pull-quote line with ≥ 2× ASCII-letter dominance
  if (line.trimStart().startsWith('>')) {
    const ja = (line.match(JA_CHAR_RE) || []).length;
    const en = (line.match(ASCII_LETTER_RE) || []).length;
    if (en >= ja * 2) return true;
  }
  // 7a. Multi-line UI label, closing line: prev opened 「, current closes 」
  if (prevLine && prevLine.includes('「') && !prevLine.includes('」') && line.includes('」')) {
    const beforeClose = line.split('」')[0];
    if (beforeClose.includes(fn)) return true;
  }
  // 7b. Multi-line UI label, opening line: current line has 「 with no
  // matching 」 (the 」 lands on a following line). FN must appear after
  // the last unmatched 「 on the line.
  {
    const opens = (line.match(/「/g) || []).length;
    const closes = (line.match(/」/g) || []).length;
    if (opens > closes) {
      const lastOpen = line.lastIndexOf('「');
      const fnIdx = line.indexOf(fn, lastOpen);
      if (fnIdx > lastOpen) return true;
    }
  }
  return false;
}

// -------------------------------------------------------------------------
// Lines / patterns to skip (not body text)
// -------------------------------------------------------------------------
function isMetadataOrExcluded(line, inFrontmatter, inCodeBlock, inJaSection = false) {
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
  // Exception: inside an .astro `labels.ja: {…}` block, an all-ASCII line
  // like `block1: 'Block 1'` is a reader-facing JA value — keep it in
  // scope so person-name violations there are not silently skipped.
  if (!inJaSection && !/[぀-ゟ゠-ヿ一-鿿]/.test(trimmed)) return true;

  // Lines containing a raw URL (http:// or https://) in JA prose are
  // typically citations of external titles (YouTube, articles, etc.)
  // where English names carry through from the cited resource. Markdown
  // links [text](URL) are a different shape and are not matched here.
  if (/(?<!\]\()https?:\/\//.test(trimmed)) return true;

  // i18n label-map definition lines in .astro components, e.g.
  //   'Nick Szabo': 'ニック・サボ',
  // The English side is an object key (identifier mapping to a JA display
  // value), not body prose. The key is the slug-equivalent and stays in
  // English by design.
  if (/^\s*['"][^'"]*[A-Za-z][^'"]*['"]\s*:\s*['"][^'"]*[぀-ゟ゠-ヿ一-鿿]/.test(trimmed)) return true;

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
    } else if (full.endsWith('.md') || full.endsWith('.astro')) {
      results.push(full);
    }
  }
  return results;
}

// -------------------------------------------------------------------------
// Main check
// -------------------------------------------------------------------------
const files = targets.flatMap((t) => walkDir(t));
const violations = [];

for (const file of files) {
  const isAstro = file.endsWith('.astro');
  let content = readFileSync(file, 'utf-8');
  const jaRanges = isAstro ? findJaSectionLineRanges(content) : [];
  // For .astro: strip JS line and block comments. Frontmatter logic below
  // is .md-specific — in .astro the top `---` block is TS code containing
  // the JA labels we want to scan.
  if (isAstro) {
    content = content.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '));
    content = content.replace(/\/\/[^\n]*/g, (m) => ' '.repeat(m.length));
  }
  const lines = content.split('\n');
  let inFrontmatter = false;
  let frontmatterCount = 0;
  let inCodeBlock = false;
  let prevLine = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Track frontmatter (.md only — .astro `---` is TS code, not YAML)
    if (!isAstro && line.trim() === '---') {
      frontmatterCount++;
      inFrontmatter = frontmatterCount < 2;
      prevLine = line;
      continue;
    }

    // Track code blocks
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      prevLine = line;
      continue;
    }

    // Check title and description in frontmatter (.md only)
    if (!isAstro && frontmatterCount === 1) {
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
      prevLine = line;
      continue;
    }

    // Skip non-body lines
    const inJaSection = isAstro && lineInJaSection(i + 1, jaRanges);
    if (isMetadataOrExcluded(line, inFrontmatter, inCodeBlock, inJaSection)) {
      prevLine = line;
      continue;
    }

    // Check body text — full-name match (existing logic)
    for (const [eng, kata] of Object.entries(NAME_MAP)) {
      if (line.includes(eng)) {
        if (isFullNameExempt(line, eng)) continue;
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

    // Check body text — katakana drift (mid-dot variants).
    // Strip every canonical name from the line first, so that a line
    // containing the correct 「ポール・ルルー」 does not falsely fire on
    // a variant that is a substring of some other canonical (e.g.
    // 「フィニー」 vs 「ハル・フィニー」 / 「フラン・フィニー」).
    {
      let strippedJa = line;
      for (const c of ALL_CANONICAL_JA) {
        if (strippedJa.includes(c)) strippedJa = strippedJa.split(c).join('');
      }
      const seenVariantsOnLine = new Set();
      for (const [variant, canonical] of MID_DOT_VARIANTS) {
        if (seenVariantsOnLine.has(variant)) continue;
        if (strippedJa.includes(variant)) {
          seenVariantsOnLine.add(variant);
          violations.push({
            file: path.relative(process.cwd(), file),
            line: i + 1,
            name: variant,
            katakana: canonical,
            context: line.trim().substring(0, 100),
            type: 'katakana-drift',
          });
        }
      }
    }

    // Check body text — bare first-name fallback. Strip mapped full names
    // first so "James A. Donald" does not double-count as a "James" hit.
    let stripped = line;
    for (const eng of Object.keys(NAME_MAP)) {
      if (stripped.includes(eng)) stripped = stripped.split(eng).join('');
    }
    // Must contain at least one JA character on the *original* line — pure
    // ASCII lines are skipped by `isMetadataOrExcluded` above, but defend
    // here in case that changes.
    if (!JA_CHAR_RE.test(line)) {
      JA_CHAR_RE.lastIndex = 0;
      prevLine = line;
      continue;
    }
    JA_CHAR_RE.lastIndex = 0;
    FIRST_NAME_RE.lastIndex = 0;
    let m;
    const seenOnThisLine = new Set();
    while ((m = FIRST_NAME_RE.exec(stripped)) !== null) {
      const fn = m[1];
      if (seenOnThisLine.has(fn)) continue;
      seenOnThisLine.add(fn);
      if (isFirstNameExempt(line, prevLine, fn)) continue;
      violations.push({
        file: path.relative(process.cwd(), file),
        line: i + 1,
        name: fn,
        katakana: FIRST_NAME_MAP[fn],
        context: line.trim().substring(0, 100),
        type: 'first-name',
      });
    }
    prevLine = line;
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
