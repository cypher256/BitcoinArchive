/**
 * Thread title overrides for threads whose grouping name
 * differs from any individual entry title.
 * Threads not listed here derive their title from the first
 * non-"Re:" message's title field.
 */
const threadMeta: Record<string, { en: string; ja: string }> = {
  'p2pfoundation-bitcoin-open-source': {
    en: 'Bitcoin open source implementation of P2P currency',
    ja: 'ビットコイン：P2P通貨のオープンソース実装',
  },
  'bt-1735': {
    en: 'WikiLeaks and the End of the Beginning',
    ja: 'WikiLeaksと始まりの終わり',
  },
  'bt-6652': {
    en: 'Gavin will visit the CIA',
    ja: 'ギャビン、CIAを訪問予定',
  },
  'bt-626': {
    en: '*** ALERT *** Upgrade to 0.3.6 ASAP!',
    ja: '*** 警告 *** 0.3.6に今すぐアップグレードしてください！',
  },
  'bt-7': {
    en: 'Request: Make this anonymous?',
    ja: 'リクエスト：これを匿名にできますか？',
  },
  'bt-342': {
    en: 'They want to delete the Wikipedia article',
    ja: 'Wikipediaの記事を削除しようとしている',
  },
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

interface ThreadEntry {
  id: string;
  data: { threadId?: string; type?: string; sourceUrl?: string; source?: string; date: Date; title: string };
}

/**
 * Resolve the effective thread ID for an entry.
 * - If the entry has an explicit threadId in frontmatter, use it (correspondence, emails, etc.)
 * - If the entry is from BitcoinTalk, derive from sourceUrl's topic=NNN → "bt-NNN"
 * - Otherwise, no thread
 */
export function resolveThreadId(entry: { data: { threadId?: string; type?: string; sourceUrl?: string; source?: string } }): string | undefined {
  if (entry.data.threadId) return entry.data.threadId;
  if (entry.data.source === 'bitcointalk' && entry.data.type === 'forum-post' && entry.data.sourceUrl) {
    const m = entry.data.sourceUrl.match(/topic=(\d+)/);
    if (m) return `bt-${m[1]}`;
  }
  return undefined;
}

/**
 * Build thread info from a full entry set: counts, starters, and derived titles.
 */
export function buildThreadInfo<T extends ThreadEntry>(
  allEntries: T[],
  lang: 'en' | 'ja',
) {
  const threadCounts = new Map<string, number>();
  const threadGroups = new Map<string, T[]>();

  for (const entry of allEntries) {
    const tid = resolveThreadId(entry);
    if (tid) {
      threadCounts.set(tid, (threadCounts.get(tid) || 0) + 1);
      const group = threadGroups.get(tid) || [];
      group.push(entry);
      threadGroups.set(tid, group);
    }
  }

  const threadStarters = new Map<string, string>();
  const threadTitles = new Map<string, string>();

  for (const [tid, group] of threadGroups) {
    if ((threadCounts.get(tid) || 0) < 2) continue;
    group.sort((a, b) => new Date(a.data.date).getTime() - new Date(b.data.date).getTime());
    threadStarters.set(tid, group[0].id);
    threadTitles.set(tid, deriveThreadTitle(tid, group, lang));
  }

  return { threadCounts, threadStarters, threadTitles };
}

/**
 * Collapse thread entries: keep only thread starters, skip other members.
 * For filtered lists where the starter may be absent, picks the first matching entry.
 */
export function collapseThreads<T extends ThreadEntry>(
  filtered: T[],
  threadCounts: Map<string, number>,
  threadStarters: Map<string, string>,
): T[] {
  const seen = new Set<string>();
  return filtered.filter((entry) => {
    const tid = resolveThreadId(entry);
    if (!tid) return true;
    if ((threadCounts.get(tid) || 0) < 2) return true;
    if (seen.has(tid)) return false;
    seen.add(tid);
    // Prefer the official starter if present in the filtered set
    if (threadStarters.get(tid) === entry.id) return true;
    // Otherwise this is the first matching entry for this thread
    return true;
  });
}
