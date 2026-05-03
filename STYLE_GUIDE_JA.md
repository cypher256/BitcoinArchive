# Japanese Style Guide

Internal editorial rules for the Japanese edition of Bitcoin Institute.

> **Document language convention.** Rule prose in this file is written in
> **English** — section headings, paragraph descriptions, parenthetical
> notes, table column headers, flowchart labels, and any meta-explanation
> of a rule. **Japanese text appears only as data**: example violations,
> correct katakana / kanji forms, canonical mappings, and quoted source
> material. When extending this file, never write a rule statement in
> Japanese; only the words being illustrated as Japanese-style data may
> appear in Japanese. This convention exists because the file is publicly
> published and read by international contributors.

## Purpose

This file defines how Japanese-language pages should handle names, titles,
quoted material, voice, and terminology so the site can be normalized over
time without changing slugs, URLs, or source metadata.

Cross-language editorial rules (blockquote vs quotation mark semantics,
related entries, participant slug convention, etc.) live in
`STYLE_GUIDE.md`. Refer to that file first; this file only documents
Japanese-specific rules.

## Core Rule

- In Japanese UI and editorial text, person names are written in katakana.
- Canonical metadata — slugs, URLs, source records, frontmatter structural
  fields — remain in their original language.
- Japanese display forms are a presentation layer on top of the canonical
  metadata, not a replacement for it.

The canonical person-name mappings live in `src/i18n/participants.ts`. Do
not duplicate them here.

---

# I. Style Rules

Rules about how Japanese text looks and reads.

## 1. Person Names — Katakana

Use katakana for person names in Japanese-facing editorial elements:

- **UI labels that display person names**: participant lists, participant
  page headings, author / participant lines on cards and entry pages,
  person-tag labels.
- **Edited Japanese copy**: titles, descriptions, editor notes, biography
  prose, explanatory text written by the archive editor.
- **Inside translated quoted material**: blockquoted emails, forum posts,
  and letters that have been translated into Japanese. A quote block whose
  body is now Japanese prose should not leave English names sitting in
  it; the whole block is editorial Japanese text after translation.

Enforced by `npm run check:ja-names`.

In titles specifically, person names follow the same katakana rule (e.g.
`サトシ・ナカモト`, `マイク・ハーン`, `ハル・フィニー`). Canonical mappings
live in `src/i18n/participants.ts`.

## 2. What Stays In English

The following stay in their original English form even inside Japanese-facing
pages. These are organized as four categories; if a word fits one of these,
it remains English. Otherwise, it must be katakana-ized or translated (see
§ 8).

1. **Code identifiers** — identifiers quoted directly from source code.
   Examples: `LoadBlockIndex`, `hashGenesisBlock`, `nNonce`, `assert()`,
   `ProcessBlock`.
2. **Proper nouns, brand, protocol, and product names** — names where
   English is canonical.
   Examples: `Bitcoin`, `Bitcoin Core`, `SegWit`, `Taproot`,
   `Lightning Network`, `COPA`, `The Times`, `SourceForge`, `BIP 125`.
   Also handles, pseudonyms, and brand-like identifiers (e.g. `Cobra`,
   `theymos`, `Twitter`).
3. **Standard technical abbreviations** — abbreviations that circulate in
   the JA Bitcoin community in English form, where the expanded form is
   not used in Japanese.
   Examples: `PoW`, `UTXO`, `SHA-256`, `ECDSA`, `DDoS`, `JSON-RPC`, `URL`,
   `TCP/IP`.
4. **Citation and source-attribution surface forms** — the `name` field
   of `secondarySources`, words inside direct quotations, URLs, tag slugs,
   and frontmatter metadata. Also structural attribution lines such as
   `[Quote from: NAME on DATE]` and `NAME wrote:` (see § 4 Quotes).

Slugs, URLs, file paths, and structured metadata fields always stay
English regardless of the four-category rule above; they are canonical
identifiers, not prose.

## 3. Translation Completeness

All prose text on Japanese pages must be in Japanese, including quoted
material. The site provides language switching — users who want the
English original can switch to the English version. Do not leave English
passages untranslated in Japanese entries.

- Quoted emails, forum posts, and letters → translate body into Japanese.
- Blockquoted excerpts in aftermath / narrative entries → translate into
  Japanese.
- Preserve English only for:
  - URLs, code, commands, email headers, file paths, and similar technical
    strings where the original form is functionally necessary.
  - Structural attribution lines (`[Quote from: ...]`, `NAME wrote:`) —
    these are structural markers, not prose (see § 4).

