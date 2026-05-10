---
title: "Re: sendtoaddress API コールの変更提案"
date: 2010-08-13T20:26:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=807.msg9096#msg9096"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 807 におけるギャビン・アンドレセンの文脈投稿。msg9134 の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-08-13T11:13:30.000Z"
    sourceEntryId: "forum/bitcointalk/topic-807/2010-08-13-jgarzik-msg9090"
---
<!-- quote: q1 -->
<!-- tone-skip -->
> tx-id以外の追加情報を返したい場合はどうなるのか？
>
> 将来の互換性のために、フラグは(a)現在の'sent'のみを返すか、(b)tx-idやその他のものを含むJSONマップを返すかの選択を提示すべきだと思う。
<!-- /tone-skip -->

'gettransaction tx_id' API コールは私のショートリストに入っている。

他の皆さんはどう思うか。sendtoaddress .... true は tx_id だけを返し、詳細が必要なら別の API コールを行う方式にすべきか？
それとも Array を返すべきか？
