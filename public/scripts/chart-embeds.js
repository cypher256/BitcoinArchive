/* In-body chart runtime. Scans `.chart-embed[data-chart]` placeholders
   (emitted by remark-chart-embed from a `<!-- chart: NAME -->` marker) and
   fills each with a registered drawer. Lazy-loads d3 + chart-anim only when a
   placeholder is actually present, so editorial pages without a chart pay
   nothing. Each drawer reuses the shared animation runtime (chart-anim.js). */
(function () {
  var embeds = document.querySelectorAll('.chart-embed[data-chart]');
  if (!embeds.length) return;

  var me = (document.currentScript && document.currentScript.src) || '';
  var base = me.replace(/scripts\/chart-embeds\.js.*$/, '');
  var lang = document.documentElement.lang === 'ja' ? 'ja' : 'en';

  // ---- one-time styles for the embed chrome ----
  if (!document.getElementById('chart-embed-style')) {
    var st = document.createElement('style');
    st.id = 'chart-embed-style';
    st.textContent =
      '.chart-embed{margin:2rem 0;}' +
      '.chart-embed .ce-chart{position:relative;border:1px solid var(--color-border);border-radius:4px;background:var(--color-bg);overflow:hidden;}' +
      '.chart-embed .ce-chart svg{display:block;width:100%;height:auto;}';
    document.head.appendChild(st);
  }

  var DRAWERS = {};

  // ===== drawer: supply-animated (supply fills to 21M by ~2140) =====
  // Thin wrapper over the shared drawer (public/scripts/supply-curve.js). The
  // named halving schedule is kept self-contained for this standalone script;
  // `npm run check:halving-consistency` enforces it matches halvings.json.
  DRAWERS['supply-animated'] = function (host, lang) {
    var T_ = {
      en: { cap: '21,000,000 BTC (cap)', replay: 'Replay' },
      ja: { cap: '21,000,000 BTC（上限）', replay: 'リプレイ' },
    }[lang];
    host.innerHTML = '<div class="ba-replay-controls"><button class="ba-replay-btn" type="button">↻ ' + T_.replay + '</button></div><div class="ce-chart"></div>';
    window.BASupplyCurve.mount(host.querySelector('.ce-chart'), {
      halvings: [
        { date: '2009-01-03', reward: 50 }, { date: '2012-11-28', reward: 25 }, { date: '2016-07-09', reward: 12.5 },
        { date: '2020-05-11', reward: 6.25 }, { date: '2024-04-20', reward: 3.125 }, { date: '2028-04-17', reward: 1.5625 }, { date: '2032-04-14', reward: 0.78125 },
      ],
      labels: { cap: T_.cap },
      replayBtn: host.querySelector('.ba-replay-btn'),
    });
  };

  // ---- lazy-load d3 + chart-anim, then render every placeholder ----
  function loadScript(src, cb) { var s = document.createElement('script'); s.src = src; s.onload = cb; s.onerror = cb; document.head.appendChild(s); }
  function whenReady(test, src, cb) { if (test()) { cb(); return; } loadScript(src, function () { var n = 0, t = setInterval(function () { if (test() || ++n > 100) { clearInterval(t); cb(); } }, 30); }); }

  whenReady(function () { return typeof window.d3 !== 'undefined'; }, 'https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js', function () {
    whenReady(function () { return !!window.BAChartAnim; }, base + 'scripts/chart-anim.js', function () {
      whenReady(function () { return !!window.BASupplyCurve; }, base + 'scripts/supply-curve.js', function () {
        embeds.forEach(function (el) {
          var fn = DRAWERS[el.getAttribute('data-chart')];
          if (fn) { try { fn(el, lang); } catch (e) { /* unknown/failed drawer: leave placeholder empty */ } }
        });
      });
    });
  });
})();
