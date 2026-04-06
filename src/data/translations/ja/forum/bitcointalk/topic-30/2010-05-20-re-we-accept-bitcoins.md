---
title: "Re: ビットコイン受け付けます"
date: 2010-05-20T21:43:42.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=30.msg1169#msg1169"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ビットコイン受け付けます」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/106/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "DataWraith"
    date: "2010-05-19T10:52:42.000Z"
    sourceEntryId: "forum/bitcointalk/topic-30/2010-05-19-datawraith-msg1161"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> なぜそうなのか、ちょっと割り込んで質問していいだろうか？ Bitcoinが公開鍵暗号を使ってコインの所有権を移転するなら、受取人のみが読める短いメッセージを含めることは些細な問題のはずだと思うのだが。
<!-- /tone-skip -->
ほとんどそうだが、完全にはそうではない。BitcoinはEC-DSAを使用しており、これはデジタル署名のみが可能で、暗号化はできない。RSAは両方できるが、桁違いに大きく、実用的ではなかったため使用しなかった。
