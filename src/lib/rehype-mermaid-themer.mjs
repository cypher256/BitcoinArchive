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
 *  Intentionally LEFT ALONE:
 *  - #552222 (error icon/text) — error-only path, rarely rendered.
 *  - HSL data colors emitted by `timeline` for section--N / section-N
 *    backgrounds. Those are part of the data encoding (each section
 *    gets a distinct hue) and rewriting them would collapse the
 *    palette into one color.
 *  - `.section-N text` and `.section--N text` text fills (= the
 *    text rendered on top of the data-encoded section bg above), and
 *    `.node-icon-N` / `.node-icon--N` icon `color` fills. These
 *    were originally `#000` / `#fff` / `black` / `white` so they
 *    contrasted against the fixed-bright pastel section bg in either
 *    mode. Rewriting them to `--mermaid-text` / `--mermaid-bg`
 *    collapses the contrast in dark mode (light-grey-on-pale-yellow,
 *    unreadable). The rule-body exemption lives in
 *    `SELECTOR_EXEMPTIONS` and is consumed by `rewriteCssText`.
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
 * Selectors whose color declarations should be EXCLUDED from the
 * substitution pass. Used by `rewriteCssText` below.
 *
 * The Mermaid `timeline` chart type emits per-section CSS rules like
 *
 *   #mermaid-0 .section-0 text   { fill: #000; }
 *   #mermaid-0 .section-0        { ...etc... }
 *   #mermaid-0 .node-icon-0      { color: #000; }
 *   #mermaid-0 .section--1 text  { fill: #fff; }   (untyped variant)
 *   #mermaid-0 .node-icon--1     { color: #fff; }
 *
 * The `.section-N` background fill is data-encoded (each timeline
 * section gets a distinct bright pastel `hsl(...)` hue) and is
 * intentionally NOT rewritten — see the "Intentionally LEFT ALONE"
 * block at the top of this file. The text and icon fills inside
 * those sections sit on top of those bright pastels and were
 * originally `#000` / `#fff` so they would always read against the
 * fixed-bright section bg regardless of any outer page theme.
 *
 * Rewriting them to `--mermaid-text` / `--mermaid-bg` (which we do
 * for every other text fill in the SVG) collapses that contrast in
 * dark mode: the section bg stays bright pastel, `--mermaid-text`
 * resolves to `#e8eaee` (light grey), and the resulting light-grey-
 * on-pale-yellow text is unreadable.
 *
 * Fix (option (a) per the dark-mode triage doc): leave the original
 * `#000` / `#fff` / `black` / `white` literals in place inside these
 * specific rule bodies. The timeline section text then stays
 * theme-agnostic — but that's acceptable because the section bg is
 * also theme-agnostic, so the contrast contract holds in both modes.
 *
 * Each entry below is a substring test against the rule's selector
 * (case-insensitive). Whitespace inside the selector is normalized
 * to a single space before matching, so `.section-0  text` and
 * `.section-0\ttext` both match `'section-' + Ntext'`-style probes.
 */
const SELECTOR_EXEMPTIONS = [
  // `.section-N text` and `.section--N text` (timeline section text).
  /\.section-{1,2}\d+\s+text\b/i,
  // `.node-icon-N` and `.node-icon--N` (timeline section emoji icons).
  /\.node-icon-{1,2}\d+\b/i,
];

/**
 * Run `rewriteColors` on every CSS rule body inside the Mermaid
 * `<style>` text EXCEPT rules whose selector matches one of
 * `SELECTOR_EXEMPTIONS`. The structure of a Mermaid style block is:
 *
 *   selector1 { decl; decl; ... } selector2 { decl; ... } ...
 *
 * with no `@media` / `@keyframes` (Mermaid's `default` theme emits
 * one `@keyframes edge-animation-frame`/`dash` block before the
 * per-rule cascade — those don't contain colors we rewrite, but the
 * walker is robust against them via the bracket-depth count).
 *
 * Implementation: scan character by character, track brace depth,
 * accumulate a "selector buffer" until `{`, then a "body buffer"
 * until matching `}`. At each `}` decide whether to rewrite the
 * body or pass it through verbatim. `@keyframes` blocks contain
 * nested `0% { ... }` rules so we only check exemptions at depth-1
 * and rewrite at depth>=1 unconditionally for now (no exemption
 * inside keyframes; Mermaid doesn't put colors there anyway).
 */
function rewriteCssText(css) {
  if (typeof css !== 'string' || css.length === 0) return css;
  let out = '';
  let buf = '';
  let inBody = false;
  let depth = 0;
  let topSelector = '';
  for (let i = 0; i < css.length; i++) {
    const ch = css[i];
    if (ch === '{') {
      if (depth === 0) {
        // End of selector. Stash the selector text for the
        // exemption test, then start collecting the body.
        topSelector = buf.replace(/\s+/g, ' ').trim();
        out += buf + '{';
        buf = '';
        inBody = true;
      } else {
        buf += ch;
      }
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0) {
        // End of top-level rule body. Decide rewrite vs verbatim
        // based on the captured selector.
        const exempt = SELECTOR_EXEMPTIONS.some((re) => re.test(topSelector));
        out += (exempt ? buf : rewriteColors(buf)) + '}';
        buf = '';
        topSelector = '';
        inBody = false;
      } else {
        buf += ch;
      }
    } else {
      buf += ch;
    }
  }
  // Any trailing unbracketed text (shouldn't happen in well-formed
  // CSS, but be defensive) gets the standard rewrite.
  if (buf.length > 0) out += rewriteColors(buf);
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
      // Use the rule-aware rewrite so timeline `.section-N text` and
      // `.node-icon-N` rule bodies (which sit on data-encoded bright
      // pastel section backgrounds) keep their original `#000` /
      // `#fff` / `black` / `white` fills — see the doc-comment on
      // `SELECTOR_EXEMPTIONS` for why.
      if (child.tagName === 'style' && Array.isArray(child.children)) {
        for (const t of child.children) {
          if (t && t.type === 'text' && typeof t.value === 'string') {
            t.value = rewriteCssText(t.value);
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
