#!/usr/bin/env node
/**
 * audit-quote-translation-consistency.mjs
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
 *   3. Split each body into paragraphs on blank lines. Pre-filter
 *      marker-only paragraphs (e.g. `<!-- speaker: Satoshi Nakamoto -->`
 *      on a line by itself) from both EN and JA paragraph lists,
 *      since the JA archive interleaves those between speaker turns
 *      where the EN file has none. Then walk EN and JA paragraphs in
 *      lock-step (Nth content paragraph in EN ↔ Nth content paragraph
 *      in JA). The archive's editorial convention keeps these counts
 *      aligned once marker noise is removed, but mismatches still
 *      occur (extra footnotes, inserted commentary). To survive those,
 *      each EN→JA pair is screened by a coarse length envelope
 *      (`passesLengthEnvelope`) before being recorded — this rejects
 *      only obviously mismatched pairs, not all alignment failures.
 *      See Limitations below.
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
 *      Each occurrence records `{ enPath, paraIdx, jaParaWidth,
 *      jaParaLex, isQuote }`. Two normalised forms of the JA paragraph
 *      are kept side-by-side:
 *        - `jaParaWidth` — width-folded: full-/half-width digits,
 *          digit + counter spacing, JA punctuation spacing, JA-ASCII
 *          boundary spacing, and JA-JA spurious whitespace are all
 *          collapsed. Used as the primary divergence key so
 *          orthographic variants owned by `check-ja-spacing` /
 *          `check-ja-block-notation` do not register as wording
 *          divergence here.
 *        - `jaParaLex` — surface normalisation (strip leading `>`,
 *          HTML comments, inline code, emphasis-marker whitespace;
 *          collapse runs of whitespace to a single space; trim), but
 *          *without* the width-folding pass. Differences in JA-ASCII
 *          boundary spacing, full-/half-width digits, digit+counter
 *          spacing, and JA-JA spurious whitespace all survive into
 *          this form. Used to detect visual-only divergence (same JA
 *          wording rendered with different visual representation
 *          across entries) — STYLE_GUIDE_JA § 4 obliges cross-entry
 *          consistency on visual representation, not just wording.
 *   7. For each EN paragraph that appears in ≥ 2 entries **and** has
 *      `isQuote` true at least once, group the occurrences by their
 *      JA wording.
 *      - If `jaParaWidth` groups into > 1 variants → wording divergent
 *        (reported as `[divergent translation]`).
 *      - Else if `jaParaWidth` collapses to a single variant but
 *        `jaParaLex` groups into > 1 → visual-only divergent (reported
 *        as `[visual-only divergence]`). Same JA wording, different
 *        visual representation (JA-ASCII boundary spacing, digit width,
 *        digit+counter spacing, JA punctuation spacing, or JA-JA
 *        spurious whitespace) across entries.
 *
 * Limitations:
 *   - Paragraph alignment assumes EN and JA share the same blank-
 *     line paragraph structure after marker-only paragraphs are
 *     stripped from both sides. `passesLengthEnvelope` rejects only
 *     pairs whose character counts diverge by more than 0.2x–2.5x —
 *     this is a length screen, not a content-alignment check.
 *     Different prose with similar length will pass it. Every
 *     reported divergence still requires human review before any
 *     edit is made. The audit is a candidate-finder, not a verdict.
 *   - Phrase matching is by full-paragraph equality after
 *     normalisation. A phrase split across paragraph boundaries in
 *     one entry but inline in another is not matched. This is a
 *     deliberate noise vs. recall trade-off.
 *   - `audit:` placement (not `check:`) is intentional. Promotion to
 *     `check:` (= build-blocking) requires (a) a real alignment
 *     mechanism beyond length envelope, and (b) demonstrated low
 *     false-positive rate via sampling. See plan file under temp/.
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

/** Extract YAML frontmatter as a raw string (without the `---` fences). */
function extractFrontmatter(text) {
  const m = text.match(/^---\n([\s\S]*?)\n---/);
  return m ? m[1] : '';
}

/** Read the `title:` scalar from a YAML frontmatter string. Supports
 *  double-quoted, single-quoted, and bare forms on a single line. Returns
 *  null if no title field is found or if the value is empty.
 */
