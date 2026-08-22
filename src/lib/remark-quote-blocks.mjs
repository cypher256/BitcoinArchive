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
import { avatarTag } from '../data/avatars.ts';
import { MIRROR_BASE } from '../../site-config.mjs';
import { canonicalizePersonName, quoteSourceKey } from './person-name-aliases.mjs';

const QUOTE_MARKER_RE = /^<!--\s*quote:\s*(\w+)\s*-->$/;
const TONE_SKIP_RE = /^<!--\s*tone-skip\s*-->$/;
const TONE_SKIP_END_RE = /^<!--\s*\/tone-skip\s*-->$/;
const AUDIT_QUOTE_SKIP_RE = /^<!--\s*audit:quote-skip\s*-->$/;
const SPEAKER_MARKER_RE = /^<!--\s*speaker:\s*(.+?)\s*-->$/;

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
 * Pick the JA noun that fits the source's medium, based on the
 * `sourceEntryId` path prefix. Returns null when the medium cannot
 * be determined (no sourceEntryId), so the caller can fall back to
 * a neutral form rather than guessing `投稿`. Mapping:
 *   correspondence/*   → メール  (1-on-1 private email)
 *   forum/github/*     → コメント (PR / issue comment)
 *   bip/*              → 提案    (BIP proposal; reserved for future use)
 *   web-document/      → ウェブ文書 (a self-published web document)
 *   default            → 投稿    (mailing-list post / BitcoinTalk thread
 *                                  reply / P2P Foundation comment etc.)
 * Default is `投稿` only when we *know* the source is a public posting
 * medium; missing sourceEntryId returns null so the chip stays generic.
 */
function getJaSourceTypeLabel(sourceEntryId) {
  if (!sourceEntryId) return null;
  if (sourceEntryId.startsWith('correspondence/')) return 'メール';
  if (sourceEntryId.startsWith('forum/github/')) return 'コメント';
  if (sourceEntryId.startsWith('bip/')) return '提案';
  if (sourceEntryId.startsWith('web-document/')) return 'ウェブ文書';
  return '投稿';
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
    const kind = getJaSourceTypeLabel(quote.sourceEntryId);
    if (kind) {
      text = date ? `${name}の${kind}（${date}）` : (name ? `${name}の${kind}` : '引用');
    } else {
      // sourceEntryId 不在: 種別を断定せず中立形にフォールバック
      text = date ? `${name}からの引用（${date}）` : (name ? `${name}からの引用` : '引用');
    }
  } else {
    text = date ? `Quote from: ${name} on ${date}` : (name ? `Quote from: ${name}` : 'Quote');
  }

  // Avatar (real photo or auto-generated) so the speaker is
  // identifiable at a glance. Quotes without a personSlug (rare) get no
  // avatar. Speaker accent is still carried by the associated
  // <blockquote> via data-speaker (set in the visitor below), matching
  // the existing blockquote[data-speaker] convention. The canonical EN
  // person name drives the badge initials so they match the circular
  // PNG slots (quote.person may be an email handle — canonicalization
  // resolves it to the display name).
  const avatar = quote.personSlug
    ? avatarTag(quote.personSlug, 'quote-avatar', base, canonicalizePersonName(quote.person))
    : '';
  // The avatar links to the person's participant page while the caption
  // text keeps linking to the quoted source entry — two adjacent targets,
  // same split as a code-forge comment header (avatar → profile, text →
  // the thing being cited). aria-label carries the name because the
  // avatar itself is alt=""/aria-hidden.
  const avatarLinked = avatar
    ? `<a class="avatar-link" href="${participantPath(quote.personSlug, locale, base)}" aria-label="${attrEscape(name)}">${avatar}</a>`
    : avatar;
  const inner = entryPath ? `<a href="${entryPath}">${text}</a>` : text;
  return `<cite class="quote-attribution">${avatarLinked}${inner}</cite>`;
}

/** Participant-page path for a personSlug, locale-aware. */
function participantPath(personSlug, locale, base) {
  return `${base}${locale === 'ja' ? 'ja/' : ''}participants/${personSlug}/`;
}

/**
 * Minimal attribute escaping for aria-label values. Only `"` and `<`
 * are escaped: person names may legitimately contain pre-encoded HTML
 * entities (e.g. `D&#1161;ataWraith`), so escaping bare `&` would
 * double-encode them.
 */
function attrEscape(s) {
  return String(s ?? '').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}

