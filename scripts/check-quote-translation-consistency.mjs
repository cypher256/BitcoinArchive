#!/usr/bin/env node
/**
 * check-quote-translation-consistency.mjs
 *
 * Detect cases where the same English source passage has been rendered
 * into Japanese with divergent wording across entries, when at least
 * one of the occurrences is a `>` blockquote.
 *
 * Motivation: the same statement may appear in two entries — once as
 * a participant's own message and once quoted via `>` in a reply.
 * Both Japanese renderings of that single English passage should
 * match, otherwise readers see the same line worded differently when
 * cross-referencing entries. The rule is captured in
 * `STYLE_GUIDE_JA.md` § 4 ("引用文の翻訳一貫性").
 *
 * Scope: at least one occurrence must be inside a `>` blockquote.
 * Repeated body-only paragraphs (e.g. the same release-announcement
 * pasted into three boards) are out of scope — they are a different
 * editorial concern, owned by `check-source-duplication` and friends.
 *
 * Approach (paragraph-granularity):
 *   1. For each English entry under `src/data/entries/en/`, look up
 *      the matching Japanese translation under
 *      `src/data/translations/ja/` by relative path.
 *   2. Strip the YAML frontmatter from both files.
 *   3. Split each body into paragraphs on blank lines, then walk
 *      EN and JA paragraphs in lock-step (paragraph N in EN ↔
 *      paragraph N in JA). The archive's editorial convention keeps
 *      these counts aligned, but mismatches occur (extra footnotes,
 *      inserted commentary). To survive those, each EN→JA pair is
 *      sanity-checked with `looksAligned` before being recorded.
 *   4. Normalise each paragraph for comparison: strip leading `>`,
 *      strip HTML comments (`<!-- ... -->`), and on the JA side flatten
 *      full-width / half-width digit + counter spacing so 「10 万台」
 *      and 「10万台」 do not register as divergent. Those are
 *      orthographic concerns owned by `check-ja-block-notation` /
 *      `check-ja-spacing`.
 *   5. Skip code-fenced paragraphs (```), headings (`#`–`######`),
 *      pure HTML-marker paragraphs, paragraphs without ASCII letters,
 *      and paragraphs shorter than `MIN_PHRASE_LENGTH`.
 *   6. Build a map of normalised-EN paragraph → list of occurrences.
 *      Each occurrence records `{ enPath, paraIdx, jaPara, isQuote }`.
 *   7. For each EN paragraph that appears in ≥ 2 entries **and** has
 *      `isQuote` true at least once, group the occurrences by their
 *      JA wording. If the group count is > 1, that EN passage has
 *      divergent JA renderings.
 *
 * Limitations:
 *   - Paragraph alignment assumes EN and JA share the same blank-
 *     line paragraph structure. `looksAligned` filters obvious
 *     mismatches, but it cannot recover the true pair when the
 *     structures have drifted by more than one paragraph.
 *   - Phrase matching is by full-paragraph equality after
 *     normalisation. A phrase split across paragraph boundaries in
 *     one entry but inline in another is not matched. This is a
 *     deliberate noise vs. recall trade-off.
 *
 * Exit code: 0 on no divergence, 1 on any divergence detected.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const EN_ROOT = path.join(REPO_ROOT, 'src/data/entries/en');
const JA_ROOT = path.join(REPO_ROOT, 'src/data/translations/ja');

const MIN_PHRASE_LENGTH = 40;
const MAX_DISPLAY_LENGTH = 160;

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

/** Drop a leading `---\n...\n---\n?` YAML frontmatter block, if any. */
function stripFrontmatter(text) {
  const m = text.match(/^---\n[\s\S]*?\n---\n?/);
  if (!m) return text;
  return text.slice(m[0].length);
}

/** Split body into paragraphs on blank lines. */
function splitParagraphs(text) {
  return text.split(/\n\s*\n+/).map((p) => p.trim()).filter(Boolean);
}

/**
 * Normalise a paragraph for comparison:
 *  - strip leading `>` markers on every line (so blockquote and body
 *    versions of the same text collapse to the same form);
 *  - strip HTML comments such as `<!-- speaker: NAME -->`,
 *    `<!-- quote: qN -->`, `<!-- tone-skip -->`, etc.;
 *  - tighten whitespace around inline-emphasis markers (`*…*`, `_…_`)
 *    so "input is *exactly* equal" and "input is*exactly*equal" do
 *    not register as divergent — that orthographic variation is owned
 *    by `check-ja-spacing` and the Markdown renderer, not this audit;
 *  - collapse all whitespace to a single space, and trim.
 */
