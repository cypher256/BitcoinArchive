#!/usr/bin/env node
/**
 * generate-hero-banners.mjs — one-time asset generator for the entry-page
 * hero banner: a dark gradient + film-grain backdrop used as the CSS
 * background behind .entry-title-row (avatar + h1 render on top of it as
 * real text, not baked into the image). A single wide canvas with several
 * glow hotspots scattered along its length — each entry's template picks a
 * horizontal `background-position` deterministically from a hash of its
 * entry id (see heroBannerOffset() in the entry templates), so different
 * articles land on different-looking crops of the same source image. Not
 * wired into dev/build: re-run manually when the design itself changes.
 * Output: public/images/hero-banners/atmosphere.jpg (JPEG, not PNG — the
 * film grain is high-frequency noise across the whole frame, which defeats
 * PNG's compression; JPEG keeps this well under 200KB at the same visual
 * quality).
 *
 * Usage: node scripts/generate-hero-banners.mjs
 */
import satori from '../node_modules/satori/dist/index.js';
import sharp from '../node_modules/sharp/lib/index.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = path.join(ROOT, 'public/images/hero-banners');
// Wide relative to the ~1600px crop a title-row actually shows, so panning
// via background-position-x lands on visibly different hotspots per entry.
const WIDTH = 4800;
const HEIGHT = 480;

// Glow hotspots spread across the canvas, alternating warm (accent orange)
// and cool (navy/blue) to stay within the site's existing two-tone palette
// (see global.css --color-accent) rather than introducing new hues.
const HOTSPOTS = [
  { x: 6, y: 15, color: '247,147,26', size: 60 },
  { x: 22, y: 85, color: '43,60,90', size: 55 },
  { x: 38, y: 25, color: '43,60,90', size: 65 },
  { x: 54, y: 80, color: '247,147,26', size: 50 },
  { x: 70, y: 20, color: '43,60,90', size: 60 },
  { x: 86, y: 85, color: '247,147,26', size: 55 },
  { x: 97, y: 30, color: '43,60,90', size: 50 },
];

function grainPng(width, height) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
    <filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch"/></filter>
    <rect width="100%" height="100%" filter="url(#n)"/>
  </svg>`;
  return sharp(Buffer.from(svg)).png().toBuffer();
}

async function renderGradient() {
  const backgroundImage = HOTSPOTS.map(
    (h) => `radial-gradient(circle at ${h.x}% ${h.y}%, rgba(${h.color},0.32), rgba(13,14,18,0) ${h.size}%)`,
  ).join(', ');
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundImage,
          backgroundColor: '#0d0e12',
        },
        children: [],
      },
    },
    { width: WIDTH, height: HEIGHT, fonts: [] },
  );
  return sharp(Buffer.from(svg)).png().toBuffer();
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const [gradient, grain] = await Promise.all([renderGradient(), grainPng(WIDTH, HEIGHT)]);
  const composited = await sharp(gradient)
    .composite([{ input: grain, blend: 'overlay' }])
    .jpeg({ quality: 82 })
    .toBuffer();
  const outPath = path.join(OUT_DIR, 'atmosphere.jpg');
  fs.writeFileSync(outPath, composited);
  console.log(`Generated ${path.relative(ROOT, outPath)} (${WIDTH}x${HEIGHT}, ${(composited.length / 1024).toFixed(0)}KB)`);
}

main();
