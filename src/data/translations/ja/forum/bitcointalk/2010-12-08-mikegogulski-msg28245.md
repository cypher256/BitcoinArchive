---
title: "Re: JSON-RPCメソッドのアイデア：指定したtxidより新しい取引をリスト表示"
date: 2010-12-08T20:41:41.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28245#msg28245"
author: "mikegogulski"
participants:
  - name: "mikegogulski"
    slug: "mikegogulski"
description: "BitcoinTalkトピック2151におけるmikegogulskiの文脈投稿。msg28292の前。"
isSatoshi: false
threadId: "bt-json-rpc-method-idea-list-transactions-newer-than-"
tags: []
translationStatus: complete
---

I can see the motivation for davux's request. In developing the e-commerce plugins I've released, I've wondered about the viability long term of using a "dump" method against the wallet, since over time the data returned is just going to grow and grow.

What I'd prefer is being able to attach a JSON-RPC callback URL to an account or an address, maybe to be invoked each time a confirmation or any other status change to that account or address comes in, until the callback is cleared. That would eliminate the need for polling the wallet entirely.

I threw a "feature request" post in about that someplace.
