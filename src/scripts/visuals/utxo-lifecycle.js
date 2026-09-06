// A UTXO's lifecycle as a receipt's life in a shared ledger: printed once,
// carried unchanged in that ledger for as long as it stays unspent, then
// torn up the instant it is used as payment -- it never comes back, and a
// new receipt is what gets carried forward.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A receipt is printed once, carried, then torn up for good',
    desc: 'A coinbase reward or a transaction output prints a new receipt. Once its block is confirmed, that receipt is added to the UTXO set -- the full ledger of every spendable receipt across the network, not just one wallet\'s. It stays there, unchanged, spendable by whoever holds the matching key, for as long as no one spends it. The moment it is referenced as an input in a new transaction, it is torn up and removed from the set for good; its prior state is kept in undo data only so a reorganization could restore it.',
    created: 'Printed:\ncoinbase reward or\ntransaction output',
    inSet: 'In the UTXO set --\nspendable by whoever\nholds the matching key',
    spent: 'Referenced as input\nin a new transaction',
    gone: 'Torn up for good --\nremoved from the set,\nkept only in undo data',
    caption: 'Nothing edits a receipt in place -- it is either whole and carried, or torn up and gone.',
  },
  ja: {
    title: 'レシートは一度だけ印刷され、持ち歩かれ、使われれば永久に破棄される',
    desc: 'コインベース報酬またはトランザクション出力が新しいレシートを印刷する。そのブロックが確認されると、そのレシートはUTXOセットに加わる。これは特定の1つのウォレットのものではなく、ネットワーク全体にわたる使用可能なレシート全部の台帳だ。対応する鍵を持つ者なら誰でも使える状態のまま、誰も使わない限りそこに変わらぬ姿で留まる。新しいトランザクションの入力として参照された瞬間、それは破り捨てられ、セットから永久に除去される。以前の状態はundoデータにのみ保持され、それは再編成が起きたときに復元できるようにするためだけのものだ。',
    created: '印刷される:\nコインベース報酬または\nトランザクション出力',
    inSet: 'UTXOセットの中 --\n対応する鍵を持つ者なら\n誰でも使える',
    spent: '新しいトランザクションの\n入力として参照される',
    gone: '永久に破棄 --\nセットから除去、\nundoデータにのみ残る',
    caption: 'レシートはその場で書き換えられることはない。丸ごと持ち歩かれているか、破り捨てられて無くなっているかのどちらかだ。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function receipt(x, y, w, h, colorVar, torn) {
  if (!torn) {
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${colorVar}" fill-opacity="0.12" stroke="${colorVar}" stroke-width="2"/>`;
  }
  const midY = y + h / 2;
  return (
    `<path d="M ${x},${y} L ${x + w * 0.45},${y + 2} L ${x + w * 0.4},${midY} L ${x + w * 0.5},${midY + 4} L ${x + w * 0.42},${y + h} L ${x},${y + h} Z" fill="${colorVar}" fill-opacity="0.12" stroke="${colorVar}" stroke-width="2"/>` +
    `<path d="M ${x + w * 0.58},${y + 3} L ${x + w},${y} L ${x + w},${y + h} L ${x + w * 0.6},${y + h - 2} L ${x + w * 0.5},${midY - 4} L ${x + w * 0.62},${midY} Z" fill="${colorVar}" fill-opacity="0.12" stroke="${colorVar}" stroke-width="2"/>`
  );
}

function box(x, y, w, h, label, opts = {}) {
  const { fill = 'var(--color-bg-alt)', stroke = 'var(--color-border)', fontSize = 10.5, fillOpacity = null } = opts;
  const lines = label.split('\n').length;
  const cy = y + h / 2 - (lines - 1) * 6;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" ${fillOpacity !== null ? `fill-opacity="${fillOpacity}"` : ''} stroke="${stroke}" stroke-width="1.5"/>` +
    `<text x="${x + w / 2}" y="${cy}" text-anchor="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, cy, label, 12)}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 930, H = 160;
  const boxW = 180, boxH = 60;
  const y = 70;
  const iconY = 10;

  const createdX = 20, inSetX = 250, spentX = 500, goneX = 720;

  const inner =
    ARROWHEAD_DEFS +
    receipt(createdX + boxW / 2 - 20, iconY, 40, 32, 'var(--color-hero-subtitle)', false) +
    box(createdX, y, boxW, boxH, L.created) +
    arrow(createdX + boxW, y + boxH / 2, inSetX, y + boxH / 2, {}) +
    receipt(inSetX + boxW / 2 - 20, iconY, 40, 32, 'var(--color-hero-subtitle)', false) +
    box(inSetX, y, boxW, boxH, L.inSet, { fill: 'var(--color-hero-subtitle)', fillOpacity: 0.12, stroke: 'var(--color-hero-subtitle)' }) +
    arrow(inSetX + boxW, y + boxH / 2, spentX, y + boxH / 2, {}) +
    box(spentX, y, boxW - 20, boxH, L.spent, { stroke: 'var(--color-satoshi)' }) +
    arrow(spentX + boxW - 20, y + boxH / 2, goneX, y + boxH / 2, {}) +
    receipt(goneX + boxW / 2 - 20, iconY, 40, 32, 'var(--color-satoshi)', true) +
    box(goneX, y, boxW, boxH, L.gone, { stroke: 'var(--color-satoshi)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
