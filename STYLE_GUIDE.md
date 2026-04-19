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

## Title Policy

Every entry's `title` field is the page's identity across three
audiences, in addition to readers browsing inside the site:

1. **Human readers arriving from search** — the title is the blue link
   in Google results, the OG card in social shares, and the text the
   browser tab renders. If it is cryptic in isolation, the click does
   not happen.
2. **Search engines** — the title is the strongest ranking signal and
   the text most commonly displayed in SERP. Google truncates the
   displayed title around 50–60 characters but indexes the full string,
   so the leading identifiers matter more than total length.
3. **AI / AIO** (Perplexity, ChatGPT with browsing, Google AI Overview,
   etc.) — the title is the citation label an LLM extracts for the
   page. Ambiguous titles are less likely to be used as sources.

Internal browsing convenience is a side-effect of the three above.

### Baseline criteria

| Criterion | Target |
|---|---|
| Leading identifiers | at least two of: person / date / event / source / iconic phrase, in the **first half** of the title |
| Length (EN) | soft cap ≤ 60 characters; over the cap is acceptable when the leading identifiers are in the first 50 characters |
| Length (JA) | soft cap ≤ 30 characters; same leading-identifier rule applies |
| Stand-alone clarity | understandable without the URL path or description |
| Distinctiveness | visibly different from similar entries (same person / same date / same thread) |
| History preservation | for mailing-list and forum entries, the original subject / topic title stays visible (see per-category rules below) |

### Treatment of iconic quotes

A quote from the body is rarely a sufficient title on its own. It is
memorable for readers who already know the context — exactly the
audience least in need of the page. Use a quote as a **supporting
element after the identifying context**, not as the whole title.

- ✗ `"I've moved on to other things"` — cryptic alone
- ✓ `Satoshi's final email to Mike Hearn: "I've moved on to other things"`

### Per-category rules

Title handling differs by entry type because thread structure and
historical-subject preservation differ. The per-category rules below
override the generic templates where they conflict.

#### Forum threads (BitcoinTalk, GitHub issues, etc.)

- Location: `src/data/entries/en/forum/*`
- **Thread starter**: preserve the forum's topic title as the anchor.
  Editorial context (venue, date) may be added as a suffix, but the
  original topic string stays visible.
  - ✓ `Major Meltdown (BitcoinTalk, Aug 2010)`
  - ✗ `Satoshi's response to Mt. Gox crisis` — topic title replaced
- **Reply** (`Re: ...`): must follow the thread starter. Cascade rule:
  when the starter title changes, every `Re: {…}` in the same thread
  must be updated in the same commit (EN and JA mirrors).
- **Checker scope (important).** `scripts/check-ja-titles.mjs` only
  partially covers this rule:
  - It scans `src/data/translations/ja/forum/*` only (JA files), not
    the EN source tree.
  - Mismatches are reported as **warnings**, not errors — the build
    does not fail on a cascade drift.
  - Thread starter detection is heuristic: the first entry whose
    title does not begin with `Re:` / `返信:` is treated as the
    starter. If a reply is retitled to also drop the `Re:` prefix,
    the checker silently treats it as a second starter and skips
    cascade verification for it. Do not retitle a reply into a
    standalone editorial form to "route around" the checker —
    cascade the starter instead.
- Use `scripts/fix-ja-reply-titles.mjs --apply` to mass-update reply
  titles once the starter is set.

#### Mailing-list threads (cryptography, bitcoin-list, p2p-research)

- Location: `src/data/entries/en/emails/*`
- **Thread starter**: the original email subject line is historical
  (it is the literal Subject: header of the archived email). Keep it
  visible in the title; editorial wrapping is allowed, but do not
  replace it.
  - ✓ `"Bitcoin P2P e-cash paper" — Satoshi's first Bitcoin announcement (Oct 2008)`
  - ✗ `Satoshi announces Bitcoin — cryptography mailing list (Oct 2008)` — subject line lost
- **Reply** (`Re: ...`): keep the original `Re: {subject line}` form as
  written in the email. Do **not** cascade editorial changes from the
  starter into reply titles, because each reply literally had that
  Subject: header in the email. (This is the key difference from
  forum threads.)

#### Private correspondence (non-thread emails)

- Location: `src/data/entries/en/correspondence/*`
- Each file usually stands alone; there is no thread-wide subject line.
- Title template: `{Author}'s {description} to {recipient}` plus
  optional quote and/or date.
  - ✓ `Satoshi's reply to Adam Back about b-money citation (August 2008)`
  - ✓ `Satoshi's final email to Mike Hearn: "I've moved on to other things"`

#### Aftermath / article / analysis

- Location: `src/data/entries/en/aftermath/*`, `.../analysis/*`
- Preserve the original article or analysis title. Light contextual
  prefixes/suffixes are acceptable when the original title is ambiguous
  on its own.
  - ✓ `Jameson Lopp analyzes whether Satoshi Nakamoto was a 'greedy' miner`

#### Biographies

