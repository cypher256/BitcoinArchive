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
import { remarkMermaidExtractClick } from './src/lib/remark-mermaid-extract-click.mjs';
import { rehypeNoAutolinkEmail } from './src/lib/rehype-no-autolink-email.mjs';
import { rehypeMermaidInjectClick } from './src/lib/rehype-mermaid-inject-click.mjs';
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
    remarkPlugins: [remarkRewriteBase, remarkQuoteBlocks, remarkEditorialMarker, remarkMermaidExtractClick, [remarkMath, { singleDollarTextMath: false }]],
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
          // 'loose' enables `click` directives in flowchart nodes so flowchart
          // steps can link to entries or external sources. Default 'strict'
          // suppresses click directives. For Gantt charts, `click` directives
          // are stripped pre-render by `remarkMermaidExtractClick` and replaced
          // with native SVG <a xlink:href> wrappers via
          // `rehypeMermaidInjectClick` because Mermaid's Gantt click only
          // produces a runtime JS handler, not an SVG anchor. See those
          // plugins' header comments for the full rationale.
          // Safe here because all Mermaid sources are author-controlled and
          // rendered statically by Playwright at build time.
          securityLevel: 'loose',
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
      rehypeMermaidInjectClick,
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
