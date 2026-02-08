---
title: "Re: Always pay transaction fee?"
date: 2010-09-23T16:08:35.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=994.msg13829#msg13829"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Always pay transaction fee?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/457/"
threadId: "bt-always-pay-transaction-fee"
threadTitle: "Always pay transaction fee?"
threadPosition: 3
---

[Quote from: satoshi on September 08, 2010, 05:30:14 PM](https://bitcointalk.org/index.php?topic=994.msg12237#msg12237)The current threshold is 200KB per block, or about 1000 transactions per block.  I think it should be lowered to 50KB per block.  That would still be more than 100 times the average transactions per block.
I implemented this change in SVN rev 157.

The reason I previously made it so high was to allow very large transactions without hitting the transaction fee.  The threshold was around 26,000 BTC for transactions made of 50 BTC generated coins.  Even though it was 100 times easier to generate back then, only a few people ever encountered the fee at that level.  The new threshold puts it at around 11,000 BTC for sending generated coins.  It would mostly only be reached with generated bitcoins.  If you bought your bitcoins, they'll be denominated in larger transactions and won't be anywhere near the fee limit, unless you bought them in several hundred separate transactions.  Even if you do reach the fee level, you only have to pay it once to bundle your little transactions together.
