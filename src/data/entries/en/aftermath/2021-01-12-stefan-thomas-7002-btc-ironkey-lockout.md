---
title: "Stefan Thomas's 7,002 BTC IronKey lockout — two password attempts left, hundreds of millions frozen"
date: 2021-01-12T00:00:00Z
type: "article"
source: "new-york-times"
sourceUrl: "https://www.nytimes.com/2021/01/12/technology/bitcoin-passwords-wallets-fortunes.html"
author: "Bitcoin Institute"
participants:
  - name: "Stefan Thomas"
    slug: "stefan-thomas"
description: "Stefan Thomas was paid 7,002 BTC in 2011 for a Bitcoin explainer video, stored the keys on a 10-attempt IronKey, and lost the password. By the 2021 NYT report, 2 of 10 attempts remain."
isSatoshi: false
tags:
  - "lost-bitcoin"
  - "forgotten-password"
  - "lost-keys"
  - "ironkey"
  - "iconic-losses"
secondarySources:
  - name: "Trakx — Stefan Thomas locked out of 7,002 BTC"
    url: "https://trakx.io/resources/insights/stefan-thomas-locked-out-of-7002-btc/"
  - name: "Bitcoin.com News — Stefan Thomas has two password guesses left before $840 million deletes itself forever"
    url: "https://news.bitcoin.com/he-still-has-two-password-guesses-left-before-840-million-deletes-itself-forever-49201/"
  - name: "Unciphered — public offer to recover Thomas's IronKey (2023)"
    url: "https://www.wired.com/story/unciphered-ironkey-password-cracking-bitcoin/"
relatedEntries:
  - analysis/2026-06-02-bitcoin-iconic-losses-overview
inlineLinkKeywords:
  - "IronKey"
---

![Dark illustration of a metallic USB security key at the center of a glowing amber ring of attempt markers, flanked by a padlock icon, a torn paper slip, and a stack of coin discs sealed behind a glass panel.](/BitcoinArchive/images/analysis/2021-01-12-stefan-thomas-7002-btc-ironkey-lockout-hero.png)

In early 2011, programmer and IRC enthusiast **Stefan Thomas** was paid roughly 7,002 BTC by an early Bitcoin user for producing the popular animated explainer video *What is Bitcoin?*. He stored the wallet's private key on an **IronKey** encrypted USB drive — a device designed for high-assurance enterprise key storage: after **ten consecutive incorrect password attempts**, its onboard controller auto-encrypts and erases the protected payload, making the contents cryptographically unrecoverable.

Thomas wrote the IronKey's master password down on a piece of paper. He lost the paper.

```mermaid
flowchart LR
    A["IronKey: 10 attempts allowed"]
    B["8 attempts used (NYT 2021)"]
    C["2 attempts remaining"]
    D["Self-encryption on 10th miss"]
    E["7,002 BTC permanently unrecoverable"]
    A --> B
    B --> C
    C -.10th wrong guess.-> D
    D --> E
    classDef warn fill:#ffff99,stroke:#c80
    class C,D,E warn
```

**The 2021 New York Times disclosure.** In a January 12, 2021 article titled "Lost Passwords Lock Millionaires Out of Their Bitcoin Fortunes," New York Times reporter Nathaniel Popper documented Thomas's situation. By that date Thomas had exhausted **eight of the ten password attempts**. Two attempts remain before the IronKey wipes itself. At publication BTC was trading near $33,000 / coin, putting the locked value above $220 million; later Bitcoin price levels have pushed the nominal value of the locked wallet into multi-hundred-millions of dollars and at times above $700 million.

**Thomas's professional standing.** Thomas has remained continuously active in the cryptocurrency engineering community throughout the lockout. He was an early [Ripple](/BitcoinArchive/entries/currency/2026-07-27-xrp-currency-overview/) engineer (Chief Technology Officer of Ripple Labs through 2018) and later founded the micropayment / web-monetization startup **Coil**. The lockout has not impaired his career; it is, by his own framing, a personal artifact rather than a financial crisis.

**Public recovery offers.** In late 2023 the cybersecurity firm **Unciphered** publicly announced a method for breaking IronKey models in the family of Thomas's device and offered to recover the wallet. Thomas declined the offer publicly, stating that he had committed earlier to two other recovery teams under prior agreements and could not unilaterally bring in a third. As of mid-2026 the device remains locked, no public report confirms a successful recovery, and Thomas reports keeping the IronKey "in a secure location" while consciously not making further password guesses.

**Why the story persists.** The Thomas case is a frequently cited illustration of **Bitcoin's irreversibility**: there is no recovery agent, no backend reset, no court order that can move a UTXO whose private key has been destroyed. The IronKey itself is doing exactly what enterprise security design promises — refusing to surrender its payload to anyone, including its rightful owner — and Bitcoin's protocol is doing exactly what Satoshi designed — treating an unspent output as immutably bound to its key. The result is that a working, well-engineered system has placed roughly 7,002 BTC permanently beyond reach.

The story is frequently grouped with [James Howells's discarded hard drive](/BitcoinArchive/entries/aftermath/2024-12-03-james-howells-7500-btc-newport-landfill/) and the [QuadrigaCX collapse following Gerald Cotten's death](/BitcoinArchive/entries/aftermath/2019-04-08-quadrigacx-gerald-cotten-death/) in roundups of "lost Bitcoin" — but the three are mechanistically distinct (forgotten password vs physical disposal vs exchange custody collapse). The [Bitcoin lost-coins overview](/BitcoinArchive/entries/analysis/2026-06-02-bitcoin-iconic-losses-overview/) sets them alongside other documented loss events and the underlying irreversibility lesson.
