/**
 * rehype-mermaid-wrapper.mjs
 *
 * Wraps each `<svg id="mermaid-N">` element produced by `rehype-mermaid`
 * in a `<div class="mermaid-scroll">` so the SVG can render at its
 * natural pixel width while the wrapper provides horizontal scroll on
 * overflow. Without this, dense timelines (e.g. 20+ events across 17
 * years) get squashed into the prose container width and the text
 * becomes unreadable.
 *
 * Run this AFTER rehype-mermaid in the rehype pipeline.
 */
import { visit } from 'unist-util-visit';

const MERMAID_ID_PREFIX = 'mermaid-';

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

      // Skip if already wrapped (idempotent)
      if (
        parent.type === 'element' &&
        parent.tagName === 'div' &&
        Array.isArray(parent.properties?.className) &&
        parent.properties.className.includes('mermaid-scroll')
      ) return;

      const wrapper = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['mermaid-scroll'] },
        children: [node],
      };
      parent.children[index] = wrapper;
      // Don't descend into the wrapped svg (it's the same node we just moved).
      return ['skip'];
    });
  };
}
