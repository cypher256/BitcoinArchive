/* Satoshi's mining: actual vs. potential (Jameson Lopp hashrate analysis).
   Extracted from src/components/LoppHashrateAnalysis.astro so a second,
   differently-placed instance can be embedded in-body via ChartEmbedRuntime
   -- this component is used by two entries (satoshi-design-vs-current-reality
   and lopp-was-satoshi-greedy-miner), both of which had it pinned to a fixed
   slot far from the paragraph that actually discusses the scenario data. */
import { select } from 'd3-selection';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisLeft, axisBottom } from 'd3-axis';
import { format } from 'd3-format';

export function mount(scenariosHost, gaugeHost, chartData) {
  var scenarios = chartData.scenarios;
  var l = chartData.labels;

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function readTokens() {
    return {
      accent: token('--color-accent'),
      muted: token('--color-text-muted'),
      text: token('--color-text'),
      bg: token('--color-bg'),
      track: token('--color-divider'),
    };
  }

  function panelScenarios() {
    if (!scenariosHost) return;
    var T = readTokens();
    scenariosHost.innerHTML = '';
    var rect = scenariosHost.getBoundingClientRect();
    var W = rect.width || 600;
    var margin = { top: 20, right: 110, bottom: 30, left: 200 };
    var H = 160;
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(scenariosHost).append('svg').attr('width', W).attr('height', H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var y = scaleBand().domain(scenarios.map(function (s) { return s.label; })).range([0, h]).padding(0.3);
    var x = scaleLinear().domain([0, 2300000]).range([0, w]);

    g.append('g').call(axisLeft(y).tickSizeOuter(0))
      .selectAll('text').attr('font-size', '11px').style('fill', T.text);
    g.append('g').attr('transform', 'translate(0,' + h + ')')
      .call(axisBottom(x).ticks(4).tickFormat(function (d) { return (d.valueOf() / 1000000).toFixed(1) + 'M ' + l.btc; }))
      .selectAll('text').attr('font-size', '10px').style('fill', T.text);

    scenarios.forEach(function (s) {
      var color = token(s.colorToken);
      g.append('rect')
        .attr('y', y(s.label) ?? 0).attr('x', 0)
        .attr('height', y.bandwidth()).attr('width', x(s.btc))
        .attr('fill', color).attr('rx', 2).attr('opacity', 0.85);

      g.append('text')
        .attr('y', (y(s.label) ?? 0) + y.bandwidth() / 2)
        .attr('x', x(s.btc) + 6)
        .attr('dominant-baseline', 'central')
        .attr('font-size', '12px').attr('font-weight', '700')
        .attr('fill', color)
        .text(format(',')(s.btc) + ' ' + l.btc);
    });
  }

  function panelGauge() {
    if (!gaugeHost) return;
    var T = readTokens();
    gaugeHost.innerHTML = '';
    var rect = gaugeHost.getBoundingClientRect();
    var W = rect.width || 600;
    var margin = { top: 20, right: 20, bottom: 30, left: 20 };
    var H = 80;
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(gaugeHost).append('svg').attr('width', W).attr('height', H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    g.append('rect')
      .attr('x', 0).attr('y', 0)
      .attr('width', w).attr('height', h)
      .attr('fill', T.track).attr('rx', 4);

    var pct = 4.35 / 6;
    g.append('rect')
      .attr('x', 0).attr('y', 0)
      .attr('width', w * pct).attr('height', h)
      .attr('fill', T.accent).attr('rx', 4).attr('opacity', 0.85);

    g.append('text')
      .attr('x', w * pct / 2).attr('y', h / 2)
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'central')
      .attr('font-size', '14px').attr('font-weight', '700').attr('fill', T.bg)
      .text('4.35 ' + l.mhps + ' (' + l.pctUsed + ')');

    g.append('text')
      .attr('x', w * pct + (w * (1 - pct)) / 2).attr('y', h / 2)
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'central')
      .attr('font-size', '12px').attr('fill', T.muted)
      .text('6.0 ' + l.mhps + ' ' + l.available);
  }

  function rerender() { panelScenarios(); panelGauge(); }
  rerender();
  var timer;
  window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(rerender, 250); });

  if (typeof window.matchMedia === 'function') {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.addEventListener) mql.addEventListener('change', rerender);
    else if (mql.addListener) mql.addListener(rerender);
  }
  if (typeof MutationObserver === 'function') {
    new MutationObserver(rerender).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-mode', 'data-theme'],
    });
  }
}
