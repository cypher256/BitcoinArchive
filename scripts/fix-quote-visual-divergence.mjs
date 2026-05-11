#!/usr/bin/env node
/**
 * fix-quote-visual-divergence.mjs
 *
 * One-shot fixer for the `[visual-only divergence]` category surfaced
 * by check-quote-translation-consistency. For each EN passage where
 * width-folded JA renderings agree (same wording) but the surface
 * (non-width-folded) JA renderings disagree (e.g. body has
 * `トランザクション b412a0` per § I half-width-space convention, `>`
 * quotes carry `トランザクションb412a0`), the body's surface form is
 * canonical and every occurrence in the group whose raw paragraph
 * does not yet match that canon is rewritten — quote occurrences AND
 * the body source itself, since the body is often hand-wrapped at a
 * fixed column and the surface canon collapses that wrap to a single
 * line. Fixing only the quotes would leave the body carrying JA-JA
 * spurious whitespace, and the audit would re-flag the group from
 * the opposite direction.
 *
 * Rationale: § 4 of STYLE_GUIDE_JA obliges cross-entry visual
 * consistency; § I exempts `>` lines from check-ja-spacing so the
 * quote side never accreted the spaces the body side carries.
 *
 * Scope contract (intentionally narrow):
 *   - Only touches passages where the JA wording (width-folded form)
 *     is already unanimous across entries. Wording divergence is
 *     left for manual triage — see the `[divergent translation]`
 *     category of the audit.
 *   - Requires at least one body occurrence in the group to pick a
 *     canonical surface form, AND requires the body side itself to
 *     be unanimous (single `jaParaLex` across all body occurrences).
 *     Quote-only groups and body-disagreement groups are both skipped
 *     and reported as needing manual judgement.
 *   - Rewrites each non-conforming occurrence by string-replacing the
 *     entire raw paragraph within the JA translation file. For quote
 *     occurrences the contiguous `>`-line run is replaced with one
 *     `> ${canon}` line; for body occurrences the contiguous content-
 *     line run is replaced with one canon line. Surrounding HTML
 *     marker lines (`<!-- speaker: -->`, `<!-- quote: q1 -->`,
 *     `<!-- tone-skip -->`, etc.) are preserved untouched. If the raw
 *     paragraph is not unique in the file, the occurrence is skipped
 *     (avoids accidental cross-paragraph corruption).
 *   - No-op on EN files. Only files under `src/data/translations/ja/`
 *     are modified.
 *
 * Run:
 *   `node scripts/fix-quote-visual-divergence.mjs`           # dry-run
 *   `node scripts/fix-quote-visual-divergence.mjs --write`   # actually edit
 *
 * Default is dry-run: the report is identical to a real run but no
 * files are touched. Review the dry-run output before passing
 * --write. No npm alias is registered — invoked manually, not part
 * of `npm run check`.
 *
 * Memory-rule context: a long-standing project rule discourages bulk
 * data-fix scripts after several prior failures. This script ships as
 * a one-time authorised exception scoped to visual-only divergence,
 * a class with low semantic risk (no wording change, only orthographic
 * boundary spacing). Post-run verification is the responsibility of
 * the caller — re-run the audit, confirm visual-only count drops to 0,
 * and sample the resulting git diff.
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const EN_ROOT = path.join(REPO_ROOT, 'src/data/entries/en');
const JA_ROOT = path.join(REPO_ROOT, 'src/data/translations/ja');

const MIN_PHRASE_LENGTH = 40;
const WRITE = process.argv.includes('--write');

// ---------- Paragraph scan plumbing (mirrors check-quote-translation-consistency.mjs) ----------

function walkMarkdown(root, out = []) {
  if (!existsSync(root)) return out;
  for (const entry of readdirSync(root)) {
    const full = path.join(root, entry);
    const st = statSync(full);
    if (st.isDirectory()) walkMarkdown(full, out);
    else if (entry.endsWith('.md')) out.push(full);
  }
  return out;
}

function stripFrontmatter(text) {
  const m = text.match(/^---\n[\s\S]*?\n---\n?/);
  if (!m) return text;
  return text.slice(m[0].length);
}

function splitParagraphs(text) {
  return text.split(/\n\s*\n+/).map((p) => p.trim()).filter(Boolean);
}

function normaliseParagraph(para) {
  return para
    .split('\n')
    .map((line) => line.replace(/^(>+\s*)+/, ''))
    .join(' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/`[^`\n]*`/g, ' ')
    .replace(/(\S)\s*([*_])\s*(\S)/g, '$1$2$3')
    .replace(/\s+/g, ' ')
    .trim();
}

function normaliseJaWidth(s) {
  return s
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(
      /(\d+)\s+(万|億|兆|円|台|個|つ|本|匹|枚|回|度|年|月|日|時|分|秒|歳|名|人|件|箇所|か所|か月|ヶ月|ヵ月|セント|ドル|バイト)/g,
      '$1$2',
    )
    .replace(/\s+([、。「」『』（）：；])/g, '$1')
    .replace(/([、。「」『』（）：；])\s+/g, '$1')
    .replace(/([ぁ-んァ-ヶ一-龯々ー])\s+([A-Za-z0-9])/g, '$1$2')
    .replace(/([A-Za-z0-9])\s+([ぁ-んァ-ヶ一-龯々ー])/g, '$1$2')
    .replace(/([ぁ-んァ-ヶ一-龯々ー])\s+([ぁ-んァ-ヶ一-龯々ー])/g, '$1$2');
}

function isMarkerOnly(normalised) {
  return /^(<!--[^>]*-->\s*)+$/.test(normalised);
}

function isHeading(normalised) {
  return /^#{1,6}\s+/.test(normalised);
}

function isCodeBlock(rawPara) {
  const first = rawPara.split('\n')[0].trimStart();
  return first.startsWith('```') || first.startsWith('~~~');
}

function isBlockquoteParagraph(rawPara) {
  return rawPara.split('\n').some((line) => line.trimStart().startsWith('>'));
}

function passesLengthEnvelope(enNorm, jaNorm) {
  if (!jaNorm) return false;
  if (enNorm.length < 20 || jaNorm.length < 8) return false;
  const ratio = jaNorm.length / enNorm.length;
  return ratio >= 0.2 && ratio <= 2.5;
}

// ---------- Scan ----------

/**
 * EN normalised paragraph → list of occurrences.
 * Each occurrence: {
 *   enPath, jaPath, paraIdx, jaRawPara, jaParaWidth, jaParaLex, isQuote
 * }
 * jaRawPara is the verbatim paragraph text from the JA file (after the
 * `splitParagraphs` trim) — needed for the file-level string replace
 * that does the actual rewrite.
 */
