/* Burrows' Delta distribution histogram: Satoshi vs mailing-list authors
   (van Dorst 2024 corpus reanalysis). Extracted from
   src/components/StylometricDistanceHistogram.astro so it can be embedded
   in-body via ChartEmbedRuntime (`<!-- chart: stylometric-distance-histogram -->`)
   instead of pinned to a fixed slot. Drawing logic is unchanged from the
   original component; only the TypeScript type annotations were stripped
   (this file is loaded directly by the browser via ChartEmbedRuntime's
   client script, not run through Astro's per-component TS processing). */
import { select } from 'd3-selection';
import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';

export function mount(container, chartData) {
  var bins = chartData.bins;
  var stats = chartData.stats;
  // Dedupe named candidates by label for chart display: when one author has
  // multiple email accounts in the corpus (e.g. Adam Back: adam@cypherspace
  // and aba@dcs.ex.ac.uk), the chart shows only the closest-to-Satoshi
  // account (lowest Burrows Delta). The detailed per-account breakdown lives
  // in the entry's table -- the chart's job is to place the named candidates
  // visually in the distribution, where one row per author is clearer.
  var named = (function dedupe(list) {
    var byLabel = {};
    list.forEach(function (c) {
      var prev = byLabel[c.label];
      if (!prev || c.burrow < prev.burrow) byLabel[c.label] = c;
    });
    return Object.keys(byLabel).map(function (k) { return byLabel[k]; });
  })(chartData.namedCandidates);
  var colorTokens = chartData.candidateColorTokens;
  var l = chartData.labels;

  container.style.position = 'relative';

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function readColors() {
    var resolved = {};
    Object.keys(colorTokens).forEach(function (k) { resolved[k] = token(colorTokens[k]); });
    return resolved;
  }
  function readTokens() {
    return {
      bar: token('--chart-color-9'),
      muted: token('--color-text-muted'),
      grid: token('--color-divider'),
      text: token('--color-text'),
      tooltipBg: token('--chart-tooltip-bg'),
      tooltipFg: token('--chart-tooltip-fg'),
    };
  }

  function draw() {
    container.innerHTML = '';
    var T = readTokens();
    var colors = readColors();
    var rect = container.getBoundingClientRect();
    var W = rect.width || 700;
    var margin = { top: 28, right: 24, bottom: 46, left: 200 };
    var H = Math.min(640, Math.max(480, W * 0.65));
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg')
      .attr('width', W).attr('height', H)
      .attr('viewBox', '0 0 ' + W + ' ' + H);

    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var yMin = stats.mean - 2.5 * stats.stdev;
    var yMax = stats.mean + 2.5 * stats.stdev;
    var y = scaleLinear().domain([yMin, yMax]).range([0, h]);

    var visibleBins = bins.filter(function (b) {
      return b.x1 > yMin && b.x0 < yMax;
    });

    var maxCount = max(visibleBins, function (b) { return b.count; }) ?? 0;
    var x = scaleLinear().domain([0, maxCount * 1.1]).range([0, w]);

    var bars = g.selectAll('.bar')
      .data(visibleBins)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', 0)
      .attr('y', function (d) { return y(Math.max(yMin, d.x0)); })
      .attr('width', function (d) { return x(d.count); })
      .attr('height', function (d) {
        var top = y(Math.max(yMin, d.x0));
        var bot = y(Math.min(yMax, d.x1));
        return Math.max(0, bot - top - 1);
      })
      .attr('fill', T.bar)
      .attr('opacity', 0.7);

    g.append('text')
      .attr('x', 2).attr('y', -10)
      .attr('text-anchor', 'start').attr('fill', T.muted).attr('font-size', '11px')
      .attr('font-weight', '600')
      .text(l.directionLabel);

    var meanY = y(stats.mean);
    g.append('line')
      .attr('y1', meanY).attr('y2', meanY)
      .attr('x1', 0).attr('x2', w)
      .attr('stroke', T.muted).attr('stroke-width', 1).attr('stroke-dasharray', '4 3');

    g.append('text')
      .attr('x', w - 4).attr('y', meanY - 4)
      .attr('text-anchor', 'end').attr('fill', T.muted).attr('font-size', '11px')
      .text(l.meanLabel + ' ' + stats.mean.toFixed(5));

    var sorted = named.slice().sort(function (a, b) { return a.burrow - b.burrow; });
    var minLabelGap = 22;
    var clusterCenterY = sorted.reduce(function (s, c) { return s + y(c.burrow); }, 0) / sorted.length;
    var totalSpan = (sorted.length - 1) * minLabelGap;
    var firstLabelY = clusterCenterY - totalSpan / 2;
    if (firstLabelY < 8) firstLabelY = 8;
    if (firstLabelY + totalSpan > h - 8) firstLabelY = h - 8 - totalSpan;

    sorted.forEach(function (c, i) {
      c._cy = y(c.burrow);
      c._labelY = firstLabelY + i * minLabelGap;
    });

    sorted.forEach(function (c) {
      var color = colors[c.label] || T.muted;
      var cy = c._cy ?? 0;
      g.append('line')
        .attr('y1', cy).attr('y2', cy)
        .attr('x1', 0).attr('x2', w)
        .attr('stroke', color).attr('stroke-width', 1.5)
        .attr('opacity', 0.7);

      g.append('path')
        .attr('d', 'M0,' + cy + ' L-7,' + (cy - 5) + ' L-7,' + (cy + 5) + ' Z')
        .attr('fill', color);
    });

    var labelRightX = -52;
    sorted.forEach(function (c) {
      var color = colors[c.label] || T.muted;
      var displayName = (l.candidateNames && l.candidateNames[c.label]) || c.label;
      var labelText = displayName + ' (' + c.percentile + '%)';

      g.append('text')
        .attr('x', labelRightX).attr('y', c._labelY ?? 0)
        .attr('text-anchor', 'end')
        .attr('fill', color).attr('font-size', '11px').attr('font-weight', '600')
        .text(labelText);
    });

    g.append('g').attr('class', 'axis y')
      .call(axisLeft(y).ticks(6).tickFormat(function (d) { return d.valueOf().toFixed(4); }));

    g.append('g').attr('class', 'axis x')
      .attr('transform', 'translate(0,' + h + ')')
      .call(axisBottom(x).ticks(6));

    svg.append('text')
      .attr('x', margin.left + w / 2).attr('y', H - 8)
      .attr('text-anchor', 'middle').attr('font-size', '12px').attr('fill', T.muted)
      .text(l.xLabel);

    var tooltip = select(container).append('div')
      .style('position', 'absolute').style('pointer-events', 'none').style('opacity', 0)
      .style('background', T.tooltipBg).style('color', T.tooltipFg)
      .style('padding', '7px 10px').style('border-radius', '4px')
      .style('font-size', '12px').style('white-space', 'nowrap').style('z-index', '10');

    bars
      .on('mousemove', function (event, d) {
        tooltip.html(
          '<b>' + l.tooltipBin + ': ' + d.x0.toFixed(5) + '-' + d.x1.toFixed(5) + '</b><br>' +
          l.tooltipCount + ': ' + d.count
        ).style('opacity', 1);
        var cr = container.getBoundingClientRect();
        var tx = event.clientX - cr.left + 14;
        var ty = event.clientY - cr.top - 10;
        if (tx + 200 > cr.width) tx = tx - 220;
        tooltip.style('left', tx + 'px').style('top', ty + 'px');
      })
      .on('mouseleave', function () { tooltip.style('opacity', 0); });
  }

  draw();
  var timer;
  window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(draw, 200); });

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
