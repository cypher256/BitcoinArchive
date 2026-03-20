---
title: "URI-scheme for bitcoin"
date: 2010-02-16T11:51:42.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg377#msg377"
author: "ec"
participants:
  - name: "ec"
    slug: "ec"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "ec starts a discussion: URI-scheme for bitcoin."
isSatoshi: false
threadId: "bt-uri-scheme-for-bitcoin"
threadPosition: 1
tags: []
---

Hi, intrigued by the bitcoin-system, I have an idea:

The bitcoin addresses could be improved by implementing an [URI-scheme](http://en.wikipedia.org/wiki/URI_scheme) like e.g. torrent [magnet links](http://en.wikipedia.org/wiki/Magnet_URI_scheme).

So instead of *1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ*, we could more unambiguous say *[bitcoin:?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ](bitcoin:?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ)*, and even configure browsers to redirect clicks on such links to a bitcoin client. This would allow one to implement "donate buttons" on homepages, "pay buttons" on webshops etc.

If an IP should be included, URIs allow this as *[bitcoin://HOST_OR_IP:PORT?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ](bitcoin://HOST_OR_IP:PORT?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ)*. If wanted an amount could be specified as *[bitcoin:?amount=42.00;addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ](bitcoin:?amount=42.00;addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ)* (of course for the user to verify in the secure bitcoin-client).

Just my 0.02 &#3647; (return them to [bitcoin:?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ](bitcoin:?addr=1Nu6wZC7JSuh6h8nfKkSTZ4kp9U4f83hhZ) if you don't like them )
