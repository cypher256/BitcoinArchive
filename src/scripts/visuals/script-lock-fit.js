// Script evaluation as fitting a key into a lock shape: the unlocking
// script is a key, the locking script is the lock it must fit, and the
// interpreter runs the fit test left to right -- the spend goes through
// only if the shapes match all the way to the last check.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A key shape tested against a lock, opcode by opcode',
    desc: 'The unlocking script (scriptSig or witness) is a key shape; the locking script (scriptPubKey) is the lock it must fit. Both are pushed onto the same stack, and the interpreter runs every opcode left to right, testing the fit as it goes. If the top of the stack still reads true after the last opcode, the shapes matched all the way through and the spend is authorized -- any mismatch along the way rejects it.',
    unlock: 'Unlocking script\n(scriptSig / witness) --\nthe key shape',
    lock: 'Locking script\n(scriptPubKey) --\nthe lock shape',
    stack: 'Both pushed onto\nthe same stack',
    eval: 'Interpreter runs\nevery opcode,\nleft to right',
    yes: 'Top of stack\nstill true',
    no: 'Mismatch\nalong the way',
    valid: 'Shapes matched --\nspend authorized',
    invalid: 'Spend rejected',
    caption: 'The fit test runs opcode by opcode -- one mismatch anywhere in the sequence rejects the whole spend.',
  },
  ja: {
    title: '鍵の形を、命令ごとに錠前と照合する',
    desc: 'アンロックスクリプト(scriptSigまたはwitness)は鍵の形であり、ロックスクリプト(scriptPubKey)はそれが合わなければならない錠前の形である。両方が同じスタックに積まれ、インタープリターはすべての命令を左から右へ実行しながら、その都度合致するかを試す。最後の命令の後もスタックの一番上が真であれば、形は最後まで一致し支出は認可される。途中で一つでも不一致があれば支出は却下される。',
    unlock: 'アンロックスクリプト\n(scriptSig / witness) --\n鍵の形',
    lock: 'ロックスクリプト\n(scriptPubKey) --\n錠前の形',
    stack: 'どちらも同じ\nスタックに積む',
    eval: 'インタープリターが\nすべての命令を\n左から右へ実行',
    yes: 'スタックの一番上が\nまだ真',
    no: '途中で\n不一致',
    valid: '形が一致 --\n支出を認可',
    invalid: '支出を却下',
    caption: '照合は命令ごとに行われる。途中で一つでも不一致があれば、支出全体が却下される。',
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

function keyIcon(cx, cy, colorVar) {
  return (
    `<circle cx="${cx - 10}" cy="${cy}" r="9" fill="none" stroke="${colorVar}" stroke-width="3"/>` +
    `<rect x="${cx - 1}" y="${cy - 2}" width="24" height="4" fill="${colorVar}"/>` +
    `<rect x="${cx + 14}" y="${cy - 2}" width="4" height="9" fill="${colorVar}"/>`
  );
}

function lockIcon(cx, cy, colorVar) {
  return (
    `<path d="M${cx - 10},${cy - 4} v-7 a10,10 0 0 1 20,0 v7" fill="none" stroke="${colorVar}" stroke-width="3"/>` +
    `<rect x="${cx - 14}" y="${cy - 4}" width="28" height="20" rx="3" fill="${colorVar}" fill-opacity="0.12" stroke="${colorVar}" stroke-width="2"/>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 1020, H = 260;
  const boxW = 170, boxH = 56;

  const unlockX = 20, unlockY = 30;
  const lockX = 20, lockY = 130;
  const stackX = 260, stackY = 80;
  const evalX = 470, evalY = 80;
  const yesX = 680, yesY = 30;
  const noX = 680, noY = 150;
  const validX = 860, validY = 30;
  const invalidX = 880, invalidY = 150;

  const inner =
    ARROWHEAD_DEFS +
    keyIcon(unlockX + 20, unlockY + boxH / 2, 'var(--color-hero-subtitle)') +
    box(unlockX + 40, unlockY, boxW, boxH, L.unlock, { stroke: 'var(--color-hero-subtitle)' }) +
    lockIcon(lockX + 20, lockY + boxH / 2, 'var(--color-satoshi)') +
    box(lockX + 40, lockY, boxW, boxH, L.lock, { stroke: 'var(--color-satoshi)' }) +
    arrow(unlockX + 40 + boxW, unlockY + boxH / 2, stackX, stackY + boxH / 2 - 10, {}) +
    arrow(lockX + 40 + boxW, lockY + boxH / 2, stackX, stackY + boxH / 2 + 10, {}) +
    box(stackX, stackY, boxW - 20, boxH, L.stack) +
    arrow(stackX + boxW - 20, stackY + boxH / 2, evalX, evalY + boxH / 2, {}) +
    box(evalX, evalY, boxW, boxH, L.eval, { fill: 'var(--color-hero-subtitle)', fillOpacity: 0.12, stroke: 'var(--color-hero-subtitle)' }) +
    `<path d="M ${evalX + boxW},${evalY + 10} H ${yesX - 15} V ${yesY + boxH / 2}" fill="none" stroke="var(--color-accent)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(yesX, yesY, boxW - 40, boxH, L.yes, { stroke: 'var(--color-accent)' }) +
    `<path d="M ${evalX + boxW},${evalY + boxH - 10} H ${noX - 15} V ${noY + boxH / 2}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(noX, noY, boxW - 40, boxH, L.no, { stroke: 'var(--color-satoshi)' }) +
    arrow(yesX + boxW - 40, yesY + boxH / 2, validX, validY + boxH / 2, {}) +
    box(validX, validY, boxW - 20, boxH, L.valid, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' }) +
    arrow(noX + boxW - 40, noY + boxH / 2, invalidX, invalidY + boxH / 2, {}) +
    box(invalidX, invalidY, boxW - 40, boxH, L.invalid, { stroke: 'var(--color-satoshi)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
