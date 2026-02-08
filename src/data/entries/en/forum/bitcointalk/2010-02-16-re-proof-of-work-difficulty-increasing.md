---
title: "Re: Proof-of-work difficulty increasing"
date: 2010-02-16T17:36:40.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg376#msg376"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Proof-of-work difficulty increasing\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/60/"
threadId: "bt-proof-of-work-difficulty-increasing"
threadTitle: "Proof-of-work difficulty increasing"
threadPosition: 4
---

[Quote from: Suggester on February 16, 2010, 02:15:49 AM](https://bitcointalk.org/index.php?topic=43.msg361#msg361)Satoshi, I figured it will take my modern core 2 duo about 20 hours of nonstop work to create ฿50.00! With older PCs it will take forever. People like to feel that they "own" something as soon as possible, is there a way to make the generation more divisible? So say, instead of making ฿50 every 20 hours, make ฿5 every 2 hours? 
I thought about that but there wasn't a practical way to do smaller increments.  The frequency of block generation is balanced between confirming transactions as fast as possible and the latency of the network.

The algorithm aims for an average of 6 blocks per hour.  If it was 5 bc and 60 per hour, there would be 10 times as many blocks and the initial block download would take 10 times as long.  It wouldn't work anyway because that would be only 1 minute average between blocks, too close to the broadcast latency when the network gets larger.
