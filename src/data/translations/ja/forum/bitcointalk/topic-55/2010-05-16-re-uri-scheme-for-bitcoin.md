---
title: "Re: Bitcoin 用 URI スキーム"
date: 2010-05-16T22:37:21.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg1132#msg1132"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ビットコインの URI スキーム」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/100/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Karmicads"
    personSlug: "karmicads"
    date: "2010-04-30T21:06:53.000Z"
  - id: "q2"
    person: "DataWraith"
    personSlug: "datawraith"
    date: "2010-05-02T02:13:09.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> freenet URIはこのようなものだ：
<!-- /tone-skip -->

[http://127.0.0.1:8888/USK@oshw3DxmJUt7q4ThF4dCez5IXbc9hCGcv0VuwLRCmeQ,ckeXv20F1gBzkqssB4RXHZ2nB1YRT8Pb8KYZk8wj-bs,AQACAAE/occamsrazor/6/f.pdf](http://127.0.0.1:8888/USK@oshw3DxmJUt7q4ThF4dCez5IXbc9hCGcv0VuwLRCmeQ,ckeXv20F1gBzkqssB4RXHZ2nB1YRT8Pb8KYZk8wj-bs,AQACAAE/occamsrazor/6/f.pdf)

そうだな、同じ方法で簡単にできる。例えば:
[http://127.0.0.1:8330/?to=](http://127.0.0.1:8330/?to=)<bitcoinaddress>;amount=<amount>

Bitcoin は JSON-RPC のポート 8332 と同様に、ローカルループバックのポート 8330 で応答できる。HTTP 応答を返すことになる。

<!-- quote: q2 -->
<!-- tone-skip -->
> Bitcoin リンクは、magnet:よりも mailto:に近いものであるべきだと思う。
<!-- /tone-skip -->

それは可能だと思う。

Bitcoin が HTTP 応答で HTML の UI をユーザーに表示して処理することも可能だが、ユーザーとしては、ウェブサイトが騙そうとしているのか、本当に自分の Bitcoin サーバーと通信しているのか疑問に思うだろう。

HTTP 応答は、JavaScript の戻るボタンに相当する HTML にして、元のページに戻すだけでよいだろう。その後、Bitcoin が「ビットコインを送る」ダイアログを、送付先のビットコインアドレスと金額が既に入力された状態でポップアップ表示する。メールアドレスが入力された新規メールがポップアップする mailto:リンクと同じように動作する。

127.0.0.1 のループバックはマシン上のどのユーザーからもアクセス可能で、ユーザーごとの分離はないが、ダイアログのフィールドを事前入力する利便性機能を提供するだけなので問題ない。送信を押す必要はまだある。スペースや Enter を入力している最中にフォアグラウンドに飛び出してこないように、送信ボタンが選択されていない状態にする必要がある。
