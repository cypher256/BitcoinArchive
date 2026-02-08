---
title: "Re: URI-scheme for bitcoin"
date: 2010-05-16T22:37:21.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg1132#msg1132"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"URI-scheme for bitcoin\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/100/"
---

[Quote from: Karmicads on May 01, 2010, 06:06:53 AM](https://bitcointalk.org/index.php?topic=55.msg1038#msg1038)A freenet URI is like this:

[http://127.0.0.1:8888/USK@oshw3DxmJUt7q4ThF4dCez5IXbc9hCGcv0VuwLRCmeQ,ckeXv20F1gBzkqssB4RXHZ2nB1YRT8Pb8KYZk8wj-bs,AQACAAE/occamsrazor/6/f.pdf](http://127.0.0.1:8888/USK@oshw3DxmJUt7q4ThF4dCez5IXbc9hCGcv0VuwLRCmeQ,ckeXv20F1gBzkqssB4RXHZ2nB1YRT8Pb8KYZk8wj-bs,AQACAAE/occamsrazor/6/f.pdf)

There you go, we could easily do it the same way, like:
[http://127.0.0.1:8330/?to=](http://127.0.0.1:8330/?to=)<bitcoinaddress>;amount=<amount>

Bitcoin can answer port 8330 on local loopback just as it does for JSON-RPC on 8332.  It would give an HTTP answer.

[Quote from: DataWraith on May 02, 2010, 11:13:09 AM](https://bitcointalk.org/index.php?topic=55.msg1045#msg1045)A bitcoin-link should be more like mailto: than magnet: IMHO.

I think we can do that.

Although it would be possible for Bitcoin to take care of business in the HTTP response by presenting HTML UI to the user, as a user I would wonder if some website is trying to trick me or if I'm really talking to my own Bitcoin server.

The HTTP response could simply be HTML with the JavaScript equivalent of the back button, sending it back to the page.  Bitcoin then pops up the Send Bitcoins dialog with the destination bitcoin address and amount already filled in.  It would work just like a mailto: link that pops up a new email with the address filled in.

127.0.0.1 loopback is accessible by any user on the machine, it doesn't have per-user separation, but it's OK because it would only serve the convenience function of pre-filling the fields in a dialog.  You'd still have to press Send.  We'd have to make sure the Send button is not selected so it couldn't jump into the foreground while you're typing a space or enter.
