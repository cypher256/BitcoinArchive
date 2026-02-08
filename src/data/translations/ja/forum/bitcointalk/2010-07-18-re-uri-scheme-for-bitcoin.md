---
title: "Re: BitcoinのURIスキーム"
date: 2010-07-18T16:06:16.000Z
source: bitcointalk
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
threadId: "bt-uri-scheme-for-bitcoin"
threadTitle: "URI-scheme for bitcoin"
threadPosition: 4
translationStatus: complete
---

[Quote from: lachesis on June 16, 2010, 06:14:05 AM](https://bitcointalk.org/index.php?topic=55.msg1597#msg1597)問題を誤解していると思います。ブラウザは常に127.0.0.1にアクセスできます（IEの奇妙な設定やウイルスがない限り）。URLバーにアドレスを入力するかリンクをクリックすれば、問題なく動作します。ただし、JavaScriptを使用してドメイン間（または同じドメインの異なるポート間）でPOSTリクエストを完了することはできません。
私もそう思っていました。

[Quote from: sirius-m on June 16, 2010, 08:26:14 AM](https://bitcointalk.org/index.php?topic=55.msg1598#msg1598)はい、クロスドメインのJavaScript呼び出しは禁止されているので、127.0.0.1に存在しないJavaScriptから127.0.0.1を呼び出すことはできません、と言いたかったのです。考えてみると、ブラウザが悪意のあるクロスドメインJavaScriptで他の人のFacebookページを変更できるとしたら、かなり笑えますね。
JavaScriptが127.0.0.1へのクロスドメインPOSTリクエストを実行することが可能であるという報告が入ってきました。他のドメインではなく、特にそのドメインだけです。素晴らしい...

もしこれが事実であれば、ウェブブラウジングをするシステムで-serverスイッチやbitcoindを使用しないでください。

パスワードフィールドの追加に取りかかります。
