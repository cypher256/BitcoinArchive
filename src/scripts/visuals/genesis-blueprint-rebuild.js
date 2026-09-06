// Genesis block creation as following a sealed blueprint rather than
// mining: the node never searches for a nonce here -- it reads
// hardcoded constants, reconstructs the exact same block every node
// before it has also reconstructed, checks the result matches, and
// files it away. No search, no peer contact, no distribution event.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Not mined -- rebuilt from a sealed blueprint, every time',
    desc: 'When a node starts, LoadBlockIndex checks whether the block database is empty. If it already holds data, the node moves straight into normal block processing -- there is no genesis work to do. Only on a truly empty database does it read hardcoded constants baked into the source code (the timestamp, nonce, difficulty bits, headline text, and expected Merkle root), reconstruct Block 0 locally from them -- no nonce search the way it mines every later block -- check the resulting hash matches the one also hardcoded into the software, and write the result to disk before resuming. No peer contact, no proof-of-work search, no distribution event -- every node that has ever started from empty assembles the same byte-identical block from the same blueprint.',
    start: 'Node starts',
    loadIdx: 'LoadBlockIndex\nchecks the database',
    dbCheck: 'Database\nempty?',
    constants: 'Hardcoded constants\n(timestamp, nonce,\ndifficulty bits, headline\ntext, expected\nMerkle root)',
    rebuild: 'Reconstruct\nBlock 0 locally\n-- no search',
    check: 'Hash matches\nthe hardcoded\nexpected value?',
    write: 'Write Block 0\nto disk',
    resume: 'Resume normal\nblock processing',
    fail: 'Refuse to start\n(assertion fails)',
    yes: 'Yes',
    no: 'No\n(already populated)',
    caption: 'Every node reconstructs the identical block from the same blueprint -- Block 0 is never received from a peer.',
  },
  ja: {
    title: 'マイニングではなく、封印された設計図から毎回組み立て直す',
    desc: 'ノードが起動すると、LoadBlockIndexがブロックデータベースが空かどうかを確認する。既にデータを保持していれば、ノードはそのまま通常のブロック処理へ進む。ジェネシス関連の作業は一切不要だ。データベースが本当に空の場合にのみ、ソースコードに焼き込まれたハードコードされた定数(タイムスタンプ、ナンス、難易度ビット、見出しテキスト、期待されるマークルルート)を読み込み、それらからブロック0をローカルで再構築する。それ以降のすべてのブロックのようなナンス探索は行わない。得られたハッシュがソフトウェアにハードコードされた期待値と一致するか確認し、結果をディスクに書き込んでから処理を再開する。ピアとの接続もプルーフ・オブ・ワークの探索も配布イベントもない。これまで空の状態から起動したすべてのノードが、同じ設計図から1バイトも違わない同じブロックを組み立てている。',
    start: 'ノード起動',
    loadIdx: 'LoadBlockIndexが\nデータベースを確認',
    dbCheck: 'データベースは\n空か?',
    constants: 'ハードコードされた定数\n(タイムスタンプ、ナンス、\n難易度ビット、見出し\nテキスト、期待される\nマークルルート)',
    rebuild: 'ブロック0を\nローカルで再構築\n-- 探索なし',
    check: 'ハッシュは\nハードコードされた\n期待値と一致するか?',
    write: 'ブロック0を\nディスクに書き込み',
    resume: '通常のブロック処理\nを再開',
    fail: '起動を拒否\n(assertion失敗)',
    yes: 'はい',
    no: 'いいえ\n(既にデータあり)',
    caption: 'すべてのノードが同じ設計図から同一のブロックを再構築する。ブロック0がピアから受信されたことは一度もない。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function box(x, y, w, h, label, opts = {}) {
  const { fill = 'var(--color-bg-alt)', stroke = 'var(--color-border)', fontSize = 10, fillOpacity = null } = opts;
  const lines = label.split('\n').length;
  const cy = y + h / 2 - (lines - 1) * 6;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" ${fillOpacity !== null ? `fill-opacity="${fillOpacity}"` : ''} stroke="${stroke}" stroke-width="1.5"/>` +
    `<text x="${x + w / 2}" y="${cy}" text-anchor="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, cy, label, 12)}</text>`
  );
}

