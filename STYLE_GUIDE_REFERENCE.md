# Bitcoin Institute Style Guide — Reference

Entry-type-specific and situational editorial rules, split from `STYLE_GUIDE.md` on 2026-08-25 to keep the always-required core (`STYLE_GUIDE_CORE.md`) smaller. Read this file when a task actually touches one of the topics below; it assumes `STYLE_GUIDE_CORE.md` has already been read in full.

Covers: Title Policy, Description Policy, Entry Dates, Related Entries, Tag Policy, Participant Slug Convention, Participant Avatars, Biography Linking, Participant-Page Callout, Parent Link, Design-Document Series Navigation, Auto-Link Keywords, Scripted Edits Policy, Review Rule: Duplicate ID Warnings, Technical-Review Robustness.

## Title Policy

Every entry's `title` field is the page's identity across three
audiences, in addition to readers browsing inside the site:

1. **Human readers arriving from search** — the title is the blue link
   in Google results, the OG card in social shares, and the text the
   browser tab renders. If it is cryptic in isolation, the click does
   not happen.
2. **Results lists** — display is truncated around 50–60 characters
   while the full string is indexed, so the identifiers that name the
   subject belong at the front rather than the end.
3. **Citation** — the title is the label the page travels under when
   something else quotes it. An ambiguous one names nothing.

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
- **Recognized cascade exceptions.** Two reply-title patterns are
  legitimately allowed to deviate from the starter and must be
  preserved across renames; the cascade enforcement (script and
  bulk-fix tool) skips them by design. These are not loopholes — they
  encode historical reality the cascade would otherwise erase.
  - **(a) Context-post replies.** A reply that quotes a *non-starter*
    post (i.e., quotes another reply rather than the original topic)
    is titled `Re: (context post by NAME)` (preferred) or the older
    variant `Re: (quoted post by NAME)`. The JA mirror is
    `Re:（NAMEの文脈投稿）`. This pattern is heavily used across the
    EN forum tree and is the canonical Archive editorial form for
    replies whose anchor is a specific in-thread quote rather than
    the topic itself.
  - **(b) Subject-deviation replies.** When a forum reply's actual
    Subject line in the original BitcoinTalk thread differs from the
    starter's (e.g., the poster manually changed the subject), the
    historical Subject is preserved as the reply's title, and the JA
    mirror translates that historical Subject — not the cascaded
    starter. This is the same principle as the mailing-list rule
    below (preserve the original Subject as historical evidence), but
    applied per-reply within a forum thread when the original poster
    overrode the subject.
- **Checker scope (important).** `scripts/check-ja-titles.mjs`
  partially enforces the cascade with the two exceptions above:
  - It scans `src/data/translations/ja/forum/*` only (JA files), not
    the EN source tree.
  - Mismatches are reported as **warnings**, not errors — the build
    does not fail on a cascade drift.
  - Exception (a) is detected by a JA-side regex match on
    `Re:（…の文脈投稿）`. Exception (b) is detected by reading the
    JA file's EN counterpart and verifying the EN reply title also
    deviates from the EN starter. Either match silences the warning.
  - Thread starter detection is heuristic: the first entry whose
    title does not begin with `Re:` / `返信:` is treated as the
    starter. If a reply is retitled to also drop the `Re:` prefix,
    the checker silently treats it as a second starter and skips
    cascade verification for it. Do not retitle a reply into a
    standalone editorial form to "route around" the checker —
    cascade the starter instead. (The two recognized exceptions
    above keep the `Re:` prefix.)
- Use `scripts/fix-ja-reply-titles.mjs --apply` to mass-update reply
  titles once the starter is set. The bulk fixer respects the same
  two exceptions as the checker, so context-post and subject-deviation
  replies are skipped during cascade rewrites.

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

#### Aftermath / article

- Location: `src/data/entries/en/aftermath/*`
- Preserve the original article title. Light contextual prefixes /
  suffixes are acceptable when the original title is ambiguous on
  its own.
  - ✓ `Jameson Lopp analyzes whether Satoshi Nakamoto was a 'greedy' miner`
- **Release / genesis records** (editorial reconstructions of dated
  events on the source channel — e.g. SourceForge releases, Genesis
  Block hardcode):
  - `Bitcoin v{N.N} released ({date})` for releases.
  - Standalone events follow the generic rule (actor, object, date):
    ✓ `Satoshi mines the Bitcoin genesis block (January 3, 2009)`
  - `source: <channel>` records the distribution channel; the entry
    itself is editorial article in `aftermath/`.
- **Identification claims / theories** (entries documenting a specific
  Satoshi-identification claim or named theory — HBO Money Electric,
  NYT Carreyrou, Finding Satoshi, Murphy v DHS, etc.) may use the
  archetype **`{Theory name or subject} — {source artifact}: {claims
  and counter-evidence}`**. The original article / documentary title
  goes in the body of the title after the em-dash; the theory or
  identification frame leads. Examples in the corpus:
  - ✓ `Peter Todd = Satoshi Nakamoto theory — HBO "Money Electric" claims and counterevidence`
  - ✓ `Adam Back = Satoshi Nakamoto theory — New York Times 2026 investigation claims and counter-evidence`
  - ✓ `Finney + Sassaman 'Satoshi co-creators' theory — Finding Satoshi (April 22, 2026) documentary case and counter-evidence`
  - ✓ `The U.S. government and Satoshi Nakamoto — Murphy v DHS (April 7, 2025) FOIA suit for records of a 2019 DHS-agent claim to have interviewed four people behind Bitcoin`

  The JA mirror uses a parallel `「{theory name}」 ― {source artifact + details}` form (`サトシ複数人説 ― ...`, `サトシ政府機関説 ― ...`) to keep wave-grouping visually coherent in the JA listing.

- **Multi-year incident aftermath** (exchange hacks, prosecutions,
  loss sagas spanning several documented events): the title may lead
  with the canonical event name (Wikipedia-page-title style) and list
  the most search-relevant subordinate facts after an em-dash. The
  Wikipedia / first-major-coverage title is preserved as the lead;
  the suffix is editorial SEO context for the multi-year span.
  - ✓ `Mt. Gox files for bankruptcy — 850,000 BTC lost`
  - ✓ `2016 Bitfinex hack — Razzlekhan arrest, $3.6B recovery, six-year laundering arc`

