/* Identity-suspect relation map — a hand-laid "case board" for the
   hypotheses-overview page (<!-- chart: identity-suspect-map -->).

   Deliberately NOT force-directed: with 13 nodes the composition is an
   editorial artifact — the documented orbit (whitepaper citations,
   pre-2011 contact) arcs down the right side, the named-by-others crowd
   down the left — and a simulation would shuffle that meaning away.
   Plain SVG DOM, no d3: the only runtime behavior is ego-highlight on
   hover plus a positioned hover card, and CSS custom properties carry
   the light/dark palette so theme switches restyle the static SVG with
   no redraw at all.

   The model arrives fully localized/resolved from ChartEmbedRuntime:
   nodes [{slug,name,href,avatar,x,y,hook,status,center}], edges
   [{a,b,kind,label}]. Edge kinds map to CSS classes srm-e-<kind>;
   line style is the colorblind-safe secondary encoding (validated
   palette: see ChartEmbedRuntime's srm token block). */

const NS = 'http://www.w3.org/2000/svg';
const XL = 'http://www.w3.org/1999/xlink';
const VIEW_W = 1000;
const VIEW_H = 640;
const R_CANDIDATE = 34;
const R_SATOSHI = 46;

function el(name, attrs, parent) {
  const n = document.createElementNS(NS, name);
  for (const k in attrs) n.setAttribute(k, attrs[k]);
  if (parent) parent.appendChild(n);
  return n;
}

