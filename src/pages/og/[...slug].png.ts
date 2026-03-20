import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const fontPath = path.resolve('src/assets/fonts/NotoSansJP-Bold.ttf');
const fontData = fs.readFileSync(fontPath);

export const getStaticPaths: GetStaticPaths = async () => {
  const enEntries = await getCollection('entries');
  const jaEntries = await getCollection('entries_ja');

  const enPaths = enEntries
    .filter((e) => e.data.type !== 'biography')
    .map((entry) => ({
      params: { slug: entry.id },
      props: {
        title: entry.data.title,
        author: entry.data.author,
        date: entry.data.date,
        source: entry.data.source,
        isSatoshi: entry.data.isSatoshi,
        lang: 'en' as const,
      },
    }));

  const jaPaths = jaEntries
    .filter((e) => e.data.type !== 'biography')
    .map((entry) => ({
      params: { slug: `ja/${entry.id}` },
      props: {
        title: entry.data.title,
        author: entry.data.author,
        date: entry.data.date,
        source: entry.data.source,
        isSatoshi: entry.data.isSatoshi,
        lang: 'ja' as const,
      },
    }));

  return [...enPaths, ...jaPaths];
};

function formatDate(date: Date, lang: string): string {
  return date.toLocaleDateString(lang === 'ja' ? 'ja-JP' : 'en-US', {
    year: 'numeric',
    month: lang === 'ja' ? 'long' : 'short',
    day: 'numeric',
  });
}

function truncate(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen - 1) + '…';
}

export const GET: APIRoute = async ({ props }) => {
  const { title, author, date, isSatoshi, lang } = props as {
    title: string;
    author: string;
    date: Date;
    source: string;
    isSatoshi: boolean;
    lang: 'en' | 'ja';
  };

  const displayTitle = truncate(title, 80);
  const displayDate = formatDate(date, lang);
  const accentColor = '#f7931a';

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1a1a2e',
          padding: '0',
          fontFamily: '"Noto Sans JP"',
        },
        children: [
          // Top accent bar
          {
            type: 'div',
            props: {
              style: {
                width: '100%',
                height: '4px',
                backgroundColor: accentColor,
              },
            },
          },
          // Main content
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: 1,
                padding: '48px 64px',
                gap: '24px',
              },
              children: [
                // Site name + Bitcoin icon
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                    },
                    children: [
                      {
                        type: 'div',
                        props: {
                          style: {
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: accentColor,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontSize: '24px',
                            fontWeight: 700,
                          },
                          children: 'B',
                        },
                      },
                      {
                        type: 'span',
                        props: {
                          style: {
                            color: '#999',
                            fontSize: '24px',
                          },
                          children: 'Bitcoin Archive',
                        },
                      },
                    ],
                  },
                },
                // Title
                {
                  type: 'div',
                  props: {
                    style: {
                      color: '#e0e0e0',
                      fontSize: displayTitle.length > 50 ? '36px' : '44px',
                      fontWeight: 700,
                      lineHeight: 1.3,
                      letterSpacing: '-0.02em',
                    },
                    children: displayTitle,
                  },
                },
                // Author + Date line
                {
                  type: 'div',
                  props: {
                    style: {
                      display: 'flex',
                      alignItems: 'center',
                      gap: '24px',
                      marginTop: '8px',
                    },
                    children: [
                      {
                        type: 'span',
                        props: {
                          style: {
                            color: isSatoshi ? accentColor : '#aaa',
                            fontSize: '22px',
                            fontWeight: isSatoshi ? 700 : 400,
                          },
                          children: author,
                        },
                      },
                      {
                        type: 'span',
                        props: {
                          style: {
                            color: '#666',
                            fontSize: '22px',
                          },
                          children: displayDate,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          // Bottom accent bar
          {
            type: 'div',
            props: {
              style: {
                width: '100%',
                height: '4px',
                backgroundColor: accentColor,
              },
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
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
