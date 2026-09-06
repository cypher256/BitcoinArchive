// Block retrieval as a library card catalog: the block index is not the
// block itself, only a card that names which shelf (file) and which exact
// spot on it (byte offset) holds it -- so the node goes straight to the
// block without ever scanning the shelves.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A card catalog, not a search through the shelves',
    desc: 'A block hash is looked up in the block index, a card catalog that names exactly which shelf (which blk*.dat file) and which spot on it (a byte offset) holds the block -- not the block\'s contents themselves. The node reads directly from that file and offset, deserializes the block, and never scans the shelves looking for it.',
    hash: 'Block hash',
    index: 'Block index\n(the card catalog,\nLevelDB)',
    card: 'Card says:\nshelf blk00042.dat,\nspot 0x1A3F00',
    shelf: 'Go straight to\nthat shelf and spot',
    read: 'Read and deserialize --\nno shelf ever searched',
    caption: 'The catalog card is not the book -- it only says where the book sits, so no shelf is ever searched.',
  },
  ja: {
    title: '棚を探し回るのではなく、目録カードを引く',
    desc: 'ブロックハッシュはブロックインデックス、すなわち目録カードで引かれる。それはどの棚(どのblk*.datファイル)のどの位置(バイトオフセット)にブロックがあるかを正確に示すだけで、ブロックの中身そのものではない。ノードはそのファイルとオフセットから直接読み込んでブロックを復元し、棚を探し回ることは一度もない。',
    hash: 'ブロックハッシュ',
    index: 'ブロックインデックス\n(目録カード、\nLevelDB)',
    card: 'カードの記載:\n棚 blk00042.dat、\n位置 0x1A3F00',
    shelf: 'その棚のその位置へ\n直行する',
    read: 'そこから読み込み復元 --\n棚探しは一度もない',
    caption: '目録カードは本そのものではない。本の場所を示すだけなので、棚を探し回ることは一度もない。',
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

function cardIcon(cx, cy, colorVar) {
  return (
    `<rect x="${cx - 22}" y="${cy - 16}" width="44" height="32" rx="2" fill="${colorVar}" fill-opacity="0.12" stroke="${colorVar}" stroke-width="2"/>` +
    `<line x1="${cx - 14}" y1="${cy - 6}" x2="${cx + 14}" y2="${cy - 6}" stroke="${colorVar}" stroke-width="1.5"/>` +
    `<line x1="${cx - 14}" y1="${cy}" x2="${cx + 14}" y2="${cy}" stroke="${colorVar}" stroke-width="1.5"/>` +
    `<line x1="${cx - 14}" y1="${cy + 6}" x2="${cx + 6}" y2="${cy + 6}" stroke="${colorVar}" stroke-width="1.5"/>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 860, H = 260;
  const boxW = 150, boxH = 56;
  const y = 90;

  const hashX = 20, indexX = 190, cardX = 360, shelfX = 540, readX = 700;

  const inner =
    ARROWHEAD_DEFS +
    box(hashX, y, boxW, boxH, L.hash) +
    arrow(hashX + boxW, y + boxH / 2, indexX, y + boxH / 2, {}) +
    cardIcon(indexX + boxW / 2, y - 30, 'var(--color-hero-subtitle)') +
    box(indexX, y, boxW, boxH, L.index, { stroke: 'var(--color-hero-subtitle)' }) +
    arrow(indexX + boxW, y + boxH / 2, cardX, y + boxH / 2, {}) +
    box(cardX, y, boxW, boxH, L.card, { fill: 'var(--color-hero-subtitle)', fillOpacity: 0.12, stroke: 'var(--color-hero-subtitle)' }) +
    arrow(cardX + boxW, y + boxH / 2, shelfX, y + boxH / 2, {}) +
    box(shelfX, y, boxW, boxH, L.shelf) +
    arrow(shelfX + boxW, y + boxH / 2, readX, y + boxH / 2, {}) +
    box(readX, y, boxW, boxH, L.read, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
