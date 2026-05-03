// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeMermaid from 'rehype-mermaid';
import { getDeploymentConfig } from './site-config.mjs';
import { remarkRewriteBase } from './src/lib/remark-rewrite-base.mjs';
import { remarkQuoteBlocks } from './src/lib/remark-quote-blocks.mjs';
import { remarkEditorialMarker } from './src/lib/remark-editorial-marker.mjs';
import { rehypeNoAutolinkEmail } from './src/lib/rehype-no-autolink-email.mjs';

const { site, base } = getDeploymentConfig();

// https://astro.build/config
export default defineConfig({
  site,
  base,
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    remarkPlugins: [remarkRewriteBase, remarkQuoteBlocks, remarkEditorialMarker, [remarkMath, { singleDollarTextMath: false }]],
    // rehype-mermaid renders ```mermaid code blocks to inline SVG at build
    // time using Playwright. Syntax errors fail the build (no runtime error
    // boxes can reach production). See STYLE_GUIDE.md "Mermaid Diagrams" for
    // usage and JA-content gotchas. Validation script: scripts/check-mermaid.mjs.
    rehypePlugins: [
      rehypeNoAutolinkEmail,
      rehypeKatex,
      [rehypeMermaid, { strategy: 'inline-svg', errorFallback: undefined }],
    ],
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/search/'),
  })],
});
