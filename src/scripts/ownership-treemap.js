/* Ownership treemap of the full 21M BTC cap, mid-2026 snapshot. Drawn by the
   in-body embed (ChartEmbedRuntime `ownership-treemap`, placed via a
   `<!-- chart: ownership-treemap -->` marker in the bitcoin-ownership-map
   entry). Two levels: categories, with named holders as children where a
   tracker publishes them. All values are BTC; sources and as-of dates are
   cited in the entry body next to the figure.

   The "individuals & unclassified" cell is computed as the arithmetic
   remainder (21M minus every sourced cell), so the map always sums to
   exactly 21M and the unattributed mass stays visible instead of being
   silently dropped. Each category with named children also gets an
   auto-computed "other" child, so child sums always equal the parent. */
import { select } from 'd3-selection';
import { hierarchy, treemap } from 'd3-hierarchy';

const CAP = 21000000;
const CATEGORIES = [
  // "Lost" uses the lower bound of the widely-cited 2.3M-3.7M range.
  { key: 'lost', v: 2300000, colorToken: '--chart-color-6', dim: true },
  // Research-consensus Patoshi estimate (Lerner 2019 / Whale Alert 2020).
  { key: 'satoshi', v: 1100000, colorToken: '--color-satoshi' },
  { key: 'public', v: 1264579, colorToken: '--chart-color-2', children: [{ key: 'strategy', v: 843775 }] },
  { key: 'private', v: 281752, colorToken: '--chart-color-3' },
  { key: 'etf', v: 1214016, colorToken: '--chart-color-4', children: [{ key: 'ibit', v: 733947 }] },
  {
    key: 'gov',
    v: 649954,
    colorToken: '--chart-color-5',
    children: [
      { key: 'us', v: 328372 },
      { key: 'china', v: 194000 },
      { key: 'uk', v: 61245 },
    ],
  },
  { key: 'unmined', v: 957000, colorToken: '--chart-grid', dim: true },
];

const NAMES = {
  en: {
    individuals: 'Individuals & unclassified',
    lost: 'Lost (lower-bound est.)',
    satoshi: 'Satoshi (Patoshi estimate)',
    public: 'Public companies',
    strategy: 'Strategy',
    publicOther: 'Other public companies',
    private: 'Private companies',
    etf: 'Spot ETFs & funds',
    ibit: 'BlackRock IBIT',
    etfOther: 'Other ETFs',
    gov: 'Governments',
    us: 'United States',
    china: 'China (seized)',
    uk: 'United Kingdom',
    govOther: 'Other governments',
    unmined: 'Not yet mined',
  },
  ja: {
    individuals: '個人・未分類',
    lost: '失われたコイン（推定下限）',
    satoshi: 'サトシ（Patoshi 推定）',
    public: '上場企業',
    strategy: 'Strategy',
    publicOther: 'その他の上場企業',
    private: '非上場企業',
    etf: '現物 ETF・ファンド',
    ibit: 'BlackRock IBIT',
    etfOther: 'その他の ETF',
    gov: '政府',
    us: '米国',
    china: '中国（押収）',
    uk: '英国',
    govOther: 'その他の政府',
    unmined: '未採掘',
  },
};