- Pattern: `{Name} ({dates}) — {one-line role}`
  - ✓ `Hal Finney (1956–2014) — Cypherpunk, PGP developer, first Bitcoin recipient`

#### Whitepaper / BIP

- Preserve the original formal title, with optional `(Whitepaper)` or
  `(BIP N)` suffix.
  - ✓ `Bitcoin: A Peer-to-Peer Electronic Cash System (Whitepaper)`
  - ✓ `BIP 125: Opt-in Full Replace-by-Fee Signaling`

#### SourceForge releases / genesis

- `Bitcoin v{N.N} released ({date})` for releases.
- Standalone entries (e.g. the genesis block) follow the generic rule:
  identify the actor, object, and date.
  - ✓ `Satoshi mines the Bitcoin genesis block (January 3, 2009)`

### What not to do

- **Don't stuff keywords** (`"Satoshi Nakamoto Bitcoin whitepaper genesis block 2009"` — search engines penalize this).
- **Don't include the site brand** — the layout prepends `— Bitcoin Institute` automatically. Adding it to `title` duplicates.
- **Don't lead with the date** — the primary identifier goes first; the date (when included) goes at the end or in parentheses.
- **Don't force every title into one template** — a stronger natural title beats a formulaic one.
- **Don't replace the original email Subject on a mailing-list thread starter** — wrap it, don't drop it.
- **Don't change a forum thread starter without updating all `Re: {…}` replies** in the same thread and the same commit.

### When a legacy title is changed

- Changing a title changes the indexed link text but not the URL slug.
- Always update the JA mirror in the same commit.
- If the entry is a **forum** thread starter, cascade to every reply
  (EN and JA) in the same commit. The `check-ja-titles.mjs` script
  warns on JA cascade drift but does not fail the build, so visually
  diff the full thread before committing — do not rely on the
  checker as a gate. See the checker-scope note under §Forum threads
  above.
- If the entry is a **mailing-list** thread starter, do **not**
  cascade — replies keep their original `Re: {subject}` form.
- See `STYLE_GUIDE_JA.md § II.1 Title Policy` for Japanese-specific
  rules (character budget, katakana names in titles, etc.).

## Related Entries

Entries can declare strong semantic cross-references via the `relatedEntries`
frontmatter field. This is distinct from tags (broad topic grouping),
participants (person-centric), threads (conversation flow), and inline
markdown links (prose-level positional references).

### When to use `relatedEntries`

Use it for **entity-level strong cross-references** between 2-10 entries
that record the same event, parallel events, or directly causally-linked
events — cases where tags are too coarse and threads don't apply.

Good candidates:

- Same event recorded from different angles (e.g. a whitepaper document
  and the mailing-list announcement email of that same paper)
- Parallel events (e.g. Satoshi's three farewell emails to Hearn,
  Andresen, and Malmi)
