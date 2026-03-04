import type { Lang } from '../i18n/ui';
import { getJapaneseParticipantDisplayName } from '../i18n/participants';

export interface GraphNode {
  id: string;
  name: string;
  count: number;
  isSatoshi: boolean;
}

export interface GraphEdge {
  source: string;
  target: string;
  weight: number;
}

export interface GraphData {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export function computeGraphData(
  entries: { data: { participants: { name: string; slug: string }[]; isSatoshi: boolean } }[],
  lang: Lang = 'en',
): GraphData {
  const nodeCounts = new Map<string, { name: string; count: number; isSatoshi: boolean }>();
  const edgeCounts = new Map<string, number>();

  for (const entry of entries) {
    const participants = entry.data.participants;

    for (const p of participants) {
      const existing = nodeCounts.get(p.slug);
      if (existing) {
        existing.count++;
      } else {
        nodeCounts.set(p.slug, {
          name: lang === 'ja' ? getJapaneseParticipantDisplayName(p.name, p.slug) : p.name,
          count: 1,
          isSatoshi: p.name === 'Satoshi Nakamoto',
        });
      }
    }

    for (let i = 0; i < participants.length; i++) {
      for (let j = i + 1; j < participants.length; j++) {
        const a = participants[i].slug;
        const b = participants[j].slug;
        const key = a < b ? `${a}::${b}` : `${b}::${a}`;
        edgeCounts.set(key, (edgeCounts.get(key) || 0) + 1);
      }
    }
  }

  const nodes: GraphNode[] = Array.from(nodeCounts.entries()).map(([id, d]) => ({
    id,
    name: d.name,
    count: d.count,
    isSatoshi: d.isSatoshi,
  }));

  const edges: GraphEdge[] = Array.from(edgeCounts.entries()).map(([key, weight]) => {
    const [source, target] = key.split('::');
    return { source, target, weight };
  });

  return { nodes, edges };
}
