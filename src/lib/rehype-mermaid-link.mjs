/**
 * rehype-mermaid-link.mjs
 *
 * Makes Mermaid diagram nodes clickable by wrapping the rendered SVG
 * elements in native `<a xlink:href>` anchors. Works statically — no
 * runtime JavaScript required, so the link survives the build-time
 * Playwright SVG capture in `rehype-mermaid`.
 *
 * # Why this exists
 *
 * Mermaid's own `click TASK_ID href "URL"` directive in Gantt diagrams
 * registers a JS click handler at *runtime*; it does NOT emit an SVG
 * `<a>` wrapper. Static SSR captures the rendered SVG without those
 * handlers, so the navigation is lost. Mermaid's `timeline` diagram
 * cannot parse `click` at all. Mermaid 11.14 also has a bug where
 * `:milestone, ID, ...` combined with `click ID ...` parse-errors.
 *
 * This plugin sidesteps every one of those issues by:
 *   1. Using a single uniform syntax — `%% link: URL` Mermaid comments
 *      placed after each clickable item. Mermaid ignores `%%` comments
 *      so the source always parses cleanly, regardless of diagram type
 *      or status modifier.
 *   2. Reading the original markdown source from `vfile.value` and
 *      pairing each `%% link: URL` to its preceding clickable item,
 *      then matching positionally to the rendered SVG elements.
 *   3. Wrapping the matched SVG elements with native
 *      `<a xlink:href="URL">` so the SVG itself carries the link —
 *      no JavaScript, no runtime dependency.
 *
 * # User-facing syntax — gantt / timeline (positional)
 *
 *   ```mermaid
 *   gantt
 *       section A
 *       v0.1 release :milestone, 2009-01-09, 1d
 *       %% link: /BitcoinArchive/entries/aftermath/2009-01-09-bitcoin-v01-released/
 *       Bitcoin-Qt v0.5 :milestone, 2011-11-20, 1d
 *       %% link: /BitcoinArchive/entries/aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency/
 *       PR #3408 :milestone, 2013-12-16, 1d
 *       (no link comment — this milestone gets no anchor)
 *   ```
 *
 *   ```mermaid
 *   timeline
 *       2008 : Whitepaper published
 *       %% link: /BitcoinArchive/entries/emails/cryptography/2008-10-31-bitcoin-paper/
 *            : Crypto-ML announcement
 *       %% link: /BitcoinArchive/entries/emails/cryptography/2008-11-01-...
 *   ```
 *
 * Each `%% link: URL` is associated with the item that immediately
 * precedes it in *source* order, then matched positionally to the
 * SVG elements in *render* order. This works for gantt/timeline
 * because both are one-item-per-line formats with a stable item
 * count, but it does NOT generalize to flowchart, where one line can
 * define two nodes and an edge at once (`A[...] --> B[...]`) and the
 * layout engine can reorder nodes in the DOM relative to source order.
 *
 * # User-facing syntax — flowchart (node-ID-keyed)
 *
 * Flowchart nodes are linked by their own Mermaid node ID instead of
 * by position, because Mermaid stamps that ID onto the rendered SVG
 * element (`id="mermaid-0-flowchart-A-0"` for a node declared `A[...]`)
 * — a stable anchor that source-order pairing can't offer here:
 *
 *   ```mermaid
 *   flowchart LR
 *       A["Announcement"] --> B["Critique"]
 *       %% link: A /BitcoinArchive/entries/aftermath/1998-11-26-.../
 *       %% link: B /BitcoinArchive/entries/aftermath/1998-12-06-.../
 *       B --> C["No fix"]
 *   ```
 *
 * `%% link: <nodeId> <URL>` comments may appear anywhere in the block
 * (order does not matter, unlike the positional form) and a node with
 * no matching comment is left unlinked. The ID is recovered from the
 * rendered element's `id` attribute by greedily matching everything
 * up to Mermaid's own trailing `-<index>` and backtracking only far
 * enough to leave that last `-<digits>` group outside the match — so
 * a node ID that itself ends in `-<digits>` (e.g. `step-1`) is still
 * recovered correctly (confirmed against real Mermaid 11.14 output:
 * `step-1` renders as `...-flowchart-step-1-0` and is extracted back
 * as `step-1`, not `step`).
 *
 * # Adding new diagram types
 *
 * Map each Mermaid `aria-roledescription` value to a handler in
 * `HANDLERS` below. A handler returns the parent / index pairs of all
 * clickable elements; whether a diagram type is positional or
 * ID-keyed is decided by `detectDiagramType()` + `FLOWCHART_KEYWORDS`
 * (see `blocksInfo`'s `keyed` flag in `rehypeMermaidLink()` below).
 *
 * # Run order
 *
 * Add to `rehypePlugins` AFTER `rehype-mermaid` (so the SVG already
 * exists in the tree) and BEFORE `rehype-mermaid-wrapper` (so the scroll
 * box wraps the now-anchored SVG).
 *
 * Note: in Astro 5.x, register this plugin with the array form
 * `[rehypeMermaidLink, {}]` rather than the bare function. Astro
 * appears to require explicit array form for some unified plugins —
 * the bare form leaves the transformer unregistered.
 */
