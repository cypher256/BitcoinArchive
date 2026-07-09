/* Patoshi mining machine: 3-panel chart (nonce subrange partitioning,
   high-value bias, hashrate comparison). Extracted from
   src/components/PatoshiMiningMachine.astro so it can be embedded in-body
   via ChartEmbedRuntime -- the chart belongs right at the end of "Key
   findings", where the bullets it visualizes are described, not fixed at
   the bottom of the page after "Implications". */
import { select } from 'd3-selection';
import { scaleBand, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';

export function mount(subrangesEl, biasEl, hashrateEl, subranges, comp, l) {
  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function readTokens() {
    return {
      threads: [
        token('--chart-color-2'),
        token('--chart-color-3'),
        token('--chart-color-8'),
        token('--chart-color-4'),
        token('--chart-negative'),
      ],
      observed: token('--color-accent'),
      expected: token('--chart-color-6'),
      muted: token('--color-text-muted'),
      text: token('--color-text'),
      bg: token('--color-bg'),
    };
  }

  function rerender() { panelSubranges(); panelBias(); panelHashrate(); }

  function panelSubranges() {
    var container = subrangesEl;
    if (!container) return;
    var T = readTokens();
    container.innerHTML = '';
    var rect = container.getBoundingClientRect();
    var W = rect.width || 600;
    var margin = { top: 30, right: 20, bottom: 30, left: 20 };
    var H = 120;
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg').attr('width', W).attr('height', H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var maxNonce = 4294967296;
    var x = scaleLinear().domain([0, maxNonce]).range([0, w]);

    subranges.forEach(function (sr, i) {
      var x1 = x(sr.start);
      var x2 = x(sr.end);
      g.append('rect')
        .attr('x', x1).attr('y', 0)
        .attr('width', x2 - x1 - 1).attr('height', h)
        .attr('fill', T.threads[i]).attr('opacity', 0.75).attr('rx', 3);

      g.append('text')
        .attr('x', (x1 + x2) / 2).attr('y', h / 2)
        .attr('text-anchor', 'middle').attr('dominant-baseline', 'central')
        .attr('fill', T.bg).attr('font-size', '13px').attr('font-weight', '700')
        .text(l.thread + ' ' + sr.id);

      var arrowY = h / 2 + 18;
      g.append('text')
        .attr('x', (x1 + x2) / 2).attr('y', arrowY)
        .attr('text-anchor', 'middle').attr('fill', T.bg).attr('opacity', 0.75)
        .attr('font-size', '10px').text('← ' + l.scanDir);
    });

    g.append('text').attr('x', 0).attr('y', -8)
      .attr('font-size', '10px').attr('fill', T.muted).text('0');
    g.append('text').attr('x', w).attr('y', -8)
      .attr('text-anchor', 'end').attr('font-size', '10px').attr('fill', T.muted)
      .text('2³² (4.3B)');
  }

  function panelBias() {
    var container = biasEl;
    if (!container) return;
    var T = readTokens();
    container.innerHTML = '';
    var rect = container.getBoundingClientRect();
    var W = rect.width || 600;
    var margin = { top: 20, right: 20, bottom: 30, left: 150 };
    var H = 130;
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg').attr('width', W).attr('height', H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var items = [
      { label: l.observed, value: comp.highValueBias, color: T.observed },
      { label: l.expected, value: comp.expectedIfRandom, color: T.expected },
    ];

    var y = scaleBand().domain(items.map(function (d) { return d.label; })).range([0, h]).padding(0.35);
    var x = scaleLinear().domain([0, 100]).range([0, w]);

    g.append('g').call(axisLeft(y).tickSizeOuter(0))
      .selectAll('text').attr('font-size', '12px').style('fill', T.text);
    g.append('g').attr('transform', 'translate(0,' + h + ')')
      .call(axisBottom(x).ticks(5).tickFormat(function (d) { return d + '%'; }))
      .selectAll('text').attr('font-size', '10px').style('fill', T.text);

    items.forEach(function (item) {
      g.append('rect')
        .attr('y', y(item.label) ?? 0).attr('x', 0)
        .attr('height', y.bandwidth()).attr('width', x(item.value))
        .attr('fill', item.color).attr('rx', 2);
      g.append('text')
        .attr('y', (y(item.label) ?? 0) + y.bandwidth() / 2)
        .attr('x', x(item.value) + 6)
        .attr('dominant-baseline', 'central')
        .attr('font-size', '13px').attr('font-weight', '700')
        .attr('fill', item.color)
        .text(item.value + '%');
    });
  }

  function panelHashrate() {
    var container = hashrateEl;
    if (!container) return;
    var T = readTokens();
    container.innerHTML = '';
    var rect = container.getBoundingClientRect();
    var W = rect.width || 600;
    var margin = { top: 20, right: 80, bottom: 30, left: 200 };
    var H = 130;
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg').attr('width', W).attr('height', H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var items = [
      { label: l.patoshi + '\n(' + comp.patoshiThreads + ' ' + l.threads + ', SSE2)', value: comp.patoshiHashrate, color: T.observed },
      { label: l.others + '\n(1 ' + l.threads + ')', value: comp.otherHashrate, color: T.expected },
    ];

    var y = scaleBand().domain(items.map(function (d) { return d.label; })).range([0, h]).padding(0.35);
    var x = scaleLinear().domain([0, 5]).range([0, w]);

    g.append('g').call(axisLeft(y).tickSizeOuter(0))
      .selectAll('text').attr('font-size', '11px').style('fill', T.text).each(function () {
        var text = select(this);
        var lines = text.text().split('\n');
        if (lines.length > 1) {
          text.text('');
          text.append('tspan').attr('x', -8).attr('dy', '-0.3em').text(lines[0]);
          text.append('tspan').attr('x', -8).attr('dy', '1.2em').text(lines[1]).attr('font-size', '9px').attr('fill', T.muted);
        }
      });

    g.append('g').attr('transform', 'translate(0,' + h + ')')
      .call(axisBottom(x).ticks(5).tickFormat(function (d) { return d + ' ' + l.mhps; }))
      .selectAll('text').attr('font-size', '10px').style('fill', T.text);

    items.forEach(function (item) {
      g.append('rect')
        .attr('y', y(item.label) ?? 0).attr('x', 0)
        .attr('height', y.bandwidth()).attr('width', x(item.value))
        .attr('fill', item.color).attr('rx', 2);
      g.append('text')
        .attr('y', (y(item.label) ?? 0) + y.bandwidth() / 2)
        .attr('x', x(item.value) + 6)
        .attr('dominant-baseline', 'central')
        .attr('font-size', '13px').attr('font-weight', '700')
        .attr('fill', item.color)
        .text(item.value + ' ' + l.mhps);
    });

    g.append('text')
      .attr('x', w / 2).attr('y', -5)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px').attr('font-weight', '700')
      .attr('fill', T.observed)
      .text('4.3' + l.faster);
  }

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
