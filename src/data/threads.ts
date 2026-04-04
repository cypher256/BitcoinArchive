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
