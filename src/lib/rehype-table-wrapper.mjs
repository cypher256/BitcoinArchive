/**
 * rehype-table-wrapper.mjs
 *
 * Wraps each `<table>` element in the unified figure-block structure:
 *
 *   <div class="figure-outer">
 *     <figure class="figure-block" data-kind="table">
 *       <table>...</table>
 *     </figure>
 *   </div>
 *
 * The block provides horizontal scroll on overflow, so a wide table
 * (many columns, long cell content) scrolls inside the block rather
 * than pushing the entire page into body-level horizontal scroll on
 * small viewports. The outer enables viewport-edge breakout at
 * viewport >= 1500px (1.5 × --max-width-read).
 *
 * Pairs with `.figure-block[data-kind="table"]` and
 * `.figure-block[data-kind="table"] > table` CSS in
 * `src/styles/global.css`:
 *   - `.figure-block { overflow-x: auto }` — scrollbar appears only
 *      when the table overflows the block
 *   - `.figure-block[data-kind="table"] > table { width: max-content;
 *      min-width: 100% }` — the table grows to the block width when
 *      narrow, and to its natural content width when wider
 *
 * Idempotent: skips tables already wrapped in `.figure-outer`.
 */
import { visit } from 'unist-util-visit';

function isFigureOuter(node) {
  return (
    node?.type === 'element' &&
    node.tagName === 'div' &&
    Array.isArray(node.properties?.className) &&
    node.properties.className.includes('figure-outer')
  );
}

export function rehypeTableWrapper() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (
        node.tagName !== 'table' ||
        !parent ||
        index == null
      ) return;

      // Skip if already wrapped (idempotent). Tables inside a figure
      // element (which is itself inside figure-outer) are also skipped
      // via the figure-outer grandparent check.
      if (isFigureOuter(parent)) return;
      if (
        parent.type === 'element' &&
        parent.tagName === 'figure' &&
        Array.isArray(parent.properties?.className) &&
        parent.properties.className.includes('figure-block')
      ) return;

      const figure = {
        type: 'element',
        tagName: 'figure',
        properties: {
          className: ['figure-block'],
          'data-kind': 'table',
        },
        children: [node],
      };
      const outer = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['figure-outer'] },
        children: [figure],
      };
      parent.children[index] = outer;
      // Don't descend into the wrapped table (it's the same node we just moved).
      return ['skip'];
    });
  };
}
