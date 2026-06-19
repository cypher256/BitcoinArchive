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
      '.chart-embed .ce-controls{display:flex;justify-content:flex-end;margin-bottom:0.4rem;}' +
      '.chart-embed .ce-replay{padding:3px 12px;font-size:0.78rem;background:var(--color-bg);color:var(--color-text-muted);border:1px solid var(--color-border);border-radius:4px;cursor:pointer;}' +
      '.chart-embed .ce-replay:hover{color:var(--color-text);}' +
      '.chart-embed .ce-chart{position:relative;border:1px solid var(--color-border);border-radius:4px;background:var(--color-bg);overflow:hidden;}' +
      '.chart-embed .ce-chart svg{display:block;width:100%;height:auto;}';
    document.head.appendChild(st);
  }

  var DRAWERS = {};

  // ===== drawer: supply-animated (supply fills to 21M by ~2140, stretching x axis) =====
  DRAWERS['supply-animated'] = function (host, lang) {
    var T_ = {
      en: { cap: '21,000,000 BTC (cap)', replay: 'Replay', h: ['Issuance begins', '1st halving', '2nd halving', '3rd halving', '4th halving', '5th halving', '6th halving'] },
      ja: { cap: '21,000,000 BTC（上限）', replay: 'リプレイ', h: ['発行開始', '第1回半減期', '第2回半減期', '第3回半減期', '第4回半減期', '第5回半減期', '第6回半減期'] },
    }[lang];
    host.innerHTML = '<div class="ce-controls"><button class="ce-replay" type="button">↻ ' + T_.replay + '</button></div><div class="ce-chart"></div>';
    var container = host.querySelector('.ce-chart');
    var replayBtn = host.querySelector('.ce-replay');

    var CAP = 21000000, BLOCKS = 210000;
    var src = [
      { date: '2009-01-03', reward: 50 }, { date: '2012-11-28', reward: 25 }, { date: '2016-07-09', reward: 12.5 },
      { date: '2020-05-11', reward: 6.25 }, { date: '2024-04-20', reward: 3.125 }, { date: '2028-04-17', reward: 1.5625 }, { date: '2032-04-14', reward: 0.78125 },
    ];
    var eras = [], cum = 0;
    src.forEach(function (h, i) { eras.push({ t: new Date(h.date), cumStart: cum, reward: h.reward, n: i, named: true }); cum += BLOCKS * h.reward; });
    var rew = eras[eras.length - 1].reward, d = new Date(eras[eras.length - 1].t);
    while (true) {
      rew = rew / 2;
      d = new Date(d.getFullYear() + 4, d.getMonth(), d.getDate());
      eras.push({ t: d, cumStart: cum, reward: rew, n: eras.length, named: false });
      cum += BLOCKS * rew;
      if (rew < 1e-8 || d.getFullYear() >= 2140) break;
    }
    var startDate = eras[0].t, endDate = eras[eras.length - 1].t;

    function supplyAt(dt) {
      for (var i = eras.length - 1; i >= 0; i--) {
        if (dt >= eras[i].t) {
          var nx = eras[i + 1];
          if (!nx) return eras[i].cumStart;
          return eras[i].cumStart + (dt - eras[i].t) / (nx.t - eras[i].t) * (nx.cumStart - eras[i].cumStart);
        }
      }
      return 0;
    }
    function token(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
    function colors() {
      return {
        text: token('--color-text') || '#222', muted: token('--color-text-muted') || '#777',
        grid: token('--chart-grid') || '#ccc', orange: token('--color-satoshi') || '#c2410c',
        gold: token('--color-hero-subtitle') || '#a78347', bg: token('--color-bg') || '#fff',
      };
    }

    var fmt = d3.format(',.0f');
    var H = 420, margin = { top: 52, right: 22, bottom: 32, left: 54 };
    var W, iw, ih, x, y, svg, g, gAxis, gDyn, counter, pct, yearT, area, line, col;

    function build() {
      container.innerHTML = '';
      col = colors();
      W = Math.max(300, container.getBoundingClientRect().width || 680);
      iw = W - margin.left - margin.right; ih = H - margin.top - margin.bottom;
      x = d3.scaleTime().range([0, iw]);
      y = d3.scaleLinear().domain([0, CAP]).range([ih, 0]);
      svg = d3.select(container).append('svg').attr('width', W).attr('height', H).attr('viewBox', '0 0 ' + W + ' ' + H);
      var grad = svg.append('defs').append('linearGradient').attr('id', 'ce-sa-grad').attr('x1', 0).attr('y1', 0).attr('x2', 0).attr('y2', 1);
      grad.append('stop').attr('offset', '0%').attr('stop-color', col.orange).attr('stop-opacity', 0.45);
      grad.append('stop').attr('offset', '100%').attr('stop-color', col.orange).attr('stop-opacity', 0.04);
      g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
      g.append('g').call(d3.axisLeft(y).tickValues([0, 5e6, 10e6, 15e6, 20e6]).tickFormat(function (v) { return v === 0 ? '0' : (v / 1e6) + 'M'; }))
        .call(function (s) { s.selectAll('text').attr('fill', col.muted).attr('font-size', '11px'); s.selectAll('line,path').attr('stroke', col.grid); });
      g.append('line').attr('x1', 0).attr('x2', iw).attr('y1', y(CAP)).attr('y2', y(CAP)).attr('stroke', col.gold).attr('stroke-width', 1.5).attr('stroke-dasharray', '6 5').attr('opacity', 0.85);
      g.append('text').attr('x', 4).attr('y', y(CAP) + 16).attr('fill', col.gold).attr('font-size', '12px').attr('font-weight', 600).text(T_.cap);
      gAxis = g.append('g').attr('transform', 'translate(0,' + ih + ')');
      gDyn = g.append('g');
      var narrow = W < 430;
      counter = svg.append('text').attr('x', margin.left).attr('y', 30).attr('fill', col.orange).attr('font-size', narrow ? '17px' : '24px').attr('font-weight', 800).style('font-variant-numeric', 'tabular-nums');
      yearT = svg.append('text').attr('x', W - margin.right).attr('y', 30).attr('text-anchor', 'end').attr('fill', col.text).attr('font-size', narrow ? '17px' : '22px').attr('font-weight', 800).style('font-variant-numeric', 'tabular-nums');
      pct = svg.append('text').attr('x', W - margin.right).attr('y', narrow ? 47 : 49).attr('text-anchor', 'end').attr('fill', col.gold).attr('font-size', narrow ? '12px' : '15px').attr('font-weight', 700);
      area = d3.area().x(function (p) { return x(p.t); }).y0(ih).y1(function (p) { return y(p.s); }).curve(d3.curveMonotoneX);
      line = d3.line().x(function (p) { return x(p.t); }).y(function (p) { return y(p.s); }).curve(d3.curveMonotoneX);
    }

    function render(cur) {
      var look = Math.max(365 * 86400000 * 1.2, (+cur - +startDate) * 0.05);
      var domEnd = new Date(Math.min(+endDate, +cur + look));
      if (+domEnd <= +startDate) domEnd = new Date(+startDate + 86400000 * 400);
      x.domain([startDate, domEnd]);
      gAxis.call(d3.axisBottom(x).ticks(W < 430 ? 4 : (W < 640 ? 5 : 7)).tickFormat(d3.timeFormat('%Y')))
        .call(function (s) { s.selectAll('text').attr('fill', col.muted).attr('font-size', '11px'); s.selectAll('line,path').attr('stroke', col.grid); });
      gDyn.selectAll('*').remove();
      eras.forEach(function (e) {
        if (e.named && e.n > 0 && e.t <= cur && e.t <= domEnd) {
          var hx = x(e.t);
          gDyn.append('line').attr('x1', hx).attr('x2', hx).attr('y1', 0).attr('y2', ih).attr('stroke', col.muted).attr('stroke-width', 1).attr('stroke-dasharray', '3 4').attr('opacity', 0.4);
        }
      });
      var pts = [], dd = new Date(startDate);
      while (dd <= cur) { pts.push({ t: new Date(dd), s: supplyAt(dd) }); dd = new Date(dd.getFullYear(), dd.getMonth() + 3, 1); }
      pts.push({ t: new Date(cur), s: supplyAt(cur) });
      gDyn.append('path').attr('fill', 'url(#ce-sa-grad)').attr('d', area(pts));
      gDyn.append('path').attr('fill', 'none').attr('stroke', col.orange).attr('stroke-width', 2.5).attr('d', line(pts));
      var last = pts[pts.length - 1];
      gDyn.append('circle').attr('r', 5).attr('fill', col.orange).attr('stroke', col.bg).attr('stroke-width', 2).attr('cx', x(last.t)).attr('cy', y(last.s));
      counter.text(fmt(last.s) + ' BTC');
      pct.text((last.s / CAP * 100).toFixed(1) + '% / 21M');
      yearT.text(cur.getFullYear());
    }

    function frame(p) {
      if (p >= 1) { render(endDate); return; }
      render(new Date(+startDate + Math.pow(p, 1.8) * (+endDate - +startDate))); // front-load the early steep rise
    }
    var replayRun = null;
    function setup() { build(); render(endDate); } // default: full, completed chart
    setup();
    replayRun = window.BAChartAnim.playOnScroll(container, { duration: 7000, onFrame: frame });
    if (replayBtn) replayBtn.addEventListener('click', function () { render(startDate); if (replayRun) replayRun(); });
    var timer;
    window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(setup, 250); });
    if (typeof MutationObserver === 'function') new MutationObserver(setup).observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode', 'data-theme'] });
  };

  // ---- lazy-load d3 + chart-anim, then render every placeholder ----
  function loadScript(src, cb) { var s = document.createElement('script'); s.src = src; s.onload = cb; s.onerror = cb; document.head.appendChild(s); }
  function whenReady(test, src, cb) { if (test()) { cb(); return; } loadScript(src, function () { var n = 0, t = setInterval(function () { if (test() || ++n > 100) { clearInterval(t); cb(); } }, 30); }); }

  whenReady(function () { return typeof window.d3 !== 'undefined'; }, 'https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js', function () {
    whenReady(function () { return !!window.BAChartAnim; }, base + 'scripts/chart-anim.js', function () {
      embeds.forEach(function (el) {
        var fn = DRAWERS[el.getAttribute('data-chart')];
        if (fn) { try { fn(el, lang); } catch (e) { /* unknown/failed drawer: leave placeholder empty */ } }
      });
    });
  });
})();
