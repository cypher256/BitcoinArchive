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
- **Search:** [Pagefind](https://pagefind.app/) — client-side full-text search, no server required
- **Math:** remark-math + rehype-katex (LaTeX rendering)
- **OG Images:** [Satori](https://github.com/vercel/satori) + [Sharp](https://sharp.pixelplumbing.com/) (dynamic Open Graph image generation)
- **Sitemap:** @astrojs/sitemap
- **i18n:** English / Japanese with Astro's built-in i18n routing
- **Structured Data:** JSON-LD (Schema.org) on every page
- **Hosting:** Cloudflare Pages (primary) + GitHub Pages (mirror)
- **CI/CD:** GitHub Actions → dual deployment on push to `main`

### Build Pipeline

```
check-markdown-image-alt  →  check-participants  →  check-ja-tone  →  generate-git-dates  →  astro build  →  pagefind
```

- **check-markdown-image-alt** — Validates all Markdown images have alt text
- **check-participants** — Validates participant slug consistency across entries
- **check-ja-tone** — Validates Japanese translation tone (だ/である vs ですます) per character rules
- **generate-git-dates** — Extracts git commit dates for "Added" / "Updated" sort

## Development

```sh
npm install
npm run dev        # Start dev server at localhost:4321
npm run build      # Build production site to ./dist/
npm run preview    # Preview production build locally
```

## Deployment

Pushing to `main` triggers automatic deployment to GitHub Pages via GitHub Actions and to Cloudflare Pages.

## License

Content is sourced from publicly available archives. See [About](https://bitcoin-institute.pages.dev/about/) for details.
