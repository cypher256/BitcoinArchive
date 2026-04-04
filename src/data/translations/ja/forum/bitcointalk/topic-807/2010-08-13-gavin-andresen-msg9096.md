---
title: "Re: (context post by Gavin Andresen)"
date: 2010-08-13T20:26:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=807.msg9096#msg9096"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック807におけるGavin Andresenのコンテキスト投稿。msg9134の前。"
isSatoshi: false
tags: []
translationStatus: complete
---
[Quote from: jgarzik on August 13, 2010, 08:13:30 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-807/2010-08-13-jgarzik-msg9090/)
> tx-id以外の追加情報を返したい場合はどうなるのか？
>
> 将来の互換性のために、フラグは(a)現在の'sent'のみを返すか、(b)tx-idやその他のものを含むJSONマップを返すかの選択を提示すべきだと思う。

'gettransaction tx_id' APIコールは私のショートリストに入っている。

他の皆さんはどう思うか。sendtoaddress .... true はtx_idだけを返し、詳細が必要なら別のAPIコールを行う方式にすべきか？
それともArrayを返すべきか？