function normaliseParagraph(para) {
  return para
    .split('\n')
    .map((line) => line.replace(/^(>+\s*)+/, ''))
    .join(' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/\s*([*_])\s*/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Additional normalisation applied to JA paragraphs only, on top of
 * `normaliseParagraph`. Folds orthographic variation that is not the
 * concern of this audit (those have their own check scripts), so the
 * report focuses on real lexical / structural divergence.
 *  - full-width digits → half-width;
 *  - half-width digit + Japanese counter with or without a space →
 *    no space (10 万 ⇄ 10万 fold together);
 *  - spaces around Japanese full-width punctuation removed.
 */
function normaliseJaWidth(s) {
  return s
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(
      /(\d+)\s+(万|億|兆|円|台|個|つ|本|匹|枚|回|度|年|月|日|時|分|秒|歳|名|人|件|箇所|か所|か月|ヶ月|ヵ月|セント|ドル|バイト)/g,
      '$1$2',
    )
    .replace(/\s+([、。「」『』（）：；])/g, '$1')
    .replace(/([、。「」『』（）：；])\s+/g, '$1');
}

function truncate(s) {
  if (s.length <= MAX_DISPLAY_LENGTH) return s;
  return s.slice(0, MAX_DISPLAY_LENGTH) + '…';
}

/** Pure HTML-comment marker paragraph (single comment or sequence). */
function isMarkerOnly(normalised) {
  return /^(<!--[^>]*-->\s*)+$/.test(normalised);
}

/** Heading paragraph (Markdown `#`–`######`). */
function isHeading(normalised) {
  return /^#{1,6}\s+/.test(normalised);
}

/**
 * Code-fenced paragraph. We compare the *raw* paragraph here, before
 * `normaliseParagraph` collapses whitespace and joins lines, because
 * the fence marker must sit at the start of a line.
 */
function isCodeBlock(rawPara) {
  const first = rawPara.split('\n')[0].trimStart();
  return first.startsWith('```') || first.startsWith('~~~');
}

/** True when at least one line in the raw paragraph begins with `>`. */
function isBlockquoteParagraph(rawPara) {
  return rawPara.split('\n').some((line) => line.trimStart().startsWith('>'));
}

/**
 * Loose alignment check between an EN paragraph and the paragraph at
 * the same index in JA. When the two structures drift (extra
 * footnotes, inserted commentary, mismatched paragraph splits), index
 * lock-step breaks and the report would point at unrelated JA prose —
 * exactly the false positive the original reviewer flagged. A length
 * envelope of 0.2x–2.5x is intentionally generous; the goal is to
 * throw out alignment failures, not to police translation density.
 */
function looksAligned(enNorm, jaNorm) {
  if (!jaNorm) return false;
  if (enNorm.length < 20 || jaNorm.length < 8) return false;
  const ratio = jaNorm.length / enNorm.length;
  return ratio >= 0.2 && ratio <= 2.5;
}

/** EN normalised paragraph → list of { enPath, paraIdx, jaPara, isQuote }. */
const enParaMap = new Map();

let pairsScanned = 0;
let pairsSkipped = 0;

for (const enPath of walkMarkdown(EN_ROOT)) {
  const rel = path.relative(EN_ROOT, enPath);
  const jaPath = path.join(JA_ROOT, rel);
  if (!existsSync(jaPath)) {
    pairsSkipped++;
    continue;
  }
  pairsScanned++;

  const enBody = stripFrontmatter(readFileSync(enPath, 'utf-8'));
  const jaBody = stripFrontmatter(readFileSync(jaPath, 'utf-8'));
  const enParas = splitParagraphs(enBody);
  const jaParas = splitParagraphs(jaBody);

  const len = Math.min(enParas.length, jaParas.length);
  for (let i = 0; i < len; i++) {
    const enRaw = enParas[i];
    const jaRaw = jaParas[i];

    if (isCodeBlock(enRaw)) continue;

    const enNorm = normaliseParagraph(enRaw);
    if (enNorm.length < MIN_PHRASE_LENGTH) continue;
    if (!/[a-zA-Z]/.test(enNorm)) continue;
    if (isMarkerOnly(enNorm)) continue;
    if (isHeading(enNorm)) continue;

    const jaNorm = normaliseJaWidth(normaliseParagraph(jaRaw));
    if (!looksAligned(enNorm, jaNorm)) continue;

    if (!enParaMap.has(enNorm)) enParaMap.set(enNorm, []);
    enParaMap.get(enNorm).push({
      enPath,
      paraIdx: i,
      jaPara: jaNorm,
      isQuote: isBlockquoteParagraph(enRaw),
    });
  }
}

let divergentCount = 0;
const output = [];
for (const [enPhrase, occurrences] of enParaMap.entries()) {
  if (occurrences.length < 2) continue;
  if (!occurrences.some((occ) => occ.isQuote)) continue;
  const jaVariants = new Map();
  for (const occ of occurrences) {
    if (!occ.jaPara) continue;
    if (!jaVariants.has(occ.jaPara)) jaVariants.set(occ.jaPara, []);
    jaVariants.get(occ.jaPara).push(occ);
  }
  if (jaVariants.size > 1) {
    divergentCount++;
    output.push(`\n[divergent translation]`);
    output.push(`  EN: "${truncate(enPhrase)}"`);
    for (const [ja, occs] of jaVariants.entries()) {
      output.push(`  JA variant: "${truncate(ja)}"`);
      for (const occ of occs) {
        const rel = path.relative(REPO_ROOT, occ.enPath);
        const tag = occ.isQuote ? 'quote' : 'body';
        output.push(`    ${rel} (paragraph #${occ.paraIdx + 1}, ${tag})`);
      }
    }
  }
}

if (output.length > 0) {
  console.log(output.join('\n'));
}

console.log(
  `\nScanned ${pairsScanned} en/ja pairs (${pairsSkipped} en-only entries skipped).`,
);
if (divergentCount > 0) {
  console.log(`✗ ${divergentCount} divergent quote translations.`);
  process.exit(1);
} else {
  console.log(`✓ No divergent quote translations detected.`);
  process.exit(0);
}