const enParaMap = new Map();

for (const enPath of walkMarkdown(EN_ROOT)) {
  const rel = path.relative(EN_ROOT, enPath);
  const jaPath = path.join(JA_ROOT, rel);
  if (!existsSync(jaPath)) continue;

  const enBody = stripFrontmatter(readFileSync(enPath, 'utf-8'));
  const jaBody = stripFrontmatter(readFileSync(jaPath, 'utf-8'));
  const enParas = splitParagraphs(enBody);
  const jaParas = splitParagraphs(jaBody);

  const len = Math.min(enParas.length, jaParas.length);
  for (let i = 0; i < len; i++) {
    const enRaw = enParas[i];
    const jaRaw = jaParas[i];

    if (isCodeBlock(enRaw) || isCodeBlock(jaRaw)) continue;

    const enNorm = normaliseParagraph(enRaw);
    if (enNorm.length < MIN_PHRASE_LENGTH) continue;
    if (!/[a-zA-Z]/.test(enNorm)) continue;
    if (isMarkerOnly(enNorm)) continue;
    if (isHeading(enNorm)) continue;

    const jaLex = normaliseParagraph(jaRaw);
    const jaWidth = normaliseJaWidth(jaLex);
    if (!passesLengthEnvelope(enNorm, jaWidth)) continue;

    if (!enParaMap.has(enNorm)) enParaMap.set(enNorm, []);
    enParaMap.get(enNorm).push({
      enPath,
      jaPath,
      paraIdx: i,
      jaRawPara: jaRaw,
      jaParaWidth: jaWidth,
      jaParaLex: jaLex,
      isQuote: isBlockquoteParagraph(enRaw),
    });
  }
}

