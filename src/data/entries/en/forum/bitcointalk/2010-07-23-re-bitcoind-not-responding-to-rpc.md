---
title: "Re: bitcoind not responding to RPC"
date: 2010-07-23T17:23:47.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=548.msg5339#msg5339"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"bitcoind not responding to RPC\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/257/"
threadId: "bt-bitcoind-not-responding-to-rpc"
threadTitle: "bitcoind not responding to RPC"
threadPosition: 1
---

If I recall correctly, 500 is the prescribed status code for JSON-RPC error responses.  There is still a JSON response in the body of the reply telling the explanation of the error, which could be something like {"result":"","error":"bitcoin address not found","id":"1"}.
