/* Bitcoin protocol forks and adjacent cryptocurrencies -- a true-time-axis
   family tree. Originally the standalone BitcoinForkGenealogy.astro
   component; extracted so every instance renders in-body via
   ChartEmbedRuntime's <!-- chart: fork-genealogy --> marker instead of being
   pinned to a fixed slot ahead of an entry's own hero image and prose. Used
   by bitcoin-fork-and-altcoin-genealogy and satoshi-design-vs-current-reality.

   Takes the container element directly (not a DOM id lookup) so the module
   has no assumption about how many instances exist on a page. */
import { select } from 'd3-selection';
import { scaleTime, scaleBand } from 'd3-scale';
import { axisBottom } from 'd3-axis';
import { timeYear, timeMonth } from 'd3-time';
import { timeFormat } from 'd3-time-format';

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
    return map[c];
  });
}

function makeTooltip(parent, t) {
  return select(parent).append('div')
    .style('position', 'absolute')
    .style('background', t.tooltipBg)
    .style('color', t.tooltipFg)
    .style('padding', '6px 10px')
    .style('border-radius', '3px')
    .style('font-size', '12px')
    .style('line-height', '1.4')
    .style('pointer-events', 'none')
    .style('opacity', 0)
    .style('max-width', '320px')
    .style('z-index', 10);
}

function moveTooltip(tooltip, parent, event) {
  var rect = parent.getBoundingClientRect();
  tooltip.style('left', (event.clientX - rect.left + 12) + 'px')
    .style('top', (event.clientY - rect.top + 12) + 'px');
}

