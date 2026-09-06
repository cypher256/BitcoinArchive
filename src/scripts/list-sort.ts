// Shared client sort + filter controls for simple SSR entry-card listings
// with no search/facets: /tags, /sources, /keywords, /types, /participants.
// Neither talks to Algolia (that stays on /entries, src/scripts/entries-browse.ts).
//
// initListSort re-orders the cards. Every card keeps all three date fields
// rendered by EntryDates; choosing an axis changes only the order.
//
// A reader's sort choice persists per page (sessionStorage, keyed by
// location.pathname). Keying by the full path (not a shared key) means /types/analysis and
// /types/forum-post remember independently: picking "updated" on one
// type's page never leaks into a different type's page, which would
// otherwise fight the per-type server default these pages now render
// (see dateAxis.ts). This replaces an earlier design that deliberately
// persisted nothing, so every reload replayed the page's own default --
// that only made sense while every page shared one hardcoded default;
// now that the default itself varies by page, a reader's override should
// stick to the page they made it on.
export function initListSort(listId: string) {
  var list = document.getElementById(listId);
  if (!list) return;
  var cards = Array.prototype.slice.call(list.querySelectorAll('.entry-card'));
  var sortBtns = Array.prototype.slice.call(document.querySelectorAll('.sort-btn'));
  if (!sortBtns.length) return;
  var STORAGE_KEY = 'list-sort:' + location.pathname;
  function valOf(card: any, key: string) {
    if (key === 'created') return card.dataset.created || card.dataset.date || '';
    if (key === 'updated') return card.dataset.updated || card.dataset.date || '';
    return card.dataset.date || '';
  }
  function sortLabel(b: any) { return b.textContent.replace(/\s*[↑↓]$/, ''); }

  function render(key: string, order: string) {
    cards
      .slice()
      .sort(function(a: any, b: any) {
        var av = String(valOf(a, key)), bv = String(valOf(b, key));
        return order === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      })
      .forEach(function(c: any) {
        list!.appendChild(c);
      });
  }

  function activate(key: string, order: string) {
    sortBtns.forEach(function(b: any) {
      b.classList.remove('active');
      if (b.dataset.sort === key) {
        b.classList.add('active');
        b.dataset.order = order;
        b.textContent = sortLabel(b) + (order === 'asc' ? ' ↑' : ' ↓');
      } else {
        b.textContent = sortLabel(b) + (b.dataset.order === 'asc' ? ' ↑' : ' ↓');
      }
    });
    render(key, order);
  }

  sortBtns.forEach(function(btn: any) {
    btn.addEventListener('click', function() {
      var key = btn.dataset.sort, order = btn.dataset.order;
      if (btn.classList.contains('active')) order = order === 'asc' ? 'desc' : 'asc';
      activate(key, order);
      try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ key: key, order: order })); } catch (e) {}
    });
  });

  // Restore a reader's saved choice for this exact page, if any -- else
  // the server-rendered default (dateAxis.ts) stands as-is.
  try {
    var saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || 'null');
    if (saved && saved.key) activate(saved.key, saved.order);
  } catch (e) {}
}

// initListFilter hides/shows cards against EntryCard's own `data-filter`
// attribute (title + byline + description + co-participant names,
// lowercased -- see the comment on filterText in EntryCard.astro). That
// attribute already existed for a planned /entries quick-filter that was
// never wired up there (the design that shipped uses Algolia facets
// instead); reusing it here is why this needs no EntryCard change.
//
// Also updates #entry-count-num (if the page has one) to the visible
// count, and highlights the matched substring inside each visible card's
// title/description with <mark> -- both against the original, cached
// text so repeated typing/backspacing never compounds stale markup.
function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function initListFilter(listId: string, inputId: string, onUpdate?: (visible: any[]) => void) {
  var list = document.getElementById(listId);
  var input = document.getElementById(inputId) as HTMLInputElement | null;
  if (!list || !input) return;
  var cards = Array.prototype.slice.call(list.querySelectorAll('.entry-card'));
  var countEl = document.getElementById('entry-count-num');
  var originals = cards.map(function(c: any) {
    var titleEl = c.querySelector('.card-title');
    var descEl = c.querySelector('.card-description');
    return { titleEl: titleEl, descEl: descEl, title: titleEl ? titleEl.textContent : '', desc: descEl ? descEl.textContent : '' };
  });

  // Builds text + <mark> nodes directly (never innerHTML) so a title or
  // description that happens to contain "<"/">" -- or a query that
  // happens to match literal markup-shaped text -- can never be parsed
  // as HTML. text is trusted (EntryCard's own render output), but the
  // match boundaries come from a RegExp built out of user input, so the
  // *insertion* method still has to be markup-safe on principle.
  function applyHighlight(el: any, text: string, re: RegExp | null) {
    if (!el) return;
    if (!re) { el.textContent = text; return; }
    var frag = document.createDocumentFragment();
    var last = 0;
    text.replace(re, function(m: string, offset: number) {
      if (offset > last) frag.appendChild(document.createTextNode(text.slice(last, offset)));
      var mark = document.createElement('mark');
      mark.textContent = m;
      frag.appendChild(mark);
      last = offset + m.length;
      return m;
    });
    if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
    el.textContent = '';
    el.appendChild(frag);
  }

  input.addEventListener('input', function() {
    var raw = input!.value;
    var q = raw.toLowerCase();
    var re = raw ? new RegExp(escapeRegExp(raw), 'gi') : null;
    var visible: any[] = [];
    cards.forEach(function(c: any, i: number) {
      var hay = c.dataset.filter || '';
      var match = hay.indexOf(q) !== -1;
      c.style.display = match ? '' : 'none';
      if (match) visible.push(c);
      var o = originals[i];
      applyHighlight(o.titleEl, o.title, match ? re : null);
      applyHighlight(o.descEl, o.desc, match ? re : null);
    });
    if (countEl) countEl.textContent = String(visible.length);
    if (onUpdate) onUpdate(visible);
  });
}

