/* Value-overflow-incident timeline -- discovery to resolution in under 19
   hours. Extracted from src/components/ValueOverflowTimeline.astro so it can
   render at an exact in-body position via ChartEmbedRuntime's
   <!-- chart: NAME --> marker system, instead of being pinned to a fixed
   slot ahead of the entry's own hero image and prose. Same pattern as the
   fork-genealogy / stylometric-distance-histogram extractions.

   Takes the container element directly (not a DOM id lookup) so the module
   has no assumption about how many instances exist on a page. */
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
import { axisBottom } from 'd3-axis';

export function mount(container, replayBtn, data) {
  var events = data.events;

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function readTokens() {
    // Incident encoding: warning -> negative -> blue (fix) -> positive (resolved).
    // The two timeline-band tints (faded red for crisis window, faded
    // blue for fix-to-resolved window) use accent-bg-style overlays
    // with semantic hue alignment to the marker color.
    return {
      alert: token('--chart-warning'),
      crisis: token('--chart-negative'),
      fix: token('--chart-color-2'),
      resolved: token('--chart-positive'),
      track: token('--color-divider'),
      muted: token('--color-text-muted'),
      text: token('--color-text'),
      bg: token('--color-bg'),
    };
  }

  function draw() {
    container.innerHTML = '';
    var T = readTokens();
    var typeColors = { alert: T.alert, crisis: T.crisis, fix: T.fix, resolved: T.resolved };
    var rect = container.getBoundingClientRect();
    var W = rect.width || 600;
    var margin = { top: 50, right: 80, bottom: 40, left: 80 };
    var H = 260;
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg').attr('width', W).attr('height', H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var maxOffset = 19;
    var x = scaleLinear().domain([0, maxOffset]).range([0, w]);

    // Axis
    g.append('g').attr('transform', 'translate(0,' + (h - 10) + ')')
      .call(axisBottom(x).ticks(6).tickFormat(function (d) { return '+' + d + data.hours; }))
      .selectAll('text').attr('font-size', '10px').style('fill', T.text);

    // Timeline bar
    g.append('rect')
      .attr('x', 0).attr('y', h / 2 - 3)
      .attr('width', w).attr('height', 6)
      .attr('fill', T.track).attr('rx', 3);

    // Crisis period — same hue as the crisis marker, faded.
    g.append('rect')
      .attr('x', x(0)).attr('y', h / 2 - 3)
      .attr('width', x(4.9) - x(0)).attr('height', 6)
      .attr('fill', T.crisis).attr('opacity', 0.25).attr('rx', 3);

    // Fix → resolved period — same hue as the fix marker, faded.
    g.append('rect')
      .attr('x', x(4.9)).attr('y', h / 2 - 3)
      .attr('width', x(14.9) - x(4.9)).attr('height', 6)
      .attr('fill', T.fix).attr('opacity', 0.25).attr('rx', 3);

    // Events
    events.forEach(function (ev, i) {
      var cx = x(ev.offset);
      var color = typeColors[ev.type];
      var above = i % 2 === 0;
      var yText = above ? h / 2 - 28 : h / 2 + 35;
      var yLine = above ? h / 2 - 12 : h / 2 + 12;

      g.append('circle')
        .attr('cx', cx).attr('cy', h / 2)
        .attr('r', 7).attr('fill', color).attr('stroke', T.bg).attr('stroke-width', 2);

      g.append('line')
        .attr('x1', cx).attr('x2', cx)
        .attr('y1', h / 2 + (above ? -8 : 8)).attr('y2', yLine)
        .attr('stroke', color).attr('stroke-width', 1).attr('stroke-dasharray', '2,2');

      g.append('text')
        .attr('x', cx).attr('y', yText)
        .attr('text-anchor', 'middle').attr('font-size', '10px')
        .attr('fill', color).attr('font-weight', '600')
        .text(ev.time);

      g.append('text')
        .attr('x', cx).attr('y', yText + 13)
        .attr('text-anchor', 'middle').attr('font-size', '9px')
        .attr('fill', T.muted)
        .each(function () {
          var text = select(this);
          var words = ev.label.split(' ');
          var maxChars = 25;
          var line1 = '';
          var line2 = '';
          words.forEach(function (word) {
            if ((line1 + ' ' + word).trim().length <= maxChars && !line2) {
              line1 = (line1 + ' ' + word).trim();
            } else {
              line2 = (line2 + ' ' + word).trim();
            }
          });
          text.text('');
          text.append('tspan').attr('x', cx).attr('dy', 0).text(line1);
          if (line2) text.append('tspan').attr('x', cx).attr('dy', '1.1em').text(line2);
        });
    });
  }
  draw();

  // Reveal: time-cursor wipe on scroll-in (chart-anim.js wipeReveal).
  var replayFn = null;
  (function arm(n) {
    if (window.BAChartAnim) {
      replayFn = window.BAChartAnim.wipeReveal([container], { duration: 4600 });
    } else if ((n || 0) < 40) { setTimeout(function () { arm((n || 0) + 1); }, 50); }
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
