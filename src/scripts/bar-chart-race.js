/* Shared bar-chart-race drawer. ONE implementation, used by both the
   BarChartRace.astro component (bottom-of-entry races: crypto / assets /
   wealth) and the in-body embed (ChartEmbedRuntime `holders-race`). Extracted
   from BarChartRace.astro so a race can sit at the right place within the
   prose via a `<!-- chart: NAME -->` marker, same as supply-curve.js.

   d3 comes from named imports (tree-shaken) instead of a CDN global. The
   scroll/animation runtime (window.BAChartAnim from chart-anim.js) is an
   optional classic script the caller is responsible for loading. */
import { select } from 'd3-selection';
import { max } from 'd3-array';
import { scaleLinear, scaleSqrt } from 'd3-scale';

function lerp(a, b, t) { return a + (b - a) * t; }

function usdB(v) {
  if (v >= 1000) return '$' + (v / 1000).toFixed(2) + 'T';
  if (v >= 1) return '$' + Math.round(v) + 'B';
  return '$' + v.toFixed(1) + 'B';
}

// USD billions -> Japanese yen (oku / cho). The display rate is NOT defined
// here: it is passed in via opts.jpyRate so the rate lives in exactly one
// place (the BarChartRace component), used for both this conversion and the
// on-chart note. 1B USD = rate * 10 oku-yen; 1 cho = 10,000 oku.
function makeJpy(rate) {
  return function (v) {
    var oku = v * rate * 10;
    if (oku >= 10000) {
      var cho = oku / 10000;
      return (cho >= 100 ? Math.round(cho).toLocaleString('ja-JP') : cho.toFixed(1)) + '兆円';
    }
    return Math.round(oku).toLocaleString('ja-JP') + '億円';
  };
}

// BTC quantities. EN compacts to k/M so six-figure values don't clip the
// right margin; JA steps at man (10,000), the natural JA large-number unit.
function btcEn(v) {
  if (v >= 1000000) return (v / 1000000).toFixed(2) + 'M BTC';
  if (v >= 1000) return Math.round(v / 1000) + 'k BTC';
  return Math.round(v) + ' BTC';
}
function btcJa(v) {
  if (v >= 10000) {
    var man = v / 10000;
    return (man >= 100 ? Math.round(man).toLocaleString('ja-JP') : man.toFixed(1)) + '万 BTC';
  }
  return Math.round(v).toLocaleString('ja-JP') + ' BTC';
}

