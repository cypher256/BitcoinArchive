// Chain selection as a scale: an incoming block first clears a validity
// gate, then either extends the current tip directly or gets weighed
// against it -- the heavier side (more accumulated work, not more blocks)
// wins the scale and becomes the new tip. Drawn level, not tipped toward
// either side: which pan is actually heavier depends on the two chains
// being compared, not on which one is "new".
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Chains are not counted, they are weighed',
    desc: 'An incoming block first clears a validity gate. If it extends the current best chain, it is accepted immediately. If not, its branch is weighed against the current best chain on a scale of total accumulated proof of work, not block count -- the heavier side wins and becomes the new tip.',
    incoming: 'New\nblock',
    gate: 'Valid?',
    extends: 'Extends\ntip?',
    acceptDirect: 'Accept,\nupdate tip',
    currentChain: 'Current best\nchain (work)',
    newBranch: 'New branch\n(work)',
    reject: 'Reject',
    outcome: 'Heavier pan wins:\nstore the lighter branch, reorg to the heavier one',
    caption: 'Weight is total accumulated proof of work, not the number of blocks -- a shorter chain can outweigh a longer one, and either pan can be the heavier one.',
  },
  ja: {
    title: 'チェーンは数えるのではなく、重さで比べる',
    desc: '届いたブロックはまず有効性ゲートを通る。現在の最良チェーンを延長するなら即座に受理される。そうでなければ、その分岐はブロック数ではなく累積プルーフ・オブ・ワークという重さで、現在の最良チェーンと天秤にかけられる。重い方が勝ち、新しい先端になる。',
    incoming: '新規\nブロック',
    gate: '有効?',
    extends: '先端を\n延長?',
    acceptDirect: '受理、\n先端更新',
    currentChain: '現在の最良\nチェーン(作業量)',
    newBranch: '新しい分岐\n(作業量)',
    reject: '却下',
    outcome: '重い方の皿が勝つ:\n軽い分岐は保存、重い分岐へ再編成',
    caption: '重さはブロック数ではなく累積プルーフ・オブ・ワークだ。短いチェーンが長いチェーンより重いこともあれば、どちらの皿が重くなるかもその時々で変わる。',
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
  const W = 820, H = 335;

  const y = 40;
  const incomingX = 50;
  const gateX = 150, gateY = y - 25, gateW = 70, gateH = 50;
  const extendsX = 270, extendsY = y - 30, extendsW = 90, extendsH = 60;
  const acceptX = 420, acceptY = y - 30, acceptW = 110, acceptH = 60;
  const rejectY = y + 90;

  const pivotX = 350, pivotY = 190, beamHalf = 150;
  const beamY = pivotY - 6;
  const leftArmX = pivotX - beamHalf, rightArmX = pivotX + beamHalf;
  const armLen = 45;
  const leftPanY = beamY + armLen, rightPanY = beamY + armLen;

  const flow =
    `<text x="${incomingX}" y="${y}" text-anchor="middle" fill="var(--color-text)" font-size="11" font-family="var(--font-body, sans-serif)">${multiline(incomingX, y - 5, L.incoming)}</text>` +
    arrow(incomingX + 30, y, gateX, y, {}) +
    `<rect x="${gateX}" y="${gateY}" width="${gateW}" height="${gateH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${gateX + gateW / 2}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="11.5" font-family="var(--font-body, sans-serif)">${esc(L.gate)}</text>` +
    arrow(gateX + gateW / 2, gateY + gateH, gateX + gateW / 2, rejectY, { dashed: true, stroke: 'var(--color-satoshi)' }) +
    `<text x="${gateX + gateW / 2 + 8}" y="${(gateY + gateH + rejectY) / 2}" fill="var(--color-satoshi)" font-size="10.5" font-family="var(--font-body, sans-serif)">${esc(L.reject)}</text>` +
    arrow(gateX + gateW, y, extendsX, y, {}) +
    `<rect x="${extendsX}" y="${extendsY}" width="${extendsW}" height="${extendsH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${extendsX + extendsW / 2}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="11.5" font-family="var(--font-body, sans-serif)">${multiline(extendsX + extendsW / 2, y - 6, L.extends)}</text>` +
    arrow(extendsX + extendsW, y, acceptX, y, {}) +
    `<rect x="${acceptX}" y="${acceptY}" width="${acceptW}" height="${acceptH}" rx="8" fill="var(--color-accent)" opacity="0.12" stroke="var(--color-accent)" stroke-width="2"/>` +
    `<text x="${acceptX + acceptW / 2}" y="${y}" text-anchor="middle" dominant-baseline="middle" fill="var(--color-text)" font-size="11" font-family="var(--font-body, sans-serif)">${multiline(acceptX + acceptW / 2, y - 6, L.acceptDirect)}</text>` +
    `<text x="${(extendsX + extendsW + acceptX) / 2}" y="${y - 12}" text-anchor="middle" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${lang === 'ja' ? 'はい' : 'Yes'}</text>` +
    `<path d="M ${extendsX + extendsW / 2},${extendsY + extendsH} V ${beamY - 45} H ${pivotX} V ${beamY - 6}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<text x="${extendsX + extendsW / 2 + 8}" y="${extendsY + extendsH + 16}" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${lang === 'ja' ? 'いいえ' : 'No'}</text>`;

  const scale =
    `<polygon points="${pivotX - 9},${pivotY} ${pivotX + 9},${pivotY} ${pivotX},${pivotY + 16}" fill="var(--color-border)"/>` +
    `<line x1="${leftArmX - 12}" y1="${beamY}" x2="${rightArmX + 12}" y2="${beamY}" stroke="var(--color-text)" stroke-width="3" stroke-linecap="round"/>` +
    `<line x1="${leftArmX}" y1="${beamY}" x2="${leftArmX}" y2="${leftPanY}" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<line x1="${rightArmX}" y1="${beamY}" x2="${rightArmX}" y2="${rightPanY}" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<line x1="${leftArmX - 45}" y1="${leftPanY}" x2="${leftArmX + 45}" y2="${leftPanY}" stroke="var(--color-text-muted)" stroke-width="2"/>` +
    `<line x1="${rightArmX - 45}" y1="${rightPanY}" x2="${rightArmX + 45}" y2="${rightPanY}" stroke="var(--color-text-muted)" stroke-width="2"/>` +
    `<rect x="${leftArmX - 55}" y="${leftPanY + 8}" width="110" height="34" rx="6" fill="var(--color-hero-subtitle)" opacity="0.15" stroke="var(--color-hero-subtitle)" stroke-width="1.5"/>` +
    `<text x="${leftArmX}" y="${leftPanY + 18}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(leftArmX, leftPanY + 18, L.currentChain, 11)}</text>` +
    `<rect x="${rightArmX - 55}" y="${rightPanY + 8}" width="110" height="34" rx="6" fill="var(--color-satoshi)" opacity="0.15" stroke="var(--color-satoshi)" stroke-width="1.5"/>` +
    `<text x="${rightArmX}" y="${rightPanY + 18}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(rightArmX, rightPanY + 18, L.newBranch, 11)}</text>` +
    `<text x="${pivotX}" y="${leftPanY + 62}" text-anchor="middle" fill="var(--color-text-muted)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(pivotX, leftPanY + 62, L.outcome, 14)}</text>`;

  const inner = ARROWHEAD_DEFS + flow + scale;
  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
