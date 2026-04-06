---
title: "Re: IRCブートストラッピングについて"
date: 2010-06-18T14:08:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=84.msg1616#msg1616"
author: "DataWraith"
participants:
  - name: "DataWraith"
    slug: "datawraith"
description: "BitcoinTalkトピック84におけるDataWraithの文脈投稿。msg1781の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

eMuleがKADネットワークのブートストラッピングを処理する方法は、かなり最適に近いと思う：

既知のピアのリストはファイル（nodes.dat）に保存され、各クライアントがそのファイル内の既知ノードのリストを維持する（最長稼働時間でソートされていると思う――これはKademliaの固有の特性だが、それでも良いアイデアだ）。リリースされるクライアントには、静的IPアドレス上の信頼できるピアのアドレスを含むそのようなファイルが同梱されるべきで、そこから新しいクライアントが接続先のアドレスを取得できる（そして自分のファイルに保存する）。

「シードリスト」が古くなったり、サーバーがシャットダウンしたりした場合は、ネットワーク上の*誰にでも*自分のnodesファイルを公開してもらえばいい（たとえばrapidshareで）。すると、接続できるIPアドレスの最新リストが手に入る。
