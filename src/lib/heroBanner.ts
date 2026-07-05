/**
 * Deterministic horizontal crop offset into the wide hero banner
 * (public/images/hero-banners/atmosphere.jpg, see
 * scripts/generate-hero-banners.mjs) for a given entry id. Same input
 * always yields the same output — not random, so it stays stable across
 * rebuilds — but different entries land on different-looking glow
 * hotspots along the image instead of every page showing the same crop.
 */
export function heroBannerPosition(entryId: string): number {
  let hash = 0;
  for (let i = 0; i < entryId.length; i++) {
    hash = (hash * 31 + entryId.charCodeAt(i)) >>> 0;
  }
  return hash % 100;
}