Why these two carve-outs: identification entries and multi-year
incident entries both fail the "preserve original title" rule under
its plain reading, because the original source title is too generic
(`U.S. Government, Satoshi Nakamoto's Identity, FOIA Lawsuit`,
`2016 Bitfinex hack`) to identify its own subject when read out of
context. The patterns above are the corpus's practiced compromise:
lead with the identifier that names the thing (theory name or
canonical event name), append the source artifact and key facts
after an em-dash. Forum / mailing-list / correspondence
entries continue to follow strict preservation per the per-category
rules above.

#### Analysis (Bitcoin Institute editorial readings)

- Location: `src/data/entries/en/analysis/*`
- Evocative register is the default: an analysis page is usually the
  first thing a reader meets on its subject.
- Use the archetype `{Subject}: {concrete enumeration} and {the stake}`
  (see § Register below). Reach for descriptive only when the subject
  doesn't lend itself.
- Canonical search keywords (`Satoshi Nakamoto`, `Bitcoin`, named
  candidates, dated events, named documents) must appear in the title.
- Primary-source titles stay descriptive (historical Subject
  preserved); evocative is for analysis only.
- Examples:
  - `Who Is Satoshi Nakamoto: 10 Geniuses and the Mystery of the Century`
  - `Bitcoin's family tree: forks, altcoins, and the mainline Bitcoin
    that endured`

#### Guide

- Location: `src/data/entries/en/analysis/*` — `guide` entries are not
  moved to their own directory; the archive does not require a
  directory to match its entries' `type` (e.g. `aftermath/` already
  holds `article`, `biography`, `mailing-list`, and `court-document`
  entries side by side).
- Descriptive register, not evocative. State plainly what the page
  teaches; do not reach for `analysis`'s enumeration-and-stakes
  archetype or any dramatized framing — a reader with no prior
  exposure to the subject cannot yet appreciate a stake the title
  claims, and a guide's job is to earn that appreciation across the
  body, not assert it in the title.
- A series' index page keeps a stable title across rewrites (its URL
  is the series' front door and existing inbound links target it); a
  topic page inside the series takes a short, literal title naming
  the one thing it teaches.
  - ✓ `How Bitcoin actually works: a visual glossary from coins to
    consensus` (index)
  - ✓ `What owning a bitcoin actually means`
  - ✗ `Understanding UTXOs: A Deep Dive` — "deep dive" promises the
    depth this type exists to avoid; see
    [STYLE_GUIDE_CORE.md § Guide entries](STYLE_GUIDE_CORE.md#guide-entries-audience-calibration-and-scope).

#### Biographies

- Pattern: `{Name} ({dates}) — {one-line role}`
  - ✓ `Hal Finney (1956–2014) — Cypherpunk, PGP developer, first Bitcoin recipient`

#### Whitepaper / BIP

- Preserve the original formal title, with optional `(Whitepaper)` or
  `(BIP N)` suffix.
  - ✓ `Bitcoin: A Peer-to-Peer Electronic Cash System (Whitepaper)`
  - ✓ `BIP 125: Opt-in Full Replace-by-Fee Signaling`

### Register: descriptive vs. evocative

The baseline-criteria table above governs *what must be present* in a title (identifiers, length, distinctiveness). The choice of register — flat-descriptive versus evocative — is governed by the event itself. Two rules apply on top of the baseline criteria:

- **Use the canonical name of the event when one exists.** If the historical event has a name in the literature (the "block-size war", "the resolution of the Bitcoin experiment", "Bitcoin Pizza Day"), use that name rather than a paraphrase. The named form is what readers and AI systems search for, and replacing it with generic vocabulary breaks both recall and citation reuse.
- **Prefer wording that reflects the actual stakes over generic verbs.** "Launches", "publishes", "announces" are filler when the event was significant. If the event is significant, the title should say what was at stake; if the event was uneventful, plain descriptive wording is the correct choice. A title may go further and dramatize or overstate those stakes beyond the literal precision the entry itself holds to — the title's job is to make a reader want to open the entry, not to serve as a citation-grade summary of it. The entry body carries the accurate, sourced account; see the one hard limit below.

A useful archetype is **`{Subject}: {concrete enumeration} and {the stake}`** — a strong subject phrase up front, a colon, and a body that lists concrete countables (numbered groups, dated events, named participants) followed by the stake of the entry. This archetype reads aloud naturally and gives both human readers and AI systems a precise citation label. Example shape:

- `Who Is Satoshi Nakamoto: 10 Geniuses and the Mystery of the Century`
- `Bitcoin's family tree: forks, altcoins, and the mainline Bitcoin that endured`

The archetype is a target shape, not a template. If the entry's subject does not lend itself to a list-and-stake construction, force-fitting it produces titles that read as marketing rather than as catalog entries. Use a flat descriptive title in that case.

Revisions that improve a flat title without changing the identifiers:

- ✗ `Bitcoin XT launch (August 2015)` — actor and date present, but no stake
- ✓ `Bitcoin XT launches the block-size war — Hearn and Andresen propose 8 MB blocks (August 2015)`

- ✗ `Mike Belshe cancels SegWit2x (November 2017)` — accurate, but reads like a row in a table
- ✓ `SegWit2x cancelled three days before activation — Mike Belshe ends the New York Agreement (November 2017)`
- ✓ (dramatized register, also acceptable) `SegWit2x died three days before launch — one email ended the New York Agreement` — overstates a routine cancellation as a singular, dramatic event; the body carries the fuller, measured account of who else was involved and why.

This rule is **subordinate to the per-category rules above.** Forum and mailing-list thread starters preserve the original topic / Subject line — the evocative rewrite applies to the editorial wrapping, not to the historical Subject. Biographies follow the `{Name} ({dates}) — {role}` template — the role line carries the register, the name-and-dates anchor does not.

The archive is publicly indexed and cited by external researchers, journalists, and AI systems, which is exactly why the entry *body* holds to a strict, sourced, accurate standard — but a title is not a citation label, and is free to be bold, provocative, and performative in a register the body doesn't use. Titles may dramatize the stakes, the numbers, the mystery, the reversal. **The one hard limit:** a title must never state, as fact, an unflattering or false claim about a real, identifiable person's character, conduct, or culpability that the entry doesn't support. Dramatize the event, not a person beyond what the record shows.

### What not to do

- **Don't stuff keywords** (`"Satoshi Nakamoto Bitcoin whitepaper genesis block 2009"` — search engines penalize this).
- **Don't include the site brand** — the layout prepends `— Bitcoin Institute` automatically. Adding it to `title` duplicates.
- **Don't lead with the date** — the primary identifier goes first; the date (when included) goes at the end or in parentheses.
- **Don't force every title into one template** — a stronger natural title beats a formulaic one.
- **Don't replace the original email Subject on a mailing-list thread starter** — wrap it, don't drop it.
- **Don't change a forum thread starter without updating all `Re: {…}` replies** in the same thread and the same commit. (Replies covered by the two recognized cascade exceptions — context-post and subject-deviation — are excluded from this requirement; see the §Forum threads exception block above.)

### When a legacy title is changed

- Changing a title changes the indexed link text but not the URL slug.
- Always update the JA mirror in the same commit.
- If the entry is a **forum** thread starter, cascade to every reply
  (EN and JA) in the same commit, except the two recognized
  exceptions (context-post replies and subject-deviation replies; see
  §Forum threads). The `check-ja-titles.mjs` script warns on JA
  cascade drift but does not fail the build, so visually diff the
  full thread before committing — do not rely on the checker as a
  gate. See the checker-scope note under §Forum threads above.
- If the entry is a **mailing-list** thread starter, do **not**
  cascade — replies keep their original `Re: {subject}` form.
- See `STYLE_GUIDE_JA.md § II.1 Title Policy` for Japanese-specific
  rules (character budget, katakana names in titles, etc.).

## Description Policy

The frontmatter `description` field has multiple consumers, both
external and internal. The length cap is set at the intersection of
the *effective* display windows, not at the strictest theoretical SEO
sweet spot.

### Where description is consumed

**External (emitted to HTML head, read by external tools and crawlers):**

| Output | Source | Effective display window |
|---|---|---|
| `<meta name="description">` | `BaseHead.astro` | Google SERP truncates ~155-160 half-width / ~70-80 full-width chars by pixel. **Note:** Google increasingly auto-generates SERP snippets from body content, so the meta tag is no longer the dominant SERP source. |
| `<meta property="og:description">` | `BaseHead.astro` | Facebook ~110-200, LinkedIn ~150-200, Slack unfurls show near-full text. |
| `<meta name="twitter:description">` | `BaseHead.astro` | X `summary_large_image` card: ~200. |
| JSON-LD `Article.description` | `BaseHead.astro` | Structured data; no display truncation. |

**Internal (rendered as visible UI on the site itself):**

| Output | Source | Truncation |
|---|---|---|
| Entry-list card body `.card-description` | `EntryCard.astro` | **None — verbatim, no `-webkit-line-clamp`, no JS truncation.** |
| Homepage analysis section `.analysis-desc` | `pages/index.astro`, `pages/ja/index.astro` | None. |
| Participant page biography description | `pages/participants/[participant].astro` | None. |

### Length caps

The dominant practical constraints are (a) social-share preview windows
(OGP / Twitter Card, ~200 chars) and (b) entry-list card legibility
(verbatim render, must fit within roughly 1-2 lines on the card).
Google's strict SERP cap (160/80) is no longer the binding constraint
because Google auto-generates from body content.

| Language | Cap | Rationale |
|---|---|---|
| **EN** | **200 characters** | OGP/Twitter Card display window; ~1-2 lines on entry-list cards. |
| **JA** | **100 characters** | Same effective visual width as EN 200, accounting for full-width character pixel ratio. |

Counted by `String.length` (each character counts as 1, regardless of
half-width / full-width). Enforced by
`scripts/check-description-length.mjs`, wired into `npm run build`
and `npm run check` in `--strict` mode (a single overflow fails the
build). The script previously ran in WARN mode while the legacy
backlog of 384 violations from prior authoring practice was being
remediated; the switch to `--strict` happened once the backlog
reached zero.

### When the cap forces information out of description

If the description currently carries body-summary content that pushes
it past the cap, **move that content into the body** rather than
relaxing the cap or splitting into multiple short sentences that lose
meaning. The description's job is to give a search-result reader (or
SNS preview viewer, or entry-list browser) enough to decide whether to
open the entry. Anything beyond that belongs in the body.

