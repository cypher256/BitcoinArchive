---
title: "Re: Content-Lengthヘッダーと500エラー"
date: 2010-08-03T21:26:26.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=689.msg7335#msg7335"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがContent-Lengthパラメータがない場合のサポートについて議論。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/311/"
translationStatus: complete
---

[Quote from: gavinandresen on August 03, 2010, 06:56:44 PM](https://bitcointalk.org/index.php?topic=689.msg7299#msg7299)[Quote from: jgarzik on August 03, 2010, 06:09:08 PM](https://bitcointalk.org/index.php?topic=689.msg7288#msg7288)bitcoinはContent-Lengthヘッダーを必要としますが、いくつかのJSON-RPCライブラリはそれを提供しません。Content-Lengthヘッダーがない場合、bitcoinは500 Internal Server Errorを返します。
Content-Lengthを提供しないJSONライブラリを具体的に教えてもらえますか？ ドキュメント化できると良いのですが。
Content-Lengthパラメータがない場合のサポートを試みるべきでしょう。ただし、ストリームを全面的に書き換えたくはありません。1文字ずつ読む必要があっても構いません。

編集：つまり、Content-Lengthをサポートしないライブラリが実際にある場合の話ですが。
