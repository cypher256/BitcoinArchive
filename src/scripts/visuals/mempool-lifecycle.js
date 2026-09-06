// The mempool lifecycle as a waiting room with one entrance and four exits:
// a transaction is received, passes a checkpoint into the room, and leaves
// through exactly one of four doors -- confirmed, evicted, expired, or
// replaced -- never more than one, and never back the way it came.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'One door in, four doors out -- never more than one',
    desc: 'A transaction arrives and passes a validation checkpoint into the waiting room (the mempool). From there it leaves through exactly one of four doors: confirmed (mined into a block), evicted (the pool is full and this is the lowest fee-rate payer), expired (it waited too long), or replaced (a higher fee-rate version of itself took its place). It never leaves through two doors, and it never goes back the way it came.',
    arrive: 'Transaction\narrives',
    check: 'Validation\ncheckpoint',
    room: 'Waiting room\n(the mempool)',
    confirmed: 'Confirmed\n(mined into\na block)',
    evicted: 'Evicted\n(pool full,\nlowest fee rate)',
    expired: 'Expired\n(waited too long)',
    replaced: 'Replaced\n(higher fee-rate\nversion, RBF)',
    caption: 'Every exit is final -- once a transaction leaves through one door, none of the other three apply to it.',
  },
  ja: {
    title: '入口は1つ、出口は4つ -- 出口は必ず1つだけ',
    desc: 'トランザクションが到着し、検証の関所を通って待合室(メモリープール)に入る。そこから出るのは必ず4つの扉のうちどれか1つだけ: 確定(ブロックに採掘される)、追い出し(プールが満杯で最も手数料率が低い)、期限切れ(待ちすぎた)、置換(自分より手数料率の高い版に取って代わられる、RBF)。2つの扉から同時に出ることはなく、来た道を戻ることもない。',
    arrive: 'トランザクション\n到着',
    check: '検証の関所',
    room: '待合室\n(メモリープール)',
    confirmed: '確定\n(ブロックに\n採掘される)',
    evicted: '追い出し\n(プール満杯、\n最低手数料率)',
    expired: '期限切れ\n(待ちすぎ)',
    replaced: '置換\n(手数料率の高い版、\nRBF)',
    caption: 'どの出口も最終的だ。いったん1つの扉から出れば、残り3つは二度と当てはまらない。',
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
  const W = 860, H = 340;
  const boxW = 140, boxH = 50;

  const arriveX = 20, arriveY = 145;
  const checkX = 190, checkY = 145;
  const roomX = 360, roomY = 145;

  const exitX = 590;
  const exitYs = [20, 100, 190, 270];

  const inner =
    ARROWHEAD_DEFS +
    box(arriveX, arriveY, boxW - 20, boxH, L.arrive) +
    arrow(arriveX + boxW - 20, arriveY + boxH / 2, checkX, checkY + boxH / 2, {}) +
    box(checkX, checkY, boxW, boxH, L.check, { stroke: 'var(--color-hero-subtitle)' }) +
    arrow(checkX + boxW, checkY + boxH / 2, roomX, roomY + boxH / 2, {}) +
    box(roomX, roomY, boxW + 20, boxH, L.room, { fill: 'var(--color-hero-subtitle)', fillOpacity: 0.12, stroke: 'var(--color-hero-subtitle)' }) +
    `<path d="M ${roomX + boxW + 20},${roomY + boxH / 2} L ${exitX - 4},${exitYs[0] + boxH / 2}" fill="none" stroke="var(--color-accent)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(exitX, exitYs[0], boxW, boxH, L.confirmed, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' }) +
    `<path d="M ${roomX + boxW + 20},${roomY + boxH / 2} L ${exitX - 4},${exitYs[1] + boxH / 2}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(exitX, exitYs[1], boxW, boxH, L.evicted, { stroke: 'var(--color-satoshi)' }) +
    `<path d="M ${roomX + boxW + 20},${roomY + boxH / 2} L ${exitX - 4},${exitYs[2] + boxH / 2}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(exitX, exitYs[2], boxW, boxH, L.expired, { stroke: 'var(--color-satoshi)' }) +
    `<path d="M ${roomX + boxW + 20},${roomY + boxH / 2} L ${exitX - 4},${exitYs[3] + boxH / 2}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(exitX, exitYs[3], boxW, boxH, L.replaced);

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