import { visit } from 'unist-util-visit';
import { MIRROR_BASE } from '../../site-config.mjs';

const SOURCE_PREFIX = `${MIRROR_BASE}/`;

// ---------------------------------------------------------------------------
// Source parsing — pull `%% link: ...` lines and pair them to items.
// ---------------------------------------------------------------------------

const MERMAID_BLOCK_RE = /```mermaid\s*\n([\s\S]*?)\n```/g;
const LINK_LINE_RE = /^[ \t]*%%[ \t]*link:[ \t]*(\S+)[ \t]*$/;
const FLOWCHART_LINK_LINE_RE = /^[ \t]*%%[ \t]*link:[ \t]*(\S+)[ \t]+(\S+)[ \t]*$/;

// A Mermaid line is treated as a clickable item when it is not blank,
// not a comment, not a structural keyword, and contains a `:`. The colon
// excludes pure section headers like `section Foo` while including
// `2008 : Whitepaper` and `Foo :milestone, 2009-01-01, 1d`.
const STRUCTURAL_KEYWORDS = /^(gantt|timeline|graph|flowchart|classDiagram|sequenceDiagram|stateDiagram|gitGraph|pie|journey|erDiagram|mindmap|requirementDiagram|C4Context|C4Container|C4Component|C4Dynamic|C4Deployment|theme|section|title|dateFormat|axisFormat|excludes|todayMarker|click)\b/;

function isItemLine(line) {
  const trimmed = line.trim();
  if (!trimmed) return false;
  if (trimmed.startsWith('%%')) return false;
  if (STRUCTURAL_KEYWORDS.test(trimmed)) return false;
  return trimmed.includes(':');
}

/**
 * Walk `source` line by line. Track the index of the most recent item.
 * Each `%% link: URL` line is associated with the most recent item.
 * Returns a sparse array `urls[itemIndex] = URL`. Used for gantt/timeline.
 */
function parseLinkComments(source) {
  const urls = [];
  let currentIdx = -1;
  for (const line of source.split('\n')) {
    if (isItemLine(line)) {
      currentIdx += 1;
      continue;
    }
    const m = line.match(LINK_LINE_RE);
    if (m && currentIdx >= 0) {
      urls[currentIdx] = m[1];
    }
  }
  return urls;
}

/**
 * Scan for `%% link: <nodeId> <URL>` lines anywhere in the block.
 * Returns a null-prototype object `{ [nodeId]: URL }` (see the
 * Object.create(null) note below). Used for flowchart, where node
 * identity (not source position) is the stable pairing key.
 */
function parseFlowchartLinkComments(source) {
  // Null-prototype: a node ID coinciding with an inherited Object.prototype
  // name (`toString`, `constructor`, ...) must not resolve to that
  // inherited value on lookup elsewhere in this file.
  const urls = Object.create(null);
  for (const line of source.split('\n')) {
    const m = line.match(FLOWCHART_LINK_LINE_RE);
    if (m) urls[m[1]] = m[2];
  }
  return urls;
}

