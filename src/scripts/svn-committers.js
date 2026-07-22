/* SVN committer distribution: bar chart (commits per developer) + timeline
   (active period per developer). Extracted from
   src/components/SvnCommitters.astro (since removed) so it can be embedded in-body via
   ChartEmbedRuntime -- the chart belongs right after the entry's opening
   "Only four people ever committed code to this repository" sentence, not
   fixed at the bottom of the page. */
import { select, pointer } from 'd3-selection';
import { scaleBand, scaleLinear, scaleTime } from 'd3-scale';
import { max } from 'd3-array';
import { axisBottom, axisLeft } from 'd3-axis';
import { timeFormat, timeParse } from 'd3-time-format';

export function mount(barEl, timelineEl, committers, labels, total) {
  var l = labels;

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function readTokens() {
    return {
      committers: [
        token('--color-accent'),
        token('--chart-color-2'),
        token('--chart-color-3'),
        token('--chart-color-4'),
      ],
      text: token('--color-text'),
      bg: token('--color-bg'),
      tooltipBg: token('--chart-tooltip-bg'),
      tooltipFg: token('--chart-tooltip-fg'),
    };
  }
  function rerender() { panelBar(); panelTimeline(); }

  function panelBar() {
    var container = barEl;
    if (!container) return;
    var T = readTokens();
    var colors = T.committers;
    container.innerHTML = '';
    var rect = container.getBoundingClientRect();
    var W = rect.width || 600;
    var margin = { top: 20, right: 80, bottom: 30, left: 160 };
    var H = 180;
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg').attr('width', W).attr('height', H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var y = scaleBand().domain(committers.map(function (c) { return c.name; })).range([0, h]).padding(0.35);
    var x = scaleLinear().domain([0, max(committers, function (c) { return c.commits; }) ?? 0]).nice().range([0, w]);

    g.append('g').call(axisLeft(y).tickSizeOuter(0))
      .selectAll('text').attr('font-size', '12px').style('fill', T.text).attr('font-weight', function (d) {
        return d === 'Satoshi Nakamoto' ? '700' : '400';
      });

    g.selectAll('.bar')
      .data(committers)
      .enter().append('rect')
      .attr('y', function (d) { return y(d.name); })
      .attr('x', 0)
      .attr('height', y.bandwidth())
      .attr('width', function (d) { return x(d.commits); })
      .attr('fill', function (d, i) { return colors[i]; })
      .attr('rx', 2);

    g.selectAll('.label')
      .data(committers)
      .enter().append('text')
      .attr('y', function (d) { return y(d.name) + y.bandwidth() / 2; })
      .attr('x', function (d) { return x(d.commits) + 6; })
      .attr('dominant-baseline', 'central')
      .attr('font-size', '12px')
      .attr('font-weight', '600')
      .attr('fill', function (d, i) { return colors[i]; })
      .text(function (d) { return d.commits + ' (' + Math.round(d.commits / total * 100) + '%)'; });
  }

  function panelTimeline() {
    var container = timelineEl;
    if (!container) return;
    var T = readTokens();
    var colors = T.committers;
    container.innerHTML = '';
    var rect = container.getBoundingClientRect();
    var W = rect.width || 600;
    var margin = { top: 20, right: 20, bottom: 40, left: 120 };
    var H = 170;
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg').attr('width', W).attr('height', H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var parseDate = timeParse('%Y-%m-%d');
    var x = scaleTime()
      .domain([parseDate('2009-07-01'), parseDate('2011-11-01')])
      .range([0, w]);
    var y = scaleBand().domain(committers.map(function (c) { return c.name; })).range([0, h]).padding(0.4);

    g.append('g').attr('transform', 'translate(0,' + h + ')')
      .call(axisBottom(x).ticks(6).tickFormat(timeFormat('%Y-%m')))
      .selectAll('text').attr('font-size', '10px').style('fill', T.text);

    g.append('g').call(axisLeft(y).tickSizeOuter(0))
      .selectAll('text').attr('font-size', '11px').style('fill', T.text);

    committers.forEach(function (c, i) {
      var x1 = x(parseDate(c.firstCommit));
      var x2 = x(parseDate(c.lastCommit));
      var barW = Math.max(x2 - x1, 3);

      g.append('rect')
        .attr('x', x1).attr('y', y(c.name))
        .attr('width', barW).attr('height', y.bandwidth())
        .attr('fill', colors[i]).attr('rx', 2).attr('opacity', 0.8);

      g.append('circle').attr('cx', x1).attr('cy', y(c.name) + y.bandwidth() / 2)
        .attr('r', 3.5).attr('fill', colors[i]).attr('stroke', T.bg).attr('stroke-width', 1);
      if (barW > 6) {
        g.append('circle').attr('cx', x2).attr('cy', y(c.name) + y.bandwidth() / 2)
          .attr('r', 3.5).attr('fill', colors[i]).attr('stroke', T.bg).attr('stroke-width', 1);
      }
    });

    container.style.position = 'relative';
    var tooltip = select(container).append('div')
      .style('position', 'absolute').style('pointer-events', 'none').style('opacity', 0)
      .style('background', T.tooltipBg).style('color', T.tooltipFg)
      .style('padding', '6px 10px').style('border-radius', '4px')
      .style('font-size', '12px').style('white-space', 'nowrap').style('z-index', '10');

    svg.on('mousemove', function (event) {
      var coords = pointer(event, g.node());
      var yPos = coords[1];
      var found = committers.find(function (c) {
        var top = y(c.name);
        var bot = top + y.bandwidth();
        return yPos >= top && yPos <= bot;
      }) || null;
      if (!found) { tooltip.style('opacity', 0); return; }
      tooltip.html(
        '<b>' + found.name + '</b> (' + found.username + ')<br>' +
        found.commits + ' ' + l.commits + '<br>' +
        l.tooltipFirst + ': r' + found.firstRev + ' (' + found.firstCommit + ')<br>' +
        l.tooltipLast + ': r' + found.lastRev + ' (' + found.lastCommit + ')'
      ).style('opacity', 1);

      var cr = container.getBoundingClientRect();
      var tx = event.clientX - cr.left + 14;
      var ty = event.clientY - cr.top - 10;
      if (tx + 260 > cr.width) tx = tx - 280;
      tooltip.style('left', tx + 'px').style('top', ty + 'px');
    }).on('mouseleave', function () {
      tooltip.style('opacity', 0);
    });
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
