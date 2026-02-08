---
title: "Warning: don't use -server or bitcoind where you web browse (v0.3.2 and lower)"
date: 2010-07-19T16:01:38.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=479.msg4263#msg4263"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"Warning: don't use -server or bitcoind where you web browse (v0.3.2 and lower)\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/247/"
---

Don't use the -server or -daemon switch or run bitcoind on a machine where you use a web browser.  It opens port 8332 on 127.0.0.1, the local loopback address, and you wouldn't think that web browsers could cross-site access it, but it is possible.

We're working on a release soon that puts a password on the JSON-RPC interface, but until then, avoid using the -server switch, and don't web browse on the same machine where bitcoind is running.

Update:
The JSON-RPC HTTP authentication feature in 0.3.3 solves this problem.