function getYamlTitle(frontmatter) {
  // Try quoted forms first to preserve embedded `:` characters.
  const dq = frontmatter.match(/^title:\s*"((?:[^"\\]|\\.)*)"\s*$/m);
  if (dq) return dq[1].replace(/\\"/g, '"').trim() || null;
  const sq = frontmatter.match(/^title:\s*'((?:[^'\\]|\\.)*)'\s*$/m);
  if (sq) return sq[1].replace(/\\'/g, "'").trim() || null;
  const bare = frontmatter.match(/^title:\s*([^\n]+)$/m);
  if (bare) return bare[1].trim() || null;
  return null;
}

/** Read the `type:` scalar from a YAML frontmatter string. */
function getYamlType(frontmatter) {
  const m = frontmatter.match(/^type:\s*"?([\w-]+)"?\s*$/m);
  return m ? m[1] : null;
}

/** Entry types whose `title` is editorially treated as a quotable phrase
 *  (the author's own headline / subject line, often re-quoted as a
 *  one-liner in editorial entries — `correspondence` and `bip` titles
 *  are usually descriptive editorial labels, not the author's wording,
 *  so they are excluded here).
 */
const QUOTABLE_TITLE_TYPES = new Set(['forum-post', 'mailing-list', 'tweet']);

/** Split a normalised paragraph into sentence-like fragments on `.`/`?`/`!`
 *  boundaries. `minLen` controls the per-fragment length floor — at the
 *  default (`MIN_PHRASE_LENGTH`) only standalone-quotable fragments
 *  survive; the title-integration pass passes a lower value so short
 *  tail sentences still participate when concatenated with the title,
 *  with the final length floor enforced by `registerPseudo` on the
 *  concatenated string instead.
 */
function splitIntoSentences(normalised, minLen = MIN_PHRASE_LENGTH) {
  return normalised
    .split(/(?<=[.?!])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length >= minLen);
}

/**
 * Split body into paragraphs on blank lines.
 * Also treat blockquote-only lines (`>`, `> `, `>>`, etc.) as paragraph
 * separators — these are blank lines inside a `>` blockquote and must
 * split paragraphs the same way a true blank line does in body text.
 * Without this, a multi-paragraph blockquote collapses into a single
 * paragraph and never matches the body-text version of the same passage.
 */
function splitParagraphs(text) {
  const normalized = text.replace(/^(>+\s*)$/gm, '');
  return normalized.split(/\n\s*\n+/).map((p) => p.trim()).filter(Boolean);
}

/**
 * Normalise a paragraph for comparison:
 *  - strip leading `>` markers on every line (so blockquote and body
 *    versions of the same text collapse to the same form);
 *  - strip HTML comments such as `<!-- speaker: NAME -->`,
 *    `<!-- quote: qN -->`, `<!-- tone-skip -->`, etc.;
 *  - blank out inline code spans (`` `...` ``) so things like `*ptr`,
 *    star globs, or other punctuation inside code do not interact with
 *    the emphasis-marker normalisation below;
 *  - tighten whitespace around paired inline-emphasis markers (`*…*`,
 *    `_…_`) so "input is *exactly* equal" and "input is*exactly*equal"
 *    do not register as divergent — that orthographic variation is
 *    owned by `check-ja-spacing` and the Markdown renderer, not this
 *    audit. The pattern requires *non-space* characters on both sides
 *    of the marker so it only matches genuine emphasis pairs, never a
 *    list bullet (`* item`) or a stray standalone asterisk;
 *  - collapse all whitespace to a single space, and trim.
 */