## Entry Dates

An entry has two independent date axes:

- **`frontmatter.date`** — the entry's anchor to the historical event
  it describes (when a forum post was made, an email sent, a BIP
  published). Stable: it doesn't change as the file is edited.
- **git history `createdAt` / `updatedAt`** — when the entry's source
  file was first committed and last edited. Derived per language
  (EN and JA tracked independently) by
  `scripts/generate-git-dates.mjs` into `src/data/git-dates.json`,
  consumed by the entry detail page, OG / structured-data emission,
  and the type-listing card.

The two axes mean different things, so they surface differently
depending on the entry type. For event-anchored types — primary
sources (`forum-post`, `mailing-list`, `correspondence`, `whitepaper`,
`bip`, `court-document`), plus the editorial types `article` and
`biography` whose `date` anchors them to the event or life being
covered — the frontmatter date *is* the meaningful date: the post
was sent on that day, the BIP was filed on that day, the article
recaps something that happened on that day. (Editorial type
classification: see § Primary-Source Entries vs Editorial / Narrative
Entries above; the two share an "event date" semantics here, but
their bodies follow opposite rules — primary-source bodies hold the
verbatim source, editorial bodies hold editor narrative around the
source.) For `analysis` and `design` entries the frontmatter date is
the date of the underlying event being analysed (or the protocol
milestone being described), not of the editorial piece itself. It is
still shown as `Event` to identify that historical anchor; the separate
`Added` and `Updated` values identify the archive file's registration
and body-edit history.

### `updatedAt` policy: body changes only

`updatedAt` reflects **body-content changes only**. A commit whose
diff against an entry file touches only the YAML frontmatter (the
region between the opening and closing `---`) does **not** bump
`updatedAt`. Concretely, none of the following bump it:

- `relatedEntries` additions or removals
- `tags` additions, removals, or renames
- `secondarySources` additions or edits
- `title`, `description`, `participants`, `source`, `sourceUrl`,
  `isSatoshi`, `translationStatus`, `date`, `type` edits
- Any other frontmatter field change

The cutoff is mechanical: the file's frontmatter is everything from
the opening `---` to the next standalone `---` line; everything after
the closing `---` is the body. `scripts/generate-git-dates.mjs`
implements this by fetching each commit's blob via
`git cat-file --batch`, stripping the frontmatter, and hashing the
remaining body — `updatedAt` is the newest commit whose body hash
differs from its immediate predecessor.

The intent is to keep "recently updated" chronological listings
honest. Adding a new analysis entry that naturally adds a back-link
in 5-10 existing related entries should **not** push those 5-10
existing entries to the top of the listing, because their content
has not changed. The same applies to bulk metadata edits like a tag
rename or a `secondarySources` URL fix.

