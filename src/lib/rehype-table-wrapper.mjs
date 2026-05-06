/**
 * rehype-table-wrapper.mjs
 *
 * Wraps each `<table>` element in a `<div class="table-scroll">` so a
 * wide table (many columns, long cell content) scrolls horizontally
 * inside the wrapper rather than pushing the entire page into a
 * body-level horizontal scroll on small viewports.
 *
 * Pairs with `.table-scroll` CSS in `src/styles/global.css`:
 *   - `.table-scroll { overflow-x: auto }` — scrollbar appears only
 *      when the table actually overflows
 *   - `.table-scroll > table { width: auto; min-width: 100% }` — the
 *      table grows to the container width when narrow, and to its
 *      content width when content is wider than the container
 *
 * Idempotent: skips tables already wrapped in `.table-scroll`.
 */
import { visit } from 'unist-util-visit';

export function rehypeTableWrapper() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (
        node.tagName !== 'table' ||
        !parent ||
        index == null
      ) return;

      // Skip if already wrapped (idempotent)
      if (
        parent.type === 'element' &&
        parent.tagName === 'div' &&
        Array.isArray(parent.properties?.className) &&
        parent.properties.className.includes('table-scroll')
      ) return;

      const wrapper = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-scroll'] },
        children: [node],
      };
      parent.children[index] = wrapper;
      // Don't descend into the wrapped table (it's the same node we just moved).
      return ['skip'];
    });
  };
}
