/**
 * check-quotes.mjs — AST-based quote structure validator
 *
 * Parses markdown files with remark and validates:
 * - quote markers match frontmatter quotes[]
 * - markers are followed by reachable blockquotes
 * - parent references are valid and non-circular
 * - EN/JA quote IDs are in sync
 * - no legacy attribution patterns remain
 *
 * Run: npm run check:quotes
 */

import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import { visit } from 'unist-util-visit';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const enDir = path.resolve(__dirname, '../src/data/entries/en');
const jaDir = path.resolve(__dirname, '../src/data/translations/ja');

const QUOTE_MARKER_RE = /^<!--\s*quote:\s*(\w+)\s*-->$/;
const LEGACY_PATTERNS = [
  /\[Quote from:/,
  / wrote:$/m,
  /^Quoting /m,
];

// Real person names that should always have personSlug set.
// If quote.person matches one of these but personSlug is null,
// the JA renderer will fall back to the English name instead of katakana.
const REAL_NAMES_REQUIRING_SLUG = new Set([
  'Satoshi Nakamoto', 'Satoshi', 'satoshi',
  'Hal Finney', 'Hal',
  'Adam Back',
  'Wei Dai',
  'Nick Szabo',
  'Mike Hearn',
  'Martti Malmi', 'sirius-m', 'Sirius', 'mmalmi@cc.hut.fi',
  'Laszlo Hanyecz',
  'Ray Dillinger', 'Ray Dillinger (Bear)',
  'Jeff Garzik', 'jgarzik', 'gavinandresen',
  'Gavin Andresen',
  'Dustin Trammell', 'Dustin D. Trammell',
  'Peter Todd',
  'Craig Wright',
  'James A. Donald', 'James Donald',
  'Liberty Standard', 'NewLibertyStandard',
  'Eugen Leitl',
]);

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function walkDir(dir) {
  if (!existsSync(dir)) return [];
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

function parseFrontmatterManual(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, body: '' };

  const fmText = match[1];
  const body = match[2];

  // Extract quotes[] from YAML manually
  const quotes = [];
  const quotesMatch = fmText.match(/^quotes:\n((?:  - [\s\S]*?)*)(?=\n\S|\n?$)/m);
  if (quotesMatch) {
    const quotesBlock = quotesMatch[1];
    const entries = quotesBlock.split(/\n  - /).filter(Boolean);
    for (const entry of entries) {
      const lines = entry.replace(/^- /, '').split('\n').map(l => l.replace(/^    /, ''));
      const quote = {};
      for (const line of lines) {
        const kv = line.match(/^(\w+):\s*"?([^"]*)"?\s*$/);
        if (kv) {
          quote[kv[1]] = kv[2] === 'null' ? null : kv[2];
        }
      }
      if (quote.id) quotes.push(quote);
    }
  }

  return { frontmatter: { quotes }, body };
}

// ---------------------------------------------------------------------------
// AST Checks
// ---------------------------------------------------------------------------

