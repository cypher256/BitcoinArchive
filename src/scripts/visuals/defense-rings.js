// Bitcoin's security as four concentric walls, not one: cryptography,
// consensus rules, network architecture, and economic incentives each
// stand independently. Breaching one wall still leaves the next intact
// -- an attacker has to clear all four to reach a meaningful outcome.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Four independent walls, not one thick one',
    desc: 'Bitcoin\'s security is not a single mechanism but four concentric layers, each independent of the others. Cryptographic guarantees (proof of work, signatures, Merkle commitments) form the innermost wall. Consensus rules (block validation, chain selection) form the next. Network architecture (gossip relay, peer diversity) forms the third. Economic incentives (block rewards, hash-rate cost) form the outermost. An attacker must breach all four to reach a meaningful outcome -- clearing one wall does not weaken the ones behind it.',
    l1: 'Cryptographic\nguarantees',
    l2: 'Consensus\nrules',
    l3: 'Network\narchitecture',
    l4: 'Economic\nincentives',
    center: 'Ledger\nintegrity',
    caption: 'Each wall stops a different kind of attacker -- breaching one says nothing about the strength of the next.',
  },
  ja: {
    title: '1枚の厚い壁ではなく、独立した4枚の壁',
    desc: 'ビットコインのセキュリティーは単一の機構ではなく、互いに独立した4層の同心円構造だ。暗号学的保証(プルーフ・オブ・ワーク、署名、マークルコミットメント)が最も内側の壁を成す。コンセンサスルール(ブロック検証、チェーン選択)が次の壁。ネットワークアーキテクチャー(ゴシップ中継、ピアの多様性)が3番目の壁。経済的インセンティブ(ブロック報酬、ハッシュレートコスト)が最も外側の壁だ。攻撃者は意味のある成果を得るために4枚すべてを突破しなければならない。1枚を突破しても、その内側の壁の強度には何の影響もない。',
    l1: '暗号学的保証',
    l2: 'コンセンサス\nルール',
    l3: 'ネットワーク\nアーキテクチャー',
    l4: '経済的\nインセンティブ',
    center: '台帳の\n完全性',
    caption: '各壁が食い止める攻撃者の種類は異なる。1枚を突破できたことは、次の壁の強度について何も語らない。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 640, H = 460;
  const cx = 320, cy = 220;
  const radii = [60, 110, 160, 205];
  const colors = ['var(--color-satoshi)', 'var(--color-hero-subtitle)', 'var(--color-satoshi)', 'var(--color-hero-subtitle)'];
  const labels = [L.l1, L.l2, L.l3, L.l4];

  let rings = '';
  for (let i = radii.length - 1; i >= 0; i--) {
    rings += `<circle cx="${cx}" cy="${cy}" r="${radii[i]}" fill="${colors[i]}" opacity="0.08" stroke="${colors[i]}" stroke-width="2"/>`;
  }

  const centerR = 35;
  let ringLabels = '';
  const labelAngle = -55;
  const rad = (labelAngle * Math.PI) / 180;
  for (let i = 0; i < radii.length; i++) {
    const midR = i === 0 ? (centerR + radii[0]) / 2 : (radii[i] + radii[i - 1]) / 2;
    const lx = cx + midR * Math.cos(rad);
    const ly = cy + midR * Math.sin(rad);
    ringLabels += `<text x="${lx}" y="${ly}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(lx, ly - (labels[i].split('\n').length - 1) * 6, labels[i], 12)}</text>`;
  }

  const inner =
    ARROWHEAD_DEFS +
    rings +
    `<circle cx="${cx}" cy="${cy}" r="${centerR}" fill="var(--color-accent)" opacity="0.15" stroke="var(--color-accent)" stroke-width="2"/>` +
    `<text x="${cx}" y="${cy + 4}" text-anchor="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(cx, cy - 4, L.center, 13)}</text>` +
    ringLabels;

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
