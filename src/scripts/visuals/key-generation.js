// Key generation as a one-way stamping machine: a die (randomness) feeds a
// number into the machine, the machine stamps a single point on the curve,
// and that one stamped point is read out in two equivalent formats -- the
// stamp itself never runs backward to the die that produced it.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Key generation is a one-way stamping machine',
    desc: 'A cryptographically secure random number generator picks the private key, a random 256-bit integer. The machine stamps that number onto the curve via scalar multiplication with the fixed generator point, producing one public-key point, which is then read out in either a compressed or an uncompressed format -- the same point, two encodings.',
    die: 'Random\nnumber\ngenerator',
    priv: 'Private key\n(256-bit\ninteger k)',
    machine: 'Scalar\nmultiplication\nK = k × G',
    generator: 'Generator\npoint G',
    pub: 'Public key K\n(point on\nthe curve)',
    comp: 'Compressed\n(33 bytes)',
    uncomp: 'Uncompressed\n(65 bytes)',
    caption: 'The stamp runs one way only: K is easy to compute from k, but recovering k from K is the elliptic-curve discrete log problem.',
  },
  ja: {
    title: '鍵生成は一方向の刻印機',
    desc: '暗号学的に安全な乱数生成器が秘密鍵(ランダムな256ビット整数)を選ぶ。機械はその数を、固定された生成点との楕円曲線スカラー倍算によって曲線上に刻印し、1つの公開鍵の点を作る。その点は圧縮形式または非圧縮形式のどちらかで読み出される。同じ点の、2通りの表現にすぎない。',
    die: '乱数\n生成器',
    priv: '秘密鍵\n(256ビット\n整数 k)',
    machine: 'スカラー倍算\nK = k × G',
    generator: '生成点 G',
    pub: '公開鍵 K\n(曲線上\nの点)',
    comp: '圧縮形式\n(33バイト)',
    uncomp: '非圧縮形式\n(65バイト)',
    caption: '刻印は一方向にしか進まない: kからKを計算するのは簡単だが、Kからkを復元するのは楕円曲線離散対数問題になる。',
  },
};

function diceIcon(cx, cy) {
  const s = 30;
  const pip = (dx, dy) => `<circle cx="${cx + dx}" cy="${cy + dy}" r="2.5" fill="var(--color-text-muted)"/>`;
  return (
    `<rect x="${cx - s / 2}" y="${cy - s / 2}" width="${s}" height="${s}" rx="5" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    pip(-8, -8) + pip(8, 8) + pip(0, 0) + pip(-8, 8) + pip(8, -8)
  );
}

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 780, H = 200;
  const y = 70;

  const dieX = 55;
  const privX = 130, privY = y - 25, privW = 100, privH = 50;
  const machineX = 300, machineY = y - 35, machineW = 130, machineH = 70;
  const genX = 300, genY = y + 90;
  const pubX = 500, pubY = y - 25, pubW = 100, pubH = 50;
  const compX = 660, compY = y - 55, compW = 100, compH = 40;
  const uncompX = 660, uncompY = y + 15, uncompW = 100, uncompH = 40;

  const inner =
    ARROWHEAD_DEFS +
    diceIcon(dieX, y) +
    `<text x="${dieX}" y="${y + 32}" text-anchor="middle" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${multiline(dieX, y + 32, L.die, 11)}</text>` +
    arrow(dieX + 20, y, privX, y, {}) +
    `<rect x="${privX}" y="${privY}" width="${privW}" height="${privH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${privX + privW / 2}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(privX + privW / 2, y - 8, L.priv, 12)}</text>` +
    arrow(privX + privW, y, machineX, y, {}) +
    `<rect x="${machineX}" y="${machineY}" width="${machineW}" height="${machineH}" rx="8" fill="var(--color-hero-subtitle)" opacity="0.12" stroke="var(--color-hero-subtitle)" stroke-width="2"/>` +
    `<text x="${machineX + machineW / 2}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="11" font-family="var(--font-body, sans-serif)">${multiline(machineX + machineW / 2, y - 6, L.machine, 13)}</text>` +
    arrow(genX, genY, machineX + machineW / 2, machineY + machineH, {}) +
    `<text x="${genX}" y="${genY + 16}" text-anchor="middle" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${esc(L.generator)}</text>` +
    arrow(machineX + machineW, y, pubX, y, {}) +
    `<rect x="${pubX}" y="${pubY}" width="${pubW}" height="${pubH}" rx="6" fill="var(--color-satoshi)" opacity="0.12" stroke="var(--color-satoshi)" stroke-width="2"/>` +
    `<text x="${pubX + pubW / 2}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(pubX + pubW / 2, y - 8, L.pub, 12)}</text>` +
    arrow(pubX + pubW, y - 10, compX, compY + compH / 2, {}) +
    arrow(pubX + pubW, y + 10, uncompX, uncompY + uncompH / 2, {}) +
    `<rect x="${compX}" y="${compY}" width="${compW}" height="${compH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${compX + compW / 2}" y="${compY + compH / 2}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(compX + compW / 2, compY + compH / 2 - 5, L.comp, 12)}</text>` +
    `<rect x="${uncompX}" y="${uncompY}" width="${uncompW}" height="${uncompH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${uncompX + uncompW / 2}" y="${uncompY + uncompH / 2}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(uncompX + uncompW / 2, uncompY + uncompH / 2 - 5, L.uncomp, 12)}</text>`;

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
