// Hash function as a fingerprint scanner: two near-identical documents go in,
// two completely different fingerprints come out -- illustrates "tiny change,
// totally different result" and "you cannot reverse a fingerprint back into
// the document" without a flowchart diagram.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A hash is a one-way fingerprint',
    desc: 'Two documents that differ by a single character are fed into the same hash function and produce two completely unrelated fingerprints. The fingerprint cannot be turned back into the document.',
    doc1: '"...banks"',
    doc2: '"...bank"',
    changed: '(one letter removed)',
    fn: 'hash\nfunction',
    fp1: '4f2a...e8b3',
    fp2: '91c7...a5d0',
    caption: 'A one-letter change produces a totally unrelated fingerprint -- and there is no way back from fingerprint to document.',
  },
  ja: {
    title: 'ハッシュは一方向の指紋',
    desc: '1文字だけ違う2つの文書を同じハッシュ関数にかけると、まったく無関係な2つの指紋が出てくる。指紋から文書を復元することはできない。',
    doc1: '「…banks」',
    doc2: '「…bank」',
    changed: '(1文字削除)',
    fn: 'ハッシュ\n関数',
    fp1: '4f2a...e8b3',
    fp2: '91c7...a5d0',
    caption: '1文字の違いでまったく無関係な指紋になる。指紋から文書へは戻れない。',
  },
};

function doc(x, y, label, sub) {
  return (
    `<rect x="${x}" y="${y}" width="120" height="70" rx="4" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<line x1="${x + 14}" y1="${y + 18}" x2="${x + 106}" y2="${y + 18}" stroke="var(--color-text-muted)" stroke-width="2"/>` +
    `<line x1="${x + 14}" y1="${y + 30}" x2="${x + 90}" y2="${y + 30}" stroke="var(--color-text-muted)" stroke-width="2"/>` +
    `<text x="${x + 60}" y="${y + 50}" text-anchor="middle" fill="var(--color-text)" font-size="11.5" font-family="var(--font-mono, monospace)">${esc(label)}</text>` +
    (sub ? `<text x="${x + 60}" y="${y + 64}" text-anchor="middle" fill="var(--color-text-muted)" font-size="10">${esc(sub)}</text>` : '')
  );
}

function fingerprint(cx, cy, r, colorVar) {
  const rings = [];
  for (let i = 1; i <= 4; i++) {
    const rr = (r / 4) * i;
    rings.push(`<path d="M ${cx - rr},${cy} A ${rr},${rr * 0.85} 0 1 0 ${cx + rr},${cy}" fill="none" stroke="${colorVar}" stroke-width="2"/>`);
  }
  return `<g>${rings.join('')}</g>`;
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 620, H = 225;
  const inner =
    ARROWHEAD_DEFS +
    doc(20, 20, L.doc1) +
    doc(20, 130, L.doc2, L.changed) +
    arrow(150, 55, 250, 100, {}) +
    arrow(150, 165, 250, 120, {}) +
    `<rect x="255" y="70" width="100" height="80" rx="10" fill="var(--color-accent)" opacity="0.12" stroke="var(--color-accent)" stroke-width="2"/>` +
    `<text x="305" y="110" text-anchor="middle" fill="var(--color-text)" font-size="13" font-family="var(--font-body, sans-serif)">${L.fn.split('\n').map((l, i) => `<tspan x="305" y="${105 + i * 16}">${esc(l)}</tspan>`).join('')}</text>` +
    arrow(360, 100, 440, 55, {}) +
    arrow(360, 120, 440, 165, {}) +
    fingerprint(475, 55, 30, 'var(--color-hero-subtitle)') +
    `<text x="475" y="95" text-anchor="middle" fill="var(--color-text)" font-size="11.5" font-family="var(--font-mono, monospace)">${esc(L.fp1)}</text>` +
    fingerprint(475, 165, 30, 'var(--color-satoshi)') +
    `<text x="475" y="205" text-anchor="middle" fill="var(--color-text)" font-size="11.5" font-family="var(--font-mono, monospace)">${esc(L.fp2)}</text>`;
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
