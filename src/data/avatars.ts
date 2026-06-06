/**
 * avatars.ts — Participant avatar resolution.
 *
 * Two avatar sources, resolved by resolveAvatar():
 *   1. Real photo — registered in `avatarPhotos` below, served from
 *      /images/avatars/people/<slug>.webp (a git-tracked asset).
 *   2. Auto-generated — an initial on a deterministic background colour,
 *      rendered on demand by src/pages/avatars/[slug].png.ts at build
 *      time (NOT git-tracked — it is regenerable from the slug alone).
 *
 * A slug with no `avatarPhotos` entry falls back to the generated
 * avatar. The generated image is deterministic (same slug → same hue
 * and initial), so it never depends on new Date() / Math.random().
 *
 * Real-photo licensing: every avatarPhotos entry must carry a
 * verifiable source URL, an author credit, and a re-distributable
 * licence (Wikimedia Commons CC BY / CC BY-SA / public domain, or an
 * image the subject themselves published). See
 * todo/0606_人物アイコン導入プラン.md for the collection policy.
 */

export interface AvatarPhoto {
  /** Author / rights holder, shown in the credit line (CC BY requires it). */
  credit: string;
  /** Licence name, e.g. "CC BY-SA 4.0" or "Public domain". */
  license: string;
  /** Source page URL the image was obtained from. */
  sourceUrl: string;
  /** Date the image was fetched, YYYY-MM-DD. */
  fetchedAt: string;
}

/**
 * Real photos, keyed by participant slug. Empty until photos are
 * collected (plan phase 3). Any slug absent here uses the generated
 * avatar instead.
 */
export const avatarPhotos: Record<string, AvatarPhoto> = {};

/** True when a git-tracked real photo exists for the slug. */
export function hasAvatarPhoto(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(avatarPhotos, slug);
}

/**
 * Deterministic hue (0–359) from a slug. FNV-1a-style fold over the
 * code units so the same slug always yields the same colour on every
 * build and host. No new Date() / Math.random().
 */
export function avatarHue(slug: string): number {
  let h = 2166136261;
  for (let i = 0; i < slug.length; i++) {
    h ^= slug.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) % 360;
}

/**
 * Background colour for the generated avatar. Saturation and lightness
 * are fixed; only the hue varies by slug. Blue-adjacent hues are not
 * special-cased: the avatar is a filled disc with a white initial, so
 * it never reads as a link (the link-colour rule targets coloured
 * TEXT, not a filled UI shape). The mid lightness keeps white initials
 * legible in both light and dark themes.
 */
export function avatarBackground(slug: string): string {
  // Satoshi's avatar uses a TRANSPARENT background; the fill is applied
  // in CSS (img[src$="satoshi-nakamoto.png"] { background:
  // var(--color-satoshi) }) so it tracks the bubble-outline colour in
  // BOTH themes (light #c2410c orange / dark #fbbf24 amber). A single
  // baked PNG can't follow the theme, but a transparent PNG + CSS fill
  // can. See global.css and src/pages/avatars/[slug].png.ts.
  if (slug === 'satoshi-nakamoto') return 'transparent';
  return `hsl(${avatarHue(slug)}, 42%, 42%)`;
}

/**
 * 1–2 letter initials from a display name. Takes the first letter of
 * the first two whitespace-separated tokens (upper-cased); falls back
 * to the first character for single-token or non-Latin names.
 */
export function avatarInitials(name: string): string {
  const tokens = name.trim().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return '?';
  if (tokens.length === 1) {
    return [...tokens[0]].slice(0, 1).join('').toUpperCase();
  }
  return ([...tokens[0]][0] + [...tokens[1]][0]).toUpperCase();
}

/**
 * Resolve a participant slug to an avatar image URL.
 *
 * `base` is the site base path with a trailing slash already applied
 * ('/' on CF Pages, '/BitcoinArchive/' on the GitHub Pages mirror).
 * Callers pass `import.meta.env.BASE_URL` (.astro) or the
 * MIRROR_BASE-derived base used by the remark plugins.
 */
export function resolveAvatar(slug: string, base: string): string {
  if (hasAvatarPhoto(slug)) {
    return `${base}images/avatars/people/${slug}.webp`;
  }
  return `${base}avatars/${slug}.png`;
}
