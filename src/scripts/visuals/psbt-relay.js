// PSBT as a single form routed hand to hand: each role along the chain adds
// exactly what it alone can add -- inputs and outputs, UTXO details, a
// partial signature -- and passes the same form on, never starting over.
// The last hand assembles the signatures already written into it into the
// final scriptSig or witness, ready for a transaction to be extracted from it.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'One form, routed hand to hand, never restarted',
    desc: 'A Partially Signed Bitcoin Transaction is one form passed from hand to hand: the Creator writes the inputs and outputs, the Updater attaches UTXO details, derivation paths, and sighash types, each Signer adds only their own partial signature -- on a hot wallet, then on a hardware device that verifies the outputs on its own screen before signing -- and the Finalizer assembles those signatures into the final scriptSig or witness, producing a transaction the node can validate and relay. No hand ever starts a new form or needs access to what an earlier hand does not share.',
    creator: 'Creator:\nwrites inputs\nand outputs',
    updater: 'Updater:\nattaches UTXO details,\nderivation paths, sighash types',
    signer1: 'Signer 1\n(hot wallet):\nadds a partial signature',
    signer2: 'Signer 2\n(hardware device):\nverifies outputs on screen,\nadds its signature',
    finalizer: 'Finalizer:\nassembles the final\nscriptSig / witness',
    broadcast: 'Broadcast --\nnode validates\nand relays',
    caption: 'Every hand adds only what it alone can add -- the signing device never needs to see the blockchain.',
  },
  ja: {
    title: '1枚の書類が手から手へ渡され、決して最初からやり直さない',
    desc: '部分署名済みビットコイントランザクション(PSBT)は、手から手へ渡される1枚の書類だ。作成者が入力と出力を書き込み、更新者がUTXOの詳細、派生パス、sighashタイプを添付し、各署名者はそれぞれ自分の部分署名だけを加える。まずホットウォレットで、次に署名前に自身の画面で出力を検証するハードウェアデバイスで。そして最終処理者がそれらの署名を最終的なscriptSigまたはwitnessに組み立て、ノードが検証・中継できるトランザクションを生み出す。どの手も新しい書類を始めることはなく、前の手が共有していないものへのアクセスを必要としない。',
    creator: '作成者:\n入力と出力を\n書き込む',
    updater: '更新者:\nUTXOの詳細、派生パス、\nsighashタイプを添付',
    signer1: '署名者1\n(ホットウォレット):\n部分署名を追加',
    signer2: '署名者2\n(ハードウェアデバイス):\n画面で出力を検証し、\n署名を追加',
    finalizer: '最終処理者:\n最終的なscriptSig /\nwitnessを組み立てる',
    broadcast: 'ブロードキャスト --\nノードが検証・中継',
    caption: 'どの手も、自分だけが加えられるものだけを加える。署名デバイスがブロックチェーンを見る必要は一度もない。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function box(x, y, w, h, label, opts = {}) {
  const { fill = 'var(--color-bg-alt)', stroke = 'var(--color-border)', fontSize = 10, fillOpacity = null } = opts;
  const lines = label.split('\n').length;
  const cy = y + h / 2 - (lines - 1) * 6;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" ${fillOpacity !== null ? `fill-opacity="${fillOpacity}"` : ''} stroke="${stroke}" stroke-width="1.5"/>` +
    `<text x="${x + w / 2}" y="${cy}" text-anchor="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, cy, label, 12)}</text>`
  );
}

function formIcon(cx, cy, colorVar) {
  return (
    `<rect x="${cx - 14}" y="${cy - 18}" width="28" height="36" rx="2" fill="${colorVar}" fill-opacity="0.12" stroke="${colorVar}" stroke-width="1.5"/>` +
    `<line x1="${cx - 8}" y1="${cy - 9}" x2="${cx + 8}" y2="${cy - 9}" stroke="${colorVar}" stroke-width="1.2"/>` +
    `<line x1="${cx - 8}" y1="${cy - 2}" x2="${cx + 8}" y2="${cy - 2}" stroke="${colorVar}" stroke-width="1.2"/>` +
    `<line x1="${cx - 8}" y1="${cy + 5}" x2="${cx + 4}" y2="${cy + 5}" stroke="${colorVar}" stroke-width="1.2"/>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 980, H = 230;
  const boxW = 145, boxH = 68;
  const y = 40;
  const step = 165;

  const xs = [20, 20 + step, 20 + step * 2, 20 + step * 3, 20 + step * 4];
  const labels = [L.creator, L.updater, L.signer1, L.signer2, L.finalizer];

  let chain = '';
  for (let i = 0; i < xs.length; i++) {
    if (i > 0) {
      chain += arrow(xs[i - 1] + boxW, y + boxH / 2, xs[i], y + boxH / 2, {});
      chain += formIcon((xs[i - 1] + boxW + xs[i]) / 2, 20, 'var(--color-hero-subtitle)');
    }
    const isLast = i === xs.length - 1;
    chain += box(xs[i], y, boxW, boxH, labels[i], isLast ? { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' } : {});
  }

  const lastX = xs[xs.length - 1];
  const inner =
    ARROWHEAD_DEFS +
    chain +
    arrow(lastX + boxW / 2, y + boxH, lastX + boxW / 2, y + boxH + 50, {}) +
    box(lastX + boxW / 2 - 80, y + boxH + 50, 160, 50, L.broadcast, { fill: 'var(--color-hero-subtitle)', fillOpacity: 0.12, stroke: 'var(--color-hero-subtitle)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
