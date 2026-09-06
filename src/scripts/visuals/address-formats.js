// Address derivation as a shipping label printed in three formats: P2PKH
// and P2WPKH hash the key down to one payload (Hash160), P2TR instead
// tweaks it into a different payload (an x-only key) -- and whichever
// payload results gets encoded onto one of three label styles. (P2SH and
// P2WSH, which hash a redeem/witness script rather than a bare key, are
// out of scope for this illustration.)
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Two payloads, three label formats',
    desc: 'A private key produces a public key. P2PKH and P2WPKH hash that key down to a 20-byte payload (Hash160); P2TR instead tweaks the key with the Merkle root of any committed scripts, producing a different 32-byte x-only payload. Whichever payload results is then printed onto one of three label formats -- Base58Check, Bech32, or Bech32m -- each adding its own error-detection code, producing the P2PKH, P2WPKH, or P2TR address a sender actually types.',
    priv: 'Private\nkey',
    pub: 'Public\nkey',
    hash: 'Hash160\n(20-byte\npayload)',
    tweak: 'Taproot tweak\n(x-only key,\n32 bytes)',
    label1: 'Base58Check\nlabel',
    label2: 'Bech32\nlabel',
    label3: 'Bech32m\nlabel',
    addr1: 'P2PKH\n1A1zP1eP...',
    addr2: 'P2WPKH\nbc1qw508d...',
    addr3: 'P2TR\nbc1p5cyxn...',
    caption: 'Three labels print two possible payloads -- the address format is a printing choice on top of the script type, not a different kind of ownership.',
  },
  ja: {
    title: '中身は2種類、ラベル形式は3通り',
    desc: '秘密鍵から公開鍵が作られる。P2PKHとP2WPKHはその鍵をハッシュ化して20バイトの中身(Hash160)にする。P2TRは代わりに、コミットされたスクリプトのマークルルートで鍵を調整し、別の32バイトx-onlyの中身を作る。どちらの中身になっても、それがBase58Check・Bech32・Bech32mという3種類のラベル形式のいずれかに印字され、それぞれ独自のエラー検出符号を加えて、送金者が実際に入力するP2PKH・P2WPKH・P2TRアドレスになる。',
    priv: '秘密鍵',
    pub: '公開鍵',
    hash: 'Hash160\n(20バイトの\n中身)',
    tweak: 'Taproot鍵調整\n(x-onlyキー、\n32バイト)',
    label1: 'Base58Check\nラベル',
    label2: 'Bech32\nラベル',
    label3: 'Bech32m\nラベル',
    addr1: 'P2PKH\n1A1zP1eP...',
    addr2: 'P2WPKH\nbc1qw508d...',
    addr3: 'P2TR\nbc1p5cyxn...',
    caption: '3種類のラベルは、2つの中身のどちらかを印字したものにすぎない。アドレス形式の違いはスクリプトタイプの上に乗る印字の選択であり、所有権の種類が違うわけではない。',
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
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" ${fillOpacity !== null ? `fill-opacity="${fillOpacity}"` : ''} stroke="${stroke}" stroke-width="1.5"/>` +
    `<text x="${x + w / 2}" y="${y + h / 2}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, y + h / 2 - (label.split('\n').length - 1) * 6, label, 12)}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 820, H = 340;
  const y = 60;
  const boxW = 90, boxH = 46;

  const privX = 30, pubX = 150, hashX = 270;
  const tweakY = y + 100;

  const row1Y = y - boxH / 2, row2Y = tweakY - boxH / 2;

  const labelX = 420;
  const label1Y = 30, label2Y = 130, label3Y = 230;
  const addrX = 610;

  const inner =
    ARROWHEAD_DEFS +
    box(privX, row1Y, boxW, boxH, L.priv) +
    arrow(privX + boxW, y, pubX, y, {}) +
    box(pubX, row1Y, boxW, boxH, L.pub) +
    arrow(pubX + boxW, y, hashX, y, {}) +
    box(hashX, row1Y, boxW, boxH, L.hash) +
    arrow(pubX + boxW / 2, row1Y + boxH, pubX + boxW / 2, row2Y, {}) +
    box(pubX, row2Y, boxW, boxH, L.tweak) +
    arrow(hashX + boxW, y - 4, labelX, label1Y + boxH / 2, {}) +
    arrow(hashX + boxW, y + 4, labelX, label2Y + boxH / 2, {}) +
    arrow(pubX + boxW, tweakY, labelX, label3Y + boxH / 2, {}) +
    box(labelX, label1Y, boxW + 20, boxH, L.label1) +
    box(labelX, label2Y, boxW + 20, boxH, L.label2) +
    box(labelX, label3Y, boxW + 20, boxH, L.label3) +
    arrow(labelX + boxW + 20, label1Y + boxH / 2, addrX, label1Y + boxH / 2, {}) +
    arrow(labelX + boxW + 20, label2Y + boxH / 2, addrX, label2Y + boxH / 2, {}) +
    arrow(labelX + boxW + 20, label3Y + boxH / 2, addrX, label3Y + boxH / 2, {}) +
    box(addrX, label1Y, boxW + 60, boxH, L.addr1, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' }) +
    box(addrX, label2Y, boxW + 60, boxH, L.addr2, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' }) +
    box(addrX, label3Y, boxW + 60, boxH, L.addr3, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
