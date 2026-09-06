// Bitcoin's five layers as a building: two independent foundations (network
// and storage) support the load-bearing consensus layer, which in turn
// supports the transaction layer and the roof of user-facing applications
// -- each layer depends only on what sits below it, never above.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Two foundations, then a load-bearing wall, then the roof',
    desc: 'Bitcoin\'s design stacks into five layers, each depending only on what is below it. Two independent foundations -- the network layer (P2P gossip, peer discovery) and the storage layer (block files, UTXO database) -- both support the consensus layer above them (block validation, most-work chain selection). Consensus in turn supports the transaction layer (the UTXO model, Script), which supports the roof: the application layer where wallets, explorers, and Lightning actually live.',
    app: 'Application\n(wallets, explorers,\nLightning, exchanges)',
    txn: 'Transaction\n(UTXO model, Script,\nsignatures)',
    cons: 'Consensus\n(block validation,\nmost-work chain)',
    net: 'Network\n(P2P gossip,\npeer discovery)',
    store: 'Storage\n(block files,\nUTXO database)',
    caption: 'Two independent foundations carry the same load-bearing wall -- neither layer above ever depends on what sits above it.',
  },
  ja: {
    title: '2つの土台、その上の耐力壁、そして屋根',
    desc: 'ビットコインの設計は5つの層に積み重なり、各層は自分より下の層にのみ依存する。ネットワーク層(P2Pゴシップ、ピア発見)とストレージ層(ブロックファイル、UTXOデータベース)という2つの独立した土台が、共にその上の合意層(ブロック検証、最多ワークチェーン選択)を支える。合意層はさらにトランザクション層(UTXOモデル、スクリプト)を支え、それが屋根、すなわちウォレット・エクスプローラー・Lightningが実際に暮らすアプリケーション層を支える。',
    app: 'アプリケーション\n(ウォレット、\nエクスプローラー、\nLightning、取引所)',
    txn: 'トランザクション\n(UTXOモデル、\nスクリプト、署名)',
    cons: '合意層\n(ブロック検証、\n最多ワークチェーン)',
    net: 'ネットワーク\n(P2Pゴシップ、\nピア発見)',
    store: 'ストレージ\n(ブロックファイル、\nUTXOデータベース)',
    caption: '2つの独立した土台が同じ耐力壁を支える。どちらの層も、自分より上にある層に依存することは一度もない。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
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
  const W = 620, H = 400;
  const boxW = 300, boxH = 60;
  const cx = W / 2;

  const appY = 20, txnY = 100, consY = 180;
  const foundationY = 280;
  const netX = cx - 280 + 40, storeX = cx + 280 - 40 - boxW * 0.55;

  const halfW = boxW * 0.55;

  const inner =
    ARROWHEAD_DEFS +
    box(cx - boxW / 2, appY, boxW, boxH, L.app, { fill: 'var(--color-hero-subtitle)', fillOpacity: 0.12, stroke: 'var(--color-hero-subtitle)' }) +
    arrow(cx, appY + boxH, cx, txnY, {}) +
    box(cx - boxW / 2, txnY, boxW, boxH, L.txn) +
    arrow(cx, txnY + boxH, cx, consY, {}) +
    box(cx - boxW / 2, consY, boxW, boxH, L.cons, { stroke: 'var(--color-satoshi)' }) +
    `<path d="M ${cx - 60},${consY + boxH} V ${consY + boxH + 30} H ${netX + halfW / 2} V ${foundationY}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<path d="M ${cx + 60},${consY + boxH} V ${consY + boxH + 30} H ${storeX + halfW / 2} V ${foundationY}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(netX, foundationY, halfW, boxH, L.net, { fill: 'var(--color-accent)', fillOpacity: 0.1, stroke: 'var(--color-accent)' }) +
    box(storeX, foundationY, halfW, boxH, L.store, { fill: 'var(--color-accent)', fillOpacity: 0.1, stroke: 'var(--color-accent)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
