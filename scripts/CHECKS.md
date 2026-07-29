# Inspection Scripts Ledger (CHECKS.md) — BitcoinArchive

Single source of truth for **every standalone script** in `scripts/`.
`scripts/check-registry.mjs` validates this ledger against reality (the
files in `scripts/` and the ports in `package.json`) on every
`npm run check` and `npm run build`: it fails on an uncatalogued script,
a ghost entry, or a prefix/wiring mismatch. So "what is this script, can
I delete it?" is answerable from this file — no forensic investigation.

This ledger owns only the **tier and wiring** of each script (which
prefix, which port, where it runs). The editorial rule a check enforces
— thresholds, what counts as a violation, exceptions — stays in
`STYLE_GUIDE.md` / `STYLE_GUIDE_JA.md`, which remain its single source
of truth; the role column below is a one-line pointer, not a restatement.

## Convention (shared across repos — two prefixes only)

- **`check-*`** — gate. Deterministic, or equipped with a committed
  suppression mechanism (skip / ignore) so it runs with zero false
  positives. Wired into `npm run check` / `npm run build` (CI) via a
  `check`-named port and always exposes a `check:<name>` port.
  **Stops the build on failure.**
- **`audit-*`** — manual, explicitly invoked. Heuristic; false
  positives are expected. Always exposes an `audit:<name>` port.
  **Never stops the build** — a human / AI triages the output.
- The prefix *is* the tier; no other staging (T1–T4 etc.) is used.
- Everything else is **operational** tooling — `pipeline` (run
  automatically by `dev` / `build` / `check`; removing one breaks the
  build) or a manual `tool` (`generate-*`, `fetch-*`, `fix-*`,
  `fill-*`, `verify-*`, …). Not gates, but **still catalogued below**
  so every script is identifiable without investigation;
  `check-registry` enforces that no script is left out.
- The extension follows the repo's language (archive = `.mjs`). The
  novel repo (private) keeps a parallel `scripts/CHECKS.md` (Japanese)
  + `scripts/check-registry.py`; prefix, placement, and port rules are
  shared, only the extension differs.

## Where each gate runs

- **CI (`npm run build`, GitHub Actions deploy):** every `check-*` in
  the `build` pipeline plus `check-registry`. A push publishes the
  site, so these run on the server.
- **`npm run check` (run before every push):** the build gates plus the
  four `check`-only gates that never reach CI — `check-editorial-markers`,
  `check-inline-link-coverage`, `check-mermaid`, `check-mermaid-ja-wrap`.
  Run `check` before pushing so those four are not skipped.
- **`check-registry`** runs first in both `check` and `build`, failing
  fast on ledger drift.
- **`check-bios-rendering`** is a manual visual gate
  (`check:bios-rendering`, needs `npm run dev` + Playwright); not in CI.
- **`audit-*`** run on demand via their `audit:<name>` ports.
- **`npm run check`** is wrapped by `with-lock.mjs`, which refuses to
  start a second concurrent `check` run (multiple sessions working on
  this repo can otherwise launch `check` around the same time and race
  on the same generated files). The real gate chain lives in
  `check:run`; `check` itself is just `with-lock.mjs` + `check:run`.
  `check:run` runs `scripts/run-check-parallel.mjs`, which executes the
  same scripts as a flat `&&` chain used to, but concurrently within each
  dependency phase (registry → generators → validators → content sync)
  instead of one script at a time — see that file's header for the
  phase/dependency reasoning.

## Registry — `check-*` (gates)

