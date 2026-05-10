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
import { rehypeMermaidLink } from './src/lib/rehype-mermaid-link.mjs';
import { rehypeMermaidWrapper } from './src/lib/rehype-mermaid-wrapper.mjs';
import { rehypeMermaidThemer } from './src/lib/rehype-mermaid-themer.mjs';
import { rehypeTableWrapper } from './src/lib/rehype-table-wrapper.mjs';
import { rehypeStripArchiveLinks } from './src/lib/rehype-strip-archive-links.mjs';
import { rehypeAutoLinkKeywords } from './src/lib/rehype-auto-link-keywords.mjs';

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
      // Non-link external http(s) URLs in verbatim primary records
      // (forum/correspondence/emails). Internal links, anchors, and
      // non-http URI schemes are excluded automatically. Editor-note
      // <aside> blocks (from remarkEditorialMarker) keep their links.
      // See plugin header for the archive-principle rationale.
      rehypeStripArchiveLinks,
      // Auto-link keywords (concept + person) using the build-time
      // index from `scripts/generate-keyword-index.mjs`. Runs AFTER
      // rehypeStripArchiveLinks so verbatim http(s) URLs are already
      // neutralized; the auto-link plugin separately skips blockquotes,
      // editor-note asides, code/pre, existing <a>, and verbatim file
      // paths via HAST ancestor checks (mirroring the strip plugin).
      rehypeAutoLinkKeywords,
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
      // Wrap Mermaid SVG nodes in <a xlink:href> based on `%% link: URL`
      // comments in the source. See plugin header for the full design.
      [rehypeMermaidLink, {}],
      rehypeMermaidWrapper,
      // Rewrite the fixed hex colors that Mermaid bakes into each SVG
      // (in the inline `<style>` block + per-element `style=`/`fill=`/
      // `stroke=` attributes) into `var(--mermaid-...)` references so
      // diagrams follow the active `data-theme` / `data-mode`. Must run
      // AFTER both rehype-mermaid-link (so it doesn't recolour the new
      // <a> wrappers — anchors carry no color attributes anyway) and
      // rehype-mermaid-wrapper (so the themer can use `.mermaid-scroll`
      // as the marker for which SVGs to touch).
      rehypeMermaidThemer,
      // Wrap each <table> in `<div class="table-scroll">` so wide tables
      // scroll horizontally inside the wrapper instead of pushing the
      // whole page into a body-level horizontal scroll on small
      // viewports. See `.table-scroll` CSS in `src/styles/global.css`.
      rehypeTableWrapper,
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
