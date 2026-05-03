---
title: "Satoshi to Mike Hearn on client implementations and the 21 million coin limit (January 10, 2011)"
date: 2011-01-10T16:34:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread3.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Satoshi predicts the original software will become the industrial tool for GPU farms while client implementations drive UI innovation. He reveals the math reasoning behind the 21 million coin limit."
isSatoshi: true
tags:
  - "correspondence"
  - "bitcoinj"
  - "client-mode"
  - "encryption"
  - "coin-supply"
  - "gpu-mining"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

> Open source.

Perfect. Once your code shows how to simplify it down, other authors can follow your lead. Client is a less daunting challenge than full implementation. If it's within reach of more developers, they'll come up with more polished UI and other things I didn't think of. I expect the original software will become the industrial old thing used by GPU farms and pool servers.

BTW, later a good feature for a client version is to keep your private keys encrypted and you give your password each time you send.

> I managed to spend my first coins on the testnet with my app a few days ago, hopefully will get another chance to make progress this weekend. Probably will have something to show publically sometime in Feb, touch wood.

Great, keep me updated.

> > I wanted something that would be not too low if it was very popular and not too high if it wasn't.
>
> It'd be interesting to see the working for this. In some sense the number of coins is arbitrary as the nanocoin representation means the issuance is so huge it's practically infinite.

It works out to an even 10 minutes per block:
21000000 / (50 BTC * 24hrs * 365days * 4years * 2) = 5.99 blocks/hour

I fudged it to 364.58333 days/year. The halving of 50 BTC to 25 BTC is after 210000 blocks or around 3.9954 years, which is approximate anyway based on the retargeting mechanism's best effort.

I thought about 100 BTC and 42 million, but 42 million seemed high.

I wanted typical amounts to be in a familiar range. If you're tossing around 100000 units, it doesn't feel scarce. The brain is better able to work with numbers from 0.01 to 1000.

If it gets really big, the decimal can move two places and cents become the new coins.
