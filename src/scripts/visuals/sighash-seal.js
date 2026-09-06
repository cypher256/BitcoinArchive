// Signing and verification as a wax seal on a letter: the sender presses
// their private seal into a summary of the letter's contents (the sighash,
// not the whole letter), and the recipient checks the impression against
// the sender's known public seal shape -- without ever holding the private
// seal itself.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A signature is a wax seal pressed into a summary, not the letter itself',
    desc: 'The spender computes the sighash, a digest of the transaction data selected by the sighash flag, then presses their private key into that digest like a seal, producing a signature attached to the transaction. A verifying node recomputes the same digest independently and checks the seal impression against the public key -- valid or not, without the private key ever being exposed.',
    sender: 'Key holder',
    tx: 'Transaction\n(inputs, outputs)',
    digest: 'sighash\n(digest of\ntx data)',
    sealPress: 'Sign: σ = Sign(k, sighash)\n(private key presses the seal)',
    attach: 'σ attached to\nwitness / scriptSig',
    broadcast: 'Broadcast',
    node: 'Verifying node',
    recompute: 'Recompute\nsighash',
    check: 'Verify(K, sighash, σ)\n(check seal against\npublic key)',
    result: 'Valid -> accept\ninto mempool',
    caption: 'The seal proves the digest was pressed by the matching private key -- it never requires revealing that key.',
  },
  ja: {
    title: '署名は手紙そのものではなく、要約に押す封蝋',
    desc: '支出者はsighash(sighashフラグが選ぶトランザクションデータのダイジェスト)を計算し、そのダイジェストに秘密鍵を封蝋のように押し当てて署名を作り、トランザクションに添付する。検証ノードは同じダイジェストを独立に再計算し、封蝋の跡を公開鍵と照合する。有効か無効かが分かるだけで、秘密鍵が明かされることは一度もない。',
    sender: '鍵保有者',
    tx: 'トランザクション\n(入力、出力)',
    digest: 'sighash\n(txデータの\nダイジェスト)',
    sealPress: '署名: σ = Sign(k, sighash)\n(秘密鍵が封蝋を押す)',
    attach: 'σ を witness /\nscriptSig に添付',
    broadcast: 'ブロードキャスト',
    node: '検証ノード',
    recompute: 'sighash を\n再計算',
    check: 'Verify(K, sighash, σ)\n(封蝋を公開鍵と照合)',
    result: '有効 -> メモリー\nプールへ受理',
    caption: '封蝋は、対応する秘密鍵がダイジェストを押したことを証明する。その秘密鍵を明かす必要は一度もない。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function sealIcon(cx, cy, r, colorVar) {
  return (
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${colorVar}" opacity="0.15" stroke="${colorVar}" stroke-width="2"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r * 0.5}" fill="none" stroke="${colorVar}" stroke-width="1.5"/>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 820, H = 475;

  const topY = 40;
  const senderX = 60, txX = 220, digestX = 380;
  const boxW = 130, boxH = 44;

  const sealY = 150;
  const sealCx = 380;

  const attachY = 250;
  const broadcastY = 310;

  const nodeLabelY = 345;
  const boxRowY = 385;
  const recomputeX = 220, checkX = 420, resultX = 620;

  const top =
    `<text x="${senderX}" y="${topY}" text-anchor="middle" fill="var(--color-text)" font-size="11.5" font-family="var(--font-body, sans-serif)">${esc(L.sender)}</text>` +
    arrow(senderX + 30, topY - 4, txX - boxW / 2, topY - 4, {}) +
    `<rect x="${txX - boxW / 2}" y="${topY - 24}" width="${boxW}" height="${boxH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${txX}" y="${topY - 4}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(txX, topY - 12, L.tx, 12)}</text>` +
    arrow(txX + boxW / 2, topY - 4, digestX - boxW / 2, topY - 4, {}) +
    `<rect x="${digestX - boxW / 2}" y="${topY - 24}" width="${boxW}" height="${boxH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${digestX}" y="${topY - 4}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(digestX, topY - 12, L.digest, 12)}</text>`;

  const seal =
    arrow(digestX, topY - 24 + boxH, sealCx, sealY - 32, {}) +
    sealIcon(sealCx, sealY, 30, 'var(--color-hero-subtitle)') +
    `<text x="${sealCx}" y="${sealY + 50}" text-anchor="middle" fill="var(--color-hero-subtitle)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(sealCx, sealY + 50, L.sealPress, 12)}</text>`;

  const attach =
    arrow(sealCx, sealY + 72, sealCx, attachY - 20, {}) +
    `<rect x="${sealCx - boxW / 2}" y="${attachY - 20}" width="${boxW}" height="${boxH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${sealCx}" y="${attachY + 2}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(sealCx, attachY - 6, L.attach, 12)}</text>` +
    arrow(sealCx, attachY + boxH - 20, sealCx, broadcastY, {}) +
    `<text x="${sealCx + 60}" y="${broadcastY - 6}" text-anchor="middle" fill="var(--color-text-muted)" font-size="10" font-family="var(--font-body, sans-serif)">${esc(L.broadcast)}</text>`;

  const bottom =
    `<path d="M ${sealCx},${broadcastY} V ${nodeLabelY + 10} H ${recomputeX} V ${boxRowY - boxH / 2}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<text x="${checkX}" y="${nodeLabelY}" text-anchor="middle" fill="var(--color-text)" font-size="11.5" font-family="var(--font-body, sans-serif)">${esc(L.node)}</text>` +
    `<rect x="${recomputeX - boxW / 2}" y="${boxRowY - boxH / 2}" width="${boxW}" height="${boxH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${recomputeX}" y="${boxRowY - 6}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(recomputeX, boxRowY - 8, L.recompute, 12)}</text>` +
    arrow(recomputeX + boxW / 2, boxRowY, checkX - 26, boxRowY, {}) +
    sealIcon(checkX, boxRowY, 26, 'var(--color-satoshi)') +
    `<text x="${checkX}" y="${boxRowY + 44}" text-anchor="middle" fill="var(--color-satoshi)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(checkX, boxRowY + 44, L.check, 12)}</text>` +
    arrow(checkX + 26, boxRowY, resultX - boxW / 2, boxRowY, {}) +
    `<rect x="${resultX - boxW / 2}" y="${boxRowY - 22}" width="${boxW}" height="${boxH}" rx="6" fill="var(--color-accent)" opacity="0.12" stroke="var(--color-accent)" stroke-width="2"/>` +
    `<text x="${resultX}" y="${boxRowY - 6}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(resultX, boxRowY - 8, L.result, 12)}</text>`;

  const inner = ARROWHEAD_DEFS + top + seal + attach + bottom;
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
