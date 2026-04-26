#!/usr/bin/env node
/**
 * check-editorial-markers.mjs
 *
 * Enforces the Editorial Markers conventions documented in STYLE_GUIDE.md
 * (section "Editorial Markers"). Walks every entry's body, masks content
 * that is not editor prose (blockquotes, code blocks, URLs, HTML comments),
 * and flags violations of the canonical forms.
 *
 * Modes:
 *   default            informational; reports violations, exits 0
 *   --strict           exits 1 if any violation found
 *   --report-f-candidates
 *                      writes a separate report listing every
 *                      edit:/編集: occurrence inside forum-post,
 *                      mailing-list, and correspondence entries so a
 *                      human can verify they are original-poster edit
 *                      notes (category F) and not mis-classified
 *                      Archive editor notes
 *
 * Output files:
 *   temp_MMDD_editorial_violations.md   (informational mode)
 *   temp_MMDD_f_candidates.md           (--report-f-candidates mode)
 */
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.resolve(path.dirname(__filename), '..');

const COLLECTIONS = [
  { lang: 'en', base: path.join(ROOT, 'src/data/entries/en') },
  { lang: 'ja', base: path.join(ROOT, 'src/data/translations/ja') },
];

const STRICT = process.argv.includes('--strict');
const REPORT_F = process.argv.includes('--report-f-candidates');

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (st.isFile() && name.endsWith('.md')) out.push(full);
  }
  return out;
}

function splitFm(content) {
  if (!content.startsWith('---\n')) return { fm: '', body: content };
  const end = content.indexOf('\n---\n', 4);
  if (end < 0) return { fm: '', body: content };
  return { fm: content.slice(4, end), body: content.slice(end + 5) };
}

function getField(fm, key) {
  const re = new RegExp(`^${key}\\s*:\\s*"((?:[^"\\\\]|\\\\.)*)"\\s*$`, 'm');
  const m = fm.match(re);
  return m ? m[1] : null;
}

/**
 * Returns body with non-prose regions blanked out (preserving line numbers).
 * Masked regions:
 *   - fenced code blocks (``` ... ```)
 *   - inline code (`...`)
 *   - blockquote lines (lines starting with >)
 *   - HTML comments (<!-- ... -->)
 *   - markdown link URL targets ([text](url))
 *   - bare URLs http(s)://...
 */