| Script | Role | False positives | Run via |
|---|---|---|---|
| `check-registry.mjs` | This ledger ↔ reality consistency (unregistered / ghost / wiring drift) | none | check + build · `check:registry` |
| `check-markdown-image-alt.mjs` | Markdown images carry alt text | none | check + build · `check:image-alt` |
| `check-participants.mjs` | EN participant slug / name consistency | none | check + build · `check:participants` |
| `check-ja-tone.mjs` | JA tone (plain vs. polite form) per character rules | suppressed (`tone-skip`) | check + build · `check:ja-tone` |
| `check-ja-names.mjs` | JA person names normalized to katakana | none | check + build · `check:ja-names` |
| `check-ja-titles.mjs` | JA context-post titles not left in English | none | check + build · `check:ja-titles` |
| `check-ja-tags.mjs` | JA tags valid against `tags.ts` | none | check + build · `check:ja-tags` |
| `check-ja-participant-slugs.mjs` | JA participant slugs valid against `participants.ts` | none | check + build · `check:ja-participant-slugs` |
| `check-ja-block-notation.mjs` | JA block notation (half-width space before the number) | none | check + build · `check:ja-block-notation` |
| `check-ja-spacing.mjs` | JA × ASCII half-width spacing convention | none | check + build · `check:ja-spacing` |
| `check-ja-glossary.mjs` | JA terminology glossary + trailing long-vowel | none (`.ja-glossary-ignore`) | check + build · `check:ja-glossary` |
| `check-description-length.mjs` | `description` length cap (per STYLE_GUIDE.md Description Policy) | none | check + build (`--strict`) · `check:description-length` |
| `check-source-duplication.mjs` | `sourceUrl` not duplicated in `secondarySources[]` | none | check + build (`--strict`) · `check:source-duplication` |
| `check-halving-consistency.mjs` | Embed's self-contained halving array (chart-embeds.js) matches `halvings.json` | none | check + build · `check:halving-consistency` |
| `check-quotes.mjs` | Quote attribution chain (markers ↔ `quotes[]`) | none | check + build · `check:quotes` |
| `check-tweet-metadata.mjs` | Tweet `xHandle` invariants | none | check + build · `check:tweet-metadata` |
| `check-duplicate-ids.mjs` | Real duplicate-id collisions within a collection | none | check + build · `check:duplicate-ids` |
| `check-internal-links.mjs` | Internal markdown link targets resolve | none | check + build · `check:internal-links` (also `audit:inline-reference-gaps`) |
| `check-inline-link-coverage.mjs` | Auto-link keyword coverage | none | check only · `check:inline-link-coverage` (also `audit:inline-link-coverage`) |
| `check-mermaid.mjs` | Mermaid block syntax | none | check only · `check:mermaid` |
| `check-mermaid-ja-wrap.mjs` | Long unbroken JA spans in mermaid labels | none | check only · `check:mermaid-ja-wrap` |
| `check-editorial-markers.mjs` | Editorial-marker canonical forms | none | check only (`--strict`) · `check:editorial-markers` (also `audit:f-candidates`) |
| `check-llms-counts.mjs` | `public/llms.txt` / `llms-full.txt` category counts vs corpus | none (±max(3, 5%) tolerance) | check only · `check:llms-counts` |
| `check-bios-rendering.mjs` | Bio mermaid timelines render without column overflow | none (visual) | manual · `check:bios-rendering` (dev + Playwright) |

## Registry — `audit-*` (manual; never block the build)

| Script | Role | Run via |
|---|---|---|
| `audit-bid-format.mjs` | B-id format candidate report (staged, non-destructive) | `audit:bid-format` |
| `audit-bitcointalk-thread-coherence.mjs` | BitcoinTalk thread title-cascade anomaly classifier | `audit:bitcointalk-threads` |
| `audit-en-inline-in-ja.mjs` | English text inline in JA prose | `audit:en-inline-in-ja` |
| `audit-external-link-redundancy.mjs` | Body external links that duplicate an internal entry | `audit:external-link-redundancy` |
| `audit-external-links.mjs` | Dead external links (network HEAD / GET) | `audit:external-links` |
| `audit-ja-dash-usage.mjs` | Wrong dash glyph (`─`/`―`) and per-paragraph dash density in JA prose | `audit:ja-dash-usage` |
| `audit-ja-naturalness.mjs` | JA prose naturalness (headless Claude per file) | `audit:ja-naturalness` |
| `audit-ja-quote-consistency.mjs` | Divergent JA translations of the same EN quote | `audit:ja-quote-consistency` |
| `audit-mermaid-contrast.mjs` | Mermaid label WCAG contrast (dev + Playwright) | `audit:mermaid-contrast` |
| `check-quote-translation-consistency.mjs` | Divergent JA wording of one EN passage (≥1 occurrence is a blockquote) | `check:quote-translation-consistency` |
| `audit-satoshi-pre-release-mentions.mjs` | Survey of Satoshi pre-release activity mentions | `audit:satoshi-pre-release-mentions` |
| `audit-seo.mjs` | SEO / AIO / readability survey | `audit:seo` |
| `audit-untranslated-ja-blockquotes.mjs` | JA blockquotes that look untranslated | `audit:untranslated-ja-blockquotes` |
| `audit-visual-density.mjs` | Editorial visual-density ratio | `audit:visual-density` |

## Registry — operational (not gates; catalogued for identifiability)

`pipeline` = run automatically by `dev` / `build` / `check` (removing one
breaks the build). `tool` = manual, run on demand — reusable, not spent.

