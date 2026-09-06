// The mempool as a waiting room: broadcast transactions sit loose until a
// miner seats a batch of them into the next departing block.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'From waiting room to block',
    desc: 'Broadcast transactions sit loose in a shared waiting room until a miner picks a batch of them and seats them into the next block that departs. Transactions left behind simply wait for the next one.',
    waiting: 'Waiting room\n(the mempool)',
    departing: 'Next block\n(departing now)',
    left: 'still waiting\nfor next time',
    tx: 'tx',
  },
  ja: {
    title: '待合室からブロックへ',
    desc: '送信された取引は、いったん共有の待合室に集まる。マイナーがその中からいくつかを選び、次に出発するブロックに座らせる。選ばれなかった取引は、次の機会を待つだけ。',
    waiting: '待合室\n(メモリプール)',
    departing: '次のブロック\n(まもなく出発)',
    left: '次を待つ',
    tx: 'tx',
  },
};

function txDot(x, y, r = 16) {
  return (
    `<circle cx="${x}" cy="${y}" r="${r}" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${x}" y="${y + 4}" text-anchor="middle" fill="var(--color-text-muted)" font-size="10" font-family="var(--font-mono, monospace)">tx</text>`
  );
}

function seat(x, y, filled) {
  const stroke = filled ? 'var(--color-hero-subtitle)' : 'var(--color-border)';
  return (
    `<rect x="${x}" y="${y}" width="34" height="34" rx="5" fill="${filled ? 'var(--color-hero-subtitle)' : 'var(--color-bg-alt)'}" opacity="${filled ? '0.18' : '1'}" stroke="${stroke}" stroke-width="1.5"/>` +
    (filled ? `<text x="${x + 17}" y="${y + 22}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-mono, monospace)">tx</text>` : '')
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 640, H = 280;

  const waitingDots = [
    [55, 100], [105, 90], [150, 120], [65, 150], [125, 175], [50, 195], [165, 100], [175, 165],
  ].map(([x, y]) => txDot(x, y)).join('');

  const seats = [];
  for (let r = 0; r < 2; r++) {
    for (let c = 0; c < 3; c++) {
      seats.push(seat(430 + c * 45, 95 + r * 45, true));
    }
  }

  const inner =
    ARROWHEAD_DEFS +
    `<rect x="20" y="20" width="220" height="200" rx="14" fill="none" stroke="var(--color-border)" stroke-width="2" stroke-dasharray="6,5"/>` +
    `<text x="130" y="45" text-anchor="middle" fill="var(--color-text-muted)" font-size="12.5" font-family="var(--font-body, sans-serif)">${L.waiting.split('\n').map((l, i) => `<tspan x="130" y="${45 + i * 15}">${esc(l)}</tspan>`).join('')}</text>` +
    waitingDots +
    arrow(250, 120, 415, 120, {}) +
    `<rect x="410" y="30" width="180" height="170" rx="10" fill="var(--color-accent)" opacity="0.08" stroke="var(--color-accent)" stroke-width="2"/>` +
    `<text x="500" y="52" text-anchor="middle" fill="var(--color-text)" font-size="12.5" font-family="var(--font-body, sans-serif)">${L.departing.split('\n').map((l, i) => `<tspan x="500" y="${52 + i * 15}">${esc(l)}</tspan>`).join('')}</text>` +
    seats.join('') +
    `<text x="130" y="245" text-anchor="middle" fill="var(--color-text-muted)" font-size="11.5" font-family="var(--font-body, sans-serif)">${esc(L.left)}</text>`;
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner });
}
