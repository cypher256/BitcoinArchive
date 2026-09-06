// Private key -> public key -> address, plus a signature, drawn as a literal
// key-and-lock metaphor rather than labeled flowchart boxes.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Private key, public key, and address',
    desc: 'A secret key you never share unlocks a lock (public key) that anyone can see, which in turn produces an address anyone can send to. A signature is made with the secret key and proves you authorized a specific transaction, without ever revealing the key itself.',
    priv: 'Private key\n(secret --\nnever shown)',
    pub: 'Public key\n(safe to share)',
    addr: 'Address\n(where others\nsend to)',
    sign: 'Signature\n(proves you\nauthorized this,\nwithout revealing\nthe key)',
    caption: 'One-way math: the public key and address can be derived from the private key, never the reverse.',
  },
  ja: {
    title: '秘密鍵・公開鍵・アドレス',
    desc: '誰にも見せない秘密の鍵が、誰でも見られる錠前(公開鍵)を開ける。その錠前から、誰でも送金できるアドレスが作られる。署名は秘密鍵を使って作られ、鍵そのものを明かさずに、その取引を認可したことを証明する。',
    priv: '秘密鍵\n(誰にも見せない)',
    pub: '公開鍵\n(公開して安全)',
    addr: 'アドレス\n(送金を受け取る先)',
    sign: '署名\n(鍵を明かさずに\n認可を証明)',
    caption: '一方向の数学: 公開鍵とアドレスは秘密鍵から作れるが、逆はできない。',
  },
};

function keyIcon(cx, cy, label) {
  const lines = label.split('\n');
  const startY = cy + 55;
  const text = lines.map((l, i) => `<tspan x="${cx}" y="${startY + i * 14}">${esc(l)}</tspan>`).join('');
  return (
    `<circle cx="${cx - 12}" cy="${cy}" r="14" fill="none" stroke="var(--color-hero-subtitle)" stroke-width="4"/>` +
    `<rect x="${cx - 2}" y="${cy - 3}" width="34" height="6" fill="var(--color-hero-subtitle)"/>` +
    `<rect x="${cx + 20}" y="${cy - 3}" width="6" height="12" fill="var(--color-hero-subtitle)"/>` +
    `<rect x="${cx + 28}" y="${cy - 3}" width="6" height="16" fill="var(--color-hero-subtitle)"/>` +
    `<text text-anchor="middle" fill="var(--color-text)" font-size="12.5" font-family="var(--font-body, sans-serif)">${text}</text>`
  );
}

function lockIcon(cx, cy, label) {
  const lines = label.split('\n');
  const startY = cy + 50;
  const text = lines.map((l, i) => `<tspan x="${cx}" y="${startY + i * 14}">${esc(l)}</tspan>`).join('');
  return (
    `<path d="M${cx - 14},${cy - 6} v-10 a14,14 0 0 1 28,0 v10" fill="none" stroke="var(--color-satoshi)" stroke-width="4"/>` +
    `<rect x="${cx - 20}" y="${cy - 6}" width="40" height="30" rx="4" fill="var(--color-satoshi)" opacity="0.15" stroke="var(--color-satoshi)" stroke-width="2"/>` +
    `<circle cx="${cx}" cy="${cy + 8}" r="4" fill="var(--color-satoshi)"/>` +
    `<text text-anchor="middle" fill="var(--color-text)" font-size="12.5" font-family="var(--font-body, sans-serif)">${text}</text>`
  );
}

function mailboxIcon(cx, cy, label) {
  const lines = label.split('\n');
  const startY = cy + 50;
  const text = lines.map((l, i) => `<tspan x="${cx}" y="${startY + i * 14}">${esc(l)}</tspan>`).join('');
  return (
    `<path d="M${cx - 18},${cy + 15} v-15 a18,15 0 0 1 36,0 v15 z" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="2"/>` +
    `<rect x="${cx - 24}" y="${cy + 12}" width="48" height="6" fill="var(--color-border)"/>` +
    `<rect x="${cx - 3}" y="${cy - 4}" width="10" height="4" fill="var(--color-accent)"/>` +
    `<text text-anchor="middle" fill="var(--color-text)" font-size="12.5" font-family="var(--font-body, sans-serif)">${text}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 640, H = 260;
  const inner =
    ARROWHEAD_DEFS +
    keyIcon(70, 60, L.priv) +
    arrow(140, 60, 220, 60, {}) +
    lockIcon(260, 60, L.pub) +
    arrow(320, 60, 400, 60, {}) +
    mailboxIcon(440, 60, L.addr) +
    arrow(70, 100, 70, 175, { dashed: true }) +
    `<rect x="10" y="185" width="200" height="60" rx="8" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="110" y="205" text-anchor="middle" fill="var(--color-text)" font-size="12.5" font-family="var(--font-body, sans-serif)">${L.sign.split('\n').map((l, i) => `<tspan x="110" y="${205 + i * 14}">${esc(l)}</tspan>`).join('')}</text>`;
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
