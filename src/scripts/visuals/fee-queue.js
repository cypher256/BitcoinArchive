// The fee market as a queue sorted by how much each transaction is
// willing to pay to skip ahead: the mempool is not a first-come-first-
// served line, it is a continuous auction where a transaction can bid
// its way toward the front (RBF), or get a boost from a later
// transaction that needs it included (CPFP).
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'The mempool queue is sorted by bid, not by arrival',
    desc: 'Unconfirmed transactions sit in the mempool sorted by fee rate, satoshis per virtual byte, not by when they arrived. The block template fills from the front until the 4 MWU weight limit is reached: high fee-rate transactions get in now, medium ones wait a few blocks, and low ones wait many blocks or get dropped. A sender can bid their way toward the front by replacing a transaction with a higher-fee version (RBF), or a later transaction can pull a low-fee parent forward by attaching a high fee of its own (CPFP).',
    mempool: 'Mempool',
    high: 'High fee-rate\n-> next block',
    med: 'Medium fee-rate\n-> waits 1-3 blocks',
    low: 'Low fee-rate\n-> waits many blocks,\nor dropped',
    limit: '4 MWU weight limit',
    rbf: 'RBF: bump fee rate\nto jump the queue',
    cpfp: 'CPFP: child pays a\nhigh fee, pulling its\nlow-fee parent forward',
    caption: "Fee rate -- a transaction's own, or its package's combined rate once CPFP links it to a child -- is what sets queue position; arrival order and transaction age play no role.",
  },
  ja: {
    title: 'メモリープールの待ち列は到着順ではなく入札順',
    desc: '未承認トランザクションは、到着した順ではなく手数料率(仮想バイトあたりのサトシ数)でソートされてメモリープールに並ぶ。ブロックテンプレートは先頭から4 MWUのウェイト上限に達するまで埋まる。高手数料率のトランザクションはすぐに入り、中程度は数ブロック待ち、低いものは多数ブロック待つか除外される。送信者は手数料率の高い版に置き換えて列の前へ入札できる(RBF)し、後続のトランザクションが自ら高い手数料を付けて低手数料の親を前へ引き上げることもできる(CPFP)。',
    mempool: 'メモリープール',
    high: '高手数料率\n→ 次のブロック',
    med: '中手数料率\n→ 1〜3ブロック待ち',
    low: '低手数料率\n→ 多数ブロック待ち、\nまたは除外',
    limit: '4 MWUのウェイト上限',
    rbf: 'RBF: 手数料率を\n引き上げて列を飛び越す',
    cpfp: 'CPFP: 子が高手数料を\n支払い、低手数料の\n親を前へ引き上げる',
    caption: '列での順位を決めるのは手数料率だ。単体の手数料率か、CPFPで子と結びついた場合はパッケージ全体の合算手数料率かの違いはあるが、到着順やトランザクションの経過時間は収録タイミングに一切関係しない。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function txBlock(x, y, w, h, colorVar) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${colorVar}" opacity="0.7"/>`;
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 860, H = 460;

  const queueX = 60, queueY = 60, queueW = 300, rowH = 26, gap = 4;
  const rows = [
    { color: 'var(--color-satoshi)', count: 3 },
    { color: 'var(--color-hero-subtitle)', count: 3 },
    { color: 'var(--color-border)', count: 3 },
  ];

  let queueBlocks = '';
  let curY = queueY;
  rows.forEach((row) => {
    for (let i = 0; i < row.count; i++) {
      queueBlocks += txBlock(queueX, curY, queueW, rowH, row.color);
      curY += rowH + gap;
    }
    curY += 6;
  });
  const queueBottom = curY;

  const limitY = queueY + rowH * 5 + gap * 4 + 6 + 2;

  const outX = 480;
  const highY = queueY + 5, medY = queueY + 105, lowY = queueY + 205;
  const outW = 260, outH = 70;

  const inner =
    ARROWHEAD_DEFS +
    `<text x="${queueX}" y="${queueY - 14}" fill="var(--color-text-muted)" font-size="11" font-family="var(--font-body, sans-serif)">${esc(L.mempool)}</text>` +
    queueBlocks +
    `<line x1="${queueX - 8}" y1="${limitY}" x2="${queueX + queueW + 8}" y2="${limitY}" stroke="var(--color-satoshi)" stroke-width="1.5" stroke-dasharray="5,3"/>` +
    `<text x="${queueX + queueW + 14}" y="${limitY + 4}" fill="var(--color-satoshi)" font-size="9.5" font-family="var(--font-body, sans-serif)">${esc(L.limit)}</text>` +
    arrow(queueX + queueW + 30, highY + 20, outX, highY + 20, {}) +
    `<rect x="${outX}" y="${highY}" width="${outW}" height="${outH}" rx="6" fill="var(--color-satoshi)" opacity="0.12" stroke="var(--color-satoshi)" stroke-width="1.5"/>` +
    `<text x="${outX + outW / 2}" y="${highY + outH / 2 - 6}" text-anchor="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(outX + outW / 2, highY + outH / 2 - 6, L.high, 13)}</text>` +
    arrow(queueX + queueW + 30, medY + 20, outX, medY + 20, {}) +
    `<rect x="${outX}" y="${medY}" width="${outW}" height="${outH}" rx="6" fill="var(--color-hero-subtitle)" opacity="0.12" stroke="var(--color-hero-subtitle)" stroke-width="1.5"/>` +
    `<text x="${outX + outW / 2}" y="${medY + outH / 2 - 6}" text-anchor="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(outX + outW / 2, medY + outH / 2 - 6, L.med, 13)}</text>` +
    arrow(queueX + queueW + 30, lowY + 20, outX, lowY + 20, {}) +
    `<rect x="${outX}" y="${lowY}" width="${outW}" height="${outH}" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${outX + outW / 2}" y="${lowY + outH / 2 - 6}" text-anchor="middle" fill="var(--color-text)" font-size="10.5" font-family="var(--font-body, sans-serif)">${multiline(outX + outW / 2, lowY + outH / 2 - 6, L.low, 13)}</text>` +
    `<path d="M ${queueX - 30},${queueBottom + 20} C ${queueX - 30},${queueBottom + 60} ${queueX + 40},${queueBottom + 60} ${queueX + 40},${queueY + 40}" fill="none" stroke="var(--color-text-muted)" stroke-width="1.5" marker-end="url(#v-arrowhead)"/>` +
    `<text x="${queueX - 30}" y="${queueBottom + 40}" text-anchor="start" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${multiline(queueX - 30, queueBottom + 40, L.rbf, 12)}</text>` +
    `<path d="M ${queueX + queueW + 20},${queueBottom + 20} C ${queueX + queueW + 20},${queueBottom + 60} ${queueX + 220},${queueBottom + 60} ${queueX + 220},${queueY + 260}" fill="none" stroke="var(--color-text-muted)" stroke-width="1.5" marker-end="url(#v-arrowhead)"/>` +
    `<text x="${queueX + queueW + 30}" y="${queueBottom + 40}" text-anchor="start" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${multiline(queueX + queueW + 30, queueBottom + 40, L.cpfp, 12)}</text>`;

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
