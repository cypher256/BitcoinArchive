// @ts-nocheck
// Shared client logic for the /entries browse + search + sort surface (EN + JA).
//
// EN and JA were previously two near-identical copies of this script, inlined per
// page because the page passes server-computed, language-specific data (translated
// labels, katakana author names) to it via Astro `define:vars`, which only works on
// `is:inline` scripts. To remove that duplication the page now embeds that data as
// a JSON <script id="entries-config"> element and this single module reads it — so
// one file serves both languages and a fix lands in one place. The page keeps a
// small pre-paint guard `is:inline` (it must run during HTML parse, before this
// deferred module, to hide the list early).
//
// `algoliasearch` is provided as a global by the UMD <script> the page loads.

export function initEntriesBrowse() {
  var cfgEl = document.getElementById('entries-config');
  if (!cfgEl) return;
  var cfg = JSON.parse(cfgEl.textContent || '{}');
  var basePath = cfg.basePath, indexName = cfg.indexName, locale = cfg.locale,
      authorMeta = cfg.authorMeta, slugToName = cfg.slugToName,
      typeLabels = cfg.typeLabels, uiLabels = cfg.uiLabels;

  // ONE list, ONE set of controls — no modes, no seams.
  //   • Empty box  → browse the SSR cards (filter + sort + paginate, no Algolia).
  //   • Typing     → full-text search via Algolia: fetch ALL matches in one
  //                  request, then the SAME facets (sent as facetFilters) and the
  //                  SAME sort (applied client-side over the fetched hits) keep
  //                  working. So Type/Source/Satoshi AND sort affect the results
  //                  in both states; nothing visible is ever inert.
  var BROWSE_PAGE = 60;
  var FT_FETCH = 1000;   // Algolia max hits/request; one request covers a query.
  var MIN = 2;
  var SORT_KEY = 'entries-sort';

  var list = document.getElementById('entries-list');
  var cards = list ? Array.prototype.slice.call(list.querySelectorAll('.entry-card')) : [];
  var input = document.getElementById('entry-filter');
  var form = document.getElementById('search-form');
  var facetChecks = Array.prototype.slice.call(document.querySelectorAll('.facet-check'));
  var satoshiOnly = document.getElementById('satoshi-only');
  var sortBtns = Array.prototype.slice.call(document.querySelectorAll('.sort-btn'));
  var resultCount = document.getElementById('result-count');
  var countUnit = document.getElementById('count-unit');
  var showMore = document.getElementById('show-more');
  var noResults = document.getElementById('no-results');
  var clearBtn = document.getElementById('clear-filters');
  var searchResults = document.getElementById('search-results');
  if (!list || !input) return;

  var L = locale === 'ja';
  var shown = BROWSE_PAGE;
  // Default sort mirrors the SSR list order: "recently added" (created desc)
  // when git dates exist, else post-date desc. Kept in sync with the server so
  // the first paint and the first client render agree (no reflow on load).
  var hasCreatedBtn = sortBtns.some(function(b) { return b.dataset.sort === 'created'; });
  var sortState = hasCreatedBtn ? { key: 'created', order: 'desc' } : { key: 'date', order: 'desc' };
  // sort key -> { attr: card data-* suffix to read, label: date-axis label }.
  function axisInfo(key) {
    if (key === 'created') return { attr: 'created', label: uiLabels.added };
    if (key === 'updated') return { attr: 'updated', label: uiLabels.updated };
    return { attr: 'date', label: uiLabels.event };
  }
  var algolia = (typeof algoliasearch !== 'undefined')
    ? algoliasearch('FI2GZVF3TY', 'c0328bda37db1cc886aacffb2aed5425') : null;
  var hits = null, nbHits = 0; // current full-text hit set (null = browse mode); nbHits = true total
  var debounceTimer = null;

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function(c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function selectedFacet(facet) {
    var set = {};
    facetChecks.forEach(function(c) { if (c.dataset.facet === facet && c.checked) set[c.value] = true; });
    return set;
  }
  function isEmpty(o) { for (var k in o) { return false; } return true; }
  function anyRefinement() {
    return !isEmpty(selectedFacet('type')) || !isEmpty(selectedFacet('source')) || !!(satoshiOnly && satoshiOnly.checked);
  }

  // ---- sort (shared by both modes) ----
  function sortLabel(b) { return b.textContent.replace(/\s*[↑↓]$/, ''); }
  function valOf(rec, k) {
    if (k === 'created') return rec.createdTs || rec.dataset && rec.dataset.created || rec.date || '';
    if (k === 'updated') return rec.updatedTs || rec.dataset && rec.dataset.updated || rec.date || '';
    return (rec.dataset && rec.dataset.date) || rec.date || '';
  }
  function cmp(a, b) {
    var av = String(valOf(a, sortState.key)), bv = String(valOf(b, sortState.key));
    return sortState.order === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
  }

  // ---- browse (client-side, empty query) ----
  function matchBrowse(card, types, sources, sat) {
    if (sat && card.dataset.satoshi !== '1') return false;
    if (!isEmpty(types) && !types[card.dataset.type]) return false;
    if (!isEmpty(sources) && !sources[card.dataset.source]) return false;
    return true;
  }
  function renderBrowse() {
    var types = selectedFacet('type'), sources = selectedFacet('source'), sat = !!(satoshiOnly && satoshiOnly.checked);
    var matching = [];
    cards.forEach(function(card) {
      var ok = matchBrowse(card, types, sources, sat);
      card.classList.toggle('filtered-out', !ok);
      if (ok) matching.push(card);
    });
    matching.sort(cmp);
    // Rewrite each card's date + label to the active sort axis (idempotent;
    // fmtDate matches the SSR formatDate exactly, so this never alters text
    // for a card already on that axis). Fall back to the event date when a
    // git date is missing — same fallback the sort uses.
    var info = axisInfo(sortState.key);
    matching.forEach(function(c) {
      var iso = c.dataset[info.attr] || c.dataset.date;
      var labelEl = c.querySelector('.card-date-label');
      var timeEl = c.querySelector('.card-header time');
      if (labelEl) labelEl.textContent = info.label;
      if (timeEl && iso) { timeEl.textContent = fmtDate(iso); timeEl.setAttribute('datetime', iso); }
    });
    matching.forEach(function(c) { list.appendChild(c); });
    matching.forEach(function(c, i) { c.classList.toggle('paged-out', i >= shown); });
    resultCount.textContent = String(matching.length);
    if (countUnit) countUnit.textContent = L ? ' 件' : (matching.length === 1 ? ' entry' : ' entries');
    showMore.hidden = matching.length <= shown;
    noResults.hidden = matching.length !== 0;
  }

  // ---- full-text (Algolia fetch-all, then client sort + paginate) ----
  function facetFilters() {
    var f = [];
    var tk = Object.keys(selectedFacet('type')); if (tk.length) f.push(tk.map(function(t) { return 'type:' + t; }));
    var sk = Object.keys(selectedFacet('source')); if (sk.length) f.push(sk.map(function(s) { return 'source:' + s; }));
    if (satoshiOnly && satoshiOnly.checked) f.push(['isSatoshi:true']);
    return f;
  }
  // Match the browse EntryCard's date format (toLocaleDateString, UTC, long month).
  function fmtDate(d) {
    try {
      return new Date(d).toLocaleDateString(L ? 'ja-JP' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
    } catch (e) { return ''; }
  }
  // A participant-page link, matching EntryCard's localePath('/participants/<slug>/').
  function participantLink(slug, name, cls) {
    return '<a class="' + cls + '" href="' + basePath + (L ? '/ja' : '') + '/participants/' + slug + '/">' + esc(name) + '</a>';
  }
  // A full-text result card. Emits EntryCard's exact markup and class names so
  // the shared .entry-card rules in global.css render it identically to a browse
  // card: header (date-axis label + date + type badge), avatar + title, author
  // ↔ co-participants byline, description, and — only when the body itself
  // matched — the highlighted .ft-snippet excerpt.
  function hitCard(h) {
    var hr = h._highlightResult || {}, sr = h._snippetResult || {};
    // Merge adjacent <mark> runs (kuromoji wraps each Japanese morpheme in its
    // own <mark>) into one continuous highlight.
    var title = ((hr.title && hr.title.value) || esc(h.title)).replace(/<\/mark>\s*<mark>/g, '');
    var type = h.type || '';
    var isEditorial = type === 'analysis' || type === 'design' || type === 'article';
    // Date axis: every result shows the active sort axis (event / created /
    // updated) so the visible date always explains the order.
    var ai = axisInfo(sortState.key);
    var rawDate = ai.attr === 'created' ? (h.createdTs || h.date)
                : ai.attr === 'updated' ? (h.updatedTs || h.date)
                : h.date;
    var dateLabel = ai.label;
    var dateStr = rawDate ? fmtDate(rawDate) : '';
    var typeLabel = typeLabels[type] || type;
    // Byline: server-built authorMeta already ran findAuthorParticipant (incl.
    // handle aliases) and resolved the katakana display name.
    var am = authorMeta[h.author] || { slug: '', name: String(h.author == null ? '' : h.author) };
    var isSat = am.slug === 'satoshi-nakamoto' || String(h.author || '').toLowerCase() === 'satoshi nakamoto';
    var others = (h.participants || []).filter(function(p) {
      return am.slug ? p.slug !== am.slug : p.name !== h.author;
    });
    // Avatar: Bitcoin Institute for editorial types, else the byline participant.
    var avSlug = isEditorial ? 'bitcoin-institute' : am.slug;
    var avatar = !avSlug ? ''
      : avSlug === 'satoshi-nakamoto'
        ? '<span class="avatar card-author-avatar satoshi-av" aria-hidden="true">SN</span>'
        : '<img class="avatar card-author-avatar" src="' + basePath + '/avatars/' + avSlug + '.png" alt="" width="24" height="24" loading="lazy" />';
    // Body: always the description (same as the browse card). Add the matched
    // body snippet only when the body itself matched — a title/description-only
    // match then reads exactly like a browse card.
    var snipMatched = sr.body && sr.body.matchLevel && sr.body.matchLevel !== 'none';
    var snip = snipMatched ? String(sr.body.value).replace(/<\/mark>\s*<mark>/g, '') : '';
    var header = '<div class="card-header">'
      + (dateStr ? '<span class="card-date-label">' + esc(dateLabel) + '</span><time>' + esc(dateStr) + '</time>' : '')
      + (typeLabel ? '<span class="source-badge">' + esc(typeLabel) + '</span>' : '')
      + (type === 'biography' ? '<span class="biography-badge">' + esc(uiLabels.biography) + '</span>' : '')
      + '</div>';
    var authorEl = am.slug
      ? participantLink(am.slug, am.name, 'author-link' + (isSat ? ' satoshi' : ''))
      : '<span' + (isSat ? ' class="satoshi"' : '') + '>' + esc(am.name) + '</span>';
    var withEl = others.length
      ? '<span class="participants-with">&harr; ' + others.map(function(p) { return participantLink(p.slug, slugToName[p.slug] || p.name, 'participant-link'); }).join(', ') + '</span>'
      : '';
    var body = (h.description ? '<p class="card-description">' + esc(h.description) + '</p>' : '')
      + (snip ? '<p class="ft-snippet">' + snip + '</p>' : '');
    var href = basePath + h.url;
    return '<article class="entry-card">'
      + '<a href="' + href + '" class="card-link">'
        + header
        + '<div class="card-title-row">' + avatar + '<h3 class="card-title">' + title + '</h3></div>'
      + '</a>'
      + '<p class="card-author">' + authorEl + withEl + '</p>'
      + (body ? '<a href="' + href + '" class="card-link">' + body + '</a>' : '')
      + '</article>';
  }
  function renderSearch() {
    if (!hits) return;
    var sorted = hits.slice().sort(cmp);
    var page = sorted.slice(0, shown);
    searchResults.innerHTML = page.length
      ? page.map(hitCard).join('')
      : '';
    resultCount.textContent = String(nbHits);
    var capped = nbHits > hits.length;
    if (countUnit) countUnit.textContent = L
      ? (capped ? ' 件（本文検索・上位 ' + hits.length + ' 件を表示）' : ' 件（本文検索）')
      : (capped ? ' results (showing first ' + hits.length + ')' : (nbHits === 1 ? ' full-text result' : ' full-text results'));
    showMore.hidden = hits.length <= shown;
    noResults.hidden = nbHits !== 0;
  }
  function fetchSearch(q) {
    var ff = JSON.stringify(facetFilters());
    // Serve from the per-tab cache when the same query + refinements were just
    // run — so Back from a result (or re-typing the same word) renders instantly
    // without spending another Algolia request.
    try {
      var c = JSON.parse(sessionStorage.getItem('ftcache:' + indexName) || 'null');
      if (c && c.q === q && c.ff === ff) { hits = c.hits; nbHits = c.nbHits; renderSearch(); return; }
    } catch (e) {}
    if (!algolia) { hits = []; renderSearch(); return; }
    algolia.search([{ indexName: indexName, query: q, params: {
      hitsPerPage: FT_FETCH, facetFilters: facetFilters(),
      attributesToSnippet: ['body:35'], highlightPreTag: '<mark>', highlightPostTag: '</mark>', snippetEllipsisText: '…'
    } }]).then(function(r) {
      hits = r.results[0].hits || [];
      nbHits = r.results[0].nbHits || hits.length;
      try { sessionStorage.setItem('ftcache:' + indexName, JSON.stringify({ q: q, ff: ff, hits: hits, nbHits: nbHits })); } catch (e) {}
      renderSearch();
    }).catch(function() {
      hits = [];
      searchResults.innerHTML = '<p class="no-results">' + (L ? '検索でエラーが発生しました。' : 'Search error.') + '</p>';
      resultCount.textContent = '0';
    });
  }

  // ---- mode controller ----
  function setMode(searching) {
    list.hidden = searching;
    searchResults.hidden = !searching;
  }
  function update() {
    var q = input.value.trim();
    // Keep the query in the URL so Back / refresh / bookmark restore the search.
    try { history.replaceState(null, '', q ? (location.pathname + '?q=' + encodeURIComponent(q)) : location.pathname); } catch (e) {}
    if (clearBtn) clearBtn.hidden = !(q || anyRefinement());
    document.querySelectorAll('[data-badge]').forEach(function(b) {
      var f = b.getAttribute('data-badge');
      var n = Object.keys(selectedFacet(f)).length;
      if (n > 0) { b.textContent = ' (' + n + ')'; b.hidden = false; } else b.hidden = true;
    });
    if (q.length >= MIN) {
      setMode(true);
      searchResults.innerHTML = '<p class="no-results">' + (L ? '検索中…' : 'Searching…') + '</p>';
      fetchSearch(q);
    } else {
      hits = null;
      setMode(false);
      renderBrowse();
    }
  }
  function resetAndUpdate() { shown = BROWSE_PAGE; update(); }
  function debounced() { clearTimeout(debounceTimer); debounceTimer = setTimeout(resetAndUpdate, 300); }

  // ---- events ----
  input.addEventListener('input', debounced);
  if (form) form.addEventListener('submit', function(e) { e.preventDefault(); clearTimeout(debounceTimer); resetAndUpdate(); });
  facetChecks.forEach(function(c) { c.addEventListener('change', resetAndUpdate); });
  if (satoshiOnly) satoshiOnly.addEventListener('change', resetAndUpdate);
  if (showMore) showMore.addEventListener('click', function() {
    shown += BROWSE_PAGE;
    if (hits) renderSearch(); else renderBrowse();
  });
  if (clearBtn) clearBtn.addEventListener('click', function() {
    input.value = '';
    facetChecks.forEach(function(c) { c.checked = false; });
    if (satoshiOnly) satoshiOnly.checked = false;
    resetAndUpdate();
  });

  // ---- sort: works in both browse and search (re-sorts in place) ----
  function activateSort(key, order) {
    sortState.key = key; sortState.order = order;
    sortBtns.forEach(function(b) {
      b.classList.remove('active');
      if (b.dataset.sort === key) {
        b.classList.add('active');
        b.dataset.order = order;
        b.textContent = sortLabel(b) + (order === 'asc' ? ' ↑' : ' ↓');
      } else {
        b.textContent = sortLabel(b) + (b.dataset.order === 'asc' ? ' ↑' : ' ↓');
      }
    });
  }
  sortBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var key = btn.dataset.sort, order = btn.dataset.order;
      if (btn.classList.contains('active')) order = order === 'asc' ? 'desc' : 'asc';
      activateSort(key, order);
      try { sessionStorage.setItem(SORT_KEY, JSON.stringify({ key: key, order: order })); } catch (e) {}
      if (hits) renderSearch(); else renderBrowse();
    });
  });
  try { var saved = JSON.parse(sessionStorage.getItem(SORT_KEY)); if (saved && saved.key) activateSort(saved.key, saved.order); } catch (e) {}

  document.addEventListener('click', function(e) {
    document.querySelectorAll('details.facet[open]').forEach(function(d) {
      if (!d.contains(e.target)) d.removeAttribute('open');
    });
  });

  // Back/forward restore (especially mobile bfcache) does NOT re-run this script.
  // iOS Safari keeps the *display* (clear button, a stale results render, the count)
  // but DROPS the form field values — the search box AND the facet checkboxes
  // (type / source / Satoshi). Restoring only the query is not enough: resetAndUpdate
  // then reads the blanked checkboxes as the truth and silently rebuilds the list
  // with the refinements gone — same word, different result set. So save and restore
  // the WHOLE input state.
  //
  //   • Truth source: on pagehide (fires right before the page enters bfcache) save
  //     query + selected type/source facets + Satoshi flag — the exact state left
  //     behind, which survives the restore. Facets aren't in the URL, so this saved
  //     state is the ONLY place they can come back from. Fall back to URL / ftcache
  //     for the query alone only if we never got to save (e.g. no prior pagehide).
  //   • Keep the query visible: iOS may re-blank the search box with its OWN form
  //     restore AFTER this handler, at a non-deterministic time — a single re-set
  //     loses that race intermittently ("sometimes the word is gone"). Re-assert the
  //     query across a short window: while the box sits empty, put it back; the
  //     moment the user types something else, stop (real input is never overwritten).
  //   • Facets are restored ONCE here; no blank-and-restore loop is applied to them,
  //     because an unchecked box can't be told apart from the user un-checking it on
  //     return — a loop would fight the user. (The query loop is safe: empty vs a new
  //     word IS distinguishable.) If devices are seen to also late-drop checkboxes,
  //     revisit with a user-interaction guard rather than a blind loop.
  var STATE_KEY = 'entries-state:' + indexName;
  window.addEventListener('pagehide', function() {
    try {
      sessionStorage.setItem(STATE_KEY, JSON.stringify({
        q: input.value,
        type: Object.keys(selectedFacet('type')),
        source: Object.keys(selectedFacet('source')),
        sat: !!(satoshiOnly && satoshiOnly.checked)
      }));
    } catch (e) {}
  });
  function applyFacets(st) {
    var typeSet = {}, srcSet = {};
    (st.type || []).forEach(function(v) { typeSet[v] = true; });
    (st.source || []).forEach(function(v) { srcSet[v] = true; });
    facetChecks.forEach(function(c) {
      if (c.dataset.facet === 'type') c.checked = !!typeSet[c.value];
      else if (c.dataset.facet === 'source') c.checked = !!srcSet[c.value];
    });
    if (satoshiOnly) satoshiOnly.checked = !!st.sat;
  }
  function reassertQuery(qp) {
    if (!qp) return;
    var tries = 0;
    var id = setInterval(function() {
      tries++;
      if (input.value === '') input.value = qp;                   // iOS blanked it → restore
      else if (input.value !== qp) { clearInterval(id); return; } // user is typing → leave it
      if (tries >= 12) clearInterval(id);                         // ~600ms window, then give up
    }, 50);
  }
  window.addEventListener('pageshow', function(e) {
    if (!e.persisted) return;
    try {
      var st = null;
      try { st = JSON.parse(sessionStorage.getItem(STATE_KEY) || 'null'); } catch (e2) {}
      var qp;
      if (st) {
        qp = st.q || '';
        input.value = qp;
        applyFacets(st);            // bring type/source/Satoshi back, not just the word
      } else {
        qp = new URLSearchParams(location.search).get('q') || '';
        if (!qp) {
          var cached = JSON.parse(sessionStorage.getItem('ftcache:' + indexName) || 'null');
          if (cached && cached.q) qp = cached.q;
        }
        input.value = qp;
      }
      resetAndUpdate();             // rebuild the view from the now-restored inputs
      reassertQuery(qp);
    } catch (err) {}
  });

  // Restore the query from the URL (Back / refresh / shared link).
  try { var q0 = new URLSearchParams(location.search).get('q'); if (q0) input.value = q0; } catch (e) {}
  // Hand off the pre-paint hide: visibility is now owned by setMode()/list.hidden.
  try { document.documentElement.classList.remove('entries-searching'); } catch (e) {}
  update();
  // First sort+render is done; reveal the list hidden by the pre-paint guard.
  try { document.documentElement.classList.remove('entries-presort'); } catch (e) {}
}