export function mount(container, opts) {
  opts = opts || {};
  var dates = opts.dates || [];
  var series = opts.series || [];
  var topN = opts.topN || 10;
  var duration = opts.duration || 14000;
  var fmt = typeof opts.format === 'function' ? opts.format
    : (opts.format === 'jpy' && opts.jpyRate) ? makeJpy(opts.jpyRate)
    : opts.format === 'btc' ? btcEn
    : opts.format === 'btc-ja' ? btcJa
    : usdB;
  var dateFmt = typeof opts.dateFormat === 'function' ? opts.dateFormat : function (d) { return String(Math.round(d)); };
  // Default is linear (bar length reads as literal magnitude, the honest
  // reading for a race chart). 'sqrt' is an opt-in per race: it compresses
  // a single outlier series (e.g. gold dwarfing every other asset) enough
  // to make the rest of the field legible, while still handling zero values
  // and preserving more of the magnitude gap than a log scale would.
  var scaleFn = opts.scale === 'sqrt' ? scaleSqrt : scaleLinear;
  var N = dates.length;
  if (!N || !series.length) return function () {};

  function token(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
  function themeColors() {
    return {
      text: token('--color-text') || '#222', muted: token('--color-text-muted') || '#777',
      bg: token('--color-bg') || '#fff', grid: token('--chart-grid') || '#e5e7eb',
    };
  }

  // Precompute the integer-keyframe rank of every series at every year, so a
  // bar's vertical position can be interpolated smoothly across a crossover.
  // Only entities present (value > 0) that year are ranked, contiguously
  // (0,1,2,...), so the leaders always pack to the top with no empty rows;
  // absent entities sit just below the last present one, so a coin that
  // appears later animates up from the bottom of the field.
  function ranksAt(idx) {
    var present = series.filter(function (s) { return (s.values[idx] || 0) > 0; })
      .map(function (s) { return { name: s.name, v: s.values[idx] }; })
      .sort(function (a, b) { return b.v - a.v; });
    var m = {};
    present.forEach(function (d, i) { m[d.name] = i; });
    var bottom = present.length;
    series.forEach(function (s) { if (m[s.name] === undefined) m[s.name] = bottom; });
    return m;
  }
  var ranks = []; for (var k = 0; k < N; k++) ranks.push(ranksAt(k));

  var margin = { top: 6, right: 78, bottom: 6, left: 132 };
  var barH = 24, rowGap = 7, barStep = barH + rowGap;
  var W, iw, ih, H;
  var svg, g, barG, ticker;
  var col;
  var narrow;

  function build() {
    container.innerHTML = '';
    col = themeColors();
    // cache each series colour once (re-run on theme change via build())
    series.forEach(function (s) { s._color = token(s.colorToken || '--chart-color-1') || '#888'; });
    W = Math.max(300, container.getBoundingClientRect().width || 680);
    narrow = W < 460;
    if (narrow) { margin.right = 56; barH = 20; rowGap = 6; }
    else { margin.right = 78; barH = 24; rowGap = 7; }
    barStep = barH + rowGap;
    // Auto-size the left name column to the widest label so long names
    // (e.g. マーク・ザッカーバーグ / Bernard Arnault) never clip; cap at 45%.
    var nameFs = narrow ? 11 : 13;
    var probe = select(container).append('svg').attr('width', 0).attr('height', 0)
      .style('position', 'absolute').style('visibility', 'hidden');
    var maxNameW = 0;
    series.forEach(function (s) {
      var node = probe.append('text').attr('font-size', nameFs + 'px').attr('font-weight', 600).text(s.name).node();
      var w = node && node.getComputedTextLength ? node.getComputedTextLength() : (String(s.name).length * nameFs * 0.6);
      if (w > maxNameW) maxNameW = w;
    });
    probe.remove();
    margin.left = Math.max(60, Math.min(W * 0.45, Math.ceil(maxNameW) + 14));
    iw = W - margin.left - margin.right;
    ih = topN * barStep;
    H = ih + margin.top + margin.bottom;
    svg = select(container).append('svg').attr('width', W).attr('height', H).attr('viewBox', '0 0 ' + W + ' ' + H);
    g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    ticker = g.append('text').attr('x', iw).attr('y', ih - 6).attr('text-anchor', 'end')
      .attr('font-size', narrow ? '34px' : '52px').attr('font-weight', 800).attr('fill', col.muted)
      .attr('opacity', 0.28).style('font-variant-numeric', 'tabular-nums');
    barG = g.append('g');
  }

  function valueAt(s, ti) {
    var i0 = Math.floor(ti), i1 = Math.min(i0 + 1, N - 1), f = ti - i0;
    return lerp(s.values[i0] || 0, s.values[i1] || 0, f);
  }

  function render(p) {
    var ti = p * (N - 1), i0 = Math.floor(ti), i1 = Math.min(i0 + 1, N - 1), f = ti - i0;
    var rows = series.map(function (s) {
      return { s: s, v: valueAt(s, ti), rp: lerp(ranks[i0][s.name], ranks[i1][s.name], f) };
    });
    var visible = rows.filter(function (r) { return r.v > 0 && r.rp < topN - 0.001; });
    var maxV = max(visible, function (r) { return r.v; }) || 1;
    var x = scaleFn().domain([0, maxV]).range([0, iw]);

    var sel = barG.selectAll('g.ba-race-bar').data(visible, function (r) { return r.s.name; });
    sel.exit().remove();
    var ent = sel.enter().append('g').attr('class', 'ba-race-bar');
    ent.append('rect').attr('x', 0).attr('rx', 3);
    ent.append('text').attr('class', 'nm').attr('text-anchor', 'end').attr('dominant-baseline', 'central');
    ent.append('text').attr('class', 'vl').attr('text-anchor', 'start').attr('dominant-baseline', 'central');
    var all = ent.merge(sel);
    all.attr('transform', function (r) { return 'translate(0,' + (r.rp * barStep) + ')'; });
    all.select('rect').attr('y', 0).attr('height', barH)
      .attr('width', function (r) { return Math.max(2, x(r.v)); })
      .attr('fill', function (r) { return r.s._color; });
    all.select('.nm').attr('x', -8).attr('y', barH / 2).attr('fill', col.text)
      .attr('font-size', narrow ? '11px' : '13px').attr('font-weight', 600)
      .text(function (r) { return r.s.name; });
    all.select('.vl').attr('x', function (r) { return Math.max(2, x(r.v)) + 6; }).attr('y', barH / 2)
      .attr('fill', col.muted).attr('font-size', narrow ? '10px' : '12px').attr('font-weight', 600)
      .style('font-variant-numeric', 'tabular-nums')
      .text(function (r) { return fmt(r.v); });

    ticker.text(dateFmt(lerp(dates[i0], dates[i1], f)));
  }

  function setup() { build(); render(1); } // default/resting + reduced-motion = final-year ranking
  setup();
  // chart-anim.js (window.BAChartAnim) is loaded by the caller: BarChartRace
  // via its own <script src>, ChartEmbedRuntime via its lazy loader. The
  // guard is a plain `if`, matching the established pattern.
  var replayRun = null;
  if (window.BAChartAnim) {
    replayRun = window.BAChartAnim.playOnScroll(container, { duration: duration, onFrame: render, ease: function (p) { return p; } });
  }
  function replay() { render(0); if (replayRun) replayRun(); }
  if (opts.replayBtn) opts.replayBtn.addEventListener('click', replay);
  var timer;
  window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(setup, 250); });
  if (typeof MutationObserver === 'function') new MutationObserver(setup).observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode', 'data-theme'] });
  return replay;
}
