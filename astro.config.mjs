// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { remarkRewriteBase } from './src/lib/remark-rewrite-base.mjs';

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES
    ? 'https://bitcoin-institute.pages.dev'
    : 'https://cypher256.github.io',
  base: process.env.CF_PAGES ? '/' : '/BitcoinArchive',
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    remarkPlugins: [remarkRewriteBase, [remarkMath, { singleDollarTextMath: false }]],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/search/'),
  })],
});
