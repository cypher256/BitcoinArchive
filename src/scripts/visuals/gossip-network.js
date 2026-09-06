// Peer-to-peer as gossip passed person to person rather than posted on a
// noticeboard: nobody is a central announcer, each node talks directly to
// a handful of others, and news reaches everyone by hopping from
// neighbor to neighbor rather than radiating from a single source.
import { svgFigure, esc, ARROWHEAD_DEFS } from './_shared.js';

const LABELS = {
  en: {
    title: 'News spreads like gossip, not like an announcement',
    desc: 'Bitcoin\'s peer-to-peer network has no central announcer or noticeboard. Each node talks directly to a handful of others -- its neighbors -- and passes along anything new it hears, the way a piece of gossip spreads from person to person rather than through a single broadcast. There is no master copy and no single point anyone could take down to stop the news from spreading.',
    node: 'Node',
    caption: 'No node is the center -- news reaches everyone by hopping from neighbor to neighbor.',
  },
  ja: {
    title: 'ニュースは告知ではなく、噂のように広まる',
    desc: 'ビットコインのP2Pネットワークには中央の告知者や掲示板が存在しない。各ノードは近隣にあたる一握りの相手と直接話し、聞いた新しいことを伝えていく。それは噂が単一の放送ではなく人から人へと広まる様子に似ている。誰か一人が止めればニュースの拡散を止められるような、単一障害点もマスターコピーも存在しない。',
    node: 'ノード',
    caption: 'どのノードも中心ではない。ニュースは近隣から近隣へと飛び移りながら全員に届く。',
  },
};

function nodeIcon(cx, cy, r, colorVar, label) {
  return (
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${colorVar}" fill-opacity="0.15" stroke="${colorVar}" stroke-width="2"/>` +
    `<text x="${cx}" y="${cy + r + 16}" text-anchor="middle" fill="var(--color-text)" font-size="9.5" font-family="var(--font-body, sans-serif)">${esc(label)}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 620, H = 420;

  const nodes = [
    { x: 310, y: 60 },
    { x: 120, y: 160 },
    { x: 490, y: 160 },
    { x: 200, y: 300 },
    { x: 420, y: 300 },
    { x: 310, y: 370 },
  ];
  const edges = [
    [0, 1], [0, 2], [1, 3], [2, 4], [1, 2], [3, 4], [3, 5], [4, 5],
  ];

  let lines = '';
  for (const [a, b] of edges) {
    lines += `<line x1="${nodes[a].x}" y1="${nodes[a].y}" x2="${nodes[b].x}" y2="${nodes[b].y}" stroke="var(--color-border)" stroke-width="1.5"/>`;
  }

  let nodeShapes = '';
  for (const n of nodes) {
    nodeShapes += nodeIcon(n.x, n.y, 22, 'var(--color-hero-subtitle)', L.node);
  }

  const inner = ARROWHEAD_DEFS + lines + nodeShapes;

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