// ---------- Detect visual-only divergence groups ----------

const fixGroups = [];
const skippedQuoteOnly = [];
const skippedMultiBody = [];

for (const [enPhrase, occurrences] of enParaMap.entries()) {
  if (occurrences.length < 2) continue;
  if (!occurrences.some((occ) => occ.isQuote)) continue;

  const widthVariants = new Set(occurrences.map((o) => o.jaParaWidth));
  if (widthVariants.size > 1) continue; // wording divergence — out of scope

  const lexVariants = new Set(occurrences.map((o) => o.jaParaLex));
  if (lexVariants.size <= 1) continue; // no divergence at all

  // Canon-selection rules:
  //   1. If there is no body occurrence in the group, skip — canon
  //      selection between competing quotes requires editorial
  //      judgement and is out of scope for the machine fixer.
  //   2. If there are multiple body occurrences with disagreeing
  //      surface forms (`jaParaLex` not unanimous across the body
  //      side), skip too. With body variants the "first body" choice
  //      becomes a file-scan-order accident — fine in principle but
  //      not what we want for a one-shot rewrite. Report so it can be
  //      handled manually.
  const bodyOccs = occurrences.filter((o) => !o.isQuote);
  if (bodyOccs.length === 0) {
    skippedQuoteOnly.push({ enPhrase, occurrences });
    continue;
  }
  const bodyVariants = new Set(bodyOccs.map((o) => o.jaParaLex));
  if (bodyVariants.size > 1) {
    skippedMultiBody.push({ enPhrase, bodyOccs });
    continue;
  }
  const bodyOcc = bodyOccs[0];

  // Targets include EVERY occurrence in the group whose raw paragraph
  // would change once the canonical surface form is applied — that
  // includes the body source itself when its physical paragraph is
  // hand-wrapped (newlines that collapse to JA-JA spurious whitespace
  // after `normaliseParagraph`). Rewriting only the quotes would leave
  // the body carrying the JA-JA stranded space, and the audit would
  // immediately re-flag the same group from the opposite direction.
  fixGroups.push({ enPhrase, bodyOcc, occurrences });
}

// ---------- Rewrite each target's raw paragraph in its JA file ----------

/**
 * Single-line HTML marker (and blank lines, which can appear inside
 * `splitParagraphs` outputs only at the trim boundary — defensive).
 * Used by both the quote rewriter and the body rewriter to recognise
 * non-content lines that should be preserved untouched.
 */
function isHtmlMarkerLine(line) {
  const t = line.trim();
  if (t === '') return true;
  return /^<!--/.test(t) && /-->$/.test(t);
}

/**
 * Locate the contiguous run of single-level `>` blockquote lines
 * within a target paragraph, and rewrite that run with a single line
 * `> ${canonText}` (canon = body's surface form, joined to one line).
 *
 * The target paragraph commonly carries surrounding HTML marker
 * lines (`<!-- speaker: ... -->`, `<!-- quote: qN -->`,
 * `<!-- tone-skip -->`, `<!-- /tone-skip -->`) before / after / both
 * sides of the actual `>` lines. Those marker lines must survive the
 * rewrite untouched.
 *
 * Returns null in any of these cases (caller logs them as skipped):
 *   - no `>` line at all (shouldn't happen — paragraph was filtered
 *     by `isBlockquoteParagraph` upstream — but defensive);
 *   - the `>` lines are not contiguous (would require knowing where
 *     to put the canon among multiple `>`-blocks);
 *   - any `>` line is a nested `>>` quote (rewriting nested quotes
 *     would need the inner quote's source, out of scope).
 */
function rewriteQuoteBlock(rawPara, canonText) {
  const lines = rawPara.split('\n');
  const quoteIndices = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^>(\s|$)/.test(lines[i])) quoteIndices.push(i);
  }
  if (quoteIndices.length === 0) return null;
  for (let j = 1; j < quoteIndices.length; j++) {
    if (quoteIndices[j] !== quoteIndices[j - 1] + 1) return null;
  }
  for (const idx of quoteIndices) {
    if (lines[idx].startsWith('>>')) return null;
  }
  const newQuoteLine = `> ${canonText}`;
  const newLines = [
    ...lines.slice(0, quoteIndices[0]),
    newQuoteLine,
    ...lines.slice(quoteIndices[quoteIndices.length - 1] + 1),
  ];
  return newLines.join('\n');
}

