// Two competing chains as a forked track: when two miners find a block at
// nearly the same time the chain briefly splits, and everyone eventually
// follows whichever branch grows longer.
import { svgFigure, esc, ARROWHEAD_DEFS } from './_shared.js';

const LABELS = {
  en: {
    title: 'Chains race, the longest wins',
    desc: 'When two miners find a valid block at almost the same time, the network briefly splits into two competing chains. Everyone keeps mining on whichever chain they saw first, but as soon as one branch pulls ahead by one more block, the whole network switches to it and the shorter branch is abandoned.',
    shared: 'shared history',
    winner: 'longer chain -- everyone follows this one',
    loser: 'shorter chain -- abandoned',
  },
  ja: {
    title: '鎖は競争し、長い方が勝つ',
    desc: '2人のマイナーがほぼ同時に有効なブロックを見つけると、ネットワークは一時的に2本の鎖に分かれる。誰もが最初に見た鎖の上で採掘を続けるが、どちらか一方が1ブロックでも先に伸びると、ネットワーク全体がそちらへ乗り換え、短い方の鎖は捨てられる。',
    shared: '共有の履歴',
    winner: '長い方の鎖 -- 全員がこちらに従う',
    loser: '短い方の鎖 -- 捨てられる',
  },
};

function block(x, y, faded) {
  const stroke = faded ? 'var(--color-border)' : 'var(--color-hero-subtitle)';
  const fill = faded ? 'var(--color-bg-alt)' : 'var(--color-hero-subtitle)';
  const opacity = faded ? '1' : '0.15';
  return `<rect x="${x}" y="${y}" width="46" height="46" rx="6" fill="${fill}" opacity="${opacity}" stroke="${stroke}" stroke-width="${faded ? 1.5 : 2.5}" stroke-dasharray="${faded ? '4,4' : 'none'}"/>`;
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 640, H = 260;
  const sharedY = 107;
  const topY = 40;
  const botY = 174;

  const sharedBlocks = [40, 100, 160].map((x) => block(x, sharedY, false)).join('');
  const trunkLine = `<line x1="86" y1="${sharedY + 23}" x2="220" y2="${sharedY + 23}" stroke="var(--color-hero-subtitle)" stroke-width="2.5"/>`;
  const forkTop = `<path d="M220,${sharedY + 23} L280,${topY + 23}" stroke="var(--color-satoshi)" stroke-width="2.5" fill="none"/>`;
  const forkBot = `<path d="M220,${sharedY + 23} L280,${botY + 23}" stroke="var(--color-text-muted)" stroke-width="2" stroke-dasharray="4,4" fill="none"/>`;

  const topBlocks = [280, 340, 400, 460].map((x) => block(x, topY, false)).join('');
  const topLine = `<line x1="326" y1="${topY + 23}" x2="454" y2="${topY + 23}" stroke="var(--color-satoshi)" stroke-width="2.5"/>`;

  const botBlocks = [280, 340].map((x) => block(x, botY, true)).join('');
  const botLine = `<line x1="326" y1="${botY + 23}" x2="336" y2="${botY + 23}" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="4,4"/>`;

  const inner =
    ARROWHEAD_DEFS +
    `<text x="105" y="${sharedY - 14}" text-anchor="middle" fill="var(--color-text-muted)" font-size="12" font-family="var(--font-body, sans-serif)">${esc(L.shared)}</text>` +
    sharedBlocks +
    trunkLine +
    forkTop +
    forkBot +
    topBlocks +
    topLine +
    `<text x="370" y="${topY - 12}" text-anchor="middle" fill="var(--color-satoshi)" font-size="12.5" font-family="var(--font-body, sans-serif)">${esc(L.winner)}</text>` +
    botBlocks +
    botLine +
    `<text x="330" y="${botY + 66}" text-anchor="middle" fill="var(--color-text-muted)" font-size="12.5" font-family="var(--font-body, sans-serif)">${esc(L.loser)}</text>`;
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner });
}