| Script | Role | Status |
|---|---|---|
| `algolia-index.mjs` | Push EN/JA entries to the Algolia full-text index | pipeline (build) |
| `indexnow-submit.mjs` | After a Cloudflare deploy, ping IndexNow (Bing/Yandex/etc. — not Google) with the sitemap URLs | tool (CI: cloudflare deploy) |
| `generate-derived-related.mjs` | Build `derived-related.json` (auto-derived relatedEntries) | pipeline (dev/build/check) |
| `generate-derived-commentaries.mjs` | Build `derived-commentaries.json` (reverse commentary index) | pipeline (dev/build/check) |
| `generate-git-dates.mjs` | Build `git-dates.json` (per-locale created/updated from git) | pipeline (dev/build/check; post-commit) |
| `generate-keyword-index.mjs` | Build `keyword-index.json` (auto-link keywords) | pipeline (dev/build/check) |
| `sync-content.mjs` | Run `astro sync` (content-collection types) | pipeline (check) |
| `with-lock.mjs` | Refuse a second concurrent `npm run check:run` (PID lock in the OS temp dir; dead/stale locks reclaimed) | pipeline (check) |
| `run-check-parallel.mjs` | Run `check:run`'s scripts in dependency-ordered phases (registry → generators → validators → content sync), concurrently within each phase instead of one at a time | pipeline (check) |
| `apply-dead-link-fixes.mjs` | Apply dead-link fixes to frontmatter `url` / `sourceUrl` | tool |
| `enrich-dead-links-with-wayback.mjs` | Replace dead links with Wayback URLs | tool |
| `create-ja-stubs.mjs` | Create JA translation stub files from EN entries | tool |
| `extract-quotes.mjs` | Read-only: propose `quotes[]` + body markers from EN attribution patterns | tool · `extract:quotes` |
| `fetch-btc-prices.mjs` | Fetch the BTC price series for the price-chart page | tool |
| `fetch-context-posts.mjs` | Fetch BitcoinTalk context-post replies | tool |
| `fetch-github-satoshi-mentions.mjs` | Fetch GitHub Issue/PR threads mentioning Satoshi | tool |
| `fetch-replies-to-satoshi.mjs` | Fetch BitcoinTalk replies to Satoshi (see STYLE_GUIDE_JA_OPS.md) | tool |
| `fetch-sni-posts.mjs` | Fetch Satoshi Nakamoto Institute archive posts | tool |
| `fetch-thread-starters.mjs` | Fetch BitcoinTalk thread-starter posts | tool |
| `fill-person-slug.mjs` | Backfill `quotes[].personSlug` (see STYLE_GUIDE_JA.md § II.4) | tool |
| `fill-source-entry-id.mjs` | Backfill `quotes[].sourceEntryId` | tool |
| `fix-ja-ascii-spacing.mjs` | Insert missing JA × ASCII half-width spaces | tool |
| `fix-ja-link-spacing.mjs` | Remove JA × JA spaces around markdown-link boundaries | tool |
| `fix-ja-punct-spacing.mjs` | Remove half-width spaces stranded between JA chars incl. punctuation (、。「」) | tool |
| `fix-ja-reply-titles.mjs` | Cascade JA forum reply titles from the starter (see STYLE_GUIDE.md) | tool |
| `fix-quote-visual-divergence.mjs` | Fix visual-only JA quote divergence (check-quote-translation-consistency category) | tool |
| `generate-hero-banners.mjs` | Regenerate the entry-page hero backdrop (`public/images/hero-banners/atmosphere.jpg`) — one wide gradient+grain image shared by every entry (panned to a different crop per entry via `heroBannerPosition()` in `src/lib/heroBanner.ts`); only needs re-running when the design itself changes | tool |
| `generate-quote-fix-candidates.mjs` | Build a quote-fix review queue from check-quote-translation-consistency | tool |
| `generate-satoshi-timeline.mjs` | Generate Satoshi timeline data from `isSatoshi` entries | tool |
| `scan-all-mermaid.mjs` | Survey every mermaid block across the corpus | tool |
| `verify-rule-ab.mjs` | Verify fetch-replies rule A/B coverage | tool |
| `verify-no-regression.sh` | SHA-1 snapshot regression check after data-modifying scripts (see STYLE_GUIDE_JA_OPS.md) | tool |
| `verify-translations.sh` | Verify a batch of JA translations | tool |
| `verify-fetch-replies-complete.sh` | Disk consistency check for fetch-replies | tool |
| `verify-rule-b-authoritative.sh` | Authoritative rule-B completeness via dry-run fetch | tool |

`scripts/lib/` holds shared modules imported by the scripts above, not
standalone entry points; it is not catalogued.

## Notes

- `audit-*` are heuristic — run them scoped, not corpus-wide as a gate;
  a human / AI triages each finding (never wire one into `check` /
  `build`).
- Three `check-*` scripts are legitimately **dual-use**:
  `check-editorial-markers` (`audit:f-candidates`),
  `check-inline-link-coverage` (`audit:inline-link-coverage`), and
  `check-internal-links` (`audit:inline-reference-gaps`) each expose an
  `audit:` flag-mode in addition to their gate role. No rename needed.
- `commit-msg` (non-ASCII reject) and `post-commit` (git-dates) hooks
  live in local `.git/hooks`; they are not part of this ledger.
