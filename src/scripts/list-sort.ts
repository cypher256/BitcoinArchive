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
export function initListFilter(listId: string, inputId: string) {
  var list = document.getElementById(listId);
  var input = document.getElementById(inputId) as HTMLInputElement | null;
  if (!list || !input) return;
  var cards = Array.prototype.slice.call(list.querySelectorAll('.entry-card'));
  input.addEventListener('input', function() {
    var q = input!.value.toLowerCase();
    cards.forEach(function(c: any) {
      var hay = c.dataset.filter || '';
      c.style.display = hay.indexOf(q) !== -1 ? '' : 'none';
    });
  });
}
