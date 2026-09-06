// Shared helpers for guide-entry metaphor illustrations (visual-embed-runtime.ts
// / <!-- visual: NAME --> ). Each illustration module builds a small static SVG
// with lang-keyed labels and mounts it via `mount(host, lang)`.
//
// Colors are referenced as CSS custom properties (var(--token)), never literal
// hex values, so every illustration tracks the site's light/dark theme switch
// automatically -- see STYLE_GUIDE_VISUAL.md's link-color confusion rule: none
// of these illustrations use --color-link or an adjacent blue for non-link
// shapes, since nothing in them is actually clickable.

/** Escapes text for safe interpolation into an SVG string. */
export function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Wraps an SVG's inner markup with a fixed viewBox, an accessible
 * <title>/<desc> pair (STYLE_GUIDE_VISUAL.md's minimum requirements for a
 * `visual` illustration), and a caption paragraph below it.
 */
export function svgFigure({ width, height, title, desc, inner, caption }) {
  const titleId = 'vt-' + Math.random().toString(36).slice(2, 9);
  const descId = 'vd-' + Math.random().toString(36).slice(2, 9);
  return (
    `<svg viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="${titleId} ${descId}" ` +
    `xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;margin:0 auto;">` +
    `<title id="${titleId}">${esc(title)}</title>` +
    `<desc id="${descId}">${esc(desc)}</desc>` +
    inner +
    `</svg>` +
    (caption ? `<figcaption style="margin-top:0.6rem;font-size:0.85rem;color:var(--color-text-muted);text-align:center;">${esc(caption)}</figcaption>` : '')
  );
}

/** A rounded rectangle with a label centered inside it. */
export function labeledBox(x, y, w, h, label, opts = {}) {
  const {
    fill = 'var(--color-bg-alt)',
    stroke = 'var(--color-border)',
    textColor = 'var(--color-text)',
    fontSize = 15,
    rx = 8,
  } = opts;
  const cx = x + w / 2;
  const cy = y + h / 2;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>` +
    `<text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" fill="${textColor}" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${esc(label)}</text>`
  );
}

/** A straight arrow from (x1,y1) to (x2,y2) using a shared marker id. */
export function arrow(x1, y1, x2, y2, opts = {}) {
  const { stroke = 'var(--color-text-muted)', dashed = false, markerId = 'v-arrowhead' } = opts;
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="2" ${dashed ? 'stroke-dasharray="5,4"' : ''} marker-end="url(#${markerId})"/>`;
}

export const ARROWHEAD_DEFS =
  `<defs><marker id="v-arrowhead" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">` +
  `<path d="M0,0 L10,5 L0,10 z" fill="var(--color-text-muted)"/></marker></defs>`;
