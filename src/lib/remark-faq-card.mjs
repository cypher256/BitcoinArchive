/**
 * remark-faq-card.mjs — FAQ hub Q&A card grouping
 *
 * Converts a marker placed immediately before a question heading:
 *   <!-- faq -->
 *   ### Question text
 *   Answer paragraph.
 *   **Start here:** [link text](url)
 *   **Also read:** [link text](url)
 * into one grouped card:
 *   <div class="qa-card">
 *     <h3 class="qa-question">Question text</h3>
 *     <p class="qa-answer">Answer paragraph.</p>
 *     <div class="qa-links">
 *       <a class="qa-pill" href="url"><span class="qa-pill-label">Start here</span><span class="qa-pill-arrow">→</span>link text</a>
 *       <a class="qa-pill qa-pill--secondary" href="url">...</a>
 *     </div>
 *   </div>
 *
 * The heading is kept as its original level (h3) so the document's
 * heading outline is unaffected — only the visual grouping changes.
 *
 * Source-shape note: with no blank line between the answer sentence
 * and the "**Start here:** [...]" line, CommonMark parses them as ONE
 * paragraph joined by a soft line break — not as separate paragraph
 * nodes. A soft break survives in mdast as a literal "\n" inside a
 * text node's value (no dedicated break node), so this plugin splits
 * each paragraph's children back into source lines on that character,
 * then classifies each line: one starting with a bold label
 * (`**Label:** [link]`) becomes a nav pill, anything else is answer
 * prose. This is a structural check (first node of the line is
 * `strong`), not a text match, so it works for both EN ("Start here" /
 * "Also read") and JA ("まず読む" / "あわせて読む") labels without
 * per-language configuration.
 *
 * Single-purpose, page-scoped marker — see the reading-guide entries
 * under src/data/entries/en/analysis and src/data/translations/ja/analysis
 * for the only current consumer. Same family as remark-chart-embed and
 * remark-editorial-marker: emits via data.hName/hChildren (no dependency
 * on allowDangerousHtml in the host remark-rehype pipeline).
 */
import { toHast } from 'mdast-util-to-hast';

const MARKER = /^<!--\s*faq\s*-->$/;

// remarkEntryClosing (which runs earlier in the pipeline) deletes its own
// `<!-- entry-closing -->` marker node and tags the following paragraph
// with this class directly, so by the time this plugin walks the tree that
// paragraph is indistinguishable from ordinary answer prose by `.type`
// alone — the greedy paragraph-consuming loop below must skip it, or a FAQ
// card immediately followed by the page's closing paragraph swallows the
// closing text as if it were another answer line.
function isEntryClosing(node) {
  const className = node?.data?.hProperties?.className;
  const classes = Array.isArray(className) ? className : className ? [className] : [];
  return classes.includes('entry-closing');
}

function convertInline(nodes) {
  return (nodes || []).map((n) => toHast(n, { allowDangerousHtml: true })).filter(Boolean);
}

// Splits a paragraph's flat children back into source lines, breaking
// wherever a soft line break ("\n") appears inside a text node's value.
function splitIntoLines(children) {
  const lines = [[]];
  for (const child of children || []) {
    if (child.type === 'text' && child.value.includes('\n')) {
      const parts = child.value.split('\n');
      if (parts[0]) lines[lines.length - 1].push({ type: 'text', value: parts[0] });
      for (let k = 1; k < parts.length; k++) {
        lines.push(parts[k] ? [{ type: 'text', value: parts[k] }] : []);
      }
    } else {
      lines[lines.length - 1].push(child);
    }
  }
  return lines.filter((line) => line.length > 0);
}

// A nav line is exactly `**Label:** [link](url)` — a leading bold
// label whose very next meaningful node (skipping only a trailing
// colon/whitespace text fragment) is the link itself. Checking merely
// "starts with strong" (no link at all) or "starts with strong and has
// a link somewhere in the line" both misclassify ordinary answer prose
// that happens to open with emphasis and cite a link later, e.g.
// "**Important:** see [this record](/x/)" — that line's next
// meaningful node after the label is the word "see", not the link, so
// it correctly falls through to answer content below.
function isNavLine(line) {
  if (line[0]?.type !== 'strong') return false;
  const next = line.slice(1).find((n) => !(n.type === 'text' && /^[\s:：]*$/.test(n.value || '')));
  return next?.type === 'link';
}

function navLineToPill(line, isSecondary) {
  const strong = line[0];
  const label = (strong.children || [])
    .map((c) => c.value || '')
    .join('')
    .replace(/[:：]\s*$/, '');
  const linkNode = line.find((c) => c.type === 'link');
  if (!linkNode) return null;
  const linkHast = toHast(linkNode, { allowDangerousHtml: true });
  return {
    type: 'element',
    tagName: 'a',
    properties: {
      className: isSecondary ? ['qa-pill', 'qa-pill--secondary'] : ['qa-pill'],
      href: linkHast.properties.href,
    },
    children: [
      { type: 'element', tagName: 'span', properties: { className: ['qa-pill-label'] }, children: [{ type: 'text', value: label }] },
      { type: 'element', tagName: 'span', properties: { className: ['qa-pill-arrow'] }, children: [{ type: 'text', value: '→' }] },
      { type: 'text', value: ' ' },
      ...linkHast.children,
    ],
  };
}

export function remarkFaqCard() {
  return function transformer(tree) {
    const children = tree.children;
    const out = [];
    for (let i = 0; i < children.length; i++) {
      const node = children[i];
      const isMarker = node.type === 'html' && MARKER.test((node.value || '').trim());
      if (!isMarker) {
        out.push(node);
        continue;
      }
      const heading = children[i + 1];
      if (!heading || heading.type !== 'heading') {
        // Malformed usage (marker not followed by a heading) — drop the
        // marker rather than leak an HTML comment into the page.
        continue;
      }
      let j = i + 2;
      const paragraphs = [];
      while (j < children.length && children[j].type === 'paragraph' && !isEntryClosing(children[j])) {
        paragraphs.push(children[j]);
        j++;
      }

      const answerHast = [];
      const pills = [];
      for (const p of paragraphs) {
        for (const line of splitIntoLines(p.children)) {
          if (isNavLine(line)) {
            const pill = navLineToPill(line, pills.length > 0);
            if (pill) pills.push(pill);
          } else {
            answerHast.push({
              type: 'element',
              tagName: 'p',
              properties: { className: ['qa-answer'] },
              children: convertInline(line),
            });
          }
        }
      }

      const cardChildren = [
        {
          type: 'element',
          tagName: `h${heading.depth}`,
          properties: { className: ['qa-question'] },
          children: convertInline(heading.children),
        },
        ...answerHast,
      ];
      if (pills.length) {
        cardChildren.push({
          type: 'element',
          tagName: 'div',
          properties: { className: ['qa-links'] },
          children: pills,
        });
      }

      out.push({
        type: 'paragraph',
        children: [],
        data: {
          hName: 'div',
          hProperties: { className: ['qa-card'] },
          hChildren: cardChildren,
        },
      });
      i = j - 1;
    }
    tree.children = out;
  };
}

export default remarkFaqCard;
