/* Public-company bitcoin treasuries: Strategy vs everyone else. Drawn by the
   in-body embed (ChartEmbedRuntime `public-companies-bar`). A deliberately
   LINEAR horizontal bar chart — the point of the figure is the gap itself:
   the #2 holder's bar is a sliver next to Strategy's, and even every other
   public company combined is about half. A log scale would hide exactly what
   this figure exists to show.

   Values in BTC, mid-2026; per-company as-of dates differ (see the note the
   drawer renders under the chart). Total public-company holdings 1,264,579
   (BitcoinTreasuries, Jul 2026); "others combined" is the residual after the
   named rows. */
import { select } from 'd3-selection';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';

const ROWS = [
  { key: 'strategy', v: 843775, approx: false, colorToken: '--chart-color-2' },
  { key: 'others', v: 298290, approx: true, colorToken: '--chart-color-6' },
  { key: 'xxi', v: 43514, approx: false, colorToken: '--chart-color-4' },
  { key: 'metaplanet', v: 40000, approx: true, colorToken: '--chart-color-4' },
  { key: 'mara', v: 39000, approx: true, colorToken: '--chart-color-4' },
];

const NAMES = {
  en: {
    strategy: 'Strategy (#1)',
    xxi: 'Twenty One Capital (#2)',
    metaplanet: 'Metaplanet (#3)',
    mara: 'MARA (#4)',
    others: 'All other public cos. combined',
  },
  ja: {
    strategy: 'Strategy（1 位）',
    xxi: 'Twenty One Capital（2 位）',
    metaplanet: 'Metaplanet（3 位）',
    mara: 'MARA（4 位）',
    others: '2 位以下の全社合計',
  },
};

export function mount(container, lang) {
  var isJa = lang === 'ja';
  var names = NAMES[isJa ? 'ja' : 'en'];

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function btcShort(v, approx) {
    var prefix = approx ? (isJa ? '約 ' : '~') : '';
    if (isJa) {
      var man = v / 10000;
      return prefix + (man >= 100 ? Math.round(man).toLocaleString('ja-JP') : man.toFixed(1)) + '万 BTC';
    }
    return prefix + Math.round(v).toLocaleString('en-US') + ' BTC';
  }

  function draw() {
    container.innerHTML = '';
    var textCol = token('--color-text');
    var muted = token('--color-text-muted');
    var rect = container.getBoundingClientRect();
    var W = Math.max(300, rect.width || 680);
    var narrow = W < 520;
    var margin = { top: 12, right: narrow ? 84 : 120, bottom: 28, left: narrow ? 130 : 210 };
    var H = 190;
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg').attr('width', W).attr('height', H).attr('viewBox', '0 0 ' + W + ' ' + H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var y = scaleBand().domain(ROWS.map(function (d) { return d.key; })).range([0, h]).padding(0.3);
    var x = scaleLinear().domain([0, 900000]).range([0, w]);

    g.append('g').call(axisLeft(y).tickSizeOuter(0).tickFormat(function (k) { return names[k]; }))
      .selectAll('text').attr('font-size', narrow ? '10px' : '11.5px').style('fill', textCol);
    g.append('g').attr('transform', 'translate(0,' + h + ')')
      .call(axisBottom(x).ticks(narrow ? 3 : 5).tickFormat(function (d) {
        return isJa ? (d / 10000).toLocaleString('ja-JP') + '万' : (d / 1000) + 'k';
      }))
      .selectAll('text').attr('font-size', '10px').style('fill', muted);

    ROWS.forEach(function (d) {
      var color = token(d.colorToken) || '#888';
      var yPos = y(d.key);
      g.append('rect')
        .attr('y', yPos).attr('x', 0)
        .attr('height', y.bandwidth())
        // Floor at 2px so the sliver bars stay visible — the whole point.
        .attr('width', Math.max(2, x(d.v)))
        .attr('fill', color).attr('rx', 2).attr('opacity', d.key === 'others' ? 0.5 : 0.85);
      g.append('text')
        .attr('y', yPos + y.bandwidth() / 2)
        .attr('x', Math.max(2, x(d.v)) + 6)
        .attr('dominant-baseline', 'central')
        .attr('font-size', narrow ? '10px' : '11.5px').attr('font-weight', 700)
        .attr('fill', textCol)
        .style('font-variant-numeric', 'tabular-nums')
        .text(btcShort(d.v, d.approx));
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
