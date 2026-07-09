/* Nonce LSB distribution (Patoshi blocks). Extracted from
   src/components/PatoshiNonceLsb.astro so it can be embedded in-body via
   ChartEmbedRuntime -- the chart belongs right where "The discovery" section
   describes the LSB pattern, not fixed at the bottom of the page. */
import { select, pointer } from 'd3-selection';
import { axisBottom, axisLeft } from 'd3-axis';
import { scaleBand, scaleLinear } from 'd3-scale';
import { max, range, sum } from 'd3-array';

export function mount(container, replayBtn, dist, l) {
  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function readTokens() {
    return {
      patoshi: token('--chart-color-2'),
      gap: token('--chart-negative'),
      sparse: token('--chart-color-6'),
      expected: token('--chart-warning'),
      muted: token('--color-text-muted'),
      text: token('--color-text'),
      tooltipBg: token('--chart-tooltip-bg'),
      tooltipFg: token('--chart-tooltip-fg'),
    };
  }

  function draw() {
    container.innerHTML = '';
    var T = readTokens();
    var rect = container.getBoundingClientRect();
    var W = rect.width || 700;
    var margin = { top: 20, right: 20, bottom: 50, left: 55 };
    var H = Math.min(360, W * 0.5);
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg')
      .attr('width', W).attr('height', H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var x = scaleBand().domain(range(256).map(String)).range([0, w]).padding(0.1);
    var y = scaleLinear().domain([0, max(dist) ?? 0]).nice().range([h, 0]);

    var xTicks = [0, 10, 19, 58, 128, 255];
    g.append('g').attr('transform', 'translate(0,' + h + ')')
      .call(axisBottom(x).tickValues(xTicks.map(String)).tickSizeOuter(0))
      .selectAll('text').attr('font-size', '10px');
    g.append('text').attr('x', w / 2).attr('y', h + 40)
      .attr('text-anchor', 'middle').attr('font-size', '11px')
      .attr('fill', T.muted).text(l.xLabel);

    var rangeAnnotations = [
      { start: 0, end: 9, label: '0–9', color: T.patoshi },
      { start: 10, end: 18, label: '10–18', color: T.gap },
      { start: 19, end: 58, label: '19–58', color: T.patoshi },
    ];
    rangeAnnotations.forEach(function (r) {
      var rx1 = x(String(r.start));
      var rx2 = x(String(r.end));
      if (!rx1 && rx1 !== 0) return;
      g.append('line')
        .attr('x1', rx1).attr('x2', (rx2 || 0) + x.bandwidth())
        .attr('y1', h + 18).attr('y2', h + 18)
        .attr('stroke', r.color).attr('stroke-width', 2).attr('opacity', 0.5);
    });

    g.append('g').call(axisLeft(y).ticks(5))
      .selectAll('text').attr('font-size', '10px');
    g.append('text').attr('transform', 'rotate(-90)')
      .attr('x', -h / 2).attr('y', -42)
      .attr('text-anchor', 'middle').attr('font-size', '11px')
      .attr('fill', T.muted).text(l.yLabel);

    var total = sum(dist);
    var expected = total / 256;
    g.append('line')
      .attr('x1', 0).attr('x2', w)
      .attr('y1', y(expected)).attr('y2', y(expected))
      .attr('stroke', T.expected).attr('stroke-width', 1.5)
      .attr('stroke-dasharray', '6,4').attr('stroke-opacity', 0.7);
    g.append('text').attr('x', w - 4).attr('y', y(expected) - 5)
      .attr('text-anchor', 'end').attr('font-size', '10px')
      .attr('fill', T.expected).text(l.expectedLabel);

    function barColor(i) {
      if (i <= 9) return T.patoshi;
      if (i <= 18) return T.gap;
      if (i <= 58) return T.patoshi;
      return T.sparse;
    }

    g.selectAll('.bar')
      .data(dist)
      .enter().append('rect')
      .attr('x', function (d, i) { return x(String(i)) ?? 0; })
      .attr('y', function (d) { return y(d); })
      .attr('width', x.bandwidth())
      .attr('height', function (d) { return h - y(d); })
      .attr('fill', function (d, i) { return barColor(i); })
      .attr('opacity', 0.85);

    container.style.position = 'relative';
    var tooltip = select(container).append('div')
      .style('position', 'absolute').style('pointer-events', 'none').style('opacity', 0)
      .style('background', T.tooltipBg).style('color', T.tooltipFg)
      .style('padding', '6px 10px').style('border-radius', '4px')
      .style('font-size', '12px').style('white-space', 'nowrap').style('z-index', '10');

    svg.on('mousemove', function (event) {
      var coords = pointer(event, g.node());
      var xPos = coords[0];
      if (xPos < 0 || xPos > w) { tooltip.style('opacity', 0); return; }
      var step = w / 256;
      var idx = Math.min(255, Math.max(0, Math.floor(xPos / step)));
      var val = dist[idx] || 0;

      tooltip.html('<b>' + l.tooltipValue + ': ' + idx + '</b><br>' + l.tooltipCount + ': ' + val)
        .style('opacity', 1);

      var cr = container.getBoundingClientRect();
      var tx = event.clientX - cr.left + 14;
      var ty = event.clientY - cr.top - 10;
      if (tx + 160 > cr.width) tx = tx - 180;
      tooltip.style('left', tx + 'px').style('top', ty + 'px');
    }).on('mouseleave', function () {
      tooltip.style('opacity', 0);
    });
  }

  draw();

  var replayFn = null;
  (function arm(n) {
    if (window.BAChartAnim) {
      replayFn = window.BAChartAnim.wipeReveal([container], { duration: 4600 });
    } else if (n < 40) { setTimeout(function () { arm(n + 1); }, 50); }
  })(0);
  if (replayBtn) replayBtn.addEventListener('click', function () { if (replayFn) replayFn(); });

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
