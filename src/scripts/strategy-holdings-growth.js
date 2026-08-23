/* Strategy's own bitcoin holdings, year-end 2020 through the most recent
   disclosed figure (Jul 6, 2026). Drawn by the in-body embed (ChartEmbedRuntime
   `strategy-holdings-growth`), placed in the ownership-map entry directly
   below the public-companies-bar chart -- that chart compares Strategy
   against every other company at a single point in time; this one shows how
   Strategy's own position grew to get there. A plain vertical growth chart:
   the point is the shape of the growth (a sharp bend starting 2024), not a
   comparison between entities, so bars need no distinct per-row colors here.

   Every value is a per-year SEC-filing or company-disclosed figure. This
   chart replaced a body table that listed the same rows verbatim (removed
   to avoid showing the same seven numbers twice); this file is now the only
   place these figures are visualized, so both locales render the exact BTC
   count, not a rounded one. */
import { select } from 'd3-selection';
import { scaleBand, scaleLinear } from 'd3-scale';

// [year-end label, BTC] -- verbatim from the entry's own table.
const ROWS = [
  ['2020', 70470],
  ['2021', 124391],
  ['2022', 132500],
  ['2023', 189150],
  ['2024', 446400],
  ['2025', 672497],
  ['2026*', 843775],
];

const T = {
  en: {
    footnote: '* 2026 figure is as of July 6, not year-end.',
  },
  ja: {
    footnote: '※ 2026 年の値は年末時点ではなく 7 月 6 日時点。',
  },
};

export function mount(container, lang) {
  var isJa = lang === 'ja';
  var t = T[isJa ? 'ja' : 'en'];

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function btcShort(v) {
    // Exact count in both locales -- this replaced a table that listed the
    // same seven values verbatim, so rounding here would be a real loss
    // versus what the reader could previously read off the page.
    return Math.round(v).toLocaleString(isJa ? 'ja-JP' : 'en-US');
  }

  function draw() {
    container.innerHTML = '';
    var rect = container.getBoundingClientRect();
    var W = Math.max(300, rect.width || 640);
    var narrow = W < 480;
    var H = narrow ? 220 : 240;
    var padL = narrow ? 6 : 10;
    var padR = narrow ? 6 : 10;
    var padT = 28;
    var padB = narrow ? 40 : 34;
    var w = W - padL - padR;
    var h = H - padT - padB;

    var accent = token('--chart-color-2') || '#2563eb';
    var textCol = token('--color-text');
    var textMuted = token('--color-text-muted');

    var x = scaleBand().domain(ROWS.map(function (d) { return d[0]; })).range([0, w]).padding(0.28);
    var y = scaleLinear().domain([0, 900000]).range([h, 0]);

    var svg = select(container).append('svg')
      .attr('width', W).attr('height', H)
      .attr('viewBox', '0 0 ' + W + ' ' + H)
      .attr('role', 'img')
      .attr('aria-label', isJa
        ? 'Strategy のビットコイン保有量、2020 年末から 2026 年 7 月まで、70,470 BTC から 843,775 BTC へ増加'
        : "Strategy's Bitcoin holdings, year-end 2020 through July 2026, growing from 70,470 to 843,775 BTC");
    var g = svg.append('g').attr('transform', 'translate(' + padL + ',' + padT + ')');

    ROWS.forEach(function (d) {
      var key = d[0], v = d[1];
      var barX = x(key);
      var barW = x.bandwidth();
      var barY = y(v);
      var barH = h - barY;

      g.append('rect')
        .attr('x', barX).attr('y', barY)
        .attr('width', barW).attr('height', Math.max(1, barH))
        .attr('fill', accent).attr('rx', 2).attr('opacity', 0.85);

      g.append('text')
        .attr('x', barX + barW / 2).attr('y', barY - 6)
        .attr('text-anchor', 'middle')
        .attr('font-size', narrow ? '9.5px' : '11px').attr('font-weight', 700)
        .attr('fill', textCol)
        .style('font-variant-numeric', 'tabular-nums')
        .text(btcShort(v));

      g.append('text')
        .attr('x', barX + barW / 2).attr('y', h + 16)
        .attr('text-anchor', 'middle')
        .attr('font-size', narrow ? '9px' : '10px').attr('fill', textMuted)
        .text(key);
    });

    svg.append('text')
      .attr('x', padL).attr('y', H - 4)
      .attr('font-size', '9px').attr('fill', textMuted)
      .text(t.footnote);
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