/**
 * Lightweight tag for a CONTINUATION quote: a bare `<!-- speaker: NAME -->`
 * that reuses the same source already introduced by an earlier
 * `<!-- quote: qN -->` in this file (STYLE_GUIDE.md "Do not repeat
 * <!-- quote: qN --> for the same source in one file"). That rule
 * correctly stops the same citation (avatar + link + date + medium) from
 * appearing N times, but as a side effect left every continuation
 * blockquote with no visible attribution at all for anyone other than
 * Satoshi (whose blockquotes alone get a border accent via data-speaker).
 * On a long point-by-point reply this reads as "whose words are these"
 * once the reader has scrolled past the first blockquote.
 *
 * This renders just an avatar + bare name — no link, no date, no medium
 * wording — so it cannot be mistaken for a second, distinct citation of
 * the same source; it only answers "who is still talking".
 */
function formatSpeakerTag(quote, locale, base) {
  const name = (locale === 'ja' && quote.personSlug)
    ? (participantDisplayNamesJaBySlug[quote.personSlug] ?? quote.person)
    : quote.person;
  const avatar = quote.personSlug
    ? avatarTag(quote.personSlug, 'quote-avatar', base, canonicalizePersonName(quote.person))
    : '';
  // The tag stays visually a bare avatar + name, but both now link to
  // the participant page (there is no competing link in this slot, and
  // the participant page is NOT the quoted source, so this cannot read
  // as a second citation). Styling keeps the muted tag look; see
  // .quote-speaker-tag > a in global.css.
  if (quote.personSlug) {
    return `<cite class="quote-speaker-tag"><a href="${participantPath(quote.personSlug, locale, base)}">${avatar}${name}</a></cite>`;
  }
  return `<cite class="quote-speaker-tag">${avatar}${name}</cite>`;
}

/**
 * Map personSlug → the short data-speaker slug CSS/remark-speaker-blockquote
 * key off (`blockquote[data-speaker="satoshi"]`); every other slug passes
 * through unchanged so a future per-person CSS rule can target it directly.
 */
