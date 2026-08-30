// Shared data builder for the /sources/{source} list-page minimap — a
// fixed 0-100% strip with one dot per entry (thread members individually,
// not collapsed), colored by author identity. Server-side only (no Astro
// dependency, like dateAxis.ts), so both the EN and JA page share this
// one implementation instead of duplicating the pct/year-mark math.

export interface MinimapPoint {
  /** 0-100, position along the strip. */
  pct: number;
  /** CSS color value (a token reference or a computed avatar color). */
  color: string;
  href: string;
  /** Tooltip text: date + title. */
  label: string;
  /** Lowercased haystack for the page's quick-filter input, so a typed
   *  query dims non-matching dots the same way it hides non-matching
   *  cards (list-minimap.ts reads this against #filter-input). */
  filterText: string;
}

export interface MinimapYearMark {
  year: number;
  pct: number;
}

export interface MinimapData {
  points: MinimapPoint[];
  years: MinimapYearMark[];
  /** Minimum pixel width for the strip, so year labels never collide on a
   *  narrow viewport (44px/label is a readable "YYYY" width). CSS applies
   *  this as `width: max(100%, <n>px)` inside an overflow-x:auto wrapper,
   *  so a source with few years (e.g. bitcoin-list, 2 years) stays full
   *  width with no scroll, while one spanning many years (e.g.
   *  bitcointalk, 17 years) scrolls horizontally on mobile instead of
   *  mashing its year row into unreadable overlapping text (2026-08-30
   *  visual check on a real phone width). */
  minWidthPx: number;
}

interface MinimapEntry {
  id: string;
  data: { date: Date };
}

/** Builds the dot positions and year gridline marks for a minimap, from
 *  the entry list an /sources/{source} page already has (pre-collapseThreads,
 *  so thread members each get their own dot). `resolveColor`/`resolveHref`/
 *  `resolveLabel`/`resolveFilterText` stay as caller-supplied callbacks
 *  rather than baked-in logic here, since author-color, thread-link, and
 *  display-name resolution all need `astro:content`-dependent helpers
 *  (findAuthorParticipant, resolveThreadId, translateParticipantName) this
 *  module deliberately doesn't import (same rationale as dateAxis.ts). */
export function buildMinimap<T extends MinimapEntry>(
  entries: T[],
  resolveColor: (entry: T) => string,
  resolveHref: (entry: T) => string,
  resolveLabel: (entry: T) => string,
  resolveFilterText: (entry: T) => string,
): MinimapData {
  if (entries.length === 0) return { points: [], years: [], minWidthPx: 0 };
  const times = entries.map((e) => e.data.date.getTime());
  const minTime = Math.min(...times);
  const maxTime = Math.max(...times);
  const span = Math.max(1, maxTime - minTime);
  const pctOf = (t: number) => ((t - minTime) / span) * 100;

  const points = entries.map((entry) => ({
    pct: pctOf(entry.data.date.getTime()),
    color: resolveColor(entry),
    href: resolveHref(entry),
    label: resolveLabel(entry),
    filterText: resolveFilterText(entry).toLowerCase(),
  }));

  // minTime's own calendar year never has a Jan-1 boundary inside
  // [minTime, maxTime] (Jan 1 00:00 UTC of that year is always <= minTime,
  // strictly earlier unless minTime is exactly that instant), so the
  // loop below only ever finds boundaries for the years AFTER startYear.
  // Seed startYear at pct 0 explicitly, so the leading segment (from the
  // strip's very start up to the first real Jan-1 boundary) is always
  // labeled instead of left blank -- and so a source whose entries never
  // cross any Jan-1 boundary at all (everything within one calendar
  // year) still gets exactly one label instead of zero.
  const startYear = new Date(minTime).getUTCFullYear();
  const endYear = new Date(maxTime).getUTCFullYear();
  const years: MinimapYearMark[] = [{ year: startYear, pct: 0 }];
  for (let y = startYear + 1; y <= endYear; y++) {
    years.push({ year: y, pct: pctOf(Date.UTC(y, 0, 1)) });
  }

  return { points, years, minWidthPx: Math.max(200, years.length * 44) };
}