export function mount(container, replayBtn, chartData) {
  var chains = chartData.chains;
  var milestones = chartData.milestones;
  var linkBase = chartData.linkBase;
  var todayLabel = chartData.todayLabel;
  var statusActive = chartData.statusActive;
  var statusHalted = chartData.statusHalted;

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function readTokens() {
    var muted = token('--chart-color-6');
    var chainColors = {
      'main': token('--color-accent'),
      'namecoin': token('--chart-color-8'),
      'litecoin': token('--chart-color-9'),
      'dogecoin': token('--chart-color-1'),
      'bitcoin-xt': muted,
      'bitcoin-classic': muted,
      'bitcoin-unlimited': muted,
      'bitcoin-cash': token('--chart-color-3'),
      'bitcoin-gold': token('--chart-color-8'),
      'bitcoin-sv': token('--chart-color-1'),
    };
    return {
      chain: chainColors,
      muted: muted,
      text: token('--color-text'),
      textMuted: token('--color-text-muted'),
      link: token('--color-link'),
      linkHover: token('--color-link-hover'),
      accent: token('--color-accent'),
      positive: token('--chart-positive'),
      negative: token('--chart-negative'),
      grid: token('--color-divider'),
      laneA: token('--chart-lane-a'),
      laneB: token('--chart-lane-b'),
      surface: token('--chart-surface'),
      tooltipBg: token('--chart-tooltip-bg'),
      tooltipFg: token('--chart-tooltip-fg'),
    };
  }

  function draw() {
    container.innerHTML = '';
    var t = readTokens();

    var today = new Date();
    var dateExtent = [new Date('2008-10-01'), today];

    var maxLabelWidth = chains.reduce(function (max, c) {
      var w = 0;
      for (var ci = 0; ci < c.name.length; ci++) {
        w += (c.name.charCodeAt(ci) > 127) ? 14 : 7.5;
      }
      return Math.max(max, w);
    }, 0);
    var leftMargin = Math.max(180, Math.ceil(maxLabelWidth) + 24);
    var margin = { top: 80, right: 80, bottom: 40, left: leftMargin };
    var laneHeight = 30;
    var chartHeight = laneHeight * chains.length + margin.top + margin.bottom;

    var containerWidth = container.clientWidth || 800;
    var chartWidth = Math.max(containerWidth, 1080);

    var x = scaleTime().domain(dateExtent).range([margin.left, chartWidth - margin.right]);
    var y = scaleBand().domain(chains.map(function (c) { return c.id; }))
      .range([margin.top, margin.top + laneHeight * chains.length])
      .padding(0.35);

    var svg = select(container).append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight)
      .style('display', 'block')
      .style('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif');

    svg.selectAll('.lane-bg').data(chains).enter().append('rect')
      .attr('x', margin.left)
      .attr('y', function (c) { return y(c.id) - y.bandwidth() * 0.25; })
      .attr('width', chartWidth - margin.left - margin.right)
      .attr('height', laneHeight)
      .attr('fill', function (_c, i) { return i % 2 === 0 ? t.laneA : t.laneB; });

    var laneBottomY = margin.top + laneHeight * chains.length;
    var xAxis = axisBottom(x).ticks(timeYear.every(1)).tickFormat(timeFormat('%Y'));
    svg.append('g')
      .attr('transform', 'translate(0,' + laneBottomY + ')')
      .call(xAxis)
      .selectAll('text').style('font-size', '11px').style('fill', t.text);
    var monthAxis = axisBottom(x).ticks(timeMonth.every(3)).tickSize(4).tickFormat(function () { return ''; });
    svg.append('g')
      .attr('transform', 'translate(0,' + laneBottomY + ')')
      .call(monthAxis)
      .selectAll('line').attr('stroke', t.muted);

    var todayX = x(today);
    svg.append('line')
      .attr('x1', todayX).attr('x2', todayX)
      .attr('y1', margin.top - 16).attr('y2', laneBottomY)
      .attr('stroke', t.positive).attr('stroke-width', 1).attr('stroke-dasharray', '2,3').attr('opacity', 0.55);
    svg.append('text')
      .attr('x', todayX).attr('y', margin.top - 22)
      .attr('text-anchor', 'middle').style('font-size', '10px').style('fill', t.positive)
      .text(todayLabel);

    function estimateLabelWidth(text) {
      var w = 0;
      for (var ci = 0; ci < text.length; ci++) {
        w += (text.charCodeAt(ci) > 127) ? 11 : 5.8;
      }
      return w + 8;
    }
    var sortedMs = milestones.slice().sort(function (a, b) { return a.date.localeCompare(b.date); });
    var rows = [];
    var msLayout = sortedMs.map(function (m) {
      var px = x(new Date(m.date));
      var labelW = estimateLabelWidth(m.label);
      var leftAnchorRight = px + 3 + labelW;
      var rightAnchorLeft = px - 3 - labelW;
      var anchorEnd = (leftAnchorRight > chartWidth - margin.right - 6) && (rightAnchorLeft >= margin.left);
      var labelLeft = anchorEnd ? rightAnchorLeft : (px + 3);
      var labelRight = anchorEnd ? (px - 3) : leftAnchorRight;
      for (var r = 0; r < rows.length; r++) {
        var collides = rows[r].some(function (rng) { return !(labelRight < rng.x1 || labelLeft > rng.x2); });
        if (!collides) {
          rows[r].push({ x1: labelLeft, x2: labelRight });
          return { milestone: m, row: r, px: px, anchorEnd: anchorEnd };
        }
      }
      rows.push([{ x1: labelLeft, x2: labelRight }]);
      return { milestone: m, row: rows.length - 1, px: px, anchorEnd: anchorEnd };
    });
    var rowSpacing = 13;
    var bottomLabelY = margin.top - 30;
    msLayout.forEach(function (item) {
      var labelY = bottomLabelY - item.row * rowSpacing;
      var g = svg.append('g').attr('transform', 'translate(' + item.px + ',0)');
      g.append('line')
        .attr('x1', 0).attr('x2', 0)
        .attr('y1', margin.top - 8).attr('y2', laneBottomY)
        .attr('stroke', t.negative).attr('stroke-width', 1).attr('stroke-dasharray', '3,3').attr('opacity', 0.5);
      if (item.row > 0) {
        g.append('line')
          .attr('x1', 0).attr('x2', 0)
          .attr('y1', labelY + 3).attr('y2', margin.top - 8)
          .attr('stroke', t.negative).attr('stroke-width', 0.5).attr('opacity', 0.4);
      }
      var labelEl = item.milestone.slug
        ? g.append('a').attr('href', linkBase + item.milestone.slug + '/').style('cursor', 'pointer').append('text')
        : g.append('text');
      labelEl
        .attr('x', item.anchorEnd ? -3 : 3)
        .attr('y', labelY)
        .attr('text-anchor', item.anchorEnd ? 'end' : 'start')
        .style('font-size', '10px')
        .style('fill', t.negative)
        .style('text-decoration', item.milestone.slug ? 'underline' : 'none')
        .text(item.milestone.label);
    });

    var chainById = {};
    chains.forEach(function (c) { chainById[c.id] = c; });

    chains.forEach(function (c) {
      var cy = y(c.id) + y.bandwidth() / 2;
      var tooltipDate = new Date(c.launch).toISOString().slice(0, 10);
      var tooltipText = c.name + ' · ' + (c.status === 'active' ? statusActive : statusHalted) + ' · ' + tooltipDate;
      var fill = c.slug ? t.link : (c.status === 'halted' ? t.textMuted : t.text);
      var label = c.slug
        ? svg.append('a').attr('href', linkBase + c.slug + '/').style('cursor', 'pointer').append('text')
        : svg.append('text');
      label
        .attr('x', margin.left - 10)
        .attr('y', cy)
        .attr('text-anchor', 'end')
        .attr('dominant-baseline', 'central')
        .style('font-size', '14px')
        .style('fill', fill)
        .style('text-decoration', 'none')
        .style('font-weight', c.id === 'main' ? '600' : '400')
        .text(c.name)
        .append('title').text(tooltipText);
      if (c.slug) {
        label.on('mouseover', function () { select(this).style('fill', t.linkHover).style('text-decoration', 'underline'); })
          .on('mouseout', function () { select(this).style('fill', fill).style('text-decoration', 'none'); });
      }
    });

    chains.forEach(function (c) {
      if (!c.parent) return;
      var parent = chainById[c.parent];
      if (!parent) return;
      var px = x(new Date(c.launch));
      var py = y(parent.id) + y.bandwidth() / 2;
      var cy = y(c.id) + y.bandwidth() / 2;
      svg.append('path')
        .attr('d', 'M' + px + ',' + py + ' L' + px + ',' + cy)
        .attr('stroke', t.chain[c.id] || t.muted)
        .attr('stroke-width', 1.6)
        .attr('fill', 'none')
        .attr('opacity', c.status === 'halted' ? 0.55 : 0.9);
    });

    var tooltipParent = container.parentNode || container;
    var tooltip = makeTooltip(tooltipParent, t);

    chains.forEach(function (c) {
      var startX = x(new Date(c.launch));
      var endX = c.halt ? x(new Date(c.halt)) : x(today);
      var cy = y(c.id) + y.bandwidth() / 2;
      var color = t.chain[c.id] || t.muted;
      var barHeight = c.status === 'halted' ? 4 : 6;

      var barG = svg.append('g').style('cursor', c.slug ? 'pointer' : 'default');

      barG.append('rect')
        .attr('x', startX)
        .attr('y', cy - barHeight / 2)
        .attr('width', Math.max(2, endX - startX))
        .attr('height', barHeight)
        .attr('fill', color)
        .attr('opacity', c.status === 'halted' ? 0.55 : 0.95)
        .attr('rx', 2);

      barG.append('circle')
        .attr('cx', startX).attr('cy', cy).attr('r', 4)
        .attr('fill', color)
        .attr('stroke', t.surface).attr('stroke-width', 1.5);

      if (c.status === 'halted') {
        var ex = endX, hh = 4.5;
        barG.append('path')
          .attr('d', 'M' + (ex - hh) + ',' + (cy - hh) + ' L' + (ex + hh) + ',' + (cy + hh) +
            ' M' + (ex - hh) + ',' + (cy + hh) + ' L' + (ex + hh) + ',' + (cy - hh))
          .attr('stroke', t.negative).attr('stroke-width', 1.5).attr('fill', 'none');
      } else {
        barG.append('path')
          .attr('d', 'M' + endX + ',' + (cy - 4) + ' L' + (endX + 6) + ',' + cy + ' L' + endX + ',' + (cy + 4) + ' Z')
          .attr('fill', color);
      }

      barG.append('rect')
        .attr('x', startX - 4).attr('y', cy - 8)
        .attr('width', endX - startX + 12).attr('height', 16)
        .attr('fill', 'transparent')
        .on('mouseover', function (event) {
          var statusText = c.status === 'active'
            ? statusActive + ' · ' + new Date(c.launch).toISOString().slice(0, 10) + ' → ' + todayLabel
            : statusHalted + ' · ' + new Date(c.launch).toISOString().slice(0, 10) + ' → ' + (c.halt ? new Date(c.halt).toISOString().slice(0, 10) : '');
          tooltip.style('opacity', 1).html('<strong>' + escapeHtml(c.name) + '</strong><br/>' + statusText);
          moveTooltip(tooltip, tooltipParent, event);
        })
        .on('mousemove', function (event) { moveTooltip(tooltip, tooltipParent, event); })
        .on('mouseout', function () { tooltip.style('opacity', 0); })
        .on('click', function () { if (c.slug) window.location.href = linkBase + c.slug + '/'; });
    });
  }
  draw();

  var replayFn = null;
  (function arm(n) {
    if (window.BAChartAnim) {
      replayFn = window.BAChartAnim.wipeReveal([container], { duration: 5200 });
    } else if (n < 40) { setTimeout(function () { arm(n + 1); }, 50); }
  })(0);
  if (replayBtn) replayBtn.addEventListener('click', function () { if (replayFn) replayFn(); });

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
