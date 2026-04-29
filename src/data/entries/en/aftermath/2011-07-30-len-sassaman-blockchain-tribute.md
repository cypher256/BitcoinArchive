---
title: "Dan Kaminsky's Len Sassaman tribute embedded in the Bitcoin blockchain"
date: 2011-07-30T00:00:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Len_Sassaman"
author: "Dan Kaminsky"
participants:
  - name: "Dan Kaminsky"
    slug: "dan-kaminsky"
  - name: "Len Sassaman"
    slug: "len-sassaman"
description: "Following the death of cypherpunk and cryptographer Len Sassaman on July 3, 2011, security researcher Dan Kaminsky embedded an ASCII-art memorial to Sassaman into the Bitcoin blockchain. The tribute was announced on July 30, 2011 and publicly revealed at Black Hat USA 2011 (Las Vegas). It was one of the earliest large memorial inscriptions stored in Bitcoin's permanent ledger -- a use of the blockchain as durable cultural artifact rather than monetary record."
isSatoshi: false
tags:
  - "dan-kaminsky"
  - "len-sassaman"
  - "blockchain"
  - "memorial"
  - "obituary"
  - "historic"
secondarySources:
  - name: "Wikipedia — Len Sassaman"
    url: "https://en.wikipedia.org/wiki/Len_Sassaman"
  - name: "Black Hat USA 2011 — Black Ops of TCP/IP (Kaminsky slides)"
    url: "https://www.slideshare.net/dakami/black-ops-of-tcpip-2011-black-hat-usa-2011"
relatedEntries:
  - aftermath/2011-07-03-len-sassaman-biography
  - aftermath/2011-10-10-dan-kaminsky-bitcoin-security
  - analysis/2011-07-03-sassaman-satoshi-identity-hypothesis
---

[Len Sassaman](/BitcoinArchive/participants/len-sassaman/) — cypherpunk, cryptographer, lead developer of the Mixmaster anonymous remailer, and PhD candidate at KU Leuven — [died on July 3, 2011](/BitcoinArchive/participants/len-sassaman/). His widow, the cryptographer and researcher Meredith Patterson, confirmed the death was suicide.

Within weeks, [Dan Kaminsky](/BitcoinArchive/participants/dan-kaminsky/) — the security researcher who had earlier [reviewed the Bitcoin v0.1 code and concluded "either there's a team of people who worked on this, or this guy is a genius"](/BitcoinArchive/entries/aftermath/2011-10-10-dan-kaminsky-bitcoin-security/) — embedded an ASCII-art memorial to Sassaman directly into the Bitcoin blockchain. The tribute was announced on July 30, 2011, and publicly revealed at the Black Hat USA 2011 conference in Las Vegas.

The technique used the blockchain as a durable, censorship-resistant medium for non-monetary content: the inscription was encoded across transaction outputs in such a way that the data persists permanently in every full Bitcoin node's copy of the ledger, even though no transaction was ever expected to spend those outputs. This was several years before `OP_RETURN` was formally added to Bitcoin Core (2014) as a sanctioned mechanism for embedding small payloads, so Kaminsky's encoding worked through then-existing transaction-script primitives.

**Significance:**

- It is one of the earliest publicly-known cultural inscriptions stored in the Bitcoin blockchain at scale, predating the formal `OP_RETURN` mechanism.
- It established a pattern — the blockchain as a permanent memorial substrate — that has since been used for many other purposes (artwork, dedications, political messages, NFTs).
- It connected two distinct streams of Bitcoin's early environment: Kaminsky as the most prominent external-security reviewer of v0.1, and Sassaman as a senior figure of the cypherpunk movement whose work on remailers and anonymity tooling had run for two decades.

**On the Satoshi-identity question:**

The blockchain tribute itself is independent of any speculation about Satoshi's identity. Kaminsky's inscription is a memorial by a colleague (and cryptographic peer) in the cypherpunk community; it carries no implicit claim about whether Sassaman had any role in Bitcoin's design. The separate identity hypothesis (Sassaman as Satoshi) was first proposed in public years later (BitcoinTalk thread March 2013; Evan Hatch article 2021) and is documented separately in the [editorial analysis of the Sassaman = Satoshi hypothesis](/BitcoinArchive/entries/analysis/2011-07-03-sassaman-satoshi-identity-hypothesis/). This entry records only the memorial event itself.

*[Editor: this entry documents the Kaminsky → Sassaman blockchain tribute as a discrete historical fact. The Wikipedia citation for the announcement date (July 30, 2011) and the Black Hat USA 2011 reveal is the primary anchor; if a more specific block height, transaction hash, or full inscribed text becomes available in future research, this entry should be updated to include it. The current write-up describes the event at the level the public record supports without overcommitting to specific blockchain coordinates that the editor has not directly verified.]*