export function mount(container, lang) {
  var isJa = lang === 'ja';
  var names = NAMES[isJa ? 'ja' : 'en'];

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  // Build the hierarchy: remainder cell + auto "other" children so every
  // parent's children sum exactly to the parent's own sourced value.
  var attributed = 0;
  CATEGORIES.forEach(function (c) { attributed += c.v; });
  var roots = [
    { key: 'individuals', colorToken: '--chart-color-1', value: CAP - attributed },
  ];
  CATEGORIES.forEach(function (c) {
    if (c.children && c.children.length) {
      var childSum = 0;
      var kids = c.children.map(function (ch) {
        childSum += ch.v;
        return { key: ch.key, colorToken: c.colorToken, dim: c.dim, value: ch.v };
      });
      kids.push({ key: c.key + 'Other', colorToken: c.colorToken, dim: c.dim, value: c.v - childSum });
      roots.push({ key: c.key, colorToken: c.colorToken, dim: c.dim, children: kids });
    } else {
      roots.push({ key: c.key, colorToken: c.colorToken, dim: c.dim, value: c.v });
    }
  });

  function pct(v) {
    return ((v / CAP) * 100).toFixed(1) + '%';
  }
  function btcShort(v) {
    if (isJa) {
      var man = v / 10000;
      return (man >= 100 ? Math.round(man).toLocaleString('ja-JP') : man.toFixed(1)) + '万 BTC';
    }
    if (v >= 1000000) return (v / 1000000).toFixed(2) + 'M BTC';
    return Math.round(v / 1000) + 'k BTC';
  }

  function draw() {
    container.innerHTML = '';
    var textCol = token('--color-text');
    var bg = token('--color-bg');
    var rect = container.getBoundingClientRect();
    var W = Math.max(300, rect.width || 680);
    var H = W < 520 ? 520 : 440;

    var root = hierarchy({ key: 'root', children: roots })
      .sum(function (d) { return d.children ? 0 : (d.value || 0); })
      .sort(function (a, b) { return (b.value || 0) - (a.value || 0); });

    treemap().size([W, H]).paddingInner(2).paddingOuter(2)(root);

    var svg = select(container).append('svg').attr('width', W).attr('height', H).attr('viewBox', '0 0 ' + W + ' ' + H);

    root.leaves().forEach(function (leaf) {
      var d = leaf.data;
      var w = leaf.x1 - leaf.x0;
      var h = leaf.y1 - leaf.y0;
      var color = token(d.colorToken) || '#888';
      var name = names[d.key] || d.key;
      var value = leaf.value || 0;
      var parentName = leaf.parent && leaf.parent.data.key !== 'root' ? names[leaf.parent.data.key] || '' : '';
      var tooltip = (parentName ? parentName + ' › ' : '') + name + ' — ' +
        Math.round(value).toLocaleString(isJa ? 'ja-JP' : 'en-US') + ' BTC (' + pct(value) + ')';

      var cell = svg.append('g').attr('transform', 'translate(' + leaf.x0 + ',' + leaf.y0 + ')');
      cell.append('rect')
        .attr('width', w).attr('height', h)
        .attr('fill', color).attr('fill-opacity', d.dim ? 0.35 : 0.8)
        .attr('stroke', bg).attr('stroke-width', 1.5).attr('rx', 2);
      cell.append('title').text(tooltip);

      // Progressive labelling: name only when the cell can hold it, then
      // percent, then the BTC amount. Small cells rely on the tooltip.
      var fs = 12;
      var charW = fs * (isJa ? 1.05 : 0.62);
      if (w > 64 && h > 30) {
        var maxChars = Math.max(3, Math.floor((w - 12) / charW));
        var shown = name.length > maxChars ? name.slice(0, maxChars - 1) + '…' : name;
        cell.append('text').attr('x', 7).attr('y', 17)
          .attr('font-size', fs + 'px').attr('font-weight', 700).attr('fill', textCol)
          .text(shown);
        if (h > 48) {
          cell.append('text').attr('x', 7).attr('y', 34)
            .attr('font-size', '11px').attr('fill', textCol).attr('opacity', 0.85)
            .style('font-variant-numeric', 'tabular-nums')
            .text(pct(value));
        }
        if (h > 66 && w > 96) {
          cell.append('text').attr('x', 7).attr('y', 50)
            .attr('font-size', '11px').attr('fill', textCol).attr('opacity', 0.85)
            .style('font-variant-numeric', 'tabular-nums')
            .text(btcShort(value));
        }
      }
    });
  }

  draw();
  var timer;
  window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(draw, 250); });
  if (typeof window.matchMedia === 'function') {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.addEventListener) mql.addEventListener('change', draw);
    else if (mql.addListener) mql.addListener(draw);
  }
  if (typeof MutationObserver === 'function') {
    new MutationObserver(draw).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-mode', 'data-theme'],
    });
  }
}
