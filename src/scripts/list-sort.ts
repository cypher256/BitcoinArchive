// Shared client sort control for simple SSR entry-card listings with no
// search/facets: /tags, /sources, /keywords, /types, /participants. Re-sorts
// the existing SSR cards in place; once the reader picks an axis, rewrites
// each card's date + label to match (see src/lib/dateAxis.ts). Sort choice
// is NOT persisted across reloads here — unlike /entries
// (src/scripts/entries-browse.ts), these are secondary listing surfaces
// where the page's own default order (e.g. /types/analysis sorts by
// updated date, everywhere else by event date) should reappear on a fresh
// visit rather than sticking to whatever the reader last picked.
//
// Labels come straight from ui.ts (a plain object, no astro:content
// dependency) keyed by <html lang>, so callers don't need to thread
// server-computed strings through define:vars/JSON just for this.
import { ui } from '../i18n/ui';

export function initListSort(listId: string) {
  var list = document.getElementById(listId);
  if (!list) return;
  var cards = Array.prototype.slice.call(list.querySelectorAll('.entry-card'));
  var sortBtns = Array.prototype.slice.call(document.querySelectorAll('.sort-btn'));
  if (!sortBtns.length) return;
  var L = document.documentElement.lang === 'ja';
  var dict: any = (ui as any)[L ? 'ja' : 'en'];
  var uiLabels = { event: dict['sort.postDate'], added: dict['sort.added'], updated: dict['sort.updated'] };

  function axisInfo(key: string) {
    if (key === 'created') return { attr: 'created', label: uiLabels.added };
    if (key === 'updated') return { attr: 'updated', label: uiLabels.updated };
    return { attr: 'date', label: uiLabels.event };
  }
  function valOf(card: any, key: string) {
    if (key === 'created') return card.dataset.created || card.dataset.date || '';
    if (key === 'updated') return card.dataset.updated || card.dataset.date || '';
    return card.dataset.date || '';
  }
  // Matches EntryCard's formatDate (toLocaleDateString, UTC, long month).
  function fmtDate(iso: string) {
    try { return new Date(iso).toLocaleDateString(L ? 'ja-JP' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }); } catch (e) { return ''; }
  }
  function sortLabel(b: any) { return b.textContent.replace(/\s*[↑↓]$/, ''); }

  function render(key: string, order: string) {
    var info = axisInfo(key);
    cards
      .slice()
      .sort(function(a: any, b: any) {
        var av = String(valOf(a, key)), bv = String(valOf(b, key));
        return order === 'asc' ? av.localeCompare(bv) : bv.localeCompare(av);
      })
      .forEach(function(c: any) {
        var iso = c.dataset[info.attr] || c.dataset.date;
        var labelEl = c.querySelector('.card-date-label');
        var timeEl = c.querySelector('.card-header time');
        if (labelEl) labelEl.textContent = info.label;
        if (timeEl && iso) { timeEl.textContent = fmtDate(iso); timeEl.setAttribute('datetime', iso); }
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
