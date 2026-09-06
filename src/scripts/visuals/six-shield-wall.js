// Non-identification as six independent shields around a center: any
// identity hypothesis has to displace every single shield, not just the
// one it happens to explain -- a hypothesis that accounts for the
// pseudonym alone has cleared one shield out of six.
import { svgFigure, esc, ARROWHEAD_DEFS, arrow } from './_shared.js';

const LABELS = {
  en: {
    title: 'Six shields, not one -- a hypothesis must clear all of them',
    desc: 'Any hypothesis about who Satoshi was has to displace six independent layers of evidence at once, not just the one it happens to explain: the pseudonym itself (a Japanese-form name with no national pointer), the communication channels (3 anonymous emails, 5 scattered publication venues), linguistic and temporal traces (British register, timezone-spread posting), development and distribution choices (a Windows-only build, .rar archives, GnuPG MingW32), the genesis block\'s origin de-attribution (no provable creator, a five-day gap before anyone else touched the code), and the staged withdrawal (gradual, not abrupt, from September 2010 to April 2011). Clearing one shield still leaves five standing.',
    hypothesis: 'Any identity\nhypothesis',
    center: 'Non-identification\n2008 -- present',
    s1: '§1 Pseudonym\n(naming)',
    s2: '§2 Channels (media)\n3 anonymous emails,\n5 publication venues',
    s3: '§3 Linguistic +\ntemporal traces',
    s4: '§4 Dev + distribution\n(.rar / GnuPG MingW32)',
    s5: '§5 Genesis-block\nconstants (origin\nde-attribution)',
    s6: '§6 Staged\nwithdrawal (handover)',
    caption: 'A hypothesis that explains one shield has not touched the other five -- the wall holds as long as any one of them does.',
  },
  ja: {
    title: '盾は1枚ではなく6枚 -- 仮説はすべてを突破しなければならない',
    desc: 'サトシが誰であったかという仮説は、たまたま説明できる1つだけでなく、6つの独立した証拠層を一度に突破しなければならない: 仮名そのもの(国籍を示す手がかりのない日本語形式の名前)、通信チャネル(匿名メール3種、分散した発表媒体5種)、言語的・時間的痕跡(英国式の語法、複数タイムゾーンにまたがる投稿)、開発と配布の選択(Windows限定のビルド、.rarアーカイブ、GnuPG MingW32)、ジェネシスブロック定数における起源の脱帰属化(証明可能な作成者がいない、他者がコードに触れるまでの5日間の空白)、そして段階的撤退(2010年9月から2011年4月にかけての、突然ではなく漸進的な退場)。1枚の盾を突破しても、残り5枚はそのまま立っている。',
    hypothesis: '身元特定の\n仮説',
    center: '非特定化\n2008年 -- 現在',
    s1: '§1 仮名\n(命名)',
    s2: '§2 通信チャネル(媒体)\n匿名メール3種、\n公開媒体5種',
    s3: '§3 言語的・\n時間的痕跡',
    s4: '§4 開発・配布の選択\n(.rar / GnuPG MingW32)',
    s5: '§5 ジェネシスブロック\n定数(起源の\n脱帰属化)',
    s6: '§6 段階的撤退\n(退場)',
    caption: '1枚の盾を説明できても、残り5枚には触れていない。壁はそのうちどれか1枚でも立っている限り持ちこたえる。',
  },
};

function multiline(x, y, text, lineHeight = 12) {
  return text
    .split('\n')
    .map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`)
    .join('');
}

function box(x, y, w, h, label, opts = {}) {
  const { fill = 'var(--color-bg-alt)', stroke = 'var(--color-border)', fontSize = 10 } = opts;
  const lines = label.split('\n').length;
  const cy = y + h / 2 - (lines - 1) * 6;
  return (
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="6" fill="${fill}" stroke="${stroke}" stroke-width="1.5"/>` +
    `<text x="${x + w / 2}" y="${cy}" text-anchor="middle" fill="var(--color-text)" font-size="${fontSize}" font-family="var(--font-body, sans-serif)">${multiline(x + w / 2, cy, label, 12)}</text>`
  );
}

export function mount(host, lang) {
  const L = LABELS[lang] || LABELS.en;
  const cx = 490, cy = 490;
  const radii = [70, 105, 140, 175, 210, 245];
  const shields = [L.s1, L.s2, L.s3, L.s4, L.s5, L.s6];
  const colors = ['var(--color-satoshi)', 'var(--color-hero-subtitle)', 'var(--color-satoshi)', 'var(--color-hero-subtitle)', 'var(--color-satoshi)', 'var(--color-hero-subtitle)'];
  const centerR = 42;
  const angles = [-90, -30, 30, 90, 150, 210];
  const boxW = 190, boxH = 62;
  const labelDist = radii[radii.length - 1] + 110;
  const W = 2 * (labelDist + boxW / 2 + 20);
  const H = W;

  let rings = '';
  for (let i = radii.length - 1; i >= 0; i--) {
    rings += `<circle cx="${cx}" cy="${cy}" r="${radii[i]}" fill="${colors[i]}" opacity="0.06" stroke="${colors[i]}" stroke-width="1.5"/>`;
  }

  let leaders = '';
  let labels = '';
  for (let i = 0; i < radii.length; i++) {
    const rad = (angles[i] * Math.PI) / 180;
    const ringX = cx + radii[i] * Math.cos(rad);
    const ringY = cy + radii[i] * Math.sin(rad);
    const lcx = cx + labelDist * Math.cos(rad);
    const lcy = cy + labelDist * Math.sin(rad);
    leaders += `<line x1="${ringX}" y1="${ringY}" x2="${lcx}" y2="${lcy}" stroke="${colors[i]}" stroke-width="1.5" stroke-dasharray="3,3"/>`;
    labels += box(lcx - boxW / 2, lcy - boxH / 2, boxW, boxH, shields[i], { stroke: colors[i] });
  }

  const hypAngle = -60;
  const hypRad = (hypAngle * Math.PI) / 180;
  const hypDist = labelDist + 90;
  const hypX = cx + hypDist * Math.cos(hypRad);
  const hypY = cy + hypDist * Math.sin(hypRad);
  const arrowStartDist = hypDist - 25;
  const arrowStartX = cx + arrowStartDist * Math.cos(hypRad);
  const arrowStartY = cy + arrowStartDist * Math.sin(hypRad);
  const arrowEndDist = radii[radii.length - 1] - 15;
  const arrowEndX = cx + arrowEndDist * Math.cos(hypRad);
  const arrowEndY = cy + arrowEndDist * Math.sin(hypRad);

  const inner =
    ARROWHEAD_DEFS +
    rings +
    leaders +
    `<circle cx="${cx}" cy="${cy}" r="${centerR}" fill="var(--color-accent)" opacity="0.15" stroke="var(--color-accent)" stroke-width="2"/>` +
    `<text x="${cx}" y="${cy + 4}" text-anchor="middle" fill="var(--color-text)" font-size="9.5" font-family="var(--font-body, sans-serif)">${multiline(cx, cy - 4, L.center, 12)}</text>` +
    labels +
    `<text x="${hypX}" y="${hypY}" text-anchor="middle" fill="var(--color-text-muted)" font-size="11" font-family="var(--font-body, sans-serif)">${multiline(hypX, hypY, L.hypothesis, 13)}</text>` +
    arrow(arrowStartX, arrowStartY, arrowEndX, arrowEndY, { dashed: true });

  host.innerHTML = svgFigure({ width: W, height: H, title: L.title, desc: L.desc, inner, caption: L.caption });
}
