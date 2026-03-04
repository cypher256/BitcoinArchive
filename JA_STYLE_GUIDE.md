# Japanese Style Guide

Internal editorial rules for the Japanese edition of Bitcoin Archive.

## Purpose

This file defines how Japanese-language pages should handle names and other
proper nouns so the site can be normalized over time without changing slugs,
URLs, or source metadata.

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
- `Gavin Andresen` -> `ギャビン・アンドリーセン`
- `Martti Malmi` -> `マルッティ・マルミ`
- `Mike Hearn` -> `マイク・ハーン`

