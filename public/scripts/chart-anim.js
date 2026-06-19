/* Reusable chart-animation runtime (A). No d3 dependency.
   window.BAChartAnim.playOnScroll(el, { duration, onFrame, ease, threshold })
   - Plays onFrame(p), p going 0 -> 1, once, the first time `el` scrolls into view.
   - Honors prefers-reduced-motion: jumps straight to onFrame(1) (no animation).
   - Returns a replay function.
   Each chart only supplies "how to draw one frame" (onFrame); the scroll
   trigger, the frame loop, and the reduced-motion handling are shared here. */
(function () {
  if (window.BAChartAnim) return;

  function cubicInOut(p) { return p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2; }

  window.BAChartAnim = {
    playOnScroll: function (el, opts) {
      opts = opts || {};
      var dur = opts.duration || 6000;
      var onFrame = typeof opts.onFrame === 'function' ? opts.onFrame : function () {};
      var ease = typeof opts.ease === 'function' ? opts.ease : cubicInOut;
      var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var raf = 0;

      function run() {
        if (reduced) { onFrame(1); return; }
        cancelAnimationFrame(raf);
        var t0 = null;
        function step(ts) {
          if (t0 === null) t0 = ts;
          var p = Math.min(1, (ts - t0) / dur);
          onFrame(ease(p));
          if (p < 1) raf = requestAnimationFrame(step);
        }
        raf = requestAnimationFrame(step); // first call via rAF so ts is a real timestamp (a direct () call passes ts=undefined -> NaN)
      }

      if (!el) { onFrame(1); return run; }
      if ('IntersectionObserver' in window) {
        var played = false;
        var io = new IntersectionObserver(function (entries) {
          entries.forEach(function (e) {
            if (e.isIntersecting && !played) { played = true; run(); }
          });
        }, { threshold: opts.threshold || 0.35 });
        io.observe(el);
      } else {
        run();
      }
      return run; // explicit replay handle
    },

    // Left-to-right "time cursor" wipe reveal for one or more already-drawn
    // chart panels. Each panel's <svg> is overlaid with a background-coloured
    // curtain that retracts rightward behind an accent playhead, so the drawn
    // content (dots, lines, lanes) surfaces in left-to-right (time) order. The
    // chart's own draw code is untouched: curtains are appended on play and
    // removed on completion, so the resting and post-animation state is always
    // the full, interactive chart. Plays once on scroll-in; returns a replay fn.
    //   panels: array of element ids or elements (id of the panel that holds the svg)
    //   opts:   { duration, accent }  (accent defaults to --color-accent)
    wipeReveal: function (panels, opts) {
      opts = opts || {};
      var NS = 'http://www.w3.org/2000/svg';
      var accent = opts.accent
        || getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim()
        || '#f7931a';
      var els = (panels || []).map(function (p) {
        return typeof p === 'string' ? document.getElementById(p) : p;
      }).filter(Boolean);
      if (!els.length) return function () {};

      var self = this;
      var duration = opts.duration || 5000;
      function solidBg(el) {
        var bg = getComputedStyle(el).backgroundColor;
        if (!bg || bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') {
          bg = getComputedStyle(document.body).backgroundColor || '#ffffff';
        }
        return bg;
      }
      function dims(svg) {
        var vb = (svg.getAttribute('viewBox') || '').split(/[\s,]+/).map(Number);
        var has = vb.length === 4 && vb[2] && vb[3];
        var rect = svg.getBoundingClientRect();
        return {
          W: has ? vb[2] : (parseFloat(svg.getAttribute('width')) || rect.width || 320),
          H: has ? vb[3] : (parseFloat(svg.getAttribute('height')) || rect.height || 200),
        };
      }
      // Each panel is wired independently so it reveals when ITS OWN element
      // scrolls into view (panels can be spread far apart on the page).
      function wireOne(el) {
        var state = null;
        function build() {
          var svg = el.querySelector('svg');
          if (!svg) return null;
          var d = dims(svg);
          var curtain = document.createElementNS(NS, 'rect');
          curtain.setAttribute('class', 'reveal-curtain');
          curtain.setAttribute('x', '0'); curtain.setAttribute('y', '0');
          curtain.setAttribute('width', d.W); curtain.setAttribute('height', d.H);
          curtain.setAttribute('fill', solidBg(el));
          var ph = document.createElementNS(NS, 'line');
          ph.setAttribute('class', 'reveal-playhead');
          ph.setAttribute('y1', '0'); ph.setAttribute('y2', d.H);
          ph.setAttribute('stroke', accent);
          ph.setAttribute('stroke-width', '1.5');
          ph.setAttribute('opacity', '0.9');
          svg.appendChild(curtain);
          svg.appendChild(ph);
          return { curtain: curtain, ph: ph, W: d.W };
        }
        function clear() {
          if (!state) return;
          if (state.curtain.parentNode) state.curtain.parentNode.removeChild(state.curtain);
          if (state.ph.parentNode) state.ph.parentNode.removeChild(state.ph);
          state = null;
        }
        var replay = self.playOnScroll(el, {
          duration: duration,
          onFrame: function (p) {
            if (!state) state = build();
            if (!state) return;
            if (p >= 1) { clear(); return; }
            var px = p * state.W;
            state.curtain.setAttribute('x', px);
            state.curtain.setAttribute('width', Math.max(0, state.W - px));
            state.ph.setAttribute('x1', px);
            state.ph.setAttribute('x2', px);
          },
        });
        return function () { clear(); replay(); };
      }
      var replays = els.map(wireOne);
      return function () { replays.forEach(function (r) { r(); }); };
    },
  };
})();
