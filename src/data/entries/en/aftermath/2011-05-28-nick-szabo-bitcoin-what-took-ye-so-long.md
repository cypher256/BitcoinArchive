---
title: "Nick Szabo: 'Bitcoin, what took ye so long?' — why digital cash took decades"
date: 2011-05-28T00:00:00Z
type: "article"
source: "unenumerated"
sourceUrl: "https://unenumerated.blogspot.com/2011/05/bitcoin-what-took-ye-so-long.html"
author: "Nick Szabo"
participants:
  - name: "Nick Szabo"
    slug: "nick-szabo"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Wei Dai"
    slug: "wei-dai"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "Nick Szabo discusses why Bitcoin took so long to be invented, the similarities and differences between bit gold and Bitcoin, and why 'nearly everybody who heard the general idea thought it was a very bad idea.'"
isSatoshi: false
tags:
  - "nick-szabo"
  - "bit-gold"
  - "origins"
  - "proof-of-work"
  - "deflation"
secondarySources:
  - name: "Gwern Mirror"
    url: "https://gwern.net/doc/www/unenumerated.blogspot.com/3ecbb48879787f383ef10206358e0a14adf2f5dd.html"
---

> While the security technology is very far from trivial, the "why" was by far the biggest stumbling block -- nearly everybody who heard the general idea thought it was a very bad idea.
>
> The short answer about why it took so long is that the bit gold/Bitcoin ideas were nowhere remotely close to being as obvious as gwern suggests.
>
> Only a few people had read of the bit gold ideas, which although I came up with them in 1998 (at the same time and on the same private mailing list where Dai was coming up with b-money -- it's a long story) were mostly not described in public until 2005, although various pieces of it I described earlier, for example the crucial Byzantine-replicated chain-of-signed-transactions part of it which I generalized into what I call secure property titles.
>
> Hardly anybody actually understands money. Money just doesn't work like that, I was told fervently and often. Gold couldn't work as money until it was already shiny or useful for electronics or something else besides money, they told me. This common argument coming ironically from libertarians who misinterpreted Menger's account of the origin of money as being the only way it could arise (rather than an account of how it could arise) and, in the same way misapplying Mises' regression theorem.
>
> Myself, Wei Dai, and Hal Finney were the only people I know of who liked the idea (or in Dai's case his related idea) enough to pursue it to any significant extent until Nakamoto (assuming Nakamoto is not really Finney or Dai). Only Finney (RPOW) and Nakamoto were motivated enough to actually implement such a scheme.
>
> Nakamoto improved a significant security shortcoming that my design had, namely by requiring proof-of-work to be a node in a Byzantine-resilient peer-to-peer system to greatly reduce the threat of an untrustworthy party controlling the majority of nodes.
>
> Instead of my automated market to account for the fact that the difficulty of puzzles can often radically change based on hardware improvements and cryptographic breakthroughs (i.e. discovering algorithms that can solve proofs-of-work faster), and the unpredictability of demand, Nakamoto designed a Byzantine-agreed algorithm adjusting the difficulty of puzzles. I can't decide whether this aspect of Bitcoin is more feature or more bug, but it does make it simpler.
>
> Bitcoin is not a list of cryptographic features, it's a very complex system of interacting mathematics and protocols in pursuit of what was a very unpopular goal.
>
> Bitcoin is far more susceptible to radical deflation than gold.

*[Published on the Unenumerated blog, May 28, 2011. Nick Szabo is the creator of the bit gold concept (1998/2005), a direct precursor to Bitcoin. While some have speculated Szabo could be Satoshi Nakamoto, he has denied this. His blog post discusses the intellectual history of digital cash and why the ideas took over a decade to materialize into a working system. The private mailing list Szabo refers to is "libtech," where both he and Wei Dai developed their respective digital currency concepts.]*
