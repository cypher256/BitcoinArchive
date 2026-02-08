---
title: "Re: コインの窃盗"
date: 2010-07-25T20:01:40.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=571.msg5740#msg5740"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「コインの窃盗」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/271/"
threadId: "bt-stealing-coins"
threadTitle: "Stealing Coins"
threadPosition: 3
translationStatus: complete
---

[Quote from: knightmb on July 25, 2010, 07:44:02 PM](https://bitcointalk.org/index.php?topic=571.msg5736#msg5736)公開鍵123456がハッシュABCDを生成し、
かつ
公開鍵654321もハッシュABCDを生成するとわかったとしても、
*秘密鍵は依然としてわからない。*

しかしあなたの言うことでは、公開鍵654321さえあれば、公開鍵123456のふりをしてコインを使えるということですね。
それでも公開鍵654321で署名する必要があります。秘密鍵を知っている公開鍵を使って衝突を見つける必要があります。

ビットコインアドレスのトランザクションを要求する際、ハッシュに一致する公開鍵を提示し、その鍵で署名する必要があります。

Redのポイントは、安全でない公開鍵を素早く大量に生成することは簡単で、衝突を見つけた後にそれを破って秘密鍵を見つけることができるということです。

彼は、公開鍵が安全なものである必要がある場合、つまり素数を見つけるために相当な作業が必要なものである場合、ハッシュ関数単独よりも強度が増すと指摘しています。ブルートフォースを試みる人は、各試行ごとに鍵を生成するのに時間をかける必要があります。
