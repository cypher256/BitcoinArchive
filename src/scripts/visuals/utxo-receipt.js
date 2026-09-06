// "A bitcoin is a receipt, not a coin" -- illustrates the UTXO model as two
// old receipts (existing UTXOs) being consumed to print two new receipts
// (a payment and change), rather than as a flowchart of labeled boxes.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A bitcoin as a receipt',
    desc: 'Two existing receipts (UTXOs) are torn up and used to print two new receipts: one to a friend, one back to you as change.',
    have: 'You hold',
    r1: 'Receipt A\n0.7 BTC',
    r2: 'Receipt B\n0.5 BTC',
    spend: 'You spend',
    r3: 'New receipt\nto friend\n1.0 BTC',
    r4: 'New receipt\nto you\n(change)\n0.199 BTC',
    caption: 'Spending does not edit a receipt -- it consumes whole ones and prints new ones.',
  },
  ja: {
    title: 'ビットコインはレシート',
    desc: '既存の2枚のレシート(UTXO)を使い切り、友人への支払いと自分へのお釣りという新しい2枚のレシートを発行する。',
    have: '手元にある',
    r1: 'レシート A\n0.7 BTC',
    r2: 'レシート B\n0.5 BTC',
    spend: '支払う',
    r3: '新しいレシート\n友人へ\n1.0 BTC',
    r4: '新しいレシート\n自分へ\n(お釣り)\n0.199 BTC',
    caption: '使うたびにレシートを書き換えるのではなく、丸ごと使い切って新しいレシートを発行する。',
  },
};

function receipt(x, y, w, h, lines) {
  const zig = [];
  const teeth = 6;
  const tw = w / teeth;
  for (let i = 0; i <= teeth; i++) {
    zig.push(`${x + i * tw},${y + h + (i % 2 === 0 ? 0 : 8)}`);
  }
  const path = `M${x},${y} L${x + w},${y} L${x + w},${y + h} L${zig.reverse().join(' L')} Z`;
  const textLines = lines.split('\n');
  const startY = y + h / 2 - ((textLines.length - 1) * 15) / 2;
  const text = textLines
    .map((l, i) => `<tspan x="${x + w / 2}" y="${startY + i * 16}">${esc(l)}</tspan>`)
    .join('');
  return (
    `<path d="${path}" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text text-anchor="middle" fill="var(--color-text)" font-size="12.5" font-family="var(--font-body, sans-serif)">${text}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 620, H = 260;
  const inner =
    ARROWHEAD_DEFS +
    `<text x="90" y="30" text-anchor="middle" fill="var(--color-text-muted)" font-size="13" font-family="var(--font-body, sans-serif)">${esc(L.have)}</text>` +
    receipt(20, 45, 140, 80, L.r1) +
    receipt(20, 150, 140, 80, L.r2) +
    arrow(170, 90, 260, 130, {}) +
    arrow(170, 190, 260, 140, {}) +
    `<text x="310" y="30" text-anchor="middle" fill="var(--color-text-muted)" font-size="13" font-family="var(--font-body, sans-serif)">${esc(L.spend)}</text>` +
    `<circle cx="310" cy="135" r="45" fill="none" stroke="var(--color-accent)" stroke-width="2" stroke-dasharray="4,4"/>` +
    arrow(355, 120, 445, 75, {}) +
    arrow(355, 150, 445, 195, {}) +
    receipt(460, 30, 150, 90, L.r3) +
    receipt(460, 150, 150, 100, L.r4);
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
