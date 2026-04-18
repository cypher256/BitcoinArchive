# Bitcoin Institute

The world's most comprehensive archive of Satoshi Nakamoto's complete conversations and related historical documents.

- https://bitcoin-institute.pages.dev/
- https://cypher256.github.io/BitcoinArchive/ (Mirror)

## Scope

- **Satoshi Nakamoto's writings** — All emails, forum posts, and code comments
- **Conversations** — Exchanges with Hal Finney, Wei Dai, James A. Donald, and others
- **Aftermath** — Court testimonies, blog retrospectives, interviews, and media reports

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v5 (static site generation)
- **Search:** [Algolia](https://www.algolia.com/) — hosted full-text search, reindexed on every production build
- **Math:** remark-math + rehype-katex (LaTeX rendering)
- **OG Images:** [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com/) (dynamic Open Graph image generation)
- **Sitemap:** @astrojs/sitemap
- **i18n:** English / Japanese with Astro's built-in i18n routing
- **Structured Data:** JSON-LD (Schema.org) on every page
- **Hosting:** Cloudflare Pages (primary) + GitHub Pages (mirror)
- **CI/CD:** GitHub Actions → both deployments on push to `main`. Cloudflare is reached via `wrangler pages deploy` (Direct Upload); CF's built-in Git integration is disabled so deploys are not bound by Cloudflare's build timeout.

### Build Pipeline

```
check-markdown-image-alt → check-participants → check-ja-tone → check-ja-names → check-ja-titles → check-ja-glossary → check-quotes → check-internal-links → generate-derived-related → generate-git-dates → astro build → algolia-index
```

- **check-markdown-image-alt** — Validates all Markdown images have alt text
- **check-participants** — Warns when EN entries have an author but no participants listed
- **check-ja-tone** — Validates Japanese translation tone (だ/である vs ですます) per character rules
- **check-ja-names** — Validates person names in JA files use katakana (not English)
- **check-ja-titles** — Validates JA context post titles are in Japanese (not English)
- **check-ja-glossary** — Enforces canonical JA terminology (trailing long-vowel marks, unified translations) per STYLE_GUIDE_JA.md
- **check-quotes** — Validates quote attribution structure (frontmatter quotes[] + body markers)
- **check-internal-links** — Validates that every in-body internal link resolves and that `relatedEntries` is bidirectional
- **generate-derived-related** — Computes derived relatedEntries (mutual inline links) merged with manual ones at build time
- **generate-git-dates** — Extracts git commit dates for "Added" / "Updated" sort
- **algolia-index** — Uploads all EN+JA entries to the Algolia index (skipped when `ALGOLIA_APP_ID` / `ALGOLIA_ADMIN_KEY` are not set, e.g. local or mirror builds)

## Development

```sh
npm install
npm run dev        # Start dev server at localhost:4321
npm run check      # Run all validation checks (fast, seconds)
npm run build      # Build production site to ./dist/ (~8 min local, ~22 min in CI)
npm run preview    # Preview production build locally
```

> **Note:** Use `npm run check` for local validation. `npm run build` generates 8,500+ static HTML pages and is typically run only in CI.

## Deployment

Pushing to `main` triggers two GitHub Actions workflows:

- `.github/workflows/deploy.yml` → builds with the `withastro/action` composite action and publishes to GitHub Pages.
- `.github/workflows/deploy-cloudflare.yml` → runs `npm run build` with the Algolia secrets and deploys `dist/` to the `bitcoin-institute` Cloudflare Pages project via `wrangler pages deploy` (Direct Upload).

Both workflows are independent; either can fail without blocking the other. Cloudflare's built-in Git integration is **disabled** on the Pages project, so the only path to production on Cloudflare is the GitHub Actions workflow above.

## License

Content is sourced from publicly available archives. See [About](https://bitcoin-institute.pages.dev/about/) for details.
