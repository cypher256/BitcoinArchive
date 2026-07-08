// Single source of truth for which entry types treat `frontmatter.date` as a
// verifiable historical fact vs an editorial placement anchor (used only by
// the entry-detail page, EntryMeta.astro, to pick which date-field pair to
// show), and for resolving which date value + label an entry card shows on
// list surfaces. See
// NovelBitCoin src/archive/todo/20260701_日付メタデータとソートUI_体系再設計.md
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

// Resolve which date value + label an entry card shows. `sortKey` is the
// list's active sort axis; every list surface now starts already coupled to
// "created" (the registered/登録日 axis — see the plan doc's "always one of
// the 3 buttons" decision), so every card, regardless of type, shows the
// same axis until the reader picks a different one. Omitting sortKey falls
// back to that same "created" default for callers with no sort UI.
export function resolveDateAxis(
  dates: DateAxisDates,
  sortKey: 'date' | 'created' | 'updated' = 'created',
): DateAxisResult {
  const axis: DateAxisKey = sortKey === 'date' ? 'event' : sortKey === 'updated' ? 'updated' : 'created';
  if (axis === 'created') return { iso: dates.createdAtIso ?? dates.dateIso, labelKey: 'added' };
  if (axis === 'updated') return { iso: dates.updatedAtIso ?? dates.dateIso, labelKey: 'updated' };
  return { iso: dates.dateIso, labelKey: 'event' };
}
