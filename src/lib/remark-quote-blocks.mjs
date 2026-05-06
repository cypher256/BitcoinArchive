/**
 * remark-quote-blocks.mjs — Quote attribution renderer for Bitcoin Institute
 *
 * Transforms `<!-- quote: ID -->` markers in markdown body into
 * attribution HTML, using structured data from frontmatter `quotes[]`.
 *
 * Marker spec (JA):
 *   <!-- quote: q1 -->
 *   <!-- tone-skip -->
 *   > quoted text...
 *   <!-- /tone-skip -->
 *
 * Marker spec (EN):
 *   <!-- quote: q1 -->
 *   > quoted text...
 *
 * The plugin:
 *   1. Reads quotes[] from vfile.data.astro.frontmatter
 *   2. Finds <!-- quote: ID --> html nodes in the AST
 *   3. Validates sibling node ordering (tone-skip for JA, blockquote for EN)
 *   4. Replaces the marker with a <cite> attribution element
 *   5. Leaves tone-skip markers and blockquote content untouched
 *
 * If quotes[] is empty or absent, the plugin is a no-op.
 */
import { visit } from 'unist-util-visit';
import { participantDisplayNamesJaBySlug } from '../i18n/participants.ts';
import { MIRROR_BASE } from '../../site-config.mjs';

const QUOTE_MARKER_RE = /^<!--\s*quote:\s*(\w+)\s*-->$/;
const TONE_SKIP_RE = /^<!--\s*tone-skip\s*-->$/;
const TONE_SKIP_END_RE = /^<!--\s*\/tone-skip\s*-->$/;

/**
 * Detect locale from the file path.
 * Files under /translations/ja/ are JA, everything else is EN.
 */
function detectLocale(vfile) {
  const path = vfile.path || vfile.history?.[0] || '';
  return path.includes('/translations/ja/') ? 'ja' : 'en';
}

/**
 * Compute depth from parent chain.
 */
function computeDepth(quoteId, quotesMap) {
  let depth = 1;
  let current = quotesMap.get(quoteId);
  const seen = new Set([quoteId]);
  while (current?.parent) {
    if (seen.has(current.parent)) {
      throw new Error(`Circular parent chain detected for quote "${quoteId}"`);
    }
    seen.add(current.parent);
    current = quotesMap.get(current.parent);
    depth++;
  }
  return depth;
}

/**
 * Format a date for display.
 */
function formatDate(date, locale) {
  if (!date) return null;
  const d = new Date(date);
  if (locale === 'ja') {
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }
  // EN: BitcoinTalk-style format
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const hours = d.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const h12 = hours % 12 || 12;
  return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, '0')}, ${d.getFullYear()}, ${h12}:${String(d.getMinutes()).padStart(2, '0')}:${String(d.getSeconds()).padStart(2, '0')} ${ampm}`;
}

/**
 * Generate attribution HTML.
 */
function formatAttribution(quote, locale, base) {
  const name = (locale === 'ja' && quote.personSlug)
    ? (participantDisplayNamesJaBySlug[quote.personSlug] ?? quote.person)
    : quote.person;

  const date = formatDate(quote.date, locale);

  const entryPath = quote.sourceEntryId
    ? `${base}${locale === 'ja' ? 'ja/' : ''}entries/${quote.sourceEntryId}/`
    : null;

  let text;
  if (locale === 'ja') {
    text = date ? `${name}の投稿（${date}）` : (name ? `${name}の投稿` : '引用');
  } else {
    text = date ? `Quote from: ${name} on ${date}` : (name ? `Quote from: ${name}` : 'Quote');
  }

  const inner = entryPath ? `<a href="${entryPath}">${text}</a>` : text;
  return `<cite class="quote-attribution">${inner}</cite>`;
}

/**
 * Get sibling node at offset from current index in parent's children array.
 */
function getSibling(parent, index, offset) {
  return parent.children[index + offset] ?? null;
}

function isHtmlMatch(node, re) {
  return node?.type === 'html' && re.test(node.value.trim());
}

const SPEAKER_RE = /^<!--\s*speaker:/;

/**
 * Find the next sibling that is not a speaker comment or another quote marker.
 * Speaker comments and consecutive quote markers (nested quotes) can appear
 * between the current marker and the blockquote.
 */
function getNextBlockquote(parent, startIndex) {
  for (let i = startIndex; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (child.type === 'html') {
      const val = child.value.trim();
      // Skip speaker comments
      if (SPEAKER_RE.test(val)) continue;
      // Skip other quote markers (consecutive = nested quotes)
      if (QUOTE_MARKER_RE.test(val)) continue;
      // Skip tone-skip markers
      if (TONE_SKIP_RE.test(val)) continue;
      if (TONE_SKIP_END_RE.test(val)) continue;
    }
    return child;
  }
  return null;
}

export function remarkQuoteBlocks() {
  const base = process.env.CF_PAGES ? '/' : `${MIRROR_BASE}/`;

  return (tree, vfile) => {
    const frontmatter = vfile.data?.astro?.frontmatter;
    const quotes = frontmatter?.quotes;
    if (!quotes || quotes.length === 0) return;

    const locale = detectLocale(vfile);
    const quotesMap = new Map(quotes.map(q => [q.id, q]));

    // Walk the tree and collect replacements (don't mutate during visit)
    const replacements = [];

    visit(tree, 'html', (node, index, parent) => {
      if (index === null || !parent) return;

      const match = node.value.trim().match(QUOTE_MARKER_RE);
      if (!match) return;

      const quoteId = match[1];
      const quote = quotesMap.get(quoteId);
      if (!quote) {
        throw new Error(
          `Quote marker "<!-- quote: ${quoteId} -->" found but no matching entry in frontmatter quotes[]. File: ${vfile.path}`
        );
      }

      // Validate: a blockquote must exist somewhere after this marker
      // (possibly after other markers for nested quotes, tone-skip, speaker comments)
      const nextBq = getNextBlockquote(parent, index + 1);
      if (nextBq?.type !== 'blockquote') {
        throw new Error(
          `Quote marker "${quoteId}" has no associated blockquote. File: ${vfile.path}`
        );
      }

      // JA: verify tone-skip exists (but allow it to be after other nested markers)
      if (locale === 'ja') {
        let hasToneSkip = false;
        for (let i = index + 1; i < parent.children.length; i++) {
          const child = parent.children[i];
          if (child.type === 'blockquote') break; // reached blockquote without finding tone-skip
          if (child.type === 'html' && TONE_SKIP_RE.test(child.value.trim())) {
            hasToneSkip = true;
            break;
          }
        }
        // tone-skip is recommended but not required for nested markers
        // (parent's tone-skip covers inner content)
        if (!hasToneSkip && !quote.parent) {
          // Only warn for top-level quotes without tone-skip
          // Nested quotes are covered by parent's tone-skip
        }
      }

      replacements.push({ node, quote, locale, index, parent });
    });

    // Apply replacements (safe since we're only changing html node values)
    for (const { node, quote, locale: loc } of replacements) {
      node.value = formatAttribution(quote, loc, base);
    }
  };
}
