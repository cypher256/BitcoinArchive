---
title: "Re: Hypothetical question on lost coins / transfers"
date: 2010-08-19T20:28:50.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=870.msg10300#msg10300"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Hypothetical question on lost coins / transfers\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/405/"
---

That's right.  You don't need to be re-broadcasting your transactions for it to work.

When any node disconnects a fork, it dumps all the transactions from the fork back into the transaction pool to add to the new chain.  The entire network is making sure to re-integrate your transactions again.  All you should see is that your number of confirmations starts over from 0.

In some types of forks, your transaction would have gotten into both forks already, so you're already good either way.
