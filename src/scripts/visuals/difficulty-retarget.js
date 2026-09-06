// Difficulty adjustment as a thermostat: the network measures how fast the
// last 2,016 blocks actually arrived against the 10-minute target, then
// turns a dial to make the next batch harder or easier -- illustrates a
// closed feedback loop without the arithmetic of the retarget formula.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Difficulty adjustment is a thermostat for block speed',
    desc: 'Every 2,016 blocks, the network measures how long that batch actually took against the 10-minute-per-block target, then turns a dial: blocks came too fast, so the next batch is made harder; too slow, and it is made easier.',
    measured: 'Measured:\nlast 2,016 blocks\naveraged 8 min/block',
    target: 'Target:\n10 min/block',
    tooFast: 'Too fast\n→ turn dial harder',
    dialLabel: 'New difficulty\nfor next 2,016 blocks',
    caption: 'The network never guesses at a "correct" difficulty -- it only ever reacts to how the last batch actually went.',
  },
  ja: {
    title: '難易度調整はブロック速度のサーモスタット',
    desc: '2,016 ブロックごとに、そのひとまとまりが実際にどれだけの時間で終わったかを 1 ブロック 10 分という目標と比べ、ダイヤルを回す。速すぎれば次のひとまとまりを難しくし、遅すぎれば易しくする。',
    measured: '実測:\n直近 2,016 ブロックの\n平均は 8 分/ブロック',
    target: '目標:\n10 分/ブロック',
    tooFast: '速すぎる\n→ ダイヤルを難しい方へ',
    dialLabel: '次の 2,016 ブロック用の\n新しい難易度',
    caption: 'ネットワークは「正しい難易度」を推測しない。直前のひとまとまりが実際にどうだったかにだけ反応する。',
  },
};

function gauge(cx, cy, r, needleAngleDeg, colorVar) {
  const start = -210, end = 30;
  const toXY = (deg) => {
    const rad = (deg * Math.PI) / 180;
    return [cx + r * Math.cos(rad), cy + r * Math.sin(rad)];
  };
  const [sx, sy] = toXY(start);
  const [ex, ey] = toXY(end);
  const large = end - start > 180 ? 1 : 0;
  const [nx, ny] = toXY(needleAngleDeg);
  return (
    `<path d="M ${sx},${sy} A ${r},${r} 0 ${large} 1 ${ex},${ey}" fill="none" stroke="var(--color-border)" stroke-width="10" stroke-linecap="round"/>` +
    `<line x1="${cx}" y1="${cy}" x2="${nx}" y2="${ny}" stroke="${colorVar}" stroke-width="3" stroke-linecap="round"/>` +
    `<circle cx="${cx}" cy="${cy}" r="5" fill="${colorVar}"/>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 640, H = 280;
  const inner =
    ARROWHEAD_DEFS +
    // Left gauge: measured pace, needle tilted toward "fast" (too far
    // counter-clockwise past the target mark).
    gauge(120, 130, 60, -170, 'var(--color-satoshi)') +
    `<text x="120" y="220" text-anchor="middle" fill="var(--color-text)" font-size="12" font-family="var(--font-body, sans-serif)">${L.measured.split('\n').map((l, i) => `<tspan x="120" y="${210 + i * 15}">${esc(l)}</tspan>`).join('')}</text>` +
    `<text x="120" y="50" text-anchor="middle" fill="var(--color-text-muted)" font-size="10.5" font-family="var(--font-body, sans-serif)">${L.target.split('\n').map((l, i) => `<tspan x="120" y="${45 + i * 13}">${esc(l)}</tspan>`).join('')}</text>` +
    arrow(200, 130, 280, 130, {}) +
    `<text x="240" y="115" text-anchor="middle" fill="var(--color-satoshi)" font-size="11" font-family="var(--font-body, sans-serif)">${L.tooFast.split('\n').map((l, i) => `<tspan x="240" y="${110 + i * 13}">${esc(l)}</tspan>`).join('')}</text>` +
    // Right gauge: the new dial position, tilted toward "harder" (clockwise
    // toward the end of the arc).
    gauge(440, 130, 60, 10, 'var(--color-hero-subtitle)') +
    `<text x="440" y="220" text-anchor="middle" fill="var(--color-text)" font-size="12" font-family="var(--font-body, sans-serif)">${L.dialLabel.split('\n').map((l, i) => `<tspan x="440" y="${210 + i * 15}">${esc(l)}</tspan>`).join('')}</text>`;
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
