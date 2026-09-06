// The time-warp attack as punching a time clock ahead once, then normally:
// stamp the very first block of a window with a far-future time, stamp
// every block after it realistically -- and an off-by-one in how the
// difficulty algorithm counts back means that first stamp never gets
// counted, so the elapsed time it sees looks artificially short.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Stamp the clock ahead once, then punch in normally',
    desc: 'A colluding majority stamps the very first block of a retarget window with a far-future timestamp, then stamps every remaining block with realistic times. The difficulty algorithm computes elapsed time by counting back from the newest block -- but an off-by-one in that count excludes the far-future-stamped first block entirely. The elapsed window the algorithm sees looks artificially short, so difficulty drops on the next retarget, and the same hashrate then mines faster than the intended pace.',
    block0: 'Block 0:\nstamped with a\nfar-future time',
    blocks: 'Blocks 1-2015:\nstamped with\nrealistic times',
    excluded: 'Off-by-one:\nblock 0 is never\ncounted here',
    algorithm: 'Difficulty algorithm\ncounts back\n2,015 blocks',
    result: 'Sees a short\nelapsed window --\ndifficulty drops',
    caption: 'The far-future stamp never gets counted -- the algorithm only sees the realistic timestamps that follow it.',
  },
  ja: {
    title: '時計を一度だけ進めておき、その後は普通に打刻する',
    desc: '結託した多数派は、リターゲット窓の最初のブロックだけ遠い未来のタイムスタンプを刻み、残りのすべてのブロックには現実的な時刻を刻む。難易度アルゴリズムは最新のブロックから遡って経過時間を計算するが、そのカウントのオフバイワン誤りにより、未来のタイムスタンプを刻んだ最初のブロックが完全にカウントから除外される。アルゴリズムが見る経過期間は不自然に短く見え、次のリターゲットで難易度が下がり、同じハッシュレートのまま意図された速度より速くブロックが採掘されるようになる。',
    block0: 'ブロック0:\n遠い未来の時刻を\n刻印',
    blocks: 'ブロック1〜2015:\n現実的な時刻を\n刻印',
    excluded: 'オフバイワン:\nブロック0はここで\n一度もカウントされない',
    algorithm: '難易度アルゴリズムが\n2,015ブロック分\n遡ってカウント',
    result: '短い経過期間に\n見える --\n難易度が下がる',
    caption: '未来の刻印は一度もカウントされない。アルゴリズムはその後に続く現実的なタイムスタンプしか見ていない。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function box(x, y, w, h, label, opts = {}) {
  const { fill = 'var(--color-bg-alt)', stroke = 'var(--color-border)', fontSize = 10, fillOpacity = null, dashed = false } = opts;
  const lines = label.split('\n').length;
  const cy = y + h / 2 - (lines - 1) * 6;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" ${fillOpacity !== null ? `fill-opacity="${fillOpacity}"` : ''} stroke="${stroke}" stroke-width="1.5" ${dashed ? 'stroke-dasharray="4,3"' : ''}/>` +
    `<text x="${x + w / 2}" y="${cy}" text-anchor="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, cy, label, 12)}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 900, H = 245;
  const boxW = 160, boxH = 60;
  const topY = 30;

  const block0X = 20, blocksX = 220;
  const algoX = 480, resultX = 700;
  const excludedY = 160;

  const inner =
    ARROWHEAD_DEFS +
    box(block0X, topY, boxW, boxH, L.block0, { stroke: 'var(--color-satoshi)' }) +
    arrow(block0X + boxW, topY + boxH / 2, blocksX, topY + boxH / 2, {}) +
    box(blocksX, topY, boxW, boxH, L.blocks) +
    `<path d="M ${block0X + boxW / 2},${topY + boxH} V ${excludedY}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#v-arrowhead)"/>` +
    box(block0X, excludedY, boxW, boxH, L.excluded, { stroke: 'var(--color-satoshi)', dashed: true }) +
    arrow(blocksX + boxW, topY + boxH / 2, algoX, topY + boxH / 2, {}) +
    box(algoX, topY, boxW, boxH, L.algorithm, { fill: 'var(--color-hero-subtitle)', fillOpacity: 0.12, stroke: 'var(--color-hero-subtitle)' }) +
    arrow(algoX + boxW, topY + boxH / 2, resultX, topY + boxH / 2, {}) +
    box(resultX, topY, boxW, boxH, L.result, { stroke: 'var(--color-satoshi)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
