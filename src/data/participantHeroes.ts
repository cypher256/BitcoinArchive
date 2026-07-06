/**
 * participantHeroes.ts — Optional decorative hero illustration shown at
 * the top of a participant's profile page, above the avatar+name row.
 *
 * Keyed by participant slug; a slug with no entry renders no hero image
 * (most participants have none). Registered images are git-tracked JPEGs
 * at /images/participants/<slug>.jpg — JPEG rather than PNG because these
 * are painterly/gradient-heavy illustrations, the same reasoning as the
 * entry-page hero banner (see scripts/generate-hero-banners.mjs).
 *
 * width/height are the actual encoded pixel dimensions, used as the <img>
 * width/height attrs to reserve layout space and avoid CLS.
 */
export interface ParticipantHero {
  width: number;
  height: number;
}

export const participantHeroes: Record<string, ParticipantHero> = {
  'satoshi-nakamoto': { width: 1600, height: 873 },
};

export function hasParticipantHero(slug: string): boolean {
  return Object.prototype.hasOwnProperty.call(participantHeroes, slug);
}

export function resolveParticipantHero(slug: string, base: string): string {
  return `${base}images/participants/${slug}.jpg`;
}
