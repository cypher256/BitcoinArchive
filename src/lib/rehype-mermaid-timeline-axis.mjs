/**
 * rehype-mermaid-timeline-axis.mjs
 *
 * Trim the right-hand overhang of the horizontal axis arrow in Mermaid
 * timeline diagrams.
 *
 * Mermaid's timeline renderer (v11, timeline-definition chunk) hardcodes
 * the axis line as:
 *
 *   line.attr('x1', LEFT_MARGIN)                  // 50px left of content
 *       .attr('x2', box.width + 3 * LEFT_MARGIN)  // ~150-250px right of it
 *
 * so every timeline's arrow sails far past the last section on the right
 * while starting flush on the left. There is no config knob for the
 * overhang (only `timeline.leftMargin`, which scales BOTH sides), so we
 * fix it here after rendering: measure the actual content extent (the
 * rightmost rect edge) and pull the axis end in so the right lead-in
 * matches the left one, shrinking the viewBox/width by the same delta so
 * no blank gutter is left behind.
 *
 * Applies only to `<svg aria-roledescription="timeline">`. Gantt and all
 * other diagram types are untouched. Idempotent: a second pass computes
 * delta ~ 0 and does nothing.
 *
 * Run AFTER rehype-mermaid in the rehype pipeline.
 */
import { visit } from 'unist-util-visit';

/** Right lead-in to keep between the last box and the line end (px).
 *  Mirrors the 50px LEFT_MARGIN lead-in Mermaid draws on the left; the
 *  arrowhead marker draws at the line end and stays inside the viewBox
 *  because we shrink the viewBox by the same delta we shrink the line. */
const RIGHT_LEAD = 50;

function num(v) {
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : null;
}

/** Content right edge, derived from the per-section dashed VERTICAL
 *  lines (x1 === x2) that the timeline renderer always draws through
 *  each section's center. The section/task boxes themselves are
 *  `<path>`s inside translated groups (no measurable rects in v11),
 *  but the verticals give the section centers directly: the content
 *  ends half a section-pitch right of the last center. */
function contentRightFromVerticals(node, xs = []) {
  if (node.type === 'element') {
    if (node.tagName === 'line') {
      const x1 = num(node.properties?.x1);
      const x2 = num(node.properties?.x2);
      if (x1 != null && x1 === x2) xs.push(x1);
    }
    for (const child of node.children ?? []) contentRightFromVerticals(child, xs);
  }
  return xs;
}

/** Conservative per-character width estimates (px at the 16px base
 *  font). Slightly generous on purpose: overestimating only leaves a
 *  few extra px of lead-in, while underestimating could clip text. */
const WIDE_CHAR = 17; // CJK and other full-width glyphs
const ASCII_CHAR = 9;

function estTextWidth(str) {
  let w = 0;
  for (const ch of str) w += ch.codePointAt(0) > 0x10ff ? WIDE_CHAR : ASCII_CHAR;
  return w;
}

/** Sum of the x components of all translate(...) ops in a transform
 *  attribute. The timeline renderer positions node groups purely via
 *  translate; text inside then uses x="0". */
function translateX(transform) {
  let sum = 0;
  for (const m of String(transform ?? '').matchAll(/translate\(\s*([-\d.]+)/g)) {
    sum += parseFloat(m[1]);
  }
  return sum;
}

/** Max right edge across all rendered text, estimated from character
 *  counts. Mermaid's timeline wrap() only breaks on whitespace, so a
 *  long unbreakable token (URL, email) can overflow its fixed-width
 *  box; the box geometry alone (verticals) misses that. Real markup
 *  places text via ancestor translate() with x="0" on the tspans, so
 *  the walk accumulates translate offsets; x/text-anchor inherit from
 *  the nearest ancestor <text>. */
function maxTextRight(node, offsetX = 0, inheritedX = null, inheritedAnchor = 'middle', best = -Infinity) {
  if (node.type === 'element') {
    const props = node.properties ?? {};
    offsetX += translateX(props.transform);
    let x = inheritedX;
    let anchor = inheritedAnchor;
    if (node.tagName === 'text' || node.tagName === 'tspan') {
      x = num(props.x) ?? x;
      anchor = props.textAnchor ?? props['text-anchor'] ?? anchor;
      const line = (node.children ?? [])
        .filter((c) => c.type === 'text')
        .map((c) => c.value)
        .join('');
      if (line.trim() && x != null) {
        const w = estTextWidth(line);
        const cx = offsetX + x;
        const right = anchor === 'start' ? cx + w : anchor === 'end' ? cx : cx + w / 2;
        best = Math.max(best, right);
      }
    }
    for (const child of node.children ?? []) {
      best = maxTextRight(child, offsetX, x, anchor, best);
    }
  }
  return best;
}

/** The axis: the horizontal line inside the timeline renderer's
 *  `g.lineWrapper` group. The dashed per-section lines are vertical
 *  (x1 === x2) and live outside that group. Identified structurally
 *  (marker-end + y1 === y2) so hast attribute-name mapping quirks for
 *  aria-* / marker-* cannot break detection. */
function findAxisLine(node) {
  if (node.type === 'element') {
    if (node.tagName === 'line') {
      const props = node.properties ?? {};
      const marker = props.markerEnd ?? props['marker-end'];
      const y1 = num(props.y1);
      const y2 = num(props.y2);
      if (marker && y1 != null && y1 === y2) return node;
    }
    for (const child of node.children ?? []) {
      const found = findAxisLine(child);
      if (found) return found;
    }
  }
  return null;
}

/** Timeline detection: only the timeline renderer emits a
 *  `g.lineWrapper` group (the horizontal axis holder). */
function hasLineWrapper(node) {
  if (node.type === 'element') {
    const cls = node.properties?.className;
    if (
      (Array.isArray(cls) && cls.includes('lineWrapper')) ||
      (typeof cls === 'string' && cls.includes('lineWrapper'))
    ) return true;
    for (const child of node.children ?? []) {
      if (hasLineWrapper(child)) return true;
    }
  }
  return false;
}

export function rehypeMermaidTimelineAxis() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'svg') return;
      if (!hasLineWrapper(node)) return;

      const axis = findAxisLine(node);
      if (!axis) return;
      const x2 = num(axis.properties.x2);
      const centers = [...new Set(contentRightFromVerticals(node))].sort((a, b) => a - b);
      if (x2 == null || centers.length === 0) return;
      const pitch = centers.length >= 2
        ? centers[centers.length - 1] - centers[centers.length - 2]
        : 200; // single-section fallback: default section pitch
      const boxRight = centers[centers.length - 1] + pitch / 2;
      // Text can overflow its fixed-width box (whitespace-only wrapping
      // never breaks a long token), so honor the wider of the two.
      const contentRight = Math.max(boxRight, maxTextRight(node));

      const targetX2 = contentRight + RIGHT_LEAD;
      const delta = x2 - targetX2;
      if (delta <= 0) return; // already tight (or oddly laid out) — leave it

      axis.properties.x2 = String(targetX2);

      // Shrink the canvas by the same amount so the trimmed space does
      // not linger as an empty right gutter.
      const vb = String(node.properties?.viewBox ?? '').trim().split(/\s+/);
      if (vb.length === 4) {
        const w = num(vb[2]);
        if (w != null && w - delta > 0) {
          vb[2] = String(w - delta);
          node.properties.viewBox = vb.join(' ');
        }
      }
      const widthAttr = num(node.properties?.width);
      if (widthAttr != null && widthAttr - delta > 0) {
        node.properties.width = String(widthAttr - delta);
      }
    });
  };
}
