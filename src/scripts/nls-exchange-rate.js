/* Cost-of-production formula diagram (NewLibertyStandard's first Bitcoin
   exchange rate). Extracted from src/components/NlsExchangeRate.astro so it
   can be embedded in-body via ChartEmbedRuntime -- the diagram belongs
   right after the methodology paragraph it visualizes, not fixed at the
   bottom of the page. */
import { select } from 'd3-selection';

export function mount(container, l) {
  function token(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }
  function readTokens() {
    return {
      physical: token('--chart-color-2'),
      time: token('--chart-color-4'),
      output: token('--color-accent'),
      resultFill: token('--color-accent-bg'),
      resultStroke: token('--color-accent'),
      resultText: token('--color-accent'),
      muted: token('--color-text-muted'),
      faint: token('--color-divider'),
    };
  }

  function draw() {
    container.innerHTML = '';
    var T = readTokens();
    var rect = container.getBoundingClientRect();
    var W = rect.width || 700;
    var H = 320;

    var svg = select(container).append('svg').attr('width', W).attr('height', H);
    var g = svg.append('g');

    var boxW = Math.min(140, (W - 60) / 4);
    var gap = (W - 4 * boxW) / 5;
    var boxH = 70;
    var topY = 30;
    var resultY = 210;
    var resultW = Math.min(240, W - 80);
    var resultX = (W - resultW) / 2;
    var resultH = 80;

    var inputs = [
      { label: l.kwhLabel, value: l.kwh, color: T.physical },
      { label: l.costLabel, value: l.cost, color: T.physical },
      { label: l.monthsLabel, value: l.months, color: T.time },
      { label: l.btcLabel, value: l.mined, color: T.output },
    ];

    inputs.forEach(function (inp, i) {
      var x = gap + i * (boxW + gap);
      g.append('rect')
        .attr('x', x).attr('y', topY)
        .attr('width', boxW).attr('height', boxH)
        .attr('fill', 'none').attr('stroke', inp.color).attr('stroke-width', 1.5).attr('rx', 6);

      var labelLines = inp.label.split('\n');
      g.append('text')
        .attr('x', x + boxW / 2).attr('y', topY + 18)
        .attr('text-anchor', 'middle').attr('font-size', '10px')
        .attr('fill', T.muted).text(labelLines[0]);
      if (labelLines[1]) {
        g.append('text')
          .attr('x', x + boxW / 2).attr('y', topY + 30)
          .attr('text-anchor', 'middle').attr('font-size', '9px')
          .attr('fill', T.faint).text(labelLines[1]);
      }
      g.append('text')
        .attr('x', x + boxW / 2).attr('y', topY + 55)
        .attr('text-anchor', 'middle').attr('font-size', '13px')
        .attr('fill', inp.color).attr('font-weight', '700').text(inp.value);

      g.append('line')
        .attr('x1', x + boxW / 2).attr('x2', x + boxW / 2)
        .attr('y1', topY + boxH + 5).attr('y2', resultY - 15)
        .attr('stroke', T.faint).attr('stroke-width', 1);
      g.append('polygon')
        .attr('points',
          (x + boxW / 2 - 4) + ',' + (resultY - 20) + ' ' +
          (x + boxW / 2 + 4) + ',' + (resultY - 20) + ' ' +
          (x + boxW / 2) + ',' + (resultY - 12))
        .attr('fill', T.faint);

      if (i < inputs.length - 1) {
        var opX = x + boxW + gap / 2;
        var op = i === 0 ? '×' : (i === 1 ? '÷' : '÷');
        g.append('text')
          .attr('x', opX).attr('y', topY + boxH / 2)
          .attr('text-anchor', 'middle').attr('dominant-baseline', 'central')
          .attr('font-size', '22px').attr('fill', T.muted)
          .text(op);
      }
    });

    g.append('rect')
      .attr('x', resultX).attr('y', resultY)
      .attr('width', resultW).attr('height', resultH)
      .attr('fill', T.resultFill).attr('stroke', T.resultStroke).attr('stroke-width', 2).attr('rx', 6);

    g.append('text')
      .attr('x', W / 2).attr('y', resultY + 22)
      .attr('text-anchor', 'middle').attr('font-size', '11px')
      .attr('fill', T.resultText).text(l.resultLabel);
    g.append('text')
      .attr('x', W / 2).attr('y', resultY + 48)
      .attr('text-anchor', 'middle').attr('font-size', '20px')
      .attr('fill', T.resultText).attr('font-weight', '700')
      .text(l.priceBtc + ' ' + l.priceBtcFull);
    g.append('text')
      .attr('x', W / 2).attr('y', resultY + 68)
      .attr('text-anchor', 'middle').attr('font-size', '13px')
      .attr('fill', T.resultText).attr('font-weight', '600')
      .text('(' + l.priceUsd + ')');
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
