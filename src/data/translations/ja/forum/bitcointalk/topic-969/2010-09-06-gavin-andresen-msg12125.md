---
title: "Re: JSON-RPC APIからのHTTPステータスコード"
date: 2010-09-06T19:18:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=969.msg12125#msg12125"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック969におけるギャビン・アンドレセンの文脈投稿。msg12130の前。"
isSatoshi: false
tags: []
translationStatus: complete
---
この変更について今発言するか、永遠に黙っていてくれ...サトシはこの機能をBitcoinの次のバージョン（0.3.12）に含める予定だ。

JSON-RPC APIを使用している場合は、エラー条件の処理コードを確認すべきだ。繰り返しになるが、変更点はerrorメンバーがStringではなくObject（'code'と'message'フィールド付き）になり、method-not-foundの場合HTTPステータスコードが500ではなく404になる可能性があるということだ。