## 4. Quotes And Blockquotes

Follow the shared quote / block formatting rules in `STYLE_GUIDE.md`. In
Japanese prose specifically:

- `> ` (blockquote) marks quoted or source-derived block content.
- `「…」` marks a direct quotation in Japanese prose.
- These do not mean the same thing and are often used together.

### Usage

- Inline quotations use `「…」`.
- Nested quotations use `『…』`.
- In narrative entries such as aftermath pages, short excerpted statements
  normally use `> 「…」`.
- In primary-source translations presented as the body of an email, letter,
  forum post, or log excerpt, blockquotes normally do not need `「」` unless
  the source or context specifically calls for them.
- Do not add `「」` to URLs, email headers, commands, log lines, handles,
  or UI strings unless they are being quoted as language.

For title-level quote handling, see § II.1 (Title Policy).

### Quote attribution — structural UI elements stay in English

BitcoinTalk and mailing-list attribution lines are structural, not prose.
Keep them in their original English form even inside Japanese pages:

| Source | Attribution format | Rule |
|--------|-------------------|------|
| BitcoinTalk | `[Quote from: NAME on DATE](URL)` | Keep English |
| Mailing lists | `NAME wrote:` | Keep English |
| Correspondence | `> ` inline quotes | Translate as body text |

Example:

```markdown
> [Quote from: RHorning on December 04, 2010, 10:17:44 PM](https://...)
> 引用テキストは日本語に翻訳する。
```

The quoted **body text** that follows an attribution is translated to
Japanese as normal.

### Prose attribution vs structured attribution

Sentences like "Satoshi wrote:" used as a narrative lead-in (in aftermath
or biography prose) are **not** quote attributions — they are normal
English prose. In JA translations, render as natural Japanese prose like
`「サトシは次のように書いた：」`.

### Structured quote metadata (frontmatter)

New entries use frontmatter `quotes[]` + body markers for quote
attributions. Legacy flat patterns must not be re-introduced:

| Legacy pattern | Typical source |
|----------------|----------------|
| `[Quote from: NAME on DATE](URL)` | BitcoinTalk |
| `NAME wrote:` | Mailing lists, correspondence |
| `NAME writes:` | Mailing lists (present tense) |
| `Quoting NAME:` | Hushmail |
| `Quoting NAME <email>:` | Hushmail (with address) |
| `On DATE, NAME wrote:` | Gmail-style replies |
| `Lainaus NAME:` | Hushmail (Finnish "Quoting") |
| `NAMEの投稿：` | Legacy JA translation |
| `NAMEの書き込み：` | Legacy JA translation |
| `NAMEの引用：` | Legacy JA translation |
| `NAMEは次のように書いた：` | Legacy JA translation |

All of these must be converted to `<!-- quote: qN -->` markers, with the
structured metadata recorded in frontmatter `quotes[]`.
`check-quotes.mjs` detects legacy forms (`[Quote from:]` is currently
enforced as an error; the rest must be reviewed manually).

**`personSlug` is required**: when setting `quotes[].person`, always set
`personSlug` if a matching entry exists in `participants.ts`. Without it,
JA pages will display the raw English `person` string instead of the
katakana mapping. Use `scripts/fill-person-slug.mjs` to backfill in bulk.

```yaml
# frontmatter
quotes:
  - id: "q1"
    person: "knightmb"
    personSlug: "michael-marquardt"
    date: "2010-08-15T22:59:04Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-15-knightmb-msg9574"
    parent: null
```

```markdown
<!-- body -->
<!-- quote: q1 -->
<!-- tone-skip -->
> 引用テキスト...
<!-- /tone-skip -->

本文テキスト...
```

`npm run check:quotes` validates this structure.

## 5. BitcoinTalk Emoji Labels

BitcoinTalk forum's text-based emoticon labels (`Smiley`, `Cheesy`, `Wink`,
etc.) must be converted to Unicode emoji. The original posters intended to
display emoji, not the English label words — the labels are only the alt
text from `<img alt="Smiley" />` tags that survived HTML-to-Markdown
scraping.

| Label | Emoji |
|-------|-------|
| Smiley | 😊 |
| Cheesy | 😁 |
| Grin | 😄 |
| Tongue | 😛 |
| Wink | 😉 |
| Roll Eyes | 🙄 |
| Huh | 😕 |
| Angry | 😠 |
| Embarrassed | 😳 |
| Cool | 😎 |
| Shocked | 😲 |
| Undecided | 😐 |
| Lips are sealed | 🤐 |
| Cry | 😢 |

