/**
 * Thread title overrides for threads whose grouping name
 * differs from any individual entry title.
 * Threads not listed here derive their title from the first
 * non-"Re:" message's title field.
 */
const threadMeta: Record<string, { en: string; ja: string }> = {
  'satoshi-adam-back': {
    en: 'Satoshi ↔ Adam Back Correspondence',
    ja: 'Satoshi ↔ Adam Back 書簡',
  },
  'satoshi-dustin-trammell': {
    en: 'Satoshi ↔ Dustin Trammell Correspondence',
    ja: 'Satoshi ↔ Dustin Trammell 書簡',
  },
  'satoshi-gavin-andresen': {
    en: 'Satoshi ↔ Gavin Andresen Correspondence',
    ja: 'Satoshi ↔ Gavin Andresen 書簡',
  },
  'satoshi-laszlo-hanyecz': {
    en: 'Satoshi ↔ Laszlo Hanyecz Correspondence',
    ja: 'Satoshi ↔ Laszlo Hanyecz 書簡',
  },
  'satoshi-martti-malmi': {
    en: 'Satoshi ↔ Martti Malmi Correspondence',
    ja: 'Satoshi ↔ Martti Malmi 書簡',
  },
  'satoshi-wei-dai': {
    en: 'Satoshi ↔ Wei Dai Correspondence',
    ja: 'Satoshi ↔ Wei Dai 書簡',
  },
};

function isReplyTitle(title: string): boolean {
  return /^(Re:|返信:)\s*/i.test(title);
}

function stripReplyPrefix(title: string): string {
  return title.replace(/^(Re:|返信:)\s*/i, '');
}

export function deriveThreadTitle(
  threadId: string,
  msgs: { data: { title: string } }[],
  lang: 'en' | 'ja',
): string {
  const meta = threadMeta[threadId];
  if (meta) return meta[lang];
  const firstNonReply = msgs.find((m) => !isReplyTitle(m.data.title));
  return firstNonReply
    ? firstNonReply.data.title
    : stripReplyPrefix(msgs[0].data.title);
}
