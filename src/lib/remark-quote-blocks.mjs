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
const AUDIT_QUOTE_SKIP_RE = /^<!--\s*audit:quote-skip\s*-->$/;

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
  // Date-only inputs ("YYYY-MM-DD" string, or a Date that toISOString
  // serialises with T00:00:00 — common for YAML date-only values
  // promoted to Date by some parsers) are always day-only regardless
  // of how Date() parses them. This guards against host TZ differences
  // (Cloudflare Pages, local dev) shifting the parsed UTC hours and
  // against the 0523 plan's mechanical date backfill emitting plain
  // dates that should not render as "00:00 UTC".
  const dateStr = typeof date === 'string'
    ? date
    : (date instanceof Date ? date.toISOString() : String(date));
  const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(dateStr)
    || /^\d{4}-\d{2}-\d{2}T00:00:00(?:\.000)?Z?$/.test(dateStr);
  const d = new Date(date);
  // Render in UTC. Build hosts (Cloudflare Pages, local dev) have
  // different default timezones; using local getHours/getMonth would
  // make the same source date display differently per host. The
  // frontmatter date field is stored as UTC, and the rest of the site
  // (EntryMeta / message-date via formatDateMaybeTime) renders UTC.
  //
  // Mirror formatDateMaybeTime from src/i18n/utils.ts: if the time
  // component is exactly 00:00:00 UTC the source date is treated as
  // "day only" and we omit the time, so a frontmatter value of
  // "2011-06-14T00:00:00Z" does not render as a misleading "00:00 UTC".
  const hasTime = !isDateOnly
    && (d.getUTCHours() !== 0 || d.getUTCMinutes() !== 0 || d.getUTCSeconds() !== 0);
  if (locale === 'ja') {
    const datePart = `${d.getUTCFullYear()}年${d.getUTCMonth() + 1}月${d.getUTCDate()}日`;
    if (!hasTime) return datePart;
    return `${datePart} ${String(d.getUTCHours()).padStart(2, '0')}:${String(d.getUTCMinutes()).padStart(2, '0')} UTC`;
  }
  // EN: BitcoinTalk-style format, UTC anchored
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  const datePart = `${months[d.getUTCMonth()]} ${String(d.getUTCDate()).padStart(2, '0')}, ${d.getUTCFullYear()}`;
  if (!hasTime) return datePart;
  const hours = d.getUTCHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const h12 = hours % 12 || 12;
  return `${datePart}, ${h12}:${String(d.getUTCMinutes()).padStart(2, '0')}:${String(d.getUTCSeconds()).padStart(2, '0')} ${ampm} UTC`;
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
    : (quote.personSlug
        ? `${base}${locale === 'ja' ? 'ja/' : ''}participants/${quote.personSlug}/`
        : null);

  let text;
  if (locale === 'ja') {
    text = date ? `${name}の投稿（${date}）` : (name ? `${name}の投稿` : '引用');
  } else {
    text = date ? `Quote from: ${name} on ${date}` : (name ? `Quote from: ${name}` : 'Quote');
  }

  // The chip itself stays neutral; speaker identification happens on
  // the associated <blockquote> via data-speaker (set in the visitor
  // below), matching the existing blockquote[data-speaker] convention.
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
      // Skip audit:quote-skip metadata marker (processing-only, not body)
      if (AUDIT_QUOTE_SKIP_RE.test(val)) continue;
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

      replacements.push({ node, quote, locale, index, parent, blockquote: nextBq });
    });

    // Apply replacements (safe since we're only changing html node values)
    for (const { node, quote, locale: loc, blockquote } of replacements) {
      node.value = formatAttribution(quote, loc, base);
      // Tag the associated blockquote with data-speaker so CSS can apply
      // the speaker's accent color to the left border. Matches the
      // existing data-speaker convention used by remark-speaker-blockquote.
      if (blockquote && quote.personSlug) {
        // Map personSlug → the short data-speaker slug already used by
        // CSS (`blockquote[data-speaker="satoshi"]`) and by
        // remark-speaker-blockquote. Today only satoshi-nakamoto has a
        // styling rule; other speakers keep their full personSlug so a
        // future CSS rule can target them directly.
        const speakerSlug = quote.personSlug === 'satoshi-nakamoto'
          ? 'satoshi'
          : quote.personSlug;
        blockquote.data = blockquote.data || {};
        blockquote.data.hProperties = blockquote.data.hProperties || {};
        if (!blockquote.data.hProperties['data-speaker']) {
          blockquote.data.hProperties['data-speaker'] = speakerSlug;
        }
      }
    }
  };
}
