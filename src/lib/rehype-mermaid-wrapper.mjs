/**
 * rehype-mermaid-wrapper.mjs
 *
 * Wraps each `<svg id="mermaid-N">` element produced by `rehype-mermaid`
 * in the unified figure-block structure:
 *
 *   <div class="figure-outer">
 *     <figure class="figure-block" data-kind="mermaid">
 *       <svg id="mermaid-N">...</svg>
 *     </figure>
 *   </div>
 *
 * The block lets the SVG render at its natural pixel width while
 * providing horizontal scroll on overflow. The outer enables
 * viewport-edge breakout at viewport >= 1500px (1.5 × --max-width-read).
 * See `src/styles/global.css` § "Figure block" and TODO
 * `0531_図表overflowとコンテナ幅.md`.
 *
 * Run this AFTER rehype-mermaid in the rehype pipeline.
 */
import { visit } from 'unist-util-visit';

const MERMAID_ID_PREFIX = 'mermaid-';

function isFigureOuter(node) {
  return (
    node?.type === 'element' &&
    node.tagName === 'div' &&
    Array.isArray(node.properties?.className) &&
    node.properties.className.includes('figure-outer')
  );
}

function isMermaidFigureBlock(node) {
  return (
    node?.type === 'element' &&
    node.tagName === 'figure' &&
    Array.isArray(node.properties?.className) &&
    node.properties.className.includes('figure-block') &&
    node.properties?.['data-kind'] === 'mermaid'
  );
}

export function rehypeMermaidWrapper() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (
        node.tagName !== 'svg' ||
        !parent ||
        index == null ||
        typeof node.properties?.id !== 'string' ||
        !node.properties.id.startsWith(MERMAID_ID_PREFIX)
      ) return;

      // Skip if already wrapped (idempotent). After the first pass the
      // svg's direct parent is the figure.figure-block, NOT the outer
      // div, so we must check the immediate parent for the figure-block
      // signature too — otherwise a re-run would double-wrap.
      if (isFigureOuter(parent)) return;
      if (isMermaidFigureBlock(parent)) return;

      const figure = {
        type: 'element',
        tagName: 'figure',
        properties: {
          className: ['figure-block'],
          'data-kind': 'mermaid',
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
      // Don't descend into the wrapped svg (it's the same node we just moved).
      return ['skip'];
    });
  };
}