function checkFile(filePath, locale) {
  const content = readFileSync(filePath, 'utf-8');
  const { frontmatter, body } = parseFrontmatterManual(content);
  const quotes = frontmatter.quotes || [];
  const violations = [];
  const rel = path.relative(process.cwd(), filePath);

  if (quotes.length === 0) {
    // Check for legacy patterns in files without quotes[]
    // Only flag [Quote from:] — "wrote:" in prose is too common for false positives
    if (/\[Quote from:/.test(body)) {
      violations.push({
        file: rel,
        check: 'legacy-pattern',
        level: 'error',
        msg: 'Legacy [Quote from:] attribution found (no quotes[] in frontmatter)',
      });
    }
    return violations;
  }

  // Parse body into AST
  const tree = unified().use(remarkParse).parse(body);

  // Collect all quote marker IDs from AST
  const markerIds = [];
  visit(tree, 'html', (node) => {
    const match = node.value.trim().match(QUOTE_MARKER_RE);
    if (match) markerIds.push(match[1]);
  });

  // Deep search inside blockquotes too
  function collectMarkers(node) {
    if (node.type === 'html') {
      const m = node.value.trim().match(QUOTE_MARKER_RE);
      if (m && !markerIds.includes(m[1])) markerIds.push(m[1]);
    }
    if (node.children) {
      for (const child of node.children) {
        collectMarkers(child);
      }
    }
  }
  collectMarkers(tree);

  // 1. Marker → quotes[] integrity
  for (const mid of markerIds) {
    if (!quotes.find(q => q.id === mid)) {
      violations.push({
        file: rel,
        check: 'marker-no-quote',
        level: 'error',
        msg: `Body marker "${mid}" has no matching entry in frontmatter quotes[]`,
      });
    }
  }

  // 2. quotes[] → marker integrity
  for (const q of quotes) {
    if (!markerIds.includes(q.id)) {
      violations.push({
        file: rel,
        check: 'quote-no-marker',
        level: 'error',
        msg: `Frontmatter quote "${q.id}" has no matching marker in body`,
      });
    }
  }

  // 3. Parent integrity
  const quoteIds = new Set(quotes.map(q => q.id));
  for (const q of quotes) {
    if (q.parent && !quoteIds.has(q.parent)) {
      violations.push({
        file: rel,
        check: 'parent-missing',
        level: 'error',
        msg: `Quote "${q.id}" references parent "${q.parent}" which does not exist`,
      });
    }
  }

  // 4. Parent non-circular
  for (const q of quotes) {
    const seen = new Set([q.id]);
    let current = q;
    while (current?.parent) {
      if (seen.has(current.parent)) {
        violations.push({
          file: rel,
          check: 'parent-circular',
          level: 'error',
          msg: `Circular parent chain detected for quote "${q.id}"`,
        });
        break;
      }
      seen.add(current.parent);
      current = quotes.find(qq => qq.id === current.parent);
    }
  }

  // 4b. personSlug missing for real person names
  // If quote.person matches a known real name but personSlug is missing,
  // JA pages will display raw English instead of katakana.
  for (const q of quotes) {
    if (!q.person) continue;
    if (q.personSlug) continue;
    if (REAL_NAMES_REQUIRING_SLUG.has(q.person)) {
      violations.push({
        file: rel,
        check: 'person-slug-missing',
        level: 'warn',
        msg: `Quote "${q.id}" has person "${q.person}" but no personSlug. JA will not show katakana.`,
      });
    }
  }

  // 5. Blockquote reachability (check that markers have an associated blockquote)
  function hasBlockquoteDescendant(node) {
    if (node.type === 'blockquote') return true;
    if (node.children) {
      for (const child of node.children) {
        if (hasBlockquoteDescendant(child)) return true;
      }
    }
    return false;
  }

  function checkBlockquoteReachable(parent) {
    if (!parent.children) return;
    for (let i = 0; i < parent.children.length; i++) {
      const child = parent.children[i];
      if (child.type === 'html') {
        const m = child.value.trim().match(QUOTE_MARKER_RE);
        if (!m) continue;
        // Look ahead for blockquote (skip speaker, tone-skip, other markers)
        let found = false;
        for (let j = i + 1; j < parent.children.length; j++) {
          const sib = parent.children[j];
          if (sib.type === 'blockquote') { found = true; break; }
          if (sib.type === 'html') {
            const val = sib.value.trim();
            if (/^<!--\s*(speaker:|quote:|tone-skip|\/tone-skip)/.test(val)) continue;
          }
          break; // non-skippable node before blockquote
        }
        if (!found) {
          violations.push({
            file: rel,
            check: 'no-blockquote',
            level: 'error',
            msg: `Quote marker "${m[1]}" has no reachable blockquote`,
          });
        }
      }
      // Recurse into blockquotes to check nested markers
      if (child.type === 'blockquote') {
        checkBlockquoteReachable(child);
      }
    }
  }
  checkBlockquoteReachable(tree);

  // 6. Legacy [Quote from:] in body (even with quotes[])
  // Only check for [Quote from:] — "wrote:" in prose is a false positive
  if (/\[Quote from:/.test(body)) {
    violations.push({
      file: rel,
      check: 'legacy-with-quotes',
      level: 'error',
      msg: 'Legacy [Quote from:] attribution found in body alongside quotes[]',
    });
  }

  return violations;
}

// ---------------------------------------------------------------------------
// EN/JA sync check
// ---------------------------------------------------------------------------

function checkEnJaSync(enFile) {
  const rel = path.relative(enDir, enFile);
  const jaFile = path.join(jaDir, rel);
  const violations = [];

  if (!existsSync(jaFile)) return violations;

  const enContent = readFileSync(enFile, 'utf-8');
  const jaContent = readFileSync(jaFile, 'utf-8');
  const enParsed = parseFrontmatterManual(enContent);
  const jaParsed = parseFrontmatterManual(jaContent);

  const enIds = new Set((enParsed.frontmatter.quotes || []).map(q => q.id));
  const jaIds = new Set((jaParsed.frontmatter.quotes || []).map(q => q.id));

  if (enIds.size === 0 && jaIds.size === 0) return violations;

  for (const id of enIds) {
    if (!jaIds.has(id)) {
      violations.push({
        file: path.relative(process.cwd(), jaFile),
        check: 'en-ja-sync',
        level: 'error',
        msg: `EN has quote "${id}" but JA does not`,
      });
    }
  }
  for (const id of jaIds) {
    if (!enIds.has(id)) {
      violations.push({
        file: path.relative(process.cwd(), jaFile),
        check: 'en-ja-sync',
        level: 'error',
        msg: `JA has quote "${id}" but EN does not`,
      });
    }
  }

  return violations;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const enFiles = walkDir(enDir);
const jaFiles = walkDir(jaDir);

const allViolations = [];

for (const f of enFiles) {
  allViolations.push(...checkFile(f, 'en'));
}
for (const f of jaFiles) {
  allViolations.push(...checkFile(f, 'ja'));
}
for (const f of enFiles) {
  allViolations.push(...checkEnJaSync(f));
}

const errors = allViolations.filter(v => v.level === 'error');
const warnings = allViolations.filter(v => v.level === 'warn');

if (errors.length === 0 && warnings.length === 0) {
  console.log('✓ All quote structures are valid.');
  process.exit(0);
}

if (warnings.length > 0) {
  console.log(`⚠ ${warnings.length} warning(s):\n`);
  for (const w of warnings) {
    console.log(`  [${w.check}] ${w.file}`);
    console.log(`    ${w.msg}\n`);
  }
}

if (errors.length > 0) {
  console.error(`✗ ${errors.length} error(s):\n`);
  for (const e of errors) {
    console.error(`  [${e.check}] ${e.file}`);
    console.error(`    ${e.msg}\n`);
  }
  process.exit(1);
}

process.exit(0);
