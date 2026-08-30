// Shared client sort + filter controls for simple SSR entry-card listings
// with no search/facets: /tags, /sources, /keywords, /types, /participants.
// Both operate on the existing SSR cards in place; neither talks to Algolia
// (that stays on /entries, src/scripts/entries-browse.ts) or persists across
// reloads -- these are secondary listing surfaces where the page's own
// default order/full list should reappear on a fresh visit rather than
// sticking to whatever the reader last picked or typed.
//
// initListSort re-orders the cards. Every card keeps all three date fields
// rendered by EntryDates; choosing an axis changes only the order.
export function initListSort(listId: string) {
  var list = document.getElementById(listId);
  if (!list) return;
  var cards = Array.prototype.slice.call(list.querySelectorAll('.entry-card'));
  var sortBtns = Array.prototype.slice.call(document.querySelectorAll('.sort-btn'));
  if (!sortBtns.length) return;
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

  sortBtns.forEach(function(btn: any) {
    btn.addEventListener('click', function() {
      var key = btn.dataset.sort, order = btn.dataset.order;
      if (btn.classList.contains('active')) order = order === 'asc' ? 'desc' : 'asc';
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
    });
  });
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
