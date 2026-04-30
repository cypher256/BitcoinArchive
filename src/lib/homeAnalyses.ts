import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

type AnalysisEntry = {
  id: string;
  data: { type: string; homeOrder?: number };
};

type LangDate = { createdAt: string; updatedAt: string };
type GitDateRecord = { en?: LangDate; ja?: LangDate };

function loadGitDates(): Record<string, GitDateRecord> {
  const path = join(process.cwd(), 'src/data/git-dates.json');
  if (!existsSync(path)) return {};
  return JSON.parse(readFileSync(path, 'utf-8'));
}

// Order rule: entries with an explicit homeOrder (ascending: 1 = topmost),
// then everything else by git creation date (newest first), capped at `cap`.
// `lang` selects which language's git history drives the date sort — EN home
// uses EN history, JA home uses JA history (falls back to EN when JA file is
// missing, e.g. EN-only entry shown on JA home as a fallback).
export function getHomeAnalyses<T extends AnalysisEntry>(
  entries: T[],
  cap = 6,
  lang: 'en' | 'ja' = 'en',
): { homeAnalyses: T[]; hasMoreAnalyses: boolean } {
  const gitDates = loadGitDates();
  const all = entries.filter((e) => e.data.type === 'analysis');

  const ordered = all
    .filter((e) => typeof e.data.homeOrder === 'number')
    .sort((a, b) => (a.data.homeOrder as number) - (b.data.homeOrder as number));

  const remaining = all
    .filter((e) => typeof e.data.homeOrder !== 'number')
    .sort((a, b) => {
      const gdA = gitDates[a.id];
      const gdB = gitDates[b.id];
      const aDate = gdA?.[lang]?.createdAt ?? gdA?.en?.createdAt ?? '';
      const bDate = gdB?.[lang]?.createdAt ?? gdB?.en?.createdAt ?? '';
      return bDate.localeCompare(aDate);
    });

  return {
    homeAnalyses: [...ordered, ...remaining].slice(0, cap),
    hasMoreAnalyses: all.length > cap,
  };
}
