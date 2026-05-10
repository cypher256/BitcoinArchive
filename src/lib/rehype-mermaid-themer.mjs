/**
 * rehype-mermaid-themer.mjs
 *
 * Post-process Mermaid SVGs: rewrite the fixed hex / named colors that
 * Mermaid bakes into the rendered SVG into `var(--mermaid-...)`
 * references. Once the rewriting has happened, the same SVG repaints
 * itself when the page's CSS custom properties change — i.e. the
 * diagrams follow the active `data-theme` / `data-mode` automatically,
 * with no client-side JS and no theme-specific re-render.
 *
 * # ⚠️ Cache clearance (READ BEFORE EDITING)
 *
 * `rehype-mermaid` caches its rendered SVG output in TWO locations:
 *
 *   - `.astro/data-store.json`
 *   - `node_modules/.astro/data-store.json`
 *
 * After modifying this plugin OR the CSS custom-property values that
 * the rewritten SVGs consume (= any `--mermaid-*` token in
 * `src/styles/global.css`), BOTH caches must be removed before
 * `npm run check` or `npm run dev` will re-render the affected
 * diagrams. Run:
 *
 *     rm -rf .astro node_modules/.astro
 *
 * before testing. Forgetting this means the SVG on the page is the
 * stale pre-edit output and the change appears to have no effect.
 *
 * # Why this exists
 *
 * `rehype-mermaid` runs at build time and emits SVGs with `default`
 * theme colors hard-baked into both the inline `<style>` block at the
 * top of each SVG and into `fill=` / `stroke=` attributes on individual
 * elements. Without rewriting, switching `:root` variables (= the way
 * the theme switcher in BaseLayout.astro works) leaves the diagrams
 * stuck in retro colors while the body around them repaints.
 *
 * # How it works
 *
 * 1. We only touch SVGs that sit inside the `<div class="mermaid-scroll">`
 *    wrapper produced by `rehype-mermaid-wrapper`. Arbitrary inline SVG
 *    elsewhere on the page is ignored.
 * 2. For each matched SVG, we walk every descendant. The inline
 *    `<style>` text node, plus all `style=` / `fill=` / `stroke=`
 *    attribute strings, get passed through a small set of literal
 *    string substitutions.
 * 3. The substitution set was derived from a probe build (see
 *    `temp/mermaid-probe/*.svg` snapshots and the comment block
 *    further down with the OBSERVED hex frequency table). Each rule
 *    maps a literal Mermaid color to a CSS variable defined in
 *    `src/styles/global.css`.
 * 4. Idempotency: the substitutions match raw color literals (`#XXXXXX`,
 *    `black`, `red`, etc.). After one pass those literals have been
 *    replaced by `var(--mermaid-...)` strings, so a second pass finds
 *    nothing to rewrite.
 * 5. The wrapping `<div class="mermaid-scroll">` gets `mermaid-themed`
 *    appended to its className list so it is easy to verify the plugin
 *    ran (visible in DevTools).
 *
 * # Run order
 *
 * Add to `rehypePlugins` AFTER `rehype-mermaid` (= the SVG must already
 * exist) AFTER `rehype-mermaid-link` (= we don't care about anchors but
 * placing this last is least disruptive) and AFTER
 * `rehype-mermaid-wrapper` (= we use `.mermaid-scroll` as the marker).
 *
 * # Mapping table
 *
 * The table below is the OBSERVED palette that Mermaid's "default"
 * theme bakes in. Counts are aggregated across the 4 diagram subtypes
 * present in the corpus (timeline, gantt, quadrantChart, flowchart-v2).
 * Mappings target the seven Mermaid tokens declared in `global.css`
 * plus a small set of new tokens for gantt-specific roles (critical
 * path, exclude range, alternating sections, clickable text):
 *
 *  | Literal     | Role in default theme                                 | Variable                  |
 *  |-------------|-------------------------------------------------------|---------------------------|
 *  | #333        | body text fill, section title fill, label fill        | --mermaid-text            |
 *  | #333333     | marker fill / stroke, edgePath stroke, anchor fill    | --mermaid-edge            |
 *  | #000        | tick text fill, quadrant fills, root state-start      | --mermaid-text            |
 *  | #000000     | drop-shadow flood, root state-start                   | --mermaid-text            |
 *  | black       | timeline arrow stroke, gantt outsideText fill         | --mermaid-text            |
 *  | white       | gantt section1/3 fill (semi-transparent overlay), text| --mermaid-bg              |
 *  | #ffffff     | timeline section text on dark hsl bg                  | --mermaid-bg              |
 *  | #ECECFF    | flowchart node fill (light lavender)                  | --mermaid-node-bg         |
 *  | #9370DB     | node "neo" border + flowchart node stroke             | --mermaid-node-border     |
 *  | #ffffde     | flowchart cluster fill (pale yellow)                  | --mermaid-cluster-bg      |
 *  | #aaaa33     | flowchart cluster stroke + disabled-text fill         | --mermaid-cluster-border  |
 *  | #8a90dd     | gantt task fill (default)                             | --mermaid-node-bg         |
 *  | #534fbc     | gantt task stroke                                     | --mermaid-node-border     |
 *  | #bfc7ff     | gantt active-task fill                                | --mermaid-node-bg         |
 *  | #003163     | gantt clickable taskText fill                         | --mermaid-link            |
 *  | navy        | gantt vert text fill / stroke                         | --mermaid-link            |
 *  | #ff8888     | gantt critical-path stroke                            | --mermaid-crit            |
 *  | red         | gantt critical-path fill, today marker stroke         | --mermaid-crit            |
 *  | #fff400     | gantt section2 background (alternating)               | --mermaid-section-alt     |
 *  | rgba(102,   | gantt section0 background (alternating)               | --mermaid-section-alt     |
 *  |   102, 255, |                                                       |                           |
 *  |   0.49)     |                                                       |                           |
 *  | #eeeeee     | gantt exclude-range fill                              | --mermaid-exclude-bg      |
 *  | grey        | gantt done-task stroke                                | --mermaid-edge            |
 *  | lightgrey   | gantt done-task fill, grid tick stroke                | --mermaid-cluster-bg      |
 *
 *  Quadrant chart specifics (added after the initial probe):
 *  - #f1f1ff / #f6f6ff / #fbfbff — the three additional quadrant
 *    background fills (top-right uses #ECECFF which was already
 *    captured above as flowchart node fill). All four now resolve
 *    to --mermaid-node-bg so the four quadrants share a single
 *    subtle off-bg surface that follows the mode (light pastel in
 *    light, dark navy in dark). The 15%-channel gradient Mermaid
 *    encodes between them is too subtle to preserve and was the
 *    reason three of four quadrants stayed bright in dark mode.
 *  - #131300 / #0e0e00 / #090900 / #040400 — the four quadrant
 *    region label text fills (≈ near-black with a 0xN3 gradient
 *    encoding the same priority order as the bg gradient above).
 *    All four now map to --mermaid-text so the labels follow the
 *    body (`能力高（隠）` etc. on the candidate-vs-hidability chart
 *    were unreadable black-on-dark in dark mode before this).
 *  - rgb(199, 199, 241) — the lavender quadrant border / divider
 *    line. Maps to --mermaid-edge so the four-way grid follows
 *    the mode.
 *
 *  Timeline section palette (cScale0..13 / cScaleLabel0..13):
 *  Mermaid `timeline` colors each section by index. The default theme
 *  auto-picks black/white text per section based on HSL lightness —
 *  which mis-fires on light pastels (lime + white = invisible) and
 *  breaks entirely in dark mode. We bypass the auto-pick by injecting
 *  fixed `themeVariables` (cScale + cScaleLabel) at build time
 *  (`astro.config.mjs`), then rewrite each baked hex into the matching
 *  `--mermaid-section-N-{bg,text}` token below so dark mode can invert
 *  per-hue (deep bg + pastel text) through the CSS-variable mechanism.
 *  See the matching token block in `src/styles/global.css` for the
 *  full (bg, text) pair table.
 *
 *  Intentionally LEFT ALONE:
 *  - #552222 (error icon/text) — error-only path, rarely rendered.
 *  - hsl(240, 100%, NaN%) on quadrantChart data-point circles —
 *    Mermaid emits NaN because it expects an `r,g,b` color in the
 *    data array but our entries supply a 2-tuple `[x, y]`. The hsl()
 *    is therefore invalid and the browser draws nothing, leaving the
 *    chart with text-only data points. Both modes render identically
 *    (= no visible bubble), so no rewrite is needed.
 *  - rgba(...) edgeLabel backgrounds and drop-shadow rgba — keep their
 *    semi-transparent grey so labels are legible against any node
 *    color.
 */
