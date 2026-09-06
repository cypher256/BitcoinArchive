// A block as a shipping parcel: a label strip of six fixed-size fields
// (the 80-byte header) sits on top of the actual contents (the transaction
// list) -- the Merkle root field is a compact stamp summarizing everything
// inside, and the previous-hash field is what ties this parcel to the one
// before it.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A block is a label strip on top of its contents',
    desc: 'The 80-byte header is six fixed-size label fields sitting on top of the actual contents, the transaction list. The Merkle root field is a compact stamp summarizing every transaction inside; the previous-hash field ties this parcel to the one before it.',
    prevBlock: 'Block N−1',
    blockTitle: 'Block N',
    headerTitle: 'Header (80 bytes)',
    fields: ['Version (4B)', 'Previous hash (32B)', 'Merkle root (32B)', 'Timestamp (4B)', 'nBits (4B)', 'Nonce (4B)'],
    txListTitle: 'Transaction list',
    txs: ['Coinbase', 'Tx 1', 'Tx 2', '···', 'Tx k'],
    merkleNote: 'summarizes',
    prevNote: 'links to',
    caption: 'The header is a compact label; only the Merkle root field ties it to the actual contents underneath.',
  },
  ja: {
    title: 'ブロックは中身の上に載った送り状',
    desc: '80バイトのヘッダーは、実際の中身(トランザクションリスト)の上に載った6つの固定長ラベル欄である。マークルルート欄は中身の全トランザクションを要約した圧縮印であり、前ハッシュ欄はこの荷物を1つ前の荷物へつなぐ。',
    prevBlock: 'ブロック N−1',
    blockTitle: 'ブロック N',
    headerTitle: 'ヘッダー (80 バイト)',
    fields: ['バージョン (4B)', '前ハッシュ (32B)', 'マークルルート (32B)', 'タイムスタンプ (4B)', 'nBits (4B)', 'ナンス (4B)'],
    txListTitle: 'トランザクションリスト',
    txs: ['コインベース', 'Tx 1', 'Tx 2', '···', 'Tx k'],
    merkleNote: '要約',
    prevNote: 'リンク',
    caption: 'ヘッダーは圧縮ラベルにすぎない。中身と結びつけているのはマークルルート欄だけだ。',
  },
};

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 760, H = 340;
  const blockX = 200, blockY = 20, blockW = 420, blockH = 300;
  const fieldX = blockX + 20, fieldW = blockW - 60, fieldH = 26, fieldGap = 4;
  const headerY = blockY + 34;

  const fields = L.fields
    .map((f, i) => {
      const y = headerY + i * (fieldH + fieldGap);
      return (
        `<rect x="${fieldX}" y="${y}" width="${fieldW}" height="${fieldH}" rx="4" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1"/>` +
        `<text x="${fieldX + 10}" y="${y + fieldH / 2}" dominant-baseline="middle" fill="var(--color-text)" font-size="11.5" font-family="var(--font-body, sans-serif)">${esc(f)}</text>`
      );
    })
    .join('');

  const txListY = headerY + L.fields.length * (fieldH + fieldGap) + 16;
  const txListH = blockY + blockH - txListY - 14;
  const txW = (fieldW - (L.txs.length - 1) * 8) / L.txs.length;
  const txs = L.txs
    .map((t, i) => {
      const x = fieldX + i * (txW + 8);
      return (
        `<rect x="${x}" y="${txListY}" width="${txW}" height="${txListH}" rx="4" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1"/>` +
        `<text x="${x + txW / 2}" y="${txListY + txListH / 2}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${esc(t)}</text>`
      );
    })
    .join('');

  const merkleY = headerY + 2 * (fieldH + fieldGap) + fieldH / 2;
  const prevY = headerY + 1 * (fieldH + fieldGap) + fieldH / 2;
  const prevBlockX = 20, prevBlockY = prevY - 25, prevBlockW = 130, prevBlockH = 50;

  const inner =
    ARROWHEAD_DEFS +
    `<rect x="${blockX}" y="${blockY}" width="${blockW}" height="${blockH}" rx="10" fill="none" stroke="var(--color-satoshi)" stroke-width="2"/>` +
    `<text x="${blockX + blockW / 2}" y="${blockY + 18}" text-anchor="middle" fill="var(--color-satoshi)" font-size="13" font-weight="600" font-family="var(--font-body, sans-serif)">${esc(L.blockTitle)}</text>` +
    fields +
    txs +
    `<text x="${fieldX}" y="${txListY - 6}" fill="var(--color-text-muted)" font-size="10.5" font-family="var(--font-body, sans-serif)">${esc(L.txListTitle)}</text>` +
    `<rect x="${prevBlockX}" y="${prevBlockY}" width="${prevBlockW}" height="${prevBlockH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${prevBlockX + prevBlockW / 2}" y="${prevBlockY + prevBlockH / 2}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="11.5" font-family="var(--font-body, sans-serif)">${esc(L.prevBlock)}</text>` +
    arrow(fieldX, prevY, prevBlockX + prevBlockW, prevY, { dashed: true }) +
    `<text x="${(fieldX + prevBlockX + prevBlockW) / 2}" y="${prevY - 8}" text-anchor="middle" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${esc(L.prevNote)}</text>` +
    `<path d="M ${fieldX + fieldW},${merkleY} h 28 V ${txListY - 12} H ${fieldX + fieldW / 2} V ${txListY - 4}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" stroke-dasharray="5,4" marker-end="url(#v-arrowhead)"/>` +
    `<text x="${fieldX + fieldW + 6}" y="${(merkleY + txListY - 12) / 2}" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${esc(L.merkleNote)}</text>`;

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
