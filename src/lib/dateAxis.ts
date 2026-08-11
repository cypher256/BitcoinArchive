// Shared date-value resolution for the EntryDates component and the
// runtime-injected Algolia cards. No Astro dependency — safe to import from
// server components (.astro) and the client bundle (src/scripts/*.ts).

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
