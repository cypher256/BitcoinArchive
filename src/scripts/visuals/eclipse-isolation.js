// An Eclipse attack as being surrounded by impostors: in normal operation
// a node's connections are a mix of honest peers and maybe one attacker,
// so a lie from any single peer is caught by comparison with the others.
// Once every connection slot is attacker-controlled, that comparison has
// nothing honest left to check against -- the node sees only the version
// of the network the attacker chooses to show it.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Isolation is not about being lied to -- it is losing anyone to check the lie against',
    desc: 'In normal operation, a node connects to a mix of honest peers, with an attacker holding at most a few of the slots. A lie from that one attacker peer is caught by comparing it against everyone else. An Eclipse attack floods the node\'s connection slots until every peer is attacker-controlled, at which point there is no honest peer left to compare against -- the node sees only the chain the attacker chooses to show it.',
    normalTitle: 'Normal operation',
    node: 'Target node',
    honest: 'Honest peer',
    attacker: 'Attacker peer',
    eclipsedTitle: 'Eclipsed state',
    nodeIsolated: 'Target node\n(isolated)',
    floodLabel: 'Attacker floods addr messages,\nfills every connection slot',
    caption: 'The node never sees a lie flagged as such -- it just runs out of anyone honest left to flag it.',
  },
  ja: {
    title: '孤立とは嘘をつかれることではなく、その嘘を照合する相手を失うことだ',
    desc: '通常運用では、ノードは正直なピアを中心に接続し、攻撃者はせいぜい数枠を占めるにすぎない。その1つの攻撃者ピアが嘘をついても、他の全員と照合すれば見破れる。日食攻撃はノードの接続枠をあふれさせ、すべてのピアを攻撃者の支配下に置く。そうなると、照合する相手となる正直なピアが1つも残らない。ノードは攻撃者が見せたいと選んだチェーンしか見えなくなる。',
    normalTitle: '通常運用',
    node: '対象ノード',
    honest: '正直なピア',
    attacker: '攻撃者ピア',
    eclipsedTitle: '日食状態',
    nodeIsolated: '対象ノード\n(隔離)',
    floodLabel: '攻撃者がaddrメッセージであふれさせ、\nすべての接続枠を占有',
    caption: 'ノードは嘘を嘘として検知するのではない。それを見破る相手が正直な側に1人も残らなくなるだけだ。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function peerNode(cx, cy, label, colorVar) {
  const lines = label.split('\n').length;
  const ty = cy + 34 - (lines - 1) * 6;
  return (
    `<circle cx="${cx}" cy="${cy}" r="18" fill="${colorVar}" opacity="0.15" stroke="${colorVar}" stroke-width="2"/>` +
    `<text x="${cx}" y="${ty}" text-anchor="middle" fill="var(--color-text)" font-size="9.5" font-family="var(--font-body, sans-serif)">${multiline(cx, ty, label, 11)}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 780, H = 280;

  const normalCx = 190, normalCy = 130;
  const eclipsedCx = 590, eclipsedCy = 130;
  const r = 90;

  const honestAngles = [-150, -90, -30];
  const attackerAngleNormal = 60;
  const attackerAnglesEclipsed = [-135, -45, 45, 135];

  let normalPeers = '';
  honestAngles.forEach((a) => {
    const rad = (a * Math.PI) / 180;
    const px = normalCx + r * Math.cos(rad), py = normalCy + r * Math.sin(rad);
    normalPeers += `<line x1="${normalCx}" y1="${normalCy}" x2="${px}" y2="${py}" stroke="var(--color-border)" stroke-width="1.5"/>` + peerNode(px, py, L.honest, 'var(--color-hero-subtitle)');
  });
  {
    const rad = (attackerAngleNormal * Math.PI) / 180;
    const px = normalCx + r * Math.cos(rad), py = normalCy + r * Math.sin(rad);
    normalPeers += `<line x1="${normalCx}" y1="${normalCy}" x2="${px}" y2="${py}" stroke="var(--color-border)" stroke-width="1.5"/>` + peerNode(px, py, L.attacker, 'var(--color-satoshi)');
  }

  let eclipsedPeers = '';
  attackerAnglesEclipsed.forEach((a) => {
    const rad = (a * Math.PI) / 180;
    const px = eclipsedCx + r * Math.cos(rad), py = eclipsedCy + r * Math.sin(rad);
    eclipsedPeers += `<line x1="${eclipsedCx}" y1="${eclipsedCy}" x2="${px}" y2="${py}" stroke="var(--color-satoshi)" stroke-width="1.5"/>` + peerNode(px, py, L.attacker, 'var(--color-satoshi)');
  });

  const inner =
    ARROWHEAD_DEFS +
    `<text x="${normalCx}" y="20" text-anchor="middle" fill="var(--color-text-muted)" font-size="11.5" font-family="var(--font-body, sans-serif)">${esc(L.normalTitle)}</text>` +
    normalPeers +
    `<circle cx="${normalCx}" cy="${normalCy}" r="26" fill="var(--color-bg-alt)" stroke="var(--color-text)" stroke-width="2"/>` +
    `<text x="${normalCx}" y="${normalCy + 3}" text-anchor="middle" fill="var(--color-text)" font-size="8" font-family="var(--font-body, sans-serif)">${esc(L.node)}</text>` +
    `<text x="${eclipsedCx}" y="20" text-anchor="middle" fill="var(--color-satoshi)" font-size="11.5" font-family="var(--font-body, sans-serif)">${esc(L.eclipsedTitle)}</text>` +
    eclipsedPeers +
    `<circle cx="${eclipsedCx}" cy="${eclipsedCy}" r="22" fill="var(--color-satoshi)" opacity="0.12" stroke="var(--color-satoshi)" stroke-width="2"/>` +
    `<text x="${eclipsedCx}" y="${eclipsedCy + 4}" text-anchor="middle" fill="var(--color-text)" font-size="9" font-family="var(--font-body, sans-serif)">${multiline(eclipsedCx, eclipsedCy, L.nodeIsolated, 11)}</text>` +
    arrow(normalCx + r + 40, normalCy, eclipsedCx - r - 40, eclipsedCy, {}) +
    `<text x="${(normalCx + eclipsedCx) / 2}" y="${normalCy - 30}" text-anchor="middle" fill="var(--color-text-muted)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline((normalCx + eclipsedCx) / 2, normalCy - 30, L.floodLabel, 12)}</text>`;

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
