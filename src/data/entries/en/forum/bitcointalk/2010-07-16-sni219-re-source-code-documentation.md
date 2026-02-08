---
title: "Re: Source code documentation"
date: 2010-07-16T17:15:47.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3534#msg3534"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Source code documentation\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/219/"
threadId: "bt-source-code-documentation"
threadTitle: "Source code documentation"
threadPosition: 2
---

It's in init.cpp.

It's a wxWidgets app, so it doesn't have a main() function.  It may in a little while, since I'm pretty close to making bitcoind build w/o wxBase.  (it'll be in init.cpp)

Sorry about my choice of the filename "main.cpp", another possible name would have been "core.cpp".  It's much too late to change.  I still prefer main.cpp.

We're still in great need of sample code showing the recommended way to use the JSON-RPC functions, like for a basic account system on a typical storefront website.  Using getreceivedbylabel using the username as the label, changing to a new bitcoin address once the stored one for that account gets used.  I posted a sample code fragment on the forum somewhere.  (search on getreceivedbylabel or getnewaddress)  The sample code could be a plain vanilla bank site where you can deposit and send payments.
