// A mining pool as a foreman handing out lottery tickets: the coordinator
// builds one block template and hands each miner a slice of the search
// space to work on. Miners report back partial proof-of-work ("shares")
// far more often than any of them actually finds a full block -- shares
// are how the foreman measures each miner's contributed work to split
// the eventual reward, not attempts at the block itself.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Shares are proof of effort, not attempts at the winning ticket',
    desc: "A full node forwards unconfirmed transactions to the pool coordinator, which builds one block template and hands each miner a work unit -- the same header, a different slice of the nonce space. Miners search their slice and report back shares, easier proof-of-work solutions that prove real effort without needing to be the winning block itself. Whichever miner happens to find a share that also clears the network's real target broadcasts it as a full block; the coordinator uses the accumulated shares to split the reward proportionally.",
    node: 'Full node\n(mempool)',
    coord: 'Pool\ncoordinator',
    minerA: 'Miner A',
    minerB: 'Miner B',
    minerC: 'Miner C',
    work: 'Work unit (header + nonce slice)',
    share: 'Share (partial PoW, proof of effort)',
    winner: 'Valid block found -> broadcast to network',
    caption: 'A share is a lottery ticket easier to win than the real jackpot -- it measures effort, and only rarely doubles as the winning block itself.',
  },
  ja: {
    title: 'シェアは当選券への挑戦ではなく、働いた証',
    desc: 'フルノードが未承認トランザクションをプールコーディネーターへ送ると、コーディネーターは1つのブロックテンプレートを作り、各マイナーに作業ユニット(同じヘッダー、別のナンス区間)を渡す。マイナーは自分の区間を探索し、シェア(本物のブロックである必要のない、より易しいプルーフ・オブ・ワーク)を報告して働いた証を示す。たまたま見つけたシェアがネットワーク本来のターゲットも満たすマイナーがいれば、それが正式なブロックとしてネットワークへ配信される。コーディネーターは蓄積されたシェアを使って報酬を比例配分する。',
    node: 'フルノード\n(メモリープール)',
    coord: 'プール\nコーディネーター',
    minerA: 'マイナー A',
    minerB: 'マイナー B',
    minerC: 'マイナー C',
    work: '作業ユニット(ヘッダー + ナンス区間)',
    share: 'シェア(部分的PoW、働いた証)',
    winner: '有効ブロック発見 -> ネットワークへ配信',
    caption: 'シェアは本物の大当たりより当たりやすいくじだ。働いた量を測るものであり、まれにそれ自体が当たりのブロックにもなる。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function box(x, y, w, h, label, opts = {}) {
  const { fill = 'var(--color-bg-alt)', stroke = 'var(--color-border)', fontSize = 10.5 } = opts;
  const lines = label.split('\n').length;
  const cy = y + h / 2 - (lines - 1) * 6;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>` +
    `<text x="${x + w / 2}" y="${cy}" text-anchor="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, cy, label, 12)}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 900, H = 400;
  const boxW = 130, boxH = 56;

  const nodeX = 20, nodeY = 172;
  const coordX = 210, coordY = 162, coordW = 140, coordH = 76;
  const minersX = 620;
  const minerAY = 30, minerBY = 172, minerCY = 314;

  function pairArrows(minerY) {
    const midY1 = coordY + 20;
    const midY2 = coordY + coordH - 20;
    return (
      arrow(coordX + coordW, midY1, minersX, minerY + 16, {}) +
      arrow(minersX, minerY + boxH - 16, coordX + coordW, midY2, {})
    );
  }

  const inner =
    ARROWHEAD_DEFS +
    box(nodeX, nodeY, boxW, boxH, L.node) +
    arrow(nodeX + boxW, nodeY + boxH / 2, coordX, coordY + coordH / 2, {}) +
    box(coordX, coordY, coordW, coordH, L.coord, { fill: 'var(--color-hero-subtitle)', stroke: 'var(--color-hero-subtitle)' }) +
    pairArrows(minerAY) +
    pairArrows(minerBY) +
    pairArrows(minerCY) +
    box(minersX, minerAY, boxW, boxH, L.minerA) +
    box(minersX, minerBY, boxW, boxH, L.minerB) +
    box(minersX, minerCY, boxW, boxH, L.minerC) +
    `<text x="${(coordX + coordW + minersX) / 2}" y="${minerBY - 14}" text-anchor="middle" fill="var(--color-text-muted)" font-size="10" font-family="var(--font-body, sans-serif)">${esc(L.work)}</text>` +
    `<text x="${(coordX + coordW + minersX) / 2}" y="${minerBY + boxH + 22}" text-anchor="middle" fill="var(--color-text-muted)" font-size="10" font-family="var(--font-body, sans-serif)">${esc(L.share)}</text>` +
    `<path d="M ${coordX + coordW / 2},${coordY} V ${coordY - 40} H ${nodeX + boxW / 2} V ${nodeY}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<text x="${(coordX + coordW / 2 + nodeX + boxW / 2) / 2}" y="${coordY - 48}" text-anchor="middle" fill="var(--color-satoshi)" font-size="10" font-family="var(--font-body, sans-serif)">${esc(L.winner)}</text>`;

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
