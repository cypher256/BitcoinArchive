---
title: "Re: JSON-RPCメソッドのアイデア：指定されたtxidより新しいトランザクションをリストする"
date: 2010-12-09T00:41:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28324#msg28324"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック2151におけるギャビン・アンドレセンの投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

「<txid>より後に発生したトランザクションを一覧する」を持たないもう一つの理由を追加しよう：

moveの「トランザクション」にはトランザクションIDがないが、アカウント残高には影響する（listtransactionsにも表示される）。

listtransactionsを呼び出して、返された最後のアイテムのtxidを保存しようとすると、コードがぐちゃぐちゃになる。「category」が「move」だった場合、txidは存在し*ない*…

ポーリングの排除について：かなり近いうちに「monitorreceived」パッチをクリーンアップする予定だ。トランザクションが入ってきたりブロックが承認されたりした時にURLにPOSTする…しかし「accounts」から学んだ教訓に基づいて再設計するためにじっくり考える必要がある。非常にミニマルなAPIになるかもしれない。通知は「おい、txid <123ae4221...>がN回の確認に達したぞ、gettransactionとgetbalanceを呼んで最新情報を取得した方がいいかもしれない」というものだ。
