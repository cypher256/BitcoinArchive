// Merge-mining as one sprint time checked against two qualifying bars in
// sequence: the same result first has to clear a strict bar, and only then
// is it checked against a second, much easier bar run by a different race.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'One sprint time, checked against two qualifying bars in turn',
    desc: 'A miner searching for a Litecoin nonce with Scrypt produces one hash value, exactly as before. That value is checked against Litecoin\'s own difficulty target -- a strict qualifying bar -- and becomes a Litecoin block once it clears that bar. The identical value is then also checked, at no extra cost, against Dogecoin\'s much easier target. A hash that clears only Litecoin\'s bar stays an ordinary Litecoin block. A hash that also clears Dogecoin\'s easier bar is submitted there as well, and the miner is paid on both chains for the one search.',
    hash: 'Hash found\nby Scrypt search',
    ltcGate: 'Litecoin\'s bar\n(strict target)',
    decision: 'Also clears\nDogecoin\'s\neasier bar?',
    no: 'no',
    yes: 'yes',
    outLtc: 'Litecoin block\nonly',
    outBoth: 'Same proof also\nsubmitted to Dogecoin --\npaid on both chains',
    caption: 'The same hash costs one search but can clear two bars in a row -- Dogecoin\'s hashrate has run on Litecoin\'s ever since.',
  },
  ja: {
    title: '一つのタイムを、二つの合格ラインで順に判定する',
    desc: 'ライトコインのナンスをScryptで探すマイナーは、これまでどおり一つのハッシュ値を得るだけだ。その値はまずライトコイン自身の難易度目標という厳しい合格ラインで判定され、これを満たせばライトコインのブロックになる。同じ値は続けて、追加の計算なしに、ドージコインのはるかに緩い目標でも判定される。ライトコインのラインだけを満たすハッシュは通常どおりのライトコインのブロックのままだ。ドージコインの緩いラインも満たすハッシュは、そちらにも提出され、マイナーは一度の探索で両方のチェーンから報酬を受け取る。',
    hash: 'Scrypt探索で\n見つかったハッシュ',
    ltcGate: 'ライトコインの\n合格ライン(厳格)',
    decision: 'ドージコインの\n緩いラインも\n満たすか?',
    no: 'いいえ',
    yes: 'はい',
    outLtc: 'ライトコインの\nブロックのまま',
    outBoth: '同じ証明をドージコイン\nにも提出 -- 両方の\nチェーンから報酬',
    caption: '同じハッシュは一回の探索で二つのラインを順に満たしうる -- 以来ドージコインのハッシュレートはライトコインに連動している。',
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
  const lines = label.split('\n').length;
  const cy = y + h / 2 - (lines - 1) * 6;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" ${fillOpacity !== null ? `fill-opacity="${fillOpacity}"` : ''} stroke="${stroke}" stroke-width="1.5"/>` +
    `<text x="${x + w / 2}" y="${cy}" text-anchor="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, cy, label, 12)}</text>`
  );
}

function branchLabel(x, y, text) {
  return `<text x="${x}" y="${y}" text-anchor="middle" fill="var(--color-text-muted)" font-size="10" font-family="var(--font-body, sans-serif)">${esc(text)}</text>`;
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 950, H = 320;
  const boxW = 150, boxH = 60;

  const hashX = 30, hashY = 130;
  const ltcGateX = 220, ltcGateY = 130;
  const decisionX = 420, decisionY = 130;
  const outLtcX = 680, outLtcY = 30;
  const outBothX = 680, outBothY = 230;

  let inner = ARROWHEAD_DEFS;

  inner += box(hashX, hashY, boxW, boxH, L.hash, { stroke: 'var(--color-satoshi)' });
  inner += arrow(hashX + boxW, hashY + boxH / 2, ltcGateX, ltcGateY + boxH / 2, {});

  inner += box(ltcGateX, ltcGateY, boxW, boxH, L.ltcGate, { stroke: 'var(--color-satoshi)' });
  inner += arrow(ltcGateX + boxW, ltcGateY + boxH / 2, decisionX, decisionY + boxH / 2, {});

  inner += box(decisionX, decisionY, boxW, boxH, L.decision, { stroke: 'var(--color-border)' });

  const decisionRightX = decisionX + boxW;
  const decisionCy = decisionY + boxH / 2;

  inner += `<line x1="${decisionRightX}" y1="${decisionCy}" x2="${decisionRightX + 40}" y2="${outLtcY + boxH / 2}" stroke="var(--color-text-muted)" stroke-width="2"/>`;
  inner += arrow(decisionRightX + 40, outLtcY + boxH / 2, outLtcX, outLtcY + boxH / 2, {});
  inner += branchLabel(decisionRightX + 40, outLtcY + boxH / 2 - 8, L.no);

  inner += `<line x1="${decisionRightX}" y1="${decisionCy}" x2="${decisionRightX + 40}" y2="${outBothY + boxH / 2}" stroke="var(--color-text-muted)" stroke-width="2"/>`;
  inner += arrow(decisionRightX + 40, outBothY + boxH / 2, outBothX, outBothY + boxH / 2, {});
  inner += branchLabel(decisionRightX + 40, outBothY + boxH / 2 - 8, L.yes);

  inner += box(outLtcX, outLtcY, boxW, boxH, L.outLtc, { stroke: 'var(--color-border)' });
  inner += box(outBothX, outBothY, boxW, boxH, L.outBoth, { fill: 'var(--color-hero-subtitle)', fillOpacity: 0.12, stroke: 'var(--color-hero-subtitle)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
