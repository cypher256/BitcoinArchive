/**
 * remark-editorial-marker.mjs — Editor-note marker classifier
 *
 * Adds class names to paragraphs that contain a single italic+brackets
 * editorial marker so CSS can render them as a labeled aside box.
 *
 * Recognizes (canonical forms only):
 *   *[Editor: ...]*    -> class editor-inline editor-inline--editor
 *   *[編者注：...]*    -> same
 *   *[Context: ...]*   -> class editor-inline editor-inline--context
 *   *[補足：...]*      -> same
 *
 * Markers must occupy a paragraph by themselves. Inline links inside the
 * marker body are preserved (the plugin only inspects the first text node
 * of the emphasis).
 *
 * Non-canonical forms (unlabeled `*[...]*`, `*[Source:]*`, etc.) are not
 * touched here — they are flagged by check-editorial-markers.mjs and
 * normalized in Phase 4.
 *
 * STYLE_GUIDE.md "Editorial Markers" section is the spec.
 */
import { visit } from 'unist-util-visit';

const PREFIXES = [
  { test: /^\[Editor:\s/,    kind: 'editor' },
  { test: /^\[編者注[：:]/,  kind: 'editor' },
  { test: /^\[Context:\s/,   kind: 'context' },
  { test: /^\[補足[：:]/,    kind: 'context' },
];

export function remarkEditorialMarker() {
  return function transformer(tree) {
    visit(tree, 'paragraph', (node) => {
      // Paragraph must be a single emphasis node
      if (!node.children || node.children.length !== 1) return;
      const em = node.children[0];
      if (em.type !== 'emphasis') return;
      // First child must be a text node
      const first = em.children && em.children[0];
      if (!first || first.type !== 'text') return;
      const head = first.value;
      let kind = null;
      for (const p of PREFIXES) {
        if (p.test.test(head)) { kind = p.kind; break; }
      }
      if (!kind) return;
      // Last child must end with the closing bracket
      const last = em.children[em.children.length - 1];
      if (!last || last.type !== 'text' || !/\]\s*$/.test(last.value)) return;
      // Mark for hast: render the paragraph as an <aside>
      node.data = node.data || {};
      node.data.hName = 'aside';
      node.data.hProperties = {
        ...(node.data.hProperties || {}),
        className: ['editor-inline', `editor-inline--${kind}`],
      };
    });
  };
}

export default remarkEditorialMarker;
