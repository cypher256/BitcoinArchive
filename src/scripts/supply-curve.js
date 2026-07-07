/* Shared animated Bitcoin-supply curve drawer. ONE implementation, used by
   both the /chart/ page (SupplyScheduleChart.astro) and the in-body embed
   (ChartEmbedRuntime.astro `supply-animated`). The supply curve fills toward 21M as
   the x (time) domain stretches; a live counter shows BTC issued and % of 21M.

   The only data input is the named halving schedule (date + reward). The full
   issuance schedule to ~2140 is derived here from those halvings plus the
   geometric tail, so the page and the embed share one data source
   (halvings.json; the embed keeps a self-contained copy guarded by
   check:halving-consistency). Reuses the shared scroll/animation runtime
   (chart-anim.js playOnScroll: plays once on scroll-in, honors
   prefers-reduced-motion by jumping straight to the completed chart).

   Moved from public/scripts/ to src/scripts/ so Vite can bundle it as a real
   ES module — d3 comes from named imports (tree-shaken to the ~6 functions
   actually used) instead of a global set by a CDN <script> tag. */
import { select } from 'd3-selection';
import { scaleTime, scaleLinear } from 'd3-scale';
import { axisLeft, axisBottom } from 'd3-axis';
import { area, line, curveMonotoneX } from 'd3-shape';
import { format } from 'd3-format';
import { timeFormat } from 'd3-time-format';

const CAP = 21000000, BLOCKS = 210000;

// Build the era table: each named halving plus the geometric tail (reward
// halves every ~4 years) until the reward underflows or we pass 2140.
function buildEras(halvings) {
  var eras = [], cum = 0;
  halvings.forEach(function (h, i) {
    eras.push({ t: new Date(h.date), cumStart: cum, reward: h.reward, n: i, named: true });
    cum += BLOCKS * h.reward;
  });
  var rew = eras[eras.length - 1].reward, d = new Date(eras[eras.length - 1].t);
  while (true) {
    rew = rew / 2;
    d = new Date(d.getFullYear() + 4, d.getMonth(), d.getDate());
    eras.push({ t: d, cumStart: cum, reward: rew, n: eras.length, named: false });
    cum += BLOCKS * rew;
    if (rew < 1e-8 || d.getFullYear() >= 2140) break;
  }
  return eras;
}

// container : element to render the <svg> into
// opts.halvings : [{ date, reward }]  (named halvings; tail derived)
// opts.labels   : { cap }             (e.g. "21,000,000 BTC (cap)")
// opts.duration : reveal animation ms (default 7000)
// opts.replayBtn: optional button element to re-run the reveal
// returns a replay function.
export function mount(container, opts) {
  opts = opts || {};
  var labels = opts.labels || { cap: '21,000,000 BTC (cap)' };
  var duration = opts.duration || 7000;
  var eras = buildEras(opts.halvings || []);
  if (!eras.length) return function () {};
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

  var fmt = format(',.0f');
  var H = 420, margin = { top: 52, right: 22, bottom: 32, left: 54 };
  var W, iw, ih, x, y, svg, g, gAxis, gDyn, counter, pct, yearT, areaGen, lineGen, col;

  function build() {
    container.innerHTML = '';
    col = colors();
    W = Math.max(300, container.getBoundingClientRect().width || 680);
    iw = W - margin.left - margin.right; ih = H - margin.top - margin.bottom;
    x = scaleTime().range([0, iw]);
    y = scaleLinear().domain([0, CAP]).range([ih, 0]);
    svg = select(container).append('svg').attr('width', W).attr('height', H).attr('viewBox', '0 0 ' + W + ' ' + H);
    var grad = svg.append('defs').append('linearGradient').attr('id', 'ba-supply-grad').attr('x1', 0).attr('y1', 0).attr('x2', 0).attr('y2', 1);
    grad.append('stop').attr('offset', '0%').attr('stop-color', col.orange).attr('stop-opacity', 0.45);
    grad.append('stop').attr('offset', '100%').attr('stop-color', col.orange).attr('stop-opacity', 0.04);
    g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    g.append('g').call(axisLeft(y).tickValues([0, 5e6, 10e6, 15e6, 20e6]).tickFormat(function (v) { return v === 0 ? '0' : (v / 1e6) + 'M'; }))
      .call(function (s) { s.selectAll('text').attr('fill', col.muted).attr('font-size', '11px'); s.selectAll('line,path').attr('stroke', col.grid); });
    g.append('line').attr('x1', 0).attr('x2', iw).attr('y1', y(CAP)).attr('y2', y(CAP)).attr('stroke', col.gold).attr('stroke-width', 1.5).attr('stroke-dasharray', '6 5').attr('opacity', 0.85);
    g.append('text').attr('x', 4).attr('y', y(CAP) + 16).attr('fill', col.gold).attr('font-size', '12px').attr('font-weight', 600).text(labels.cap);
    gAxis = g.append('g').attr('transform', 'translate(0,' + ih + ')');
    gDyn = g.append('g');
    var narrow = W < 430;
    counter = svg.append('text').attr('x', margin.left).attr('y', 30).attr('fill', col.orange).attr('font-size', narrow ? '17px' : '24px').attr('font-weight', 800).style('font-variant-numeric', 'tabular-nums');
    yearT = svg.append('text').attr('x', W - margin.right).attr('y', 30).attr('text-anchor', 'end').attr('fill', col.text).attr('font-size', narrow ? '17px' : '22px').attr('font-weight', 800).style('font-variant-numeric', 'tabular-nums');
    pct = svg.append('text').attr('x', W - margin.right).attr('y', narrow ? 47 : 49).attr('text-anchor', 'end').attr('fill', col.gold).attr('font-size', narrow ? '12px' : '15px').attr('font-weight', 700);
    areaGen = area().x(function (p) { return x(p.t); }).y0(ih).y1(function (p) { return y(p.s); }).curve(curveMonotoneX);
    lineGen = line().x(function (p) { return x(p.t); }).y(function (p) { return y(p.s); }).curve(curveMonotoneX);
  }

  function render(cur) {
    var look = Math.max(365 * 86400000 * 1.2, (+cur - +startDate) * 0.05);
    var domEnd = new Date(Math.min(+endDate, +cur + look));
    if (+domEnd <= +startDate) domEnd = new Date(+startDate + 86400000 * 400);
    x.domain([startDate, domEnd]);
    gAxis.call(axisBottom(x).ticks(W < 430 ? 4 : (W < 640 ? 5 : 7)).tickFormat(timeFormat('%Y')))
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
    gDyn.append('path').attr('fill', 'url(#ba-supply-grad)').attr('d', areaGen(pts));
    gDyn.append('path').attr('fill', 'none').attr('stroke', col.orange).attr('stroke-width', 2.5).attr('d', lineGen(pts));
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

  function setup() { build(); render(endDate); } // default: full, completed chart (no-JS-anim safe)
  setup();
  var replayRun = window.BAChartAnim.playOnScroll(container, { duration: duration, onFrame: frame });
  function replay() { render(startDate); if (replayRun) replayRun(); }
  if (opts.replayBtn) opts.replayBtn.addEventListener('click', replay);
  var timer;
  window.addEventListener('resize', function () { clearTimeout(timer); timer = setTimeout(setup, 250); });
  if (typeof MutationObserver === 'function') new MutationObserver(setup).observe(document.documentElement, { attributes: true, attributeFilter: ['data-mode', 'data-theme'] });
  return replay;
}
