---
title: "返信: ビットコイン受け付けます"
date: 2010-05-20T21:43:42.000Z
source: bitcointalk
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
---

[DataWraith、2010年5月19日 午後7:52:42の引用](https://bitcointalk.org/index.php?topic=30.msg1161#msg1161)なぜそうなのかという質問を挟んでもよいですか？Bitcoinが公開鍵暗号を使ってコインの所有権を移転しているなら、受取人だけが読める短いメッセージを含めるのは簡単なことのように思えるのですが。
ほとんどそうですが、完全にはそうではありません。BitcoinはEC-DSAを使用しており、これはデジタル署名のみが可能で、暗号化はできません。RSAは両方できますが、桁違いに大きく、実用的ではなかったため使用しませんでした。
