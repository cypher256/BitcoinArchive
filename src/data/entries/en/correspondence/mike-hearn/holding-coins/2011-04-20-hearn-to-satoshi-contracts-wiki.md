---
title: "Contracts wiki page, transaction replacement, and mining economics"
date: 2011-04-20T13:55:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread5.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearn offers to write a wiki page on Bitcoin contracts, asks about re-enabling transaction replacement, and asks whether Satoshi plans to rejoin the community. He raises the tragedy of the commons concern about mining fees."
isSatoshi: false
tags:
  - "correspondence"
  - "contracts"
  - "time-lock"
  - "transaction-replacement"
  - "protocol-ossification"
  - "transition"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Thanks, that's helpful. I'm understanding contracts better now.

So the issue with having an OP_TIME/OP_BLOCKNUMBER opcode is not only that the results can change after a re-org (you said that previously), but also that people could use it to produce transactions that cease to be valid entirely after a certain time and cause a fork. Kind of obvious in hindsight.

Google and trust is a complicated issue. Lots of people use our services despite having little trust in us. Some people start out trusting us but then read (often sensationalist or wrong) stories in the media that change their minds, and so on. This is one of the problems we have with phone verification ... a few people don't want to give us their phone number.

For this case it'd probably be OK because trust around data privacy is different to trust around obeying contracts. I'm sure nobody would doubt that Google will pay them back - I bet we'd have an even better credit rating than the US Government in that sense :-) But we have quite a high rate of false positives with our verifications and some people would suspect we were accidentally verifying users in order to accumulate big piles of coins with which to earn interest. I've seen much sillier conspiracy theories gain traction.

Besides, avoiding the need to trust big, complex institutions is much more BitCoin-ish. And I correctly suspected there was a way to do it I didn't understand yet so it's a good chance to learn more about BitCoin.

If I wrote a wiki page on how to build contracts with BitCoin, would you mind reviewing it?

I'm thinking it might be a good idea to re-enable transaction replacement soon because as the network grows, it will become harder and harder to upgrade. In one sense this is good as it makes it hard to change the fundamental rules of the system. On the other hand, we risk having a protocol which has many unused features because they aren't widely supported enough. HTTP suffered this fate with many of its verbs as well as features like pipelining.

Did you have any list of tasks for re-activation, some kind of audit or finishing off some code?

I had a few other things on my mind (as always). One is, are you planning on rejoining the community at some point (eg for code reviews), or is your plan to permanently step back from the limelight? One reason I'm peppering you with questions is I worry that much of BitCoins potential lies in careful use of currently inactive features, but there's little guidance on how to do it. And frankly, I don't think I'm smart enough to figure it all out on my own. Maybe theymos is, he seems to understand it well. But if one day you leave entirely, parts of the protocol might fall into disuse, which would be a shame.

Another is the economics of mining after the transition to a fully fee based system. Right now difficulty is roughly a function of the USD/BTC exchange rate and per-block inflation. When mining reward is set by the market, it might be possible for a "Tragedy of the commons" to occur in which everyone benefits from a high difficulty, but nobody specifically wants to pay fees to get it. Besides, valuing difficulty is quite hard as you never know what the capabilities of attackers are until it's too late. Would it be possible for fees to trend towards zero over time as some miner is always willing to accept cheaper transactions and as miners drop out, the difficulty adjusts so the delays never get too bad to tolerate?

As always thanks for your insights.
