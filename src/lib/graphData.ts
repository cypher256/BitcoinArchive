import type { Lang } from '../i18n/ui';
import { getJapaneseParticipantDisplayName } from '../i18n/participants';
import { resolveThreadId } from '../data/threads';

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
  entries: { id: string; data: { participants: { name: string; slug: string }[]; isSatoshi: boolean } }[],
  lang: Lang = 'en',
): GraphData {
  const nodeCounts = new Map<string, { name: string; count: number; isSatoshi: boolean }>();
  const edgeCounts = new Map<string, number>();

  // Collect all participants per thread
  const threadParticipants = new Map<string, Set<string>>();

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

    // Edge from co-occurrence within the same entry
    for (let i = 0; i < participants.length; i++) {
      for (let j = i + 1; j < participants.length; j++) {
        const a = participants[i].slug;
        const b = participants[j].slug;
        const key = a < b ? `${a}::${b}` : `${b}::${a}`;
        edgeCounts.set(key, (edgeCounts.get(key) || 0) + 1);
      }
    }

    // Collect participants by threadId
    const threadId = resolveThreadId(entry);
    if (threadId) {
      if (!threadParticipants.has(threadId)) {
        threadParticipants.set(threadId, new Set());
      }
      const threadSet = threadParticipants.get(threadId)!;
      for (const p of participants) {
        threadSet.add(p.slug);
      }
    }
  }

  // Edge from co-occurrence within the same thread
  for (const [, slugs] of threadParticipants) {
    const arr = Array.from(slugs);
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        const a = arr[i];
        const b = arr[j];
        const key = a < b ? `${a}::${b}` : `${b}::${a}`;
        if (!edgeCounts.has(key)) {
          edgeCounts.set(key, 1);
        }
      }
    }
  }

  const nodes: GraphNode[] = Array.from(nodeCounts.entries()).map(([id, d]) => ({
    id,
    name: d.name,
    count: d.count,
    isSatoshi: d.isSatoshi,
  }));

  // Weight-1 edges are overwhelmingly noise: a single shared BitcoinTalk
  // thread with N participants contributes an all-pairs clique of
  // N*(N-1)/2 weight-1 edges (see the thread co-occurrence pass above),
  // which dominates the edge count (~96% of edges are weight 1) without
  // representing a real interaction. This bloats both the rendered SVG
  // (d3-force redraws every edge on every simulation tick) and the JSON
  // payload sent to the client.
  //
  // A flat weight>=2 filter would strand ~330 of 398 nodes with zero
  // edges, reintroducing exactly the isolated-node problem that
  // thread-based co-occurrence (d553f9b2c) was added to fix. So: keep
  // every weight>=2 edge outright, then walk the weight-1 edges once and
  // keep only the ones that still connect an otherwise-isolated node —
  // enough to guarantee every originally-connected node keeps at least
  // one edge, without keeping the full clique.
  const STRONG_WEIGHT = 2;
  const strongPairs: [string, string, number][] = [];
  const weakPairs: [string, string, number][] = [];
  for (const [key, weight] of edgeCounts) {
    const [a, b] = key.split('::');
    (weight >= STRONG_WEIGHT ? strongPairs : weakPairs).push([a, b, weight]);
  }

  const connected = new Set<string>();
  for (const [a, b] of strongPairs) {
    connected.add(a);
    connected.add(b);
  }

  const rescuedPairs: [string, string, number][] = [];
  for (const [a, b, weight] of weakPairs) {
    if (!connected.has(a) || !connected.has(b)) {
      rescuedPairs.push([a, b, weight]);
      connected.add(a);
      connected.add(b);
    }
  }

  const edges: GraphEdge[] = [...strongPairs, ...rescuedPairs].map(([source, target, weight]) => ({
    source,
    target,
    weight,
  }));

  return { nodes, edges };
}