function blueprintIcon(cx, cy, colorVar) {
  return (
    `<rect x="${cx - 18}" y="${cy - 22}" width="36" height="44" rx="2" fill="${colorVar}" fill-opacity="0.12" stroke="${colorVar}" stroke-width="1.5"/>` +
    `<line x1="${cx - 10}" y1="${cy - 12}" x2="${cx + 10}" y2="${cy - 12}" stroke="${colorVar}" stroke-width="1.2"/>` +
    `<line x1="${cx - 10}" y1="${cy - 4}" x2="${cx + 10}" y2="${cy - 4}" stroke="${colorVar}" stroke-width="1.2"/>` +
    `<line x1="${cx - 10}" y1="${cy + 4}" x2="${cx + 4}" y2="${cy + 4}" stroke="${colorVar}" stroke-width="1.2"/>` +
    `<circle cx="${cx + 10}" cy="${cy + 14}" r="4" fill="none" stroke="${colorVar}" stroke-width="1.2"/>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 1180, H = 420;
  const boxW = 150, boxH = 68;
  const topY = 60;

  const startX = 20, loadIdxX = 190, dbCheckX = 360;
  const constX = 540, rebuildX = 720, checkX = 900;
  const writeX = 800, writeY = 190;
  const failX = 980, failY = 190;
  const resumeX = 560, resumeY = 330;

  const inner =
    ARROWHEAD_DEFS +
    box(startX, topY, boxW, boxH, L.start) +
    arrow(startX + boxW, topY + boxH / 2, loadIdxX, topY + boxH / 2, {}) +
    box(loadIdxX, topY, boxW, boxH, L.loadIdx) +
    arrow(loadIdxX + boxW, topY + boxH / 2, dbCheckX, topY + boxH / 2, {}) +
    box(dbCheckX, topY, boxW, boxH, L.dbCheck, { stroke: 'var(--color-hero-subtitle)' }) +
    arrow(dbCheckX + boxW, topY + boxH / 2, constX, topY + boxH / 2, {}) +
    `<text x="${dbCheckX + boxW + 15}" y="${topY + boxH / 2 - 8}" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${esc(L.yes)}</text>` +
    blueprintIcon(constX + boxW / 2, topY - 32, 'var(--color-hero-subtitle)') +
    box(constX, topY, boxW, boxH, L.constants, { stroke: 'var(--color-hero-subtitle)', fontSize: 9 }) +
    arrow(constX + boxW, topY + boxH / 2, rebuildX, topY + boxH / 2, {}) +
    box(rebuildX, topY, boxW, boxH, L.rebuild, { fill: 'var(--color-hero-subtitle)', fillOpacity: 0.12, stroke: 'var(--color-hero-subtitle)' }) +
    arrow(rebuildX + boxW, topY + boxH / 2, checkX, topY + boxH / 2, {}) +
    box(checkX, topY, boxW, boxH, L.check, { stroke: 'var(--color-satoshi)' }) +
    arrow(checkX + boxW / 2 - 25, topY + boxH, writeX + boxW / 2, writeY, {}) +
    `<text x="${checkX - 80}" y="${topY + boxH + 20}" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${esc(L.yes)}</text>` +
    box(writeX, writeY, boxW, boxH, L.write, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' }) +
    arrow(checkX + boxW / 2 + 25, topY + boxH, failX + boxW / 2, failY, {}) +
    `<text x="${checkX + boxW + 5}" y="${topY + boxH + 20}" fill="var(--color-satoshi)" font-size="9.5" font-family="var(--font-body, sans-serif)">No</text>` +
    box(failX, failY, boxW, boxH, L.fail, { stroke: 'var(--color-satoshi)' }) +
    `<path d="M ${dbCheckX + boxW / 2},${topY + boxH} V 300 H ${resumeX + boxW / 2 - 20} V ${resumeY}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<text x="${dbCheckX + boxW / 2 + 10}" y="${topY + boxH + 20}" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${multiline(dbCheckX + boxW / 2 + 10, topY + boxH + 20, L.no, 12)}</text>` +
    `<path d="M ${writeX + boxW / 2},${writeY + boxH} V 300 H ${resumeX + boxW / 2 + 20} V ${resumeY}" fill="none" stroke="var(--color-accent)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(resumeX, resumeY, boxW, boxH, L.resume);

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
