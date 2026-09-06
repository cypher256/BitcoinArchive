// assumeUTXO as moving into a house with a trusted set of keys before the
// deed history is checked: the node starts living in the house immediately
// (validating new blocks against the snapshot), while a background process
// independently re-derives the entire deed history from scratch and
// compares it against the keys it started with.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Move in on trusted keys, verify the deed history later',
    desc: 'The node loads a UTXO snapshot -- like moving into a house on a set of keys it trusts because their shape matches a hardcoded hash -- and immediately starts validating new blocks and relaying transactions from that point. In the background, an independent process re-derives the entire history from genesis, exactly as a traditional sync would. When that background process reaches the snapshot height, it compares its own independently-built UTXO set against the snapshot: a match means the trust was justified all along.',
    snapshot: 'Load UTXO\nsnapshot',
    verify: 'Snapshot hash\nmatches the\nhardcoded one',
    live: 'Node is live:\nvalidates new blocks,\nrelays transactions',
    background: 'Background:\nre-derive full history\nfrom genesis',
    compare: 'Compare against\nthe snapshot at\nthat same height',
    match: 'Match --\nmerge into one\nchain state',
    caption: 'The keys work from day one; the deed history is checked independently, not taken on faith forever.',
  },
  ja: {
    title: '信頼できる鍵で先に住み始め、権利書の履歴は後で確認する',
    desc: 'ノードはUTXOスナップショットを読み込む。これはハードコードされたハッシュと形が一致するために信頼できる鍵一式を使って家に住み始めるようなものであり、その時点から即座に新しいブロックを検証し、トランザクションを中継し始める。裏側では独立したプロセスが、従来の同期とまったく同じように、ジェネシスから履歴全体を再導出している。その背景プロセスがスナップショットの高さに到達すると、自ら独立に構築したUTXOセットをスナップショットと照合する。一致すれば、その信頼は最初から正当だったことになる。',
    snapshot: 'UTXO\nスナップショットを\n読み込む',
    verify: 'スナップショットの\nハッシュがハードコード\nされた値と一致',
    live: 'ノードは稼働中:\n新しいブロックを検証、\nトランザクションを中継',
    background: '背景処理:\nジェネシスから\n履歴全体を再導出',
    compare: '同じ高さで\nスナップショットと\n照合',
    match: '一致 --\n単一のチェーン状態へ\n統合',
    caption: '鍵は初日から機能する。権利書の履歴は、永遠に信じ込むのではなく、独立に確認される。',
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

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 860, H = 320;
  const boxW = 160, boxH = 60;

  const topY = 40;
  const bottomY = 200;

  const snapshotX = 30, verifyX = 220, liveX = 410;
  const backgroundX = 220, compareX = 410, matchX = 620;

  const inner =
    ARROWHEAD_DEFS +
    box(snapshotX, topY, boxW, boxH, L.snapshot, { fill: 'var(--color-hero-subtitle)', fillOpacity: 0.12, stroke: 'var(--color-hero-subtitle)' }) +
    arrow(snapshotX + boxW, topY + boxH / 2, verifyX, topY + boxH / 2, {}) +
    box(verifyX, topY, boxW, boxH, L.verify, { stroke: 'var(--color-hero-subtitle)' }) +
    arrow(verifyX + boxW, topY + boxH / 2, liveX, topY + boxH / 2, {}) +
    box(liveX, topY, boxW + 30, boxH, L.live, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' }) +
    arrow(snapshotX + boxW / 2, topY + boxH, backgroundX + boxW / 2, bottomY, {}) +
    box(backgroundX, bottomY, boxW, boxH, L.background, { stroke: 'var(--color-satoshi)', dashed: true }) +
    arrow(backgroundX + boxW, bottomY + boxH / 2, compareX, bottomY + boxH / 2, {}) +
    box(compareX, bottomY, boxW, boxH, L.compare, { stroke: 'var(--color-satoshi)' }) +
    arrow(compareX + boxW, bottomY + boxH / 2, matchX, bottomY + boxH / 2, {}) +
    box(matchX, bottomY, boxW, boxH, L.match, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
