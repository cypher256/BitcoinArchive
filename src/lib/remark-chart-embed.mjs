/**
 * remark-chart-embed.mjs — in-body chart placeholder marker
 *
 * Converts a marker placed anywhere in an editorial entry's markdown body:
 *   <!-- chart: NAME -->
 * into an empty placeholder element at that exact position:
 *   <div class="chart-embed" data-chart="NAME" id="NAME"></div>
 *
 * The client runtime (src/components/ChartEmbedRuntime.astro) scans
 * `.chart-embed[data-chart]` and fills each one with a registered drawer. This
 * lets a chart sit at the right place within the prose, instead of being pinned
 * to the fixed top/bottom slots of the [...slug] template. Same family as the
 * existing <!-- speaker: --> / <!-- quote: --> markers, and like
 * remark-editorial-marker it emits via data.hName (no dependency on
 * allowDangerousHtml).
 *
 * The `id` is set here (server-rendered, present in the static HTML from the
 * first paint) rather than by the client drawer, so an in-page or cross-entry
 * anchor link (`#NAME`) resolves on initial navigation. A drawer that fills
 * the placeholder via `host.innerHTML` after the fact would only create the
 * id client-side, after the browser's one-time fragment-scroll-on-load has
 * already run and found nothing — the anchor would silently fail to scroll.
 *
 * NAME is [a-z0-9-]+ and must be unique per page (same constraint as any
 * HTML id) — a marker is not expected to repeat within one entry. Unknown
 * names are ignored by the runtime.
 */
import { visit } from 'unist-util-visit';

const MARKER = /^<!--\s*chart:\s*([a-z0-9][a-z0-9-]*)\s*-->$/;

export function remarkChartEmbed() {
  return function transformer(tree) {
    visit(tree, 'html', (node) => {
      const m = MARKER.exec((node.value || '').trim());
      if (!m) return;
      const name = m[1];
      // html nodes are emitted raw by to-hast, so switch to a type that honors data.hName
      node.type = 'paragraph';
      node.children = [];
      delete node.value;
      node.data = {
        hName: 'div',
        hProperties: { className: ['chart-embed'], dataChart: name, id: name },
        hChildren: [],
      };
    });
  };
}

export default remarkChartEmbed;
