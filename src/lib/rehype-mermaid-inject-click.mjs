/**
 * rehype-mermaid-inject-click.mjs
 *
 * Post-processes the SVGs emitted by `rehype-mermaid` to inject
 * `<a xlink:href="URL">` wrappers around the rect/text elements that
 * correspond to task IDs collected by the companion
 * `remark-mermaid-extract-click.mjs` plugin.
 *
 * Why this is needed: see the long header in
 * `remark-mermaid-extract-click.mjs`. Short version: Mermaid's own
 * `click TASK href "URL"` produces a runtime JS handler, not an SVG
 * `<a>` wrapper, so it doesn't survive static SSR. This plugin
 * compensates by wrapping the rendered elements with native SVG
 * anchors, which work without JavaScript.
 *
 * Pairing strategy:
 *   - The remark plugin pushes one map entry per ```mermaid block in
 *     source order, into `vfile.data.mermaidClickMaps`.
 *   - This plugin walks the rehype tree, finds <svg id="mermaid-N">
 *     elements in tree order, and pairs them positionally with the
 *     accumulated maps. Order is the only reliable join key because
 *     rehype-mermaid does not preserve any user-provided id beyond its
 *     own internal counter.
 *
 * Element-matching strategy inside an SVG:
 *   - Mermaid emits `<rect id="mermaid-N-TASK_ID">` and
 *     `<text  id="mermaid-N-TASK_ID-text">` for each task. We wrap each
 *     of these two siblings in its own `<a>` element so both the bar
 *     and its label are clickable.
 *   - Wrapping the rect and text together in a single `<a>` would be
 *     cleaner, but they are not adjacent siblings in the SVG (all rects
 *     come first, then all texts), so two separate wrappers is the
 *     minimal-disruption choice.
 *
 * Run order:
 *   - Place AFTER `rehype-mermaid` and BEFORE `rehype-mermaid-wrapper`
 *     in `rehypePlugins`. The wrapper just adds a scrolling div around
 *     the SVG and is order-insensitive relative to this plugin, but
 *     placing inject-click first keeps the responsibility chain clear:
 *     mermaid renders -> we add anchors -> wrapper boxes the result.
 */
import { visit } from 'unist-util-visit';

export function rehypeMermaidInjectClick() {
  return (tree, vfile) => {
    const allMaps = vfile?.data?.mermaidClickMaps;
    if (!Array.isArray(allMaps) || allMaps.length === 0) return;

    let svgIdx = 0;
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'svg') return;
      const id = node.properties?.id;
      if (typeof id !== 'string' || !id.startsWith('mermaid-')) return;

      const clickMap = allMaps[svgIdx];
      svgIdx += 1;
      if (!clickMap || Object.keys(clickMap).length === 0) return;

      injectClicksIntoSvg(node, id, clickMap);
    });
  };
}

function injectClicksIntoSvg(svgNode, svgId, clickMap) {
  const prefix = svgId + '-';
  const targetMap = new Map();
  for (const [taskId, value] of Object.entries(clickMap)) {
    targetMap.set(prefix + taskId, value);
    targetMap.set(prefix + taskId + '-text', value);
  }
  walkAndWrap(svgNode, targetMap);
}

function walkAndWrap(parent, targetMap) {
  if (!Array.isArray(parent.children)) return;
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (!child || child.type !== 'element') continue;

    const childId = child.properties?.id;
    const target = typeof childId === 'string' ? targetMap.get(childId) : undefined;

    if (target) {
      const { href, tooltip } = target;
      const isExternal = /^https?:\/\//.test(href);
      const aProps = {
        // Use both `xlink:href` and `href` for maximum browser compatibility.
        // SVG2 prefers `href`, older browsers / xlink-namespaced consumers
        // still need `xlink:href`.
        'xlink:href': href,
        href,
      };
      if (tooltip) aProps['aria-label'] = tooltip;
      if (isExternal) {
        aProps.target = '_blank';
        aProps.rel = 'noopener noreferrer';
      }
      parent.children[i] = {
        type: 'element',
        tagName: 'a',
        properties: aProps,
        children: [child],
      };
      // Don't descend into the wrapped node; it has already been matched.
      continue;
    }

    walkAndWrap(child, targetMap);
  }
}
