/**
 * Remark plugin to rewrite source markdown paths to the actual BASE_URL.
 * Source markdown uses `${MIRROR_BASE}/...` (e.g. /BitcoinArchive/...) for
 * compatibility with the GitHub Pages mirror; this plugin rewrites that
 * prefix at build time so the same source works on both GitHub Pages
 * (base: /BitcoinArchive) and Cloudflare Pages (base: /).
 */
import { visit } from 'unist-util-visit';
import { MIRROR_BASE } from '../../site-config.mjs';

const SOURCE_PREFIX = `${MIRROR_BASE}/`;

export function remarkRewriteBase() {
  const base = process.env.CF_PAGES ? '/' : SOURCE_PREFIX;

  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url && node.url.startsWith(SOURCE_PREFIX)) {
        node.url = node.url.replace(SOURCE_PREFIX, base);
      }
    });
    visit(tree, 'link', (node) => {
      if (node.url && node.url.startsWith(SOURCE_PREFIX)) {
        node.url = node.url.replace(SOURCE_PREFIX, base);
      }
    });
  };
}
