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
import { rehypeMermaidWrapper } from './src/lib/rehype-mermaid-wrapper.mjs';

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
      // mermaidConfig disables `useMaxWidth` per diagram type so the rendered
      // SVG keeps its natural pixel width instead of stretching to 100%. The
      // wrapper plugin below then puts each SVG inside a scrollable div, so
      // dense charts (e.g. 20-event timelines) stay readable instead of
      // getting squashed into the prose container width.
      [rehypeMermaid, {
        strategy: 'inline-svg',
        mermaidConfig: {
          themeVariables: { fontSize: '14px' },
          flowchart: { useMaxWidth: false },
          sequence: { useMaxWidth: false },
          gantt: { useMaxWidth: false },
          timeline: { useMaxWidth: false },
          quadrantChart: { useMaxWidth: false },
          classDiagram: { useMaxWidth: false },
          stateDiagram: { useMaxWidth: false },
          mindmap: { useMaxWidth: false },
        },
      }],
      rehypeMermaidWrapper,
    ],
    // Tell Shiki to skip 'mermaid' code blocks. Without this, Shiki converts
    // them to <pre class="astro-code"> with span-wrapped tokens, stripping
    // the `language-mermaid` class that rehype-mermaid needs to detect.
    // (Astro 5.5+ default already excludes 'math'; we add 'mermaid'.)
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['math', 'mermaid'],
    },
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/search/'),
  })],
});
