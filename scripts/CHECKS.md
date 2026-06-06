# Inspection Scripts Ledger (CHECKS.md) — BitcoinArchive

Single source of truth for this repository's verification scripts.
`scripts/check-registry.mjs` validates this ledger against reality (the
files in `scripts/` and the ports in `package.json`) on every
`npm run check` and `npm run build`: it fails on an unregistered script,
a ghost entry, or a prefix/wiring mismatch.

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
- Generation / fetch / fix / migration tools (`generate-*`, `fetch-*`,
  `fix-*`, `migrate-*`, `convert-*`, `create-*`, …) are operational
  tooling, **outside this ledger**.
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
| `check-quotes.mjs` | Quote attribution chain (markers ↔ `quotes[]`) | none | check + build · `check:quotes` |
| `check-tweet-metadata.mjs` | Tweet `xHandle` invariants | none | check + build (aggregate) |
| `check-duplicate-ids.mjs` | Real duplicate-id collisions within a collection | none | check + build · `check:duplicate-ids` |
| `check-internal-links.mjs` | Internal markdown link targets resolve | none | check + build · `check:internal-links` (also `audit:inline-reference-gaps`) |
| `check-inline-link-coverage.mjs` | Auto-link keyword coverage | none | check only · `check:inline-link-coverage` (also `audit:inline-link-coverage`) |
| `check-mermaid.mjs` | Mermaid block syntax | none | check only · `check:mermaid` |
| `check-mermaid-ja-wrap.mjs` | Long unbroken JA spans in mermaid labels | none | check only · `check:mermaid-ja-wrap` |
| `check-editorial-markers.mjs` | Editorial-marker canonical forms | none | check only (`--strict`) · `check:editorial-markers` (also `audit:f-candidates`) |
| `check-bios-rendering.mjs` | Bio mermaid timelines render without column overflow | none (visual) | manual · `check:bios-rendering` (dev + Playwright) |

## Registry — `audit-*` (manual; never block the build)

| Script | Role | Run via |
|---|---|---|
| `audit-bid-format.mjs` | B-id format candidate report (staged, non-destructive) | `audit:bid-format` |
| `audit-bitcointalk-thread-coherence.mjs` | BitcoinTalk thread title-cascade anomaly classifier | `audit:bitcointalk-threads` |
| `audit-en-inline-in-ja.mjs` | English text inline in JA prose | `audit:en-inline-in-ja` |
| `audit-external-link-redundancy.mjs` | Body external links that duplicate an internal entry | `audit:external-link-redundancy` |
| `audit-external-links.mjs` | Dead external links (network HEAD / GET) | `audit:external-links` |
| `audit-ja-naturalness.mjs` | JA prose naturalness (headless Claude per file) | `audit:ja-naturalness` |
| `audit-ja-quote-consistency.mjs` | Divergent JA translations of the same EN quote | `audit:ja-quote-consistency` |
| `audit-mermaid-contrast.mjs` | Mermaid label WCAG contrast (dev + Playwright) | `audit:mermaid-contrast` |
| `audit-quote-translation-consistency.mjs` | Divergent JA wording of one EN passage (≥1 occurrence is a blockquote) | `audit:quote-translation-consistency` |
| `audit-satoshi-pre-release-mentions.mjs` | Survey of Satoshi pre-release activity mentions | `audit:satoshi-pre-release-mentions` |
| `audit-seo.mjs` | SEO / AIO / readability survey | `audit:seo` |
| `audit-untranslated-ja-blockquotes.mjs` | JA blockquotes that look untranslated | `audit:untranslated-ja-blockquotes` |
| `audit-visual-density.mjs` | Editorial visual-density ratio | `audit:visual-density` |

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
