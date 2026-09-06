/**
 * remark-editorial-marker.mjs — Editor-note marker classifier
 *
 * Transforms paragraphs that consist of a single italic+brackets editorial
 * marker into a labeled <aside>. The bracket characters and the
 * "Editor:" / "編者注：" prefix are stripped from the visible body and
 * replaced with a structured label span.
 *
 * Recognizes (canonical forms only):
 *   *[Editor: ...]*    -> class editorial-note editorial-note--editor
 *   *[編者注：...]*    -> same
 *   *[Context: ...]*   -> class editorial-note editorial-note--context
 *   *[補足：...]*      -> same
 *
 * Output (per paragraph):
 *   <aside class="editorial-note editorial-note--editor">
 *     <span class="editorial-note-label">📝 Editor's note</span>
 *     ...body text with inline links preserved...
 *   </aside>
 *
 * The "(Bitcoin Institute)" attribution suffix is included only on
 * primary-source entries (correspondence / mailing-list / forum-post /
 * whitepaper / bip / court-document / tweet / web-document), where the
 * surrounding body
 * is a verbatim archived record and the label must distinguish this note
 * as the site's commentary rather than part of that record. Editorial
 * entries (article / analysis / biography / design / currency / guide)
 * are themselves Bitcoin Institute's own composed prose throughout, so
 * re-attributing a single inline note inside them is redundant self-
 * reference and the suffix is omitted there (git history: the suffix
 * was introduced 2026-04-26 specifically to solve the primary-source
 * disambiguation problem, before `guide`/`currency` or most `analysis`
 * inline notes existed).
 *
 * Markers must occupy a paragraph by themselves. Inline links and other
 * inline nodes inside the marker body are preserved.
 *
 * STYLE_GUIDE_CORE.md "Editorial Markers" section is the spec.
 */
import { visit } from 'unist-util-visit';
import { toHast } from 'mdast-util-to-hast';

const PREFIXES = [
  { test: /^\[Editor:\s/,    strip: /^\[Editor:\s/,    kind: 'editor',  lang: 'en' },
  { test: /^\[編者注[：:]/,  strip: /^\[編者注[：:]/,  kind: 'editor',  lang: 'ja' },
  { test: /^\[Context:\s/,   strip: /^\[Context:\s/,   kind: 'context', lang: 'en' },
  { test: /^\[補足[：:]/,    strip: /^\[補足[：:]/,    kind: 'context', lang: 'ja' },
];

export const PRIMARY_SOURCE_TYPES = new Set([
  'correspondence', 'mailing-list', 'forum-post', 'whitepaper', 'bip',
  'court-document', 'tweet', 'web-document',
]);

export const LABELS = {
  'editor:en':  "📝 Editor's note (Bitcoin Institute)",
  'editor:ja':  '📝 編者注（ビットコイン・インスティテュート）',
  'context:en': '📋 Context (Bitcoin Institute)',
  'context:ja': '📋 補足（ビットコイン・インスティテュート）',
};

export const LABELS_EDITORIAL = {
  'editor:en':  '📝 Editor\'s note',
  'editor:ja':  '📝 編者注',
  'context:en': '📋 Context',
  'context:ja': '📋 補足',
};

export function remarkEditorialMarker() {
  return function transformer(tree, file) {
    const entryType = file?.data?.astro?.frontmatter?.type;
    const labels = PRIMARY_SOURCE_TYPES.has(entryType) ? LABELS : LABELS_EDITORIAL;
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
      const labelText = labels[labelKey];

      // Convert the (now bracket-less) emphasis children directly to hast,
      // and prepend a structured <span class="editorial-note-label">. We use
      // hChildren rather than mdast `type: 'html'` so the output does not
      // depend on `allowDangerousHtml` being enabled in the host pipeline.
      const bodyHast = em.children
        .map((c) => toHast(c, { allowDangerousHtml: true }))
        .filter(Boolean);

      node.data = node.data || {};
      node.data.hName = 'aside';
      node.data.hProperties = {
        ...(node.data.hProperties || {}),
        className: ['editorial-note', `editorial-note--${matched.kind}`],
      };
      node.data.hChildren = [
        {
          type: 'element',
          tagName: 'span',
          properties: { className: ['editorial-note-label'] },
          children: [{ type: 'text', value: labelText }],
        },
        { type: 'text', value: ' ' },
        {
          type: 'element',
          tagName: 'span',
          properties: { className: ['editorial-note-body'] },
          children: bodyHast,
        },
      ];
    });
  };
}

export default remarkEditorialMarker;
