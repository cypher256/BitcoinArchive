# Japanese Style Guide

Internal editorial rules for the Japanese edition of Bitcoin Institute.

## Purpose

This file defines how Japanese-language pages should handle names and other
proper nouns so the site can be normalized over time without changing slugs,
URLs, or source metadata. Common cross-language editorial rules live in
`STYLE_GUIDE.md`.

## Core Rule

- In Japanese UI and editorial text, person names should be written in
  katakana.
- Canonical metadata, slugs, URLs, and source records remain in their original
  language.

## Where To Apply Katakana

Use katakana for person names in Japanese-facing editorial elements:

- UI labels that display person names
  - participant lists
  - participant page headings
  - author/participant lines on cards and entry pages
  - person-tag labels
- Edited Japanese copy
  - titles
  - descriptions
  - editor notes
  - biography prose
  - explanatory text written by the archive editor

## What Stays In The Original Language

Do not force katakana in the following cases — but **translate the content
itself into Japanese**. This section is about name rendering within translated
text, not about leaving entire passages in English.

- Person names inside direct quotes — use katakana, consistent with the
  rest of the Japanese text
- Source titles and publication names
- Organization, product, and project names when the original form is more
  natural
- Handles, pseudonyms, and brand-like identifiers
  - examples: `Cobra`, `theymos`, `COPA`, `Twitter`
- Slugs, URLs, file paths, and structured metadata fields

## Translation Completeness

All text on Japanese pages must be in Japanese, including quoted material.
The site provides language switching — users who want the English original
can switch to the English version. Do not leave English passages untranslated
in Japanese entries.

- Quoted emails, forum posts, and letters → translate into Japanese
- Blockquoted excerpts in aftermath/narrative entries → translate into Japanese
- Only preserve English for: URLs, code, commands, email headers, file paths,
  and similar technical strings where the original form is functionally
  necessary

## BitcoinTalk Emoji Labels

BitcoinTalk forum's text-based emoticon labels (`Smiley`, `Cheesy`, `Wink`,
etc.) must be converted to Unicode emoji. The original posters intended to
display emoji, not the English label words — the labels are only the alt
text from `<img alt="Smiley" />` tags that survived HTML-to-Markdown scraping.

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

The conversion target is "BitcoinTalk emoticon alt text" — not "any English
word at end of line". Labels like `Cool` and `Cry` overlap with normal English
vocabulary, so context matters:

- An isolated word surrounded by spaces/punctuation that does not make sense
  as English in context → convert
- A word used naturally in English prose → leave alone (e.g. "That's cool")
- Automated detection has high false-positive rate; manual review at scrape
  time is required

## Description Wording

In JA `description` fields, use these unified terms:

- `コンテキスト投稿` → **`文脈投稿`**
- `引用投稿` → **`文脈投稿`**
- `satoshiがスレッドを開始` → **`サトシ・ナカモトがスレッドを開始`**

## Quote Attribution Structure

New entries must use frontmatter `quotes[]` + body markers for quote
attributions. The following legacy patterns must NOT be written in body
text:

| Pattern | Typical source |
|---------|---------------|
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
structured metadata recorded in frontmatter `quotes[]`. `check-quotes.mjs`
detects legacy forms (`[Quote from:]` is currently enforced as an error;
the rest must be reviewed manually).

**`personSlug` is required**: when setting `quotes[].person`, always set
`personSlug` if a matching entry exists in `participants.ts`. Without it,
JA pages will display the raw English `person` string instead of the
katakana mapping. Use `scripts/fill-person-slug.mjs` to backfill in bulk.

### Prose attribution vs structured attribution

Sentences like "Satoshi wrote:" used as a narrative lead-in (in aftermath
or biography prose) are NOT quote attributions — they are normal English
prose. Do not structure these. In JA translations, render as natural
Japanese prose like "サトシは次のように書いた：".

