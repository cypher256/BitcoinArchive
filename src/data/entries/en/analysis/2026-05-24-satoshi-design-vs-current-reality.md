---
title: "Satoshi's design intent vs Bitcoin's current reality — four axes of drift"
date: 2026-05-24T00:00:00Z
type: "analysis"
source: "bitcoin-institute"
sourceUrl: "https://bitcoininstitute.com/"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Where Bitcoin's current reality has drifted from Satoshi's design intent: four axes — mining (one-CPU-one-vote to ASIC oligopoly), custody (own keys to exchange IOUs), governance, and scaling."
isSatoshi: false
tags:
  - "design-intent"
  - "design-drift"
  - "centralization"
  - "custody"
  - "mining-centralization"
  - "governance"
  - "scaling"
  - "etf"
  - "explainer"
inlineLinkKeywords:
  - "design intent"
  - "design drift"
  - "one-CPU-one-vote"
  - "Not your keys, not your coins"
  - "self-custody"
  - "custodial"
relatedEntries:
  - analysis/2008-10-31-bitcoin-electronic-cash-vs-digital-gold
  - emails/cryptography/2008-10-31-bitcoin-whitepaper-final
  - analysis/2026-05-23-how-bitcoin-works-visual-glossary
  - aftermath/2014-02-28-mt-gox-bankruptcy
  - aftermath/2022-11-11-ftx-collapse
  - aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment
  - analysis/2015-08-15-bitcoin-fork-wars-as-not-oss
  - analysis/2026-05-18-mining-reward-exhaustion-fee-only-future
  - aftermath/2011-08-01-jihan-wu-biography
  - aftermath/2018-10-01-ray-dillinger-interview
  - aftermath/2011-04-26-satoshi-final-known-email
  - design/2009-01-03-bitcoin-system-design-overview
  - design/2009-01-03-bitcoin-architecture-evolution
  - analysis/2014-11-01-blockstream-centralization-claim
  - aftermath/2008-11-02-james-donald-biography
  - aftermath/2010-05-10-hanyecz-recalls-satoshi-gpu-pushback
  - analysis/2026-06-02-bitcoin-iconic-losses-overview
---

Bitcoin's protocol still runs almost unchanged from the rules [Satoshi Nakamoto](/BitcoinArchive/participants/satoshi-nakamoto/) wrote down in 2008. But the *user experience*, the *economic structure*, and the *governance reality* of the system have drifted considerably from the early design picture. Reading the [whitepaper](/BitcoinArchive/entries/emails/cryptography/2008-10-31-bitcoin-whitepaper-final/) or the [visual glossary](/BitcoinArchive/entries/analysis/2026-05-23-how-bitcoin-works-visual-glossary/) gives a faithful picture of the protocol but a misleading picture of what most users actually touch. This entry walks through four axes where the gap is largest, with pointers to the records.

| Axis | Early design picture | Current reality | Drift started |
|---|---|---|---|
| **Mining** | "one-CPU-one-vote" | ASIC oligopoly | 2010 GPU, 2013 ASIC |
| **Custody** | Each user holds private keys | Exchange IOUs / ETF wrappers | 2011 onwards (Mt. Gox) |
| **Governance** | Rough consensus among nodes | Bitcoin Core maintainers + large miners | Dec 2010 (Satoshi → Gavin handover) |
| **Scaling** | Direct P2P transactions | Layer-2 (SegWit/Lightning) + custodial off-chain | 2010 1 MB cap, 2017 SegWit |

## 1. Mining — "one-CPU-one-vote" → ASIC oligopoly

```mermaid
timeline
  title Mining hardware era
  2009 Jan : Satoshi era starts : CPU mining only
  2010 May : GPU mining starts : (Laszlo Hanyecz)
  2011 Apr : Satoshi disappears
  2011 : FPGA mining
  2013 Jan : First commercial ASIC : (Avalon)
  2013 Oct : Bitmain founded
  2015 - 2018 : Bitmain dominance era
  2020s : Industrial mining farms : (concentrated geography)
```

**Satoshi wrote** (whitepaper § 4, "Proof-of-Work"): *"Proof-of-work is essentially one-CPU-one-vote."* The implicit assumption was that mining would stay on general-purpose computers — anyone with a PC could participate, and the network's defence rested on a wide population of ordinary nodes also producing blocks.

**The reality.** Mining moved off PCs onto purpose-built chips called **ASICs** in 2013. Bitcoin's first commercial ASIC was the Avalon ASIC (January 2013); [Bitmain](/BitcoinArchive/participants/jihan-wu/), founded later that year, became the dominant manufacturer through the 2015 – 2018 era. A modern ASIC computes Bitcoin's hash function tens of millions of times faster per kilowatt-hour than any general-purpose computer, which means a PC running against ASIC competition burns electricity and produces nothing. Mining today is a heavy-industrial activity concentrated in a handful of pools and a handful of geographies, not a participatory side-activity of running a node.

