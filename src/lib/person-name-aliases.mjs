/**
 * person-name-aliases.mjs — Canonical person-name resolution.
 *
 * Shared by scripts/check-quotes.mjs (validator: decides whether a bare
 * `<!-- speaker: NAME -->` marker legitimately continues an
 * already-attributed `<!-- quote: qN -->` chain) and
 * remark-quote-blocks.mjs (renderer: needs the same answer to decide
 * whether to render a continuation speaker tag). Kept in one file so
 * the two never disagree on what counts as "the same person".
 *
 * The frontmatter `quotes[].person` sometimes carries an email handle
 * (e.g. "mmalmi@cc.hut.fi") or a parenthetical suffix (e.g. "Ray
 * Dillinger (Bear)") while body `<!-- speaker: ... -->` markers use the
 * plain display name. Both must canonicalize to the same string.
 */

export const NAME_ALIAS_GROUPS = [
  ['Martti Malmi', 'mmalmi@cc.hut.fi', 'sirius-m', 'Sirius'],
  ['Satoshi Nakamoto', 'Satoshi', 'satoshi'],
  ['Hal Finney', 'Hal'],
  ['Ray Dillinger', 'Ray Dillinger (Bear)', 'Bear'],
  ['Jeff Garzik', 'jgarzik'],
  ['Gavin Andresen', 'gavinandresen'],
  ['James A. Donald', 'James Donald'],
  ['Liberty Standard', 'NewLibertyStandard'],
  ['Dustin Trammell', 'Dustin D. Trammell'],
];

const NAME_ALIAS_MAP = new Map();
for (const group of NAME_ALIAS_GROUPS) {
  const canonical = group[0];
  for (const alias of group) NAME_ALIAS_MAP.set(alias, canonical);
}

export function canonicalizePersonName(s) {
  const stripped = String(s).replace(/\s*\([^)]*\)\s*$/, '').trim();
  return NAME_ALIAS_MAP.get(stripped) || NAME_ALIAS_MAP.get(s) || stripped;
}

/**
 * Logical-source key of a quotes[] entry: the same canonical person
 * quoting the same sourceEntryId is ONE source message, even when the
 * frontmatter carries several qN entries for it (the 0522 bulk
 * migration minted a fresh qN per blockquote instead of reusing one
 * per source — ~70 entry pairs in the corpus). Renderer and validator
 * both group by this key so "how many sources does this person have
 * in this file" means distinct messages, not distinct qN ids.
 * Without a sourceEntryId each qN stands alone (no safe way to merge).
 */
export function quoteSourceKey(q) {
  if (!q) return null;
  const person = q.person ? canonicalizePersonName(q.person) : '';
  return q.sourceEntryId ? `${person}|${q.sourceEntryId}` : `id:${q.id}`;
}
