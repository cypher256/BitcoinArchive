// Shared date-value resolution for the EntryDates component and the
// runtime-injected Algolia cards. No Astro dependency — safe to import from
// server components (.astro) and the client bundle (src/scripts/*.ts).

// Types whose frontmatter `date` is an editor-chosen placement date, not
// a documented historical fact: design entries all share 2009-01-03 (the
// genesis-block date); analysis entries use a date chosen to match the
// history period they cover, not their own authoring date; currency
// entries all share their publication-batch date (e.g. every 2026-07-27
// launch-day entry), not the currency's own founding/fork date.
//
// The default axis for these is "created" (registered), not "updated": a
// reader browsing "what's new" wants entries that stay put once shipped,
// and "updated" moves on every minor copyedit -- an unstable axis for a
// default (see BitcoinArchivePrivate/todo/20260830_一覧ページの既定ソート_タイプ別化.md
// for the correction from an earlier "updated" default). "created" is also
// what this default replaces: every list surface used it uniformly before
// this per-type split, so these three types keep exactly the order readers
// already saw.
//
// `biography` was originally left unresolved (treated as neither bucket)
// on the theory that its `date` mixes birth/first-appearance/event dates
// with no single clean axis. A full-corpus check (2026-08-30, all 51
// entries) found no such mixing: every `date` is a unique historical
// event date (Satoshi's = the whitepaper's publish date, Craig Wright's =
// the day he claimed to be Satoshi, etc.) -- never a shared placeholder
// like design/currency's batch dates, and titles' birth years (`(1964–)`)
// are a separate display field the `date` never echoes. Whether a given
// entry's date reads as "first appearance" or "a later notable event" is
// sometimes ambiguous, but both are still a documented fact, not an
// editor's placement choice -- so biography joins the historical-fact
// bucket below instead of staying a third, unresolved case.
const EDITORIAL_PLACEMENT_TYPES = new Set(['analysis', 'design', 'currency']);

export type SortAxis = 'date' | 'created';

/** Default sort-button `data-sort` value for a page whose entries are all
 *  (or predominantly, via dominantType() below) one `type`. */
export function defaultSortAxis(type: string | undefined): SortAxis {
  return type && EDITORIAL_PLACEMENT_TYPES.has(type) ? 'created' : 'date';
}

/** The plurality `type` among a filtered entry list — used by /sources,
 *  /tags, /keywords (which mix types within one page, unlike /types/{type})
 *  to pick a single default sort axis via defaultSortAxis() above. Returns
 *  undefined only when `types` is empty. */
export function dominantType(types: string[]): string | undefined {
  const counts = new Map<string, number>();
  for (const t of types) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
}

/** Descending-date comparator for Array.prototype.sort, resolving each
 *  entry's sort key from `axis`: the git createdAt when axis is 'created'
 *  (falling back to the frontmatter event date when the git record is
 *  missing), or the frontmatter event date itself. `createdAtOf` looks up
 *  a single entry id's createdAt from that page's own (language-scoped)
 *  git-dates.json slice -- callers pass e.g. `(id) => gitDateMap[id]?.en?.createdAt`.
 *  Centralizes a pattern previously duplicated across /types, /sources,
 *  /tags, /keywords (EN+JA) — see
 *  BitcoinArchivePrivate/todo/20260830_一覧ページの既定ソート_タイプ別化.md. */
export function byDateAxisDesc<T extends { id: string; data: { date: Date } }>(
  axis: SortAxis,
  createdAtOf: (id: string) => string | undefined,
): (a: T, b: T) => number {
  const key = (e: T): string =>
    axis === 'created' ? (createdAtOf(e.id) ?? e.data.date.toISOString()) : e.data.date.toISOString();
  return (a, b) => key(b).localeCompare(key(a));
}

export interface DateAxisDates {
  dateIso: string;
  createdAtIso?: string;
  updatedAtIso?: string;
}

export interface DateValues {
  eventIso: string;
  createdAtIso: string;
  updatedAtIso: string;
}

// Keep the fallback for missing git metadata identical on the /entries
// server-rendered cards and Algolia result cards. The three fields are always
// present in the UI, while incomplete records still have a useful date.
export function resolveDateValues(dates: DateAxisDates): DateValues {
  return {
    eventIso: dates.dateIso,
    createdAtIso: dates.createdAtIso || dates.dateIso,
    updatedAtIso: dates.updatedAtIso || dates.dateIso,
  };
}
