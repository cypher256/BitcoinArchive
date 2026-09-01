// Shared prev/next helper for list-filter pages (/sources/, /types/,
// /tags/, /keywords/): given the full set of sibling keys already sorted
// into display order, return the neighbors of one key. Each page type
// builds its own sorted key array (the sort key differs -- a translated
// label for sources/types, the tag/keyword text itself for tags/keywords)
// and calls this once per static path in getStaticPaths.
export function siblingPrevNext<T>(sortedKeys: T[], currentKey: T): { prev: T | null; next: T | null } {
  const idx = sortedKeys.indexOf(currentKey);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? sortedKeys[idx - 1] : null,
    next: idx < sortedKeys.length - 1 ? sortedKeys[idx + 1] : null,
  };
}
