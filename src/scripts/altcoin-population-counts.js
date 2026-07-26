/* How many of these tokens last — the same question measured six ways, on one
   shared percentage axis. Mounted by the in-body embed (ChartEmbedRuntime
   `altcoin-population-counts`, placed via a
   `<!-- chart: altcoin-population-counts -->` marker in the altcoin
   count-and-design-comparison entry, in the closing section.)

   What this figure is NOT: a redraw of the count table above it. That table
   answers "how many exist" and carries each provider's definition in prose,
   which a bar cannot. This figure answers the next question — of the things
   counted, how many last — and the answer runs from 0.198% to 83% depending
   only on what the measurer decided "lasting" means. The section states those
   six figures inside one dense paragraph; drawing them shows what the
   paragraph cannot, that the spread between definitions is wider than any
   disagreement about the underlying data.

   Why a linear percentage axis and not a log one: every value is a share of
   its own population, so the comparison that matters is between shares, which
   a linear axis reads directly.

   Why the bars are grouped: the six measurements come from two unrelated
   populations — launchpad tokens and 2017-era ICOs — and are not points on a
   single curve. Grouping stops the eye reading them as a series. The
   definition is printed beside each bar because the definition is the
   variable this figure is actually about.

   Every figure is verbatim from the study named beside it; all are listed in
   the entry's secondarySources. */
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';

// value = percentage of that row's own population. Grouped by population.
const ROWS = [
  { key: 'lastDayTrade', value: 68.67, group: 'launchpad' },
  { key: 'graduated063', value: 0.63, group: 'launchpad' },
  { key: 'graduated0198', value: 0.198, group: 'launchpad', extreme: true },
  { key: 'everTraded', value: 15, group: 'ico' },
  { key: 'inactiveBoth', value: 16, group: 'ico' },
  { key: 'inactiveNeither', value: 83, group: 'ico', extreme: true },
];

const T = {
  en: {
    groups: {
      launchpad: 'Launchpad tokens (pump.fun)',
      ico: '2017-era ICOs',
    },
    names: {
      lastDayTrade: 'Last traded on the day they launched',
      graduated063: 'Reached a real market (655,770 launches)',
      graduated0198: 'Reached a real market (832,941 later launches)',
      everTraded: 'Ever traded on an exchange',
      inactiveBoth: 'Went quiet — raised capital and listed',
      inactiveNeither: 'Went quiet — raised nothing, listed nowhere',
    },
    sources: {
      lastDayTrade: 'CoinGecko Research',
      graduated063: 'arXiv 2602.14860',
      graduated0198: 'arXiv 2607.02823',
      everTraded: 'Satis Group',
      inactiveBoth: 'Boston College',
      inactiveNeither: 'Boston College',
    },
    axisLabel: 'share of that row’s own population',
    aria: 'Six measurements of how many tokens last, from two populations, running from 0.198 percent to 83 percent',
  },
  ja: {
    groups: {
      launchpad: '発行台のトークン (pump.fun)',
      ico: '2017 年前後の ICO',
    },
    names: {
      lastDayTrade: '公開当日に最後の取引',
      graduated063: '実際の市場へ到達 (65 万 5,770 件中)',
      graduated0198: '実際の市場へ到達 (その後の 83 万 2,941 件中)',
      everTraded: '取引所で取引された',
      inactiveBoth: '不活発化 ― 資金調達と上場を達成',
      inactiveNeither: '不活発化 ― 資金調達も上場もせず',
    },
    sources: {
      lastDayTrade: 'CoinGecko Research',
      graduated063: 'arXiv 2602.14860',
      graduated0198: 'arXiv 2607.02823',
      everTraded: 'Satis Group',
      inactiveBoth: 'Boston College',
      inactiveNeither: 'Boston College',
    },
    axisLabel: 'その行自身の母集団に占める割合',
    aria: '二つの母集団から取った、どれだけ残るかの測定 6 件。0.198% から 83% まで開く',
  },
};

const TICKS = [0, 20, 40, 60, 80, 100];

function fmt(v) {
  return (v < 1 ? v.toFixed(3) : v % 1 === 0 ? String(v) : v.toFixed(2)) + '%';
}

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

    var padL = narrow ? 132 : 274;
    var padR = narrow ? 56 : 70;
    var padT = 12;
    var rowH = narrow ? 44 : 40;
    var groupGap = 32;
    var axisH = 34;

    // Row tops. Each population heading sits in the gap above its first row.
    var ys = [];
    var cursor = padT + 18;
    var seenCount = 0;
    var seen = {};
    ROWS.forEach(function (d) {
      if (!seen[d.group]) { seen[d.group] = true; seenCount++; if (seenCount > 1) cursor += groupGap; }
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

    var x = scaleLinear().domain([0, 100]).range([padL, W - padR]);

    var svg = select(container).append('svg')
      .attr('width', W).attr('height', H)
      .attr('viewBox', '0 0 ' + W + ' ' + H)
      .attr('role', 'img')
      .attr('aria-label', t.aria);

    TICKS.forEach(function (v) {
      svg.append('line')
        .attr('x1', x(v)).attr('x2', x(v))
        .attr('y1', padT).attr('y2', axisY)
        .attr('stroke', grid).attr('stroke-width', 1);
    });

    var printed = {};
    ROWS.forEach(function (d, i) {
      var yTop = ys[i];
      var yMid = yTop + rowH / 2;
      var barH = 14;
      var color = d.extreme ? accent : muted;
      var opacity = d.extreme ? 0.9 : 0.45;

      if (!printed[d.group]) {
        printed[d.group] = true;
        svg.append('text')
          .attr('x', padL - 12).attr('y', yTop - 8)
          .attr('text-anchor', 'end')
          .attr('font-size', narrow ? '11px' : '11.5px')
          .attr('font-weight', 700)
          .attr('fill', textMuted)
          .text(t.groups[d.group]);
      }

      var row = svg.append('g');
      row.append('title').text(t.names[d.key] + (isJa ? ' ― ' : ' — ') + fmt(d.value) + ' · ' + t.sources[d.key]);

      row.append('rect')
        .attr('x', 0).attr('y', yTop)
        .attr('width', W).attr('height', rowH)
        .attr('fill', 'transparent');

      row.append('rect')
        .attr('x', padL).attr('y', yMid - barH / 2)
        .attr('width', Math.max(2, x(d.value) - padL)).attr('height', barH)
        .attr('fill', color).attr('fill-opacity', opacity)
        .attr('stroke', bg).attr('stroke-width', 2)
        .attr('rx', 2);

      row.append('text')
        .attr('x', x(d.value) + 8).attr('y', yMid + 4)
        .attr('font-size', narrow ? '12px' : '13px')
        .attr('font-weight', 700)
        .attr('fill', d.extreme ? accent : textCol)
        .style('font-variant-numeric', 'tabular-nums')
        .text(fmt(d.value));

      row.append('text')
        .attr('x', padL - 12).attr('y', yMid - 2)
        .attr('text-anchor', 'end')
        .attr('font-size', narrow ? '11px' : '12.5px')
        .attr('font-weight', 600)
        .attr('fill', textCol)
        .text(t.names[d.key]);

      row.append('text')
        .attr('x', padL - 12).attr('y', yMid + 12)
        .attr('text-anchor', 'end')
        .attr('font-size', '10.5px')
        .attr('fill', textMuted)
        .text(t.sources[d.key]);
    });

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
        .text(v + '%');
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