// Shared client sort + filter for a category-INDEX page (/tags, /types,
// /sources, /participants, /keywords -- the page listing the categories
// themselves with counts, as distinct from a category's own detail page
// listing entries, which uses initListSort/initListFilter above and has
// a different DOM shape, .entry-card).
//
// Operates on `<li data-name data-count [data-filter]>` rows: data-name
// drives both the alphabetical sort and the filter's default haystack;
// an optional data-filter overrides the filter haystack when a richer
// search text is wanted (the /sources page also matches its
// description). Every one of these five pages had this exact logic
// pasted in as a per-page <script is:inline> block (identical except
// for the sessionStorage key) until they were consolidated here.
//
// data-name must already be locale-correct: for JA pages whose visible
// label is a translation of an English slug (tags, types, sources), this
// must be the translated text a JA reader actually sees and would type
// (e.g. "初心者ガイド", not "beginner-guide") -- this function only
// sorts/matches whatever text the page hands it, so it can't fix a page
// that passes the wrong one.
export function initCategoryList(listId: string, storageKey: string) {
  var list = document.getElementById(listId);
  var btns = Array.prototype.slice.call(document.querySelectorAll('.sort-btn'));
  if (!list || !btns.length) return;

  function getLabel(btn: any) {
    return btn.textContent.replace(/\s*[↑↓]$/, '');
  }

  function applySort(key: string, order: string) {
    var items = Array.prototype.slice.call(list!.querySelectorAll('li'));
    items.sort(function(a: any, b: any) {
      if (key === 'name') {
        var an = a.dataset.name || ''; var bn = b.dataset.name || '';
        return order === 'asc' ? an.localeCompare(bn) : bn.localeCompare(an);
      }
      var ac = parseInt(a.dataset.count) || 0; var bc = parseInt(b.dataset.count) || 0;
      return order === 'asc' ? ac - bc : bc - ac;
    });
    items.forEach(function(item: any) { list!.appendChild(item); });
  }

  function activateBtn(key: string, order: string) {
    btns.forEach(function(b: any) { b.classList.remove('active'); });
    btns.forEach(function(b: any) {
      if (b.dataset.sort === key) {
        b.classList.add('active');
        b.dataset.order = order;
        b.textContent = getLabel(b) + (order === 'asc' ? ' ↑' : ' ↓');
      }
    });
  }

  try {
    var saved = JSON.parse(sessionStorage.getItem(storageKey) || 'null');
    if (saved && saved.key) {
      activateBtn(saved.key, saved.order);
      applySort(saved.key, saved.order);
    }
  } catch (e) {}

  btns.forEach(function(btn: any) {
    btn.addEventListener('click', function() {
      var key = btn.dataset.sort;
      var order = btn.dataset.order;
      if (btn.classList.contains('active')) {
        order = order === 'asc' ? 'desc' : 'asc';
        btn.dataset.order = order;
      } else {
        btns.forEach(function(b: any) { b.classList.remove('active'); });
        btn.classList.add('active');
      }
      btn.textContent = getLabel(btn) + (order === 'asc' ? ' ↑' : ' ↓');
      applySort(key, order);
      try { sessionStorage.setItem(storageKey, JSON.stringify({ key: key, order: order })); } catch (e) {}
    });
  });

  var filterInput = document.getElementById('filter-input') as HTMLInputElement | null;
  if (filterInput) {
    filterInput.addEventListener('input', function() {
      var q = filterInput!.value.toLowerCase();
      var items = list!.querySelectorAll('li');
      items.forEach(function(item: any) {
        var haystack = item.dataset.filter || (item.dataset.name || '').toLowerCase();
        item.style.display = haystack.indexOf(q) !== -1 ? '' : 'none';
      });
    });
  }
}
