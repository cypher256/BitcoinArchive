/**
 * remark-editorial-marker.mjs — Editor-note marker classifier
 *
 * Transforms paragraphs that consist of a single italic+brackets editorial
 * marker into a labeled <aside> with explicit attribution to Bitcoin
 * Institute. The bracket characters and the "Editor:" / "編者注：" prefix
 * are stripped from the visible body and replaced with a structured label
 * span.
 *
 * Recognizes (canonical forms only):
 *   *[Editor: ...]*    -> class editor-inline editor-inline--editor
 *   *[編者注：...]*    -> same
 *   *[Context: ...]*   -> class editor-inline editor-inline--context
 *   *[補足：...]*      -> same
 *
 * Output (per paragraph):
 *   <aside class="editor-inline editor-inline--editor">
 *     <span class="editor-inline-label">📝 Editor's note (Bitcoin Institute)</span>
 *     ...body text with inline links preserved...
 *   </aside>
 *
 * Markers must occupy a paragraph by themselves. Inline links and other
 * inline nodes inside the marker body are preserved.
 *
 * STYLE_GUIDE.md "Editorial Markers" section is the spec.
 */
import { visit } from 'unist-util-visit';
import { toHast } from 'mdast-util-to-hast';

const PREFIXES = [
  { test: /^\[Editor:\s/,    strip: /^\[Editor:\s/,    kind: 'editor',  lang: 'en' },
  { test: /^\[編者注[：:]/,  strip: /^\[編者注[：:]/,  kind: 'editor',  lang: 'ja' },
  { test: /^\[Context:\s/,   strip: /^\[Context:\s/,   kind: 'context', lang: 'en' },
  { test: /^\[補足[：:]/,    strip: /^\[補足[：:]/,    kind: 'context', lang: 'ja' },
];

const LABELS = {
  'editor:en':  "📝 Editor's note (Bitcoin Institute)",
  'editor:ja':  '📝 編者注（ビットコイン・インスティテュート）',
  'context:en': '📋 Context (Bitcoin Institute)',
  'context:ja': '📋 補足（ビットコイン・インスティテュート）',
};

export function remarkEditorialMarker() {
  return function transformer(tree) {
    visit(tree, 'paragraph', (node) => {
      if (!node.children || node.children.length !== 1) return;
      const em = node.children[0];
      if (em.type !== 'emphasis') return;
      const first = em.children && em.children[0];
      if (!first || first.type !== 'text') return;
      const head = first.value;
      let matched = null;
      for (const p of PREFIXES) {
        if (p.test.test(head)) { matched = p; break; }
      }
      if (!matched) return;
      const last = em.children[em.children.length - 1];
      if (!last || last.type !== 'text' || !/\]\s*$/.test(last.value)) return;

      // Strip the "[Editor: " prefix and trailing "]"
      first.value = first.value.replace(matched.strip, '');
      last.value = last.value.replace(/\]\s*$/, '');

      const labelKey = `${matched.kind}:${matched.lang}`;
      const labelText = LABELS[labelKey];

      // Convert the (now bracket-less) emphasis children directly to hast,
      // and prepend a structured <span class="editor-inline-label">. We use
      // hChildren rather than mdast `type: 'html'` so the output does not
      // depend on `allowDangerousHtml` being enabled in the host pipeline.
      const bodyHast = em.children
        .map((c) => toHast(c, { allowDangerousHtml: true }))
        .filter(Boolean);

      node.data = node.data || {};
      node.data.hName = 'aside';
      node.data.hProperties = {
        ...(node.data.hProperties || {}),
        className: ['editor-inline', `editor-inline--${matched.kind}`],
      };
      node.data.hChildren = [
        {
          type: 'element',
          tagName: 'span',
          properties: { className: ['editor-inline-label'] },
          children: [{ type: 'text', value: labelText }],
        },
        { type: 'text', value: ' ' },
        ...bodyHast,
      ];
    });
  };
}

export default remarkEditorialMarker;
