// Block validation as a row of security checkpoints: a block walks through
// six gates in sequence, and failing any single one turns it away -- there
// is no partial credit and no gate is optional.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A block passes six checkpoints, or none of them count',
    desc: 'An incoming block walks a row of checkpoints -- proof of work, timestamp, size, Merkle root, coinbase, transactions -- in sequence. Failing any single gate turns the whole block away; passing five out of six is the same as passing zero.',
    gates: ['PoW', 'Time-\nstamp', 'Size', 'Merkle\nroot', 'Coinbase', 'Txs'],
    block: 'New\nblock',
    accept: 'Accept,\nupdate chain',
    reject: 'Reject',
    caption: 'One failed gate rejects the whole block -- there is no such thing as a mostly-valid block.',
  },
  ja: {
    title: 'ブロックは 6 つの関所をすべて通るか、1 つも通らないかのどちらか',
    desc: '届いたブロックは、プルーフ・オブ・ワーク・タイムスタンプ・サイズ・マークルルート・コインベース・トランザクションという関所を順番に通る。どれか 1 つでも不合格ならブロック全体が却下される。6 つ中 5 つ合格しても 0 個合格と同じ扱いになる。',
    gates: ['PoW', 'タイム\nスタンプ', 'サイズ', 'マークル\nルート', 'コイン\nベース', 'Tx'],
    block: '新規\nブロック',
    accept: '受理、\nチェーン更新',
    reject: '却下',
    caption: '1 つでも不合格なら全体が却下される。「だいたい有効なブロック」というものは存在しない。',
  },
};

function gate(cx, y, label) {
  const w = 52, h = 56;
  return (
    `<rect x="${cx - w / 2}" y="${y}" width="${w}" height="${h}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${cx}" y="${y + h / 2}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${label.split('\n').map((l, i, arr) => `<tspan x="${cx}" dy="${i === 0 ? -((arr.length - 1) * 6) : 12}">${esc(l)}</tspan>`).join('')}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 780, H = 235;
  const y = 90;
  const startX = 110;
  const step = 70;
  const gates = L.gates.map((g, i) => gate(startX + i * step, y, g)).join('');
  const arrows = L.gates
    .slice(0, -1)
    .map((_, i) => arrow(startX + i * step + 26, y + 28, startX + (i + 1) * step - 26, y + 28, {}))
    .join('');
  const dropArrows = L.gates
    .map((_, i) => arrow(startX + i * step, y + 56, startX + i * step, y + 90, { dashed: true, stroke: 'var(--color-satoshi)' }))
    .join('');
  const inner =
    ARROWHEAD_DEFS +
    `<text x="40" y="${y + 33}" text-anchor="middle" fill="var(--color-text)" font-size="11.5" font-family="var(--font-body, sans-serif)">${L.block.split('\n').map((l, i) => `<tspan x="40" y="${y + 24 + i * 15}">${esc(l)}</tspan>`).join('')}</text>` +
    arrow(70, y + 28, startX - 26, y + 28, {}) +
    gates +
    arrows +
    dropArrows +
    `<rect x="${startX - 26}" y="${y + 90}" width="${(L.gates.length - 1) * step + 52}" height="40" rx="6" fill="var(--color-satoshi)" opacity="0.1" stroke="var(--color-satoshi)" stroke-width="1.5"/>` +
    `<text x="${startX + ((L.gates.length - 1) * step) / 2}" y="${y + 114}" text-anchor="middle" fill="var(--color-satoshi)" font-size="12" font-family="var(--font-body, sans-serif)">${esc(L.reject)}</text>` +
    arrow(startX + (L.gates.length - 1) * step + 26, y + 28, startX + (L.gates.length - 1) * step + 100, y + 28, {}) +
    `<rect x="${startX + (L.gates.length - 1) * step + 100}" y="${y - 6}" width="90" height="68" rx="8" fill="var(--color-accent)" opacity="0.1" stroke="var(--color-accent)" stroke-width="2"/>` +
    `<text x="${startX + (L.gates.length - 1) * step + 145}" y="${y + 24}" text-anchor="middle" fill="var(--color-text)" font-size="11" font-family="var(--font-body, sans-serif)">${L.accept.split('\n').map((l, i) => `<tspan x="${startX + (L.gates.length - 1) * step + 145}" y="${y + 24 + i * 14}">${esc(l)}</tspan>`).join('')}</text>`;
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
