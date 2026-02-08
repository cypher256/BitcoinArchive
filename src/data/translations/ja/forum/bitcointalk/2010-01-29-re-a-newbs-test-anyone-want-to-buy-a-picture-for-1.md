---
title: "Re: 初心者のテスト - 誰か写真を$1で買いませんか？"
date: 2010-01-29T00:22:13.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=25.msg173#msg173"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「初心者のテスト - 誰か写真を$1で買いませんか？」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/37/"
translationStatus: complete
---

注文の支払いに推奨される方法：
1) 販売者が静的IPを持ち、購入者がコメント付きでそのIPに送金する。
2) 販売者が新しいBitcoinアドレスを作成し、購入者に渡す。購入者はそのアドレスに送金する。これがウェブサイトソフトウェアでの標準的な方法になるでしょう。

RSA対ECDSA：問題は実行ファイルのサイズではなくデータのサイズです。ブロックチェーン、Bitcoinアドレス、ディスク容量、帯域幅の要件がすべて一桁大きくなると実用的ではないと考えました。また、メッセージにRSAを使用する場合でも、Bitcoinネットワーク全体はECDSAで行い、メッセージ部分のみにRSAを並行使用する方が理にかなっています。その場合、これまでに実装されたものはすべて、まったく同じように実装されていたことになります。

これを行う最善の方法はもっと後で考えることができます。メッセージの受け渡しに別の（既存の可能性がある）メールやIMのインフラを使用し、RSAの代わりに、メッセージのハッシュをトランザクションに入れて、そのトランザクションがメッセージに記述された注文のためであることを証明する方法もあるかもしれません。メッセージにはソルトを含める必要があり、誰も短いメッセージを明かすためにハッシュをブルートフォースできないようにします。
