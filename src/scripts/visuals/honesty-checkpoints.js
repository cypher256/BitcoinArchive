// A new block walking a row of four checkpoints run by every node, not a
// referee: failing any single one gets the block ignored outright, the way
// a forged ticket simply doesn't work at the door -- no partial credit, no
// appeal, and no single gate that alone can wave a block through.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Four checkpoints every node runs alone -- no referee needed',
    desc: 'When a new block is announced, every node -- not just miners -- checks it against four questions in sequence: is every signature genuine, is every spent receipt one that was actually still unspent, does the block\'s fingerprint win the mining lottery, and does the miner\'s self-payment match the schedule. Failing any single check gets the block rejected outright; there is no partial credit for passing three out of four.',
    block: 'New block\nannounced',
    c1: 'Every signature\ngenuine?',
    c2: 'Every spent receipt\nactually unspent\nuntil now?',
    c3: 'Fingerprint wins\nthe mining lottery?',
    c4: 'Self-payment matches\nthe schedule?',
    accept: 'Every node\naccepts it',
    reject: 'Every node\nrejects it',
    caption: 'One failed check rejects the block outright -- there is no such thing as a mostly-valid block.',
  },
  ja: {
    title: '4つの関所、それぞれのノードが単独で判定する -- 審判は不要',
    desc: '新しいブロックが告知されると、マイナーだけでなくすべてのノードが、4つの問いを順番に照合する。すべての署名が本物か、使用済みとして提示されたすべてのレシートが実際にその時点まで未使用だったか、ブロックの指紋がマイニングの宝くじに当選しているか、マイナーの自己支払いがスケジュールと一致するか。どれか1つでも不合格ならブロックは即座に却下される。4つ中3つ合格しても部分点はない。',
    block: '新しいブロック\nが告知される',
    c1: 'すべての署名は\n本物か?',
    c2: '使用済みとされた\nレシートは\n実際に未使用だったか?',
    c3: '指紋がマイニングの\n宝くじに当選か?',
    c4: '自己支払いは\nスケジュールと一致?',
    accept: 'すべてのノードが\n受理する',
    reject: 'すべてのノードが\n却下する',
    caption: '1つでも不合格ならブロックは即座に却下される。「だいたい有効なブロック」というものは存在しない。',
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

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 980, H = 260;
  const boxW = 130, boxH = 66;
  const y = 40;
  const step = 155;

  const blockX = 20;
  const checks = [L.c1, L.c2, L.c3, L.c4];
  const checkXs = [blockX + step, blockX + step * 2, blockX + step * 3, blockX + step * 4];
  const acceptX = blockX + step * 5;
  const rejectY = y + boxH + 70;

  let inner = ARROWHEAD_DEFS + box(blockX, y, boxW - 20, boxH, L.block);

  let prevX = blockX + boxW - 20;
  for (let i = 0; i < checks.length; i++) {
    inner += arrow(prevX, y + boxH / 2, checkXs[i], y + boxH / 2, {});
    inner += box(checkXs[i], y, boxW, boxH, checks[i], { stroke: 'var(--color-satoshi)' });
    inner += `<path d="M ${checkXs[i] + boxW / 2},${y + boxH} V ${rejectY}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" marker-end="url(#v-arrowhead)"/>`;
    prevX = checkXs[i] + boxW;
  }

  inner += arrow(prevX, y + boxH / 2, acceptX, y + boxH / 2, {});
  inner += box(acceptX, y, boxW, boxH, L.accept, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' });
  inner += box(checkXs[0], rejectY, checkXs[3] + boxW - checkXs[0], boxH - 10, L.reject, { stroke: 'var(--color-satoshi)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
