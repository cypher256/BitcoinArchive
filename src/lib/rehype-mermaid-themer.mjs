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
 *  Intentionally LEFT ALONE:
 *  - #552222 (error icon/text) — error-only path, rarely rendered.
 *  - HSL data colors emitted by `timeline` for section--N / section-N
 *    backgrounds. Those are part of the data encoding (each section
 *    gets a distinct hue) and rewriting them would collapse the
 *    palette into one color. Theming follows the body via the section
 *    text fills (`#ffffff` / `black`) and section line strokes which
 *    are mapped above.
 *  - Quadrant chart point fills (#131300 / #0e0e00 / #090900 / #040400
 *    / #fbfbff / #f6f6ff / #f1f1ff) — these encode user-supplied data
 *    points and labels; rewriting would corrupt the chart.
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

  // Gantt section0 background. Mermaid emits this exact rgba string
  // so we match it literally (any whitespace variant Mermaid produces).
  // Maps to the same alternating-section token as #fff400 (section2)
  // so all highlighted gantt rows share one theme-keyed colour.
  [/rgba\(102,\s*102,\s*255,\s*0\.49\)/g, 'var(--mermaid-section-alt)'],

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
