/**
 * remark-speaker-blockquote.mjs — Tag blockquotes with their speaker.
 *
 * Scans for `<!-- speaker: Name -->` HTML comments that sit as siblings
 * before a blockquote, and writes a `data-speaker="<slug>"` attribute
 * onto the following blockquote so CSS can style by author identity
 * (e.g. yellow left border for Satoshi pull-quotes).
 *
 * Marker example:
 *   <!-- speaker: Satoshi Nakamoto -->
 *   > Quoted text.
 *
 * Renders as:
 *   <blockquote data-speaker="satoshi">
 *     <p>Quoted text.</p>
 *   </blockquote>
 *
 * Only top-level (root-child) speaker markers paired with a top-level
 * blockquote are processed. Markers inside an existing blockquote
 * (`> <!-- speaker: ... -->`) are intentionally left alone — those tag
 * the speaker of a nested quote, which is a different mechanism.
 *
 * The marker itself is left in the AST so other plugins (tone-skip,
 * remark-quote-blocks attribution) keep seeing it.
 *
 * Currently only Satoshi gets a slug. Other speaker names are skipped
 * — extend the SPEAKER_SLUGS map below as styling rules grow.
 */
import { visit } from 'unist-util-visit';

const SPEAKER_RE = /^<!--\s*speaker:\s*(.+?)\s*-->$/;

// Map raw "speaker:" value to a stable CSS slug. Only entries present
// here produce a data-speaker attribute. Names not in the map are
// silently ignored (the marker still serves its tone-skip role).
const SPEAKER_SLUGS = new Map([
  ['satoshi nakamoto', 'satoshi'],
  ['satoshi', 'satoshi'],
  ['サトシ・ナカモト', 'satoshi'],
  ['サトシ', 'satoshi'],
]);

const TRANSPARENT_HTML_RE = /^<!--\s*(\/?tone-skip|quote:|audit:|\/?audit:)/;

/**
 * Walk forward from `index` in `parent.children` to the next non-HTML
 * sibling, skipping speaker markers, tone-skip wrappers, quote markers
 * and audit-skip markers. Returns null if no such sibling exists.
 */
function nextNonHtmlSibling(parent, index) {
  for (let i = index + 1; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (child.type !== 'html') return child;
    const value = child.value.trim();
    if (SPEAKER_RE.test(value)) continue;
    if (TRANSPARENT_HTML_RE.test(value)) continue;
    return child;
  }
  return null;
}

export function remarkSpeakerBlockquote() {
  return (tree) => {
    visit(tree, 'html', (node, index, parent) => {
      if (index === null || !parent) return;
      // Only handle top-level (root-child) markers. Markers nested inside
      // blockquotes have different semantics.
      if (parent.type !== 'root') return;

      const match = node.value.trim().match(SPEAKER_RE);
      if (!match) return;

      const slug = SPEAKER_SLUGS.get(match[1].toLowerCase()) ?? SPEAKER_SLUGS.get(match[1]);
      if (!slug) return;

      const target = nextNonHtmlSibling(parent, index);
      if (target?.type !== 'blockquote') return;

      target.data ??= {};
      target.data.hProperties ??= {};
      target.data.hProperties['data-speaker'] = slug;
    });
  };
}
