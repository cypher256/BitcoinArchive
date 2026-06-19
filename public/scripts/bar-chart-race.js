/* Shared bar-chart-race runtime — window.BABarRace.mount(container, opts).
   A horizontal bar chart whose bars reorder over time (a "ranking race"):
   each entity's value is interpolated continuously between yearly keyframes and
   the bars slide as ranks swap, with a large faint year ticker. Plays once on
   scroll-in via chart-anim.js (prefers-reduced-motion -> jumps to the final,
   latest-year ranking). Theme-aware: resolves CSS chart tokens at runtime, so
   light/dark and theme changes repaint without per-component code.

   opts:
     dates   : [year, ...]                    (length N, ascending)
     series  : [{ name, colorToken, values }] (values aligned to dates; 0 = not yet present)
     topN    : bars to show (default 10)
     duration: race length ms (default 14000)
     format  : 'usd-b' (values are USD billions) | function(v)->string
     dateFormat : function(year)->string (default integer year)
     replayBtn  : optional button element
   returns a replay function. */
(function () {
  if (window.BABarRace) return;

  function lerp(a, b, t) { return a + (b - a) * t; }

  function usdB(v) {
    if (v >= 1000) return '$' + (v / 1000).toFixed(2) + 'T';
    if (v >= 1) return '$' + Math.round(v) + 'B';
    return '$' + v.toFixed(1) + 'B';
  }

  window.BABarRace = {
    mount: function (container, opts) {
      opts = opts || {};
      var dates = opts.dates || [];
      var series = opts.series || [];
      var topN = opts.topN || 10;
      var duration = opts.duration || 14000;
      var fmt = typeof opts.format === 'function' ? opts.format : usdB;
      var dateFmt = typeof opts.dateFormat === 'function' ? opts.dateFormat : function (d) { return String(Math.round(d)); };
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
      var W, iw, ih, H, svg, g, barG, ticker, col, narrow;

      function build() {
        container.innerHTML = '';
        col = themeColors();
        // cache each series colour once (re-run on theme change via build())
        series.forEach(function (s) { s._color = token(s.colorToken || '--chart-color-1') || '#888'; });
        W = Math.max(300, container.getBoundingClientRect().width || 680);
        narrow = W < 460;
        if (narrow) { margin.left = 96; margin.right = 60; barH = 20; rowGap = 6; barStep = barH + rowGap; }
        else { margin.left = 132; margin.right = 78; barH = 24; rowGap = 7; barStep = barH + rowGap; }
        iw = W - margin.left - margin.right;
        ih = topN * barStep;
        H = ih + margin.top + margin.bottom;
        svg = d3.select(container).append('svg').attr('width', W).attr('height', H).attr('viewBox', '0 0 ' + W + ' ' + H);
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
        var maxV = d3.max(visible, function (r) { return r.v; }) || 1;
        var x = d3.scaleLinear().domain([0, maxV]).range([0, iw]);

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
      var replayRun = window.BAChartAnim.playOnScroll(container, { duration: duration, onFrame: render, ease: function (p) { return p; } });
      function replay() { render(0); if (replayRun) replayRun(); }
      if (opts.replayBtn) opts.replayBtn.addEventListener('click', replay);
      var timer;
      window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(setup, 250); });
      if (typeof MutationObserver === 'function') new MutationObserver(setup).observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode', 'data-theme'] });
      return replay;
    },
  };
})();
