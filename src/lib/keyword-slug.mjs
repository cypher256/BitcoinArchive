/**
 * keyword-slug.mjs — URL-safe slug for an inline-link keyword.
 *
 * Rules:
 *   - Lowercase ASCII alphanumerics and Unicode letters/numbers (so
 *     Japanese / German / etc. characters survive intact).
 *   - Whitespace and any non-letter/non-digit character becomes "-".
 *   - Consecutive "-" collapse to one.
 *   - Leading / trailing "-" trimmed.
 *
 * Keyword examples:
 *   "Bitcoin Core rebrand"   -> "bitcoin-core-rebrand"
 *   "PR #3408"               -> "pr-3408"
 *   "Wei Dai = Satoshi"      -> "wei-dai-satoshi"
 *   "サトシ・ナカモトは誰か"   -> "サトシ-ナカモトは誰か"
 *
 * Collisions (two distinct keywords mapping to the same slug) are
 * detected at index-generation time and surface as a build-time
 * error — the slug is the URL primary key for keyword pages.
 */
export function slugifyKeyword(keyword) {
  return keyword
    .toLowerCase()
    // Keep Unicode letters / numbers; replace everything else with "-".
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}

export default slugifyKeyword;
