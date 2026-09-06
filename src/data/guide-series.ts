/**
 * Shared source of truth for the 6-page beginner-guide series order
 * (L0 index -> G1..G5).
 *
 * Consumed by:
 *   - GuideSeriesNav.astro (renders the lightweight step indicator: the
 *     index page reads "Contents", the five topic pages read "Step 1 of 5"
 *     .. "Step 5 of 5" -- never counting the index as one of the parts)
 *   - src/pages/entries/[...slug].astro and src/pages/ja/entries/[...slug].astro
 *     (drive prev/next for guide entries along this same order, instead of
 *     the site-wide date sort used by every other entry type)
 *
 * Deliberately NOT modeled on design-series.ts's L0/L1/L2 levels: the guide
 * series has no cross-cutting tier, just a flat reading order. See
 * STYLE_GUIDE_CORE.md's "Guide entries" section for why this series avoids
 * DesignSeriesNav-style tree navigation entirely.
 *
 * When a new guide page is added, append it here in series order; both
 * consumers pick it up automatically.
 */

export interface GuideSeriesEntry {
  slug: string;
  step: number; // 0 for the L0 index; 1..5 for G1..G5
  titleEn: string;
  titleJa: string;
}

export const GUIDE_SERIES: GuideSeriesEntry[] = [
  {
    slug: '2026-05-23-how-bitcoin-works-visual-glossary',
    step: 0,
    titleEn: 'How Bitcoin actually works: a visual glossary from coins to consensus',
    titleJa: 'ビットコインの仕組み: コインから合意までのビジュアル用語集',
  },
  {
    slug: '2026-09-06-what-owning-a-bitcoin-actually-means',
    step: 1,
    titleEn: 'What owning a bitcoin actually means',
    titleJa: 'ビットコインを持つとは、実際どういうことか',
  },
  {
    slug: '2026-09-06-how-transactions-become-a-shared-ledger',
    step: 2,
    titleEn: 'How transactions become a shared ledger',
    titleJa: '取引はどうやって共有台帳になるのか',
  },
  {
    slug: '2026-09-06-what-miners-are-actually-racing-to-do',
    step: 3,
    titleEn: 'What miners are actually racing to do',
    titleJa: 'マイナーたちは実際、何を競っているのか',
  },
  {
    slug: '2026-09-06-what-happens-while-a-payment-is-unconfirmed',
    step: 4,
    titleEn: 'What happens while a payment is unconfirmed',
    titleJa: '送金が未承認のあいだ、何が起きているのか',
  },
  {
    slug: '2026-09-06-why-no-one-can-cheat-the-ledger',
    step: 5,
    titleEn: 'Why no one can cheat the ledger',
    titleJa: 'なぜ誰も台帳をごまかせないのか',
  },
];
