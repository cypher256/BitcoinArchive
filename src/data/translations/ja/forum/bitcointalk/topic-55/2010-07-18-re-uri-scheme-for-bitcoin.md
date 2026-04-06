---
title: "Re: BitcoinのURIスキーム"
date: 2010-07-18T16:06:16.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg4008#msg4008"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「BitcoinのURIスキーム」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/240/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "lachesis"
    date: "2010-06-15T21:14:05.000Z"
  - id: "q2"
    person: "sirius-m"
    date: "2010-06-15T23:26:14.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> 問題を誤解していると思う。ブラウザはいつでも127.0.0.1にアクセスできる（奇妙なIE設定やウイルスがなければ）。アドレスバーにアドレスを入力したりリンクをクリックしたりすれば問題なく動作する。しかし、JavaScriptを使ってドメイン間（または同一ドメインの異なるポート間）でPOSTリクエストを実行することはできない。
<!-- /tone-skip -->

私もそう思っていた。

<!-- quote: q2 -->
<!-- tone-skip -->
> ええ、クロスドメインのJavaScript呼び出しは禁止されているということを言いたかったのです。つまり、127.0.0.1上にないJavaScriptから127.0.0.1を呼び出すことはできません。考えてみると、ブラウザが悪意のあるクロスドメインJavaScriptに人々のFacebookページを変更させたら、かなり面白いことになりますね。
<!-- /tone-skip -->

JavaScriptが127.0.0.1へのクロスドメインPOSTリクエストを実行することが可能だという報告が入ってきた。他のドメインではなく、特にそのドメインだけだ。素晴らしい……

もしこれが事実であれば、ウェブブラウジングをするシステムで-serverスイッチやbitcoindを使用しないでほしい。

パスワードフィールドの追加に取りかかる。
