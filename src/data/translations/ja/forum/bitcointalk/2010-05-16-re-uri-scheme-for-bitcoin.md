---
title: "返信: ビットコインのURIスキーム"
date: 2010-05-16T22:37:21.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg1132#msg1132"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ビットコインのURIスキーム」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/100/"
threadId: "bt-uri-scheme-for-bitcoin"
threadTitle: "URI-scheme for bitcoin"
threadPosition: 2
translationStatus: complete
---

[Karmicads、2010年5月1日 午前6:06:53の引用](https://bitcointalk.org/index.php?topic=55.msg1038#msg1038)FreenetのURIはこのようになっています:

[http://127.0.0.1:8888/USK@oshw3DxmJUt7q4ThF4dCez5IXbc9hCGcv0VuwLRCmeQ,ckeXv20F1gBzkqssB4RXHZ2nB1YRT8Pb8KYZk8wj-bs,AQACAAE/occamsrazor/6/f.pdf](http://127.0.0.1:8888/USK@oshw3DxmJUt7q4ThF4dCez5IXbc9hCGcv0VuwLRCmeQ,ckeXv20F1gBzkqssB4RXHZ2nB1YRT8Pb8KYZk8wj-bs,AQACAAE/occamsrazor/6/f.pdf)

そうですね、同じ方法で簡単にできます。例えば:
[http://127.0.0.1:8330/?to=](http://127.0.0.1:8330/?to=)<bitcoinaddress>;amount=<amount>

BitcoinはJSON-RPCのポート8332と同様に、ローカルループバックのポート8330で応答できます。HTTP応答を返すことになります。

[DataWraith、2010年5月2日 午前11:13:09の引用](https://bitcointalk.org/index.php?topic=55.msg1045#msg1045)ビットコインリンクは、magnet:よりもmailto:に近いものであるべきだと思います。

それは可能だと思います。

BitcoinがHTTP応答でHTMLのUIをユーザーに表示して処理することも可能ですが、ユーザーとしては、ウェブサイトが騙そうとしているのか、本当に自分のBitcoinサーバーと通信しているのか疑問に思うでしょう。

HTTP応答は、JavaScriptの戻るボタンに相当するHTMLにして、元のページに戻すだけでよいでしょう。その後、Bitcoinが「ビットコインを送る」ダイアログを、送付先のビットコインアドレスと金額が既に入力された状態でポップアップ表示します。メールアドレスが入力された新規メールがポップアップするmailto:リンクと同じように動作します。

127.0.0.1のループバックはマシン上のどのユーザーからもアクセス可能で、ユーザーごとの分離はありませんが、ダイアログのフィールドを事前入力する利便性機能を提供するだけなので問題ありません。送信を押す必要はまだあります。スペースやEnterを入力している最中にフォアグラウンドに飛び出してこないように、送信ボタンが選択されていない状態にする必要があります。
