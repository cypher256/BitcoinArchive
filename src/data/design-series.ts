/**
 * Shared source of truth for the 12-page design-document series order
 * (L0 -> L1 #1..#8 -> L2 #9..#11).
 *
 * Consumed by:
 *   - DesignSeriesNav.astro (renders the tree-style table of contents)
 *   - src/pages/entries/[...slug].astro and src/pages/ja/entries/[...slug].astro
 *     (drive prev/next for design entries along this same order, instead of
 *     the site-wide date sort used by every other entry type -- all 12
 *     design pages share the same `date` frontmatter value, so the date
 *     sort has no real ordering signal for them and previously fell back to
 *     an arbitrary content-collection load order)
 *
 * When a new design page is added, append it here in series order; both
 * consumers pick it up automatically.
 */

export type Level = 'L0' | 'L1' | 'L2';

export interface SeriesEntry {
  slug: string;
  level: Level;
  index: number; // 0 for L0; 1..8 for L1; 9..11 for L2
  titleEn: string;
  titleJa: string;
}

export const DESIGN_SERIES: SeriesEntry[] = [
  {
    slug: '2009-01-03-bitcoin-system-design-overview',
    level: 'L0',
    index: 0,
    titleEn: 'System design overview',
    titleJa: 'システム全体設計',
  },
  {
    slug: '2009-01-03-bitcoin-p2p-network-design',
    level: 'L1',
    index: 1,
    titleEn: 'P2P network design',
    titleJa: 'P2P ネットワーク設計',
  },
  {
    slug: '2009-01-03-bitcoin-transaction-design',
    level: 'L1',
    index: 2,
    titleEn: 'Transaction design',
    titleJa: 'トランザクション設計',
  },
  {
    slug: '2009-01-03-bitcoin-block-chain-design',
    level: 'L1',
    index: 3,
    titleEn: 'Block & chain design',
    titleJa: 'ブロック・チェーン設計',
  },
  {
    slug: '2009-01-03-bitcoin-consensus-design',
    level: 'L1',
    index: 4,
    titleEn: 'Consensus design',
    titleJa: 'コンセンサス設計',
  },
  {
    slug: '2009-01-03-bitcoin-monetary-design',
    level: 'L1',
    index: 5,
    titleEn: 'Monetary design',
    titleJa: '貨幣設計',
  },
  {
    slug: '2009-01-03-bitcoin-cryptography-design',
    level: 'L1',
    index: 6,
    titleEn: 'Cryptography design',
    titleJa: '暗号設計',
  },
  {
    slug: '2009-01-03-bitcoin-storage-design',
    level: 'L1',
    index: 7,
    titleEn: 'Storage design',
    titleJa: 'ストレージ設計',
  },
  {
    slug: '2009-01-03-bitcoin-wallet-design',
    level: 'L1',
    index: 8,
    titleEn: 'Wallet design',
    titleJa: 'ウォレット設計',
  },
  {
    slug: '2009-01-03-bitcoin-architecture-evolution',
    level: 'L2',
    index: 9,
    titleEn: 'Architecture evolution (Satoshi era vs v27+)',
    titleJa: 'アーキテクチャー進化（サトシ時代 vs v27+）',
  },
  {
    slug: '2009-01-03-bitcoin-ecosystem-design',
    level: 'L2',
    index: 10,
    titleEn: 'Ecosystem design (Layer 2, sidechains)',
    titleJa: 'エコシステム設計（Layer 2・サイドチェーン）',
  },
  {
    slug: '2009-01-03-bitcoin-security-model',
    level: 'L2',
    index: 11,
    titleEn: 'Security model',
    titleJa: 'セキュリティーモデル',
  },
];
