# Bitcoin Institute Style Guide — Core

The editorial rules every entry in this archive is written to.

**This is the always-required tier of the style guide, split from a single `STYLE_GUIDE.md` on 2026-08-25 to keep the mandatory read smaller.** Read this file in full before any editorial action, per the Read-the-Guide Gate in `CLAUDE.md`. Two companion files hold situational detail, consulted only when the task actually touches their scope:

- **`STYLE_GUIDE_REFERENCE.md`** — entry-type-specific and situational rules: Title Policy, Description Policy, Entry Dates, Related Entries, Participant Slug Convention, Participant Avatars, Biography Linking, Participant-Page Callout, Parent Link, Design-Document Series Navigation, Auto-Link Keywords, Scripted Edits Policy, Review Rule: Duplicate ID Warnings, Technical-Review Robustness. Read when a task touches one of these.
- **`STYLE_GUIDE_VISUAL.md`** — Mermaid/d3 implementation and layout: Layout Width Policy, Design Tokens, Visual Representation. Read when creating or editing a chart, diagram, or table.

## Purpose

This file defines cross-language editorial conventions for Bitcoin
Institute content. It is the project's **content and configuration
conventions** — the editorial equivalent of a coding-standards
document.

**What this guide is.** Editorial judgments humans must apply when
authoring or editing content: how to title an entry, when an article
warrants a standalone aftermath, how to handle quotation form across
languages, which marker form belongs to which role, and so on.
Conventions for frontmatter and configuration. Cross-cutting
decisions that span multiple entries.

**What this guide is not.** Not a design document for the
implementation. Not a manual for "how the renderer / script works."
Not a duplicate of rules already enforced by scripts (the script is
the rule there; the guide need not restate the enforcement
mechanism). When this guide references file paths, script names,
or component names, those references are pointers for editors who
want to look deeper — not a spec maintained alongside the
implementation.

Language-specific rules belong in companion files such as
`STYLE_GUIDE_JA.md`.

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

