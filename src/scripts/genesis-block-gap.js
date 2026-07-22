/* Genesis-block-to-Block-1 gap -- ~5 days 8 hours vs. the expected ~10
   minutes. Extracted from src/components/GenesisBlockGap.astro so it can
   render at an exact in-body position via ChartEmbedRuntime's
   <!-- chart: NAME --> marker system, instead of being pinned to a fixed
   slot ahead of the entry's own hero image and prose. Same pattern as the
   fork-genealogy / value-overflow-timeline extractions.

   Takes the container element directly (not a DOM id lookup) so the module
   has no assumption about how many instances exist on a page. */
import { select } from 'd3-selection';
import { scaleTime } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { timeFormat } from 'd3-time-format';

export function mount(container, data) {
  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function readTokens() {
    return {
      // Two block markers: Block 0 = accent (Genesis, the focus),
      // Block 1 = chart-color-2 (the next event).
      block0: token('--color-accent'),
      block1: token('--chart-color-2'),
      // Gap bar = warm tint (chart-warning) so it reads as
      // "this is unusual" against the timeline.
      gapFill: token('--color-accent-bg'),
      gapStroke: token('--chart-warning'),
      gapText: token('--color-accent'),
      ratio: token('--chart-negative'),
      muted: token('--color-text-muted'),
      faint: token('--chart-color-6'),
      text: token('--color-text'),
      bg: token('--color-bg'),
    };
  }

  function draw() {
    container.innerHTML = '';
    var T = readTokens();
    var rect = container.getBoundingClientRect();
    var W = rect.width || 600;
    var margin = { top: 40, right: 30, bottom: 50, left: 30 };
    var H = 220;
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg').attr('width', W).attr('height', H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var t0 = new Date('2009-01-03T18:15:05Z');
    var t1 = new Date('2009-01-09T02:54:25Z');
    var tEnd = new Date('2009-01-10T00:00:00Z');

    var x = scaleTime().domain([t0, tEnd]).range([0, w]);

    // Axis
    g.append('g').attr('transform', 'translate(0,' + (h + 5) + ')')
      .call(axisBottom(x).ticks(7).tickFormat(timeFormat('%b %d')))
      .selectAll('text').attr('font-size', '10px').style('fill', T.text);

    // Gap bar
    var barY = h / 2 - 15;
    var barH = 30;
    g.append('rect')
      .attr('x', x(t0)).attr('y', barY)
      .attr('width', x(t1) - x(t0)).attr('height', barH)
      .attr('fill', T.gapFill).attr('stroke', T.gapStroke).attr('stroke-width', 1).attr('rx', 4);

    // Gap label
    g.append('text')
      .attr('x', (x(t0) + x(t1)) / 2).attr('y', barY + barH / 2)
      .attr('text-anchor', 'middle').attr('dominant-baseline', 'central')
      .attr('font-size', '12px').attr('font-weight', '700').attr('fill', T.gapText)
      .text(data.gap);

    // Block 0 marker — surface stroke for halo against gap bar.
    g.append('circle')
      .attr('cx', x(t0)).attr('cy', barY + barH / 2)
      .attr('r', 8).attr('fill', T.block0).attr('stroke', T.bg).attr('stroke-width', 2);
    g.append('text')
      .attr('x', x(t0)).attr('y', barY - 18)
      .attr('text-anchor', 'start').attr('font-size', '11px').attr('font-weight', '700')
      .attr('fill', T.block0).text(data.block0);
    g.append('text')
      .attr('x', x(t0)).attr('y', barY - 5)
      .attr('text-anchor', 'start').attr('font-size', '9px').attr('fill', T.muted)
      .text(data.block0time);

    // Block 1 marker
    g.append('circle')
      .attr('cx', x(t1)).attr('cy', barY + barH / 2)
      .attr('r', 8).attr('fill', T.block1).attr('stroke', T.bg).attr('stroke-width', 2);
    g.append('text')
      .attr('x', x(t1)).attr('y', barY + barH + 18)
      .attr('text-anchor', 'middle').attr('font-size', '11px').attr('font-weight', '700')
      .attr('fill', T.block1).text(data.block1);
    g.append('text')
      .attr('x', x(t1)).attr('y', barY + barH + 31)
      .attr('text-anchor', 'middle').attr('font-size', '9px').attr('fill', T.muted)
      .text(data.block1time);

    // Expected vs actual annotation
    g.append('text')
      .attr('x', w).attr('y', 0)
      .attr('text-anchor', 'end').attr('font-size', '11px')
      .attr('fill', T.ratio).attr('font-weight', '600')
      .text(data.ratio);

    g.append('text')
      .attr('x', w).attr('y', 15)
      .attr('text-anchor', 'end').attr('font-size', '10px')
      .attr('fill', T.faint)
      .text(data.expected);
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
