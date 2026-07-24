/* Glassnode's sea-creature entity tiers, drawn on one shared log axis. Mounted
   by the in-body embed (ChartEmbedRuntime `whale-tiers`, placed via a
   `<!-- chart: whale-tiers -->` marker in the bitcoin-ownership-map entry).

   Why a log axis and an emphasis palette, not eight colored bars: the story is
   a single number — the top two tiers alone hold about a third of circulating
   supply — so the figure highlights those two against a muted rest. Eight hues
   would bury the point the section is making. The log axis carries the other
   half of the story: the scale spans five orders of magnitude, which a table of
   thresholds cannot show.

   Thresholds are verbatim from Glassnode's own research post (the same source
   the entry already cites for the 6.64M figure):
   https://research.glassnode.com/bitcoin-supply-distribution-revisited/
     "Shrimps (<1 BTC), Crab (1-10 BTC), Octopus (10-50 BTC), Fish (50-100 BTC),
      Dolphin (100-500 BTC), Shark (500-1,000 BTC), Whale (1,000-5,000 BTC),
      Humpback (>5,000 BTC)"
   Glassnode's live Studio charts use a coarser variant for two of these (Fish
   10-100, Shark 100-1,000, with no separate Octopus/Dolphin chart). The
   research-post scale is the one the entry cites, so it is what is drawn; the
   divergence is disclosed in the figure's note line (see ChartEmbedRuntime). */
import { select } from 'd3-selection';
import { scaleLog } from 'd3-scale';

// Display bounds. The outermost tiers are open-ended ("<1", ">5,000"), so the
// axis runs past them and those two bars end in an arrow rather than a cap.
const AXIS_MIN = 0.1;
const AXIS_MAX = 20000;

const TIERS = [
  { key: 'shrimp', lo: AXIS_MIN, hi: 1, open: 'lo' },
  { key: 'crab', lo: 1, hi: 10 },
  { key: 'octopus', lo: 10, hi: 50 },
  { key: 'fish', lo: 50, hi: 100 },
  { key: 'dolphin', lo: 100, hi: 500 },
  { key: 'shark', lo: 500, hi: 1000 },
  { key: 'whale', lo: 1000, hi: 5000, whale: true },
  { key: 'humpback', lo: 5000, hi: AXIS_MAX, open: 'hi', whale: true },
];

const T = {
  en: {
    names: {
      shrimp: 'Shrimp', crab: 'Crab', octopus: 'Octopus', fish: 'Fish',
      dolphin: 'Dolphin', shark: 'Shark', whale: 'Whale', humpback: 'Humpback',
    },
    ranges: {
      shrimp: 'under 1 BTC', crab: '1 – 10', octopus: '10 – 50', fish: '50 – 100',
      dolphin: '100 – 500', shark: '500 – 1,000', whale: '1,000 – 5,000',
      humpback: 'over 5,000 BTC',
    },
    bandTop: 'Whales — 1,000 BTC and up',
    bandFact: '≈6.64M BTC, about a third of supply',
    axisLabel: 'BTC per entity (log scale)',
  },
  ja: {
    names: {
      shrimp: 'エビ', crab: 'カニ', octopus: 'タコ', fish: '魚',
      dolphin: 'イルカ', shark: 'サメ', whale: 'クジラ', humpback: 'ザトウクジラ',
    },
    ranges: {
      shrimp: '1 BTC 未満', crab: '1 – 10', octopus: '10 – 50', fish: '50 – 100',
      dolphin: '100 – 500', shark: '500 – 1,000', whale: '1,000 – 5,000',
      humpback: '5,000 BTC 超',
    },
    bandTop: 'クジラ以上 ― 1,000 BTC から',
    bandFact: '約 664 万 BTC、流通量のおよそ 3 分の 1',
    axisLabel: '1 主体あたりの保有量（対数目盛り）',
  },
};

const TICKS = [1, 10, 100, 1000, 10000];

