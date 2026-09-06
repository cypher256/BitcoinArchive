// Two competing chains as a forked track: when two miners find a block at
// nearly the same time the chain briefly splits, and everyone eventually
// follows whichever branch has more total mining effort behind it -- shown
// here as extra blocks, since each additional block means more effort spent.
import { svgFigure, esc, ARROWHEAD_DEFS } from './_shared.js';

const LABELS = {
  en: {
    title: 'Chains race, the one with more work wins',
    desc: 'When two miners find a valid block at almost the same time, the network briefly splits into two competing chains. Everyone keeps mining on whichever chain they saw first, but as soon as one branch has more total mining effort behind it -- usually just whichever one gets one more block first -- the whole network switches to it and the other branch is abandoned.',
    shared: 'shared history',
    winner: 'more work behind it -- everyone follows this one',
    loser: 'less work behind it -- abandoned',
    caption: 'The branch with more total mining effort behind it wins; the other is dropped, and the work spent on it is wasted.',
  },
  ja: {
    title: '鎖は競争し、労力の多い方が勝つ',
    desc: '2人のマイナーがほぼ同時に有効なブロックを見つけると、ネットワークは一時的に2本の鎖に分かれる。誰もが最初に見た鎖の上で採掘を続けるが、どちらか一方に注ぎ込まれた採掘労力の総量が上回ると(たいていは1ブロックでも先に伸びたほう)、ネットワーク全体がそちらへ乗り換え、もう一方の鎖は捨てられる。',
    shared: '共有の履歴',
    winner: '労力がより多い -- 全員がこちらに従う',
    loser: '労力がより少ない -- 捨てられる',
    caption: '注ぎ込まれた採掘労力の総量がより多い枝が勝つ。もう一方は捨てられ、そこに費やされた労力は無駄になる。',
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
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
