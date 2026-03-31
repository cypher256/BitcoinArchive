---
title: "JSON-RPCメソッドのアイデア：指定されたtxidより新しいトランザクションをリストする"
date: 2010-12-08T08:07:21.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28160#msg28160"
author: "davux"
participants:
  - name: "davux"
    slug: "davux"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "davuxがスレッドを開始: JSON-RPCメソッドのアイデア：指定されたtxidより新しいトランザクションをリストする"
isSatoshi: false
threadId: "bt-json-rpc-method-idea-list-transactions-newer-than-"
tags: []
translationStatus: complete
---

特定のトランザクションIDより新しいトランザクションをリストするJSON-RPCメソッドがあれば非常に便利であろう。これにより、開発者は最新の既知のtxidを記録し、任意の頻度でそのメソッドをポーリングするだけで、新しいトランザクションを容易に監視できるようになる。

実現方法の一つとして、listtransactionsを拡張してオプションのtxid引数を受け付けるようにすることが考えられる：
Code:
