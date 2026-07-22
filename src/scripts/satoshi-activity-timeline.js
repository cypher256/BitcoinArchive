/* Satoshi Activity Timeline: 3 panels (channel swimlane, per-recipient
   swimlane, cumulative curve). Extracted from
   src/components/SatoshiActivityTimeline.astro (since removed) so it can be embedded in-body
   via ChartEmbedRuntime -- the entry it lives in exists almost entirely to
   present this chart (its own §2 is titled "How to read the chart"), and
   the chart was previously stacked at the very bottom, after the "what the
   shape reveals" bullets that specifically reference visual patterns in it. */
import { select } from 'd3-selection';
import { extent } from 'd3-array';
import { scaleTime, scaleBand, scaleOrdinal, scaleLinear } from 'd3-scale';
import { axisBottom, axisLeft } from 'd3-axis';
import { timeYear, timeMonth } from 'd3-time';
import { timeFormat } from 'd3-time-format';
import { line as d3line, curveStepAfter } from 'd3-shape';

function escapeHtml(s) {
  var entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  return String(s).replace(/[&<>"']/g, function (c) { return entities[c]; });
}

function makeTooltip(container, t) {
  return select(container).append('div')
    .style('position', 'absolute')
    .style('background', t.tooltipBg)
    .style('color', t.tooltipFg)
    .style('padding', '6px 10px')
    .style('border-radius', '3px')
    .style('font-size', '12px')
    .style('line-height', '1.4')
    .style('pointer-events', 'none')
    .style('opacity', 0)
    .style('max-width', '380px')
    .style('z-index', 10);
}

function moveTooltip(tooltip, container, event) {
  var rect = container.getBoundingClientRect();
  tooltip.style('left', (event.clientX - rect.left + 12) + 'px')
    .style('top', (event.clientY - rect.top + 12) + 'px');
}

function jitter(seed) {
  var r = Math.sin(seed * 9301 + 49297) * 233280;
  return r - Math.floor(r);
}

export function mount(swimlaneEl, recipientsEl, cumulativeEl, data) {
  var events = data.events;
  var channelOrder = data.channelOrder;
  var channelLabels = data.channelLabels;
  var milestones = data.milestones;
  var linkBase = data.linkBase;
  var eventsSuffix = data.eventsSuffix;

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function readTokens() {
    return {
      palette: {
        'cryptography-ml': token('--chart-color-2'),
        'bitcoin-list-ml': token('--chart-color-3'),
        'p2p-research-ml': token('--chart-color-4'),
        'p2pfoundation': token('--chart-color-5'),
        'bitcointalk': token('--chart-color-1'),
        'private-email': token('--chart-color-8'),
        'sourceforge': token('--chart-color-7'),
        'github': token('--chart-color-9'),
        'other': token('--chart-color-6'),
      },
      muted: token('--color-text-muted'),
      grid: token('--color-divider'),
      laneA: token('--chart-lane-a'),
      laneB: token('--chart-lane-b'),
      accent: token('--color-accent'),
      emphasis: token('--chart-emphasis'),
      negative: token('--chart-negative'),
      text: token('--color-text'),
      tooltipBg: token('--chart-tooltip-bg'),
      tooltipFg: token('--chart-tooltip-fg'),
    };
  }

  function render() {
    var t = readTokens();

    var dateExtent = extent(events, function (d) { return new Date(d.date); });
    dateExtent[0] = new Date(dateExtent[0].getTime() - 15 * 86400000);
    dateExtent[1] = new Date(dateExtent[1].getTime() + 15 * 86400000);

    // ---- Panel 1: Swimlane + Milestones ----
    (function () {
      var container = swimlaneEl;
      if (!container) return;
      container.innerHTML = '';

      var margin = { top: 72, right: 20, bottom: 50, left: 130 };
      var laneHeight = 32;
      var height = laneHeight * channelOrder.length + margin.top + margin.bottom;
      var width = container.clientWidth;
      if (width < 320) width = 320;

      var x = scaleTime().domain(dateExtent).range([margin.left, width - margin.right]);
      var y = scaleBand().domain(channelOrder)
        .range([margin.top, margin.top + laneHeight * channelOrder.length])
        .padding(0.15);

      var svg = select(container).append('svg')
        .attr('viewBox', '0 0 ' + width + ' ' + height)
        .attr('width', '100%')
        .style('display', 'block');

      svg.selectAll('.lane-bg').data(channelOrder).enter().append('rect')
        .attr('x', margin.left)
        .attr('y', function (c) { return y(c); })
        .attr('width', width - margin.left - margin.right)
        .attr('height', y.bandwidth())
        .attr('fill', function (_c, i) { return i % 2 === 0 ? t.laneA : t.laneB; });

      var channelTotals = {};
      events.forEach(function (e) { channelTotals[e.channel] = (channelTotals[e.channel] || 0) + 1; });
      svg.selectAll('.lane-label').data(channelOrder).enter().append('text')
        .attr('x', margin.left - 8)
        .attr('y', function (c) { return y(c) + y.bandwidth() / 2; })
        .attr('text-anchor', 'end')
        .attr('dominant-baseline', 'central')
        .style('font-size', '11px')
        .style('fill', t.text)
        .text(function (c) { return channelLabels[c] + '  (' + (channelTotals[c] || 0) + ')'; });

      var laneTopY = margin.top;
      var laneBottomY = margin.top + laneHeight * channelOrder.length;

      function estimateLabelWidth(text) {
        var w = 0;
        for (var ci = 0; ci < text.length; ci++) {
          var code = text.charCodeAt(ci);
          w += (code > 127) ? 11 : 5.8;
        }
        return w + 8;
      }

      var chartLeftX = margin.left;
      var chartRightX = width - margin.right;
      var sortedMs = milestones.slice().sort(function (a, b) { return a.date.localeCompare(b.date); });
      var rows = [];
      var msLayout = sortedMs.map(function (m) {
        var px = x(new Date(m.date));
        var labelW = estimateLabelWidth(m.label);
        var leftAnchorRight = px + 3 + labelW;
        var rightAnchorLeft = px - 3 - labelW;
        var anchorEnd = (leftAnchorRight > chartRightX - 6) && (rightAnchorLeft >= chartLeftX);
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

      var rowSpacing = 14;
      var bottomLabelY = laneTopY - 6;

      msLayout.forEach(function (item) {
        var labelY = bottomLabelY - item.row * rowSpacing;
        var g = svg.append('g')
          .attr('class', 'milestone')
          .attr('transform', 'translate(' + item.px + ',0)');
        g.append('line')
          .attr('x1', 0).attr('x2', 0)
          .attr('y1', laneTopY).attr('y2', laneBottomY)
          .attr('stroke', t.negative)
          .attr('stroke-width', 1)
          .attr('stroke-dasharray', '3,3')
          .attr('opacity', 0.55);
        if (item.row > 0) {
          g.append('line')
            .attr('x1', 0).attr('x2', 0)
            .attr('y1', labelY + 3).attr('y2', laneTopY)
            .attr('stroke', t.negative)
            .attr('stroke-width', 0.5)
            .attr('opacity', 0.4);
        }
        var labelEl = item.milestone.slug
          ? g.append('a')
            .attr('href', linkBase + item.milestone.slug + '/')
            .style('cursor', 'pointer')
            .append('text')
          : g.append('text');
        labelEl
          .attr('x', item.anchorEnd ? -3 : 3)
          .attr('y', labelY)
          .attr('text-anchor', item.anchorEnd ? 'end' : 'start')
          .style('font-size', '9.5px')
          .style('fill', t.negative)
          .style('text-decoration', item.milestone.slug ? 'underline' : 'none')
          .text(item.milestone.label);
      });

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

      var tooltip = makeTooltip(container, t);

      svg.selectAll('.event-dot').data(events).enter().append('circle')
        .attr('cx', function (d) { return x(new Date(d.date)); })
        .attr('cy', function (d, i) {
          var laneTop = y(d.channel);
          var bw = y.bandwidth();
          var offset = (jitter(i + 1) - 0.5) * bw * 0.7;
          return laneTop + bw / 2 + offset;
        })
        .attr('r', 2.6)
        .attr('fill', function (d) { return t.palette[d.channel] || t.muted; })
        .attr('fill-opacity', 0.7)
        .style('cursor', 'pointer')
        .on('mouseover', function (_event, d) {
          select(this).attr('r', 5).attr('fill-opacity', 1);
          var dateStr = new Date(d.date).toISOString().slice(0, 10);
          tooltip.style('opacity', 1).html(
            '<strong>' + dateStr + '</strong> · ' + (channelLabels[d.channel] || d.channel) +
            '<br/>' + escapeHtml(d.title));
        })
        .on('mousemove', function (event) { moveTooltip(tooltip, container, event); })
        .on('mouseout', function () { select(this).attr('r', 2.6).attr('fill-opacity', 0.7); tooltip.style('opacity', 0); })
        .on('click', function (_event, d) { window.location.href = linkBase + d.slug + '/'; });
    })();

    // ---- Panel 2: Per-recipient swimlane (private email only) ----
    (function () {
      var container = recipientsEl;
      if (!container) return;
      container.innerHTML = '';

      var recipientLabels = data.recipientLabels;
      var otherLabel = data.otherRecipientsLabel;

      var privateEvents = [];
      events.forEach(function (e) {
        if (e.channel !== 'private-email') return;
        var parts = e.slug.split('/');
        var recipient = parts.length >= 2 ? parts[1] : 'unknown';
        privateEvents.push({ date: e.date, title: e.title, slug: e.slug, recipient: recipient });
      });

      var counts = {};
      privateEvents.forEach(function (e) { counts[e.recipient] = (counts[e.recipient] || 0) + 1; });

      var sortedRecipients = Object.keys(counts).sort(function (a, b) { return counts[b] - counts[a]; });
      var TOP_N = 7;
      var topSet = {};
      sortedRecipients.slice(0, TOP_N).forEach(function (r) { topSet[r] = true; });
      var otherKey = '__other__';
      var otherCount = 0;
      var laneOrder = sortedRecipients.slice(0, TOP_N);
      privateEvents.forEach(function (e) {
        if (!topSet[e.recipient]) {
          e.lane = otherKey;
          otherCount++;
        } else {
          e.lane = e.recipient;
        }
      });
      if (otherCount > 0) laneOrder.push(otherKey);

      function laneDisplay(key) {
        if (key === otherKey) return otherLabel + ' (' + otherCount + ')';
        var name = recipientLabels[key] || key;
        return name + ' (' + counts[key] + ')';
      }

      var margin = { top: 20, right: 20, bottom: 50, left: 160 };
      var laneHeight = 26;
      var height = laneHeight * laneOrder.length + margin.top + margin.bottom;
      var width = container.clientWidth;
      if (width < 320) width = 320;

      var x = scaleTime().domain(dateExtent).range([margin.left, width - margin.right]);
      var y = scaleBand().domain(laneOrder)
        .range([margin.top, margin.top + laneHeight * laneOrder.length])
        .padding(0.18);

      var svg = select(container).append('svg')
        .attr('viewBox', '0 0 ' + width + ' ' + height)
        .attr('width', '100%')
        .style('display', 'block');

      svg.selectAll('.lane-bg-r').data(laneOrder).enter().append('rect')
        .attr('x', margin.left)
        .attr('y', function (k) { return y(k); })
        .attr('width', width - margin.left - margin.right)
        .attr('height', y.bandwidth())
        .attr('fill', function (_k, i) { return i % 2 === 0 ? t.laneA : t.laneB; });

      svg.selectAll('.lane-label-r').data(laneOrder).enter().append('text')
        .attr('x', margin.left - 8)
        .attr('y', function (k) { return y(k) + y.bandwidth() / 2; })
        .attr('text-anchor', 'end')
        .attr('dominant-baseline', 'central')
        .style('font-size', '11px')
        .style('fill', t.text)
        .text(function (k) { return laneDisplay(k); });

      var recipPalette = [
        t.palette['private-email'], t.palette['cryptography-ml'], t.palette['bitcoin-list-ml'],
        t.palette['p2p-research-ml'], t.palette['p2pfoundation'], t.palette['sourceforge'],
        t.palette['github'], t.palette['bitcointalk'],
      ];
      var recipColor = scaleOrdinal().domain(laneOrder).range(recipPalette);

      var laneBottomY = margin.top + laneHeight * laneOrder.length;
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

      svg.selectAll('.r-milestone').data(milestones).enter().append('line')
        .attr('x1', function (d) { return x(new Date(d.date)); })
        .attr('x2', function (d) { return x(new Date(d.date)); })
        .attr('y1', margin.top).attr('y2', laneBottomY)
        .attr('stroke', t.negative).attr('stroke-width', 0.6).attr('stroke-dasharray', '2,3').attr('opacity', 0.35);

      var tooltip = makeTooltip(container, t);

      svg.selectAll('.r-event-dot').data(privateEvents).enter().append('circle')
        .attr('cx', function (d) { return x(new Date(d.date)); })
        .attr('cy', function (d, i) {
          var laneTop = y(d.lane);
          var bw = y.bandwidth();
          var offset = (jitter(i + 1) - 0.5) * bw * 0.7;
          return laneTop + bw / 2 + offset;
        })
        .attr('r', 2.6)
        .attr('fill', function (d) { return recipColor(d.lane); })
        .attr('fill-opacity', 0.75)
        .style('cursor', 'pointer')
        .on('mouseover', function (_event, d) {
          select(this).attr('r', 5).attr('fill-opacity', 1);
          var dateStr = new Date(d.date).toISOString().slice(0, 10);
          var who = d.lane === otherKey ? (recipientLabels[d.recipient] || d.recipient) : (recipientLabels[d.lane] || d.lane);
          tooltip.style('opacity', 1).html(
            '<strong>' + dateStr + '</strong> · → ' + who +
            '<br/>' + escapeHtml(d.title));
        })
        .on('mousemove', function (event) { moveTooltip(tooltip, container, event); })
        .on('mouseout', function () { select(this).attr('r', 2.6).attr('fill-opacity', 0.75); tooltip.style('opacity', 0); })
        .on('click', function (_event, d) { window.location.href = linkBase + d.slug + '/'; });
    })();

    // ---- Panel 3: Cumulative curve ----
    (function () {
      var container = cumulativeEl;
      if (!container) return;
      container.innerHTML = '';

      var sorted = events.slice().sort(function (a, b) { return a.date.localeCompare(b.date); });
      var cumulative = sorted.map(function (e, i) { return { date: new Date(e.date), n: i + 1 }; });

      var margin = { top: 20, right: 20, bottom: 50, left: 60 };
      var height = 220;
      var width = container.clientWidth;
      if (width < 320) width = 320;

      var x = scaleTime().domain(dateExtent).range([margin.left, width - margin.right]);
      var y = scaleLinear().domain([0, cumulative[cumulative.length - 1].n]).range([height - margin.bottom, margin.top]);

      var svg = select(container).append('svg')
        .attr('viewBox', '0 0 ' + width + ' ' + height)
        .attr('width', '100%')
        .style('display', 'block');

      var yTicks = y.ticks(5);
      svg.selectAll('.y-grid').data(yTicks).enter().append('line')
        .attr('x1', margin.left).attr('x2', width - margin.right)
        .attr('y1', function (d) { return y(d); })
        .attr('y2', function (d) { return y(d); })
        .attr('stroke', t.grid).attr('stroke-width', 0.6);

      var laneTopY = margin.top;
      var laneBottomY = height - margin.bottom;
      svg.selectAll('.cm-milestone').data(milestones).enter().append('line')
        .attr('x1', function (d) { return x(new Date(d.date)); })
        .attr('x2', function (d) { return x(new Date(d.date)); })
        .attr('y1', laneTopY).attr('y2', laneBottomY)
        .attr('stroke', t.negative).attr('stroke-width', 0.6).attr('stroke-dasharray', '2,3').attr('opacity', 0.4);

      var line = d3line()
        .x(function (d) { return x(d.date); })
        .y(function (d) { return y(d.n); })
        .curve(curveStepAfter);

      svg.append('path')
        .datum(cumulative)
        .attr('fill', 'none')
        .attr('stroke', t.palette['github'])
        .attr('stroke-width', 1.5)
        .attr('d', line);

      var xAxis = axisBottom(x).ticks(timeYear.every(1)).tickFormat(timeFormat('%Y'));
      svg.append('g')
        .attr('transform', 'translate(0,' + (height - margin.bottom) + ')')
        .call(xAxis)
        .selectAll('text').style('font-size', '11px').style('fill', t.text);

      var yAxis = axisLeft(y).ticks(5);
      svg.append('g')
        .attr('transform', 'translate(' + margin.left + ',0)')
        .call(yAxis)
        .selectAll('text').style('font-size', '11px').style('fill', t.text);

      svg.append('text')
        .attr('transform', 'rotate(-90)')
        .attr('x', -(margin.top + (height - margin.top - margin.bottom) / 2))
        .attr('y', 16)
        .attr('text-anchor', 'middle')
        .style('font-size', '11px')
        .style('fill', t.muted)
        .text('cumulative ' + eventsSuffix);
    })();
  }

  render();

  if (typeof window.matchMedia === 'function') {
    var mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.addEventListener) mql.addEventListener('change', render);
    else if (mql.addListener) mql.addListener(render);
  }
  if (typeof MutationObserver === 'function') {
    new MutationObserver(render).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-mode', 'data-theme'],
    });
  }
}
