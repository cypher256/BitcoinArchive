// The quantum attack path as duplicating a key from a visible lock shape:
// a public key sitting on-chain is like a lock's shape left in plain
// sight -- a large enough quantum computer running Shor's algorithm can
// cut a working duplicate key from that shape alone, without ever
// touching the original.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A duplicate key cut from a lock shape left in plain sight',
    desc: 'A public key sitting visibly on-chain is like a lock\'s shape left in plain sight. A cryptographically relevant quantum computer running Shor\'s algorithm can cut a working duplicate of the private key directly from that visible shape -- no theft of the original key required. From there the attack is mechanical: sign a spending transaction with the duplicate, broadcast it to the network, and the coins move before the real owner notices. The whole chain only works if the public key was visible on-chain in the first place.',
    pubkey: 'Public key\nvisible on-chain\n(the lock shape)',
    shor: 'Shor\'s algorithm\non a large enough\nquantum computer',
    privkey: 'Private key\nrecovered\n(the duplicate key)',
    sign: 'Sign an\nattacker-spending\ntransaction',
    broadcast: 'Broadcast to\nthe network',
    done: 'Coins moved before\nthe owner notices',
    caption: 'The duplicate is cut from the visible shape alone -- the original key is never touched.',
  },
  ja: {
    title: '目に見える鍵穴の形から、複製鍵が作られる',
    desc: 'オンチェーンで目に見える公開鍵は、人目にさらされた鍵穴の形のようなものだ。暗号学的に意味のある量子コンピューターがショアのアルゴリズムを実行すれば、その見えている形だけから、秘密鍵の複製をそのまま作り出せる。元の鍵そのものを盗む必要は一切ない。そこから先は機械的な手順だ。複製鍵で支出トランザクションに署名し、ネットワークにブロードキャストすれば、本当の持ち主が気づく前にコインは移動している。この一連の流れが成立するのは、そもそも公開鍵がオンチェーンで見えていた場合に限られる。',
    pubkey: '公開鍵が\nオンチェーンで可視\n(鍵穴の形)',
    shor: '十分な規模の\n量子コンピューターで\nショアのアルゴリズムを実行',
    privkey: '秘密鍵が復元される\n(複製された鍵)',
    sign: '攻撃者による\n支出トランザクション\nに署名',
    broadcast: 'ネットワークへ\nブロードキャスト',
    done: '持ち主が気づく前に\nコインが移動',
    caption: '複製は見えている形だけから作られる。元の鍵そのものには一度も触れられない。',
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

function lockIcon(cx, cy, colorVar) {
  return (
    `<path d="M${cx - 12},${cy - 4} v-8 a12,12 0 0 1 24,0 v8" fill="none" stroke="${colorVar}" stroke-width="3"/>` +
    `<rect x="${cx - 17}" y="${cy - 4}" width="34" height="24" rx="3" fill="${colorVar}" fill-opacity="0.12" stroke="${colorVar}" stroke-width="2"/>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 1040, H = 150;
  const boxW = 150, boxH = 70;
  const y = 60;
  const step = 172;

  const xs = [20, 20 + step, 20 + step * 2, 20 + step * 3, 20 + step * 4, 20 + step * 5];
  const labels = [L.pubkey, L.shor, L.privkey, L.sign, L.broadcast, L.done];

  let inner = ARROWHEAD_DEFS + lockIcon(xs[0] + boxW / 2, y - 24, 'var(--color-satoshi)');
  for (let i = 0; i < xs.length; i++) {
    if (i > 0) inner += arrow(xs[i - 1] + boxW, y + boxH / 2, xs[i], y + boxH / 2, {});
    const isLast = i === xs.length - 1;
    inner += box(xs[i], y, boxW, boxH, labels[i], isLast ? { fill: 'var(--color-satoshi)', fillOpacity: 0.12, stroke: 'var(--color-satoshi)' } : { stroke: i === 1 ? 'var(--color-hero-subtitle)' : 'var(--color-border)' });
  }

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