This section is the top-level partition between "quoted material" and
"the editor's own words." For the editor's-own-words side, the
[Editorial Markers](#editorial-markers) section below defines the
canonical sub-categories (page-level note, in-body interpretation,
in-body context, source attribution, quotation metadata, and the
untouchable original-poster edit notes).

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

**Original-poster edit notes are part of the source record.** Markers like
`edit:`, `[edit]`, `Edit:`, `編集:`, `[編集]` written by the original
author of a forum post, mailing-list message, or private email are part
of the historical record and must not be normalized as if they were
Archive editor notes. See category **F** in the
[Editorial Markers](#editorial-markers) section.

### Body must contain the actual source content — no placeholder bodies

A primary-source entry's body must hold the actual source content
(email body, forum post text, BIP body, release notes — verbatim in
the canonical-locale file, translated in the JA mirror). Editor-only
placeholder bodies that summarize the source and direct the reader to
the source URL are forbidden: they violate the about-page
content-preservation policy (*archived content persists permanently
even when the original source URL becomes unavailable*) and hold
nothing of value the moment the source URL goes down.

If the source content is not yet imported, fetch it before writing
the entry. Available fetch scripts (BitcoinTalk thread-starters,
context-post replies, replies to Satoshi, Satoshi Nakamoto Institute
archive, GitHub Satoshi mentions) are inventoried in
[`STYLE_GUIDE_JA_OPS.md`](STYLE_GUIDE_JA_OPS.md). When no existing
script covers the target source, retrieve the page directly (browser,
`curl`, or `WebFetch`) and paste the content into the entry body.
Editor framing (`*[Editor: ...]*`, `*[Context: ...]*`) goes around
the actual content as supplementary context, never as a substitute
for it.

### No editor narrator inside primary-source bodies

A primary-source entry (type `correspondence`, `mailing-list`,
`forum-post`, `bip`, `whitepaper`, `court-document`) must not carry
editor narrator prose interleaved with the source content. This means
**no `<!-- speaker: narrator -->` blocks, no editor-voice paragraphs
between quoted lines, no editor framing of the email as if from
outside.** The reader opens a primary-source entry expecting to read
the source itself, not an article about the source.

What is allowed inside a primary-source body:

- the verbatim source content, in its native blockquote / plain-text
  / list / heading structure as appropriate to the source format
- `<!-- speaker: ... -->` markers naming the actual speaker (the
  person who sent the email or wrote the post) — these are quotation
  metadata, not editor commentary
- short editor-note blocks (`*[Editor: ...]*` / `*[Context: ...]*` /
  `*[編者注：...]*` / `*[補足：...]*`) bracketing the source as
  supplementary context — exactly as for any other editor note,
  bounded and explicitly tagged, never narrating the source from the
  outside

If the editorial framing is substantial — a multi-paragraph narrator
account of who sent what to whom and why it mattered, with the email
text quoted as evidence — the entry is an **editorial article**, not
a primary source. Author it as `type: article` and place it under
`aftermath/` (or `analysis/` if the framing is interpretive
analysis). The corresponding raw email body, if quotable in full,
goes in a separate primary-source entry under `correspondence/` /
`emails/` / etc., and the article's `quotes[].sourceEntryId` and
`relatedEntries` link to that primary entry.

This split keeps directory semantics honest. The
`correspondence/`, `emails/`, `forum/`, `bip/`, `whitepaper/`, and
`court-document/` directories are the archive's record of what was
actually written, in the words of the actual writer. Thread pages
collate these into the conversation form. Editorial commentary lives
under `aftermath/` and `analysis/`, and reaches the primary sources
it discusses via `relatedEntries` and `quotes[].sourceEntryId`, not
by sharing a directory with them.

The thread-page filter in `src/data/threads.ts` enforces the same
split at the rendering layer: `resolveThreadId()` returns `undefined`
for editorial types (`article` / `analysis` / `biography` / `design` /
`currency`), so even
an editorial entry mistakenly placed under a primary-source directory
does not appear in the thread view alongside the primary sources it
references.

## Editorial Entries (article / analysis / biography / design / currency)

The archive's entry types split into two groups:

- **Primary-source types** (8) — `correspondence`, `mailing-list`,
  `forum-post`, `bip`, `whitepaper`, `court-document`, `tweet`,
  `web-document`. The body holds the verbatim source content. Rules in
  [§ Primary-Source Entries](#primary-source-entries) apply.
  `web-document` is a participant's own self-published web document
  (blog post / comment, personal-site essay, or standalone page),
  reproduced verbatim — e.g. Nick Szabo's bit gold and Satoshi's early
  bitcoin.org page. Judge it on the same verbatim-vs-editorial axis as
  the other primary types (is the body the source document, or Bitcoin
  Institute's reading?), not on "contemporaneous vs retrospective": a
  participant's retrospective web document, reproduced verbatim, is
  still `web-document`; third-party coverage (journalist, encyclopedia)
  of a participant stays editorial.
- **Editorial types** (5) — `article`, `analysis`, `biography`, `design`,
  `currency`. The body is Bitcoin Institute's own writing about the subject.
  This section governs them.

Tweets (`type: tweet`) are X / Twitter posts archived verbatim under
`src/data/entries/en/tweets/<author-slug>/<date>-<short-slug>.md`.
The entry frontmatter carries an `xHandle` field (bare handle without
the leading "@", e.g. `halfin`, `CobraBitcoin`), enforced by
`scripts/check-tweet-metadata.mjs` and rendered as a linked "@handle"
badge in EntryMeta. Editorial commentary about a tweet lives in a
separate `type: article` entry under `aftermath/` that quotes the
primary via `quotes[].sourceEntryId`.

The split is hard: a body composed of editor narrative belongs in an
editorial type, and a body composed of verbatim source content belongs
in a primary-source type. Mixing them in a single entry violates
[§ Primary-Source Entries](#primary-source-entries) — split into two
entries instead, linked via `relatedEntries` and
`quotes[].sourceEntryId`.

### Body section heading levels — start at `##`

Editorial body sections start at `##` (h2), never `###` as the top
level. The body mounts under the page's single `<h1>` — the entry
title on an entry-detail page, the participant name on a biography's
participant page (`/participants/<slug>/`) — so a top-level `###`
skips h2 and breaks the heading outline (a screen-reader / SEO /
table-of-contents defect). Use `##` for top-level sections; reserve
`###` for genuine subsections nested under an `##`. Applies to every
editorial type (`article`, `analysis`, `biography`, `design`).

Biographies are the historical trap. An earlier pass converted
bold-with-colon section markers (`**White Paper:**`) to `###` to make
them real headings — right about heading-vs-bold, wrong about level:
under the participant-page `<h1>` it produced an H1 → H3 skip across
the whole biography set. The corrected convention is `##`.

### Body content: Bitcoin Institute writes the body, not the subject

The body of an editorial entry is Bitcoin Institute's editorial
reading, not the subject's words. The subject (the person, document,
or event the entry is about) is named in `participants[]` and
referenced from the body; any direct quotation from the subject is
held inside `quotes[]` + `<!-- quote: qN -->` markers per
[§ Editorial Markers](#editorial-markers) (E).

What an editorial body should contain:

- A substantive editor narrative carrying the reading, interpretation,
  or compiled account. This is the entry's actual content.
- Short blockquote excerpts of the subject's words (per the quotation
  form rules below), each anchored to a `quotes[]` entry.
- Markdown links to participants and related archive entries. External
  sources that support the reading are named in the body as plain text and
  listed in `sourceUrl` / `secondarySources[]`; editorial body prose does
  not carry clickable external URLs.
- Visual structure (Mermaid timelines, tables, d3 components) where
  the content shape calls for it
  (see [§ Visual Representation](#visual-representation)).

What an editorial body must **not** be:

- A bare blockquote plus one or two `*[Context: ...]*` / `*[補足：...]*`
  notes with no editor narrative. That is a placeholder body: the
  in-body context markers ([§ Editorial Markers](#editorial-markers)
  category D) are **supplementary annotation around the body**, never a
  substitute for the body itself. An editorial entry whose only prose
  is in `*[Context: ...]*` blocks is unfinished.
- An editor-voice rewrite of the source content. Quote the source
  inside a blockquote; let the editor narrative around the blockquote
  carry the reading.
- A section that restates what the page has already said. A body
  section must add information beyond what the lead and earlier
  sections carry. Restating the lead's facts in near-identical
  wording (a biography lead and a later section retelling the same
  reply, the same quote, the same speculation) pads the page and
  leaves two copies of one fact to drift apart under later edits.
  State each fact fully once, in the place a reader needs it most;
  where another section needs it again, refer back briefly instead
  of retelling it.

### Page-level lead and closing paragraphs

Editorial entries do not require a universal `Summary`, `Conclusion`,
or `Author's framing` section. A lead and a closing paragraph are
reader-facing prose decisions, not fixed navigation components.

- **`article` / `aftermath`:** when a dated result or change is the
  point of the page, lead with the confirmed event or result, then
  explain what changed and why the record matters.
- **`analysis`:** enter through a concrete record, contrast, quotation,
  or question. Do not make the entire conclusion, evidence, and limits
  unnecessary by placing all of them in the lead; the body should still
  do the explanatory work.
- **`biography`:** lead with a documented act, statement, or role rather
  than a personality summary.
- **`design`:** lead with code, specification, constraint, or a concrete
  design consequence.
- **`currency`:** lead with the definition, issuance or use record, or a
  concrete difference from another currency.

The lead must make the subject and the point of entry clear. The choice
of a concrete record, result, contrast, or question is per page; do not
mechanically add the same greeting, reaction, or summary to every entry.
Primary-source entries remain governed by the preservation rules above:
their body is the source record, not a place for an editor's greeting,
conclusion, or closing commentary.

If an editorial page needs a final word after its last section, keep it
as a prose paragraph separated from that section. Do not add a repeated
heading or horizontal rule merely to announce the ending. A blank line
in Markdown establishes the paragraph boundary. When the rendered page
needs more visual separation, place the semantic `<!-- entry-closing -->`
marker immediately before that Markdown paragraph. The marker gives the
rendered paragraph the closing style; do not write a raw `<p>` block around
prose, because Markdown links and emphasis inside a raw HTML block are not
parsed as ordinary Markdown.

When the editorial framing for a primary source is substantial enough
to warrant a full editorial entry, follow the split rule from
[§ Primary-Source Entries](#primary-source-entries): create a separate
`type: article` entry under `aftermath/` (or `type: analysis` under
`analysis/`, or `type: design` under `design/`) and link it back to the raw primary entry via
`quotes[].sourceEntryId` and `relatedEntries`.

### Quotation form inside an editorial body

When excerpting the subject's words (or a third-party voice) inside
the editor narrative, choose between inline quotation marks and a
standalone blockquote based on what the quote is doing on the page,
not on length alone:

- **Blockquote** — for a quote that functions as the page's primary
  exhibit (the statement the surrounding analysis directly examines
  or rests on) or that is genuinely iconic to the subject. Use
  `> "..."` (English) / `> 「...」` (Japanese) for a short excerpted
  statement; for a longer source passage or document-style excerpt,
  the blockquote alone (no added quotation marks) is usually enough.
- **Inline quotation marks** — the default for a short quote woven
  into argumentative or narrative prose: supporting evidence cited in
  passing, a secondary voice quoted alongside the subject, or a
  precise phrase quoted for accuracy rather than presented as an
  exhibit. An editorial entry commonly cites many short phrases from
  several speakers; blockquoting every one of them fragments the
  prose and buries the quotes that actually matter. Reserve
  blockquote treatment for the few that earn it.
- The blockquote contents must be the primary-source text only.
  Editor-added attribution lines (e.g., "— [Wikipedia](url)" /
  "— bitcoin.org, [release notes](url)" / "（[出典](url)）") must be
  placed **outside** the blockquote on a separate paragraph. Inside
  the blockquote = primary-source voice; outside the blockquote =
  editor's voice. Mixing them inside the same `>` block creates the
  false impression that the cited work named its own URL — and
  triggers the URL-de-link rule below on the editor's attribution
  link.

External URLs inside a blockquote are stripped of clickability at
render time by `src/lib/rehype-strip-archive-links.mjs`: the URL text
is preserved (copy-pasteable), but the user is not invited to click.
This matches the practice of print archives and academic citation
conventions for historical source URLs that may have suffered link
rot. Editor-added attribution links outside the blockquote must also be
moved to `sourceUrl` / `secondarySources[]`, leaving the source name and
relevant fixed commit, file, function, or line range as plain text.
Internal archive links (`/BitcoinArchive/...`) remain clickable.
External URLs in editor-note blocks (`*[Editor: ...]*` /
`*[Context: ...]*` / `*[編者注：...]*` / `*[補足：...]*`) are not an
exception: move them to the citation fields and leave the note itself
without an external link.

#### Editorial prose body external links

For editorial entry types (`article`, `analysis`, `biography`, `design`,
and `currency`), editor-selected external `http://` and `https://` URLs are
not permitted in the body. This covers Markdown links, autolinks, HTML
anchors, and bare URLs that a Markdown renderer could make clickable. Move
each source URL to `sourceUrl` or `secondarySources[]`, keep the source name
as plain text, and retain fixed commits, filenames, function names, and line
ranges in the body as plain text. A source exhibit — code repository, paper,
specification, CVE, or primary-record archive — is still a citation, not an
exception to this rule. `SourceCitation` at the bottom of the entry is the
only clickable external citation surface.

URLs that are part of a preserved primary-source body remain in that body,
including `forum`, `correspondence`, `emails`, `blog`, `bip`, and other
verbatim records. URLs inside a blockquote in an editorial entry are also
preserved as source text. The renderer makes those historical URLs
non-clickable without changing the Markdown. External URLs inside an
editor-note are never preserved as a clickable exception; move the chosen
citation to the frontmatter and leave the note as plain text. Internal
archive links remain allowed in editorial prose and editor notes.

EN and JA mirrors must carry the same combined URL set across `sourceUrl`
and `secondarySources[]`; source names and notes are written naturally in
each language, while fixed commit, file, function, and line-range details
identify the same source range in both.

### Frontmatter `author` semantics

The meaning of the top-level `author` field depends on the entry's
type. The two-axis design — frontmatter `author` separate from the
on-page byline — lets the entry list cards surface the *subject* the
entry is about while the entry page itself shows Bitcoin Institute as
the editorial voice.

| Type group | `author` holds | On-page byline (`EntryMeta`) | List card byline (`EntryCard`) | OG / JSON-LD `article:author` |
|---|---|---|---|---|
| Primary-source (7) | the actual writer (email sender, forum poster, BIP author, tweet author, etc.) | `author` verbatim | `author` verbatim | `author` verbatim |
| `article` / `analysis` / `design` | the **subject** the entry is about (the person, document, or event the editorial reading covers) — falls back to `"Bitcoin Institute"` when no single subject exists (see exception below) | **Bitcoin Institute** (forced by type) | `author` verbatim (subject, or `"Bitcoin Institute"` for no-single-subject entries) | **Bitcoin Institute** (forced by type) |
| `biography` | the **subject of the biography** (the person whose biography this is) | (no `/entries/{id}/` page; biography renders inside the participant page, where no byline is shown) | `author` verbatim (subject) | (no entry page; participant page handles its own metadata) |

For `article` / `analysis` / `design`, the forced byline is implemented
in `src/components/EntryMeta.astro` and the forced OG / JSON-LD author
is implemented in `src/pages/entries/[...slug].astro` (and the JA
mirror). Both branches key on `isEditorialType` (`article || analysis || design`).

For `biography`, no `/entries/{id}/` page is generated
(`src/pages/entries/[...slug].astro` filters biographies out at
static-path generation); the biography body is mounted inside
`src/pages/participants/[participant].astro`. The frontmatter
`author` field on a biography therefore has no on-page render path —
it stays present for schema completeness and listing-card display.

#### Exception: editorial entries without a single subject

Some `article` / `analysis` / `design` entries are not anchored to one
named person. Broad analyses (cross-chain genealogies, multi-candidate
overviews, lineage maps), design documents (system-overview pages,
domain-specific architecture readings), technical-event articles (a
software release, a dependency swap, a protocol parameter change), and
multi-actor incident articles all lack a single subject the way the
genesis-block article has "Satoshi Nakamoto" as its subject.

For these, `author: "Bitcoin Institute"` is the canonical value: it
signals "no single subject — this entry is Bitcoin Institute's
editorial reading of a topic that doesn't reduce to one person."

The entry-list card then surfaces "Bitcoin Institute" instead of a
person name, which is the correct read for a no-single-subject
entry. The on-page byline and OG / JSON-LD layers are unaffected
(they are already forced to Bitcoin Institute by `type`).

Use the subject form when a single person is clearly the anchor;
fall back to `"Bitcoin Institute"` only when no such anchor exists.
Do not use `"Bitcoin Institute"` to avoid choosing among multiple
subjects — if an article has a primary actor (e.g. a hypothesis-page
analysis focused on one candidate), name that actor as `author`.

Worked examples:

```yaml
# A primary-source email Satoshi wrote
type: correspondence
author: "Satoshi Nakamoto"    # the actual sender
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Adam Back"
    slug: "adam-back"

# An editorial reading of the genesis-block event
type: article
author: "Satoshi Nakamoto"    # the subject the article is about
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"

# A broad-analysis page covering many cypherpunks
type: analysis
author: "Bitcoin Institute"   # no single subject — exception clause
participants:
  - name: "Adam Back"
    slug: "adam-back"
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Hal Finney"
    slug: "hal-finney"
  # ... etc

# Hal Finney's biography
type: biography
author: "Hal Finney"          # the subject of the biography
participants:
  - name: "Hal Finney"
    slug: "hal-finney"
```

### Hero Images

Every editorial entry (`article`, `analysis`, `biography`, `design`)
carries a hero illustration, embedded as a plain markdown image
immediately below the frontmatter's closing
`---`, before the first body paragraph:

```md
![<alt text>](/BitcoinArchive/images/analysis/<slug>-hero.png)
```

Primary-source types (`correspondence`, `mailing-list`, `forum-post`,
`bip`, `whitepaper`, `court-document`, `tweet`, `web-document`) never
get a hero image — their body is verbatim source content, and an
editorially-generated illustration would misrepresent that.

`design` entries need no special placement rule despite carrying a
large `DesignSeriesNav` box: that box is layout chrome rendered
between `EntryMeta` and `<Content />` (see `src/pages/entries/[...slug].astro`),
not part of the markdown body, so an image placed at the top of the
body — same rule as every other editorial type — always renders
after it.

**Generation**:

- Work from the **EN-locale** body, never the JA translation: the two
  locales share one image file, so any text that ends up inside the
  image must be English.
- Require: ~1600×900 PNG (an SVG rendered via a headless browser is
  the usual path), no real human face or photographic likeness of
  any named person, and all in-image text labels in English only
  (the image is shared by both locale pages).
- Save to `public/images/analysis/<slug>-hero.png` regardless of the
  entry's actual type directory (`aftermath/`, `design/`, etc.) — the
  directory name predates this feature's scope beyond `analysis` and
  is kept for path stability across already-shipped entries.
- **Zero the body margin before screenshotting.** The usual path —
  Playwright's `page.setContent(svg)` followed by `page.screenshot()` —
  drops the SVG into a body that still carries the browser default
  `margin: 8px`. The screenshot then captures 8 px of white along the
  left and top edges, and clips 8 px off the right and bottom. Wrap the
  SVG in a document that sets `html,body{margin:0;padding:0}` (and
  paints the page background behind it) before taking the shot. Each
  regeneration writes a fresh render script, so this has to be restated
  in the generation request every time — it is not a one-off fix.

**Verify before committing a hero image**: the defect above is easy to
miss on a dark page. Read the corner and edge pixels rather than
eyeballing the thumbnail — all four edges should be the image's own
background colour, never `#ffffff`, and the render must be exactly
1600×900. A shifted-by-8px render is 1600×900 too, so size alone does
not prove it is correct. Then look at the image itself for the errors
a pixel check cannot catch: labels overlapping each other or a shape,
a curve pointing the wrong way, and any factual claim baked into the
artwork (an in-image label is as much a published claim as body prose,
and is subject to the same sourcing rules).

Two SVG-specific traps that produced real defects here, both invisible in the
markup and obvious only in the render:

- **A `fill="..."` attribute loses to a `<style>` rule.** A label written as
  `<text class="small" fill="#0d1f2a">` keeps the class's colour, because a CSS
  rule beats a presentation attribute. Dark text on a light fill silently stayed
  light. Use `style="fill:..."` when overriding a class.
- **`letter-spacing` widens a run past what the coordinates suggest**, and SVG
  adds the spacing after the final glyph too. A centred, letter-spaced string
  overflows its panel and collides with its neighbour. Measure the rendered run,
  or drop the manual spaces when the class already letter-spaces.

**Alt text**:

- Describe only what is visually in the image — no article
  interpretation, no verbatim transcription of every in-image text
  label.
- JA alt text must be natural Japanese, not a stiff literal
  translation of the EN alt. Do not end it with "画像" (redundant —
  alt text is already an image description). Insert a half-width
  space at every Japanese⇔ASCII/digit boundary (enforced by
  `check-ja-spacing.mjs`). Follow `check-ja-glossary.mjs`'s katakana
  rules for restricted terms (e.g. "Bitcoin Cash" → "ビットコインキャッシュ",
  "Block N" → "ブロック N", "nonce" → "ナンス" in prose) — describing the
  image in plain natural Japanese rather than quoting in-image
  English text verbatim sidesteps most glossary violations.

**Editing safety**: when inserting the image markdown via a scripted
or automated edit, never let the replaced span include the
frontmatter's closing `---` itself — insert strictly after it, in a
separate paragraph, and confirm the `---` is still intact afterward.

**og:image consumer**: the hero image doubles as the page's
`og:image` — the entry templates (and the participant pages, for
biographies) extract the body's first `/images/analysis/*-hero.png`
reference and prefer it over the generated `/og/` text card, which
remains the fallback for primary-source entries without one. Renaming
or removing a hero image therefore changes the page's social-share
card, not just its body.

## Link Integrity

Inline links in body prose must satisfy a simple invariant: the
**visible link text and the destination URL describe the same
thing**. A reader hovering over `[Ethereum whitepaper](.../participants/vitalik-buterin/)`
sees text that promises a whitepaper and a URL that goes to a
participant page; this is a misleading link and must be fixed.

Common failure shapes to watch for:

- Linking a famous artifact name (whitepaper, paper, talk, post) to
  the author's biography or participant page, when no archive entry
  for the artifact itself exists.
- Linking an event name (conference, hard fork, announcement) to a
  general analysis or biography rather than the specific event entry.
- Linking a chain name (Bitcoin Cash, Ethereum) to a person's
  participant page rather than the chain's own announcement entry.

These accumulate when an editor knows a related destination exists
elsewhere and reaches for any link anchor in the sentence to surface
it. The fix is per-link: each `[text](url)` should be checked against
the question "does the URL describe the text?".

When the desired destination doesn't exist as an archive entry, pick
the resolution that preserves accuracy:

- Drop the link entirely and use plain text.
- Move the link to a destination whose content genuinely matches the
  text (e.g., the participant page for a person whose name is the
  text).
- Restate the link text to describe the actual destination
  (e.g., `[Buterin participant page](.../participants/vitalik-buterin/)`
  instead of `[Ethereum whitepaper](.../participants/vitalik-buterin/)`).

The biography-cross-link rule in [§ Biography Linking](#biography-linking)
and the inline-keyword rule in
[§ Auto-Link Keywords (concept and person)](#auto-link-keywords-concept-and-person)
both presuppose this integrity invariant; they say *where* to link, not
*how* to mismatch text and URL.

## Source Field (Taxonomy)

`source` (frontmatter) is a different field from the citation fields
below — it is the classification axis behind `/sources/[source]/`,
answering "what platform or publication did this content originate
from" (e.g. `bitcointalk`, `wikipedia`, `malmi-email-archive`,
`github`), not "what does this entry cite." For a primary-source entry
the value is unambiguous — the platform the document was published on.
For an editorial entry (`article` / `analysis` / `biography` /
`design` / `currency`), it is the external venue the entry's subject
matter is grounded in or fact-checked against, even when the entry is
Bitcoin Institute's own original writing rather than a reproduction of
one document.

**`source` must never name this project itself** — not "Bitcoin
Institute," not "the archive," in any of its published or fictional
domain forms (same principle as `sourceUrl` below: self-citation is
not a citation). When an editorial entry is a first-hand experiment
with no single pre-existing document to classify it under, pick the
external venue its core claims are actually grounded in or checked
against, the same way an entry explaining Bitcoin's design without
reproducing the whitepaper still classifies as `bitcoin-pdf`. Do not
reach for the project's own name as a placeholder taxonomy value.

**Enforcement.** `scripts/check-no-self-domain.mjs` also rejects
`source` values naming this project (see the file's `SELF_SOURCE_SLUGS`
list), alongside its `sourceUrl` / `secondarySources` checks below.

**Incident (2026-08-02 / caught 2026-08-19):** five entries created the
same night used `source: "bitcoinarchive"` or `source: "bitcoin-institute"`.
Four were corrected the same night alongside a `sourceUrl` self-domain
fix (e.g. reassigned to `trakx`, `bitcoin-wiki`, `bitcoin-pdf`). The
fifth — an AI-model investment survey with no self-domain `sourceUrl`
to trip the existing check — kept the self-referential `source` value
undetected for over two weeks, because no check ever parsed the
`source` field. Reassigned to `github`, the venue its central claim
(the `MAX_MONEY` consensus constant) is fact-checked against, and
`check-no-self-domain.mjs` extended to close the gap.

## Source Citation: `sourceUrl` vs `secondarySources`

`<SourceCitation />` renders the two frontmatter fields as separate
sections at the foot of the entry:

- **`sourceUrl`** (optional) — the single canonical primary
  reference, when one genuinely exists. Rendered under a
  type-dependent heading — 「原典の外部ソース」 (primary-source /
  article) or 「参照元の外部ソース」 (analysis / biography / design /
  currency), EN "Original external source" / "Reference external
  source". Every
  variant carries 「外部ソース」 / "external source" so the reader
  sees it is an external link. Pick the URL a reader should open
  first (archived original, Wikipedia biography, BitcoinTalk topic,
  GitHub PR, etc.) — and it must be an independent, external site.
  **Never this archive's own domain** (in any of its published or
  fictional forms — self-citation is not a citation, regardless of
  whether the URL resolves), and never a URL invented to fill the
  field when no genuine canonical reference exists.
  **Omit `sourceUrl` entirely** when the entry has no single source
  that outranks the others (e.g. an original Bitcoin Institute
  experiment surveying several equally-weighted external products).
  Do not force an arbitrary pick from among equals just to satisfy
  the field — an unranked choice dressed up as "the" reference misleads
  the reader about why that one was chosen. When omitted, every
  reference goes in `secondarySources[]`, and `<SourceCitation />`
  renders it as a single flat list under the neutral heading 「外部
  ソース」 / "External sources" (`entry.externalSources`), with no
  entry singled out as more authoritative than the rest — see
  "Ordering and display cap" below for what the list order does
  still control.
- **`sourceNote`** (optional) — short caveat or context. Rendered as
  a muted block immediately under the `sourceUrl` link when
  `sourceUrl` is present; when `sourceUrl` is omitted, rendered at
  the top of the standalone `secondarySources[]` list instead, since
  there is no primary-reference link for it to sit under.
- **`secondarySources[]`** (optional) — list of additional
  references with `name`, `url`, optional `note`. Rendered under
  「他の外部ソース」 (primary-source / article) or
  「その他の外部ソース」 (analysis / biography / design / currency),
  EN "Other external sources" — or, when `sourceUrl` is omitted,
  under the standalone 「外部ソース」 / "External sources" heading
  described above.

**Ordering and display cap.** `secondarySources[]` order controls
what a reader sees first, mirroring the `relatedEntries` convention
(§ Related Entries, rule 1): `<SourceCitation />` shows only the
first 5 items immediately and folds the remainder into a native
`<details>` ("Show N more") block — the same display-layer cap used
by RelatedEntries and CommentaryLinks. The data layer keeps the
complete citation list. What index 0 *means* depends on whether
`sourceUrl` is present:

- **`sourceUrl` present.** `secondarySources[]` is priority-ordered —
  index 0 = most important — and the UI leads with the sources the
  entry leans on most.
- **`sourceUrl` omitted.** The list stands alone as "External
  sources" (no entry is "the" reference the others are secondary
  to), so order is a reading-order convenience only — put what's
  most useful to open first — not a claim that the first five carry
  more evidentiary weight than the rest.

**Rule.** The same URL must not appear in both fields. If it did,
the citation block would list the link twice. When tempted to
duplicate (e.g. because the existing `secondarySources[]` entry
carries a useful `note`), move the `note` text into the entry's
`sourceNote` field instead and remove the duplicate
`secondarySources[]` row.

**Enforcement.** `scripts/check-source-duplication.mjs` fails when
an entry's `sourceUrl` matches any of its own `secondarySources[].url`.
`scripts/check-no-self-domain.mjs` fails when `sourceUrl` or any
`secondarySources[].url` points at this archive's own domain. Both
are wired into `npm run check` in `--strict` mode.

## External Link Rot Handling

External URLs decay over time. The archive's external citations --
news articles, Wikipedia pages, blog posts, third-party email
mirrors -- accumulate dead links as cited sites restructure, delete
articles, expire domains, or shut down. The rules below codify how
to detect, verify, and repair such rot without losing information
or fabricating it.

### Audit cadence

- `npm run audit:external-links` scans every external URL in body +
  frontmatter and writes a per-URL verdict to
  `temp/dead-external-links-{date}.md` (categories: dead, client-error,
  server-error, error, redirect, ok). Scan time ~50s for ~3700 URLs.
- Run before major releases. Run incrementally after large external-
  citation additions (new analysis or aftermath wave).
- Not wired into `npm run check` because it makes network calls and
  is too slow / flaky for the strict gate.

### Status code interpretation

| Status | Meaning | Action |
|---|---|---|
| 410 Gone | Server says "permanently removed" | Repair immediately (see verification below) |
| 404 Not Found | May be permanent OR transient (CDN miss, path change, geo-block) | Verify via Wayback before action |
| 5xx | Server-side error | Transient; skip and recheck on next audit |
| timeout / connection refused | Network failure | Transient; skip and recheck on next audit |

### Verification protocol (per dead URL)

1. **Confirm the 404 with a real browser User-Agent.** Some sites
   block default `curl` UA and return 404 to non-browsers while
   serving the page to humans.

   ```sh
   curl -sIL -A "Mozilla/5.0 ..." -o /dev/null -w "%{http_code}\n" "$URL"
   ```

2. **Check Wayback via the DIRECT URL, not the wayback-available API.**

   ✓ Direct URL form (reliable):
   ```
   https://web.archive.org/web/2*/<URL>
   ```
   Follow the 302 to the actual snapshot. Confirms a snapshot exists
   and returns the snapshot URL.

   ✗ The `archive.org/wayback/available?url=...` API frequently
   returns `archived_snapshots: {}` even for URLs Wayback has
   captured. **Do not trust empty results from this API as evidence
   that a URL never existed.** Use the direct URL form instead.

3. **Open the snapshot and verify content.** A 404 page can itself
   be archived by Wayback; finding "a snapshot" is not the same as
   finding "the cited content." Heuristics:

   - Snapshot HTML size > 5 KB (404 pages are usually small).
   - Page title does not contain "404" / "Page Not Found" / "Error".
   - Cited names, dates, or terms appear in the snapshot body.

### Action by category

| Position | Snapshot found + content valid | No snapshot or content invalid |
|---|---|---|
| `secondarySources[]` | Replace `url` with the Wayback URL; preserve `name` | Remove the entry. The primary source (`sourceUrl`) still carries the citation; the dead secondary mirror was redundant. |
| `sourceUrl` | Replace with the Wayback URL | Reconsider the entry's existence: a primary source with no recoverable URL is unsupported. Delete the entry, or keep it with an explicit `note` documenting that the original URL is dead and no replacement was found. |
| Inline link in editorial body prose | Move the citation to `sourceUrl` / `secondarySources[]` and keep the source name and technical range as plain text | A missing replacement does not justify leaving a clickable external URL in the body; review the supported claim against the remaining citation record. |

### Anti-patterns

- ❌ **Trust the wayback-available API alone** to declare a URL never
  existed. The API is unreliable; use the direct Wayback URL.
- ❌ **Bulk-delete `secondarySources`** without verifying Wayback
  first. Some dead URLs are recoverable.
- ❌ **Replace with a Wayback URL** without opening the snapshot to
  confirm the cited content is preserved. The snapshot may be of a
  404 page that was itself archived.
- ❌ **Delete a citation but keep the claim it supported.** If the
  source is irrecoverable, the claim becomes unsourced and should be
  removed too, per `secondarySources` discipline.
- ❌ **Promote a single audit run to permanent verdict.** A URL that
  is dead today may be transient. For ambiguous cases (404 with
  recent Wayback success), wait for a second audit run before
  repairing.
- ❌ **Modify URLs inside primary-source body content.** URLs that
  appear inside verbatim entries (`/forum/`, `/correspondence/`,
  `/emails/`, `/web-document/`, `/bip/`, `/tweets/`) or inside `<blockquote>`
  elements in editorial entries are part of the historical record.
  They are de-linked at render time by
  `src/lib/rehype-strip-archive-links.mjs`. The audit may report them
  as dead, but they are not actionable: the URL text is the authored
  text of the original document, not a navigation pointer. The
  apply-dead-link-fixes script targets only frontmatter `url:` /
  `sourceUrl:` for this reason.

### Scope: what URLs the audit policy actually targets

The dead-link audit reports every dead external URL. Not all are
actionable. The matrix below summarizes the action policy by URL
position:

| URL position | Action policy |
|---|---|
| `frontmatter.sourceUrl` | Replace with Wayback URL if available; else reconsider entry's existence (delete or `note:`-document the dead URL). |
| `frontmatter.secondarySources[].url` | Replace with Wayback URL if available; else remove the entry (the primary source still carries the citation). |
| Body external URL in editorial prose, **outside** any blockquote | Move the citation to `sourceUrl` / `secondarySources[]`; leave the source name and fixed technical range as plain text. The body must not keep a clickable external link, even when a Wayback URL exists. |
| Body inline link **inside** a `<blockquote>` (= primary-source quote) | **Do not modify.** The URL is part of the verbatim quoted text. The renderer de-links it; that is the policy. |
| Plain text URL in any verbatim file (`/forum/`, `/correspondence/`, `/emails/`, `/web-document/`, `/bip/`, `/tweets/`) | **Do not modify.** Same rationale: the URL is authored text of the historical document. |
| URL inside an editor-note block (`*[Editor: ...]*` / `*[Context: ...]*` / `*[編者注：...]*` / `*[補足：...]*`) | Move the citation to frontmatter or remove the editorial link while preserving the note's meaning. The renderer also de-links it as a safety net. |

## Internal URL Changes — No Redirects Policy

When entries are renamed, moved, or restructured (directory moves, slug
renames, type reclassifications), the resulting URL change is **not**
absorbed by an `astro.config.mjs` redirect. The old URL is allowed to
return 404.

Reasons:

- Redirect tables accumulate forever. Each redirect outlives the move
  that prompted it and becomes permanent maintenance overhead. The
  archive ships routinely (`type` taxonomy fixes, slug conformance to
  Title Policy, directory restructuring); paying redirect-table debt
  on each move makes the table unbounded.
- A 404 surfaces structural changes honestly. Crawlers re-index from
  current internal links and sitemap; readers fall back to site search.
  The EN and JA 404 pages may also show best-effort suggestions from the
  current index; those suggestions are navigation help, not aliases for
  the old URL.
  A silent redirect chain hides that the URL has moved and
  disincentivizes both re-indexing and editorial discipline about not
  moving content casually.
- The archive's URL space is a working contract with current readers,
  not a frozen promise. URL changes for structural reasons (taxonomy,
  naming, layout) are part of normal editorial maintenance, not API
  breakage.

Scope:

- **Applies to**: any internal entry-URL change — directory moves
  (e.g. `sourceforge/X.md` → `aftermath/X.md`), slug renames, type
  reclassifications that move the entry to a different path.
- **Does NOT apply to**: external URLs in body content (handled by
  § External Link Rot Handling above); HTTP routing changes at the
  framework / Cloudflare Pages level (entry vs thread page rendering).

If a known high-value external citation exists to a specific URL that
will be moved, prefer updating the citation at its source (if
reachable). The redirect shortcut is the wrong tool for that case as
well; redirects scale worse than the citations they would protect.

## Medium vs Archive: name the source, not "the archive"

"The archive" (and 「アーカイブ」 in Japanese content) refers to *this*
BitcoinArchive — its editorial scope, its contents as a record, its
canonical readings. It does not refer to BitcoinTalk, GitHub, the
cryptography mailing list, or any other medium where source content
originally appeared. A person did not "first appear in the archive" —
they first appeared on BitcoinTalk (or GitHub, or a mailing list);
the archive merely records and indexes that appearance.

**Correct uses ("the archive" = *this* archive):**

- "this archive's coverage focuses on 2008-2011"
- "the archive holds primary-source emails from..."
- "this archive's canonical chain is..."
- "no separate entry exists in this archive for X"
- "within this archive's research scope"

**Incorrect uses (name the actual medium instead):**

- ✗ "X first appears in the archive on [date]"
  → ✓ "X first appears on BitcoinTalk on [date]"
- ✗ "X's first archived contribution is..."
  → ✓ "X's first contribution to bitcoin/bitcoin is..."
- ✗ "X made his first archived post on..."
  → ✓ "X made his first BitcoinTalk post on..."
- ✗ 「X はアーカイブに [日付]、…で初めて登場する」
  → ✓ 「X は BitcoinTalk に [日付]、…で初めて登場する」
- ✗ 「X のアーカイブにおける最初の貢献は…」
  → ✓ 「X の bitcoin/bitcoin への最初の貢献は…」

The medium is where the source content existed in the world
(BitcoinTalk, GitHub, mailing lists). The archive records and indexes
that content. Conflating them frames the archive as the medium of
historical existence, which it is not.

## When a Hypothesis-Related Article Deserves Its Own Aftermath Entry

Coverage of Satoshi-identity hypotheses (Skye Grey 2013 for Szabo, Hatch 2021
for Sassaman, Carreyrou 2026 for Adam Back, HBO 2024 for Todd, etc.) accumulates
quickly. Not every article warrants a standalone aftermath entry. Use this
distinction:

- **Claim events get a standalone entry.** The original articulation, a
  major-press tier amplification with substantive new framing (NYT, HBO,
  book), or a new methodological articulation (algorithmic stylometry vs.
  manual stylometry) — these are documentary milestones in the hypothesis's
  public history and route via `aftermath/`.
- **Response events stay in `secondarySources`.** A named candidate's denial
  to a journalist, a brief reactive comment, a "no I am not Satoshi" repeated
  to multiple outlets — these belong in the hypothesis entry's
  `secondarySources` with a `note:` capturing the verbatim line if needed.
  They do not get their own aftermath unless **(a)** the response is a
  formal sworn record (deposition, court filing, COPA witness testimony,
  Patterson-style on-record family denial) or **(b)** the response is itself
  a long-form public statement that introduces new framing (e.g., a candidate
  publishing their own essay in response).

Operational test: would a future reader want to navigate *to* this article
as a destination, or would they want it cited *from* the hypothesis entry?
Destinations get their own entry; citations live in `secondarySources`.

When in doubt, default to `secondarySources` — promotion to a standalone
aftermath is cheap if the article gains weight later, but pruning a
proliferation of thin reactive aftermath entries is editorial work.

## Translation Principle

When translating quoted material, preserve the function of the formatting, not
just the original glyphs.

- If the source block functions as document body text, keep document-style
  formatting.
- If the source block functions as a highlighted utterance in narrative prose,
  use the target language's quotation punctuation.

For **editor-note markers** ([Editorial Markers](#editorial-markers)),
the JA/EN canonical pairs use locale-specific punctuation:

- EN uses half-width colon (`:`); JA uses full-width colon (`：`).
- Mixing is not allowed: a JA file must not carry an EN marker form,
  and vice versa.
- The label and the note text are separated by exactly one half-width
  space, in both locales (e.g. `*[Editor: text]*`, `*[編者注：text]*`).

## Native Fluency in Every Locale

A translated entry must read as if written natively in its target
language — never as a word-for-word calque of the source. This holds
in **both directions**: an entry rendered into Japanese must read as
natural Japanese, and an entry rendered into English must read as
natural English. The two language versions are siblings that agree on
facts, sources, and structure; they are not transliterations of each
other's sentence shapes.

The failure mode is carrying the source language's structure — word
order, demonstratives, abstract-noun stacks, doubled negations — into
the target, producing prose that parses but reads foreign. It happens
whichever language is drafted first: an English-first draft calqued
into Japanese breaks the Japanese, and a Japanese-first draft calqued
into English breaks the English. Drafting one language first is fine;
treating that first version as a mold to pour the second into is not.

Procedure, applied independently per locale:

1. Write each language version in that language's own idiom — not by
   pouring the other version into a translation mold.
2. Read each sentence and ask whether a native reader of that language
   would find it natural.
3. If a sentence still reads foreign, set the other version aside and
   rewrite the thought from scratch in the target language.
4. Keep the two versions aligned on **facts, sources, and structure**
   (section order, the stake the entry argues) — not on sentence syntax.

The Japanese-specific elaboration, with worked before/after examples,
lives in [`STYLE_GUIDE_JA.md` § I.9](STYLE_GUIDE_JA.md) (直訳禁止 —
自然な日本語の優先). The same standard governs English prose drafted
from a Japanese-first source.

## Consistency Rule

- Do not rewrite untouched legacy material just for stylistic cleanup.
- When an entry is being edited, normalize the touched portion to this guide.
- If a category develops a strong established pattern, follow that pattern
  unless there is a clear reason to improve it.

For the [Editorial Markers](#editorial-markers) audit, the
`check:editorial-markers` script now runs in `--strict` (hard-fail)
mode under `npm run check`, since the existing legacy was normalized
end-to-end during the 2026-04 migration. New entries must satisfy
the canonical-form rules from the start; any violation will block
the build.

## Editorial Markers

This section partitions the editor's-own-words side of the
[Core Distinction](#core-distinction-blockquotes-vs-quotation-marks).
A reader must be able to tell, from formatting alone, which of the
following roles a given line plays:

1. Page-level editorial commentary by Bitcoin Institute
2. In-body editor interpretation (Bitcoin Institute opinion / reading)
3. In-body historical context supplement (third-party facts adjacent
   to the entry)
4. Source attribution for the entry's primary material
5. Quotation metadata inside or adjacent to a blockquote
6. Original-poster edit notes that are part of the source record (not
   Archive editor notes)

Each role has exactly one canonical form. Anything else is to be
normalized.

### The six roles and their canonical forms

| Role | Description | EN canonical | JA canonical | Position |
|---|---|---|---|---|
| **A** | Page-level editorial commentary | `editorNote:` field | `editorNote:` field | frontmatter; rendered as a labeled box at the top of the body |
| **B** | Source attribution (primary material) | `frontmatter.sourceUrl` + `secondarySources[]` (with optional `note`) + `<SourceCitation />` (role split between the two fields: see [§ Source Citation](#source-citation-sourceurl-vs-secondarysources)) | same | rendered at the end of the entry by `<SourceCitation />` |
| **C** | In-body editor interpretation | `*[Editor: ...]*` | `*[編者注：...]*` | italic + brackets, inline anywhere in the body |
| **D** | In-body historical context (supplementary annotation around the body, **not** a substitute for body prose; see [§ Editorial Entries](#editorial-entries-article--analysis--biography--design)). Also the home for novel-bridge context notes — see § Technical-Review Robustness. | `*[Context: ...]*` | `*[補足：...]*` | italic + brackets, inline anywhere in the body |
| **E** | Quotation metadata | `<!-- speaker: ... -->` / `<!-- quote: ... -->` semantic markers, or a `**Author Name:**` label immediately before a blockquote | same | semantic markup; renders as a structural attribution, not as editor commentary |
| **F** | Original-poster edit notes | `edit:` / `Edit:` / `[edit]` (preserved verbatim) | `編集:` / `[編集]` (preserved verbatim) | preserved as written by the original author; **not** rewritten by Archive editors |

### Rules

1. JA uses full-width colon (`：`); EN uses half-width (`:`). No mixing.
2. The label and the body text are separated by exactly one half-width
   space (e.g. `*[Editor: text]*`, `*[編者注：text]*`).
3. (B) is provided by the existing `<SourceCitation />` component
   driven by `frontmatter.sourceUrl` + `secondarySources[]`. Inline
   `*Source: ...*` / `*出典：...*` lines in body content are forbidden
   as a **canonical** form. Existing legacy occurrences are migrated
   to `secondarySources[].note` or to (D) during normalization.
4. (C) and (D) require the label prefix. Unlabeled `*[...]*` is
   forbidden.
5. (A) is for entry-wide commentary (one box per entry). For local
   commentary, use (C) inline.
6. Bold-label forms (`**Source:**`, `**Note:**`, `**Editor:**`,
   `**Author:**` as an editor marker) are forbidden.
7. Plain-bracket forms (`[Source: ...]`, `[Note: ...]`) are forbidden.
8. Dash-trailer forms (`— Source: ...`, `-- Source: ...`) are
   forbidden.
9. Bracketed source-attribution forms (`*[Source: ...]*`,
   `*[出典：...]*`) are forbidden — use (B) via the component machinery.
10. HTML comments (`<!-- ... -->`) are reserved for semantic markup
    (`<!-- speaker: ... -->`, `<!-- quote: ... -->`). They must not
    contain editor commentary.
11. Plain keyword usage in prose (`〜より`, `via`, `according to`,
    etc.) is acceptable. Add (C) or (D) markup only when the
    surrounding sentence carries Bitcoin Institute's interpretation
    rather than factual reportage.
12. **(F) Original-poster edit notes are part of the source record;
    Archive editors must not change or normalize them.** This rule is
    the [Primary-Source Entries](#primary-source-entries) preservation
    principle applied to inline edit markers.
13. **(C)/(D) usage policy by entry type (0523 editorial-note plan):**
    - In **editorial entries** (`article` / `analysis` / `biography` / `design`),
      facts that read as natural body prose (related events,
      aftermath, biography, follow-up reporting, contemporary-value
      conversions, section-introducing sentences) **belong in body
      prose**, not in (C)/(D) brackets. The bracketed form is
      reserved for genuine editor interpretation (C) or for
      adjacent-but-distinct context that would derail the body
      narrative (D, e.g. a short pointer to a sibling entry).
    - In **primary-source entries** (`correspondence` /
      `mailing-list` / `forum-post` / `whitepaper` / `bip` /
      `court-document`), the
      [No editor narrator inside primary-source bodies](#primary-source-entries)
      rule still applies. Short editor notes that survive there
      should stay as (C)/(D) or, when they grow long enough to read
      as page-level, migrate to (A) `editorNote:` in frontmatter.
      Do **not** dissolve them into body prose — that would
      reintroduce editor narrator into the source record.
14. **Body prose must never reference this site's own publishing
    mechanics.** No pointing the reader at "the HTML comment above,"
    "the page source," a frontmatter field name (`sourceUrl`,
    `secondarySources`, `editorNote`, etc.), or any other detail of
    how the entry is built. A reader is not expected to view source
    and does not benefit from being told to. If a fact needs
    disclosing, disclose the fact itself in plain language, not the
    mechanism that stores it. (Incident: 2026-08-02, a survey entry's
    `sourceNote` explained a frontmatter decision to the reader
    instead of the underlying provenance fact, and a body bullet
    told readers to "see the HTML comment above §2.")

### Every source quote must belong to an attribution chain

Across the entire Archive — existing entries and new ones alike —
any blockquote that quotes a real-world speaker (an email author, a
forum poster, a paper author, etc.) must belong to a structured
attribution chain rooted in `quotes[]`. Narrator paragraph followed
by a plain `> blockquote` with no `<!-- quote: qN -->` and no
preceding `<!-- speaker: NAME -->` is not acceptable; readers cannot
tell whose words are inside the quote, and the chip + sourceEntryId
link to the original message never gets emitted.

"Source quote" is the term for a real-speaker quotation that must
be in the chain. "Editorial quote" is the term for editor-made
illustrations, spec citations, command-output examples, poetic
quotations, or translation comparisons — none of these have a
primary entry to link to and they are explicitly excluded from the
chain with `<!-- audit:quote-skip -->`.

`<!-- audit:quote-skip -->` is **also** the correct treatment for
two narrower cases of real-speaker quotation where chip
attribution is structurally not possible:

- **Deleted source.** The cited forum post or message was deleted
  (BitcoinTalk mod removal, user-deleted reply, expired Hushmail
  thread, etc.) and no surviving copy exists to be ingested as a
  primary entry. The blockquote is preserved verbatim from a
  reply-quote, but the original source is unrecoverable, so no
  `sourceEntryId` can be supplied.
- **External quote.** The speaker is real but the source lies
  outside the Archive's curation scope (e.g., a Dan Connolly post
  on an external mailing list quoted inside a BitcoinTalk thread,
  or a journalist's article paragraph reproduced as context). The
  Archive does not intend to ingest that source as a primary
  entry, so there is no entry the chip could ever point to.

In both cases the editorial intent is "real quote, no Archive
primary entry possible," not "fabricated illustration." Mark the
blockquote with `<!-- audit:quote-skip -->` and prefer a leading
narrator sentence that names the speaker and names the citation listed in
`sourceUrl` / `secondarySources[]`. Do not add an external URL to the body;
the SourceCitation block remains the clickable route even though the chip
is not emitted.

**Deleted-source label.** When a BitcoinTalk quote box's native
`Quote from: NAME on DATE` header is retained for a deleted source,
its link target no longer exists, so the header is kept as plain
text with a locale-appropriate prefix marking why there is no link:
`[Deleted]` on EN pages, `[削除済み]` on JA pages (the prefix is an
Archive editorial annotation, not source text, so the JA layer
localizes it; the `Quote from:` remainder is preserved verbatim in
English on both locales). Established 2026-04-02 (`e961567c2`, 20
posts by davidonpda / martin / soultcer); JA label unified
2026-07-17 after the two forms had drifted.

Do **not** use `audit:quote-skip` simply to silence the detector
when the source IS in (or could be added to) the Archive — that
is `quote-self-link` / `quote-non-primary-target` territory, and
the correct fix is to create or repoint the primary entry.

The chain itself starts at every change of source: place
`<!-- quote: qN -->` immediately before the first blockquote from a
given source. Subsequent blockquotes from the same source must NOT
repeat the marker; they continue the chain via a bare `<!-- speaker:
NAME -->` (see the next rule for the full mechanic). Nested quotes
(`>>` and deeper) are treated the same way: a new source inside an
existing quote starts its own chain entry with its own `quotes[]`
record carrying `parent: "<outer qN>"`.

`scripts/check-quotes.mjs` enforces this with
`blockquote-no-marker` (no preceding marker at all),
`speaker-named-no-quote-marker` (new source via `<!-- speaker: -->`
but no `<!-- quote: qN -->`), and the legacy-pattern checks.

**Detection must be structural, never a closed list of textual
attribution phrases.** `speaker-named-no-quote-marker` walks
backward from a bare `<!-- speaker: NAME -->` marker and treats any
`>`-prefixed line as "still inside an already-attributed chain" —
but only when that line's own nesting depth is at least as deep as
the blockquote the marker introduces. A shallower `>` line means the
marker is opening a NEW, deeper nested source that the shallower
chain's own `<!-- quote: qN -->` never covered, and must still be
flagged. Before this depth check existed (added 2026-07-13), any
earlier quote marker at ANY shallower depth silently covered every
deeper speaker shift that followed — the exact shape of the gap that
let 3 correspondence/mailing-list entries carry unattributed nested
quotes (one, `.../bitcoin-p2p-e-cash-paper-dillinger-2.md`, with 5
separate ungapped Ray Dillinger excerpts) despite having gone through
the archive-wide "nested chip" migration. The legacy-pattern list
(`NAME wrote:`, `NAME writes:`, `Quoting NAME:`, etc. — see
`STYLE_GUIDE_JA.md` § "構造化された引用メタデータ" for the full
table) is a helpful secondary signal but can never be exhaustive: it
only matches phrasing already seen in the corpus, so any future
entry whose source uses different reply-quote wording (or none at
all, structure alone) would slip past a purely textual check. Treat
`blockquote-no-marker` / `speaker-named-no-quote-marker` as the
primary, pattern-independent guarantee; extend the legacy-pattern
list only as a best-effort aid on top of it, never as the sole
detector for a new gap.

**Once a quote is chip-attributed, drop the raw attribution line it
replaces.** A `<!-- quote: qN -->` chip already renders an avatar,
name, date, and source link; a `[Quote from: NAME on DATE]` or
`NAME wrote:` line immediately above it duplicates that same
information as plain text. BitcoinTalk-sourced entries have always
stripped the native `[Quote from:]` line at chip time (kept only when
`<!-- audit:quote-skip -->` applies — deleted source / external quote,
where no chip is emitted). Correspondence and mailing-list `NAME
wrote:` headers were never brought in line with that convention: 21
entries (EN + JA) shipped with the chip AND the raw header both
present until a 2026-07-13 pass removed the redundant line. See
`STYLE_GUIDE_JA.md` § "構造化 chip が付いた引用元は、生の引用先表示
行を本文に残さない" for the narrower exceptions (ordinary narrator
prose introducing a quote, audit-skip cases, and inline literary
quotations are not headers and are never touched).

### `sourceEntryId` must point to a primary-source entry (and never to self)

A `quotes[].sourceEntryId` must point at a primary-source entry —
`correspondence`, `mailing-list`, `forum-post`, `bip`, `whitepaper`,
`court-document`, `tweet`, or `web-document`. It must NOT point at:

1. **The entry itself** (self-link) — clicking the chip just
   reloads the same page; the chip-to-source contract is broken.
2. **Another editorial entry** (`article`, `analysis`,
   `biography`, `design`) — the chip then leads from one piece of commentary
   to another piece of commentary, never reaching the cited message.

If the cited source has no primary entry in the Archive yet, either:

1. Create the primary entry (recommended) — extract the cited
   email/post/document into its own
   correspondence/mailing-list/forum-post/etc. entry and point
   `sourceEntryId` at it.
2. Omit the `quotes[]` entry entirely (and drop the body
   `<!-- quote: qN -->` marker) — render the quoted content as a
   plain blockquote with `<!-- audit:quote-skip -->` until the
   primary entry exists.

Never use the entry's own id as a placeholder. `sourceUnavailable`
is reserved for cases where the original source is genuinely
unrecoverable; "primary entry not yet created" is not a
`sourceUnavailable` case.

`scripts/check-quotes.mjs` enforces both halves:

- `quote-self-link` (error) — `sourceEntryId` equals the entry's
  own id.
- `quote-non-primary-target` (error) — `sourceEntryId` resolves to
  an entry whose `type` is not in the primary-source set above.

### `quotes[].person` is the verbatim attribution label — it may differ from the source author

`quotes[].person` records the speaker's name **as it appeared in the
quoting context** — the `Quote from: NAME` box on a BitcoinTalk post,
the `NAME wrote:` line in a mailing-list reply, the attribution on the
reply that carried the excerpt. It is kept verbatim, exactly as the
top-level `author` field keeps a source-platform handle
(see [§ Participant Slug Convention](#participant-slug-convention)).

It is therefore **not required to match the `author` of the entry
`sourceEntryId` points to**, and the two legitimately diverge. This is
faithful preservation of the historical record, **not a data error**:

- **Account rename.** BitcoinTalk (SMF) shows the poster's *current*
  handle on the post itself, but a quote box preserves the handle the
  account carried *when the quote was made*. A poster who later renamed
  appears under the old handle in every quote box and under the new
  handle on the source post. Example: 2010 reply quote boxes attribute
  a post to `witchspace`; the source post
  (`forum/bitcointalk/topic-1931/2010-11-25-laanwj-msg24352`) is
  `author: laanwj` (Wladimir van der Laan). Same person, two handles —
  the quote box holds the older one.
- **Identity-form variant.** `person` may be an email address
  (`mmalmi@cc.hut.fi`), an old screen name, or another display form of
  the same person reached through `sourceEntryId`.

**The `sourceEntryId` link is the source of truth for who the speaker
actually was; `person` is the verbatim historical label.** When a
participant page exists, `personSlug` maps `person` to the canonical
participant for display (katakana in the JA edition — see
`STYLE_GUIDE_JA.md § I.4`), so the visible chip can read with the old
handle while the link still resolves to the canonical person.

**Do not "correct" `person` to match the source entry's author.** That
erases the handle the quote historically carried — the same loss the
verbatim-`author` and preserved-source-filename rules guard against
([§ Participant Slug Convention](#participant-slug-convention), rule 5).
The divergence is expected; leave it.

This preservation covers the **attribution label only**. A
`quotes[].date` that disagrees with the `sourceEntryId` target's date
is a separate matter: BitcoinTalk timestamps are UTC (see the About
page timestamp policy), so a `quotes[].date` offset from the source
post's canonical time *is* a data error to repair toward the source
time — unlike `person`, it is not preserved.

### Do not repeat `<!-- quote: qN -->` for the same source in one file

When the entry author (typically Satoshi) quotes **multiple
blockquotes from the same single source message** (e.g., five
excerpts from one Mike Hearn email), place the `<!-- quote: qN -->`
marker **only at the first quoted block**. Subsequent `<!-- speaker:
NAME -->` shifts back to the same person reuse the same `qN`
implicitly and must NOT repeat the `<!-- quote: qN -->` marker.

```markdown
<!-- correct -->
<!-- speaker: Mike Hearn -->
<!-- quote: q1 -->
> First question...

<!-- speaker: Satoshi Nakamoto -->
Response...

<!-- speaker: Mike Hearn -->
> Second question (same source email, same q1)...

<!-- speaker: Satoshi Nakamoto -->
Response...
```

```markdown
<!-- violation -->
<!-- speaker: Mike Hearn -->
<!-- quote: q1 -->
> First question...

<!-- speaker: Satoshi Nakamoto -->
Response...

<!-- speaker: Mike Hearn -->
<!-- quote: q1 -->   ← repeated q1, renders the same chip twice
> Second question...
```

**Why:** `<!-- quote: qN -->` is replaced by `remark-quote-blocks`
with an attribution chip ("Mike Hearn's post", etc.) built from
`quotes[N]`. Repeating the same `qN` produces N copies of the same
chip in the rendered page — visually noisy, and misleading because
the chip's `sourceEntryId` points to a single source message that is
being referenced repeatedly, not to distinct sources.

**Multiple distinct sources:** if the entry quotes more than one
person (e.g., Satoshi quotes both Hal Finney and Wei Dai in one
reply), give each source its own `qN` and place each `qN`'s first
marker at that source's first quoted block. Two different chips
appearing is correct because the sources are different.

**Same person, multiple source emails:** if `quotes[]` has two or
more `qN` entries with the same person (e.g., Satoshi quotes Mike
Hearn from **two different** emails in one reply: `q1` = the
open-source reply, `q2` = the SPV-progress reply), a bare
`<!-- speaker: Mike Hearn -->` is ambiguous about which `qN` it
continues. Every speaker shift to that person must carry an
explicit `<!-- quote: qN -->` marker to disambiguate. Repeated
identical chips are accepted as the cost of disambiguation in this
case — the dedup rule above applies only when the person has a
single `qN`.

**EN/JA parity:** this is a marker-placement rule. Both EN and JA
files must have the same marker count at the same structural
positions, otherwise `verify-translations.sh` flags the divergence.

**Detector:** `scripts/check-quotes.mjs` (`speaker-named-no-quote-marker`
check) treats a speaker shift as covered when the speaker NAME
matches the `quotes[N].person` of an earlier `<!-- quote: qN -->`
already present in the same file **and** that person has exactly
one `qN` in `quotes[]`. When the same canonical person has two or
more `qN` entries, the detector keeps requiring an explicit marker
on every speaker shift (see the disambiguation rule above).

**Continuation speaker tag (automatic rendering):** the dedup rule
used to leave every continuation blockquote with no visible
attribution at all (only Satoshi was identifiable, via his border
accent), so a long point-by-point exchange forced the reader to
scroll back to the first chip to recall whose words the later
blockquotes were. `remark-quote-blocks` therefore renders a
lightweight speaker tag (avatar + bare name, `.quote-speaker-tag` —
no link, no date, no medium wording, so it cannot be mistaken for a
second citation) above each continuation blockquote. Two marker
shapes produce it:

1. A bare `<!-- speaker: NAME -->` whose person has exactly one
   logical source among the earlier `qN` chips.
2. A repeated `<!-- quote: qN -->` whose logical source was already
   chipped earlier in the file, when the person has only that one
   source — the repeat chip is demoted to the tag. This covers the
   legacy entries where the 0522 bulk migration minted a separate
   `qN` per blockquote of one message (same `person` + same
   `sourceEntryId` duplicated across `quotes[]`) instead of reusing
   one `qN`; the renderer treats those duplicates as one source.

"Logical source" means the (canonical person, `sourceEntryId`) pair
(`quoteSourceKey` in `src/lib/person-name-aliases.mjs`) — several
`qN` entries pointing at the same message count as ONE source.
Directly consecutive blockquotes by the same speaker (no prose
between them) render the tag on the first block only — adjacency
already carries the continuity. Persons with two or more DISTINCT
sources never get a tag and keep their explicit chips; a bare name
could not tell the sources apart (see the disambiguation rule).
This is renderer behavior; editors add nothing — the existing
markers drive it. The validator and the renderer share the
canonical-name table and the source-key helper
(`src/lib/person-name-aliases.mjs`), so what the detector accepts as
a continuation is exactly what the renderer tags.

### Audit

`scripts/check-editorial-markers.mjs` enforces these rules under
`npm run check` in `--strict` mode (hard-fail). The audit excludes
blockquote interiors, code blocks, URLs, and HTML comments to avoid
false positives on primary-source content.

A separate `--report-f-candidates` mode lists every `edit:` / `編集:`
occurrence inside `forum-post`, `mailing-list`, and `correspondence`
entries. The auto-classifier treats these as F (preserved) by default,
which is correct for every occurrence in the corpus so far — all of
them are original-poster edit notes. Re-run the report mode (`npm run
audit:f-candidates`) whenever new entries of these types are added and
confirm the classification still holds.

## Paragraph Length

One paragraph, one idea. A paragraph that has moved on to a second
claim, event, or comparison gets a break at the point it moved on.

Sentence or character count is a signal for review, not the rule
itself: five to six sentences in one paragraph often means it is
carrying more than one idea, but a longer paragraph that stays on one
idea does not need breaking, and a short one that jumps ideas does.
Splitting is a structural edit only — insert the break, do not reword
either side.

## Language-Specific Guides

- Japanese-specific rules: `STYLE_GUIDE_JA.md`
- Entry-type-specific and situational rules: `STYLE_GUIDE_REFERENCE.md`
- Mermaid/d3/layout implementation rules: `STYLE_GUIDE_VISUAL.md`

