import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { deriveThreadTitle, resolveThreadId } from '../../data/threads';

const skipOg = process.env.CI !== 'true' && process.env.GENERATE_OG !== 'true';

export const getStaticPaths: GetStaticPaths = async () => {
  if (skipOg) return [];

  const enEntries = await getCollection('entries');
  const jaEntries = await getCollection('entries_ja');

  type AnyEntry = (typeof enEntries)[number] | (typeof jaEntries)[number];

  // Individual-entry OGP. Biographies are excluded here — their image
  // is served via /og/participants/<slug>.png, which the biography's
  // participant page already references.
  const enPaths = enEntries
    .filter((e) => e.data.type !== 'biography')
    .map((entry) => ({
      params: { slug: entry.id },
      props: {
        title: entry.data.title,
        author: entry.data.author,
        date: entry.data.date,
        isSatoshiAuthor: entry.data.author.toLowerCase() === 'satoshi nakamoto',
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
        isSatoshiAuthor: entry.data.author.toLowerCase() === 'satoshi nakamoto',
        lang: 'ja' as const,
      },
    }));

  // Thread OGP — per-thread image. Title = derived thread title,
  // author = first message's author + " 他" / " et al." when multiple
  // participants exist, date = first message date. Satoshi accent
  // tracks the first author, mirroring the EntryCard / EntryMeta rule
  // (the thread's leading author, not any incidental participant).
  function threadPaths(entries: AnyEntry[], lang: 'en' | 'ja') {
    const threadMap = new Map<string, AnyEntry[]>();
    for (const entry of entries) {
      const tid = resolveThreadId(entry);
      if (!tid) continue;
      const list = threadMap.get(tid) ?? [];
      list.push(entry);
      threadMap.set(tid, list);
    }
    return [...threadMap.entries()]
      .filter(([_, msgs]) => msgs.length >= 2)
      .map(([threadId, msgs]) => {
        msgs.sort(
          (a, b) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime(),
        );
        const first = msgs[0];
        const participantNames = new Set<string>();
        for (const m of msgs) {
          for (const p of m.data.participants) {
            participantNames.add(p.name);
          }
        }
        const author =
          participantNames.size === 1
            ? [...participantNames][0]
            : `${first.data.author}${lang === 'ja' ? ' 他' : ' et al.'}`;
        const slug =
          lang === 'ja' ? `ja/threads/${threadId}` : `threads/${threadId}`;
        return {
          params: { slug },
          props: {
            title: deriveThreadTitle(threadId, msgs, lang),
            author,
            date: first.data.date,
            isSatoshiAuthor:
              first.data.author.toLowerCase() === 'satoshi nakamoto',
            lang,
          },
        };
      });
  }

  // Participant OGP — one image per participant slug. Biography path:
  // use the biography's own title/author/date when one exists for the
  // slug as its SUBJECT (subject identification = participants[0],
  // matching getBiographyForParticipant in src/i18n/utils.ts —
  // biographies routinely list other people in their participants[]
  // alongside the subject, so `.some()` would mis-attribute). No-bio
  // path: use the participant display name + a "related N entries"
  // label and the oldest related entry's date.
  function participantPaths(entries: AnyEntry[], lang: 'en' | 'ja') {
    const nameMap = new Map<string, string>();
    const relatedDates = new Map<string, Date[]>();
    const bioMap = new Map<string, AnyEntry>();
    for (const entry of entries) {
      if (entry.data.type === 'biography') {
        const subject = entry.data.participants[0];
        if (subject && !bioMap.has(subject.slug)) {
          bioMap.set(subject.slug, entry);
        }
      }
      for (const p of entry.data.participants) {
        if (!nameMap.has(p.slug)) nameMap.set(p.slug, p.name);
        if (entry.data.type !== 'biography') {
          const list = relatedDates.get(p.slug) ?? [];
          list.push(entry.data.date);
          relatedDates.set(p.slug, list);
        }
      }
    }
    return [...nameMap.entries()].map(([slug, name]) => {
      const bio = bioMap.get(slug);
      const ogSlug =
        lang === 'ja' ? `ja/participants/${slug}` : `participants/${slug}`;
      if (bio) {
        return {
          params: { slug: ogSlug },
          props: {
            title: bio.data.title,
            author: bio.data.author,
            date: bio.data.date,
            isSatoshiAuthor: slug === 'satoshi-nakamoto',
            lang,
          },
        };
      }
      const dates = relatedDates.get(slug) ?? [];
      const oldest =
        dates.length > 0
          ? new Date(Math.min(...dates.map((d) => d.getTime())))
          : new Date();
      const count = dates.length;
      return {
        params: { slug: ogSlug },
        props: {
          title: name,
          author:
            lang === 'ja' ? `関連 ${count} 件` : `${count} related entries`,
          date: oldest,
          isSatoshiAuthor: slug === 'satoshi-nakamoto',
          lang,
        },
      };
    });
  }

  const enThreadPaths = threadPaths(enEntries, 'en');
  const jaThreadPaths = threadPaths(jaEntries, 'ja');
  const enParticipantPaths = participantPaths(enEntries, 'en');
  const jaParticipantPaths = participantPaths(jaEntries, 'ja');

  return [
    ...enPaths,
    ...jaPaths,
    ...enThreadPaths,
    ...jaThreadPaths,
    ...enParticipantPaths,
    ...jaParticipantPaths,
  ];
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
  // Dynamic imports — only loaded when OG images are actually generated
  const satori = (await import('satori')).default;
  const sharp = (await import('sharp')).default;
  const fs = await import('node:fs');
  const path = await import('node:path');

  const fontPath = path.resolve('src/assets/fonts/NotoSansJP-Bold.ttf');
  const fontData = fs.readFileSync(fontPath);

  const { title, author, date, isSatoshiAuthor, lang } = props as {
    title: string;
    author: string;
    date: Date;
    isSatoshiAuthor: boolean;
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
                          children: 'Bitcoin Institute',
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
                            color: isSatoshiAuthor ? accentColor : '#aaa',
                            fontSize: '22px',
                            fontWeight: isSatoshiAuthor ? 700 : 400,
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