```yaml
# frontmatter
quotes:
  - id: "q1"
    person: "knightmb"
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

詳細は `temp_0406_quote_normalization_plan.md` を参照。`npm run check:quotes`
がこの構造を検証する。レガシー形式はビルドエラーになる。

## Re-scrape / Re-generation Guard

When re-scraping or regenerating context posts (EN or JA):

1. **Before re-scrape**: create a backup branch of the current JA translations
   (`git checkout -b backup/ja-pre-rescrape`)
2. **After re-scrape**: run `git diff backup/ja-pre-rescrape -- src/data/translations/ja/`
   to identify any translation loss
3. **After re-translation**: run all JA checks before committing:
   - `npm run check:ja-names` — person names must be katakana
   - `npm run check:ja-titles` — context post titles must be Japanese
   - `npm run check:ja-tone` — tone rules must pass
4. **Manual review**: verify quote blocks match EN structure (same paragraphs quoted)

Re-scrape commits that overwrite existing JA translations without preserving
katakana names, translated titles, quote structure, and tone annotations are
considered regressions.

## Scripted Edits (Japanese Content)

Japanese Markdown body text should not be bulk-rewritten by scripts as a
normal workflow.

In particular, do not use scripts to:

- restore Japanese body text from older commits
- combine current frontmatter with body text copied from another revision
- rewrite quote blocks across many files at once
- mass-replace translated prose based only on filename matching
- repair tone or quote structure by blind global replacement

This is especially dangerous for Japanese entries because one bulk edit can
silently damage:

- translated quote structure
- tone-skip boundaries
- speaker annotations
- line breaks and paragraph rhythm
- internal links added after the older revision

Safe script usage for Japanese content is limited to:

- validation and mismatch detection
- read-only analysis
- narrowly-scoped metadata updates
- deterministic path and frontmatter changes

If a script flags a Japanese content issue, use the script to identify the
target files, then review and edit the content itself deliberately. Treat the
script as a detector, not as an auto-author of prose.

## Duplicate ID Warnings

Astro の `glob-loader Duplicate id` 警告は、デフォルトでは問題扱いしない。

次の場合は non-issue とみなす:

- `entries` と `entries_ja` の別 collection 間で相対 id が同じだけ
- 同一ファイルが重複読込されているように見えるだけで、内容差や実害の証拠がない

次の場合だけ review finding にする:

- 同じ collection 内の別ファイルどうしが同じ id に解決される
- 実際に上書き、欠落、誤ルーティングが確認できる

## Quotes And Blockquotes

- Follow the shared quote/block formatting rules in `STYLE_GUIDE.md`.
- A blockquote marks quoted or source-derived block content.
- `「…」` marks a direct quotation in Japanese prose.
- These do not mean the same thing and are often used together.

Use `「…」` in Japanese editorial prose when a quotation is being presented as a
spoken or written utterance.

- Inline quotations use `「…」`.
- Nested quotations use `『…』`.
- In narrative entries such as aftermath pages, short excerpted statements
  normally use `> 「…」`.
- In primary-source translations presented as the body of an email, letter,
  forum post, or log excerpt, blockquotes normally do not need `「」` unless the
  source or context specifically calls for them.
- Do not add `「」` to URLs, email headers, commands, log lines, handles, or UI
  strings unless they are being quoted as language.

### Quote Attribution Lines

BitcoinTalk quote attributions (`[Quote from: NAME on DATE]`) are structural
UI elements, not prose. Keep them in their original English form:

```markdown
> [Quote from: RHorning on December 04, 2010, 10:17:44 PM](https://...)
> 引用テキストは日本語に翻訳する。
```

Do not translate `Quote from:`, the person's name/handle, or the date format.
The quoted **body text** that follows is translated to Japanese as normal.

For mailing-list emails, the attribution line uses `NAME wrote:` format (e.g.,
`Hal Finney wrote:`). Keep this in English as well — it is an email reply
header, not prose.

| Source | Attribution format | Rule |
|--------|-------------------|------|
| BitcoinTalk | `[Quote from: NAME on DATE](URL)` | Keep English |
| Mailing lists | `NAME wrote:` | Keep English |
| Correspondence | `> ` inline quotes | Translate as body text |

## Voice And Register

- Preserve the speaker's register. Do not flatten every person into the same
  neutral Japanese voice.
- Preserve meaning first, but also preserve tone where the source clearly
  supports it: concise, polite, blunt, warm, skeptical, casual, formal, or
  technical.
- Prefer natural Japanese over rigid word-for-word calques, but do not add
  drama, personality, or emotion that is not present in the source.
- In editor-written narrative entries such as aftermath pages, short translated
  quotations may be lightly smoothed for readability, but they should still
  sound like the same person.
- In primary-source entries, avoid "novelizing" the speaker. Keep the wording
  close to the source and let the original voice carry the personality.

## Frequent Participant Voice Notes

- `Satoshi Nakamoto`: concise, dry, understated, technical. Avoid theatrical
  phrasing.
- `Hal Finney`: warm, curious, encouraging, humane even when technical.
- `Adam Back`: terse, professional, low-friction.
- `Wei Dai`: analytical, matter-of-fact, epistemic hedging.
- `Martti Malmi`: polite, earnest, respectful, especially in early exchanges.
- `Gavin Andresen`: calm, practical, low-drama, solutions-oriented.
- `Laszlo Hanyecz`: casual, relaxed, conversational.
- `Ray Dillinger`: blunt, sharp, skeptical, but technically serious.
- `James A. Donald`: combative, probing, insistent.
- `Mike Hearn`: direct, reasoned, energetic, sometimes forceful.
- `Nick Szabo`: intellectual, essayistic, slightly formal.

## Japanese Tone (だ/である vs ですます)

The canonical tone rule for each character — whether to use だ/である調 or
ですます調 in Japanese — is defined in `scripts/check-ja-tone.mjs`
(`CHARACTER_RULES`). Run `npm run check:ja-tone` to validate Japanese translations against
these rules. Once all violations are resolved, integrate into `npm run build`.

Summary:

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

### Tone Annotations

The tone checker supports HTML comment annotations in markdown body text to
handle cases where the default author-based tone rule doesn't apply:

| Annotation | Effect |
|------------|--------|
| `<!-- tone-skip -->` | Start skipping tone checks (for quoted text, code, editorial narrative) |
| `<!-- /tone-skip -->` | Resume tone checking |
| `<!-- speaker: Hal Finney -->` | Override speaker for subsequent lines (use when quoting another person inline) |
| `<!-- speaker: reset -->` | Reset speaker to the frontmatter author |

Use `tone-skip` for content that is not authored by the entry's author:
forwarded emails, third-party quotes not in blockquotes, documentation
excerpts, or UI text examples. Every `tone-skip` should have a clear reason —
do not use it to silence genuine violations.

Use `speaker:` when one entry contains inline text by a different person
(e.g., Satoshi quoting Hal's words without blockquote formatting).

### Running the Tone Checker

```bash
npm run check:ja-tone
```

This must pass with 0 violations before committing Japanese translations.
The checker flags lines where detected tone doesn't match the character rule.
Review each flag — some may be false positives (code, URLs, proper nouns
ending in です/ます patterns).

## Voice Do / Don't

- Do keep differences in politeness, bluntness, and warmth when they are
  visible in the source.
- Do keep technical speakers technically precise.
- Do keep casual speakers casual when the source is casual.
- Do not make archive prose read like fiction.
- Do not add slang, swagger, or emotional intensity unless the source clearly
  justifies it.
- Do not over-normalize distinct voices into uniform textbook Japanese.

## Cross-Project Consistency (Novel)

When the same Satoshi quote appears in both BitcoinArchive and NovelBitCoin,
the archive's Japanese translation should match the novel's translation. The
novel defines each character's voice in `bitcoin-novel_キャラ設定.md`; Satoshi's
tone is 冷静で論理的、感情を表に出さない、業務連絡的な淡々さ (calm, logical,
emotionless, matter-of-fact).

Canonical example — Satoshi's final message to Mike Hearn:
- English source: "I've moved on to other things. It's in good hands with
  Gavin and everyone."
- Novel JA: 「他のことに取り組むことにした。ギャビンたちに任せれば、安心だ」
- Archive JA: must match the novel version above.

## Translation Priority

When editing existing Japanese content, normalize in this order:

1. UI labels and page headings
2. Titles and descriptions
3. Biography and editor-written prose
4. Legacy mixed usage inside older entries as they are touched

Quotes and source text should not be rewritten just to match the house style.

## Canonical Name Handling

- Keep the canonical person name in metadata as the original-language form.
- Japanese display forms should be treated as presentation-layer values.
- If a name appears in both English and katakana inside the same editorial
  sentence, prefer the katakana form unless the English spelling is
  informationally necessary.

## Working Rule For Existing Mixed Content

- Mixed legacy usage currently exists across the Japanese archive.
- When modifying an entry, normalize the touched Japanese editorial text to this
  guide.
- Avoid unrelated rewrites of quoted source text.

## Technical Term Localization

Technical terms that have established Japanese katakana forms should use the
katakana form in Japanese editorial text and descriptions. Terms that are
universally used in their English form in the Japanese Bitcoin community (e.g.,
Bitcoin, blockchain, hash, nonce) stay in English.

### When To Use Katakana

- The term has a widely recognized katakana form in Japanese technical writing
- Using the English form would make the Japanese text harder to read
- The term refers to a concept (algorithm, protocol, cryptographic scheme)
  rather than a product name or brand

### What Stays In English

- Product names, protocol names, and brand identifiers: Bitcoin, Taproot,
  SegWit, Lightning Network
- BIP titles and formal specification names (keep original for precision)
- Tags, slugs, URLs, and metadata fields
- Secondary source names and URLs
- Terms universally used in English in the Japanese Bitcoin community:
  hash, nonce, mining, block, node, fork, P2P, ECDSA, SHA-256

### Canonical Mappings

| English | Japanese | Notes |
|---------|----------|-------|
| Schnorr (signature) | シュノア（署名） | Japanese Bitcoin community standard |

Add new entries to this table as they arise. When in doubt, check how
bitcoin.org/ja, bitcoinops.org, and major Japanese Bitcoin media use the term.

## Example Mappings (Person Names)

- `Satoshi Nakamoto` -> `サトシ・ナカモト`
- `Hal Finney` -> `ハル・フィニー`
- `Nick Szabo` -> `ニック・サボ`
- `Adam Back` -> `アダム・バック`
- `Wei Dai` -> `ウェイ・ダイ`
- `Jeff Garzik` -> `ジェフ・ガージック`
- `Gavin Andresen` -> `ギャビン・アンドレセン`
- `Martti Malmi` -> `マルッティ・マルミ`
- `Mike Hearn` -> `マイク・ハーン`