- Sequential events across different directories (e.g. Bitcoin v0.1
  release on SourceForge, the cryptography mailing-list announcement,
  Hal Finney's "Running bitcoin" tweet, and the first BTC transaction)
- Cause and effect (e.g. the 2010-08-15 value overflow incident and the
  0.3.10 patch that fixed it)
- Biography ↔ canonical primary-source entries for that person

### When NOT to use `relatedEntries`

| Situation | Use instead |
|---|---|
| Entries are in the same directory / thread | nothing — threads handle it automatically |
| Broad topical grouping (20+ entries share a theme) | `tags` |
| Person-centric aggregation | `participants` |
| A single reference at a specific position in body prose | inline markdown link |

### Rules

1. **Maximum 10 per file.** If you need more, the grouping is too coarse —
   use `tags` instead.
2. **Bidirectional required.** If A declares B as related, B must also
   declare A as related. Enforced by `npm run check:internal-links`.
3. **No self-reference.** An entry cannot relate to itself.
4. **No thread-internal relations.** If two entries are already in the
   same thread (same directory), do not use `relatedEntries` for them.
5. **Same `relatedEntries` in EN and JA mirrors.** Both language versions
   of an entry must declare the same set of related entries.
6. **Format is the entry ID** (path relative to `src/data/entries/en/`
   without `.md`), e.g. `emails/cryptography/2008-10-31-bitcoin-whitepaper-final`.

### Example

```yaml
# src/data/entries/en/emails/cryptography/2008-10-31-bitcoin-whitepaper-final.md
relatedEntries:
  - emails/cryptography/2008-10-03-bitcoin-whitepaper-draft
  - emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper
```

All three entries in the cluster declare each other, forming a closed
bidirectional group. The site renders a "Related entries" section on
each entry page automatically.

## Participant Slug Convention

Each person has **exactly one canonical slug** used across every entry
regardless of source platform. Source-specific handles (GitHub username,
BitcoinTalk handle, etc.) are preserved only in the `author` field; the
`participants[].slug` and `participants[].name` are always normalized to
the canonical form below.

### Slug selection

1. **Real name publicly known** → real-name slug in kebab-case, used
   for *all* entries by that person.
   - Examples: `jeff-garzik`, `gavin-andresen`, `pieter-wuille`,
     `wladimir-van-der-laan`, `michael-marquardt`.
   - Applies to BitcoinTalk posts, email correspondence, mailing-list
     messages, GitHub commits/PRs/comments, articles, and biographies.

2. **Pseudonym only, no public real name** → the person's handle as slug.
   - Examples: `cobra`, `newlibertystandard`.

### Field responsibilities

- `participants[].slug` — canonical slug per rule above.
- `participants[].name` — display name. Real name when known; handle
  otherwise. Must match the slug's identity.
- `author` (top-level) — source-platform attribution, preserved
  verbatim. May differ from `participants[].name` (e.g. a forum post
  with `author: "jgarzik"` still uses `name: "Jeff Garzik"` and
  `slug: "jeff-garzik"`).

### Evidence bar for "real name publicly known"

To qualify as "publicly known" and trigger rule #1, the real name must
be documented in at least one reliable primary source:

- the archive itself (an existing biography or article that names them)
- a court document or formal legal record (e.g. COPA v Wright evidence)
- self-disclosure — the person's own website, verified social account,
  or public conference talk / published paper under that name
- major press coverage that cites a primary source

Folklore, speculation, unverified internet claims, or third-party
doxxing attempts do not qualify. When in doubt, keep the handle slug
(rule #2) until stronger evidence appears.

### Edge case: handle derived from real name

A handle that closely resembles the real name still uses the real-name
slug.

- `luke-jr` (handle) → `luke-dashjr` (real-name slug)
- `sipa` → `pieter-wuille`
- `laanwj` → `wladimir-van-der-laan`

The rationale: the slug is the participant-page URL. Real-name form
keeps it predictable, searchable, and uniform regardless of how closely
the handle resembles the name.

### Edge case: handle only, real name never disclosed

Some long-term participants are publicly known only by their handle
(e.g. `maflcko`, `cobra`, `newlibertystandard`). Keep the handle slug
per rule #2 until a verifiable real name appears in a primary source.
Do not promote a handle that contains a real name ("MarcoFalke")
unless the person has themselves claimed it as their legal name.

### When a real name becomes publicly known later

A pseudonym-only participant may later have their real name revealed.
To migrate, run these steps in order:

1. Bulk-rename `participants[].slug` in all entries that reference the
   person: old handle slug → new real-name slug.
2. Update `participants[].name` in the same entries from the handle to
   the real name.
3. Update `src/i18n/participants.ts`:
   - Add the new real-name slug entry with the JA display name.
   - Keep the old handle slug entry as well (same JA display) as a
     defensive fallback for any code path that still looks up a display
     name by the old slug.
4. If a biography file exists, rename it to the new slug
   (e.g. `YYYY-MM-DD-cobra-biography.md` →
   `YYYY-MM-DD-<realname>-biography.md`). Update `relatedEntries`
   references on both sides that point to the old filename.
5. Do **not** rename source-entry filenames such as
   `2010-02-10-theymos-msg318.md` — those preserve the source platform's
   original handle for fidelity. Only the `slug` inside the frontmatter
   changes.
6. Run `npm run check` to verify bidirectional links and slug mappings.

A slug migration is a **breaking URL change** —
`/participants/{old-handle}/` will no longer resolve after the migration
because participant pages are statically generated only from slugs that
currently appear in entry frontmatter. If there is a known external
reference to a specific old URL, add a targeted redirect (e.g. via
`astro.config.mjs`'s `redirects` option) as a one-off; do not build a
general aliasing mechanism speculatively.

## Biography Linking

Biographies serve as **navigation hubs** — a reader's entry point into a
person's history in the archive. The body text should link to relevant
participant pages and archive entries so readers can explore further.

### Inline participant links

When a person is named in a biography and has a participant page
(`/BitcoinArchive/participants/{slug}/`), link the name at the first or
most contextually important mention.

- Do not link every occurrence — one per person is enough.
- If a name first appears inside an entry link's text (e.g.
  `[emailed Adam Back](/BitcoinArchive/entries/...)`), add the participant
  link at the next natural mention instead of nesting links.

### Inline entry links

When the biography text mentions a specific event, document, or mailing-list
post that exists as an archive entry, link it. Typical candidates:

- emails and correspondence involving the person
- forum posts, mailing-list messages
- published analyses or retrospectives about the person

Do not over-link: only link to entries that actually exist in the archive.

### relatedEntries for biographies

Follow the general `relatedEntries` rules above. For biographies
specifically:

- Include the person's **canonical primary-source entries** (their own
  emails, posts, or the key events they participated in).
- The bidirectional rule applies — the target entry must also declare
  the biography as a related entry.
- Small biographies (few or no canonical entries) may have 0–1
  relatedEntries. That is acceptable.

### Audit checklist

When creating or editing a biography, verify:

1. All named people with participant pages are linked (at least once).
2. All mentioned events/documents with archive entries are linked.
3. `relatedEntries` includes canonical entries for the person.
4. EN and JA mirrors have matching `relatedEntries`.
5. `npm run check:internal-links` passes after changes.

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
