// Decentralization as two independent audits feeding one claim: a system
// inspector checks the technical layer (servers, consensus, code), a
// governance inspector checks the human layer (founders, foundations,
// premines) -- and "decentralized cryptocurrency" is a claim resting on
// both audits at once, not either one alone.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Two independent audits, one claim resting on both',
    desc: 'The word "decentralized" gets checked by two independent audits that operate on different evidence. A system audit inspects the technical layer: no central server, no single point of failure, proof-of-work consensus, rules changed only by network agreement -- this layer is often claimed and sometimes verifiable by reading code and counting nodes. A governance audit inspects the human layer: no founder with authority, no foundation shipping protocol changes, no CEO, no investors, no marketing arm, no premine, no one person whose departure stops the project -- this layer is rarely audited and has to be checked against governance records, not code. The claim "decentralized cryptocurrency" rests on both audits passing at once, not either one alone.',
    systemTitle: 'System audit\n(technical layer)',
    s1: 'No central server',
    s2: 'No single point\nof failure',
    s3: 'Proof-of-work\nconsensus',
    s4: 'Rules changed only\nby network agreement',
    peopleTitle: 'Governance audit\n(human layer)',
    p1: 'No founder\nwith authority',
    p2: 'No foundation shipping\nprotocol changes',
    p3: 'No CEO, no investors,\nno marketing arm',
    p4: 'No premine,\nno developer\nallocation',
    p5: 'No one person whose\ndeparture stops it',
    claim: '"Decentralized\ncryptocurrency"',
    systemNote: 'often claimed,\nsometimes verifiable',
    peopleNote: 'rarely audited',
    caption: 'The two audits check different evidence -- passing one says nothing about the other.',
  },
  ja: {
    title: '2つの独立した監査、両方に依拠する1つの主張',
    desc: '「分散型」という語は、異なる証拠に基づく2つの独立した監査によって検証される。システム監査は技術層を調べる: 中央サーバーなし、単一障害点なし、プルーフ・オブ・ワークによる合意形成、ルールの変更はネットワークの合意によってのみ可能。この層はしばしば主張され、コードを読みノード数を数えることで検証できる場合もある。ガバナンス監査は人間層を調べる: 権威を持つ創設者がいない、プロトコル変更を出す財団がない、CEOも投資家もマーケティング部門もいない、プリマインも開発者への割り当てもない、去ればプロジェクトが止まるような特定の人物がいない。この層はめったに監査されず、コードではなくガバナンス記録と照合しなければならない。「非中央集権の暗号資産」という主張は、どちらか一方ではなく、両方の監査が同時に合格することに依拠している。',
    systemTitle: 'システム監査\n(技術層)',
    s1: '中央サーバーなし',
    s2: '単一障害点なし',
    s3: 'プルーフ・オブ・ワークに\nよる合意形成',
    s4: 'ルール変更は\nネットワークの合意のみ',
    peopleTitle: 'ガバナンス監査\n(人間層)',
    p1: '権威を持つ\n創設者がいない',
    p2: 'プロトコル変更を出す\n財団がない',
    p3: 'CEOも投資家も\nマーケティング部門もいない',
    p4: 'プリマインも\n開発者割り当ても\nない',
    p5: '去ればプロジェクトが\n止まる人物がいない',
    claim: '「非中央集権の\n暗号資産」',
    systemNote: 'しばしば主張され、\n検証できる場合もある',
    peopleNote: 'めったに監査されない',
    caption: '2つの監査は異なる証拠を調べる。一方に合格したことは、もう一方について何も語らない。',
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
  const W = 720, H = 560;
  const boxW = 210, boxH = 44;
  const gap = 12;

  const sItems = [L.s1, L.s2, L.s3, L.s4];
  const pItems = [L.p1, L.p2, L.p3, L.p4, L.p5];

  const sysX = 30;
  const pplX = 480;
  const topY = 55;
  const claimW = 260, claimH = 66;
  const claimX = (W - claimW) / 2;
  const claimY = 480;

  let inner = ARROWHEAD_DEFS;

  inner += `<text x="${sysX + boxW / 2}" y="${topY - 22}" text-anchor="middle" fill="var(--color-hero-subtitle)" font-size="12.5" font-family="var(--font-body, sans-serif)">${multiline(sysX + boxW / 2, topY - 22, L.systemTitle, 14)}</text>`;
  sItems.forEach((s, i) => {
    inner += box(sysX, topY + i * (boxH + gap), boxW, boxH, s, { stroke: 'var(--color-hero-subtitle)' });
  });
  const sysBottom = topY + sItems.length * (boxH + gap) - gap;

  inner += `<text x="${pplX + boxW / 2}" y="${topY - 22}" text-anchor="middle" fill="var(--color-satoshi)" font-size="12.5" font-family="var(--font-body, sans-serif)">${multiline(pplX + boxW / 2, topY - 22, L.peopleTitle, 14)}</text>`;
  pItems.forEach((p, i) => {
    inner += box(pplX, topY + i * (boxH + gap), boxW, boxH, p, { stroke: 'var(--color-satoshi)' });
  });
  const pplBottom = topY + pItems.length * (boxH + gap) - gap;

  const sysArrowMidY = pplBottom + 25;
  const pplArrowMidY = claimY - 45;
  const claimLeftAnchor = claimX + 45;
  const claimRightAnchor = claimX + claimW - 45;

  inner += `<path d="M ${sysX + boxW / 2},${sysBottom} V ${sysArrowMidY} H ${claimLeftAnchor} V ${claimY}" fill="none" stroke="var(--color-hero-subtitle)" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#v-arrowhead)"/>`;
  inner += `<text x="${sysX + boxW / 2 + 12}" y="${sysArrowMidY - 22}" fill="var(--color-hero-subtitle)" font-size="9.5" font-family="var(--font-body, sans-serif)">${multiline(sysX + boxW / 2 + 12, sysArrowMidY - 22, L.systemNote, 12)}</text>`;

  inner += `<path d="M ${pplX + boxW / 2},${pplBottom} V ${pplArrowMidY} H ${claimRightAnchor} V ${claimY}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#v-arrowhead)"/>`;
  inner += `<text x="${claimRightAnchor + 15}" y="${pplArrowMidY - 8}" fill="var(--color-satoshi)" font-size="9.5" font-family="var(--font-body, sans-serif)">${multiline(claimRightAnchor + 15, pplArrowMidY - 8, L.peopleNote, 12)}</text>`;

  inner += box(claimX, claimY, claimW, claimH, L.claim, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)', fontSize: 12 });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
