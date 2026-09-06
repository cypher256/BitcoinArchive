// The miner-incentive model as a closed loop: honest mining produces
// valid blocks, valid blocks keep the network trustworthy, trust keeps
// BTC valuable, and a more valuable BTC makes the next block reward
// worth defending honestly -- each stage feeds the next, and the loop
// has no exit ramp built into it.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A closed loop, not a one-time argument',
    desc: 'The incentive model is a positive feedback cycle, not a single proof. Miners following protocol rules produce valid blocks; valid blocks keep the network trustworthy; a trustworthy network lets BTC retain or gain value; and a more valuable BTC makes the block reward worth defending honestly -- which feeds back into miners continuing to follow the rules. Each stage depends on the one before it, and the argument is strongest exactly where the loop is thickest: while the subsidy still dominates the reward.',
    honest: 'Miners follow\nprotocol rules',
    valid: 'Valid blocks\nproduced',
    trust: 'Network remains\ntrustworthy',
    value: 'BTC retains\nor gains value',
    reward: 'Block reward\nworth more\nin real terms',
    caption: 'Break any single link and the whole loop weakens -- which is exactly the concern as the subsidy shrinks toward zero.',
  },
  ja: {
    title: '閉じた輪であり、一回きりの証明ではない',
    desc: 'インセンティブモデルは1回限りの証明ではなく、正のフィードバックサイクルだ。プロトコル規則に従うマイナーが有効なブロックを生産し、有効なブロックがネットワークの信頼を維持し、信頼できるネットワークがBTCの価値を保つか高め、より価値の高いBTCはブロック報酬を正直に守る価値を高める。それがまた、マイナーが規則に従い続けることへとつながる。各段階は直前の段階に依存しており、この議論が最も強力なのは、輪が最も太い場所、つまり新規発行分がまだ報酬の大部分を占めている間だ。',
    honest: 'マイナーが\nプロトコル規則\nに従う',
    valid: '有効なブロック\nが生産される',
    trust: 'ネットワークの\n信頼が維持される',
    value: 'BTCが価値を\n保つ、または\n高める',
    reward: 'ブロック報酬の\n実質価値が\n高まる',
    caption: 'どこか1つの輪が切れれば、輪全体が弱まる。それはまさに、新規発行分がゼロへ近づくにつれて生じる懸念そのものだ。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function node(cx, cy, r, label, colorVar) {
  const lines = label.split('\n').length;
  const ty = cy - (lines - 1) * 6;
  return (
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${colorVar}" opacity="0.12" stroke="${colorVar}" stroke-width="2"/>` +
    `<text x="${cx}" y="${ty}" text-anchor="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(cx, ty, label, 12)}</text>`
  );
}

function curvedArrow(x1, y1, x2, y2, cx, cy, colorVar) {
  return `<path d="M ${x1},${y1} Q ${cx},${cy} ${x2},${y2}" fill="none" stroke="${colorVar}" stroke-width="2" marker-end="url(#v-arrowhead)"/>`;
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 700, H = 560;
  const r = 68;
  const cx = 350, cy = 280;
  const ringR = 190;

  const angles = [-90, -18, 54, 126, 198];
  const positions = angles.map((a) => {
    const rad = (a * Math.PI) / 180;
    return { x: cx + ringR * Math.cos(rad), y: cy + ringR * Math.sin(rad) };
  });
  const labels = [L.honest, L.valid, L.trust, L.value, L.reward];
  const colors = ['var(--color-hero-subtitle)', 'var(--color-satoshi)', 'var(--color-hero-subtitle)', 'var(--color-satoshi)', 'var(--color-hero-subtitle)'];

  let nodes = '';
  let arrows = '';
  for (let i = 0; i < 5; i++) {
    nodes += node(positions[i].x, positions[i].y, r, labels[i], colors[i]);
    const next = positions[(i + 1) % 5];
    const midAngle = ((angles[i] + angles[(i + 1) % 5] + (i === 4 ? 360 : 0)) / 2 * Math.PI) / 180;
    const bulge = ringR * 1.18;
    const midX = cx + bulge * Math.cos(midAngle);
    const midY = cy + bulge * Math.sin(midAngle);
    const dx = next.x - positions[i].x, dy = next.y - positions[i].y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const startX = positions[i].x + (dx / dist) * (r + 4);
    const startY = positions[i].y + (dy / dist) * (r + 4);
    const endX = next.x - (dx / dist) * (r + 4);
    const endY = next.y - (dy / dist) * (r + 4);
    arrows += curvedArrow(startX, startY, endX, endY, midX, midY, 'var(--color-text-muted)');
  }

  const inner = ARROWHEAD_DEFS + arrows + nodes;
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
