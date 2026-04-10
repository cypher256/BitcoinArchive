---
title: "Re: Bitcoin用URIスキーム"
date: 2010-05-16T22:37:21.000Z
type: "forum-post"
source: "bitcointalk"
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
> このアイデアについて誰か何かしているのか気になっている。このスレッドとここで説明されている素晴らしい開発に従って、インターネットブラウザ機能の実装の可能性を調査しているところだ。まずこれを試して、Firefoxアドオンが発展する中で他の機能と一緒に含めるのが、より簡単な最初の一歩かもしれない（学びながら進めている）。
<!-- /tone-skip -->

[http://127.0.0.1:8888/USK@oshw3DxmJUt7q4ThF4dCez5IXbc9hCGcv0VuwLRCmeQ,ckeXv20F1gBzkqssB4RXHZ2nB1YRT8Pb8KYZk8wj-bs,AQACAAE/occamsrazor/6/f.pdf](http://127.0.0.1:8888/USK@oshw3DxmJUt7q4ThF4dCez5IXbc9hCGcv0VuwLRCmeQ,ckeXv20F1gBzkqssB4RXHZ2nB1YRT8Pb8KYZk8wj-bs,AQACAAE/occamsrazor/6/f.pdf)

そうだな、同じ方法で簡単にできる。例えば:
[http://127.0.0.1:8330/?to=](http://127.0.0.1:8330/?to=)<bitcoinaddress>;amount=<amount>

BitcoinはJSON-RPCのポート8332と同様に、ローカルループバックのポート8330で応答できる。HTTP応答を返すことになる。

<!-- quote: q2 -->
<!-- tone-skip -->
> Karmicads、詳細な返信をありがとう。
<!-- /tone-skip -->

それは可能だと思う。

BitcoinがHTTP応答でHTMLのUIをユーザーに表示して処理することも可能だが、ユーザーとしては、ウェブサイトが騙そうとしているのか、本当に自分のBitcoinサーバーと通信しているのか疑問に思うだろう。

HTTP応答は、JavaScriptの戻るボタンに相当するHTMLにして、元のページに戻すだけでよいだろう。その後、Bitcoinが「ビットコインを送る」ダイアログを、送付先のビットコインアドレスと金額が既に入力された状態でポップアップ表示する。メールアドレスが入力された新規メールがポップアップするmailto:リンクと同じように動作する。

127.0.0.1のループバックはマシン上のどのユーザーからもアクセス可能で、ユーザーごとの分離はないが、ダイアログのフィールドを事前入力する利便性機能を提供するだけなので問題ない。送信を押す必要はまだある。スペースやEnterを入力している最中にフォアグラウンドに飛び出してこないように、送信ボタンが選択されていない状態にする必要がある。
