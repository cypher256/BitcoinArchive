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
---

[Quote from: lachesis on June 16, 2010, 06:14:05 AM](#msg1597)
> [Quote from: satoshi on June 16, 2010, 12:15:47 AM](#msg1596)
> > [http://127.0.0.1:8330/?to=domain.com&amount=200.00&comment=order_12345](http://127.0.0.1:8330/?to=domain.com&amount=200.00&comment=order_12345)
> > または
> > [http://127.0.0.1:8330/?to=](http://127.0.0.1:8330/?to=)<bitcoinaddress><separatorchar>1.2.3.4&amount=200.00
> >
> > しかし、リンクがすでに入力を代行してくれる以上、ビットコインアドレスの代わりにドメインアドレスを使うことにそれほどの利点があるとは思えない。ビットコインアドレスであれば、ユーザーは身元不明の支払いを送ることができない。正しいビットコインアドレスが与えられるまで支払いを送ることができないのだ。
> >
> > ドメインで送信する良い点は、送信先を視覚的に確認できることだ。
> >
> > より重要な問題は、ブラウザが127.0.0.1に接続することを許可されていない場合はどうなるかということだ:
> > [topic 63](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-63/2010-03-02-the-madhatter-msg603/)
> >
> > そして、もしそうだとすると、127.0.0.1が含まれていたFreenetリンクの例はどうなるのだろうか？

私もそう思っていた。

<!-- tone-skip -->
[Quote from: sirius-m on June 16, 2010, 08:26:14 AM](#msg1598)
> ええ、クロスドメインのJavaScript呼び出しは禁止されているということを言いたかったのです。つまり、127.0.0.1上にないJavaScriptから127.0.0.1を呼び出すことはできません。考えてみると、ブラウザが悪意のあるクロスドメインJavaScriptに人々のFacebookページを変更させたら、かなり面白いことになりますね。
<!-- /tone-skip -->

JavaScriptが127.0.0.1へのクロスドメインPOSTリクエストを実行することが可能だという報告が入ってきた。他のドメインではなく、特にそのドメインだけだ。素晴らしい……

もしこれが事実であれば、ウェブブラウジングをするシステムで-serverスイッチやbitcoindを使用しないでほしい。

パスワードフィールドの追加に取りかかる。
