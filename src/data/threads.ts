/**
 * Thread title overrides for threads whose auto-derived title is incorrect.
 * Key = directory path (= thread ID). Threads not listed here derive their
 * title from the first non-"Re:" message's title field.
 */
const threadMeta: Record<string, { en: string; ja: string }> = {
  'forum/bitcointalk/topic-1735': {
    en: 'WikiLeaks and the End of the Beginning',
    ja: 'WikiLeaksと始まりの終わり',
  },
  'forum/bitcointalk/topic-6652': {
    en: 'Gavin will visit the CIA',
    ja: 'ギャビン、CIAを訪問予定',
  },
  'forum/bitcointalk/topic-626': {
    en: '*** ALERT *** Upgrade to 0.3.6 ASAP!',
    ja: '*** 警告 *** 0.3.6に今すぐアップグレードしてください！',
  },
  'forum/bitcointalk/topic-7': {
    en: 'Request: Make this anonymous?',
    ja: 'リクエスト：これを匿名にできますか？',
  },
  'forum/bitcointalk/topic-342': {
    en: 'They want to delete the Wikipedia article',
    ja: 'Wikipediaの記事を削除しようとしている',
  },
  'forum/bitcointalk/topic-671': {
    en: 'Tax implications of Bitcoin',
    ja: 'ビットコインの税務上の影響',
  },
  'forum/bitcointalk/topic-125': {
    en: 'Ummmm... where did my bitcoins go?',
    ja: 'えーっと...私のビットコインはどこに行ったの？',
  },
  'forum/bitcointalk/topic-184': {
    en: 'New binary release?',
    ja: '新しいバイナリリリースは？',
  },
  'forum/bitcointalk/topic-2216': {
    en: 'PC World Article on Bitcoin',
    ja: 'PC WorldのBitcoinに関する記事',
  },
  'forum/p2pfoundation/bitcoin-open-source': {
    en: 'Bitcoin open source implementation of P2P currency',
    ja: 'ビットコイン：P2P通貨のオープンソース実装',
  },
  'correspondence/adam-back': {
    en: 'Satoshi ↔ Adam Back Correspondence',
    ja: 'サトシ ↔ アダム・バック 書簡',
  },
  'correspondence/dustin-trammell': {
    en: 'Satoshi ↔ Dustin Trammell Correspondence',
    ja: 'サトシ ↔ ダスティン・トランメル 書簡',
  },
  'correspondence/gavin-andresen': {
    en: 'Satoshi ↔ Gavin Andresen Correspondence',
    ja: 'サトシ ↔ ギャビン・アンドレセン 書簡',
  },
  'correspondence/hal-finney': {
    en: 'Satoshi ↔ Hal Finney Correspondence',
    ja: 'サトシ ↔ ハル・フィニー 書簡',
  },
  'correspondence/laszlo-hanyecz': {
    en: 'Satoshi ↔ Laszlo Hanyecz Correspondence',
    ja: 'サトシ ↔ ラズロ・ハニエツ 書簡',
  },
  'correspondence/martti-malmi': {
    en: 'Satoshi ↔ Martti Malmi Correspondence',
    ja: 'サトシ ↔ マルッティ・マルミ 書簡',
  },
  'correspondence/mike-hearn/questions': {
    en: 'Satoshi ↔ Mike Hearn — Initial Questions',
    ja: 'サトシ ↔ マイク・ハーン — 最初の質問',
  },
  'correspondence/mike-hearn/more-questions': {
    en: 'Satoshi ↔ Mike Hearn — More Questions',
    ja: 'サトシ ↔ マイク・ハーン — さらなる質問',
  },
  'correspondence/mike-hearn/bitcoinj': {
    en: 'Satoshi ↔ Mike Hearn — BitcoinJ & Contracts',
    ja: 'サトシ ↔ マイク・ハーン — BitcoinJとコントラクト',
  },
  'correspondence/mike-hearn/holding-coins': {
    en: 'Satoshi ↔ Mike Hearn — Holding Coins & Farewell',
    ja: 'サトシ ↔ マイク・ハーン — コイン保持と別れ',
  },
  'correspondence/mike-hearn/chargeback': {
    en: 'Satoshi ↔ Mike Hearn — Chargeback & Escrow',
    ja: 'サトシ ↔ マイク・ハーン — チャージバックとエスクロー',
  },
  'correspondence/nicholas-bohm': {
    en: 'Satoshi ↔ Nicholas Bohm Correspondence',
    ja: 'サトシ ↔ ニコラス・ボーム 書簡',
  },
  'correspondence/wei-dai': {
    en: 'Satoshi ↔ Wei Dai Correspondence',
    ja: 'サトシ ↔ ウェイ・ダイ 書簡',
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
  data: { date: Date; title: string };
}

/**
 * Resolve the effective thread ID for an entry from its directory structure.
 *
 * Rule: thread ID = parent directory path of the file.
 * - correspondence/NAME/file.md          -> "correspondence/NAME"
 * - correspondence/NAME/SUB/file.md      -> "correspondence/NAME/SUB"
 * - forum/SOURCE/THREAD/file.md          -> "forum/SOURCE/THREAD"
 * - emails/LIST/THREAD/file.md           -> "emails/LIST/THREAD"
 * - emails/LIST/file.md                  -> no thread (file at list root)
 * - aftermath/file.md, bip/file.md, etc. -> no thread
 */
export function resolveThreadId(entry: { id: string }): string | undefined {
  const lastSlash = entry.id.lastIndexOf('/');
  if (lastSlash < 0) return undefined;

  const dir = entry.id.substring(0, lastSlash);

  // correspondence: thread at depth 2+ (correspondence/NAME)
  if (dir.startsWith('correspondence/')) {
    return dir.split('/').length >= 2 ? dir : undefined;
  }

  // forum, emails: thread at depth 3+ (forum/SOURCE/THREAD, emails/LIST/THREAD)
  if (dir.startsWith('forum/') || dir.startsWith('emails/')) {
    return dir.split('/').length >= 3 ? dir : undefined;
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
    if (threadStarters.get(tid) === entry.id) return true;
    return true;
  });
}