/** First non-blank, non-comment line's leading keyword decides the type. */
function detectDiagramType(source) {
  for (const line of source.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('%%')) continue;
    const m = trimmed.match(/^([A-Za-z0-9_]+)/);
    return m ? m[1] : '';
  }
  return '';
}

const FLOWCHART_KEYWORDS = new Set(['flowchart', 'graph']);

// ---------------------------------------------------------------------------
// Per-diagram handlers — locate clickable element pairs for each item.
// ---------------------------------------------------------------------------

/**
 * Each handler returns groups of `{ parent, index }` element references
 * to wrap. One group per item, in source order. A group can contain
 * multiple elements (e.g. for Gantt, the rect and the text are separate
 * SVG nodes that both belong to the same task).
 */
function pickGanttItems(svgNode) {
  const rects = [];
  const texts = [];
  walkElements(svgNode, (node, parent, idx) => {
    if (node.tagName === 'rect' && hasClass(node, 'task') && !hasClass(node, 'section')) {
      rects.push({ parent, index: idx });
    } else if (
      node.tagName === 'text' &&
      typeof node.properties?.id === 'string' &&
      node.properties.id.endsWith('-text')
    ) {
      texts.push({ parent, index: idx });
    }
  });
  // Mermaid emits all task rects first, then all task texts. Pair them
  // by ordinal position so each task's rect+text share one URL.
  const groups = [];
  const len = Math.min(rects.length, texts.length);
  for (let i = 0; i < len; i++) groups.push([rects[i], texts[i]]);
  return groups;
}

function pickTimelineItems(svgNode) {
  const groups = [];
  walkElements(svgNode, (node, parent, idx) => {
    if (node.tagName === 'g' && hasClass(node, 'eventWrapper')) {
      groups.push([{ parent, index: idx }]);
      // Don't descend — nested events are not a thing in Mermaid timeline.
      return false;
    }
  });
  return groups;
}

// Mermaid stamps each rendered node's SVG id as
// `mermaid-<diagramIndex>-flowchart-<nodeId>-<nodeIndex>`. The node's own
// Mermaid-source ID sits in the middle, bounded by the fixed
// `-flowchart-` marker on the left and a numeric index on the right —
// recovered by stripping a trailing `-<digits>`, not by a fixed position.
// The capture group is greedy, so it backtracks only as far as needed to
// leave the last `-<digits>` group outside the match: a node ID that
// itself ends in `-<digits>` (e.g. `step-1`) is still recovered intact.
const FLOWCHART_NODE_ID_RE = /^mermaid-\d+-flowchart-(.+)-\d+$/;

/** Returns a map `{ [mermaidNodeId]: [{parent, index}] }`, not an array —
 *  flowchart linking is ID-keyed, not positional (see file header). */
function pickFlowchartItemsById(svgNode) {
  const byId = Object.create(null); // see parseFlowchartLinkComments for why
  walkElements(svgNode, (node, parent, idx) => {
    if (node.tagName !== 'g' || !hasClass(node, 'node')) return;
    const rawId = node.properties?.id;
    const m = typeof rawId === 'string' && rawId.match(FLOWCHART_NODE_ID_RE);
    if (m) byId[m[1]] = [{ parent, index: idx }];
    // Don't descend into a node's own children (label sub-elements are
    // not separately clickable, and clusters/subgraphs are out of scope
    // for this first pass).
    return false;
  });
  return byId;
}

const HANDLERS = {
  gantt: pickGanttItems,
  timeline: pickTimelineItems,
  'flowchart-v2': pickFlowchartItemsById,
};

// ---------------------------------------------------------------------------
// Plugin orchestrator.
// ---------------------------------------------------------------------------

// Mirror `src/lib/remark-rewrite-base.mjs`: markdown content authors
// write paths as `/BitcoinArchive/...` (the GitHub Pages base path),
// and the deploy environment rewrites them to the actual base. The
// remark plugin handles markdown `image` / `link` AST nodes; this
// plugin's `%% link: URL` directives live inside Mermaid code fences,
// which the remark plugin does not descend into, so the same
// rewriting has to be reapplied here. Without it, Mermaid anchors on
// Cloudflare Pages (base `/`) point to `/BitcoinArchive/...` and 404.
function rewriteBase(url) {
  const base = process.env.CF_PAGES ? '/' : SOURCE_PREFIX;
  if (typeof url === 'string' && url.startsWith(SOURCE_PREFIX)) {
    return base + url.slice(SOURCE_PREFIX.length);
  }
  return url;
}

