// A Lightning channel as a shared safe: two parties lock it with one key
// each, keep updating a private ledger of who owns what inside without
// ever reopening the safe, then eventually open it again -- either
// together, or alone with a waiting period that lets the other party
// object if the ledger being presented is stale.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A channel is a shared safe, updated without ever reopening it',
    desc: 'Two parties lock funds in a shared safe (a 2-of-2 multisig funding transaction). While open, they update a private ledger of who owns what inside without ever touching the blockchain. They can open the safe together at any time (cooperative close), or one party can open it alone by presenting the latest ledger, which starts a waiting period. If the presented ledger turns out to be stale, the other party can claim everything as a penalty.',
    fund: 'Funding:\nsafe locked with\none key each',
    open: 'Open:\nupdate the private\nledger, safe stays shut',
    coop: 'Cooperative close:\nopen together,\nsplit by final ledger',
    forced: 'Forced close:\none party opens\nwith latest ledger',
    dispute: 'Dispute:\nstale ledger presented',
    timelockOut: 'Timelock expires:\nfunds released',
    penalty: 'Penalty:\nhonest party claims\nall funds',
    returned: 'Funds returned\nto each wallet',
    caption: 'Nothing inside the safe touches the blockchain until it opens -- and opening with a stale ledger is the one move the protocol punishes.',
  },
  ja: {
    title: 'チャネルは共有の金庫。開け直さずに中身を更新する',
    desc: '二人が共有の金庫(2-of-2マルチシグの開設トランザクション)に資金をロックする。開いている間は、ブロックチェーンに触れることなく、金庫の中の取り分を記した非公開の台帳を更新し続ける。いつでも二人一緒に金庫を開けられる(協調クローズ)し、片方が最新の台帳を提示して単独で開けることもできる(その場合は待機期間が始まる)。提示した台帳が古いものだと判明すれば、もう一方がすべてを没収できる。',
    fund: 'ファンディング:\n互いの鍵で\n金庫を施錠',
    open: 'オープン:\n非公開の台帳を更新、\n金庫は閉じたまま',
    coop: '協調クローズ:\n二人一緒に開け、\n最終台帳どおりに分配',
    forced: '強制クローズ:\n片方が最新台帳で\n単独開錠',
    dispute: '紛争:\n古い台帳を提示',
    timelockOut: 'タイムロック満了:\n資金解放',
    penalty: 'ペナルティ:\n正直な側が\n全資金を没収',
    returned: '各ウォレットへ\n資金返却',
    caption: '金庫の中身が確定するまでブロックチェーンには一切触れない。プロトコルが罰するのは、古い台帳を提示して開けようとする一手だけだ。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function safeIcon(cx, cy, r, colorVar) {
  return (
    `<rect x="${cx - r}" y="${cy - r}" width="${r * 2}" height="${r * 2}" rx="6" fill="${colorVar}" opacity="0.12" stroke="${colorVar}" stroke-width="2"/>` +
    `<circle cx="${cx}" cy="${cy}" r="${r * 0.35}" fill="none" stroke="${colorVar}" stroke-width="2"/>` +
    `<line x1="${cx}" y1="${cy - r * 0.35}" x2="${cx}" y2="${cy - r * 0.6}" stroke="${colorVar}" stroke-width="2"/>`
  );
}

function box(x, y, w, h, label, opts = {}) {
  const { fill = 'var(--color-bg-alt)', stroke = 'var(--color-border)', fontSize = 10 } = opts;
  const lines = label.split('\n').length;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>` +
    `<text x="${x + w / 2}" y="${y + h / 2 - (lines - 1) * 6}" text-anchor="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, y + h / 2 - (lines - 1) * 6, label, 12)}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 900, H = 420;
  const boxW = 150, boxH = 56;

  const fundX = 30, fundY = 172;
  const safeX = 240, safeCy = 200;
  const coopX = 440, coopY = 50;
  const forcedX = 440, forcedY = 172;
  const disputeX = 650, disputeY = 172;
  const penaltyX = 650, penaltyY = 280;
  const timelockX = 440, timelockY = 280;
  const returnedX = 220, returnedY = 350;

  const inner =
    ARROWHEAD_DEFS +
    box(fundX, fundY, boxW, boxH, L.fund) +
    arrow(fundX + boxW, fundY + boxH / 2, safeX - 40, safeCy, {}) +
    safeIcon(safeX, safeCy, 36, 'var(--color-hero-subtitle)') +
    `<text x="${safeX}" y="${safeCy + 55}" text-anchor="middle" fill="var(--color-hero-subtitle)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(safeX, safeCy + 55, L.open, 12)}</text>` +
    arrow(safeX + 40, safeCy - 15, coopX, coopY + boxH / 2, {}) +
    box(coopX, coopY, boxW, boxH, L.coop, { fill: 'var(--color-accent)', stroke: 'var(--color-accent)' }) +
    arrow(coopX, coopY + boxH, returnedX + boxW, returnedY + 10, {}) +
    arrow(safeX + 40, safeCy, forcedX, forcedY + boxH / 2, {}) +
    box(forcedX, forcedY, boxW, boxH, L.forced) +
    arrow(forcedX + boxW, forcedY + boxH / 2, disputeX, disputeY + boxH / 2, { dashed: true, stroke: 'var(--color-satoshi)' }) +
    box(disputeX, disputeY, boxW, boxH, L.dispute, { stroke: 'var(--color-satoshi)' }) +
    arrow(disputeX + boxW / 2, disputeY + boxH, penaltyX + boxW / 2, penaltyY, {}) +
    box(penaltyX, penaltyY, boxW, boxH, L.penalty, { fill: 'var(--color-satoshi)', stroke: 'var(--color-satoshi)' }) +
    arrow(forcedX + boxW / 2, forcedY + boxH, timelockX + boxW / 2, timelockY, {}) +
    box(timelockX, timelockY, boxW, boxH, L.timelockOut) +
    arrow(timelockX, timelockY + boxH / 2, returnedX + boxW, returnedY + boxH / 2, {}) +
    box(returnedX, returnedY, boxW, boxH, L.returned);

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
