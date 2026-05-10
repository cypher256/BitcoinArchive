---
title: "Re: JSON-RPC API からの HTTP ステータスコード"
date: 2010-09-06T19:18:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=969.msg12125#msg12125"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 969 におけるギャビン・アンドレセンの文脈投稿。msg12130 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---
この変更について今発言するか、永遠に黙っていてくれ...サトシはこの機能を Bitcoin の次のバージョン（0.3.12）に含める予定だ。

JSON-RPC API を使用している場合は、エラー条件の処理コードを確認すべきだ。繰り返しになるが、変更点は error メンバーが String ではなく Object（'code'と'message'フィールド付き）になり、method-not-found の場合 HTTP ステータスコードが 500 ではなく 404 になる可能性があるということだ。
