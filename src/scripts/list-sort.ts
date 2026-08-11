// Shared client sort control for simple SSR entry-card listings with no
// search/facets: /tags, /sources, /keywords, /types, /participants. Re-sorts
// the existing SSR cards in place. Every card keeps all three date fields
// rendered by EntryDates; choosing an axis changes only the order. Sort choice
// is NOT persisted across reloads here — unlike /entries
// (src/scripts/entries-browse.ts), these are secondary listing surfaces
// where the page's own default order (e.g. /types/analysis sorts by
// updated date, everywhere else by event date) should reappear on a fresh
// visit rather than sticking to whatever the reader last picked.
//
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