The line is drawn on "did the body change," not on "is the change
reader-visible." A title or description edit IS reader-visible (it
shows in listing cards and OGP), but it is still a frontmatter edit
and does not bump `updatedAt`. Editors who want a metadata change to
register as an update should accompany it with a substantive body
edit in the same commit.

### Display

Every surface that displays an entry date — the full archive, secondary
listings, related-entry lists, Algolia results, entry detail pages, and
biography participant pages — shows all three independent values. The two
home-page card groups (`Start Here` and `Analyses`) use the same component in
a compact two-value form (`Event` + `Updated`) so their cards do not wrap:

Related-entry lists use the same component in a compact one-value form
(`Event` only), preserving the established date-only navigation treatment.

| Value | Source | Reader-facing label |
|---|---|---|
| Historical anchor | `frontmatter.date` | `Event` (`entry.event`) |
| Archive registration | git `createdAt` | `Added` (`entry.added`) |
| Latest body edit | git `updatedAt` | `Updated` (`entry.updated`) |

The three values are rendered by the shared
`src/components/EntryDates.astro` component. A missing git-history value
falls back to `frontmatter.date`, using the same `resolveDateValues()`
policy for server-rendered cards, home and related-entry lists, Algolia
result cards, detail metadata, and biography pages. Sort controls change only the ordering; they never
replace or hide one of the three displayed dates. The labels are
localized through `i18n/ui.ts`, so the Japanese interface uses `対象日`,
`登録日`, and `更新日`.

### Listing sort order

| Listing | Sort key (descending) |
|---|---|
| `/types/analysis/` and `/types/design/` (and JA mirrors) | `git updatedAt` |
| All other `/types/<type>/` pages | `frontmatter.date` |
| `/index.astro` (full-archive timeline) | `frontmatter.date` |
| Per-category / per-source / per-participant pages | unchanged (context-dependent) |

The analysis listing is editorial — newly added or recently revised
analyses should surface at the top. Other listings are historical
maps; sorting them by edit time would push recently-touched old
entries above newer source events and break the archive's
chronological geometry.

### Structured data and OGP

The detail page emits `article:published_time` /
`article:modified_time` and a JSON-LD `Article` with `datePublished` /
`dateModified`. These align with the on-page label:

| Entry type | `datePublished` / `article:published_time` | `dateModified` / `article:modified_time` |
|---|---|---|
| `analysis` / `design` | `createdAt` (fallback: `updatedAt`, then `frontmatter.date`) | `updatedAt` (fallback: `frontmatter.date`) |
| All others | `frontmatter.date` | `updatedAt` (fallback: `frontmatter.date`) |

The fallback chain matters: a brand-new file that hasn't yet been
captured in `git-dates.json` (preview, just-merged) must not break
sort order or emit invalid metadata. Falling back to
`frontmatter.date` keeps the page coherent until the next git-dates
regeneration.

### Why every entry type shows all three values

The archive keeps the axes visible even when their meanings differ by
entry type. `analysis` and `design` use `frontmatter.date` as the
historical event or protocol milestone being discussed; `article` uses
the publication or covered event anchor; and `biography` retains its
existing person-related date semantics, which may be a birth year,
first-mention date, or associated event. Hiding one axis based on type
made mixed listings and biography pages difficult to compare. The labels
make the distinction explicit: `Event` is the historical anchor, while
`Added` and `Updated` describe the archive record itself.

The earlier rule that showed only a `Created`/`Updated` pair for
`analysis`/`design`, or only the event date for biographies, is
superseded by this three-axis display rule. The frontmatter semantics,
structured-data fallback chains, and listing sort defaults remain
unchanged.

### Threads and updatedAt sort

`collapseThreads` returns one representative per thread for listing
pages. Sorting threads by the *representative's* `updatedAt` is only
correct when the representative reflects the freshest edit in the
thread; when a later message in the same thread is edited, the
representative may be stale. The current `analysis` listing is not
thread-based, so this does not bite. Any future expansion of the
`updatedAt` sort to a thread-bearing type (`forum-post`,
`mailing-list`) must aggregate `max(member.updatedAt)` across the
thread before sorting.

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

1. **No data-side cap; data-layer order is editorial priority.**
   `relatedEntries` accepts any number of items. Order by editorial
   importance (index 0 = most important).
2. **Priority ordering convention (editorial documentation).** Place
   items in this order:
   1. Pair entry / direct counterpart (e.g. `identity-hypotheses-overview`
      ↔ `anonymity-architecture`).
   2. Biography or canonical catalog entry for the central participant.
   3. Cause-and-effect partner (e.g. the 2010-08-15 overflow incident
      and the 0.3.10 patch that fixed it).
   4. Same event recorded from a different channel (e.g. whitepaper
      document ↔ announcement email).
   5. Specific event referenced in body prose. **If the entry is also
      reached via an inline markdown link in the body, prefer to lean on
      the inline link and place the relation low in priority** — the
      reader already has a body-level path to the entry.
3. **Bidirectional required.** If A declares B as related, B must also
   declare A as related. Enforced by `npm run check:internal-links`.
