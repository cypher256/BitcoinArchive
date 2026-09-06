// An Inscription as a sealed envelope tucked inside a transaction's
// witness data: the envelope (content type plus data) rides alongside
// the spending signature, inside a normal Taproot input -- every full
// node opens and stores it like any other consensus-valid data, and it
// counts toward block weight like any other byte.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'An Inscription is a sealed envelope riding inside the witness',
    desc: 'A transaction input spending a Taproot UTXO carries a witness. Alongside the Schnorr signature that authorizes the spend sits a sealed envelope -- an OP_FALSE OP_IF ... OP_ENDIF block holding a content type and arbitrary data. This envelope lives entirely in L1 witness space: every full node validates it, stores it, and counts every byte of it toward the 4 MWU block weight limit, exactly like any other on-chain data.',
    input: 'Input\n(spends a\nTaproot UTXO)',
    witness: 'Witness (Tapscript path)',
    sig: 'Schnorr\nsignature',
    envelope: 'Envelope:\nOP_FALSE OP_IF\n  content-type\n  data push(es)\nOP_ENDIF',
    output: 'Output\n(P2TR to\nrecipient)',
    note: 'Consensus-valid, stored by every full node,\ncounted toward the 4 MWU block weight limit',
    caption: 'The envelope is not a side channel -- it is ordinary witness data, validated and stored exactly like the signature sitting next to it.',
  },
  ja: {
    title: 'InscriptionはWitnessに同乗する封をした封筒',
    desc: 'TaprootのUTXOを消費するトランザクション入力はWitnessを持つ。支出を認可するシュノア署名の隣に、封をした封筒が乗っている。これはOP_FALSE OP_IF ... OP_ENDIFのブロックで、コンテンツタイプと任意のデータを保持する。この封筒は完全にL1のWitness空間に存在する。全フルノードがそれを検証・保存し、そのすべてのバイトが4 MWUのブロックウェイト上限に、他のオンチェーンデータと全く同じように算入される。',
    input: '入力\n(TaprootのUTXO\nを消費)',
    witness: 'Witness (Tapscriptパス)',
    sig: 'シュノア\n署名',
    envelope: 'エンベロープ:\nOP_FALSE OP_IF\n  content-type\n  data push(es)\nOP_ENDIF',
    output: '出力\n(受取人への\nP2TR)',
    note: 'コンセンサス上有効、全フルノードが保存、\n4 MWUのブロックウェイト上限に算入',
    caption: '封筒は裏の抜け道ではない。隣にある署名と全く同じように検証・保存される、ただのWitnessデータだ。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function envelopeIcon(x, y, w, h, colorVar) {
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${colorVar}" opacity="0.12" stroke="${colorVar}" stroke-width="2"/>` +
    `<path d="M${x},${y} L${x + w / 2},${y + h * 0.55} L${x + w},${y}" fill="none" stroke="${colorVar}" stroke-width="1.5"/>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 820, H = 400;

  const inputX = 30, inputY = 150, inputW = 110, inputH = 60;
  const witX = 200, witY = 40, witW = 380, witH = 280;
  const sigX = witX + 30, sigY = witY + 40, sigW = 100, sigH = 50;
  const envX = witX + 30, envY = sigY + 90, envW = 320, envH = 130;
  const outputX = 650, outputY = 150, outputW = 110, outputH = 60;

  const inner =
    ARROWHEAD_DEFS +
    `<rect x="${inputX}" y="${inputY}" width="${inputW}" height="${inputH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${inputX + inputW / 2}" y="${inputY + inputH / 2 - 6}" text-anchor="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(inputX + inputW / 2, inputY + inputH / 2 - 6, L.input, 12)}</text>` +
    arrow(inputX + inputW, inputY + inputH / 2, witX, inputY + inputH / 2, {}) +
    `<rect x="${witX}" y="${witY}" width="${witW}" height="${witH}" rx="8" fill="none" stroke="var(--color-border)" stroke-width="1.5" stroke-dasharray="4,3"/>` +
    `<text x="${witX + witW / 2}" y="${witY + 18}" text-anchor="middle" fill="var(--color-text-muted)" font-size="11" font-family="var(--font-body, sans-serif)">${esc(L.witness)}</text>` +
    `<rect x="${sigX}" y="${sigY}" width="${sigW}" height="${sigH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${sigX + sigW / 2}" y="${sigY + sigH / 2 - 6}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(sigX + sigW / 2, sigY + sigH / 2 - 6, L.sig, 12)}</text>` +
    envelopeIcon(envX, envY, envW, envH, 'var(--color-hero-subtitle)') +
    `<text x="${envX + envW / 2}" y="${envY + envH / 2 - 4}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, monospace)">${multiline(envX + envW / 2, envY + envH / 2 - 4, L.envelope, 14)}</text>` +
    arrow(witX + witW, inputY + inputH / 2, outputX, inputY + inputH / 2, {}) +
    `<rect x="${outputX}" y="${outputY}" width="${outputW}" height="${outputH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${outputX + outputW / 2}" y="${outputY + outputH / 2 - 6}" text-anchor="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(outputX + outputW / 2, outputY + outputH / 2 - 6, L.output, 12)}</text>` +
    `<text x="${witX + witW / 2}" y="${witY + witH + 30}" text-anchor="middle" fill="var(--color-text-muted)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(witX + witW / 2, witY + witH + 30, L.note, 14)}</text>`;

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
