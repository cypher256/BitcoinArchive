// Node bootstrap as someone new in town looking for company: try your own
// old address book first, and only if that leaves you with too few
// contacts do you fall back to a directory service -- a short list of
// last-resort addresses feeds into the same "make contact" step
// independently, as a backstop rather than a normal step in the sequence.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Bootstrap falls back one step at a time, not all at once',
    desc: 'A starting node first tries its own saved address book (peers.dat). If that leaves it with too few connected peers, it queries DNS seeds, a directory service run by independent community members, and connects to the addresses it returns. A short list of addresses hardcoded into the software feeds into that same connection step independently, as a last-resort backstop rather than a step tried only after DNS. Once connected to at least one peer, the node asks it for its address book (an addr message) to reach a stable set of peers.',
    start: 'Node starts,\ntries own address\nbook (peers.dat)',
    enough: 'Enough\npeers?',
    dns: 'Query DNS seeds,\nconnect to\nreturned addresses',
    hardcoded: 'Hardcoded seeds\n(last-resort\nbackstop)',
    connect: 'Connected to\n>= 1 peer',
    addr: 'Ask peer for its\naddress book\n(addr message)',
    stable: 'Stable peer\nset established',
    yes: 'Yes',
    no: 'No',
    caption: 'The hardcoded list feeds in as a backstop alongside the normal path, not as a step tried only when DNS itself fails.',
  },
  ja: {
    title: '起動は一斉にではなく、一段ずつフォールバックする',
    desc: '起動したノードはまず自分の保存済み住所録(peers.dat)を試す。それで繋がるピアが少なすぎる場合、独立したコミュニティメンバーが運営するディレクトリサービスであるDNSシードに問い合わせ、返されたアドレスに接続する。ソフトウェアに焼き込まれた短い住所リストは、DNSの後にだけ試される段階としてではなく、同じ接続ステップに独立した最後の手段として合流する。1人以上のピアに接続できれば、その相手に住所録(addrメッセージ)を尋ね、安定したピア集合に至る。',
    start: 'ノード起動、\n自分の住所録\n(peers.dat)を試す',
    enough: '十分な数の\nピアか?',
    dns: 'DNSシードに問い合わせ、\n返されたアドレスに\n接続',
    hardcoded: 'ハードコード\nされたシード\n(最後の手段)',
    connect: '1人以上の\nピアへ接続済み',
    addr: 'その相手に住所録を\n尋ねる\n(addrメッセージ)',
    stable: '安定したピア\n集合の確立',
    yes: 'はい',
    no: 'いいえ',
    caption: 'ハードコードされたリストは、DNS自体が失敗したときにだけ試される段階ではなく、通常経路と並行する最後の手段として合流する。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function box(x, y, w, h, label, opts = {}) {
  const { fill = 'var(--color-bg-alt)', stroke = 'var(--color-border)', fontSize = 10.5, dashed = false, fillOpacity = null } = opts;
  const lines = label.split('\n').length;
  const cy = y + h / 2 - (lines - 1) * 6;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" ${fillOpacity !== null ? `fill-opacity="${fillOpacity}"` : ''} stroke="${stroke}" stroke-width="1.5" ${dashed ? 'stroke-dasharray="4,3"' : ''}/>` +
    `<text x="${x + w / 2}" y="${cy}" text-anchor="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, cy, label, 12)}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const W = 820, H = 450;
  const boxW = 160, boxH = 60;

  const startX = 30, startY = 30;
  const enoughX = 260, enoughY = 30;
  const dnsX = 260, dnsY = 170;
  const hardX = 30, hardY = 170;
  const connectX = 520, connectY = 100;
  const addrX = 520, addrY = 220;
  const stableX = 520, stableY = 330;

  const inner =
    ARROWHEAD_DEFS +
    box(startX, startY, boxW, boxH, L.start) +
    arrow(startX + boxW, startY + boxH / 2, enoughX, enoughY + boxH / 2, {}) +
    box(enoughX, enoughY, boxW, boxH, L.enough, { stroke: 'var(--color-hero-subtitle)' }) +
    `<path d="M ${enoughX + boxW},${enoughY + boxH / 2} H ${connectX + boxW * 0.2} V ${connectY}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<text x="${(enoughX + boxW + connectX + boxW * 0.2) / 2}" y="${enoughY + boxH / 2 - 8}" text-anchor="middle" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${esc(L.yes)}</text>` +
    `<path d="M ${enoughX + boxW / 2},${enoughY + boxH} V ${dnsY}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    `<text x="${enoughX + boxW / 2 + 10}" y="${enoughY + boxH + 20}" fill="var(--color-text-muted)" font-size="9.5" font-family="var(--font-body, sans-serif)">${esc(L.no)}</text>` +
    box(dnsX, dnsY, boxW, boxH, L.dns) +
    `<path d="M ${dnsX + boxW},${dnsY + boxH / 2} H ${connectX + boxW * 0.35} V ${connectY + boxH}" fill="none" stroke="var(--color-text-muted)" stroke-width="2" marker-end="url(#v-arrowhead)"/>` +
    box(hardX, hardY, boxW, boxH, L.hardcoded, { stroke: 'var(--color-satoshi)', dashed: true }) +
    `<path d="M ${hardX + boxW / 2},${hardY + boxH} V 410 H 760 V ${connectY + boxH / 2} H ${connectX + boxW}" fill="none" stroke="var(--color-satoshi)" stroke-width="2" stroke-dasharray="4,3" marker-end="url(#v-arrowhead)"/>` +
    box(connectX, connectY, boxW, boxH, L.connect, { fill: 'var(--color-hero-subtitle)', stroke: 'var(--color-hero-subtitle)' }) +
    arrow(connectX + boxW / 2, connectY + boxH, addrX + boxW / 2, addrY, {}) +
    box(addrX, addrY, boxW, boxH, L.addr) +
    arrow(addrX + boxW / 2, addrY + boxH, stableX + boxW / 2, stableY, {}) +
    box(stableX, stableY, boxW, boxH, L.stable, { fill: 'var(--color-accent)', fillOpacity: 0.12, stroke: 'var(--color-accent)' });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