4. **Reciprocal body inline-link for strong relations — editorial
   types only.** When the relation is *strong* (a reader of A will
   substantively benefit from reading B, not just be reminded of B's
   existence), the reciprocal link should also exist as an **inline
   markdown link in B's body prose** pointing to A — not only as a
   `relatedEntries` entry. The `relatedEntries` side handles all
   related pairs (weak and strong) mechanically and bidirectionally;
   body inline links handle the strong subset, also bidirectionally.

   **Scope: editorial types only** (`article`, `analysis`, `biography`,
   `design`, `currency`, `guide`). Primary-source types (`correspondence`, `mailing-list`,
   `forum-post`, `bip`, `whitepaper`, `court-document`, `tweet`) are
   **excluded** from this rule — their bodies are the verbatim source
   record and must not carry editor-inserted prose for any purpose,
   per [§ Primary-Source Entries](STYLE_GUIDE_CORE.md#primary-source-entries) and
   [§ No editor narrator inside primary-source bodies](STYLE_GUIDE_CORE.md#no-editor-narrator-inside-primary-source-bodies).
   `relatedEntries`-side bidirectionality (rule 3) continues to apply
   to primary-source entries; only body-prose reciprocity is
   restricted to editorial types.

   A new editorial page that declares 15 `relatedEntries` should
   expect that roughly half of those are strong enough to warrant a
   body-prose mention in the reciprocal direction; the remaining half
   stay as `relatedEntries` only on both sides. Weak relations
   (mentioned for context, not load-bearing for the argument) should
   not be forced into body prose just to satisfy this rule — leave
   them as `relatedEntries`-only and accept the asymmetry. Strong
   relations whose other side is a primary-source entry rely on
   `relatedEntries` alone in the primary-source direction, with body
   inline-link reciprocity provided only on the editorial side.
5. **No self-reference.** An entry cannot relate to itself.
6. **No thread-internal relations.** If two entries are already in the
   same thread (same directory), do not use `relatedEntries` for them.
7. **Same `relatedEntries` in EN and JA mirrors.** Both language versions
   of an entry must declare the same set of related entries (and in the
   same priority order).
8. **Format is the entry ID** (path relative to `src/data/entries/en/`
   without `.md`), e.g. `emails/cryptography/2008-10-31-bitcoin-whitepaper-final`.

### Why no data-side cap

A hard cap forces a delete decision every time a new strong relation
is added. Deletion has nontrivial cost: the reverse link must also be
removed, downstream tooling that walks the graph loses information,
and edits become a seesaw of add-here / remove-there. By moving the
cap to the **display** layer and treating the list as priority-ordered,
adding a new relation becomes a single insert (at the priority slot it
deserves), and the renderer enforces the visible limit automatically.
The data layer remains a complete graph; the UI shows the most relevant
slice.

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

## Tag Policy

The `tags[]` frontmatter field names a **recurring, reusable theme** —
an axis a reader would browse other entries by (a country or policy
context, a cultural/genre lens, a technical concept, a role). It is
not a per-entry descriptor of that one entry's own unique fact.

### The reusability test

Before adding a tag, ask: **could a different entry — a different
date, person, or event — plausibly carry this same tag too?**

- Pass: `japan` (any entry touching Japanese regulation, culture, or
  people could carry it), `cyberpunk` (a genre/cultural lens usable
  across many analyses), `monetary-policy`, `proof-of-work`.
- Fail: `block-170`, `v0.3.10` — each names a fact intrinsic to one
  specific historical event. No other entry will ever be "about
  block-170" in the same sense a second entry can be "about Japan."
  A fact like this belongs in the title and body prose, not a tag.

A tag does not need a second entry to already exist before it's
valid — the archive's first entry on a genuinely broad theme still
passes this test on its own. What fails the test is a tag whose
underlying thing (a version number, a single incident's own detail)
could never recur under a second entry, by its own nature — count is
never the test itself, only a signal to re-examine (see below).

### Don't duplicate an existing axis

Do not create a tag that only restates what `type`, `participants[]`,
or `source` already encode. A tag matching a participant's own name
on their own biography (`jonathan-thornburg` on
`jonathan-thornburg-biography.md`) duplicates `participants[]`, which
already aggregates "entries involving this person" — remove it,
don't tag it.

### Check the existing tag list before minting a new one

`tags[]` is a shared, finite vocabulary, not a free-form per-entry
field. Before adding a tag, check whether an existing tag already
names the same theme, and reuse it rather than inventing a narrower
or duplicate variant. This is also a coverage check in the other
direction: when an entry is clearly *about* a theme an existing tag
already covers, apply that tag — do not leave it untagged because the
entry's primary subject is something else. A techno-orientalism
analysis whose entire argument runs through AKIRA and Neo-Tokyo
belongs under the `japan` tag alongside entries about Japanese
regulation, even though its `type` is `analysis`, not a Japan-specific
document.

### What a low entry-count means

A tag sitting at 1-2 entries is not automatically wrong — see the
reusability test above — but it is the practical **signal to
re-examine** it, individually, against three outcomes:

1. **Merge** — an existing broader tag already covers this theme;
   the entry is just missing it (the AKIRA/`japan` case above).
2. **Keep and extend** — the theme is genuinely reusable and simply
   hasn't been cross-applied yet; find the other qualifying entries
   and tag them too.
3. **Remove** — the tag fails the reusability test or duplicates an
   existing axis (see the two sections above); the fact stays in the
   title/body only.

A tag that clears the reusability test and already has broad,
consistent coverage across its qualifying entries needs no further
action regardless of its count — `[§ Related Entries](#related-entries)`'s
"20+ entries share a theme" description of when `tags` is the right
tool illustrates the scale a mature theme tends to reach, not a
minimum gate a new one must clear before it may exist.

### Naming

Lowercase, hyphen-separated, English canonical
(e.g. `monetary-policy`, not `MonetaryPolicy` or `Monetary Policy`).
JA is a display-layer translation of the same canonical tag (see
`STYLE_GUIDE_JA.md`), not a second independent vocabulary.

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

## Participant Avatars

Quote chips, participant pages, and entry-card bylines show a
per-person avatar, resolved by `resolveAvatar()` in
`src/data/avatars.ts`. A slug resolves to a real photo when one is
registered in `avatarPhotos`; otherwise it falls back automatically
to a generated initial-on-a-hue disc rendered at build time from the
slug alone. Most participants need no manual action — only
registering a real photo requires editorial input.

**Real-photo licensing.** Every `avatarPhotos` entry must record
`credit` (author / rights holder — required for CC BY-family
attribution), `license`, `sourceUrl`, and `fetchedAt` (`YYYY-MM-DD`).
Acceptable sources: Wikimedia Commons (public domain / CC BY / CC
BY-SA) or an image the subject themselves published under a
re-distributable licence. Forum avatars, Gravatar, press-agency
photography, and images without confirmed identity are not
acceptable sources — the same identity-and-rights bar as any other
archive citation.

**Satoshi Nakamoto never gets a real-photo entry.** No photograph of
Satoshi exists; the generated initial (rendered as a themed span
rather than a baked image) is the permanent, historically accurate
representation — not a placeholder awaiting a photo.

Real photos are git-tracked
(`public/images/avatars/people/<slug>.webp`, external assets that
cannot be regenerated); generated avatars are not (deterministic from
the slug alone, same convention as the OG-image pipeline).

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

### Body integration for Satoshi-candidate biographies

A biography of a person named in any
`analysis/*-satoshi-identity-hypothesis.md` entry is a Satoshi-candidate
biography. The candidacy mention must be **integrated into the main
biography prose** (typically the closing paragraph of the
relationship-to-Bitcoin section) — not placed in a standalone trailing
"Satoshi Speculation" / "サトシ推測" section. The integrated paragraph
names: why the person is a recurring candidate (Bit Gold lineage, RPOW
+ first Bitcoin recipient, b-money reference [1], etc.), the
hypothesis entry as the principal destination (linked inline), the
principal supporting articulations (Skye Grey 2013, Aston 2014,
Cafiero / Carreyrou 2026, each linked where an archive entry exists),
and the principal counter-evidence (alibi, denial, capability gap,
Patoshi-scale inconsistency — likewise linked).

Existing examples to mirror: Wei Dai, Hal Finney, Sassaman, Kaneko,
Szabo biographies. A standalone trailing "Speculation" section is the
deprecated form; migrate existing ones to the integrated form when the
bio is touched. The candidate-status mention is part of the person's
documented public reception, not an editorial footnote — it belongs in
the same narrative register as the rest of the bio.

### Audit checklist

When creating or editing a biography, verify:

1. All named people with participant pages are linked (at least once).
2. All mentioned events/documents with archive entries are linked.
3. `relatedEntries` includes canonical entries for the person.
4. EN and JA mirrors have matching `relatedEntries`.
5. If the biography should surface a recommended-analysis chip on the
   participant page, the `callout` field is set per the
   "Participant-Page Callout" section below.
6. `npm run check:internal-links` passes after changes.

## Participant-Page Callout

Each participant page (`/participants/<slug>/`) may display a single
callout card near the top — magnifying-glass icon, a short label, and
an arrow — pointing at one analysis page recommended as the entry
point for further reading about that person.

The callout is declared on the **biography entry's frontmatter**, not
on the analysis entry. The biography is the single source of truth
for what shows up on the participant page; analysis entries do not
opt in or surface themselves.

### Declaration

```yaml
# Biography frontmatter (EN file → EN label, JA file → JA label):
callout:
  entry: "analysis/2014-03-25-hal-finney-satoshi-identity-hypothesis"
  label: "Identity hypothesis"
```

The `entry` value is the analysis entry's id (without leading slash,
matching the form used in `relatedEntries`). The `label` is the visible
text rendered in the callout chip — short noun phrase, no trailing
punctuation, in the same locale as the file.

When `callout` is omitted, no callout renders.

### Rules

- **One callout per biography.** A single recommended-analysis link.
  If multiple analyses about the same person exist, pick the one that
  best serves a reader landing on the bio.
- **Set on biographies only.** `callout` on non-biography entries has
  no effect; the participant page reads only `biographyEntry.data.callout`.
- **EN and JA must agree on the `entry` and translate the `label`.**
  EN bio uses the EN label, JA bio uses the JA label, both pointing at
  the same analysis id.
- **Target the analysis a reader would expect to deepen their
  understanding of the person.** A callout surfaces under "more about
  this person" — the target must be participant-centric (a hypothesis
  page, a profile-shaped reading) or a topic page that prominently
  covers this person (the identity-hypotheses overview, used by the
  Satoshi Nakamoto biography itself). Do not
  point a bio's callout at an event-centric analysis (incident
  structure, technical postmortem) just because the person was an
  actor in the event.

