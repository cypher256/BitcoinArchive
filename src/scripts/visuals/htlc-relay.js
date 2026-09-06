// Multi-hop payment routing as a relay of matching locks: the payee picks
// a secret and shows only its lock shape (a hash) to everyone upstream.
// Each hop promises the next hop a slightly smaller reward for the same
// key, so revealing the secret at the far end cascades the key backward
// and every hop is paid -- or, if the secret never surfaces, every lock
// simply expires and refunds.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'One key unlocks every hop in the chain, or none of them',
    desc: 'Carol picks a secret key and shows everyone only its lock shape (a hash). Alice locks 1,001 sats for Bob, redeemable only with that key within 40 blocks. Bob locks 1,000 sats for Carol, redeemable with the same key within 20 blocks. When Carol reveals the key to claim her 1,000 sats, Bob learns it too and claims his 1,001 sats from Alice, keeping the 1-sat difference as a routing fee. If Carol never reveals it, both locks simply expire and refund -- there is no way to claim one hop without the other.',
    carol: 'Carol\n(payee)',
    bob: 'Bob\n(routing node)',
    alice: 'Alice\n(sender)',
    pickSecret: 'Picks secret key,\nshows lock shape\n(hash H) only',
    lockAB: 'Locks 1,001 sats:\nredeemable with the\nkey within 40 blocks',
    lockBC: 'Locks 1,000 sats:\nredeemable with the\nsame key within 20 blocks',
    reveal: 'Reveals key to claim\n1,000 sats',
    cascade: 'Same key claims\n1,001 sats',
    fee: 'Bob keeps 1 sat\nas routing fee',
    caption: 'The lock shape travels forward, the key travels backward -- either every hop unlocks, or the whole chain refunds.',
  },
  ja: {
    title: '1つの鍵がすべての区間を開けるか、どれも開けないかのどちらか',
    desc: 'キャロルは秘密の鍵を選び、その鍵穴の形(ハッシュ)だけを全員に見せる。アリスは、その鍵を使えば40ブロック以内に引き出せるという条件で1,001satをボブ宛にロックする。ボブは、同じ鍵で20ブロック以内に引き出せるという条件で1,000satをキャロル宛にロックする。キャロルが1,000satを受け取るために鍵を明かすと、ボブもその鍵を知り、アリスから1,001satを受け取れる。差額の1satはボブの中継手数料になる。キャロルが鍵を明かさなければ、両方の錠が単に期限切れで返金される。片方だけを受け取ることはできない。',
    carol: 'キャロル\n(受取人)',
    bob: 'ボブ\n(中継ノード)',
    alice: 'アリス\n(送金者)',
    pickSecret: '秘密の鍵を選び、\n鍵穴の形(ハッシュH)\nだけを見せる',
    lockAB: '1,001 satをロック:\nその鍵で40ブロック\n以内なら引き出し可',
    lockBC: '1,000 satをロック:\n同じ鍵で20ブロック\n以内なら引き出し可',
    reveal: '鍵を明かして\n1,000 satを受取',
    cascade: '同じ鍵で\n1,001 satを受取',
    fee: 'ボブは差額の1sat\nを中継手数料に',
    caption: '鍵穴の形は前へ、鍵そのものは後ろへ伝わる。すべての区間が開くか、鎖全体が返金されるかのどちらかだ。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function lockIcon(cx, cy, colorVar) {
  return (
    `<path d="M${cx - 10},${cy - 4} v-8 a10,10 0 0 1 20,0 v8" fill="none" stroke="${colorVar}" stroke-width="3"/>` +
    `<rect x="${cx - 14}" y="${cy - 4}" width="28" height="22" rx="3" fill="${colorVar}" opacity="0.15" stroke="${colorVar}" stroke-width="2"/>`
  );
}

function person(cx, cy, label) {
  return (
    `<circle cx="${cx}" cy="${cy}" r="16" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${cx}" y="${cy + 34}" text-anchor="middle" fill="var(--color-text)" font-size="11" font-family="var(--font-body, sans-serif)">${multiline(cx, cy + 34, label, 13)}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 900, H = 360;

  const aliceX = 80, bobX = 450, carolX = 800;
  const rowY = 50;
  const lockABX = (aliceX + bobX) / 2, lockBCX = (bobX + carolX) / 2;
  const lockY = 150;
  const boxW = 190, boxH = 50;

  const inner =
    ARROWHEAD_DEFS +
    person(carolX, rowY, L.carol) +
    `<rect x="${carolX - 90}" y="${rowY + 58}" width="180" height="44" rx="6" fill="var(--color-bg-alt)" stroke="var(--color-border)" stroke-width="1.5"/>` +
    `<text x="${carolX}" y="${rowY + 80}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(carolX, rowY + 72, L.pickSecret, 12)}</text>` +
    person(bobX, rowY, L.bob) +
    person(aliceX, rowY, L.alice) +
    lockIcon(lockABX, lockY, 'var(--color-hero-subtitle)') +
    `<rect x="${lockABX - boxW / 2}" y="${lockY + 20}" width="${boxW}" height="${boxH}" rx="6" fill="var(--color-hero-subtitle)" opacity="0.1" stroke="var(--color-hero-subtitle)" stroke-width="1.5"/>` +
    `<text x="${lockABX}" y="${lockY + 45}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(lockABX, lockY + 37, L.lockAB, 12)}</text>` +
    arrow(aliceX + 20, lockY, lockABX - 30, lockY, {}) +
    arrow(lockABX + 30, lockY, bobX - 20, lockY, {}) +
    lockIcon(lockBCX, lockY, 'var(--color-hero-subtitle)') +
    `<rect x="${lockBCX - boxW / 2}" y="${lockY + 20}" width="${boxW}" height="${boxH}" rx="6" fill="var(--color-hero-subtitle)" opacity="0.1" stroke="var(--color-hero-subtitle)" stroke-width="1.5"/>` +
    `<text x="${lockBCX}" y="${lockY + 45}" text-anchor="middle" fill="var(--color-text)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(lockBCX, lockY + 37, L.lockBC, 12)}</text>` +
    arrow(bobX + 20, lockY, lockBCX - 30, lockY, {}) +
    arrow(lockBCX + 30, lockY, carolX - 20, lockY, {}) +
    arrow(carolX - 20, lockY + 100, bobX + 20, lockY + 100, { stroke: 'var(--color-satoshi)' }) +
    `<text x="${lockBCX}" y="${lockY + 74}" text-anchor="middle" fill="var(--color-satoshi)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(lockBCX, lockY + 74, L.reveal, 12)}</text>` +
    arrow(bobX - 20, lockY + 150, aliceX + 20, lockY + 150, { stroke: 'var(--color-satoshi)' }) +
    `<text x="${lockABX}" y="${lockY + 124}" text-anchor="middle" fill="var(--color-satoshi)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(lockABX, lockY + 124, L.cascade, 12)}</text>` +
    `<text x="${bobX}" y="${lockY + 178}" text-anchor="middle" fill="var(--color-text-muted)" font-size="10" font-family="var(--font-body, sans-serif)">${multiline(bobX, lockY + 178, L.fee, 12)}</text>`;

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
