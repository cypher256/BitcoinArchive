// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { getDeploymentConfig } from './site-config.mjs';
import { remarkRewriteBase } from './src/lib/remark-rewrite-base.mjs';

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
    remarkPlugins: [remarkRewriteBase, [remarkMath, { singleDollarTextMath: false }]],
    rehypePlugins: [rehypeKatex],
  },
  integrations: [sitemap({
    filter: (page) => !page.includes('/search/'),
  })],
});
