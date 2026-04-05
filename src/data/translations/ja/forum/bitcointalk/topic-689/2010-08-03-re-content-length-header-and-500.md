---
title: "Re: Content-Lengthヘッダーと500エラー"
date: 2010-08-03T21:26:26.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=689.msg7335#msg7335"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがContent-Lengthパラメータがない場合のサポートについて議論。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/311/"
translationStatus: complete
---

[Quote from: gavinandresen on August 03, 2010, 06:56:44 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-689/2010-08-03-gavin-andresen-msg7299/)
[Quote from: jgarzik on August 03, 2010, 06:09:08 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-689/2010-08-03-jgarzik-msg7288/)
> bitcoinはContent-Lengthヘッダを必要とするが、いくつかのJSON-RPCライブラリはそれを提供しない。Content-Lengthヘッダがない場合、bitcoinは500 Internal Server Errorを返す。

Content-Lengthを提供しないJSONライブラリを具体的に教えてもらえますか？ ドキュメント化できると良いのですが。
Content-Lengthパラメータがない場合のサポートを試みるべきだろう。ただし、ストリームを全面的に書き換えたくはない。1文字ずつ読む必要があっても構わない。

編集：つまり、Content-Lengthをサポートしないライブラリが実際にある場合の話だが。