/**
 * Locate the contiguous run of non-marker content lines within a
 * body paragraph and replace them with a single line `canonText`.
 *
 * Body paragraphs typically look like
 *
 *     <!-- speaker: NAME -->
 *     主文 (1 or more hand-wrapped lines)
 *
 * The marker line(s) must survive untouched; the content lines (which
 * may be hand-wrapped and thus carry JA-JA spurious whitespace once
 * surface-normalised) collapse to one canonical line.
 *
 * Returns null when:
 *   - no content lines at all (paragraph is all markers — defensive);
 *   - content lines are not contiguous (markers interleave with
 *     content in a way we don't want to rewrite blindly);
 *   - any content line begins with `>` (mixed body/quote paragraph,
 *     out of scope here — that's `rewriteQuoteBlock`'s job).
 */
function rewriteBodyBlock(rawPara, canonText) {
  const lines = rawPara.split('\n');
  const bodyIndices = [];
  for (let i = 0; i < lines.length; i++) {
    if (!isHtmlMarkerLine(lines[i])) bodyIndices.push(i);
  }
  if (bodyIndices.length === 0) return null;
  for (let j = 1; j < bodyIndices.length; j++) {
    if (bodyIndices[j] !== bodyIndices[j - 1] + 1) return null;
  }
  for (const idx of bodyIndices) {
    if (/^>/.test(lines[idx].trimStart())) return null;
  }
  const newLines = [
    ...lines.slice(0, bodyIndices[0]),
    canonText,
    ...lines.slice(bodyIndices[bodyIndices.length - 1] + 1),
  ];
  return newLines.join('\n');
}

let rewritten = 0;
const fileChanges = new Map(); // jaPath → number of rewrites
const skippedAmbiguous = [];

for (const group of fixGroups) {
  // Canonical surface form text — the body occurrence's surface
  // normalised form. This is the JA wording with the half-width-space
  // convention applied (because it came from a body paragraph that
  // goes through check-ja-spacing) but stripped of HTML markers,
  // inline code, and emphasis-marker whitespace artefacts. Joined to
  // a single physical line; original line-wrap in target paragraphs
  // is replaced with a single line.
  //
  // Two whitespace folds are applied on top of `jaParaLex` to produce
  // the canon text:
  //   1. JA-JA spurious whitespace removed. The body source paragraph
  //      is often hand-wrapped at a fixed column, and
  //      `normaliseParagraph` turns those newlines into ASCII spaces
  //      — landing as `JA + space + JA` once written back out to a
  //      single line. That pattern is `check-ja-spacing`'s
  //      `JA × JA stranded space` blocking error.
  //   2. JA punctuation followed by whitespace folded. JA-punctuation
  //      characters (、。「」『』（）：；) are not in `check-ja-spacing`'s
  //      JA_LETTER class, so `句読点 + space + ASCII/JA` does not
  //      trigger that check — but visually `、 Dropbox` and `。 クラ…`
  //      read as artefacts of the hand-wrap collapse rather than
  //      intended spacing. Strip the trailing space after JA
  //      punctuation so the canon reads cleanly. (Audit's
  //      `normaliseJaWidth` folds the same boundary, so this does
  //      not change the wording-divergence picture.)
  // Both folds run on the JA-ASCII / ASCII-JA boundary spaces that
  // we explicitly want, leaving them alone.
  const canonText = group.bodyOcc.jaParaLex
    .replace(/([ぁ-んァ-ヶ一-龯々ー])\s+([ぁ-んァ-ヶ一-龯々ー])/g, '$1$2')
    .replace(/([、。「」『』（）：；])\s+/g, '$1');

  for (const target of group.occurrences) {
    let desiredRawPara;
    if (target.isQuote) {
      const newPara = rewriteQuoteBlock(target.jaRawPara, canonText);
      if (newPara === null) {
        skippedAmbiguous.push({
          reason: 'non-rewriteable quote paragraph (non-contiguous `>` lines, nested `>>`, or no `>` lines)',
          jaPath: target.jaPath,
          paraIdx: target.paraIdx,
        });
        continue;
      }
      desiredRawPara = newPara;
    } else {
      const newPara = rewriteBodyBlock(target.jaRawPara, canonText);
      if (newPara === null) {
        skippedAmbiguous.push({
          reason: 'non-rewriteable body paragraph (non-contiguous content lines, mixed with `>` markers)',
          jaPath: target.jaPath,
          paraIdx: target.paraIdx,
        });
        continue;
      }
      desiredRawPara = newPara;
    }

    if (target.jaRawPara === desiredRawPara) continue;

    const fileText = readFileSync(target.jaPath, 'utf-8');
    const occurrences = fileText.split(target.jaRawPara).length - 1;
    if (occurrences === 0) {
      skippedAmbiguous.push({
        reason: 'raw paragraph not found verbatim in file',
        jaPath: target.jaPath,
        paraIdx: target.paraIdx,
      });
      continue;
    }
    if (occurrences > 1) {
      skippedAmbiguous.push({
        reason: `raw paragraph appears ${occurrences}× — ambiguous`,
        jaPath: target.jaPath,
        paraIdx: target.paraIdx,
      });
      continue;
    }

    if (WRITE) {
      const newText = fileText.replace(target.jaRawPara, desiredRawPara);
      writeFileSync(target.jaPath, newText, 'utf-8');
    }
    rewritten++;
    fileChanges.set(target.jaPath, (fileChanges.get(target.jaPath) ?? 0) + 1);
  }
}