function maskNonProse(body) {
  let out = body
    .replace(/```[\s\S]*?```/g, (m) => m.replace(/[^\n]/g, ' '))
    .replace(/`[^`\n]*`/g, (m) => ' '.repeat(m.length))
    .replace(/<!--[\s\S]*?-->/g, (m) => m.replace(/[^\n]/g, ' '))
    .replace(/\]\(([^)]+)\)/g, (m) => ' '.repeat(m.length))
    .replace(/https?:\/\/\S+/g, (m) => ' '.repeat(m.length));
  out = out.split('\n').map((l) => (l.startsWith('>') ? ' '.repeat(l.length) : l)).join('\n');
  return out;
}

const F_TYPES = new Set(['forum-post', 'mailing-list', 'correspondence']);

const CANONICAL_LABELS = {
  en: ['Editor:', 'Context:'],
  ja: ['編者注：', '補足：'],
};

const violations = [];   // { file, lang, line, lineNo, kind, message }
const fCandidates = [];  // { file, lang, line, lineNo, content }

function addV(file, lang, lineNo, line, kind, message) {
  violations.push({ file: path.relative(ROOT, file), lang, lineNo, line: line.trim().slice(0, 240), kind, message });
}

for (const { lang, base } of COLLECTIONS) {
  const files = walk(base);
  for (const file of files) {
    const content = readFileSync(file, 'utf-8');
    const { fm, body } = splitFm(content);
    const type = getField(fm, 'type') || '';
    const masked = maskNonProse(body);
    const lines = masked.split('\n');
    const rawLines = body.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const raw = rawLines[i];
      const lineNo = i + 1;
      if (!line.trim()) continue;

      // Rule 4: Unlabeled *[...]*
      // *[ inside content prefix is checked. Allow only Editor:/Context:/編者注：/補足：
      // Also intentionally allow F-form lines: this script targets editor markers,
      // not original-poster F notes.
      const m = line.match(/^\s*\*\[(.*)\]\*\s*$/);
      if (m) {
        const inner = m[1];
        const labels = CANONICAL_LABELS[lang];
        const hasCanonical = labels.some((l) => inner.startsWith(l + ' ') || inner.startsWith(l));
        // Detect bracketed Source/出典 (rule 9)
        const isBracketedSource = lang === 'en'
          ? /^Source:/.test(inner)
          : /^出典[:：]/.test(inner);
        if (isBracketedSource) {
          addV(file, lang, lineNo, raw, 'bracketed-source',
            `Bracketed source attribution forbidden; use SourceCitation component (B). See STYLE_GUIDE Editorial Markers rule 9.`);
          continue;
        }
        // Detect bracketed Note: as a deprecated form of C
        const isBracketedNote = lang === 'en'
          ? /^Note:/.test(inner)
          : /^(注[:：]|編注[:：])/.test(inner);
        if (isBracketedNote) {
          addV(file, lang, lineNo, raw, 'bracketed-note',
            `*[Note: ...]* / *[注：...]* is deprecated; use *[Editor: ...]* / *[編者注：...]* (C).`);
          continue;
        }
        if (!hasCanonical) {
          addV(file, lang, lineNo, raw, 'unlabeled-italic-bracket',
            `Unlabeled *[...]* forbidden; add Editor:/Context: (en) or 編者注：/補足： (ja) prefix. See rule 4.`);
        }
        continue;
      }

      // Rule 3 & 6 & 7 & 8: Source/出典 inline forms forbidden as canonical
      // (the entry should use SourceCitation; legacy *Source:* / *出典:* lines
      // will be migrated in Phase 4-B)
      if (lang === 'en') {
        if (/^\s*\*Source:\s/.test(line)) {
          addV(file, lang, lineNo, raw, 'inline-source-italic',
            `Inline *Source: ...* forbidden; migrate to secondarySources[].note (B). Phase 4-B.`);
        }
      } else {
        if (/^\s*\*出典[:：]\s?/.test(line)) {
          addV(file, lang, lineNo, raw, 'inline-source-italic',
            `Inline *出典：...* forbidden; migrate to secondarySources[].note (B). Phase 4-B.`);
        }
      }

      // Rule 6: Bold-label forms
      if (lang === 'en') {
        if (/\*\*(Source|Note|Editor|Author):\*\*/.test(line)) {
          addV(file, lang, lineNo, raw, 'bold-label',
            `Bold-label forms forbidden (rule 6).`);
        }
      } else {
        if (/\*\*(出典|注|編注|編者注|補足|編者)[:：]\*\*/.test(line)) {
          addV(file, lang, lineNo, raw, 'bold-label',
            `Bold-label forms forbidden (rule 6).`);
        }
      }

      // Rule 7: Plain bracket [Source: / [Note:
      if (lang === 'en') {
        if (/^\s*\[(Source|Note):\s/.test(line)) {
          addV(file, lang, lineNo, raw, 'plain-bracket',
            `Plain-bracket forms forbidden (rule 7).`);
        }
      } else {
        if (/^\s*\[(出典|注|編注|編者注|補足)[:：]/.test(line)) {
          addV(file, lang, lineNo, raw, 'plain-bracket',
            `Plain-bracket forms forbidden (rule 7).`);
        }
      }

      // Rule 8: Dash trailer with label
      if (lang === 'en') {
        if (/^\s*[—–-]{1,2}\s*(Source|Note):\s/.test(line)) {
          addV(file, lang, lineNo, raw, 'dash-trailer',
            `Dash-trailer label forbidden (rule 8).`);
        }
      } else {
        if (/^\s*[—–-]{1,2}\s*(出典|注|編注|編者注)[:：]/.test(line)) {
          addV(file, lang, lineNo, raw, 'dash-trailer',
            `Dash-trailer label forbidden (rule 8).`);
        }
      }

      // Locale colon mixing: a JA file using EN-style colon directly after a JA marker, or vice versa
      if (lang === 'ja') {
        // JA file using English Editor: / Context: / Source: / Note: at line start as marker
        if (/^\s*\*?\[(Editor|Context|Source|Note):/.test(line)) {
          addV(file, lang, lineNo, raw, 'locale-mix',
            `JA file using EN marker label; use JA canonical (編者注：/補足：).`);
        }
      } else {
        // EN file using JA-style markers
        if (/^\s*\*?\[(編者注|補足|出典|注|編注)[:：]/.test(line)) {
          addV(file, lang, lineNo, raw, 'locale-mix',
            `EN file using JA marker label; use EN canonical (Editor:/Context:).`);
        }
      }
    }

    // F candidates: forum-post / mailing-list / correspondence with edit: / 編集:
    // Use raw body (not masked) so we catch occurrences inside blockquotes too —
    // poster edit notes commonly appear inside the quoted source body.
    if (REPORT_F && F_TYPES.has(type)) {
      const editRe = lang === 'en'
        ? /(\bedit:|\[edit\])/i
        : /(編集[:：]|\[編集\])/;
      for (let i = 0; i < rawLines.length; i++) {
        const line = rawLines[i];
        if (!line.trim()) continue;
        if (editRe.test(line)) {
          fCandidates.push({
            file: path.relative(ROOT, file),
            lang,
            type,
            lineNo: i + 1,
            content: line.trim().slice(0, 240),
          });
        }
      }
    }
  }
}

// Output
const today = new Date();
const mmdd = String(today.getMonth() + 1).padStart(2, '0') + String(today.getDate()).padStart(2, '0');

function tally(arr, key) {
  const m = new Map();
  for (const x of arr) m.set(x[key], (m.get(x[key]) || 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1]);
}

if (REPORT_F) {
  let r = `# F-candidate report (original-poster edit notes)\n\n`;
  r += `Generated: ${today.toISOString()}\n\n`;
  r += `Lists every \`edit:\` / \`Edit:\` / \`編集:\` / \`[編集]\` occurrence inside\n`;
  r += `\`forum-post\`, \`mailing-list\`, and \`correspondence\` entries.\n\n`;
  r += `These are auto-classified as F (preserved) by the editorial-markers audit.\n`;
  r += `**Verify each one is genuinely an original-poster edit note before flipping**\n`;
  r += `\`--strict\` on. Any line that turns out to be an Archive editor note must\n`;
  r += `be moved to category C (\`*[Editor: ...]*\` / \`*[編者注：...]*\`).\n\n`;
  r += `**Total: ${fCandidates.length} occurrences across ${new Set(fCandidates.map((x) => x.file)).size} files**\n\n`;

  r += `## By type\n\n| type | EN | JA |\n|---|---|---|\n`;
  const byTypeLang = {};
  for (const x of fCandidates) {
    const k = `${x.type}::${x.lang}`;
    byTypeLang[k] = (byTypeLang[k] || 0) + 1;
  }
  for (const t of ['forum-post', 'mailing-list', 'correspondence']) {
    r += `| ${t} | ${byTypeLang[`${t}::en`] || 0} | ${byTypeLang[`${t}::ja`] || 0} |\n`;
  }

  r += `\n## All occurrences\n\n`;
  for (const x of fCandidates) {
    r += `- \`${x.file}:${x.lineNo}\` [${x.lang}, ${x.type}]\n  > ${x.content}\n`;
  }

  writeFileSync(path.join(ROOT, `temp_${mmdd}_f_candidates.md`), r, 'utf-8');
  console.log(`Written: temp_${mmdd}_f_candidates.md`);
  console.log(`F-candidate occurrences: ${fCandidates.length}`);
} else {
  let r = `# Editorial markers audit\n\n`;
  r += `Generated: ${today.toISOString()}\n\n`;
  r += `Read-only audit. See STYLE_GUIDE.md "Editorial Markers" section.\n\n`;
  r += `**Total violations: ${violations.length}**\n\n`;

  if (violations.length > 0) {
    r += `## By kind\n\n| kind | EN | JA |\n|---|---|---|\n`;
    const kinds = [...new Set(violations.map((v) => v.kind))].sort();
    for (const k of kinds) {
      const en = violations.filter((v) => v.kind === k && v.lang === 'en').length;
      const ja = violations.filter((v) => v.kind === k && v.lang === 'ja').length;
      r += `| ${k} | ${en} | ${ja} |\n`;
    }
    r += `\n## Occurrences\n\n`;
    for (const v of violations) {
      r += `- \`${v.file}:${v.lineNo}\` [${v.lang}] **${v.kind}**\n  ${v.message}\n  > ${v.line}\n\n`;
    }
  } else {
    r += `No violations.\n`;
  }

  writeFileSync(path.join(ROOT, `temp_${mmdd}_editorial_violations.md`), r, 'utf-8');
  console.log(`Written: temp_${mmdd}_editorial_violations.md`);
  console.log(`Editorial-marker violations: ${violations.length}`);
  console.log(`  by kind:`);
  for (const [k, n] of tally(violations, 'kind')) console.log(`    ${k}: ${n}`);
}

if (STRICT && violations.length > 0) {
  console.error(`\nFAIL: --strict and ${violations.length} violations found.`);
  process.exit(1);
}
process.exit(0);