Convert in both EN and JA files.

### Detection criteria

The conversion target is "BitcoinTalk emoticon alt text" — not "any
English word at end of line". Labels like `Cool` and `Cry` overlap with
normal English vocabulary, so context matters:

- An isolated word surrounded by spaces / punctuation that does not make
  sense as English in context → convert.
- A word used naturally in English prose → leave alone (e.g. `That's
  cool`).
- Automated detection has high false-positive rate; manual review at
  scrape time is required.

## 6. Voice

Preserve each speaker's register. Do not flatten distinct voices into the
same neutral Japanese tone.

### Principles

- Preserve meaning first. Also preserve tone where the source clearly
  supports it: concise, polite, blunt, warm, skeptical, casual, formal,
  or technical.
- Prefer natural Japanese over rigid word-for-word calques, but do not
  add drama, personality, or emotion that is not present in the source.
- In editor-written narrative entries such as aftermath pages, short
  translated quotations may be lightly smoothed for readability, but they
  should still sound like the same person.
- In primary-source entries, avoid "novelizing" the speaker. Keep the
  wording close to the source and let the original voice carry the
  personality.

### Frequent-participant voice notes

- `Satoshi Nakamoto`: concise, dry, understated, technical. Avoid
  theatrical phrasing.
- `Hal Finney`: warm, curious, encouraging, humane even when technical.
- `Adam Back`: terse, professional, low-friction.
- `Wei Dai`: analytical, matter-of-fact, epistemic hedging.
- `Martti Malmi`: polite, earnest, respectful, especially in early
  exchanges.
- `Gavin Andresen`: calm, practical, low-drama, solutions-oriented.
- `Laszlo Hanyecz`: casual, relaxed, conversational.
- `Ray Dillinger`: blunt, sharp, skeptical, but technically serious.
- `James A. Donald`: combative, probing, insistent.
- `Mike Hearn`: direct, reasoned, energetic, sometimes forceful.
- `Nick Szabo`: intellectual, essayistic, slightly formal.

### Do / don't

- Do keep differences in politeness, bluntness, and warmth when visible
  in the source.
- Do keep technical speakers technically precise.
- Do keep casual speakers casual when the source is casual.
- Do not make archive prose read like fiction.
- Do not add slang, swagger, or emotional intensity unless the source
  clearly justifies it.
- Do not over-normalize distinct voices into uniform textbook Japanese.

## 7. Japanese Tone (だ/である vs ですます)

The canonical tone rule for each character — whether to use だ/である調 or
ですます調 — is defined in `scripts/check-ja-tone.mjs` (`CHARACTER_RULES`).
Run `npm run check:ja-tone` to validate Japanese translations against
these rules.

### Summary

| Person | Tone | Notes |
|--------|------|-------|
| Satoshi Nakamoto | だ/である | 穏やか・抑制的 |
| Hal Finney | だ/である | 温かい楽観主義者 |
| Ray Dillinger | だ/である | 皮肉屋でぶっきらぼう |
| James Donald | だ/である | 攻撃的な懐疑論者 |
| Gavin Andresen | だ/である | 穏やかな実務家 |
| Martti Malmi | **ですます** | 丁寧で控えめ（意図的な色付け） |
| Adam Back | だ/である | 極めて簡潔 |
| Wei Dai | **ですます** | 丁寧・事務的・分析的 |
| Nick Szabo | だ/である | 学者口調 |
| Mike Hearn | だ/である | 情熱的で論理的 |
| Laszlo Hanyecz | だ/である | カジュアル |
| Dustin Trammell | だ/である | カジュアル・技術者同士 |
| Cøbra | だ/である | 反骨精神 |
| Craig Wright | だ/である | 尊大 |

When adding a new participant or changing a tone rule, update
`scripts/check-ja-tone.mjs` first — it is the single source of truth for
automated checks.

### Tone annotations

The tone checker supports HTML-comment annotations in markdown body text
to handle cases where the default author-based tone rule doesn't apply:

| Annotation | Effect |
|------------|--------|
| `<!-- tone-skip -->` | Start skipping tone checks (for quoted text, code, editorial narrative) |
| `<!-- /tone-skip -->` | Resume tone checking |
| `<!-- speaker: Hal Finney -->` | Override speaker for subsequent lines (use when quoting another person inline) |
| `<!-- speaker: reset -->` | Reset speaker to the frontmatter author |

