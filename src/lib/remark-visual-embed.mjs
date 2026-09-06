/**
 * remark-visual-embed.mjs — in-body metaphor-illustration marker for any
 * editorial entry (STYLE_GUIDE_VISUAL.md § Metaphor illustrations) — most
 * common on `guide` entries, but not exclusive to them
 *
 * Converts a marker placed anywhere in an editorial entry's markdown body:
 *   <!-- visual: NAME -->
 * into the same figure-outer/figure-block wrapper Mermaid and tables use
 * (STYLE_GUIDE_VISUAL.md § Layout width consideration), with an empty
 * placeholder inside it at that exact position:
 *   <div class="figure-outer">
 *     <figure class="figure-block" data-kind="visual">
 *       <div class="visual-embed" data-visual="NAME" id="NAME"></div>
 *     </figure>
 *   </div>
 * Server-rendering the wrapper (rather than having the client runtime add
 * it) means the figure-block sizing/border CSS applies from first paint,
 * matching how rehype-mermaid-wrapper.mjs / rehype-table-wrapper.mjs wrap
 * their own figure kinds.
 *
 * Deliberately a sibling of remark-chart-embed.mjs, not a shared mechanism
 * with it: `chart` always means a numeric d3 visualization; `visual` always
 * means a concrete-metaphor illustration (a receipt, a lock and key, a
 * fingerprint) with no numeric axis. Keeping the marker names and registries
 * separate means a reader of the source markdown, or of either registry file,
 * never has to ask "is this one a chart or a metaphor drawing" — the marker
 * itself already answers it.
 *
 * The client runtime (src/components/VisualEmbedRuntime.astro) scans
 * `.visual-embed[data-visual]` and fills each one with a registered
 * illustration module. The `id` is set here (server-rendered) for the same
 * anchor-link reason documented in remark-chart-embed.mjs.
 *
 * NAME is [a-z0-9-]+ and must be unique per page. Unknown names are ignored
 * by the runtime.
 */
import { visit } from 'unist-util-visit';

const MARKER = /^<!--\s*visual:\s*([a-z0-9][a-z0-9-]*)\s*-->$/;

export function remarkVisualEmbed() {
  return function transformer(tree) {
    visit(tree, 'html', (node) => {
      const m = MARKER.exec((node.value || '').trim());
      if (!m) return;
      const name = m[1];
      node.type = 'paragraph';
      node.children = [];
      delete node.value;
      node.data = {
        hName: 'div',
        hProperties: { className: ['figure-outer'] },
        hChildren: [
          {
            type: 'element',
            tagName: 'figure',
            properties: { className: ['figure-block'], dataKind: 'visual' },
            children: [
              {
                type: 'element',
                tagName: 'div',
                properties: { className: ['visual-embed'], dataVisual: name, id: name },
                children: [],
              },
            ],
          },
        ],
      };
    });
  };
}

export default remarkVisualEmbed;
