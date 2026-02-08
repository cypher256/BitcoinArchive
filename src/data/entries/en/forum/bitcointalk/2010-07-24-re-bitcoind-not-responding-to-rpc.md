---
title: "Re: bitcoind not responding to RPC"
date: 2010-07-24T01:15:58.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=548.msg5419#msg5419"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"bitcoind not responding to RPC\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/262/"
---

Can anyone confirm if JSON-RPC over HTTP is supposed to use status 500 if the reply is an error reply?  I can't remember where I picked that up, maybe it's wrong.  It seems like 200 would make more sense unless there's something wrong with the mechanics of the HTTP request itself.  (and maybe that's what it said and I forgot and spread 500 to all error responses)
