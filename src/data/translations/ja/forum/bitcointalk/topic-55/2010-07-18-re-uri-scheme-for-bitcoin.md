---
title: "Re: Bitcoin 用 URI スキーム"
date: 2010-07-18T16:06:16.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg4008#msg4008"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「Bitcoin の URI スキーム」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/240/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "lachesis"
    personSlug: "lachesis"
    date: "2010-06-15T21:14:05.000Z"
    sourceEntryId: "forum/bitcointalk/topic-55/2010-06-16-lachesis-msg1597"
  - id: "q2"
    person: "sirius-m"
    personSlug: "martti-malmi"
    date: "2010-06-15T23:26:14.000Z"
    sourceEntryId: "forum/bitcointalk/topic-55/2010-06-16-sirius-msg1598"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> 問題を誤解していると思う。私のブラウザーは常に 127.0.0.1 にアクセスできる（奇妙な IE の設定やウイルスがなければ）。URL バーにアドレスを入力するかリンクをクリックすれば、正常に動作する。しかし、JavaScript を使ってドメイン間（または同じドメインの異なるポート間）で POST リクエストを完了することはできない。
<!-- /tone-skip -->

私もそう思っていた。

<!-- quote: q2 -->
<!-- tone-skip -->
> ええ、クロスドメインの JavaScript 呼び出しは禁止されているということを言いたかったのです。つまり、127.0.0.1 上にない JavaScript から 127.0.0.1 を呼び出すことはできません。考えてみると、ブラウザーが悪意のあるクロスドメイン JavaScript に人々の Facebook ページを変更させたら、かなり面白いことになりますね。
<!-- /tone-skip -->

JavaScript が 127.0.0.1 へのクロスドメイン POST リクエストを実行することが可能だという報告が入ってきた。他のドメインではなく、特にそのドメインだけだ。素晴らしい……

もしこれが事実であれば、ウェブブラウジングをするシステムで-server スイッチや bitcoind を使用しないでほしい。

パスワードフィールドの追加に取りかかる。