import { visit } from 'unist-util-visit';

// ---------------------------------------------------------------------------
// Substitution table. Order matters: longer literals first, so e.g.
// `#333333` is matched before `#333`, and `black` is matched before `lac`
// substring etc. (We use word-boundary anchors for named colors.)
// ---------------------------------------------------------------------------

/** @type {Array<[RegExp, string]>} */
const COLOR_SUBSTITUTIONS = [
  // 6-hex first (more specific than 3-hex with the same prefix)
  [/#333333\b/g, 'var(--mermaid-edge)'],
  [/#000000\b/g, 'var(--mermaid-text)'],
  [/#ffffff\b/g, 'var(--mermaid-bg)'],
  [/#ECECFF\b/gi, 'var(--mermaid-node-bg)'],
  [/#ffffde\b/gi, 'var(--mermaid-cluster-bg)'],
  [/#aaaa33\b/g, 'var(--mermaid-cluster-border)'],
  [/#9370DB\b/gi, 'var(--mermaid-node-border)'],
  [/#8a90dd\b/g, 'var(--mermaid-node-bg)'],
  [/#534fbc\b/g, 'var(--mermaid-node-border)'],
  [/#bfc7ff\b/g, 'var(--mermaid-node-bg)'],
  [/#003163\b/g, 'var(--mermaid-link)'],
  [/#ff8888\b/g, 'var(--mermaid-crit)'],
  [/#fff400\b/g, 'var(--mermaid-section-alt)'],
  [/#eeeeee\b/g, 'var(--mermaid-exclude-bg)'],

  // Quadrant chart bg fills (3 of 4; top-right `#ECECFF` already
  // captured above). The 15%-channel gradient Mermaid encodes here
  // is too subtle to preserve as 4 distinct dark-mode tokens, so all
  // four resolve to a single `--mermaid-node-bg` surface that
  // follows the mode (light pastel / dark navy).
  [/#fbfbff\b/gi, 'var(--mermaid-node-bg)'],
  [/#f6f6ff\b/gi, 'var(--mermaid-node-bg)'],
  [/#f1f1ff\b/gi, 'var(--mermaid-node-bg)'],

  // Quadrant chart label text fills. Four near-black variants
  // (`#131300` / `#0e0e00` / `#090900` / `#040400`) used for the
  // four region labels and the data-point name labels. All resolve
  // to `--mermaid-text` so they read at full body contrast in
  // either mode (was unreadable black-on-dark before).
  [/#131300\b/gi, 'var(--mermaid-text)'],
  [/#0e0e00\b/gi, 'var(--mermaid-text)'],
  [/#090900\b/gi, 'var(--mermaid-text)'],
  [/#040400\b/gi, 'var(--mermaid-text)'],

  // Quadrant chart border / divider lines (the four-way grid
  // separator strokes). Lavender in default theme — maps to the
  // standard mermaid edge color so it follows the mode.
  [/rgb\(199,\s*199,\s*241\)/g, 'var(--mermaid-edge)'],

  // Gantt section0 background. Mermaid emits this exact rgba string
  // so we match it literally (any whitespace variant Mermaid produces).
  // Maps to the same alternating-section token as #fff400 (section2)
  // so all highlighted gantt rows share one theme-keyed colour.
  [/rgba\(102,\s*102,\s*255,\s*0\.49\)/g, 'var(--mermaid-section-alt)'],

  // Timeline section palette (cScale0..13 / cScaleLabel0..13). The
  // light-mode hex pairs declared in `themeVariables` (astro.config.mjs)
  // are baked into the SVG by Mermaid; we rewrite each into the matching
  // `--mermaid-section-N-{bg,text}` token so dark mode can invert per-hue
  // through the CSS-variable mechanism. See the matching token block in
  // `src/styles/global.css` for the full (bg, text) palette table.
  [/#e2e8f0\b/gi, 'var(--mermaid-section-0-bg)'],
  [/#334155\b/gi, 'var(--mermaid-section-0-text)'],
  [/#dbeafe\b/gi, 'var(--mermaid-section-1-bg)'],
  [/#1e40af\b/gi, 'var(--mermaid-section-1-text)'],
  [/#fef3c7\b/gi, 'var(--mermaid-section-2-bg)'],
  [/#92400e\b/gi, 'var(--mermaid-section-2-text)'],
  [/#dcfce7\b/gi, 'var(--mermaid-section-3-bg)'],
  [/#166534\b/gi, 'var(--mermaid-section-3-text)'],
  [/#fce7f3\b/gi, 'var(--mermaid-section-4-bg)'],
  [/#9f1239\b/gi, 'var(--mermaid-section-4-text)'],
  [/#ede9fe\b/gi, 'var(--mermaid-section-5-bg)'],
  [/#5b21b6\b/gi, 'var(--mermaid-section-5-text)'],
  [/#fed7aa\b/gi, 'var(--mermaid-section-6-bg)'],
  [/#9a3412\b/gi, 'var(--mermaid-section-6-text)'],
  [/#cffafe\b/gi, 'var(--mermaid-section-7-bg)'],
  [/#155e75\b/gi, 'var(--mermaid-section-7-text)'],
  [/#fef9c3\b/gi, 'var(--mermaid-section-8-bg)'],
  [/#854d0e\b/gi, 'var(--mermaid-section-8-text)'],
  [/#fee2e2\b/gi, 'var(--mermaid-section-9-bg)'],
  [/#991b1b\b/gi, 'var(--mermaid-section-9-text)'],
  [/#e0e7ff\b/gi, 'var(--mermaid-section-10-bg)'],
  [/#3730a3\b/gi, 'var(--mermaid-section-10-text)'],
  [/#f5d0fe\b/gi, 'var(--mermaid-section-11-bg)'],
  [/#86198f\b/gi, 'var(--mermaid-section-11-text)'],
  [/#d1fae5\b/gi, 'var(--mermaid-section-12-bg)'],
  [/#065f46\b/gi, 'var(--mermaid-section-12-text)'],
  [/#fef2f2\b/gi, 'var(--mermaid-section-13-bg)'],
  [/#be123c\b/gi, 'var(--mermaid-section-13-text)'],

  // 3-hex shorthands. Anchor with `\b` so we don't chop off the tail of
  // a 6-hex value mid-string (e.g. inside `#333333` the regex engine
  // still tries to backtrack but `#333333` is matched first above).
  [/#333\b/g, 'var(--mermaid-text)'],
  [/#000\b/g, 'var(--mermaid-text)'],

  // CSS named colors. Use a lookbehind / lookahead via word boundary so
  // we don't accidentally rewrite `black` inside `blackmail` or similar.
  // SVG attributes only use these as standalone tokens, but the inline
  // `<style>` block uses them inside CSS declarations like `fill:black;`
  // so the boundary check is necessary.
  [/\bblack\b/g, 'var(--mermaid-text)'],
  [/\bwhite\b/g, 'var(--mermaid-bg)'],
  [/\bnavy\b/g, 'var(--mermaid-link)'],
  [/\bred\b/g, 'var(--mermaid-crit)'],
  [/\bgrey\b/g, 'var(--mermaid-edge)'],
  [/\blightgrey\b/g, 'var(--mermaid-cluster-bg)'],
];

/**
 * Apply all substitutions to a string. Returns the rewritten string
 * (or the original reference if no rule matched, so the AST node is
 * not needlessly churned).
 */
function rewriteColors(input) {
  if (typeof input !== 'string' || input.length === 0) return input;
  let out = input;
  for (const [pattern, replacement] of COLOR_SUBSTITUTIONS) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

/**
 * Walk every descendant element of `root`, recursively, applying the
 * substitution to relevant attributes and to `<style>` text content.
 */
function rewriteSvgTree(root) {
  if (!root || !Array.isArray(root.children)) return;
  for (const child of root.children) {
    if (!child) continue;
    if (child.type === 'element') {
      const props = child.properties;
      if (props && typeof props === 'object') {
        // Inline `style="..."` attribute on any element.
        if (typeof props.style === 'string') {
          props.style = rewriteColors(props.style);
        }
        // SVG color presentation attributes.
        if (typeof props.fill === 'string') {
          props.fill = rewriteColors(props.fill);
        }
        if (typeof props.stroke === 'string') {
          props.stroke = rewriteColors(props.stroke);
        }
        // `flood-color` on <feDropShadow>, etc.
        if (typeof props['floodColor'] === 'string') {
          props['floodColor'] = rewriteColors(props['floodColor']);
        }
        if (typeof props['flood-color'] === 'string') {
          props['flood-color'] = rewriteColors(props['flood-color']);
        }
      }
      // The first child of a Mermaid <svg> is a <style> element whose
      // single text child contains every CSS rule for the diagram.
      // The full SVG style block is rewritten in one pass via the
      // standard substitution table; section colors are now driven by
      // the cScale / cScaleLabel themeVariables in `astro.config.mjs`,
      // so the previous rule-aware exemption mechanism is no longer
      // needed (every section text/bg pair has a token mapping).
      if (child.tagName === 'style' && Array.isArray(child.children)) {
        for (const t of child.children) {
          if (t && t.type === 'text' && typeof t.value === 'string') {
            t.value = rewriteColors(t.value);
          }
        }
      }
      rewriteSvgTree(child);
    }
  }
}

function isMermaidScrollWrapper(node) {
  if (!node || node.type !== 'element' || node.tagName !== 'div') return false;
  const cls = node.properties?.className;
  if (!Array.isArray(cls)) return false;
  return cls.includes('mermaid-scroll');
}

function findMermaidSvg(wrapper) {
  if (!Array.isArray(wrapper.children)) return null;
  for (const child of wrapper.children) {
    if (
      child &&
      child.type === 'element' &&
      child.tagName === 'svg' &&
      typeof child.properties?.id === 'string' &&
      child.properties.id.startsWith('mermaid-')
    ) {
      return child;
    }
  }
  return null;
}

export function rehypeMermaidThemer() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (!isMermaidScrollWrapper(node)) return;
      const svg = findMermaidSvg(node);
      if (!svg) return;

      // Rewrite the SVG (style block + per-element style/fill/stroke).
      rewriteSvgTree(svg);

      // Mark the wrapper so it is obvious in DevTools that the plugin
      // ran. Idempotent: skipped if already present.
      const cls = node.properties?.className;
      if (Array.isArray(cls) && !cls.includes('mermaid-themed')) {
        cls.push('mermaid-themed');
      }
    });
  };
}