### Current callouts (14 biographies)

| Biography | Callout target |
|---|---|
| Satoshi Nakamoto | identity-hypotheses overview |
| Wei Dai, Hal Finney, Adam Back, Nick Szabo, Len Sassaman, Isamu Kaneko, Peter Todd | their dedicated identity-hypothesis page |
| Dorian Nakamoto, Craig Wright, Paul Le Roux, James Donald, Elon Musk | their dedicated identity-hypothesis page |
| knightmb | knightmb snapshot-and-legend analysis |

### Audit

When adding or changing a `callout`:

1. The target entry id resolves (run `npm run check:internal-links`).
2. EN and JA bios both declare the field, with the same `entry` and
   locale-appropriate `label`.
3. The target analysis is participant-centric, not event-centric.
4. The participant page renders the callout in `npm run dev` (visit
   `/participants/<slug>/` and `/ja/participants/<slug>/`).

## Parent Link (`partOf`)

An entry may declare a parent / hub entry via the `partOf` frontmatter
field. The entry page then renders a breadcrumb-style "Part of" link near
the top (below the title, above the body — see `ParentLink.astro`)
pointing up to that hub.

This is the structural counterpart to the [Participant-Page
Callout](#participant-page-callout): the bio callout points a person's
page *down* to their analysis; `partOf` points a child page *up* to the
hub it belongs to. Each of the Satoshi-candidate identity-hypothesis
pages declares:

```yaml
partOf: "analysis/2008-10-31-satoshi-identity-hypotheses-overview"
```

so a reader landing on one candidate can return to the full comparison
from the top of the page. The overview already lists every candidate in
the reverse direction (via `relatedEntries` and its comparison table),
so the relation is two-way without a central list to maintain.

### Rules

- **One line per child, no central registry.** The candidate set is not
  hardcoded anywhere; adding a candidate page is a single `partOf` line
  on that page, with no structural change.
- **Set on the child, in both locales.** The EN and JA mirrors of a child
  entry both declare the same `partOf` id (a language-neutral entry id;
  the visible link text is the parent's own title, resolved per locale).
- **Target a hub, not a sibling.** `partOf` is a one-level child → hub
  relation. Peer relations stay in `relatedEntries`; a reading order
  within a curated series uses a dedicated series component (see
  `DesignSeriesNav.astro` and § Design-Document Series Navigation
  below).
- **Graceful when unresolved.** If `partOf` is unset or does not resolve
  to an entry, no link renders.

## Design-Document Series Navigation

The 12-page design-document series (`design/*`: L0 system overview,
L1 #1–8 domain pages, L2 #9–11 cross-cutting pages) shares one
position-notation convention across every page and both locales, so a
reader who lands on any page — from search, a link, or the series
component below — can tell where it sits in the tree without reading
the rest of the site.

**Position notation.** Every design entry's opening paragraph states
its position as `L0`, `L1 #N`, or `L2 #N`. Use this token form only —
never a plain ordinal ("the third page"), and never a second
vocabulary for the same concept. The JA mirror carries the identical
`L0` / `L1 #N` / `L2 #N` tokens; do not translate the position marker
into 「ページ」 or 「編」, and do not mix the two JA words for
"entry in the series" across pages — the `L…` token is the only
position label, in both locales.

- EN: `This page is **L1 #2 — Transaction design** in the [design-document series](.../bitcoin-system-design-overview/).`
- JA: `本ページは[設計文書シリーズ](.../bitcoin-system-design-overview/)の **L1 #2 — トランザクション設計** である。`

**Series order lives in one place.** `src/data/design-series.ts` is
the single source of truth for the L0 → L1 #1..#8 → L2 #9..#11 order,
slugs, and bilingual titles. Two consumers read it instead of each
hardcoding their own copy of the order:

- `DesignSeriesNav.astro` — the tree-style table of contents rendered
  at the top of every design entry, current page highlighted (see
  § Parent Link above).
- prev/next links on the entry page
  (`src/pages/entries/[...slug].astro` and its JA mirror) — every
  design entry shares one frontmatter `date`, so the site-wide date
  sort used for prev/next on every other entry type carries no
  ordering signal here; design entries walk `DESIGN_SERIES` instead.

Adding a new design page means appending one entry to
`design-series.ts` — both consumers pick it up automatically, so
there is no second place to register the page.

## Auto-Link Keywords (concept and person)

Analysis, aftermath, and biography pages carry interpretive value that
is easy to miss if readers find them only through the `relatedEntries`
sidebar. The archive surfaces these pages mechanically via a
**server-side auto-linking pipeline**: the first occurrence of a
declared keyword in any entry's body prose is converted to a link to
the keyword's definition page during markdown processing, in both
`npm run dev` and `npm run build`.

This replaces the older "manual `[X](url)` body links + coverage gap
report" workflow. Editors no longer scatter inline links by hand; they
declare keywords once on the definition page, and the renderer fans
them out across the archive.

### Two keyword classes

**Concept keywords** — declared via `inlineLinkKeywords` in the
frontmatter of an editorial entry (`type: analysis` / `article` /
`design` / `currency`). Link target is the entry itself
(`/{locale}/entries/{entry-id}/`).

```yaml
# In src/data/entries/en/analysis/2014-03-19-bitcoin-core-rebrand-...
inlineLinkKeywords:
  - "Bitcoin Core"
  - "2014 rebrand"
  - "authority effect"
```

The keywords are language-specific — the EN file lists English
phrases, the JA mirror lists the Japanese equivalents. Pick phrases
specific enough to almost always indicate the topic when they appear
in another entry's body prose. Avoid words so generic that they will
produce false positives.

**Person keywords** — aggregated automatically from `participants[]`
of all entries, but **only for participants who have a biography
entry** (`type: biography`, primary participant matches the slug).
Link target is `/{locale}/participants/{slug}/`.

The biography frontmatter can also declare **additional aliases**
(short forms, alternative spellings) via `inlineLinkKeywords`:

```yaml
# In src/data/entries/en/aftermath/2014-08-28-hal-finney-biography.md
type: "biography"
participants:
  - name: "Hal Finney"
    slug: "hal-finney"
inlineLinkKeywords:
  - "Hal Finney's"   # possessive form, not auto-derived
```

(Plain `Hal Finney` is auto-derived from `participants[0].name` and
need not be declared.)

Forum-only handles (slugs like `user`, `joe`, `db`, `red`) are
**excluded** from auto-linking because they collide with common
English words. To promote such a participant to auto-link eligibility,
add a biography entry for them.

### Keyword conflicts

`scripts/generate-keyword-index.mjs` (run on every `npm run dev` /
`npm run build` / `npm run check`) emits build-time errors if:

- The same concept keyword is claimed by two different editorial
  entries — the editor must rename one or differentiate the keyword.
- A concept keyword equals a person keyword (or biography alias) —
  the same word maps to two different definitions.
- A biography alias is shared with a different participant slug.

Conflicts must be resolved before the index can be generated.

### Choosing keywords (2026-05-31 lessons)

- **A keyword rendering a link somewhere is not enough.** After adding
  or changing a keyword, check every page where it now links and
  confirm the link makes contextual sense there, not just that the
  build produced a link.
- **Avoid keywords that collide with common company/protocol names**
  outside this archive's own subject (the Ripple-shaped trap — a
  short, generic-looking name that is also a widely-used brand or
  protocol elsewhere). Such keywords produce auto-links in unrelated
  prose where the word is being used in its other sense.

### Exclusion contexts

Auto-linking deliberately skips:

- Inside an existing `<a>` (no double-linking).
- Inside `<code>` or `<pre>` (don't auto-link identifiers).
- Inside `<blockquote>` — primary-source quote in editorial entries
  (see [Editorial Entries](STYLE_GUIDE_CORE.md#editorial-entries-article--analysis--biography--design--currency--guide)).
  Same convention used by [`rehype-strip-archive-links`](STYLE_GUIDE_CORE.md#external-link-rot-handling).
- Inside a heading (`<h1>`-`<h6>`) — headings are navigation landmarks;
  a partly-linked heading reads as visual noise and competes with the
  heading's own self-link anchor.
- Inside `<aside class="editorial-note">` — editor notes
  (see [Editorial Markers](STYLE_GUIDE_CORE.md#editorial-markers)). Internal archive links are
  allowed, but external URLs are prohibited and belong in the citation
  fields.
- Whole-file primary-source records — files under `forum/`,
  `correspondence/`, `emails/`, `web-document/`, `bip/`, and `tweets/` directories.
- Self-link — the keyword's target is the page being rendered.

Within a single rendered page, each keyword is linked **at most once**
(at its first prose occurrence). Subsequent occurrences are left as
plain text to reduce visual noise.

Existing **manual** `[keyword](url)` links coexist with auto-link
without producing duplicates: before scanning prose, the plugin
pre-scans every existing `<a>` tag and marks the keywords inside as
already-linked. Manual links remain authoritative; auto-link only
fills pages where no manual link already exists.

Editors are not required to bulk-remove existing manual links after
this mechanism shipped — manual placement encodes editorial intent
about which mention should carry the link, and that intent is
preserved.

### Pipeline implementation

- `scripts/generate-keyword-index.mjs` produces
  `src/data/keyword-index.json` (gitignored — regenerated).
- `src/lib/rehype-auto-link-keywords.mjs` runs at the rehype stage,
  after `rehype-strip-archive-links`. It walks HAST text nodes and
  replaces matched keywords with `<a class="auto-link auto-link--{kind}">`.
- `scripts/check-inline-link-coverage.mjs` reads the index and
  reports per-keyword usage statistics: how many prose-context
  occurrences each keyword has across the archive, and how many fall
  in skip contexts (blockquote / aside / verbatim file / code).
  Informational by default; `--strict` exits non-zero when any
  declared keyword has zero occurrences anywhere (= dead keyword).

### relatedEntries vs auto-link

The two mechanisms remain complementary:

- `relatedEntries` populates the "see also" sidebar — useful for
  readers who finish an entry and want adjacent reading.
- Auto-link surfaces analysis/biography pages **at the moment
  the topic is mentioned**, while the reader is still engaged with
  that thread of the narrative.

Both should be present for analysis, aftermath, and biography hub
pages — the auto-link keyword set is usually a subset of the topics
in `relatedEntries`.

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

**Root cause (Astro 5.17 bug):** the warning is a structural false positive from
the incremental sync path of `node_modules/astro/dist/content/loaders/glob.js`.
Walking lines 80–110:

```js
const existingEntry = store.get(id);     // entry from PREVIOUS sync's cache
const digest = generateDigest(contents); // digest of CURRENT file contents
if (existingEntry && existingEntry.digest === digest && existingEntry.filePath) {
  return; // unchanged file → short-circuit, no warning
}
// any modified file falls through to here
if (store.has(id)) {                     // always true on a modified file
  logger.warn(`Duplicate id "${id}" found in ${filePath}. ...`);
}
store.set({ id, ... });                  // overwrite is correct
```

The intent of `store.has(id)` is "another file in this same load run already
claimed this id," but the cache holds entries from the previous run, so
*every modified file* trips the check. Behavior signature:

- Warnings appear only on files that were modified since last sync.
- Re-running `astro sync` (or `npm run check`) immediately makes them disappear.
- Within each warning, exactly one file is named (the cache + that one file).

**Real id collisions look different:** two distinct source files in the same
collection resolve to the same normalized id. `scripts/check-duplicate-ids.mjs`
(wired into `npm run check` and `npm run build`) detects these independently
of Astro and fails the build if any are found. Astro normalizes ids by
running each path segment through `github-slugger`, which strips dots and
other special characters — so e.g. `bitcoin-v0.1-released.md` and
`bitcoin-v01-released.md` would collide and silently overwrite.

**Decision rule for reviewers:**

- Astro `Duplicate id` warning, but `npm run check:duplicate-ids` passes →
  false positive, do not flag.
- `check:duplicate-ids` fails → real collision, must fix before merging.
- Repro: stash your changes, run `npx astro sync` → no Astro warnings.
  Pop, sync again → warnings reappear on exactly the modified files.

## Technical-Review Robustness

Entries must withstand review by readers familiar with the material they describe. Before publishing or editing, self-audit against the following categories.

**In scope:**

- Technical facts (cryptography, protocol, source code, blockchain behavior, numerical specifications)
- Historical facts (dates, quotes, statements, numerical values, timelines)
- Internal consistency (no contradictions across an entry or between related entries)
- Arithmetic (elapsed times, BTC quantities, conversion rates, block heights — anything that can be cross-checked)
- Category integrity (don't list propositions of different kinds under one heading — e.g., "causes" and "period-of-activity" questions are distinct; don't mix them in a single list of "hypotheses")
- Fact vs interpretation (interpretive framings must be labeled as such, not asserted as history. Prefer labels that name the reading or its holder — an attributed "X's argument that ...", "the claim is that ...", or a dedicated readings / counter-evidence section whose heading does the labeling. Phrase-level hedges like "under this reading" / "on this view" belong where explicitly labeled readings are being compared; do not append them to sentences whose labeling is already carried by the section or the attribution, and do not use them to soften the entry's own thesis)
- Source attribution (claims traceable to sources cited in `secondarySources` / `sourceUrl`)

**Out of scope (handled elsewhere, not this rule):**

- Stylistic preferences (see house-style sections)
- Translation tone choices (see voice sections)
- Editorial framing decisions already adopted for an entry

**Test:**

Would a reader familiar with the material flag the passage for a factual error, a cross-check failure, or a category mix-up? If yes, fix it before the edit lands.

**Common failures observed:**

- Arithmetic mismatch: claiming "the gap from Jan 3 to Jan 8 is five days" when the actual gap endpoint is Jan 9 (different endpoint, different duration)
- Category error: listing five "hypotheses" as parallel candidates for one phenomenon when in fact only one addresses the cause and the rest are separate period-activity questions
- Interpretive framing asserted as fact: presenting a new or speculative reading as historical without hedging markers
- Narrative dramatization leaking in: phrasing that treats a speculative reconstruction as an eyewitness account

**Factual claims about real people: quote or narrative, both need sources.**

Any factual claim about a real person — direct quote, reported speech, narrated action, stated reaction, inner feeling, sequence of events, sensory detail, physical descriptor — must be traceable to a source listed in the entry's `secondarySources` / `sourceUrl`, or to a primary record (mailing-list archive, forum post, interview transcript, court document, published essay) publicly linkable by other means. Narrative prose does not exempt a claim from verification; narrative voice is more dangerous because unverified claims blend invisibly into editorial summary. **The rule fires on claim-making, not on punctuation.** Paraphrasing a quote into narrative does not fix a missing source — it hides it. If you cannot cite the source, do not write the claim, even as "context" or "atmosphere."

*In scope:*

- Reconstructed dialogue, dramatized statements, imagined internal monologue
- Narrated actions not documented in any cited source
- Sensory details or atmosphere added for color (the smell of coffee, the sound of a fan)
- Sequence implications (who reacted to what, when) not documented in any source
- Body language and physical descriptors inferred rather than recorded

*Out of scope for this rule (handled elsewhere):*

- Editorial analysis and interpretation of documented events (see the "fact vs interpretation" rule above)
- Summaries of what a cited source says, with attribution made clear

**Mandatory verification step (not optional).**

Before writing any factual claim about a real person — in any form — explicitly name the source (a URL, an `sourceUrl` field, a `secondarySources` entry, or a named primary record) and confirm the claim appears at that source. This is a required procedural step, not a principle to apply when in doubt. Extended exposure to narrative reconstructions (novels, dramatizations, documentaries, AI-generated biographical prose) blurs the boundary between fictional and historical content **in both directions** — you may import fiction as fact, or flag a real quote as fabricated. The "does this feel canonical" instinct becomes unreliable in both directions. The verification step exists precisely because that instinct fails. If you cannot perform the verification, drop the claim entirely — do not try to rescue it by paraphrase or by removing quotation marks.

**Novel-bridge context notes (live in Category D).**

A short `*[Context: ...]*` / `*[補足：...]*` block at the tail of an
entry may describe how the entry's subject is framed or echoed in the
project novel [*Genesis: The Disappearance of the Founder and the Promise*](/BitcoinArchive/novel/),
with a link to `/BitcoinArchive/novel/`. The block is a reader-navigation
bridge from an Archive entry to the novel page, not historical evidence,
not an Archive factual claim, and not a source for any other entry.
Novel-derived framing is allowed inside the block only; outside the
block the normal no-novel-content and factual-source rules apply in
full, and claims inside the block must not be reused elsewhere in
Archive prose unless independently sourced.