function normaliseParagraph(para) {
  let s = para
    .split('\n')
    .map((line) => line.replace(/^(>+\s*)+/, ''))
    .join(' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/`[^`\n]*`/g, ' ')
    .replace(/(\S)\s*([*_])\s*(\S)/g, '$1$2$3')
    .replace(/\s+/g, ' ')
    .trim();
  // Strip outer quotation marks (`"…"`, `「…」`, `『…』`) that editorial
  // entries wrap around re-quoted text. The same passage may appear as
  // a bare body sentence in the source post and as a quoted blockquote
  // in the editorial entry; the outer quotes are a presentational
  // wrapper, not part of the wording, and would otherwise prevent the
  // two forms from collapsing to the same map key.
  s = s.replace(/^["「『]\s*/, '').replace(/\s*["」』]$/, '');
  return s.trim();
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
    .replace(/([、。「」『』（）：；])\s+/g, '$1')
    // JA-ASCII boundary spacing — fold both「もし SHA-256」 and 「もしSHA-256」 to
    // the same normalised form so that the half-width-space convention enforced
    // by `check-ja-spacing` / `fix-ja-ascii-spacing` does not register as a
    // translation divergence here. That orthographic concern is owned by those
    // scripts; this audit only reports lexical / structural differences.
    .replace(/([ぁ-んァ-ヶ一-龯々ー])\s+([A-Za-z0-9])/g, '$1$2')
    .replace(/([A-Za-z0-9])\s+([ぁ-んァ-ヶ一-龯々ー])/g, '$1$2')
    // JA-JA spurious whitespace — line wrap artefacts where the JA paragraph
    // was hand-wrapped at fixed column widths leave half-width spaces between
    // two Japanese characters that should not be there. Japanese prose never
    // requires a half-width space between two CJK characters, so collapse them
    // for comparison purposes only. (The orthographic fix happens in the
    // entries themselves under `check-ja-spacing`.)
    .replace(/([ぁ-んァ-ヶ一-龯々ー])\s+([ぁ-んァ-ヶ一-龯々ー])/g, '$1$2');
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
 * Length-envelope screen between an EN paragraph and the paragraph at
 * the same index in JA. This is **not** a real alignment check — it
 * only rejects obviously mismatched pairs (e.g. an EN paragraph at
 * index N falls on a long JA paragraph that is plainly different
 * prose). A 0.2x–2.5x envelope is intentionally generous; two
 * paragraphs with completely different content can still share a
 * similar length and pass this screen. The audit therefore remains a
 * "candidate-finder" — every reported divergence still requires human
 * review before any edit is made. A real alignment check (matching by
 * content, e.g. embedding similarity or anchor markers) is out of
 * scope for the current version; if this audit is ever promoted from
 * `audit:` to `check:`, that work needs to happen first (see plan
 * file under temp/ for the precondition list).
 */
function passesLengthEnvelope(enNorm, jaNorm) {
  if (!jaNorm) return false;
  if (enNorm.length < 20 || jaNorm.length < 8) return false;
  const ratio = jaNorm.length / enNorm.length;
  return ratio >= 0.2 && ratio <= 2.5;
}

/** EN normalised paragraph → list of { enPath, paraIdx, jaParaWidth, jaParaLex, isQuote }. */
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

  const enRaw = readFileSync(enPath, 'utf-8');
  const jaRawFull = readFileSync(jaPath, 'utf-8');
  const enFrontmatter = extractFrontmatter(enRaw);
  const jaFrontmatter = extractFrontmatter(jaRawFull);
  const enType = getYamlType(enFrontmatter);
  const enTitle = getYamlTitle(enFrontmatter);
  const jaTitle = getYamlTitle(jaFrontmatter);
  const enBody = stripFrontmatter(enRaw);
  const jaBody = stripFrontmatter(jaRawFull);
  const enParasRaw = splitParagraphs(enBody);
  const jaParasRaw = splitParagraphs(jaBody);

  // Pre-filter marker-only paragraphs (e.g. `<!-- speaker: Satoshi
  // Nakamoto -->` on a line by itself) from both sides before walking
  // in lock-step. The JA archive interleaves `<!-- speaker: -->`
  // markers between speaker turns where the EN file has none, which
  // shifts EN[i] ↔ JA[i] pairing by one paragraph per inserted marker
  // and turns unrelated paragraphs into apparent translation variants.
  // We strip those markers from the alignment pass while preserving
  // the original paragraph index in each kept entry so reporting can
  // still cite the in-file paragraph position.
  function filterMarkerOnly(paras) {
    const kept = [];
    for (let i = 0; i < paras.length; i++) {
      const raw = paras[i];
      const norm = normaliseParagraph(raw);
      if (!norm) continue;
      if (isMarkerOnly(norm)) continue;
      kept.push({ raw, originalIdx: i });
    }
    return kept;
  }
  const enParas = filterMarkerOnly(enParasRaw);
  const jaParas = filterMarkerOnly(jaParasRaw);

  const len = Math.min(enParas.length, jaParas.length);
  for (let i = 0; i < len; i++) {
    const { raw: enRaw, originalIdx: enOrigIdx } = enParas[i];
    const { raw: jaRaw } = jaParas[i];

    if (isCodeBlock(enRaw) || isCodeBlock(jaRaw)) continue;

    // Per-paragraph skip marker. Paragraphs containing the literal
    // `<!-- audit:quote-skip -->` marker are excluded from this audit's
    // comparison map. Used for the residual class of false-positive
    // groups where the EN side genuinely shares an identical phrase
    // across entries but the JA-side paragraph structure or content
    // is materially different (e.g. one quote-only group with no body
    // anchor, alignment failures where EN[i] ↔ JA[i] picked unrelated
    // prose, quote-side extensions appending body's next paragraph
    // inline, etc.). Manual canonicalisation in those cases would
    // require rewriting the body file's source content; the marker
    // documents that these pairs have been triaged and intentionally
    // excluded rather than left as unaddressed wording divergence.
    if (/<!--\s*audit:quote-skip\s*-->/.test(enRaw) ||
        /<!--\s*audit:quote-skip\s*-->/.test(jaRaw)) continue;

    // Shallow structure check: EN[i] and JA[i] must agree on blockquote
    // status. The lock-step paragraph walk pairs the Nth content paragraph
    // on each side, but in forum threads with nested replies, the JA
    // entry sometimes splits or merges paragraphs differently — typical
    // case is Satoshi quoting a prior post `>` and then his own reply as
    // a separate paragraph, where the JA file collapses the two into a
    // single body paragraph (or vice versa). Without this gate, the EN
    // quote at position i pairs with a JA body at position i (or
    // mirror), producing false-positive "divergence" reports against
    // unrelated prose. Matching `isBlockquoteParagraph` requires the
    // pair to share role (both quote, or both body), which is a
    // necessary precondition for any meaningful translation comparison.
    if (isBlockquoteParagraph(enRaw) !== isBlockquoteParagraph(jaRaw)) continue;

    const enNorm = normaliseParagraph(enRaw);
    if (enNorm.length < MIN_PHRASE_LENGTH) continue;
    if (!/[a-zA-Z]/.test(enNorm)) continue;
    if (isHeading(enNorm)) continue;

    const jaLex = normaliseParagraph(jaRaw);
    const jaWidth = normaliseJaWidth(jaLex);
    if (!passesLengthEnvelope(enNorm, jaWidth)) continue;

    if (!enParaMap.has(enNorm)) enParaMap.set(enNorm, []);
    enParaMap.get(enNorm).push({
      enPath,
      paraIdx: enOrigIdx,
      jaParaWidth: jaWidth,
      jaParaLex: jaLex,
      isQuote: isBlockquoteParagraph(enRaw),
    });
  }

  // Title-integration pseudo paragraphs.
  //
  // Editorial entries (aftermath / analysis / biography / design) often
  // quote a primary-source post by gluing the author's *title* (the
  // forum-post subject line) together with the first or last sentence
  // of the body, using `—` or `--` as the connector — e.g. on the
  // value-overflow incident page:
  //
  //   > "Strange block 74638 — 92233720368.54277039 BTC? Is that
  //   >  UINT64_MAX, I wonder?"
  //
  // That summary blockquote never matches the source post under the
  // full-paragraph equality rule above: the title sits in YAML, the
  // tail sentence sits in a body paragraph, and the editorial quote
  // joins them inline with an em-dash. So the existing pass — and the
  // existing 55-finding audit — silently skip the entire class.
  //
  // We widen recall by synthesising pseudo paragraphs from the
  // primary-source entry: the title alone, and the title concatenated
  // with each sentence of each non-blockquote body paragraph using the
  // em-dash / double-hyphen separators editorial entries actually use.
  // Both EN and JA pseudo forms are built in parallel (jaTitle joined
  // with the corresponding JA sentence at the matching paragraph
  // index) and registered into the same `enParaMap` so they participate
  // in the existing divergence check as `isQuote: true` occurrences.
  //
  // Only entry types whose `title` editorially represents the author's
  // own wording are eligible (forum posts, mailing-list messages,
  // tweets — see QUOTABLE_TITLE_TYPES). correspondence / bip / etc. use
  // descriptive editorial titles and are excluded.
  if (QUOTABLE_TITLE_TYPES.has(enType) && enTitle && jaTitle) {
    function registerPseudo(enText, jaText, label) {
      const enNorm = normaliseParagraph(enText);
      if (enNorm.length < MIN_PHRASE_LENGTH) return;
      if (!/[a-zA-Z]/.test(enNorm)) return;
      const jaLex = normaliseParagraph(jaText);
      const jaWidth = normaliseJaWidth(jaLex);
      if (!passesLengthEnvelope(enNorm, jaWidth)) return;
      if (!enParaMap.has(enNorm)) enParaMap.set(enNorm, []);
      enParaMap.get(enNorm).push({
        enPath,
        paraIdx: -1,
        pseudoLabel: label,
        jaParaWidth: jaWidth,
        jaParaLex: jaLex,
        isQuote: true,
      });
    }

    // Title-alone pseudo intentionally not registered. In practice it
    // produces too many false positives from cross-entry duplicates
    // sharing identical EN titles but having intentionally different JA
    // titles (slug-variant duplicates, BIP / topic re-postings). Those
    // belong to `check-source-duplication`, not here. We only register
    // the connector forms below, whose length envelope filters that
    // class out.

    // Pseudo 2..N: title joined with each body sentence on either end
    // of each body paragraph, under both connector styles editorial
    // entries use. Walk EN/JA paragraphs in lock-step (same indexing as
    // the main loop above) so EN[i]'s sentences pair with JA[i]'s.
    const sentLen = Math.min(enParas.length, jaParas.length);
    for (let i = 0; i < sentLen; i++) {
      const { raw: enParaRaw } = enParas[i];
      const { raw: jaParaRaw } = jaParas[i];
      if (isCodeBlock(enParaRaw) || isCodeBlock(jaParaRaw)) continue;
      if (isBlockquoteParagraph(enParaRaw)) continue;
      if (isBlockquoteParagraph(jaParaRaw)) continue;
      const enParaNorm = normaliseParagraph(enParaRaw);
      const jaParaLex = normaliseParagraph(jaParaRaw);
      if (!enParaNorm || !jaParaLex) continue;
      if (isHeading(enParaNorm)) continue;
      // Lower per-sentence floor — the connector forms below
      // concatenate title + sentence, and the final length floor is
      // applied to the concatenated string inside `registerPseudo`.
      const enSents = splitIntoSentences(enParaNorm, 10);
      if (!enSents.length) continue;
      // JA "sentences" are split on the same ASCII boundary set —
      // imperfect for fully-Japanese prose but adequate for the
      // common case where the JA body retains the original ASCII
      // sentence boundaries (numeric tail, English fragment, etc.).
      const jaSents = jaParaLex
        .split(/(?<=[.?!。？！])\s*/)
        .map((s) => s.trim())
        .filter((s) => s.length >= 4);
      if (!jaSents.length) continue;
      // Match by position within the paragraph: first-EN ↔ first-JA,
      // last-EN ↔ last-JA. This handles both the "headline + opening
      // line" and "headline + closing line" editorial patterns.
      const enFirst = enSents[0];
      const enLast = enSents[enSents.length - 1];
      const jaFirst = jaSents[0];
      const jaLast = jaSents[jaSents.length - 1];
      for (const sep of [' — ', ' -- ']) {
        registerPseudo(`${enTitle}${sep}${enLast}`, `${jaTitle}${sep}${jaLast}`, 'title+tail');
        if (enFirst !== enLast) {
          registerPseudo(`${enTitle}${sep}${enFirst}`, `${jaTitle}${sep}${jaFirst}`, 'title+head');
        }
        // Title + the whole body paragraph — handles editorial
        // re-quotes that include more than one sentence from the body.
        if (enFirst !== enParaNorm && enParaNorm.length >= MIN_PHRASE_LENGTH) {
          registerPseudo(`${enTitle}${sep}${enParaNorm}`, `${jaTitle}${sep}${jaParaLex}`, 'title+para');
        }
      }
    }
  }
}

const JSON_MODE = process.argv.includes('--json');
let divergentCount = 0;
let visualDivergentCount = 0;
const output = [];
const findings = []; // structured form for `--json`
for (const [enPhrase, occurrences] of enParaMap.entries()) {
  if (occurrences.length < 2) continue;
  if (!occurrences.some((occ) => occ.isQuote)) continue;
  // Require at least one real (non-pseudo) blockquote occurrence.
  // Pseudo-only groups arise when two source posts share an identical
  // EN title (slug variants, re-postings, duplicate archive entries)
  // and the title+sentence join happens to collide — that's a
  // duplicate-data problem owned by `check-source-duplication`, not a
  // translation-consistency one. With this gate, the group must be
  // anchored by at least one editorial entry actually quoting the
  // passage, so the report stays on the wording-consistency axis.
  if (!occurrences.some((occ) => occ.isQuote && !occ.pseudoLabel)) continue;
  const widthVariants = new Map();
  for (const occ of occurrences) {
    if (!occ.jaParaWidth) continue;
    if (!widthVariants.has(occ.jaParaWidth)) widthVariants.set(occ.jaParaWidth, []);
    widthVariants.get(occ.jaParaWidth).push(occ);
  }
  if (widthVariants.size > 1) {
    divergentCount++;
    output.push(`\n[divergent translation]`);
    output.push(`  EN: "${truncate(enPhrase)}"`);
    const findingVariants = [];
    for (const [ja, occs] of widthVariants.entries()) {
      output.push(`  JA variant: "${truncate(ja)}"`);
      const occList = [];
      for (const occ of occs) {
        const rel = path.relative(REPO_ROOT, occ.enPath);
        if (occ.pseudoLabel) {
          output.push(`    ${rel} (pseudo: ${occ.pseudoLabel})`);
        } else {
          const tag = occ.isQuote ? 'quote' : 'body';
          output.push(`    ${rel} (paragraph #${occ.paraIdx + 1}, ${tag})`);
        }
        occList.push({
          enPath: rel,
          paraIdx: occ.paraIdx,
          isQuote: occ.isQuote,
          pseudoLabel: occ.pseudoLabel ?? null,
        });
      }
      findingVariants.push({ ja, occurrences: occList });
    }
    findings.push({ kind: 'divergent', enPhrase, variants: findingVariants });
    continue;
  }
  // No wording divergence — check for visual-only divergence on the
  // surface-normalised (non-width-folded) keys. Same JA wording
  // rendered with different visual representation across entries
  // (JA-ASCII boundary spacing, digit width, digit+counter spacing,
  // JA punctuation spacing, JA-JA spurious whitespace — all of the
  // orthographic axes folded by `normaliseJaWidth`) violates the
  // cross-entry visual consistency obligation in STYLE_GUIDE_JA § 4
  // even though `check-ja-spacing` exempts blockquote lines from the
  // single-file half-width-space rule.
  const lexVariants = new Map();
  for (const occ of occurrences) {
    if (!occ.jaParaLex) continue;
    if (!lexVariants.has(occ.jaParaLex)) lexVariants.set(occ.jaParaLex, []);
    lexVariants.get(occ.jaParaLex).push(occ);
  }
  if (lexVariants.size > 1) {
    visualDivergentCount++;
    output.push(`\n[visual-only divergence]`);
    output.push(`  EN: "${truncate(enPhrase)}"`);
    const findingVariants = [];
    for (const [ja, occs] of lexVariants.entries()) {
      output.push(`  JA variant: "${truncate(ja)}"`);
      const occList = [];
      for (const occ of occs) {
        const rel = path.relative(REPO_ROOT, occ.enPath);
        if (occ.pseudoLabel) {
          output.push(`    ${rel} (pseudo: ${occ.pseudoLabel})`);
        } else {
          const tag = occ.isQuote ? 'quote' : 'body';
          output.push(`    ${rel} (paragraph #${occ.paraIdx + 1}, ${tag})`);
        }
        occList.push({
          enPath: rel,
          paraIdx: occ.paraIdx,
          isQuote: occ.isQuote,
          pseudoLabel: occ.pseudoLabel ?? null,
        });
      }
      findingVariants.push({ ja, occurrences: occList });
    }
    findings.push({ kind: 'visual-only', enPhrase, variants: findingVariants });
  }
}

if (JSON_MODE) {
  console.log(JSON.stringify({
    pairsScanned,
    pairsSkipped,
    divergentCount,
    visualDivergentCount,
    findings,
  }, null, 2));
  // In JSON mode, skip the human-readable footer so the output is a
  // clean JSON document that downstream tooling can `JSON.parse()`.
  process.exit(divergentCount + visualDivergentCount > 0 ? 1 : 0);
} else if (output.length > 0) {
  console.log(output.join('\n'));
}

console.log(
  `\nScanned ${pairsScanned} en/ja pairs (${pairsSkipped} en-only entries skipped).`,
);
const totalIssues = divergentCount + visualDivergentCount;
if (totalIssues > 0) {
  const parts = [];
  if (divergentCount > 0) parts.push(`${divergentCount} divergent`);
  if (visualDivergentCount > 0) parts.push(`${visualDivergentCount} visual-only divergent`);
  console.log(`✗ ${parts.join(', ')} quote translations.`);
  process.exit(1);
} else {
  console.log(`✓ No divergent quote translations detected.`);
  process.exit(0);
}
