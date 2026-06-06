import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { avatarBackground, avatarInitials, hasAvatarPhoto } from '../../data/avatars';

// Auto-generated participant avatars: an initial on a deterministic
// background colour. Built from the participant slug only, so the image
// is reproducible and is NOT committed to git (mirrors the OG image
// policy in src/pages/og/[...slug].png.ts).
//
// Slugs WITH a real photo (registered in avatars.ts) are served as
// static /images/avatars/people/<slug>.webp assets and are skipped here.
//
// Unlike OG images, this route is NOT gated behind CI / GENERATE_OG:
// getStaticPaths only enumerates slugs (cheap), and the expensive satori
// render happens in GET, which dev runs on demand.
export const getStaticPaths: GetStaticPaths = async () => {
  const enEntries = await getCollection('entries');

  // slug → English display name, taken from participants[] across all
  // entries (first occurrence wins). The English name drives the
  // language-independent initials so the same slug renders one avatar.
  const nameMap = new Map<string, string>();
  for (const entry of enEntries) {
    for (const p of entry.data.participants) {
      if (!nameMap.has(p.slug)) nameMap.set(p.slug, p.name);
    }
  }

  const paths = [...nameMap.entries()]
    // Satoshi renders as a CSS span (Avatar.astro / avatarTag), not a baked
    // PNG, so no generated avatar image is needed for that slug.
    .filter(([slug]) => !hasAvatarPhoto(slug) && slug !== 'satoshi-nakamoto')
    .map(([slug, name]) => ({
      params: { slug },
      props: { slug, name },
    }));
  // Bitcoin Institute is the editorial author, not a participant, so it
  // is not in nameMap. Add it explicitly so editorial entries get the
  // "BI" navy avatar (avatarBackground special-cases the colour).
  if (!hasAvatarPhoto('bitcoin-institute')) {
    paths.push({
      params: { slug: 'bitcoin-institute' },
      props: { slug: 'bitcoin-institute', name: 'Bitcoin Institute' },
    });
  }
  return paths;
};

export const GET: APIRoute = async ({ props }) => {
  // Dynamic imports — only loaded when an avatar is actually rendered.
  const satori = (await import('satori')).default;
  const sharp = (await import('sharp')).default;
  const fs = await import('node:fs');
  const path = await import('node:path');

  const fontPath = path.resolve('src/assets/fonts/NotoSansJP-Bold.ttf');
  const fontData = fs.readFileSync(fontPath);

  const { slug, name } = props as { slug: string; name: string };
  const initials = avatarInitials(name);
  const background = avatarBackground(slug);
  const initialColor = '#ffffff';
  const size = 256;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: background,
          color: initialColor,
          fontFamily: '"Noto Sans JP"',
          fontWeight: 700,
          fontSize: initials.length > 1 ? '108px' : '140px',
          letterSpacing: '-0.02em',
        },
        children: initials,
      },
    },
    {
      width: size,
      height: size,
      fonts: [
        {
          name: 'Noto Sans JP',
          data: fontData,
          weight: 700,
          style: 'normal',
        },
      ],
    },
  );

  const png = await sharp(Buffer.from(svg)).png().toBuffer();

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
