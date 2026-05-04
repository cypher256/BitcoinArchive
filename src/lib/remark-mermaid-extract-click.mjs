/**
 * remark-mermaid-extract-click.mjs
 *
 * Pre-processes ```mermaid``` code blocks to extract `click ID href "URL"`
 * directives and stash them in `vfile.data.mermaidClickMaps` for the
 * companion rehype-mermaid-inject-click plugin to consume after the SVG
 * has been rendered.
 *
 * Why this is needed:
 *   1. Mermaid's native `click ID href "URL"` directive in Gantt charts
 *      only registers a JavaScript click handler at runtime; it does NOT
 *      generate an `<a xlink:href>` wrapper in the SVG. Static SSR
 *      (rehype-mermaid + Playwright) captures the rendered SVG without
 *      the runtime handlers, so the navigation never wires up in
 *      production.
 *   2. As of Mermaid 11.14, `click TASK_ID href "URL"` combined with
 *      `:milestone` task type causes a parse error
 *      ("Cannot read properties of undefined (reading 'type')").
 *
 *   Both issues are sidestepped here: this plugin strips the click
 *   directives before Mermaid sees them, lets Mermaid render the chart
 *   cleanly (with the `:milestone, ID, ...` syntax which DOES support
 *   custom IDs), and hands the URL map to the rehype companion plugin
 *   which wraps matching SVG elements with `<a xlink:href>` tags.
 *
 * Run order:
 *   - This plugin runs in `remarkPlugins` (markdown AST stage).
 *   - Companion `rehype-mermaid-inject-click.mjs` runs after
 *     `rehype-mermaid` in `rehypePlugins`.
 *
 * Click-directive syntax accepted:
 *   click TASK_ID href "URL"
 *   click TASK_ID href "URL" "tooltip"
 *
 * The exchange between the two plugins happens via `vfile.data.mermaidClickMaps`,
 * an array of `Record<TaskID, { href, tooltip }>` objects, one entry per
 * mermaid block in source order.
 */
import { visit } from 'unist-util-visit';

const CLICK_RE = /^[ \t]*click[ \t]+(\S+)[ \t]+href[ \t]+"([^"]+)"(?:[ \t]+"([^"]*)")?[ \t]*$/gm;

export function remarkMermaidExtractClick() {
  return (tree, vfile) => {
    const allMaps = [];
    visit(tree, 'code', (node) => {
      if (node.lang !== 'mermaid' || typeof node.value !== 'string') return;

      const map = {};
      const re = new RegExp(CLICK_RE.source, 'gm');
      let match;
      while ((match = re.exec(node.value)) !== null) {
        const [, id, href, tooltip] = match;
        map[id] = { href, tooltip: tooltip || '' };
      }

      // Always push a map entry per mermaid block (even empty) so the
      // rehype companion can pair maps to SVGs by ordinal position.
      allMaps.push(map);

      if (Object.keys(map).length > 0) {
        // Strip click lines and collapse extra blank lines they leave behind.
        node.value = node.value
          .replace(new RegExp(CLICK_RE.source, 'gm'), '')
          .replace(/\n{3,}/g, '\n\n')
          .replace(/\n+$/, '\n');
      }
    });

    if (allMaps.length > 0) {
      vfile.data = vfile.data || {};
      vfile.data.mermaidClickMaps = allMaps;
    }
  };
}
