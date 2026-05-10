---
title: "Re: JSON-RPC メソッドのアイデア：指定された txid より新しいトランザクションをリストする"
date: 2010-12-09T00:41:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2151.msg28324#msg28324"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 2151 におけるギャビン・アンドレセンの投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

「<txid>より後に発生したトランザクションを一覧する」を持たないもう一つの理由を追加しよう：

move の「トランザクション」にはトランザクション ID がないが、アカウント残高には影響する（listtransactions にも表示される）。

listtransactions を呼び出して、返された最後のアイテムの txid を保存しようとすると、コードがぐちゃぐちゃになる。「category」が「move」だった場合、txid は存在し*ない*…

ポーリングの排除について：かなり近いうちに「monitorreceived」パッチをクリーンアップする予定だ。トランザクションが入ってきたりブロックが承認されたりした時に URL に POST する…しかし「accounts」から学んだ教訓に基づいて再設計するためにじっくり考える必要がある。非常にミニマルな API になるかもしれない。通知は「おい、txid <123ae4221...>が N 回の確認に達したぞ、gettransaction と getbalance を呼んで最新情報を取得した方がいいかもしれない」というものだ。