**When the drift started.** GPU mining started in May 2010 (Laszlo Hanyecz, the same developer who later paid 10,000 BTC for pizza). Satoshi expressed unease at the time, asking Hanyecz to slow down — see [Hanyecz's account of the exchange](/BitcoinArchive/entries/aftermath/2010-05-10-hanyecz-recalls-satoshi-gpu-pushback/) for the recorded conversation. FPGA mining followed in 2011, and ASIC mining in 2013. Satoshi disappeared in April 2011, so the entire ASIC era is post-Satoshi. The chronology is documented; the *reason* for the departure is not (no surviving Satoshi statement ties leaving to the mining-hardware drift specifically).

**The centralisation consequence.** Worked through in [Ray Dillinger's 2018 interview](/BitcoinArchive/entries/aftermath/2018-10-01-ray-dillinger-interview/) and in [the mining-reward exhaustion analysis](/BitcoinArchive/entries/analysis/2026-05-18-mining-reward-exhaustion-fee-only-future/).

<!-- chart: lopp-hashrate-analysis -->

## 2. Custody — own your keys → exchange IOUs (and ETF wrappers)

```mermaid
flowchart LR
  subgraph DESIGN["Satoshi design"]
    U1[User] -->|holds private keys| W1[Wallet]
    W1 -->|signs tx, broadcasts| N[P2P network]
  end
  subgraph REAL["Current reality"]
    U2[Retail user] -->|deposits fiat| EX[Exchange<br/>Coinbase, Binance, etc.]
    EX -->|account balance = IOU| LEDGER[Internal ledger]
    INV[Institutional investor] -->|buys shares| ETF[Spot Bitcoin ETF<br/>BlackRock IBIT, Fidelity FBTC]
    ETF -->|fund holds BTC via| CUSTO[Institutional custodian]
    LEDGER -.->|cold storage| BC[Bitcoin chain]
    CUSTO -.-> BC
  end
```

**Satoshi wrote** (whitepaper § 1, "Introduction"): *"What is needed is an electronic payment system based on cryptographic proof instead of trust, allowing any two willing parties to transact directly with each other without the need for a trusted third party."* The design assumes each user holds their own private keys — that is the only way you can sign transactions yourself.

**The reality.** A large share of people who "own bitcoin" today — particularly those who acquired it through an exchange or an ETF — do not hold any keys. They have an account balance at an exchange (Coinbase, Binance, Kraken, etc.) or a share in a fund, which puts a "trusted third party" exactly where the whitepaper opens by ruling one out. Functionally these are bitcoin-denominated IOUs from custodial businesses, indistinguishable from a brokerage account. The community shorthand for this is *"not your keys, not your coins."*

**The institutional limit: spot ETFs.** The trend went further in January 2024 when the US SEC approved the first spot Bitcoin ETFs (BlackRock IBIT, Fidelity FBTC, etc.). ETF shareholders hold no bitcoin at all — only equity in a fund whose custodian holds bitcoin on their behalf. Within months these ETFs collectively held several hundred thousand BTC. This is the custody axis taken to its institutional limit: the "peer-to-peer electronic cash" of the whitepaper has, for most retail and institutional money, become a traditional asset class accessed through brokerage plumbing.

**Why it matters.** When the custodian fails, the IOU does not pay out. The [Mt. Gox bankruptcy in February 2014](/BitcoinArchive/entries/aftermath/2014-02-28-mt-gox-bankruptcy/) lost roughly 850,000 BTC of customer holdings; the [FTX collapse in November 2022](/BitcoinArchive/entries/aftermath/2022-11-11-ftx-collapse/) repeated the pattern with a different generation of operators. In each case the affected users had no protocol-level claim on any coin — they had a contractual claim against an insolvent company. This is the bank-failure mode Bitcoin was designed to make impossible at the protocol level, recreated above the protocol by user choice and product design. Both collapses are catalogued in more detail — alongside the other iconic Bitcoin loss cases, grouped by loss mechanism — in [Lost Bitcoin: Thomas, Howells, QuadrigaCX, Mt. Gox, FTX and the irreversibility lesson](/BitcoinArchive/entries/analysis/2026-06-02-bitcoin-iconic-losses-overview/).

## 3. Governance — distributed consensus → core developers + large miners

```mermaid
flowchart TB
  subgraph DESIGN["Satoshi design - rough consensus"]
    NS[Independent nodes] --- MS[Independent miners]
    MS -->|extend valid blocks| CHAIN1[Canonical chain]
  end
  subgraph REAL["Current reality - layered authority"]
    CORE[Bitcoin Core maintainers<br/>commit access]
    POOLS[Large mining pools]
    EXCHANGES[Major exchanges]
    USERS[Ordinary node operators]
    CORE -->|defines what software exists| POOLS
    CORE -->|defines what software exists| EXCHANGES
    POOLS -->|veto by choosing what to run| CORE
    EXCHANGES -->|veto by choosing what to run| CORE
    POOLS --> USERS
    EXCHANGES --> USERS
  end
```

**Satoshi wrote** (whitepaper § 5, "Network"): *"They [nodes] vote with their CPU power, expressing their acceptance of valid blocks by working on extending them..."* The picture is of consensus emerging mechanically from the work of many independent operators, with no privileged decision-maker.

**The reality.** Protocol changes today are gated by a layered web of actors: the Bitcoin Core software's maintainer team (a small group of contributors with commit access) sets what the canonical client can do; large mining pools, major exchanges, custodians, and economic node operators each carry an effective veto by deciding what software to run; ordinary node operators participate by choosing which version to install. The 2017 UASF episode showed that a coordinated user push *can* override miner preferences in principle, but the practical decision-making concentrates among the small number of actors with operational weight. The diagram below simplifies this to two layers for readability — in practice the influence relationships run between more parties than shown.

**When the drift started.** Three inflection points:
- December 2010: [Satoshi handed maintenance authority to Gavin Andresen](/BitcoinArchive/entries/aftermath/2011-04-26-satoshi-final-known-email/), without consulting Gavin first. Gavin in turn added four other developers to the commit list — chosen for being present and helpful rather than through any formal process. That is the seed of the modern Core maintainer team.
- 2015 – 2017: The block size war. See [Bitcoin Fork Wars as Not OSS](/BitcoinArchive/entries/analysis/2015-08-15-bitcoin-fork-wars-as-not-oss/). The conflict was decided through a combination of SegWit activation (BIP 141), the user-activated soft fork (UASF) pressure, the failure of the New York Agreement, and the Bitcoin Cash split — a multi-front political/economic process rather than the rough consensus the whitepaper describes.
- January 2016: [Mike Hearn declared the Bitcoin experiment failed](/BitcoinArchive/entries/aftermath/2016-01-14-mike-hearn-resolution-bitcoin-experiment/) and sold all his coins, citing the governance breakdown directly.

<!-- chart: fork-genealogy -->

## 4. Scaling — direct P2P transactions → layer-2 / off-chain

```mermaid
flowchart TB
  subgraph DESIGN["Satoshi design - one layer"]
    PAY1[Any payment] --> BC1[Bitcoin chain<br/>all transactions on-chain]
  end
  subgraph REAL["Current reality - three layers"]
    direction TB
    PAY2[Payment]
    PAY2 --> CEX[Custodial layer<br/>exchange-internal transfers]
    PAY2 --> LN[Layer-2: Lightning<br/>off-chain payment channels]
    PAY2 --> ETF2[ETF layer<br/>brokerage-internal transfers]
    LN -->|periodic settlement| BC2[Bitcoin L1<br/>~7 tx/sec, ~1 MB blocks]
    CEX -.->|cold-storage settlement| BC2
    ETF2 -.->|periodic in-kind| BC2
  end
```

**Satoshi wrote** (whitepaper § 1, "Introduction"): *"...allowing any two willing parties to transact directly with each other..."*. The implicit model was that ordinary payments would land on chain.

**The reality.** Bitcoin's 1 MB historical block size limit caps the chain at roughly 7 transactions per second (much less under realistic transaction sizes). Routine retail payments cannot fit; even if they could, fees would price them out during peak load. The actual scaling path has been two-layer: SegWit (BIP 141, activated 2017) made room for the Lightning Network, where payments move off chain and only periodic settlements touch the base layer. Custodial exchanges *also* function as scaling layers — internal transfers between two Coinbase accounts never reach the chain.

**The drift began** with the block-size discussion in 2010 (Satoshi's own provisional 1 MB cap, intended as anti-spam) and crystallised through the 2015 – 2017 [fork wars](/BitcoinArchive/entries/analysis/2015-08-15-bitcoin-fork-wars-as-not-oss/). For most everyday use today, Bitcoin functions less like the direct P2P cash the whitepaper invites a reader to imagine and more like a settlement layer beneath several stacked payment systems of varying trust — the outcome [James A. Donald anticipated by name in November 2008](/BitcoinArchive/participants/james-donald/), when he coined "bink" for a bitcoin bank and cast bitcoins as sitting beneath account money the way gold sat beneath the gold standard.

## What this is not

Pointing out drift is not arguing that Bitcoin failed. Some of these drifts are arguably unavoidable consequences of mass adoption: ASIC specialisation is what any economically valuable proof-of-work attracts, custodial exchanges exist because most people do not want the responsibility of key management, layer-2 scaling is the conservative path that preserves base-layer security. The point of this entry is only that any beginner-level description of Bitcoin that *omits* these four drifts is incomplete — readers will encounter the drifts in practice the moment they actually use a service, and reconciling the gap themselves without a map is harder than acknowledging the gap up front.

The [visual glossary](/BitcoinArchive/entries/analysis/2026-05-23-how-bitcoin-works-visual-glossary/) describes the protocol's basic shape as read from the whitepaper and the early design. This entry is its companion: the protocol is real and runs; the operational reality on top of it is also real, and is not the same thing.

This design-vs-current-reality analysis is treated as a load-bearing reference by [the bitcoin digital-gold structural-features analysis](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-digital-gold-structural-features/), which uses this entry as the documented account of the divergence between Satoshi's protocol design and the operational reality built on top of it.
