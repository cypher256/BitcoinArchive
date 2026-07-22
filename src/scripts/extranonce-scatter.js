/* ExtraNonce scatter (Patoshi vs non-Patoshi blocks, illustrative
   reconstruction of Lerner's 2013 analysis). Extracted from
   src/components/PatoshiExtraNonce.astro (since removed) so it can be embedded in-body via
   ChartEmbedRuntime -- the chart belongs right at the end of "Method",
   where the slope-segment / restart-every-~100-hours finding it visualizes
   is described, not fixed at the bottom of the page. */
import { select } from 'd3-selection';
import { max } from 'd3-array';
import { scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';

export function mount(container, patoshi, nonPatoshi, l) {
  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function readTokens() {
    return {
      patoshi: token('--color-accent'),
      nonPatoshi: token('--chart-color-6'),
      muted: token('--color-text-muted'),
      text: token('--color-text'),
    };
  }

  function draw() {
    container.innerHTML = '';
    var T = readTokens();
    var rect = container.getBoundingClientRect();
    var W = rect.width || 700;
    var margin = { top: 20, right: 30, bottom: 50, left: 60 };
    var H = 360;
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg').attr('width', W).attr('height', H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var x = scaleLinear().domain([0, 36288]).range([0, w]);
    var maxY = max(patoshi.concat(nonPatoshi), function (d) { return d.y; });
    var y = scaleLinear().domain([0, maxY ?? 1]).nice().range([h, 0]);

    g.append('g').attr('transform', 'translate(0,' + h + ')')
      .call(axisBottom(x).ticks(6).tickFormat(function (d) { return (Number(d) / 1000) + 'k'; }))
      .selectAll('text').attr('font-size', '10px').style('fill', T.text);
    g.append('text').attr('x', w / 2).attr('y', h + 40)
      .attr('text-anchor', 'middle').attr('font-size', '11px')
      .attr('fill', T.muted).text(l.xLabel);

    g.append('g').call(axisLeft(y).ticks(5))
      .selectAll('text').attr('font-size', '10px').style('fill', T.text);
    g.append('text').attr('transform', 'rotate(-90)')
      .attr('x', -h / 2).attr('y', -45)
      .attr('text-anchor', 'middle').attr('font-size', '11px')
      .attr('fill', T.muted).text(l.yLabel);

    g.selectAll('.non-patoshi')
      .data(nonPatoshi)
      .enter().append('circle')
      .attr('cx', function (d) { return x(d.x); })
      .attr('cy', function (d) { return y(d.y); })
      .attr('r', 2).attr('fill', T.nonPatoshi).attr('opacity', 0.5);

    g.selectAll('.patoshi')
      .data(patoshi)
      .enter().append('circle')
      .attr('cx', function (d) { return x(d.x); })
      .attr('cy', function (d) { return y(d.y); })
      .attr('r', 2.5).attr('fill', T.patoshi).attr('opacity', 0.75);
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
