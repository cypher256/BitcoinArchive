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
  };
})();
