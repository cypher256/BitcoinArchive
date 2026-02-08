---
title: "Re: URI-scheme for bitcoin"
date: 2010-06-16T00:15:47.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg1596#msg1596"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"URI-scheme for bitcoin\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/123/"
threadId: "bt-uri-scheme-for-bitcoin"
threadTitle: "URI-scheme for bitcoin"
threadPosition: 3
---

[http://127.0.0.1:8330/?to=domain.com&amount=200.00&comment=order_12345](http://127.0.0.1:8330/?to=domain.com&amount=200.00&comment=order_12345)
or
[http://127.0.0.1:8330/?to=](http://127.0.0.1:8330/?to=)<bitcoinaddress><separatorchar>1.2.3.4&amount=200.00

But as long as the link is already doing the typing for you, I don't see much benefit in using a domain address instead of bitcoin address.  With a bitcoin address, the user can't send an unidentified payment.  They can't send payment until they've been given a correct bitcoin address to send to.

What would be nice about sending by domain is you could visually verify who it's going to.

A more crucial issue is what if the browser isn't allowed to connect to 127.0.0.1:
[http://bitcointalk.org/index.php?topic=63.msg1589#msg1589](http://bitcointalk.org/index.php?topic=63.msg1589#msg1589)

and if that's true, then what about that example freenet link that had 127.0.0.1 in it?
