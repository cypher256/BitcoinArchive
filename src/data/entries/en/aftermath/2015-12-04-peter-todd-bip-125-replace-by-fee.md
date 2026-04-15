---
title: "Peter Todd and David Harding formalize Replace-by-Fee in BIP 125"
date: 2015-12-04T00:00:00Z
type: "bip"
source: "github"
sourceUrl: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki"
author: "David A. Harding, Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "BIP 125 formalized opt-in Replace-by-Fee (RBF), allowing Bitcoin transaction senders to signal that their unconfirmed transactions may be replaced by higher-fee versions. The concept traces directly to Satoshi Nakamoto's original transaction replacement mechanism described on BitcoinTalk in December 2010 — the same thread where Peter Todd made his second-ever forum post."
isSatoshi: false
tags:
  - "peter-todd"
  - "bip"
  - "replace-by-fee"
  - "transaction-policy"
  - "satoshi-connection"
secondarySources:
  - name: "Bitcoin Wiki — Transaction replacement"
    url: "https://en.bitcoin.it/wiki/Transaction_replacement"
  - name: "BitcoinTalk — Fees in BitDNS confusion (original Satoshi discussion)"
    url: "https://bitcointalk.org/index.php?topic=2181.msg28918#msg28918"
  - name: "HBO — Money Electric: The Bitcoin Mystery"
    url: "https://www.hbo.com/movies/money-electric-the-bitcoin-mystery"
relatedEntries:
  - aftermath/2010-12-07-peter-todd-biography
  - aftermath/2010-12-07-retep-diaspora-invite-first-post
  - aftermath/2014-10-01-peter-todd-bip-65-checklocktimeverify
  - aftermath/2016-09-15-peter-todd-opentimestamps-announcement
  - aftermath/2016-10-22-peter-todd-zcash-trusted-setup
  - aftermath/2024-10-08-hbo-money-electric-peter-todd
  - bip/2015-11-03-bip-0125
---

On December 4, 2015, David A. Harding and Peter Todd published BIP 125: "Opt-in Full Replace-by-Fee Signaling." The proposal established a standard for Bitcoin transactions to signal their willingness to be replaced by higher-fee versions while still unconfirmed — formalizing a concept that Satoshi Nakamoto had first described five years earlier.

**Origin in Satoshi's design:**

The BIP's rationale explicitly traces the concept to Nakamoto's original Bitcoin implementation, which included a transaction replacement mechanism using nSequence numbers. Satoshi described this concept on BitcoinTalk in December 2010, explaining how senders could update transactions with higher fees. The feature was later removed from Bitcoin Core due to denial-of-service concerns.

**The December 2010 connection:**

On December 10, 2010, [Peter Todd](/BitcoinArchive/participants/peter-todd/) (then posting as ["retep"](/BitcoinArchive/entries/aftermath/2010-12-07-retep-diaspora-invite-first-post/)) replied to Satoshi's description of transaction replacement with a technical correction:

> "Of course, to be specific, the inputs and outputs can't match *exactly* if the second transaction has a transaction fee."

This was Todd's second-ever post on BitcoinTalk, made three days after registration. [Satoshi's last public forum post](/BitcoinArchive/entries/forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post/) came two days later. Five years afterward, Todd formalized the very concept Satoshi had been describing.

**How BIP 125 works:**

Transactions signal replaceability by setting any input's nSequence number below (0xffffffff - 1). Replacement transactions must: only have unconfirmed inputs from original transactions, pay higher absolute fees, meet minimum relay fee rates, and evict no more than 100 transactions total.

**Controversy:**

RBF was one of the most contentious changes in Bitcoin's history. Critics argued it broke "zero-confirmation" transactions that merchants relied on. Supporters countered that zero-confirmation transactions were never truly secure and that RBF aligned with Bitcoin's fee market design. The opt-in approach was a compromise — only transactions explicitly signaling replaceability could be replaced.

**Significance:**

BIP 125 completed what Satoshi had started. The original transaction replacement was removed as unsafe; Todd's opt-in version made it practical. Whether this represents a developer finishing a predecessor's work or — as the HBO documentary "Money Electric" controversially suggested — the same mind returning to complete an unfinished design, remains one of Bitcoin's most debated questions.
