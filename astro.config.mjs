// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: process.env.CF_PAGES
    ? 'https://bitcoin-archive.pages.dev'
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
    remarkPlugins: [[remarkMath, { singleDollarTextMath: false }]],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/search/'),
  })],
});
