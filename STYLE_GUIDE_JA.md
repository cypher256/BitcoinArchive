# Japanese Style Guide

Internal editorial rules for the Japanese edition of Bitcoin Archive.

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

Do not force katakana in the following cases:

- Direct quotes
- Primary-source text such as emails, forum posts, and letters
- Source titles and publication names
- Organization, product, and project names when the original form is more
  natural
- Handles, pseudonyms, and brand-like identifiers
  - examples: `Cobra`, `theymos`, `COPA`, `Twitter`
- Slugs, URLs, file paths, and structured metadata fields

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
(`CHARACTER_RULES`). The build script `npm run check:ja-tone` validates all
Japanese translations against these rules.

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

## Example Mappings

- `Satoshi Nakamoto` -> `サトシ・ナカモト`
- `Hal Finney` -> `ハル・フィニー`
- `Nick Szabo` -> `ニック・サボ`
- `Adam Back` -> `アダム・バック`
- `Wei Dai` -> `ウェイ・ダイ`
- `Jeff Garzik` -> `ジェフ・ガージック`
- `Gavin Andresen` -> `ギャビン・アンドレセン`
- `Martti Malmi` -> `マルッティ・マルミ`
- `Mike Hearn` -> `マイク・ハーン`