// ---------- Report ----------

const verbPast = WRITE ? 'rewritten' : 'would be rewritten';
const verbProgress = WRITE ? 'modified' : 'would be modified';

console.log(`Mode:                                    ${WRITE ? 'WRITE (files will be edited)' : 'DRY-RUN (no files touched; pass --write to apply)'}`);
console.log(`Visual-only divergence groups inspected: ${fixGroups.length}`);
console.log(`Occurrences ${verbPast}:                ${rewritten}`);
console.log(`Files ${verbProgress}:                          ${fileChanges.size}`);

if (skippedQuoteOnly.length > 0) {
  console.log('');
  console.log(`Skipped ${skippedQuoteOnly.length} quote-only groups (no body occurrence to pick canon from):`);
  for (const { enPhrase, occurrences } of skippedQuoteOnly) {
    console.log(`  - ${enPhrase.slice(0, 80)}…`);
    for (const occ of occurrences) {
      console.log(`      ${path.relative(REPO_ROOT, occ.jaPath)}  (paragraph #${occ.paraIdx + 1})`);
    }
  }
}

if (skippedMultiBody.length > 0) {
  console.log('');
  console.log(`Skipped ${skippedMultiBody.length} multi-body groups (body side itself disagrees, manual canon needed):`);
  for (const { enPhrase, bodyOccs } of skippedMultiBody) {
    console.log(`  - ${enPhrase.slice(0, 80)}…`);
    for (const occ of bodyOccs) {
      console.log(`      ${path.relative(REPO_ROOT, occ.jaPath)}  (paragraph #${occ.paraIdx + 1})`);
    }
  }
}

if (skippedAmbiguous.length > 0) {
  console.log('');
  console.log(`Skipped ${skippedAmbiguous.length} ambiguous targets (file-level string match failed):`);
  for (const s of skippedAmbiguous) {
    console.log(`  - ${path.relative(REPO_ROOT, s.jaPath)} #${s.paraIdx + 1}: ${s.reason}`);
  }
}

if (rewritten > 0) {
  console.log('');
  if (!WRITE) {
    console.log('Next: re-run with --write to apply, then:');
  } else {
    console.log('Next steps:');
  }
  console.log('  1. npm run audit:quote-translation-consistency   # confirm visual-only count drops');
  console.log('  2. npm run check                                  # confirm build still passes');
  console.log('  3. git diff --stat                                # sample the rewrites');
}
