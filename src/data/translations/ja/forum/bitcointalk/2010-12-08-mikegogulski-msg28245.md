---
title: "Re: JSON-RPCメソッドのアイデア：指定txidより新しいトランザクション一覧"
date: 2010-12-08T20:41:41.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28245#msg28245"
author: "mikegogulski"
participants:
  - name: "mikegogulski"
    slug: "mikegogulski"
description: "BitcoinTalkトピック2151におけるmikegogulskiの投稿。msg28292の前。"
isSatoshi: false
threadId: "bt-json-rpc-method-idea-list-transactions-newer-than-"
tags: []
translationStatus: complete
---

davuxのリクエストの動機は理解できる。自分がリリースしたeコマースプラグインの開発で、ウォレットに対する「ダンプ」メソッドの使用が長期的に実用的かどうか疑問に思っていた。時間とともに返されるデータは増え続ける一方だからだ。

自分が望むのは、アカウントまたはアドレスにJSON-RPCコールバックURLを紐づけ、そのアカウントやアドレスに確認やその他のステータス変更が来るたびに呼び出され、コールバックがクリアされるまで続く仕組みだ。これによりウォレットのポーリングの必要性が完全になくなる。

どこかに「機能リクエスト」の投稿をした。