export function mount(container, model) {
  const byId = {};
  model.nodes.forEach((n) => { byId[n.slug] = n; });

  container.innerHTML = '';
  const wrap = document.createElement('div');
  wrap.className = 'srm-wrap';
  container.appendChild(wrap);

  // role="group", not "img": an img role would flatten the node <a>
  // links out of the accessibility tree, and the links ARE the content.
  const svg = el('svg', {
    viewBox: `0 0 ${VIEW_W} ${VIEW_H}`,
    class: 'srm-svg',
    role: 'group',
    'aria-label': model.ariaLabel,
  }, null);
  wrap.appendChild(svg);

  const defs = el('defs', {}, svg);
  model.nodes.forEach((n) => {
    const r = n.center ? R_SATOSHI : R_CANDIDATE;
    const clip = el('clipPath', { id: `srm-clip-${n.slug}` }, defs);
    el('circle', { cx: n.x, cy: n.y, r: r - 3 }, clip);
  });

  // ---- edges (under the nodes) ----
  const edgesG = el('g', { class: 'srm-edges' }, svg);
  const edgeEls = model.edges.map((e) => {
    const a = byId[e.a];
    const b = byId[e.b];
    const ra = (a.center ? R_SATOSHI : R_CANDIDATE) + 6;
    const rb = (b.center ? R_SATOSHI : R_CANDIDATE) + 6;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy) || 1;
    const x1 = a.x + (dx / len) * ra;
    const y1 = a.y + (dy / len) * ra;
    const x2 = b.x - (dx / len) * rb;
    const y2 = b.y - (dy / len) * rb;
    // Slight quadratic bow so parallel-ish strings read as strings on a
    // board rather than a wire diagram; bow is perpendicular, tiny.
    const mx = (x1 + x2) / 2 + (-dy / len) * 14;
    const my = (y1 + y2) / 2 + (dx / len) * 14;
    const p = el('path', {
      d: `M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`,
      class: `srm-edge srm-e-${e.kind}`,
      fill: 'none',
      'data-a': e.a,
      'data-b': e.b,
    }, edgesG);
    const t = el('title', {}, p);
    t.textContent = e.label;
    return p;
  });

  // ---- nodes ----
  // n.href is optional: a board that only visualizes relationships (no
  // per-node destination page worth sending the reader to, e.g. because
  // the surrounding prose already links each person) omits it, and the
  // node renders as a plain <g> — hover/focus still work identically,
  // it just isn't a navigable link.
  const nodesG = el('g', { class: 'srm-nodes' }, svg);
  const nodeEls = {};
  model.nodes.forEach((n) => {
    const r = n.center ? R_SATOSHI : R_CANDIDATE;
    const ariaLabel = n.hook ? `${n.name} — ${n.hook}（${n.status}）` : n.name;
    const g = n.href
      ? el('a', {
          class: `srm-node${n.center ? ' srm-center' : ''}`,
          href: n.href,
          'data-slug': n.slug,
          'aria-label': ariaLabel,
        }, nodesG)
      : el('g', {
          class: `srm-node${n.center ? ' srm-center' : ''}`,
          tabindex: '0',
          role: 'button',
          'data-slug': n.slug,
          'aria-label': ariaLabel,
        }, nodesG);
    el('circle', { cx: n.x, cy: n.y, r, class: 'srm-ring' }, g);
    if (n.center) {
      const q = el('text', {
        x: n.x, y: n.y + 17, class: 'srm-q',
        'text-anchor': 'middle',
      }, g);
      q.textContent = '?';
    } else {
      const img = el('image', {
        x: n.x - (r - 3), y: n.y - (r - 3),
        width: (r - 3) * 2, height: (r - 3) * 2,
        'clip-path': `url(#srm-clip-${n.slug})`,
      }, g);
      img.setAttribute('href', n.avatar);
      img.setAttributeNS(XL, 'xlink:href', n.avatar);
    }
    const label = el('text', {
      x: n.x, y: n.y + r + 18, class: 'srm-name',
      'text-anchor': 'middle',
    }, g);
    label.textContent = n.name;
    nodeEls[n.slug] = g;
  });

  // ---- hover card ----
  const card = document.createElement('div');
  card.className = 'srm-card';
  card.setAttribute('aria-hidden', 'true');
  wrap.appendChild(card);

  function focus(slug) {
    svg.classList.add('srm-focus');
    const neighbors = new Set([slug]);
    edgeEls.forEach((p) => {
      if (p.dataset.a === slug || p.dataset.b === slug) {
        p.classList.add('srm-hl');
        neighbors.add(p.dataset.a);
        neighbors.add(p.dataset.b);
      }
    });
    Object.keys(nodeEls).forEach((s) => {
      nodeEls[s].classList.toggle('srm-hl', neighbors.has(s));
    });
    const n = byId[slug];
    if (n && n.hook) {
      card.innerHTML = '';
      const name = document.createElement('p');
      name.className = 'srm-card-name';
      name.textContent = n.name;
      const hook = document.createElement('p');
      hook.className = 'srm-card-hook';
      hook.textContent = n.hook;
      const status = document.createElement('p');
      status.className = 'srm-card-status';
      status.textContent = n.status;
      card.append(name, hook, status);
      // Position in wrapper coordinates (viewBox scales with width).
      // Cards open above the node by default; nodes near the top edge
      // flip below instead — above them there is only the intro text,
      // and the scroll wrapper clips anything past the SVG's top.
      const scale = svg.getBoundingClientRect().width / VIEW_W;
      const px = n.x * scale;
      const aboveTop = (n.y - R_CANDIDATE - 8) * scale;
      const below = aboveTop < 110;
      card.classList.toggle('below', below);
      card.style.left = `${Math.min(Math.max(px, 130), svg.getBoundingClientRect().width - 130)}px`;
      card.style.top = below
        ? `${(n.y + R_CANDIDATE + 26) * scale}px`
        : `${aboveTop}px`;
      card.classList.add('on');
    }
  }
  function blur() {
    svg.classList.remove('srm-focus');
    edgeEls.forEach((p) => p.classList.remove('srm-hl'));
    Object.keys(nodeEls).forEach((s) => nodeEls[s].classList.remove('srm-hl'));
    card.classList.remove('on');
  }

  Object.keys(nodeEls).forEach((slug) => {
    nodeEls[slug].addEventListener('mouseenter', () => focus(slug));
    nodeEls[slug].addEventListener('mouseleave', blur);
    nodeEls[slug].addEventListener('focus', () => focus(slug));
    nodeEls[slug].addEventListener('blur', blur);
  });
}
