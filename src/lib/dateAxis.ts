// Single source of truth for which entry types treat `frontmatter.date` as a
// verifiable historical fact vs an editorial placement anchor, and which date
// axis (event / created / updated) a card defaults to before a reader picks a
// sort. See NovelBitCoin src/archive/todo/20260701_日付メタデータとソートUI_体系再設計.md
// for the full reasoning. No Astro dependency — safe to import from both
// server components (.astro) and the client bundle (src/scripts/*.ts).

const EDITORIAL_PLACEMENT_TYPES = new Set(['analysis', 'design']);

// analysis/design: frontmatter.date is a curated historical placement chosen
// by the editor (e.g. a design entry about the genesis block is dated
// 2009-01-03, not the day the write-up was authored) — not a fact about the
// entry itself. Every other type: frontmatter.date is the real date of the
// historical artifact the entry reproduces.
export function isEditorialPlacement(entryType: string | undefined): boolean {
  return !!entryType && EDITORIAL_PLACEMENT_TYPES.has(entryType);
}

export type DateAxisKey = 'event' | 'created' | 'updated';

// The axis a card shows before the reader has touched sort (and on pages
// with no sort UI at all): editorial-placement types default to the
// "updated" axis (their frontmatter.date isn't the meaningful anchor);
// every other type defaults to "event".
export function defaultDateAxis(entryType: string | undefined): DateAxisKey {
  return isEditorialPlacement(entryType) ? 'updated' : 'event';
}

// entry.<labelKey> is always the right i18n lookup for the label — the three
// DateAxisKey values ('event' | 'created' | 'updated') were picked to match
// entry.event / entry.added / entry.updated 1:1, except 'created' maps to
// 'added' (the reader-facing word; entry.created is reserved for the
// analysis-detail "authored" meta line, a different concept — see plan doc).
export type DateAxisLabelKey = 'event' | 'added' | 'updated';

export function dateAxisLabelKey(axis: DateAxisKey): DateAxisLabelKey {
  return axis === 'created' ? 'added' : axis;
}

export interface DateAxisDates {
  dateIso: string;
  createdAtIso?: string;
  updatedAtIso?: string;
}

export interface DateAxisResult {
  iso: string;
  labelKey: DateAxisLabelKey;
}

// Resolve which date value + label an entry card shows. `sortKey`, when
// given, is the reader's active sort axis on a page that offers sort
// controls; omit it to get the type-meaningful default.
export function resolveDateAxis(
  entryType: string | undefined,
  dates: DateAxisDates,
  sortKey?: 'date' | 'created' | 'updated',
): DateAxisResult {
  const axis: DateAxisKey =
    sortKey === 'created' ? 'created' :
    sortKey === 'updated' ? 'updated' :
    sortKey === 'date' ? 'event' :
    defaultDateAxis(entryType);
  if (axis === 'created') return { iso: dates.createdAtIso ?? dates.dateIso, labelKey: 'added' };
  if (axis === 'updated') return { iso: dates.updatedAtIso ?? dates.dateIso, labelKey: 'updated' };
  return { iso: dates.dateIso, labelKey: 'event' };
}
