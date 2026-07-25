/* Ethereum's market capitalisation as a share of Bitcoin's, at six dated
   snapshots. Mounted by the in-body embed (ChartEmbedRuntime `eth-btc-ratio`,
   placed via a `<!-- chart: eth-btc-ratio -->` marker in the fork-genealogy
   entry, directly under the market-cap race).

   Why this exists next to the race chart: the race is sampled once a year, on
   June 1, so it cannot show what happened inside June 2017 — the ratio ran
   from 55% on June 4 to 85% by June 12. A date axis can. The whole point of
   the figure is that single approach and the distance since, so it is an
   emphasis chart: the 2017 reading carries the accent, the rest are muted.

   Every point is a CoinMarketCap dated snapshot, listed in the entry's
   secondarySources. The ratio is computed from the two market caps on that
   snapshot; the figures are in the comments beside each row. Points are the
   mark and the connecting line is deliberately faint: six snapshots do not
   describe the path between them, and the note under the figure says so. */
import { select } from 'd3-selection';
import { scaleTime, scaleLinear } from 'd3-scale';

// [date, ETH market cap, BTC market cap] — both in USD, verbatim from the
// snapshot named in the comment. The percentage is derived, never hand-typed.
const SNAPSHOTS = [
  ['2016-07-01', 995161129.81, 10632675312.22],       // historical/20160701
  ['2017-06-12', 37110984412.40, 43585345611.15],     // historical/20170612
  ['2018-12-15', 8766638124.25, 56400691424.65],      // historical/20181215
  ['2021-05-12', 438585075673.54, 919527847949.71],   // historical/20210512
  ['2025-01-01', 404011689241.40, 1869920980356.28],  // historical/20250101
  ['2026-07-25', 224556416029, 1285563360163],        // live figures, as consulted
];
const PEAK_INDEX = 1;

const T = {
  en: {
    yLabel: "Ethereum's market cap as a share of Bitcoin's",
    peakNote: 'closest approach',
    aria: "Ethereum's market capitalisation as a share of Bitcoin's at six dated snapshots, peaking near 85% in June 2017",
  },
  ja: {
    yLabel: 'イーサリアムの時価総額 / ビットコインの時価総額',
    peakNote: '最も接近',
    aria: '日付の付いた 6 時点での、ビットコインに対するイーサリアムの時価総額比。2017 年 6 月の約 85% が最大',
  },
};

export function mount(container, lang) {
  var isJa = lang === 'ja';
  var t = T[isJa ? 'ja' : 'en'];
  var points = SNAPSHOTS.map(function (r) {
    return { date: new Date(r[0] + 'T00:00:00Z'), pct: (r[1] / r[2]) * 100, label: r[0] };
  });

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function draw() {
    container.innerHTML = '';
    var rect = container.getBoundingClientRect();
    var W = Math.max(300, rect.width || 680);
    var narrow = W < 520;
    var H = narrow ? 264 : 294;
    var padL = narrow ? 38 : 46;
    var padR = narrow ? 14 : 18;
    // Top padding leaves room for two stacked labels above the peak marker
    // (its value and the "closest approach" caption) without either of them
    // colliding with the y-axis caption on the first line.
    var padT = 46;
    var padB = 34;

    var accent = token('--chart-emphasis') || '#1f3a5f';
    var muted = token('--chart-color-6') || '#5a6470';
    var grid = token('--chart-grid') || '#ddd';
    var textMuted = token('--color-text-muted');
    var bg = token('--color-bg');

    var x = scaleTime()
      .domain([new Date('2016-01-01T00:00:00Z'), new Date('2027-01-01T00:00:00Z')])
      .range([padL, W - padR]);
    var y = scaleLinear().domain([0, 90]).range([H - padB, padT]);

    var svg = select(container).append('svg')
      .attr('width', W).attr('height', H)
      .attr('viewBox', '0 0 ' + W + ' ' + H)
      .attr('role', 'img')
      .attr('aria-label', t.aria);

    // ---- horizontal gridlines + y ticks ----
    [0, 25, 50, 75].forEach(function (v) {
      svg.append('line')
        .attr('x1', padL).attr('x2', W - padR)
        .attr('y1', y(v)).attr('y2', y(v))
        .attr('stroke', grid).attr('stroke-width', 1);
      svg.append('text')
        .attr('x', padL - 6).attr('y', y(v) + 3)
        .attr('text-anchor', 'end')
        .attr('font-size', '10px').attr('fill', textMuted)
        .style('font-variant-numeric', 'tabular-nums')
        .text(v + '%');
    });

    // ---- year ticks ----
    [2016, 2018, 2020, 2022, 2024, 2026].forEach(function (yr) {
      svg.append('text')
        .attr('x', x(new Date(yr + '-01-01T00:00:00Z'))).attr('y', H - padB + 15)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px').attr('fill', textMuted)
        .style('font-variant-numeric', 'tabular-nums')
        .text(yr);
    });

    // ---- connecting line: faint on purpose (see file header) ----
    var d = points.map(function (p, i) { return (i ? 'L ' : 'M ') + x(p.date) + ' ' + y(p.pct); }).join(' ');
    svg.append('path')
      .attr('d', d).attr('fill', 'none')
      .attr('stroke', muted).attr('stroke-width', 1.5).attr('stroke-opacity', 0.4);

    // ---- points + direct labels ----
    points.forEach(function (p, i) {
      var isPeak = i === PEAK_INDEX;
      var g = svg.append('g');
      g.append('title').text(p.label + ' — ' + p.pct.toFixed(1) + '%');
      g.append('circle')
        .attr('cx', x(p.date)).attr('cy', y(p.pct))
        .attr('r', isPeak ? 6 : 4.5)
        .attr('fill', isPeak ? accent : muted)
        .attr('fill-opacity', isPeak ? 1 : 0.65)
        .attr('stroke', bg).attr('stroke-width', 2);

      // Value above the point, except the last one which would run off the
      // right edge — that one sits to the left of its marker. The final two
      // points fall close together and their labels collide once the plot is
      // narrow, so on small widths the last one drops below its marker.
      var last = i === points.length - 1;
      var below = narrow && last;
      g.append('text')
        .attr('x', last && !below ? x(p.date) - 9 : x(p.date))
        .attr('y', below ? y(p.pct) + 18 : y(p.pct) - (isPeak ? 13 : 10))
        .attr('text-anchor', last && !below ? 'end' : 'middle')
        .attr('font-size', isPeak ? '13px' : '11px')
        .attr('font-weight', isPeak ? 700 : 600)
        .attr('fill', isPeak ? accent : textMuted)
        .style('font-variant-numeric', 'tabular-nums')
        .text(p.pct.toFixed(1) + '%');

      if (isPeak) {
        g.append('text')
          .attr('x', x(p.date)).attr('y', y(p.pct) - 27)
          .attr('text-anchor', 'middle')
          .attr('font-size', '10.5px').attr('fill', accent)
          .text(t.peakNote);
      }
    });

    svg.append('text')
      .attr('x', padL).attr('y', 12)
      .attr('font-size', '10.5px').attr('fill', textMuted)
      .text(t.yLabel);
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
