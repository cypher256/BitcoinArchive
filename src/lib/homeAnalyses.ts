import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

type AnalysisEntry = {
  id: string;
  data: { type: string; homeOrder?: number };
};

type GitDate = { createdAt: string; updatedAt: string };

function loadGitDates(): Record<string, GitDate> {
  const path = join(process.cwd(), 'src/data/git-dates.json');
  if (!existsSync(path)) return {};
  return JSON.parse(readFileSync(path, 'utf-8'));
}

// Order rule: entries with an explicit homeOrder (ascending: 1 = topmost),
// then everything else by git creation date (newest first), capped at `cap`.
export function getHomeAnalyses<T extends AnalysisEntry>(
  entries: T[],
  cap = 6,
): { homeAnalyses: T[]; hasMoreAnalyses: boolean } {
  const gitDates = loadGitDates();
  const all = entries.filter((e) => e.data.type === 'analysis');

  const ordered = all
    .filter((e) => typeof e.data.homeOrder === 'number')
    .sort((a, b) => (a.data.homeOrder as number) - (b.data.homeOrder as number));

  const remaining = all
    .filter((e) => typeof e.data.homeOrder !== 'number')
    .sort((a, b) => {
      const aDate = gitDates[a.id]?.createdAt || '';
      const bDate = gitDates[b.id]?.createdAt || '';
      return bDate.localeCompare(aDate);
    });

  return {
    homeAnalyses: [...ordered, ...remaining].slice(0, cap),
    hasMoreAnalyses: all.length > cap,
  };
}
