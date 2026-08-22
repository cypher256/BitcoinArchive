---
title: "Nick Szabo seeks help to implement bit gold (Unenumerated, April 2008)"
date: 2008-04-10T03:53:00Z
type: "web-document"
source: "unenumerated"
sourceUrl: "https://unenumerated.blogspot.com/2008/04/bit-gold-markets.html"
sourceNote: "A comment on Szabo's post \"Bit gold markets,\" replying to a reader named Byrne. The comment's own timestamp (verified against the page's showComment link, comment id c3741843833998921269) is April 10, 2008, 03:53 UTC. The URL path (2008/04) is consistent with this. The parent post's own displayed publish date on the live page is anomalous (currently shown as December 27, 2008) — a separate, unresolved timestamp discrepancy on Szabo's blog (see the identity-hypothesis entry's discussion of this anomaly), distinct from this comment's own timestamp. The live page currently labels every comment in this thread, including this one, as posted by \"Anonymous\" — a page-wide display artifact rather than evidence specific to this comment. The comment claims authorship of the post it replies to (\"the post above\"), and Bitcoin Magazine's Genesis Files retrospective independently attributes this exact request to Szabo."
author: "Nick Szabo"
participants:
  - name: "Nick Szabo"
    slug: "nick-szabo"
description: "In a comment on his Unenumerated blog replying to a reader's criticism of bit gold's tranching design, Nick Szabo asks for help building a demo. No one responds publicly."
isSatoshi: false
tags:
  - "nick-szabo"
  - "bit-gold"
  - "implementation"
  - "pre-bitcoin"
relatedEntries:
  - "aftermath/2008-04-10-nick-szabo-bit-gold-implementation-request"
---

Byrne: bit gold is no longer backed by the scarcity of solved puzzles -- it's backed by the scarcity of computer hardware, power, and programmers who specialize in high-performance computing. In other words, it devolves into a very inefficient and wasteful basket-commodity standard.

Per bit or per CPU cycle or per puzzle solved the costs of bit gold can come down quickly as technology improves or as more people start replacing SETI@home with BitGold@home -- that's why the bits generated one week are not, in contrast to atoms of gold, fungible with the bits generated next week -- the solution of which problem I describe in the post above: arbitrage, pooling, and tranching. The standard unit in bit gold is a tranch, for example a tranch of the pool of bits generated (puzzles solved) within a given week.

Bit gold is always backed by the scarcity of solved puzzles, but the puzzle solutions in a prior week are not of equal supply, and thus not of equal value, to the solutions of the next week. If all of a sudden ten times as many puzzles are being solved in week 52 as in week 51, they will be priced at about 10% of the value of the puzzles in week 51, and it will take 10 times as many puzzles to create the standard pool. Supply of pools is based on weeks: week 2 doubles the supply of pools over week 1, but week 100 can only increase the overall supply of pools by 1%, regardless of how many puzzles are solved.

All this is more wasteful than gold mining. CPU cycles spent generating bit gold get amortized over a large number of transactions using the commodity-based currency, just as occurs with the costs of gold mining. To be useful both gold and bit gold have to end up saving users more in transaction costs than is expended in the gold mining or the CPU running. They both save transaction costs by serving as stores of value and media of exchange, or as backing for fractional reserve currencies that do same, but bit gold will perform these monetary functions with greater security, lower storage costs, etc. than gold.

I suspect this is all obscure enough that (a) it may require most people to sit down and work it out for themselves carefully before it can be well understood, and (b) it would greatly benefit from a demonstration, an experimental market (with e.g. a trusted third party substituted for the complex security that would be needed for a real system). Anybody want to help me code one up?