export function rehypeMermaidLink() {
  return (tree, vfile) => {
    const source = String(vfile?.value ?? '');
    if (!source) return;

    // Per-block descriptors, in source order: either a positional array
    // (gantt/timeline) or an ID-keyed map (flowchart/graph).
    const blocksInfo = [];
    const blockRe = new RegExp(MERMAID_BLOCK_RE.source, 'g');
    let m;
    while ((m = blockRe.exec(source)) !== null) {
      const blockSource = m[1];
      const kind = detectDiagramType(blockSource);
      if (FLOWCHART_KEYWORDS.has(kind)) {
        const raw = parseFlowchartLinkComments(blockSource);
        const urls = Object.create(null);
        for (const k of Object.keys(raw)) urls[k] = rewriteBase(raw[k]);
        blocksInfo.push({ keyed: true, urls });
      } else {
        const urls = parseLinkComments(blockSource).map(rewriteBase);
        blocksInfo.push({ keyed: false, urls });
      }
    }
    const hasAnyLinks = blocksInfo.some((b) =>
      b.keyed ? Object.keys(b.urls).length > 0 : b.urls.length > 0
    );
    if (!hasAnyLinks) return;

    let svgIdx = 0;
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'svg') return;
      const id = node.properties?.id;
      if (typeof id !== 'string' || !id.startsWith('mermaid-')) return;

      const block = blocksInfo[svgIdx];
      svgIdx += 1;
      if (!block) return;

      // hast camelCases `aria-roledescription` to `ariaRoleDescription`
      // (capital D). Fall back to the dashed form for parsers that
      // preserve the original attribute name.
      const role = node.properties?.['ariaRoleDescription']
        ?? node.properties?.['aria-roledescription'];
      const handler = HANDLERS[role];
      if (!handler) return;

      if (block.keyed) {
        if (Object.keys(block.urls).length === 0) return;
        const byId = handler(node);
        for (const nodeId of Object.keys(block.urls)) {
          const group = byId[nodeId];
          if (!group) continue; // link comment names a node ID that doesn't exist
          for (const ref of group) wrapInPlace(ref, block.urls[nodeId]);
        }
      } else {
        if (block.urls.length === 0) return;
        const groups = handler(node);
        const len = Math.min(groups.length, block.urls.length);
        for (let i = 0; i < len; i++) {
          const url = block.urls[i];
          if (!url) continue;
          for (const ref of groups[i]) wrapInPlace(ref, url);
        }
      }
    });
  };
}

// ---------------------------------------------------------------------------
// Helpers.
// ---------------------------------------------------------------------------

function walkElements(parent, visitor) {
  if (!Array.isArray(parent.children)) return;
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (!child || child.type !== 'element') continue;
    const recurse = visitor(child, parent, i);
    if (recurse === false) continue;
    walkElements(child, visitor);
  }
}

function hasClass(node, target) {
  // hast normally normalises `class` → `className` (array). Fall back to
  // `class` for SVG fragments emitted without going through that
  // normaliser.
  const cls = node.properties?.className ?? node.properties?.class;
  if (Array.isArray(cls)) return cls.includes(target);
  if (typeof cls === 'string') return cls.split(/\s+/).includes(target);
  return false;
}

function wrapInPlace(ref, href) {
  const child = ref.parent.children[ref.index];
  if (!child) return;
  const isExternal = /^https?:\/\//.test(href);
  const properties = {
    // `xlink:href` for legacy SVG consumers, `href` for SVG 2 / modern
    // browsers. Both are emitted so anchors work everywhere.
    'xlink:href': href,
    href,
  };
  if (isExternal) {
    properties.target = '_blank';
    properties.rel = 'noopener noreferrer';
  }
  ref.parent.children[ref.index] = {
    type: 'element',
    tagName: 'a',
    properties,
    children: [child],
  };
}
