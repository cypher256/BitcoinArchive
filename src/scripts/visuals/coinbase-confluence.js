// The coinbase transaction as two rivers merging into one payout: newly
// minted coins and collected fees flow into the same coinbase output,
// capped by a single consensus rule that never checks the two sources
// separately -- only their sum against the allowed maximum.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Two revenue streams merge into one payout, under one cap',
    desc: "The subsidy (newly minted coins, halving every 210,000 blocks) and transaction fees (the sum of every non-coinbase transaction's input-minus-output difference in the block) are two separate revenue streams that merge into the same coinbase transaction. A single consensus rule then applies: total coinbase output value must not exceed the subsidy plus fees combined. The rule never checks either source alone -- only whether the merged total, once paid out to the miner's address, stays within the cap.",
    subsidy: 'Subsidy\n(newly minted,\nhalves every\n210,000 blocks)',
    fees: 'Transaction fees\n(sum of every\ninput - output\ndifference)',
    coinbase: 'Coinbase\ntransaction',
    output: "Miner's\noutput\naddress(es)",
    rule: 'Consensus rule:\ncoinbase output ≤\nsubsidy + fees combined',
    caption: 'The cap applies to the merged total only -- a miner claiming less than the max is always allowed; claiming more, from either source, is not.',
  },
  ja: {
    title: '2つの財源が1つの支払いに合流し、1つの上限に従う',
    desc: '新規発行分(新規鋳造コイン、210,000ブロックごとに半減)とトランザクション手数料(ブロックに収録された、コインベース取引を除く全トランザクションの入力マイナス出力の差分の合計)は、別々の2つの財源でありながら、同じコインベーストランザクションに合流する。適用される合意規則はただ1つ: コインベース出力の合計は、新規発行分と手数料を合わせた額を超えてはならない。この規則はどちらか一方の財源だけを個別に検査することはなく、マイナーのアドレスへ支払われる合流後の合計額が上限内に収まっているかだけを見る。',
    subsidy: '新規発行分\n(新規鋳造、\n210,000ブロック\nごとに半減)',
    fees: 'トランザクション\n手数料\n(全入力-出力\n差分の合計)',
    coinbase: 'コインベース\nトランザクション',
    output: 'マイナーの\n出力\nアドレス',
    rule: '合意規則:\nコインベース出力 ≤\n新規発行分+手数料の合計',
    caption: '上限は合流後の合計にだけ適用される。上限より少なく請求するのは常に許されるが、どちらの財源からであれ多く請求することは許されない。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 780, H = 300;
  const boxW = 150, boxH = 60;

  const subsidyX = 30, subsidyY = 30;
  const feesX = 30, feesY = 160;
  const coinbaseX = 300, coinbaseY = 95, coinbaseW = 140, coinbaseH = 60;
  const outputX = 560, outputY = 95;
  const ruleX = 220, ruleY = 210, ruleW = 320, ruleH = 60;

  const inner =
    ARROWHEAD_DEFS +
    `<rect x="${subsidyX}" y="${subsidyY}" width="${boxW}" height="${boxH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${subsidyX + boxW / 2}" y="${subsidyY + boxH / 2 - 12}" text-anchor="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(subsidyX + boxW / 2, subsidyY + boxH / 2 - 12, L.subsidy, 12)}</text>` +
    `<rect x="${feesX}" y="${feesY}" width="${boxW}" height="${boxH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${feesX + boxW / 2}" y="${feesY + boxH / 2 - 12}" text-anchor="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(feesX + boxW / 2, feesY + boxH / 2 - 12, L.fees, 12)}</text>` +
    `<path d="M ${subsidyX + boxW},${subsidyY + boxH / 2} C ${subsidyX + boxW + 100},${subsidyY + boxH / 2} ${coinbaseX - 60},${coinbaseY + coinbaseH / 2} ${coinbaseX},${coinbaseY + coinbaseH / 2 - 10}" fill="none" stroke="var(--color-hero-subtitle)" stroke-width="2.5" marker-end="url(#v-arrowhead)"/>` +
    `<path d="M ${feesX + boxW},${feesY + boxH / 2} C ${feesX + boxW + 100},${feesY + boxH / 2} ${coinbaseX - 60},${coinbaseY + coinbaseH / 2} ${coinbaseX},${coinbaseY + coinbaseH / 2 + 10}" fill="none" stroke="var(--color-hero-subtitle)" stroke-width="2.5" marker-end="url(#v-arrowhead)"/>` +
    `<rect x="${coinbaseX}" y="${coinbaseY}" width="${coinbaseW}" height="${coinbaseH}" rx="8" fill="var(--color-satoshi)" opacity="0.1" stroke="var(--color-satoshi)" stroke-width="2"/>` +
    `<text x="${coinbaseX + coinbaseW / 2}" y="${coinbaseY + coinbaseH / 2 - 6}" text-anchor="middle" fill="var(--color-text)" font-size="11" font-family="var(--font-body, sans-serif)">${multiline(coinbaseX + coinbaseW / 2, coinbaseY + coinbaseH / 2 - 6, L.coinbase, 13)}</text>` +
    arrow(coinbaseX + coinbaseW, coinbaseY + coinbaseH / 2, outputX, outputY + boxH / 2, {}) +
    `<rect x="${outputX}" y="${outputY}" width="${boxW}" height="${boxH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${outputX + boxW / 2}" y="${outputY + boxH / 2 - 12}" text-anchor="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(outputX + boxW / 2, outputY + boxH / 2 - 12, L.output, 12)}</text>` +
    `<path d="M ${coinbaseX + coinbaseW / 2},${coinbaseY + coinbaseH} L ${ruleX + ruleW / 2},${ruleY}" fill="none" stroke="var(--color-text-muted)" stroke-width="1.5" stroke-dasharray="4,3"/>` +
    `<rect x="${ruleX}" y="${ruleY}" width="${ruleW}" height="${ruleH}" rx="6" fill="none" stroke="var(--color-text-muted)" stroke-width="1.5" stroke-dasharray="4,3"/>` +
    `<text x="${ruleX + ruleW / 2}" y="${ruleY + ruleH / 2 - 6}" text-anchor="middle" fill="var(--color-text-muted)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(ruleX + ruleW / 2, ruleY + ruleH / 2 - 6, L.rule, 12)}</text>`;

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
