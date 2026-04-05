# Bitcoin Institute Style Guide

Internal editorial rules shared across Bitcoin Institute.

## Purpose

This file defines cross-language editorial conventions that should stay
consistent across the archive. Language-specific rules belong in companion
files such as `STYLE_GUIDE_JA.md`.

## Scope

These rules apply to:

- editorial intros and summaries
- aftermath entries
- biographies
- translated entries
- source-derived formatting decisions

## Core Distinction: Blockquotes vs Quotation Marks

- A blockquote marks block-level quoted or source-derived content.
- Quotation marks mark quoted words inside the language of the page.
- These are not interchangeable.

In other words:

- `>` / `<blockquote>` answers: "this block is quoted or excerpted material"
- quotation marks answer: "these words are being presented as a direct quote"

## Primary-Source Entries

For emails, letters, forum posts, release notes, and similar primary-source
documents:

- preserve source structure where practical
- use blockquotes for quoted/source text
- do not add extra quotation marks by default just because the text is in a
  blockquote
- keep headers, logs, commands, URLs, UI labels, and code-like strings in the
  form that best matches the source

Use extra quotation marks only when the source itself uses them or when a short
excerpt is being called out as a quoted utterance rather than presented as the
body of the source.

## Editorial / Narrative Entries

For editor-written narrative entries such as aftermath pages, biographies, and
retrospectives:

- when excerpting a short direct quote inside the article narrative, use a
  blockquote plus the language-appropriate quotation marks
- when presenting a longer source passage or document-style excerpt, a
  blockquote alone is usually enough

Typical pattern:

- English: `> "..."` for short excerpted speech or statements
- Japanese: `> 「...」` for short excerpted speech or statements

## Translation Principle

When translating quoted material, preserve the function of the formatting, not
just the original glyphs.

- If the source block functions as document body text, keep document-style
  formatting.
- If the source block functions as a highlighted utterance in narrative prose,
  use the target language's quotation punctuation.

## Consistency Rule

- Do not rewrite untouched legacy material just for stylistic cleanup.
- When an entry is being edited, normalize the touched portion to this guide.
- If a category develops a strong established pattern, follow that pattern
  unless there is a clear reason to improve it.

## Scripted Edits Policy

Scripts are allowed for inspection, reporting, and tightly-scoped metadata
updates. Scripts are **not** the default tool for rewriting Markdown prose.

Allowed without special justification:

- validation and reporting scripts
- read-only inventory scripts
- path renames and directory moves
- narrowly-scoped frontmatter updates
- deterministic updates to clearly structured metadata fields

Do not use scripts for:

- replacing or restoring Markdown bodies in bulk
- copying old body text from earlier commits into current files
- bulk rewriting translated prose
- mechanically rebuilding quote blocks, tone annotations, or paragraph layout
- any change that mixes current frontmatter with old body content

If a task affects quoted text, translation wording, blockquote structure,
paragraph breaks, or tone, treat it as content editing work, not as a bulk
script migration.

When a script-assisted content change is unavoidable:

- keep the write scope minimal and structurally precise
- verify on a representative sample before applying broadly
- review the resulting diff file by file
- run the relevant checks after the change

The default rule is:

- scripts may propose changes
- humans approve and review content changes
- bulk prose rewrites require especially strong justification

## Review Rule: Duplicate ID Warnings

Do not treat Astro `glob-loader Duplicate id` warnings as findings by default.

These warnings are non-issues when they are caused by:

- matching EN/JA relative ids across separate collections
- repeated loading of the same file without evidence of divergent content

Only raise a finding if:

- two different files in the same collection resolve to the same id
- content is actually overwritten, missing, or routed incorrectly

## Language-Specific Guides

- Japanese-specific rules: `STYLE_GUIDE_JA.md`
