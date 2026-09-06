// UTXO lookup as checking a desk drawer before the basement archive: the
// node checks its in-memory cache (the drawer) first, and only descends to
// the on-disk database (the basement) on a miss -- because most lookups hit
// the drawer, the basement trip is the exception, not the rule.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Check the desk drawer before the basement archive',
    desc: 'When a transaction input references an existing coin, the node checks its in-memory cache first, like a desk drawer within arm\'s reach. If the coin is there, it is used immediately. Only on a miss does the node descend to the on-disk database, like a basement archive, and pull the record back up.',
    input: 'Transaction input\n(references a coin\nby txid + index)',
    drawer: 'Desk drawer\n(coins cache,\nin memory)',
    hit: 'Found --\nfast path',
    miss: 'Not in\nthe drawer',
    basement: 'Basement archive\n(coins database,\non disk)',
    found: 'Found --\nload into\nthe drawer',
    notfound: 'Not found anywhere --\ninput does not exist,\ntransaction invalid',
    caption: 'Most lookups never leave the drawer -- the basement trip is the exception the cache exists to avoid.',
  },
  ja: {
    title: '地下書庫へ行く前に、机の引き出しを見る',
    desc: 'トランザクション入力が既存のコインを参照するとき、ノードはまず手の届く机の引き出しにあたる、メモリー上のキャッシュを確認する。そこにあれば即座に使われる。見つからなかったときだけ、地下書庫にあたるディスク上のデータベースまで降りて記録を取りに行く。',
    input: 'トランザクション入力\n(txid + indexで\nコインを参照)',
    drawer: '机の引き出し\n(コインキャッシュ、\nメモリー上)',
    hit: '見つかった --\n高速経路',
    miss: '引き出しには\ない',
    basement: '地下書庫\n(コインデータベース、\nディスク上)',
    found: '見つかった --\n引き出しへ\n読み込む',
    notfound: 'どこにも見つからない --\n入力が存在しない、\nトランザクション無効',
    caption: 'ほとんどの検索は引き出しの外に出ない。地下書庫行きは、キャッシュがまさに避けようとしている例外だ。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function box(x, y, w, h, label, opts = {}) {
  const { fill = 'var(--color-bg-alt)', stroke = 'var(--color-border)', fontSize = 10.5, fillOpacity = null, dashed = false } = opts;
  const lines = label.split('\n').length;
  const cy = y + h / 2 - (lines - 1) * 6;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" ${fillOpacity !== null ? `fill-opacity="${fillOpacity}"` : ''} stroke="${stroke}" stroke-width="1.5" ${dashed ? 'stroke-dasharray="4,3"' : ''}/>` +
    `<text x="${x + w / 2}" y="${cy}" text-anchor="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, cy, label, 12)}</text>`
  );
}

function drawerIcon(cx, cy, colorVar) {
  return (
    `<rect x="${cx - 30}" y="${cy - 14}" width="60" height="28" rx="3" fill="${colorVar}" fill-opacity="0.12" stroke="${colorVar}" stroke-width="2"/>` +
    `<rect x="${cx - 12}" y="${cy - 3}" width="24" height="5" rx="2" fill="${colorVar}"/>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 780, H = 420;
  const boxW = 160, boxH = 56;

  const inputX = 30, inputY = 55;
  const drawerX = 300, drawerY = 55;
  const basementX = 300, basementY = 220;
  const foundX = 560, foundY = 220;
  const notfoundX = 560, notfoundY = 340;

  const inner =
    ARROWHEAD_DEFS +
    box(inputX, inputY, boxW, boxH, L.input) +
    arrow(inputX + boxW, inputY + boxH / 2, drawerX, drawerY + boxH / 2, {}) +
    drawerIcon(drawerX + boxW / 2, drawerY - 25, 'var(--color-hero-subtitle)') +
    box(drawerX, drawerY, boxW, boxH, L.drawer, { stroke: 'var(--color-hero-subtitle)' }) +
    `<path d="M ${drawerX + boxW},${drawerY + boxH - 4} H ${foundX + boxW / 2 - 40} V ${foundY}" fill="none" stroke="var(--color-accent)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<text x="${drawerX + boxW + 12}" y="${drawerY + boxH - 34}" fill="var(--color-accent)" font-size="9.5" font-family="var(--font-body, sans-serif)">${multiline(drawerX + boxW + 12, drawerY + boxH - 34, L.hit, 12)}</text>` +
    arrow(drawerX + boxW / 2, drawerY + boxH, basementX + boxW / 2, basementY, {}) +
    `<text x="${drawerX + boxW / 2 + 12}" y="${drawerY + boxH + 20}" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${multiline(drawerX + boxW / 2 + 12, drawerY + boxH + 20, L.miss, 12)}</text>` +
    box(basementX, basementY, boxW, boxH, L.basement, { stroke: 'var(--color-satoshi)' }) +
    arrow(basementX + boxW, basementY + boxH / 2 - 10, foundX, foundY + boxH / 2 - 10, {}) +
    box(foundX, foundY, boxW, boxH, L.found, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' }) +
    arrow(basementX + boxW / 2, basementY + boxH, notfoundX, notfoundY + boxH / 2, {}) +
    box(notfoundX, notfoundY, boxW + 20, boxH, L.notfound, { stroke: 'var(--color-satoshi)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