export function mount(container, lang) {
  var isJa = lang === 'ja';
  var t = T[isJa ? 'ja' : 'en'];

  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function draw() {
    container.innerHTML = '';
    var rect = container.getBoundingClientRect();
    var W = Math.max(300, rect.width || 680);
    var narrow = W < 560;

    // Left gutter holds each tier's name over its numeric range, so every value
    // is readable without hovering (the tooltip only repeats what is drawn).
    var padL = narrow ? 92 : 128;
    var padR = narrow ? 14 : 20;
    var padT = 12;
    var rowH = narrow ? 38 : 34;
    var axisH = 34;
    // Gap above the whale rows, holding the band's own caption. On narrow
    // widths the caption wraps to two lines, so the gap grows to match.
    var gap = narrow ? 34 : 22;

    var firstWhale = 0;
    for (var i = 0; i < TIERS.length; i++) { if (TIERS[i].whale) { firstWhale = i; break; } }

    var ys = [];
    var cursor = padT;
    TIERS.forEach(function (d, i) {
      if (i === firstWhale) cursor += gap;
      ys.push(cursor);
      cursor += rowH;
    });
    var axisY = cursor;
    var H = axisY + axisH;

    var accent = token('--chart-emphasis') || '#1f3a5f';
    var muted = token('--chart-color-6') || '#5a6470';
    var grid = token('--chart-grid') || '#ddd';
    var textCol = token('--color-text');
    var textMuted = token('--color-text-muted');
    var bg = token('--color-bg');

    var x = scaleLog().domain([AXIS_MIN, AXIS_MAX]).range([padL, W - padR]);

    var svg = select(container).append('svg')
      .attr('width', W).attr('height', H)
      .attr('viewBox', '0 0 ' + W + ' ' + H)
      .attr('role', 'img')
      .attr('aria-label', t.bandTop + ' — ' + t.bandFact);

    // ---- whale band: the figure's actual point, drawn behind the rows ----
    var bandY = ys[firstWhale] - 5;
    var bandH = (TIERS.length - firstWhale) * rowH + 4;
    svg.append('rect')
      .attr('x', padL - 8).attr('y', bandY)
      .attr('width', W - padR - padL + 8).attr('height', bandH)
      .attr('fill', accent).attr('fill-opacity', 0.07)
      .attr('rx', 3);

    // ---- gridlines (solid hairlines, one shade off the surface) ----
    TICKS.forEach(function (v) {
      svg.append('line')
        .attr('x1', x(v)).attr('x2', x(v))
        .attr('y1', padT - 2).attr('y2', axisY)
        .attr('stroke', grid).attr('stroke-width', 1);
    });

    // ---- band caption, sitting in the gap above the whale rows ----
    if (narrow) {
      svg.append('text')
        .attr('x', padL - 8).attr('y', bandY - 20)
        .attr('font-size', '11px').attr('font-weight', 700).attr('fill', accent)
        .text(t.bandTop);
      svg.append('text')
        .attr('x', padL - 8).attr('y', bandY - 7)
        .attr('font-size', '11px').attr('font-weight', 700).attr('fill', accent)
        .text(t.bandFact);
    } else {
      svg.append('text')
        .attr('x', padL - 8).attr('y', bandY - 7)
        .attr('font-size', '11.5px').attr('font-weight', 700).attr('fill', accent)
        .text(t.bandTop);
      svg.append('text')
        .attr('x', W - padR).attr('y', bandY - 7)
        .attr('text-anchor', 'end')
        .attr('font-size', '11.5px').attr('font-weight', 700).attr('fill', accent)
        .text(t.bandFact);
    }

    // ---- tier rows ----
    TIERS.forEach(function (d, i) {
      var yMid = ys[i] + rowH / 2;
      var barH = 12;
      var x0 = x(d.lo);
      var x1 = x(d.hi);
      var color = d.whale ? accent : muted;
      var opacity = d.whale ? 0.9 : 0.45;
      var name = t.names[d.key];
      var range = t.ranges[d.key];

      var row = svg.append('g');
      row.append('title').text(name + (isJa ? ' ― ' : ' — ') + range);

      // Full-row hit strip so the hover target is not the 12px bar alone.
      row.append('rect')
        .attr('x', 0).attr('y', ys[i])
        .attr('width', W).attr('height', rowH)
        .attr('fill', 'transparent');

      // 2px surface stroke = the gap between adjacent fills (no separator borders).
      row.append('rect')
        .attr('x', x0).attr('y', yMid - barH / 2)
        .attr('width', Math.max(3, x1 - x0)).attr('height', barH)
        .attr('fill', color).attr('fill-opacity', opacity)
        .attr('stroke', bg).attr('stroke-width', 2)
        .attr('rx', 2);

      // Open-ended tiers get an arrow past the outer threshold, not a hard cap.
      if (d.open === 'lo') {
        row.append('path')
          .attr('d', 'M ' + (x0 - 2) + ' ' + yMid + ' l 8 -5.5 l 0 11 Z')
          .attr('fill', color).attr('fill-opacity', opacity);
      } else if (d.open === 'hi') {
        row.append('path')
          .attr('d', 'M ' + (x1 + 2) + ' ' + yMid + ' l -8 -5.5 l 0 11 Z')
          .attr('fill', color).attr('fill-opacity', opacity);
      }

      row.append('text')
        .attr('x', padL - 12).attr('y', yMid - 1)
        .attr('text-anchor', 'end')
        .attr('font-size', narrow ? '12px' : '13px')
        .attr('font-weight', d.whale ? 700 : 600)
        .attr('fill', textCol)
        .text(name);

      row.append('text')
        .attr('x', padL - 12).attr('y', yMid + 12)
        .attr('text-anchor', 'end')
        .attr('font-size', '10.5px')
        .attr('fill', textMuted)
        .style('font-variant-numeric', 'tabular-nums')
        .text(range);
    });

    // ---- x axis ----
    svg.append('line')
      .attr('x1', padL).attr('x2', W - padR)
      .attr('y1', axisY).attr('y2', axisY)
      .attr('stroke', grid).attr('stroke-width', 1);
    TICKS.forEach(function (v) {
      svg.append('text')
        .attr('x', x(v)).attr('y', axisY + 14)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10.5px')
        .attr('fill', textMuted)
        .style('font-variant-numeric', 'tabular-nums')
        .text(v.toLocaleString(isJa ? 'ja-JP' : 'en-US'));
    });
    svg.append('text')
      .attr('x', W - padR).attr('y', axisY + 29)
      .attr('text-anchor', 'end')
      .attr('font-size', '10.5px')
      .attr('fill', textMuted)
      .text(t.axisLabel);
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
