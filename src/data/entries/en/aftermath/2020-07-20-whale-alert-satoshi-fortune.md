---
title: "Whale Alert's 'The Satoshi Fortune' — analysis confirms Satoshi mined ~1.125 million BTC"
date: 2020-07-20T00:00:00Z
type: "article"
source: "medium"
sourceUrl: "https://whale-alert.medium.com/the-satoshi-fortune-e49cf73f9a9b"
author: "Whale Alert"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Sergio Demian Lerner"
    slug: "sergio-demian-lerner"
description: "Whale Alert independent analysis confirmed Satoshi mined 1,125,150 BTC across 22,503 of the first 54,316 blocks, claiming ~48 computers (later disputed by Lerner's single-PC simulation)."
isSatoshi: false
tags:
  - "patoshi"
  - "mining"
  - "satoshi-fortune"
  - "hashrate"
  - "blockchain-analysis"
  - "network-security"
secondarySources:
  - name: "CoinDesk — Whale Alert Identifies 1.125 Million BTC as Satoshi's Stash"
    url: "https://www.coindesk.com/tech/2020/07/20/whale-alert-identifies-1125-million-btc-as-satoshis-stash/"
  - name: "Cointelegraph — $10.9 Billion Bitcoin Stash Proves Satoshi Is Still the Biggest Whale"
    url: "https://web.archive.org/web/20260315115000/https://cointelegraph.com/news/109-billion-bitcoin-stash-proves-satoshi-is-still-the-biggest-whale"
  - name: "Sergio Demian Lerner — The Well Deserved Fortune of Satoshi Nakamoto (2013)"
    url: "https://bitslog.com/2013/04/17/the-well-deserved-fortune-of-satoshi-nakamoto/"
  - name: "Sergio Demian Lerner — The Patoshi Mining Machine (August 22, 2020)"
    url: "https://bitslog.com/2020/08/22/the-patoshi-mining-machine/"
relatedEntries:
  - aftermath/2019-04-16-sergio-lerner-patoshi-naming
  - analysis/2008-10-31-bitcoin-digital-gold-structural-features
  - aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis
  - analysis/2026-07-09-bitcoin-ownership-map
translationStatus: complete
---

![A dark navy dashboard-style graphic featuring a rising golden line chart, a small network diagram of connected computer-node icons, a barrel overflowing with stacked gold coins next to a smaller coin stack, and a declining line graph trailing off to a dashed cutoff.](/BitcoinArchive/images/analysis/2020-07-20-whale-alert-satoshi-fortune-hero.png)

In July 2020, blockchain tracking service Whale Alert published "The Satoshi Fortune," an independent analysis of [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/)'s mining activity that largely corroborated earlier Patoshi research by [Sergio Demian Lerner](/BitcoinArchive/participants/sergio-demian-lerner/), while introducing its own interpretation of Satoshi's mining infrastructure.

## Key findings

- Satoshi mined **1,125,150 BTC** up to block 54,316
- **22,503** of the first 54,316 blocks were mined by the Patoshi miner
- Of these, only **50 blocks (907 BTC)** had ever been spent; the remaining **1,122,693 BTC** were untouched
- Estimated value at the time of publication: at least **$10.9 billion**

<!-- chart: wealth-race -->

These totals closely matched the estimates Sergio Lerner had already published in his [2019 Patoshi-naming update](/BitcoinArchive/entries/aftermath/2019-04-16-sergio-lerner-patoshi-naming/) — roughly 1.1 million BTC across about 22,000 blocks, derived independently through timestamp-inversion analysis.

## Mining behavior

Whale Alert found that Satoshi maintained a steady share of approximately **60% of the network hashrate** as the network grew, using an estimated **48 computers** (or CPU threads). Satoshi systematically adjusted processing power to mine approximately **3.6 blocks per hour**, ensuring sufficient hashrate to defend against a 51% attack while the network was still vulnerable.

**Note on the "48 computers" claim:** One month after this report, Sergio Demian Lerner published ["The Patoshi Mining Machine"](/BitcoinArchive/entries/aftermath/2020-08-22-sergio-lerner-patoshi-mining-machine/) (August 22, 2020), presenting a re-mining simulation that demonstrated the Patoshi miner used a **single high-end CPU with 5 parallel threads** — not 48+ separate computers. Lerner showed the nonce space was divided into 5 subranges with sequential scanning within each, producing a 78% high-value bias inconsistent with independent machines. Jameson Lopp's 2022 analysis further supported the single-PC thesis: during the "double helix" period (blocks 1400–1916), two mining instances competing for the same CPU cores produced only a 28% hashrate increase rather than the 100% expected from separate machines. The research consensus now favors a single multi-threaded PC.

## Intentional throttling

The analysis identified a pattern of deliberate hashrate reduction over time. As other miners joined the network, Satoshi did not compete for dominance but instead progressively decreased mining speed. The Patoshi miner was shut down entirely in **May 2010**, months before Satoshi's final communications.

## Conclusion

The report concluded: "The timing of the shutdown, the mining behavior, the systematic decrease in mining speed and the lack of spending strongly suggest that Satoshi was only interested in growing and protecting the young network." All but the 907 BTC noted above have never been spent, reinforcing the interpretation that Satoshi mined to bootstrap the network — not for personal enrichment. This figure was later folded into a wider survey of Satoshi's likely holdings that cross-checked it against Lerner's and BitMEX Research's independent estimates — see [Analyses estimate Satoshi Nakamoto's Bitcoin holdings at approximately 1.1 million BTC](/BitcoinArchive/entries/aftermath/2021-02-08-satoshi-bitcoin-holdings-analysis/).
