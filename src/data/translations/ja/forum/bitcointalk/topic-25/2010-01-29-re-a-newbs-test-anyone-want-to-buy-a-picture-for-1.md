---
title: "Re: 初心者のテスト - 1 ドルで写真を買いたい人はいる？"
date: 2010-01-29T00:22:13.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=25.msg173#msg173"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「初心者のテスト - 誰か写真を$1 で買いませんか？」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/37/"
translationStatus: complete
---

注文の支払いに推奨される方法：
1) 販売者が静的 IP を持ち、購入者がコメント付きでその IP に送金する。
2) 販売者が新しい Bitcoin アドレスを作成し、購入者に渡す。購入者はそのアドレスに送金する。これがウェブサイトソフトウェアでの標準的な方法になるだろう。

RSA 対 ECDSA：問題は実行ファイルのサイズではなくデータのサイズだ。ブロックチェーン、Bitcoin アドレス、ディスク容量、帯域幅の要件がすべて一桁大きくなると実用的ではないと考えた。また、メッセージに RSA を使用する場合でも、Bitcoin ネットワーク全体は ECDSA で行い、メッセージ部分のみに RSA を並行使用する方が理にかなっている。その場合、これまでに実装されたものはすべて、まったく同じように実装されていたことになる。

これを行う最善の方法はもっと後で考えることができる。メッセージの受け渡しに別の（既存の可能性がある）メールや IM のインフラを使用し、RSA の代わりに、メッセージのハッシュをトランザクションに入れて、そのトランザクションがメッセージに記述された注文のためであることを証明する方法もあるかもしれない。メッセージにはソルトを含める必要があり、誰も短いメッセージを明かすためにハッシュをブルートフォースできないようにする。
