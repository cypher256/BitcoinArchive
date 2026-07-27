/* Supply trajectories comparison (5 monetary archetypes, normalized to
   2024 = 100), linear/log toggle + clickable legend + hover tooltip +
   scroll-reveal. Extracted from src/components/SupplyCurveComparison.astro
   so it can be embedded in-body via ChartEmbedRuntime instead of pinned to
   the top of its one host entry. */
import { select } from 'd3-selection';
import { scaleLinear, scaleLog } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { max } from 'd3-array';
import { format } from 'd3-format';
import { line as d3line, curveMonotoneX } from 'd3-shape';

export function mount(container, legendEl, replayBtn, scaleBtns, data, labels) {
  var state = { scale: 'linear', hidden: {} };

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function readTokens() {
    return {
      text: token('--color-text'),
      muted: token('--color-text-muted'),
      grid: token('--chart-grid'),
      surface: token('--chart-surface'),
      tooltipBg: token('--chart-tooltip-bg'),
      tooltipFg: token('--chart-tooltip-fg'),
    };
  }
  function seriesColor(s) { return token(s.colorVar) || '#888'; }

  function draw(animEnd) {
    var animating = (animEnd != null);
    container.innerHTML = '';
    var T = readTokens();

    var rect = container.getBoundingClientRect();
    var W = Math.max(320, rect.width || 700);
    var H = 420;
    var margin = { top: 20, right: 18, bottom: 50, left: 60 };
    var w = W - margin.left - margin.right;
    var h = H - margin.top - margin.bottom;

    var svg = select(container).append('svg')
      .attr('width', W).attr('height', H)
      .attr('viewBox', '0 0 ' + W + ' ' + H);
    var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    var yearRange = data.yearRange;
    var animEndYear = animEnd != null ? animEnd : yearRange[1];
    var visibleSeries = data.series.filter(function (s) { return !state.hidden[s.id]; });

    var x = scaleLinear().domain([yearRange[0], animEndYear]).range([0, w]);

    var allValues = [];
    visibleSeries.forEach(function (s) { s.points.forEach(function (p) { allValues.push(p.index); }); });
    var yMax = allValues.length ? max(allValues) * 1.08 : 100;

    var y;
    if (state.scale === 'log') {
      y = scaleLog().domain([0.5, Math.max(10, yMax)]).range([h, 0]).clamp(true);
    } else {
      y = scaleLinear().domain([0, yMax]).range([h, 0]).nice();
    }

    var yTicks = state.scale === 'log' ? [1, 10, 100, 1000] : y.ticks(6);
    g.append('g').attr('class', 'gridlines')
      .selectAll('line').data(yTicks).enter().append('line')
      .attr('x1', 0).attr('x2', w)
      .attr('y1', function (d) { return y(d); }).attr('y2', function (d) { return y(d); })
      .attr('stroke', T.grid).attr('stroke-width', 0.5).attr('stroke-dasharray', '2,3');

    data.annotations.forEach(function (a) {
      if (animating && a.year > animEndYear) return;
      var ax = x(a.year);
      g.append('line')
        .attr('x1', ax).attr('x2', ax)
        .attr('y1', 0).attr('y2', h)
        .attr('stroke', T.muted).attr('stroke-width', 0.5).attr('stroke-dasharray', '4,3').attr('opacity', 0.55);
      g.append('text')
        .attr('x', ax + 3).attr('y', 11)
        .attr('font-size', '9.5px').attr('fill', T.muted)
        .text(a.label);
    });

    var xAxis = axisBottom(x).tickFormat(format('d')).ticks(8);
    g.append('g').attr('transform', 'translate(0,' + h + ')').call(xAxis)
      .selectAll('text').attr('fill', T.muted).attr('font-size', '11px');

    var yAxis = state.scale === 'log'
      ? axisLeft(y).tickValues([1, 10, 100, 1000]).tickFormat(format('~s'))
      : axisLeft(y).tickFormat(format('~s')).ticks(6);
    g.append('g').call(yAxis)
      .selectAll('text').attr('fill', T.muted).attr('font-size', '11px');

    g.selectAll('.domain, .tick line').attr('stroke', T.grid);

    g.append('text')
      .attr('x', w / 2).attr('y', h + 38)
      .attr('text-anchor', 'middle').attr('fill', T.muted).attr('font-size', '11px')
      .text(labels.xLabel);
    g.append('text')
      .attr('transform', 'rotate(-90)').attr('x', -h / 2).attr('y', -45)
      .attr('text-anchor', 'middle').attr('fill', T.muted).attr('font-size', '11px')
      .text(labels.yLabel);

    var line = d3line()
      .x(function (d) { return x(d.year); })
      .y(function (d) {
        if (state.scale === 'log' && d.index <= 0) return y(0.5);
        return y(Math.max(0.5, d.index));
      })
      .curve(curveMonotoneX);

    visibleSeries.forEach(function (s) {
      var color = seriesColor(s);
      var pts = animating ? s.points.filter(function (p) { return p.year <= animEndYear; }) : s.points;
      if (pts.length === 0) return;
      g.append('path')
        .datum(pts)
        .attr('fill', 'none').attr('stroke', color).attr('stroke-width', 2)
        .attr('stroke-dasharray', s.dash || null)
        .attr('d', line);
      g.selectAll('.dot-' + s.id).data(pts).enter().append('circle')
        .attr('class', 'dot-' + s.id)
        .attr('cx', function (d) { return x(d.year); })
        .attr('cy', function (d) { return y(state.scale === 'log' && d.index <= 0 ? 0.5 : Math.max(0.5, d.index)); })
        .attr('r', 2.5).attr('fill', color);
    });

    if (!animating) {
      var tooltip = select(container).append('div').attr('class', 'sc-tooltip')
        .style('position', 'absolute').style('pointer-events', 'none')
        .style('background', T.tooltipBg).style('color', T.tooltipFg)
        .style('padding', '6px 9px').style('border-radius', '4px')
        .style('font-size', '11px').style('line-height', '1.45')
        .style('opacity', 0);

      var crosshair = g.append('line').attr('class', 'crosshair')
        .attr('stroke', T.muted).attr('stroke-width', 0.8).attr('stroke-dasharray', '3,3')
        .attr('y1', 0).attr('y2', h).attr('opacity', 0);

      svg.append('rect')
        .attr('x', margin.left).attr('y', margin.top)
        .attr('width', w).attr('height', h)
        .attr('fill', 'transparent')
        .on('mousemove', function (event) {
          var rect2 = svg.node().getBoundingClientRect();
          var mx = event.clientX - rect2.left - margin.left;
          if (mx < 0 || mx > w) return;
          var hoverYear = Math.round(x.invert(mx));
          crosshair.attr('x1', x(hoverYear)).attr('x2', x(hoverYear)).attr('opacity', 1);
          var rows = visibleSeries.map(function (s) {
            var nearest = s.points.reduce(function (best, p) {
              return Math.abs(p.year - hoverYear) < Math.abs(best.year - hoverYear) ? p : best;
            }, s.points[0]);
            return { id: s.id, label: s.label, color: seriesColor(s), index: nearest.index, absolute: nearest.absolute, nearYear: nearest.year };
          });
          rows.sort(function (a, b) { return b.index - a.index; });
          var html = '<div style="font-weight:600;margin-bottom:3px;">' + labels.hoverYear + ': ' + hoverYear + '</div>'
            + rows.map(function (r) {
              return '<div><span style="display:inline-block;width:9px;height:9px;background:'
                + r.color + ';border-radius:50%;margin-right:5px;"></span>'
                + r.label + ': ' + r.index.toFixed(1) + ' <span style="opacity:0.6">(' + r.absolute + ', ' + r.nearYear + ')</span></div>';
            }).join('');
          tooltip.html(html).style('opacity', 1)
            .style('left', (event.clientX - rect2.left + 14) + 'px')
            .style('top', (event.clientY - rect2.top - 10) + 'px');
        })
        .on('mouseleave', function () {
          tooltip.style('opacity', 0);
          crosshair.attr('opacity', 0);
        });
    }
  }

  function drawLegend() {
    legendEl.innerHTML = '';
    data.series.forEach(function (s) {
      var item = document.createElement('span');
      item.className = 'legend-item' + (state.hidden[s.id] ? ' off' : '');
      item.setAttribute('data-series', s.id);
      var swatch = document.createElement('span');
      swatch.className = 'legend-swatch';
      swatch.innerHTML = '<svg width="16" height="10" aria-hidden="true"><line x1="1" y1="5" x2="15" y2="5" stroke="'
        + seriesColor(s) + '" stroke-width="2.5"' + (s.dash ? ' stroke-dasharray="' + s.dash + '"' : '') + ' stroke-linecap="round"/></svg>';
      var lab = document.createElement('span');
      lab.textContent = s.label;
      item.appendChild(swatch);
      item.appendChild(lab);
      item.addEventListener('click', function () {
        state.hidden[s.id] = !state.hidden[s.id];
        drawLegend();
        draw();
      });
      legendEl.appendChild(item);
    });
  }

  function bindControls() {
    scaleBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        scaleBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        state.scale = btn.getAttribute('data-scale');
        draw();
      });
    });
  }

  drawLegend();
  bindControls();
  draw();

  var replayFn = null;
  function play() {
    if (!window.BAChartAnim) return;
    var y0 = data.yearRange[0], y1 = data.yearRange[1];
    if (!(y1 > y0)) return;
    replayFn = window.BAChartAnim.playOnScroll(container, {
      duration: 4800,
      onFrame: function (p) {
        if (p >= 1) { draw(); return; }
        draw(y0 + p * (y1 - y0));
      },
    });
  }
  (function arm(n) {
    if (window.BAChartAnim) play();
    else if ((n || 0) < 40) setTimeout(function () { arm((n || 0) + 1); }, 50);
  })();
  if (replayBtn) replayBtn.addEventListener('click', function () { if (replayFn) replayFn(); });

  var timer;
  window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(function () { draw(); }, 250); });

  if (typeof window.matchMedia === 'function') {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.addEventListener) mql.addEventListener('change', function () { drawLegend(); draw(); });
    else if (mql.addListener) mql.addListener(function () { drawLegend(); draw(); });
  }
  if (typeof MutationObserver === 'function') {
    new MutationObserver(function () { drawLegend(); draw(); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode', 'data-theme'] });
  }
}
