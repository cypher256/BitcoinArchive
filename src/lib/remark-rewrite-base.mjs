/**
 * Remark plugin to rewrite /BitcoinArchive/ paths in markdown to the actual BASE_URL.
 * This allows markdown content to use /BitcoinArchive/ paths that work on both
 * GitHub Pages (base: /BitcoinArchive) and Cloudflare Pages (base: /).
 */
import { visit } from 'unist-util-visit';

export function remarkRewriteBase() {
  const base = process.env.CF_PAGES ? '/' : '/BitcoinArchive/';

  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url && node.url.startsWith('/BitcoinArchive/')) {
        node.url = node.url.replace('/BitcoinArchive/', base);
      }
    });
    visit(tree, 'link', (node) => {
      if (node.url && node.url.startsWith('/BitcoinArchive/')) {
        node.url = node.url.replace('/BitcoinArchive/', base);
      }
    });
  };
}
