// The security budget as revenue funding a shield: block reward becomes
// daily miner revenue, that revenue is spent on hardware and energy, and
// the hash rate those purchases produce is the very thing an attacker
// must out-buy and out-spend to overpower -- the shield's size is set by
// how much revenue funds it, nothing else.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Revenue funds a shield the attacker must out-buy',
    desc: 'Block subsidy and transaction fees combine into the block reward, which funds miner daily revenue (144 blocks worth per day). That revenue is spent on two things: hardware and energy. Both purchases produce network hash rate. The attack cost is simply the cost of acquiring and operating more than half of that same hash rate -- the shield is exactly as large as the revenue that funds it, nothing more.',
    subsidy: 'Block subsidy',
    fees: 'Transaction\nfees',
    reward: 'Block reward',
    revenue: 'Miner daily\nrevenue',
    hardware: 'Hardware\ninvestment',
    energy: 'Energy\nconsumption',
    hashrate: 'Network\nhash rate',
    cost: 'Attack cost =\ncost to acquire\n>50% of this',
    caption: 'The shield is not a separate defense -- it is made of the same revenue stream it protects.',
  },
  ja: {
    title: '収入が、攻撃者が買い負けなければならない盾を作る',
    desc: 'ブロックの新規発行分とトランザクション手数料が合わさってブロック報酬になり、それがマイナーの日次収入(1日あたり144ブロック分)を賄う。その収入は2つのものに支出される。ハードウェアとエネルギーだ。どちらの支出もネットワークハッシュレートを生み出す。攻撃コストとは、単にその同じハッシュレートの50%超を取得・運用するコストにすぎない。盾の大きさは、それを賄う収入の大きさとちょうど同じであり、それ以上ではない。',
    subsidy: 'ブロック\n新規発行分',
    fees: 'トランザクション\n手数料',
    reward: 'ブロック報酬',
    revenue: 'マイナーの\n日次収入',
    hardware: 'ハードウェア\n投資',
    energy: 'エネルギー\n消費',
    hashrate: 'ネットワーク\nハッシュレート',
    cost: '攻撃コスト =\nこの50%超を\n取得するコスト',
    caption: '盾は独立した防御ではない。それが守っているのと同じ収入の流れでできている。',
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

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 900, H = 300;
  const boxW = 120, boxH = 50;

  const subsidyX = 20, subsidyY = 30;
  const feesX = 20, feesY = 110;
  const rewardX = 180, rewardY = 70;
  const revenueX = 320, revenueY = 70;
  const hardwareX = 460, hardwareY = 20;
  const energyX = 460, energyY = 120;
  const hashrateX = 620, hashrateY = 70;
  const costX = 750, costY = 70;

  const inner =
    ARROWHEAD_DEFS +
    box(subsidyX, subsidyY, boxW, boxH, L.subsidy) +
    box(feesX, feesY, boxW, boxH, L.fees) +
    `<path d="M ${subsidyX + boxW},${subsidyY + boxH / 2} H ${rewardX - 15} V ${rewardY + boxH / 2 - 8}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<path d="M ${feesX + boxW},${feesY + boxH / 2} H ${rewardX - 15} V ${rewardY + boxH / 2 + 8}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(rewardX, rewardY, boxW, boxH, L.reward, { fill: 'var(--color-hero-subtitle)', stroke: 'var(--color-hero-subtitle)' }) +
    arrow(rewardX + boxW, rewardY + boxH / 2, revenueX, revenueY + boxH / 2, {}) +
    box(revenueX, revenueY, boxW, boxH, L.revenue) +
    `<path d="M ${revenueX + boxW},${revenueY + boxH / 2} H ${hardwareX - 15} V ${hardwareY + boxH / 2}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<path d="M ${revenueX + boxW},${revenueY + boxH / 2} H ${energyX - 15} V ${energyY + boxH / 2}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(hardwareX, hardwareY, boxW, boxH, L.hardware) +
    box(energyX, energyY, boxW, boxH, L.energy) +
    `<path d="M ${hardwareX + boxW},${hardwareY + boxH / 2} H ${hashrateX - 15} V ${hashrateY + boxH / 2 - 8}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<path d="M ${energyX + boxW},${energyY + boxH / 2} H ${hashrateX - 15} V ${hashrateY + boxH / 2 + 8}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(hashrateX, hashrateY, boxW, boxH, L.hashrate, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' }) +
    arrow(hashrateX + boxW, hashrateY + boxH / 2, costX, costY + boxH / 2, {}) +
    box(costX, costY, boxW + 10, boxH, L.cost, { stroke: 'var(--color-satoshi)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
