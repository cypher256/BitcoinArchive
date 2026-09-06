// Mining as a lottery-number search: a machine tries many nonces and stamps
// each attempt's fingerprint, most rejected because they don't start with
// enough zeros, until one lucky attempt qualifies.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Mining is a search for a lucky number',
    desc: 'A miner tries billions of random numbers (a nonce) attached to the same block. Each attempt produces a different fingerprint. Almost all are rejected because they do not start with enough zeros; there is no way to predict which number will work, only to keep trying.',
    target: 'Needed:\nfingerprint\nstarting with\n"0000..."',
    tryLabel: 'try',
    reject: 'no match -- try another number',
    accept: 'match! this block is now valid',
    fp: [ '7a91...', 'e05c...', '2f88...', '0000c3...' ],
    caption: 'There is no shortcut to a winning number -- only trying billions of them until one happens to work.',
  },
  ja: {
    title: 'マイニングは当たり番号探し',
    desc: 'マイナーは同じブロックに数十億通りの数字(ナンス)を付け替えて試す。試すたびに違う指紋ができるが、ほとんどは十分な数のゼロで始まらず不合格になる。どの数字が当たるかは予測できず、ひたすら試し続けるしかない。',
    target: '必要な条件:\n「0000…」で\n始まる指紋',
    tryLabel: '試行',
    reject: '不一致 -- 別の数字を試す',
    accept: '一致! このブロックが有効になる',
    caption: '当たり番号への近道はない。何十億通りも試し、たまたま当たるのを待つしかない。',
    fp: [ '7a91...', 'e05c...', '2f88...', '0000c3...' ],
  },
};

function attemptCard(x, y, fp, ok) {
  const color = ok ? 'var(--color-satoshi)' : 'var(--color-text-muted)';
  const mark = ok
    ? `<path d="M6,15 l6,7 l12,-16" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`
    : `<path d="M6,6 l16,16 M22,6 l-16,16" stroke="${color}" stroke-width="3" stroke-linecap="round"/>`;
  return (
    `<rect x="${x}" y="${y}" width="90" height="50" rx="6" fill="var(--color-bg-alt)" stroke="${color}" stroke-width="${ok ? 2.5 : 1.5}"/>` +
    `<text x="${x + 45}" y="${y + 20}" text-anchor="middle" fill="var(--color-text)" font-size="11" font-family="var(--font-mono, monospace)">${esc(fp)}</text>` +
    `<g transform="translate(${x + 60},${y + 22})">${mark}</g>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 640, H = 310;
  const rowY = [30, 95, 160, 225];
  const cards = L.fp.map((fp, i) => attemptCard(230, rowY[i], fp, i === L.fp.length - 1)).join('');
  const captions = L.fp
    .map((fp, i) => {
      const isLast = i === L.fp.length - 1;
      return `<text x="330" y="${rowY[i] + 66}" fill="${isLast ? 'var(--color-satoshi)' : 'var(--color-text-muted)'}" font-size="11.5" font-family="var(--font-body, sans-serif)">${esc(isLast ? L.accept : L.reject)}</text>`;
    })
    .join('');
  const tries = L.fp
    .map((_, i) => `<text x="185" y="${rowY[i] + 30}" text-anchor="end" fill="var(--color-text-muted)" font-size="11.5" font-family="var(--font-body, sans-serif)">${esc(L.tryLabel)} #${i + 1}</text>` + arrow(190, rowY[i] + 25, 225, rowY[i] + 25, {}))
    .join('');
  const inner =
    ARROWHEAD_DEFS +
    `<rect x="10" y="90" width="150" height="100" rx="8" fill="var(--color-accent)" opacity="0.1" stroke="var(--color-accent)" stroke-width="2"/>` +
    `<text x="85" y="130" text-anchor="middle" fill="var(--color-text)" font-size="12.5" font-family="var(--font-body, sans-serif)">${L.target.split('\n').map((l, i) => `<tspan x="85" y="${125 + i * 15}">${esc(l)}</tspan>`).join('')}</text>` +
    tries +
    cards +
    captions;
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