function dataSpeakerSlugFor(personSlug) {
  return personSlug === 'satoshi-nakamoto' ? 'satoshi' : personSlug;
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

/**
 * Like getNextBlockquote, but for a bare `<!-- speaker: NAME -->` marker:
 * distinguishes "reaches a blockquote with no <!-- quote: qN --> in
 * between" (continuation candidate) from "a quote marker sits in
 * between" (already chip-led — the primary marker pass above handles
 * it) from "next sibling isn't a blockquote at all" (this speaker
 * marker isn't introducing a quote here).
 *
 * `<!-- audit:quote-skip -->` marks a quote with no sourceEntryId to
 * link to (deleted source / external quote) — it can never get a full
 * chip — but the speaker's NAME is still known from the marker itself.
 * Reported separately (auditSkip: true) so the caller can still render
 * the lightweight name-only tag instead of leaving the blockquote with
 * no visible attribution at all (see the auditSkip branch below).
 */
function findContinuationTarget(parent, startIndex) {
  let auditSkip = false;
  for (let i = startIndex; i < parent.children.length; i++) {
    const child = parent.children[i];
    if (child.type === 'html') {
      const val = child.value.trim();
      if (SPEAKER_RE.test(val)) continue;
      if (QUOTE_MARKER_RE.test(val)) return { chipLed: true };
      if (TONE_SKIP_RE.test(val)) continue;
      if (TONE_SKIP_END_RE.test(val)) continue;
      if (AUDIT_QUOTE_SKIP_RE.test(val)) { auditSkip = true; continue; }
      return null;
    }
    return child.type === 'blockquote' ? { blockquote: child, auditSkip } : null;
  }
  return null;
}

export function remarkQuoteBlocks() {
  const base = process.env.CF_PAGES ? '/' : `${MIRROR_BASE}/`;

  return (tree, vfile) => {
    const frontmatter = vfile.data?.astro?.frontmatter;
    const quotes = frontmatter?.quotes ?? [];
    const rawHasMarker = typeof vfile.value === 'string'
      && (vfile.value.includes('<!-- quote:') || vfile.value.includes('<!-- audit:quote-skip'));
    if (quotes.length === 0 && !rawHasMarker) return;

    const locale = detectLocale(vfile);
    const quotesMap = new Map(quotes.map(q => [q.id, q]));

    // How many DISTINCT logical sources (person + sourceEntryId, see
    // quoteSourceKey) each canonical person has in this file, and (when
    // exactly one) a representative quote object for it. Counting distinct
    // sources — not qN ids — matters because the 0522 migration minted a
    // separate qN per blockquote even when quoting one message repeatedly;
    // those duplicates are all the SAME source. A bare continuation speaker
    // is only unambiguous when its person has a single source in this file
    // (mirrors check-quotes.mjs's `speaker-named-no-quote-marker` detector).
    const personSources = new Map(); // canon person → Set<sourceKey>
    const soleQuoteByPerson = new Map(); // canon person → first quote of their sole source
    for (const q of quotes) {
      if (!q?.person) continue;
      const canon = canonicalizePersonName(q.person);
      let set = personSources.get(canon);
      if (!set) personSources.set(canon, (set = new Set()));
      set.add(quoteSourceKey(q));
      if (!soleQuoteByPerson.has(canon)) soleQuoteByPerson.set(canon, q);
    }
    const personSourceCount = (canon) => personSources.get(canon)?.size ?? 0;

    // canonical person name → personSlug, from this file's own frontmatter
    // `participants[]`. Used only for the audit:quote-skip name tag below —
    // it needs an avatar/slug for a KNOWN archive figure (Satoshi, Malmi,
    // etc.) but must not fabricate one for an external, untracked speaker
    // (e.g. a one-off forum poster) who simply isn't in participants[].
    const participantSlugByName = new Map();
    for (const p of frontmatter?.participants ?? []) {
      if (p?.name && p?.slug) participantSlugByName.set(canonicalizePersonName(p.name), p.slug);
    }

    // Walk the tree and collect replacements (don't mutate during visit)
    const replacements = [];
    const speakerTagReplacements = [];
    const demotedMarkerReplacements = [];
    const auditSkipTagReplacements = [];
    // Canonical persons already introduced by a <!-- quote: qN --> marker
    // seen so far, and logical sources already chipped, in document order
    // (unist-util-visit walks root children in order, so this is safe to
    // build incrementally in one pass).
    const attributedPersons = new Set();
    const chippedSourceKeys = new Set();

    visit(tree, 'html', (node, index, parent) => {
      if (index === null || !parent) return;

      const speakerMatch = node.value.trim().match(SPEAKER_MARKER_RE);
      if (speakerMatch && parent.type === 'root') {
        const speakerName = speakerMatch[1];
        if (speakerName.toLowerCase() === 'reset') return;
        const canon = canonicalizePersonName(speakerName);
        const target = findContinuationTarget(parent, index + 1);
        if (!target || target.chipLed) return;
        if (target.auditSkip) {
          // No sourceEntryId exists for this quote (deleted/external
          // source) so it can never get a full chip — but the speaker's
          // name IS known from the marker. Render the same lightweight
          // name-only tag used for chip continuations (avatar + bare
          // name, no link/date) instead of leaving the border-color-only
          // signal as the reader's only clue (2026-07-17: a reader
          // couldn't tell whose words were in one of these blockquotes
          // from the rendered page alone).
          auditSkipTagReplacements.push({
            node, index, parent, canon,
            quote: { person: speakerName, personSlug: participantSlugByName.get(canon) ?? null },
            blockquote: target.blockquote,
          });
          return;
        }
        if (!attributedPersons.has(canon) || personSourceCount(canon) !== 1) return;
        speakerTagReplacements.push({ node, index, parent, canon, quote: soleQuoteByPerson.get(canon), blockquote: target.blockquote });
        return;
      }

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

      if (quote.person) {
        const canon = canonicalizePersonName(quote.person);
        const sourceKey = quoteSourceKey(quote);
        // Repeat marker for a source already chipped in this file: when the
        // person has a SINGLE logical source here, a second full chip is
        // pure repetition (same link, same date) — demote it to the
        // lightweight speaker tag. This is the renderer-level unification
        // for the ~70 entry pairs where the 0522 migration minted a
        // separate qN per blockquote of one message: those qN all share a
        // sourceKey, so every marker after the first renders as a tag.
        // When the person has MULTIPLE sources, repeated chips stay — the
        // guide's disambiguation rule accepts them as the cost of telling
        // the sources apart, and a bare name tag could not do that.
        if (chippedSourceKeys.has(sourceKey) && personSources.get(canon)?.size === 1) {
          demotedMarkerReplacements.push({ node, index, parent, canon, quote, blockquote: nextBq });
          return;
        }
        attributedPersons.add(canon);
        chippedSourceKeys.add(sourceKey);
      }

      replacements.push({ node, quote, locale, index, parent, blockquote: nextBq });
    });

    // A blockquote that a <!-- quote: qN --> replacement will chip is NOT a
    // continuation — some files order the markers quote-first,
    // speaker-second (`<!-- quote: q1 -->` then `<!-- speaker: NAME -->`
    // then the blockquote), and the speaker marker's forward walk alone
    // cannot see the chip behind it. Without this filter the chip and the
    // tag stack on the same blockquote (James Donald double-attribution,
    // 2026-07-08). Also dedupe: one tag per blockquote.
    const chipLedBlockquotes = new Set(replacements.map(r => r.blockquote));
    const taggedBlockquotes = new Set();

    // Canonical speaker of every root-level blockquote, from the nearest
    // marker (speaker or chip) directly above it. Used by the
    // adjacent-same-speaker check below.
    const blockquoteSpeaker = new Map();
    {
      let pendingSpeaker = null;
      for (const child of tree.children) {
        if (child.type === 'html') {
          const val = child.value.trim();
          const sm = val.match(SPEAKER_MARKER_RE);
          if (sm && sm[1].toLowerCase() !== 'reset') {
            pendingSpeaker = canonicalizePersonName(sm[1]);
          } else {
            const qm = val.match(QUOTE_MARKER_RE);
            const q = qm && quotesMap.get(qm[1]);
            if (q?.person) pendingSpeaker = canonicalizePersonName(q.person);
          }
          continue; // tone-skip / audit markers are transparent
        }
        if (child.type === 'blockquote') {
          if (pendingSpeaker) blockquoteSpeaker.set(child, pendingSpeaker);
        }
        pendingSpeaker = null; // consumed by the blockquote, or broken by prose
      }
    }

    // True when the nearest preceding root sibling that isn't an HTML
    // marker is a blockquote by the same speaker — i.e. this quote sits
    // DIRECTLY under the previous one with no prose between them. The
    // visual adjacency already carries the continuity, so repeating the
    // name tag on every block of an unbroken run is noise; the tag is
    // only for re-identifying the speaker after intervening prose.
    function directlyFollowsSameSpeaker(parent, index, canon) {
      for (let i = index - 1; i >= 0; i--) {
        const child = parent.children[i];
        if (child.type === 'html') continue;
        return child.type === 'blockquote' && blockquoteSpeaker.get(child) === canon;
      }
      return false;
    }

    // Shared tail for both tag-producing loops below: render the lightweight
    // tag unless the blockquote is already chip-led / tagged or sits
    // directly under a same-speaker blockquote (adjacency suppression), and
    // carry the speaker accent onto the blockquote either way. Setting
    // data-speaker here (not via remarkSpeakerBlockquote) matters because
    // that later plugin re-matches the marker's own text — which this loop
    // may have replaced or cleared. `clearOnSuppress` differs by marker
    // kind: a suppressed BARE SPEAKER marker keeps its comment text (an
    // HTML comment renders invisibly, and untouched markers stay legible
    // to the later plugins), while a suppressed DEMOTED QUOTE marker is
    // cleared so no `<!-- quote: qN -->` survives into the output of a
    // plugin whose contract is to consume every quote marker.
    const applySpeakerTag = ({ node, index, parent, canon, quote, blockquote }, clearOnSuppress) => {
      const suppressed =
        chipLedBlockquotes.has(blockquote) ||
        taggedBlockquotes.has(blockquote) ||
        directlyFollowsSameSpeaker(parent, index, canon);
      if (suppressed) {
        if (clearOnSuppress) node.value = '';
      } else {
        taggedBlockquotes.add(blockquote);
        node.value = formatSpeakerTag(quote, locale, base);
      }
      if (blockquote && quote.personSlug) {
        blockquote.data = blockquote.data || {};
        blockquote.data.hProperties = blockquote.data.hProperties || {};
        if (!blockquote.data.hProperties['data-speaker']) {
          blockquote.data.hProperties['data-speaker'] = dataSpeakerSlugFor(quote.personSlug);
        }
      }
    };

    // Demoted repeat markers (same source already chipped) render as tags.
    // Runs before the bare-speaker loop so its blockquotes are registered
    // in taggedBlockquotes first.
    for (const item of demotedMarkerReplacements) applySpeakerTag(item, true);

    // Bare-speaker continuation markers (see formatSpeakerTag).
    for (const item of speakerTagReplacements) applySpeakerTag(item, false);

    // audit:quote-skip name tags (see the auditSkip branch above). The
    // marker's own text is the only "chip-like" thing this quote will
    // ever get, so clear it on suppression same as a demoted marker.
    for (const item of auditSkipTagReplacements) applySpeakerTag(item, true);

    // Apply replacements (safe since we're only changing html node values)
    for (const { node, quote, locale: loc, blockquote } of replacements) {
      node.value = formatAttribution(quote, loc, base);
      // Tag the associated blockquote with data-speaker so CSS can apply
      // the speaker's accent color to the left border. Matches the
      // existing data-speaker convention used by remark-speaker-blockquote.
      // Today only satoshi-nakamoto has a styling rule; other speakers
      // keep their full personSlug so a future CSS rule can target them
      // directly (see dataSpeakerSlugFor).
      if (blockquote && quote.personSlug) {
        blockquote.data = blockquote.data || {};
        blockquote.data.hProperties = blockquote.data.hProperties || {};
        if (!blockquote.data.hProperties['data-speaker']) {
          blockquote.data.hProperties['data-speaker'] = dataSpeakerSlugFor(quote.personSlug);
        }
      }
    }
  };
}
