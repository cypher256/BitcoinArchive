// A 51% attack as a chain grown in secret underground: the attacker mines
// a private branch out of sight while the honest chain keeps extending in
// the open, and only surfaces it once it has outgrown the public chain --
// at which point the network switches to the longer branch and the
// publicly confirmed payment simply vanishes.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'A private chain grown underground, then surfaced',
    desc: 'The honest network confirms a payment and keeps extending its chain in the open. Meanwhile, an attacker with over 50% of hash rate mines a private branch from before that payment, out of public view, omitting it. Once the private branch has more accumulated work than the public one, the attacker releases it. The network switches to the longer chain -- the honest blocks are discarded, and the merchant\'s payment vanishes along with them.',
    honestLabel: 'Honest chain (public)',
    attackerLabel: 'Attacker\'s chain (private)',
    payment: 'Payment\nconfirmed here',
    release: 'Attacker\nreleases\nprivate chain',
    switch: 'Network switches:\nhonest blocks discarded,\npayment vanishes',
    caption: 'The attack works only because the private chain accumulates more total work -- not because it has more blocks.',
  },
  ja: {
    title: '地下で育てた秘密の鎖を、地上に出す',
    desc: '正直なネットワークは支払いを承認し、公開されたままチェーンを延ばし続ける。その裏で、ハッシュレートの50%を超える攻撃者が、その支払いより前から秘密の分岐をマイニングしており、公には見えない場所でその支払いを除外している。秘密の分岐が公開されている鎖より多くの累積作業量を持った時点で、攻撃者はそれを公開する。ネットワークはより長いチェーンへ切り替わり、正直なブロックは破棄され、商人への支払いはそれとともに消える。',
    honestLabel: '正直なチェーン(公開)',
    attackerLabel: '攻撃者のチェーン(秘密)',
    payment: 'ここで\n支払いが承認',
    release: '攻撃者が\n秘密のチェーンを\n公開',
    switch: 'ネットワークが切替:\n正直なブロックは破棄、\n支払いは消滅',
    caption: 'この攻撃が成立するのは、秘密の鎖がブロック数ではなく累積作業量で上回るからだ。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function blockNode(cx, cy, colorVar, dashed) {
  return `<rect x="${cx - 20}" y="${cy - 16}" width="40" height="32" rx="4" fill="${colorVar}" opacity="${dashed ? 0.15 : 0.7}" stroke="${colorVar}" stroke-width="1.5" ${dashed ? 'stroke-dasharray="4,3"' : ''}/>`;
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 820, H = 340;

  const honestY = 90, attackerY = 230;
  const startX = 180, step = 90;
  const honestBlocks = [startX, startX + step, startX + step * 2, startX + step * 3, startX + step * 4];
  const attackerBlocks = [startX, startX + step, startX + step * 2, startX + step * 3, startX + step * 4, startX + step * 5];

  let honestChain = '';
  for (let i = 0; i < honestBlocks.length; i++) {
    honestChain += blockNode(honestBlocks[i], honestY, 'var(--color-hero-subtitle)', false);
    if (i > 0) honestChain += `<line x1="${honestBlocks[i - 1] + 20}" y1="${honestY}" x2="${honestBlocks[i] - 20}" y2="${honestY}" stroke="var(--color-hero-subtitle)" stroke-width="2"/>`;
  }

  let attackerChain = '';
  for (let i = 0; i < attackerBlocks.length; i++) {
    attackerChain += blockNode(attackerBlocks[i], attackerY, 'var(--color-satoshi)', true);
    if (i > 0) attackerChain += `<line x1="${attackerBlocks[i - 1] + 20}" y1="${attackerY}" x2="${attackerBlocks[i] - 20}" y2="${attackerY}" stroke="var(--color-satoshi)" stroke-width="2" stroke-dasharray="4,3"/>`;
  }

  const forkX = startX;

  const inner =
    ARROWHEAD_DEFS +
    `<text x="${startX - 40}" y="${honestY + 4}" text-anchor="end" fill="var(--color-hero-subtitle)" font-size="10.5" font-family="var(--font-body, sans-serif)">${esc(L.honestLabel)}</text>` +
    honestChain +
    `<text x="${startX - 40}" y="${attackerY + 4}" text-anchor="end" fill="var(--color-satoshi)" font-size="10.5" font-family="var(--font-body, sans-serif)">${esc(L.attackerLabel)}</text>` +
    attackerChain +
    `<line x1="${forkX}" y1="${honestY + 20}" x2="${forkX}" y2="${attackerY - 20}" stroke="var(--color-border)" stroke-width="1.5" stroke-dasharray="2,3"/>` +
    `<circle cx="${honestBlocks[0]}" cy="${honestY}" r="26" fill="none" stroke="var(--color-text)" stroke-width="1.5"/>` +
    `<text x="${honestBlocks[0]}" y="${honestY - 40}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(honestBlocks[0], honestY - 40, L.payment, 12)}</text>` +
    `<path d="M ${attackerBlocks[attackerBlocks.length - 1]},${attackerY - 16} V ${honestY + 16}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<text x="${attackerBlocks[attackerBlocks.length - 1] + 10}" y="${(attackerY + honestY) / 2}" fill="var(--color-satoshi)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(attackerBlocks[attackerBlocks.length - 1] + 10, (attackerY + honestY) / 2 - 10, L.release, 12)}</text>` +
    `<text x="${honestBlocks[3]}" y="${honestY + 55}" text-anchor="middle" fill="var(--color-satoshi)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(honestBlocks[3], honestY + 55, L.switch, 12)}</text>`;

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