Use `tone-skip` for content not authored by the entry's author: forwarded
emails, third-party quotes not in blockquotes, documentation excerpts, or
UI text examples. Every `tone-skip` should have a clear reason — do not
use it to silence genuine violations.

Use `speaker:` when one entry contains inline text by a different person
(e.g., Satoshi quoting Hal's words without blockquote formatting).

## 8. Technical Term Localization

**Principle:** Japanese body prose must read as Japanese. English
remaining in the prose is acceptable only when it falls into one of the
four categories listed in § 2 above. Otherwise it must be katakana-ized
or translated. Because individual-word enumeration is unbounded, this
section operates by category criteria, not by an exhaustive list.

### What must be katakana-ized or translated

In body prose (including table descriptions), the following must not stay
in English unless they fit § 2 categories:

- **General technical terms → katakana**: `ナンス`, `マイニング`,
  `マイナー`, `ブロック`, `ノード`, `フォーク`, `ハッシュ`,
  `ブートストラップ`, `トランザクション`, `ウォレット`, `タイムスタンプ`.
- **Foreign person names → katakana**: `ピート・リゾ`, `セルジオ・ラーナー`,
  `オッカム`, `サトシ・ナカモト` (separator: middle dot `・`; family /
  given order follows Japanese convention).
- **Abstract concepts → translation**: `categorical error` →
  `カテゴリー エラー` / `カテゴリーの誤り`; `well-defined` → `構造的に
  定まる` / `well-defined な` (with first-occurrence annotation if kept
  as a technical term); `epistemic` / `ontological` → `認識論的` /
  `存在論的` (or first-occurrence parenthetical such as `認識論的
  (epistemic) 層`); `bootstrap 初期化` → `ブートストラップ初期化`.

### Forbidden: redundant gloss

Do not write the same word in English **and** Japanese in body prose
multiple times in the same passage (e.g. `target-based（目標ベース）`
repeated).

- A single first-occurrence parenthetical such as `認識論的（epistemic）`
  is acceptable.
- After the first occurrence, use only one form.
- Within a single paragraph, do not present the same term in both English
  and Japanese.

### Decision flowchart

```
For each non-Japanese word in body prose:
├── Code identifier (inside backticks)? → keep English
├── Proper noun / brand / product name? → keep English
├── Standard abbreviation (PoW / UTXO / SHA-256 level)? → keep English
├── Citation source / metadata field? → keep English
└── Otherwise → katakana-ize or translate
    ├── General technical term → katakana
    ├── Person name → katakana (middle-dot separated)
    └── Abstract concept → use existing translation; if none, annotate
        first occurrence as `和訳 (English)`
```

### Common violations in practice

The table below illustrates frequent translation lapses. New cases apply
the flowchart above; do not extend this table on every new word.

| Violation (English left in body) | Correct form |
|---|---|
| `nonce 探索` | `ナンス探索` |
| `Pete Rizzo` | `ピート・リゾ` |
| `Lerner` | `ラーナー` (`セルジオ・ラーナー`) |
| `Occam の剃刀` | `オッカムの剃刀` |
| `epistemic 層` / `ontological 層` | `認識論的層` / `存在論的層` (first occurrence may include English in parentheses) |
| `bootstrap 初期化` | `ブートストラップ初期化` |
| `distributor` | `配布元` |
| `target-based（目標ベース）` | one form only (e.g. `ターゲットベース`) |
| `well-defined` (body prose) | `構造的に定まる` / `well-defined な` + first-occurrence annotation |
| `PoW headroom` | `PoW ヘッドルーム` (`PoW` stays per category 3) |
| `California州Coalingaに生まれ` | `カリフォルニア州コアリンガに生まれ` (US state and city names use katakana) |
| `Arizona州Scottsdaleで死去` | `アリゾナ州スコッツデールで死去` |
| `Vancouver` / `Berlin` / `Las Vegas` (in body prose) | `バンクーバー` / `ベルリン` / `ラスベガス` (foreign place names use katakana) |
| `California Institute of Technology` | `カリフォルニア工科大学` (the short form `Caltech` may be kept as a recognized proper-name abbreviation) |
| `Helsinki University of Technology` | `ヘルシンキ工科大学` |
| `Aalto University` | `アールト大学` |
| `Georgia Institute of Technology` | `ジョージア工科大学` |
| `PGP Inc.` / `PGP Corporation` | `PGP社` |
| `Symantec` | `シマンテック` |
| `Alcor Life Extension Foundation` | `アルコー延命財団` |
| `Extropy Institute` | `エクストロピー研究所` |
| `Block 70` / `Block 170` (body prose) | `ブロック 70` / `ブロック 170` |

The table is illustrative, not enumerative. New terms apply the
flowchart, not table extension.

Canonical mappings (long-term fixed translations such as `Schnorr`) live
in § II.3 Terminology Glossary below.

---

# II. Content Rules

Rules about what Japanese text says — titles, descriptions, cross-file
consistency.

## 1. Title Policy

The cross-language title policy (target audience, evaluation criteria,
per-category templates, cascade rules) lives in
`STYLE_GUIDE.md § Title Policy`. This section adds Japanese-specific
items only.

### Character count

- The practical SERP truncation point is **≤ 30 Japanese characters**.
  Longer titles still index in full (Google indexes the entire title
  field), so titles whose primary identifier appears in the first 30
  characters remain SEO/AIO-effective even when the total length exceeds
  30. Avoid superfluous commas and adjectives when adding context.

### Person names

Title-level person names follow § I.1 (`サトシ・ナカモト`,
`マイク・ハーン`, `ハル・フィニー`). Source of truth:
`src/i18n/participants.ts`.

### Quote handling in titles

- Direct quotation → `「…」`.
- Do not use a bare quote as the entire title; place an identifying
  context before it.

```
✗ 「他のことに取り組むことにした」
✓ サトシからマイク・ハーンへの最後のメール：「他のことに取り組むことにした」
```

### Per-category cascade rules

Japanese follows the per-category cascade rules defined in
`STYLE_GUIDE.md § Title Policy`. Summary:

| Directory | Reply cascade | JA title update scope |
|---|---|---|
| `forum/*` (BitcoinTalk and similar) | **Required** (`check:ja-titles` detects mismatches) | When the starter's title changes, update all `Re: …` replies in the same thread in the same commit |
| `emails/*` (mailing lists) | **Not required** (preserve original email Subject) | Update starter only; do not touch replies |
| `correspondence/*` | **Not required** (each entry independent) | Edit individually |
| `aftermath/`, `biography`, `bip`, `analysis`, `sourceforge` | N/A (no thread structure) | Edit individually |

### Reply title consistency (forum threads)

In `forum/*` threads, JA reply titles (`Re: ...`) must use the same
translation as the thread starter's JA title.

**Rule:** Inspect the thread starter's JA `title`. Update every reply
title in the same thread to `Re: {starter JA title}`.

**Bad:**

```
thread starter: title: "大規模なメルトダウン"
reply:          title: "Re: 大崩壊"          ← different translation
reply:          title: "Re: Major Meltdown"  ← untranslated
```

**Good:**

```
thread starter: title: "大規模なメルトダウン"
reply:          title: "Re: 大規模なメルトダウン"
reply:          title: "Re: 大規模なメルトダウン"
```

`npm run check:ja-titles` validates this for `forum/*`, with
**limitations**:

- It scans `src/data/translations/ja/forum/*` only (JA side; ignores EN).
- Mismatches are emitted as warnings, not build failures.
- Thread-starter detection is heuristic: the first non-`Re:` / non-`返信:`
  entry is treated as the starter. If a reply title is editorially
  rewritten without the `Re:` prefix, the checker treats it as a second
  starter and stops cascade validation. Do not strip the `Re:` prefix to
  evade the checker.

`emails/*` and `correspondence/*` are out of scope. After updating a
starter's title per the title policy, update the same thread's
`Re: {…}` replies in the same commit. Do not rely on the checker
warning as a gate; visually diff the whole thread before committing.
`scripts/fix-ja-reply-titles.mjs --apply` handles bulk updates.

### Mailing-list thread exception

In `emails/*` threads, the starter may be editorially retitled, but
**reply titles `Re: {original Subject}` stay unchanged**. The original
email Subject header is itself historical evidence:

```
starter (2008-10-31): title: "「Bitcoin P2P e-cash paper」— サトシのビットコイン初公開（2008-10）"
reply   (2008-11-01): title: "Re: ビットコイン P2P 電子キャッシュ論文"   ← original Subject translation, unchanged
```

## 2. Description Wording

In JA `description` fields, use these unified terms:

- `コンテキスト投稿` → **`文脈投稿`**
- `引用投稿` → **`文脈投稿`**
- `satoshi がスレッドを開始` → **`サトシ・ナカモトがスレッドを開始`**

## 3. Terminology Glossary

Japanese translations must use the canonical form for recurring technical
terms. Deprecated forms are detected by `scripts/check-ja-glossary.mjs`
and fail the build.

Scope: this is a JA-only concern (EN source is consistent). It applies to
body text, descriptions, titles, and any editorial prose.

### Trailing chouon (内閣告示 第 2 号, 2008)

Katakana words of three or more morae require a trailing chouon (`ー`).
The legacy "drop trailing chouon" convention from the old JIS Z 8301 is
no longer used in modern Japanese technical writing — Microsoft, Apple,
NHK, and Kyodo News all standardize on the trailing form.

| ✅ Canonical | ❌ Deprecated |
|---|---|
| コンピューター | コンピュータ |
| サーバー | サーバ |
| ユーザー | ユーザ |
| メモリー | メモリ |
| プロセッサー | プロセッサ |
| パラメーター | パラメータ |
| エディター | エディタ |
| フォルダー | フォルダ |
| ブラウザー | ブラウザ |
| アダプター | アダプタ |
| ヘッダー | ヘッダ |
| フィルター | フィルタ |
| レジスター | レジスタ |
| コンパイラー | コンパイラ |
| デバッガー | デバッガ |
| センサー | センサ |
| カウンター | カウンタ |
| コネクター | コネクタ |
| ルーター | ルータ |
| プロバイダー | プロバイダ |

### Translation unification

| English source | ✅ Canonical JA | ❌ Deprecated | Reason |
|---|---|---|---|
| cryptography mailing list | 暗号学メーリングリスト | 暗号技術メーリングリスト | Use `暗号学` as the field-of-study name |
| double spending | 二重支払い | 二重支出 / 二重使用 | |
| miner | マイナー | 採掘者 | Bitcoin context |
| wallet | ウォレット | 財布 | Bitcoin context |
| interface | インターフェース | インタフェース / インターフェイス | |
| block height | ブロック高 | ブロックの高さ / 高さ | Use `ブロック高` as a technical term; the literal `高さ` collides with general physical-height usage |
| Pieter Wuille | ピーター・ウィーユ | ピーター・ウィユ | Match `participants.ts` (long-vowel form) |
| Merkle root | マークルルート | merkleルート / Merkleルート | Code identifier `hashMerkleRoot` and surname `R.C. Merkle` are out of scope |
| Merkle tree | マークルツリー | マークル木 / merkleツリー / Merkle Tree | Use the all-katakana form. The MAST term `マークル化抽象構文木` is a separate concept |
| Merkle branch | マークルブランチ | マークル分岐 / merkleブランチ | Code identifier `getmerklebranch` and tag `merkle-branch` are out of scope |
| The Times (newspaper) | タイムズ | The Times (in body prose) | The genesis-block coinbase string `The Times 03/Jan/2009 Chancellor on brink of second bailout for banks` is preserved verbatim as historical record. `secondarySources` `name` fields are also preserved |
| signature (crypto) | 署名 | — | Schnorr / ECDSA / message-signing senses use `署名` as canonical |
| signature (pseudonym / byline) | 仮名 | 署名, ペンネーム | The pen-name sense (e.g. "the signature 'Satoshi Nakamoto'") collides with the cryptographic sense; use `仮名`. `ペンネーム` is also deprecated — it carries a writer/author register, too narrow for a pseudonym that covers system-design, implementation, and operational identity (Satoshi authored the whitepaper, but also the v0.1 codebase and the operational network). |
| signature (forensic fingerprint) | 指紋 | 署名 | Patoshi-style forensic fingerprints (e.g. mining signature, nonce signature) use `指紋` |

### Canonical mappings

Long-term fixed translations beyond the deprecation table above:

| English | Japanese | Notes |
|---|---|---|
| Schnorr (signature) | シュノア（署名） | Japanese Bitcoin community standard |

### Forbidden punctuation

#### `；` (full-width semicolon)

Japanese typography does not use the full-width semicolon. It almost
always appears as a mechanical full-width conversion of an English `;`
and must always be replaced. The replacement is context-dependent:

| Context | Use |
|---|---|
| Listing parallel items | `、` |
| End of a thought | `。` |
| Bridging clauses, supplementary remark | ` — ` (em dash) |
| Items distinct enough to stand apart | line break or bullet |

Bulk substitution is forbidden — every occurrence is judged in context.
The half-width `;` inside code blocks, frontmatter, URLs, and quoted
English text is out of scope (the source language allows it).

Enforced by `npm run check:ja-glossary` (rule: `；` → `、 / 。 / — / 改行`).

### Mermaid timeline labels — Japanese line wrapping

Mermaid wraps timeline labels only at ASCII whitespace. Japanese has no
inter-word spaces, so any unbroken Japanese span longer than the column
width overflows the box on render. Examples that overflowed in production:

| Unbroken span | Length | What rendered |
|---|---:|---|
| `サトシ最有力候補と名指される；` | 14 chars | First/last char clipped outside the box |
| `アンドレセンはチーフサイエンティスト` | 17 chars | Tail clipped, "(9月)" pushed off |
| `ヴラディーミル・ヴァン・デア・ラーンへ引き継ぎ` | 22 chars | Tail clipped, multi-line overflow |

`・` (middle dot) and `、` are **not** wrap points — Mermaid only breaks
at ASCII space `U+0020`. Insert ASCII spaces at semantic break points
inside long Japanese labels:

```text
✅  サトシ最有力候補と 名指される
❌  サトシ最有力候補と名指される

✅  ヴラディーミル・ ヴァン・デア・ラーンへ 引き継ぎ
❌  ヴラディーミル・ヴァン・デア・ラーンへ引き継ぎ
```

Threshold: any token containing CJK characters longer than **12
zenkaku** is flagged. The rule applies to all Mermaid block types
(timeline, flowchart, etc.), since the underlying wrap behavior is the
same. The `title` keyword line is exempt — title rendering uses a
different, wider layout.

Enforced by `npm run check:mermaid-ja-wrap` (runs as part of `npm run
check`). Pair with `npm run check:bios-rendering` (visual confirmation
via Playwright — requires `npm run dev` to be running and `playwright`
installed).

### Adding a new rule

1. Confirm that the same English term is being translated multiple ways
   in JA files.
2. Decide the canonical form (default: majority usage, or the
   government-recommended form per 内閣告示).
3. Add one row to the relevant table above.
4. Add a rule to the `RULES` array in
   `scripts/check-ja-glossary.mjs`:
   - Trailing chouon: `type: 'trailing-choon'` (uses negative lookahead
     to avoid partial-match false positives).
   - Direct substitution: `type: 'literal'`.
5. Migrate existing data
   (one-shot bulk edit: `perl -i -CSD -Mutf8 -pe '...'`).
6. Confirm with `npm run check:ja-glossary` that violations are zero.

Enforced by `npm run check:ja-glossary` (runs as part of `npm run
check`).

## 4. Cross-Project Consistency

When the same Satoshi-Nakamoto quote appears in multiple places (this
archive plus another translation venue, an academic citation, a book,
etc.), keep the Japanese translation consistent across venues so that a
reader citing one of them does not get a different wording from another.

This is a translation-quality concern, not a normative dependency on any
specific external project. Resolve any cross-venue discrepancy by
deliberate editorial choice — pick the most accurate translation and use
it everywhere — rather than by reference to a private or unverifiable
external document.

Canonical example — Satoshi's final message to Mike Hearn:

- English source: `"I've moved on to other things. It's in good hands
  with Gavin and everyone."`
- Archive JA: `「他のことに取り組むことにした。ギャビンたちに任せれば、安心だ」`

## 5. Translation Priority

When editing existing Japanese content, normalize in this order:

1. UI labels and page headings.
2. Titles and descriptions.
3. Biography and editor-written prose.
4. Legacy mixed usage inside older entries as they are touched.

Quotes and source text should not be rewritten just to match the house
style. See `STYLE_GUIDE.md § Consistency Rule` for the cross-language
version of this principle.

## 6. Technical-Review Robustness

Entries must withstand scrutiny from readers who know the subject. Before
publishing or committing edits, run a self-audit across the categories
below.

**In scope:**

- Technical facts (cryptography, protocol, source code, blockchain
  behavior, numeric specs).
- Historical facts (dates, citations, statements, numbers, sequences).
- Internal consistency (no contradictions within a single entry or
  across related entries).
- Arithmetic (elapsed time, BTC amounts, exchange-rate conversions,
  block heights — anything cross-checkable).
- Category alignment (do not mix different kinds of propositions under
  the same heading — e.g. "cause" and "activity during the period" are
  different questions and should not appear in the same hypothesis
  list).
- Fact / interpretation distinction (do not state interpretive framing
  as historical fact — explicit hedges such as "under this view," "in
  this reading" are required).
- Source traceability (every claim should be reachable from
  `secondarySources` / `sourceUrl`, or a named primary record).

**Out of scope** (handled elsewhere in this guide):

- Style preferences (handled per-section in this file).
- Translation register choices (see § I.6 Voice).
- Already-adopted editorial framing decisions.

**Bar:** Could a subject-matter-expert reader flag this passage for
factual error, failed cross-check, or category mixing? If yes, fix it
before the edit lands.

**Failure modes observed in past edits:**

- Arithmetic mismatch: writing `1/3 から 1/8 = 5 days`, but the actual
  endpoint is `1/9`. Wrong endpoint produces wrong duration.
- Category error: listing five "hypotheses" as parallel candidates when
  only one addresses cause and the other four address a different
  question (such as activity during the period).
- Interpretation stated as fact: writing a new or speculative reading as
  established history without hedging.
- Narrative dramatization leaking in: presenting speculative
  reconstruction as if it were eyewitness testimony.

### Factual claims about real people: every claim — quote or narrative —
needs a source

Factual claims about real people — direct quotations, paraphrases,
narrated actions, reactions, internal feelings, sequences of events,
sensory details, physical descriptions — must be verifiable from sources
listed in the entry's `secondarySources` / `sourceUrl`, or from a
publicly linkable primary record (mailing-list archive, forum post,
interview transcript, court document, published essay, etc.). Narrative
prose does not exempt a claim from verification — narrative voice is
*more* dangerous, because an unverified claim can blend invisibly into
editorial summary. **The rule fires on claims, not on punctuation.** A
quote dissolved into paraphrase or unmarked narration does not lose its
need for a source — it only hides the gap. If a claim cannot be
sourced, do not write it, even for "context" or "atmosphere."

**In scope of this rule:**

- Reconstructed dialogue, dramatized statements, imagined inner
  monologue.
- Narrated actions not in the cited source.
- Sensory / atmospheric details added for color (e.g. `the smell of
  coffee`, `the noise of fans`).
- Sequence implications not documented (who reacted to what, when).
- Body language and physical description written from inference rather
  than record.

**Out of scope of this rule** (handled elsewhere):

- Editorial analysis or interpretation of documented events (handled by
  the "fact / interpretation" distinction above).
- Summaries of cited sources where attribution is explicit.

**Mandatory verification step (not optional):**

Before writing a factual claim about a real person — in any form —
explicitly name the source: a URL, the `sourceUrl` field, a
`secondarySources` entry, or a named primary record. Then check whether
the intended claim is actually present in that source. This is not a
"do it when in doubt" principle; it is a **mandatory procedural step**.
Prolonged exposure to narrative reconstruction (novels, dramatizations,
documentaries, AI-generated biographical prose) erodes the boundary
between fictional and historical content in *both* directions — not
only does fiction get absorbed as history, but real quotes get
suspected as fabrications. The intuition "this feels canonical" / "this
feels invented" is unreliable in either direction. The verification
step exists because the intuition fails. If verification cannot be
performed, the claim **must not be written** — do not "rescue" it by
paraphrasing or by removing quotation marks.

---

# III. Operational Rules

Operational procedures for scripts that modify Japanese content —
including the existing-file preservation guarantee, SHA-1 verification,
BitcoinTalk fetching limits, and re-scrape guard — are documented
separately for readability:

→ See [`STYLE_GUIDE_JA_OPS.md`](STYLE_GUIDE_JA_OPS.md).

That document is the source of truth for any script that creates or
modifies entries under `src/data/translations/ja/`. The rules there are
required, not advisory.

---

# References

Cross-language rules (not duplicated here):

- `STYLE_GUIDE.md § Core Distinction: Blockquotes vs Quotation Marks`
- `STYLE_GUIDE.md § Primary-Source Entries` / `§ Editorial / Narrative Entries`
- `STYLE_GUIDE.md § Translation Principle`
- `STYLE_GUIDE.md § Consistency Rule`
- `STYLE_GUIDE.md § Related Entries`
- `STYLE_GUIDE.md § Participant Slug Convention`
- `STYLE_GUIDE.md § Biography Linking`
- `STYLE_GUIDE.md § Scripted Edits Policy`
- `STYLE_GUIDE.md § Review Rule: Duplicate ID Warnings`
- `STYLE_GUIDE.md § Title Policy`
