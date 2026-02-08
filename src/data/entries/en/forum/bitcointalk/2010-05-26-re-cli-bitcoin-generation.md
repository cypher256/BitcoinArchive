---
title: "Re: CLI bitcoin generation"
date: 2010-05-26T20:09:34.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=145.msg1256#msg1256"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"CLI bitcoin generation\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/109/"
---

[Quote from: molybdenum on May 22, 2010, 06:44:20 PM](https://bitcointalk.org/index.php?topic=145.msg1194#msg1194)An optional parameter to specify the minimum number of blocks after that transaction (getallreceived 1 for current behavior, or just getallreceived, getallreceived 5 for the paranoid, getallreceived 0 for instant confirms)?
Yeah, that actually is what it is.  getallreceived 0 should do what you want.  (now it's renamed to listreceivedbyaddress 0)  The default is 1 confirmation, but I think in reality most digital goods and services can be 0 confirmations.  Like you say, if you need more than 0 confirmations, you could show two numbers, unconfirmed and available balance, so they immediately see their transaction went through.

listreceivedbyaddress [minconf=1] [includeempty=false]
[minconf] is the minimum number of confirmations before payments are included.
[includeempty] whether to include addresses that haven't received any payments.
Returns an array of objects containing:
  "address" : receiving address
  "label" : the label of the receiving address
  "amount" : total amount received by the address
  "confirmations" : number of confirmations of the most recent transaction included

or listreceivedbylabel if you're labelling addresses with their username.

So far I've concentrated on functions for web merchants, not so much on stuff for remote management of headless coin generators yet.
