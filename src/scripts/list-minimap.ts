// Client behavior for the /sources/{source} minimap (src/lib/minimap.ts
// builds the dot positions server-side; this only wires hover-tooltip,
// click-to-navigate, and filter-sync on top of the already-rendered dots).
// Tooltip markup and styling follow the same pattern as the d3 charts'
// .chart-tooltip (BtcPriceChart.astro) rather than a new one-off.
export function initMinimap(minimapId: string, filterInputId?: string) {
  var minimap = document.getElementById(minimapId);
  if (!minimap) return;
  var pts = Array.prototype.slice.call(minimap.querySelectorAll('.minimap-pt'));
  if (!pts.length) return;

  // Dim (not hide) dots that don't match the page's quick-filter, using
  // the same lowercase-substring match as list-sort.ts's initListFilter.
  // Dimming rather than hiding keeps the strip's fixed 0-100% timeline
  // shape intact -- the minimap's whole point is a stable overview, and
  // removing dots would make that shape jump around as a reader types.
  var filterInput = filterInputId ? (document.getElementById(filterInputId) as HTMLInputElement | null) : null;
  if (filterInput) {
    filterInput.addEventListener('input', function () {
      var q = filterInput!.value.toLowerCase();
      pts.forEach(function (pt: any) {
        var match = !q || (pt.dataset.filter || '').indexOf(q) !== -1;
        pt.classList.toggle('minimap-pt-dim', !match);
      });
    });
  }

  // A year label is centered within its own lane (see lib/minimap.ts /
  // the CSS on .minimap-yr-label), so a lane narrower than its own label
  // text -- a partial leading/trailing year, or any year squeezed by a
  // very wide overall date range -- lets that text spill into a
  // neighboring lane's label and collide with it. Real text width can
  // only be measured after layout (font metrics aren't known
  // server-side), so hide just the overflowing label's text here; the
  // lane's own background color still marks that year's span even
  // without a caption. Each label's natural width is captured up front
  // (while every label is still visible from SSR) and reused on every
  // later check instead of re-reading scrollWidth live -- a hidden
  // ([hidden] -> display:none) element's scrollWidth reads 0, and
  // ResizeObserver always fires once immediately on observe(), so
  // re-measuring live would read the just-hidden label as "0px, fits"
  // and immediately un-hide it again on that very first callback.
  var yearEls = Array.prototype.slice.call(minimap.querySelectorAll('.minimap-yr'));
  var yearLabelWidths: number[] = [];
  function measureYearLabelWidths() {
    yearLabelWidths = yearEls.map(function (yr: any) {
      var label = yr.querySelector('.minimap-yr-label');
      return label ? label.scrollWidth : 0;
    });
  }
  function fitYearLabels() {
    yearEls.forEach(function (yr: any, i: number) {
      var label = yr.querySelector('.minimap-yr-label');
      if (label) label.hidden = yearLabelWidths[i] > yr.clientWidth;
    });
  }
  if (yearEls.length) {
    measureYearLabelWidths();
    fitYearLabels();
    if ('ResizeObserver' in window) {
      new ResizeObserver(fitYearLabels).observe(minimap);
    } else {
      window.addEventListener('resize', fitYearLabels, { passive: true });
    }
    // The site's body font loads with font-display: swap, so the very
    // first measurement above can happen against the fallback face's
    // metrics, not Inter's -- a label cached as "fits" then can silently
    // overflow once the real font swaps in (a font-swap reflow doesn't
    // resize .minimap-yr itself, so ResizeObserver never fires for it).
    // Re-measure once fonts are confirmed settled, unhiding first so a
    // label already hidden from the fallback-face pass isn't re-measured
    // at its own display:none scrollWidth of 0 (the same trap the cache
    // above exists to avoid).
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () {
        yearEls.forEach(function (yr: any) {
          var label = yr.querySelector('.minimap-yr-label');
          if (label) label.hidden = false;
        });
        measureYearLabelWidths();
        fitYearLabels();
      });
    }
  }

  var tooltip = document.createElement('div');
  tooltip.className = 'minimap-tooltip';
  minimap.appendChild(tooltip);

  function show(pt: any) {
    tooltip.textContent = pt.dataset.label || '';
    tooltip.style.opacity = '1';
    var mapRect = minimap!.getBoundingClientRect();
    var ptRect = pt.getBoundingClientRect();
    var left = ptRect.left - mapRect.left + ptRect.width / 2;
    // Keep the tooltip inside the strip instead of overflowing past either edge.
    var tipW = tooltip.offsetWidth || 160;
    left = Math.min(Math.max(left, tipW / 2), mapRect.width - tipW / 2);
    tooltip.style.left = left + 'px';
  }
  function hide() { tooltip.style.opacity = '0'; }
  function go(pt: any) { var href = pt.dataset.href; if (href) location.href = href; }

  pts.forEach(function (pt: any) {
    pt.addEventListener('mouseenter', function () { show(pt); });
    pt.addEventListener('mouseleave', hide);
    pt.addEventListener('focus', function () { show(pt); });
    pt.addEventListener('blur', hide);
    pt.addEventListener('click', function () { go(pt); });
    pt.addEventListener('keydown', function (e: KeyboardEvent) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(pt); }
    });
  });
}
