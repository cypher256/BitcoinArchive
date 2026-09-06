// Selfish mining as holding a winning card instead of playing it: an
// honest miner plays every card the moment they draw it. A selfish miner
// sits on a card, keeps drawing more in private, and only plays their
// held hand the instant the honest side plays one -- discarding the
// honest card and the work behind it.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Withholding a winning card instead of playing it immediately',
    desc: 'An honest miner plays every block the moment they find it. A selfish miner instead withholds a found block, keeps mining in private to extend a hidden lead, and only reveals the withheld chain the instant the honest network plays a competing block -- discarding that honest block and the work spent finding it. If the honest network never catches up, the selfish miner keeps extending the private chain indefinitely.',
    honestTitle: 'Honest miner',
    honestFind: 'Finds block',
    honestPlay: 'Plays it\nimmediately',
    selfishTitle: 'Selfish miner',
    selfishFind: 'Finds block',
    selfishHold: 'Withholds it,\nmines the next\none in private',
    check: 'Honest network\nfinds a block?',
    keepMining: 'No: keep mining\nprivate lead',
    release: 'Yes: release\nwithheld chain now,\ndiscard honest block',
    caption: 'The withheld chain is played only at the moment it does the most damage -- not the moment it is found.',
  },
  ja: {
    title: '勝ち札をすぐに出さず、手元に隠し持つ',
    desc: '正直なマイナーは、ブロックを見つけた瞬間にそれを出す。利己的なマイナーは代わりに、見つけたブロックを手元に隠し持ち、隠れたリードを伸ばすために非公開でマイニングを続け、正直なネットワークが対抗ブロックを出した瞬間にだけ、隠していたチェーンを公開する。それにより、その正直なブロックと、それを見つけるために費やされた作業が無駄になる。正直なネットワークが追いつかなければ、利己的なマイナーは非公開のチェーンを際限なく伸ばし続ける。',
    honestTitle: '正直なマイナー',
    honestFind: 'ブロック発見',
    honestPlay: '即座に出す',
    selfishTitle: '利己的なマイナー',
    selfishFind: 'ブロック発見',
    selfishHold: '隠し持ち、\n次のブロックを\n非公開で採掘',
    check: '正直なネットワークが\nブロックを発見?',
    keepMining: 'いいえ: 非公開の\nリードを伸ばし続ける',
    release: 'はい: 今すぐ隠していた\nチェーンを公開し、\n正直なブロックを破棄',
    caption: '隠していたチェーンは、最も打撃が大きい瞬間にだけ公開される。見つけた瞬間ではない。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function box(x, y, w, h, label, opts = {}) {
  const { fill = 'var(--color-bg-alt)', stroke = 'var(--color-border)', fontSize = 10.5, opacity = null, dashed = false } = opts;
  const lines = label.split('\n').length;
  const cy = y + h / 2 - (lines - 1) * 6;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" ${opacity !== null ? `fill-opacity="${opacity}"` : ''} stroke="${stroke}" stroke-width="1.5" ${dashed ? 'stroke-dasharray="4,3"' : ''}/>` +
    `<text x="${x + w / 2}" y="${cy}" text-anchor="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, cy, label, 12)}</text>`
  );
}

function cardIcon(cx, cy, colorVar) {
  return `<rect x="${cx - 12}" y="${cy - 16}" width="24" height="32" rx="3" fill="${colorVar}" opacity="0.15" stroke="${colorVar}" stroke-width="1.5"/>`;
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 900, H = 340;
  const boxW = 150, boxH = 50;

  const honestY = 40;
  const selfishY = 220;
  const findX = 40, playX = 260;
  const checkX = 480, checkY = 130;
  const keepX = 700, keepY = 40;
  const releaseX = 700, releaseY = 220;

  const inner =
    ARROWHEAD_DEFS +
    `<text x="${findX + boxW / 2}" y="${honestY - 16}" text-anchor="middle" fill="var(--color-hero-subtitle)" font-size="11" font-family="var(--font-body, sans-serif)">${esc(L.honestTitle)}</text>` +
    cardIcon(findX + boxW / 2, honestY + boxH / 2, 'var(--color-hero-subtitle)') +
    `<text x="${findX + boxW / 2}" y="${honestY + boxH + 16}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${esc(L.honestFind)}</text>` +
    arrow(findX + boxW / 2 + 20, honestY + boxH / 2, playX - 10, honestY + boxH / 2, {}) +
    box(playX, honestY, boxW, boxH, L.honestPlay, { fill: 'var(--color-hero-subtitle)', stroke: 'var(--color-hero-subtitle)' }) +
    `<text x="${findX + boxW / 2}" y="${selfishY - 16}" text-anchor="middle" fill="var(--color-satoshi)" font-size="11" font-family="var(--font-body, sans-serif)">${esc(L.selfishTitle)}</text>` +
    cardIcon(findX + boxW / 2, selfishY + boxH / 2, 'var(--color-satoshi)') +
    `<text x="${findX + boxW / 2}" y="${selfishY + boxH + 16}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${esc(L.selfishFind)}</text>` +
    arrow(findX + boxW / 2 + 20, selfishY + boxH / 2, playX - 10, selfishY + boxH / 2, {}) +
    box(playX, selfishY, boxW, boxH, L.selfishHold, { stroke: 'var(--color-satoshi)', dashed: true }) +
    arrow(playX + boxW, selfishY + boxH / 2, checkX, checkY + boxH / 2, {}) +
    box(checkX, checkY, boxW, boxH, L.check, { stroke: 'var(--color-satoshi)' }) +
    `<path d="M ${checkX + boxW},${checkY + 12} H ${keepX} V ${keepY + boxH}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(keepX, keepY, boxW, boxH, L.keepMining) +
    `<path d="M ${keepX + boxW},${keepY + boxH / 2} H 875 V 300 H ${playX + boxW / 2} V ${selfishY + boxH}" fill="none" stroke="var(--color-text-muted)" stroke-width="1.5" stroke-dasharray="3,3" marker-end="url(#v-arrowhead)"/>` +
    `<path d="M ${checkX + boxW},${checkY + boxH - 12} H ${releaseX} V ${releaseY}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(releaseX, releaseY, boxW, boxH, L.release, { fill: 'var(--color-satoshi)', opacity: 0.1, stroke: 'var(--color-satoshi)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
