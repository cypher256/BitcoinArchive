---
title: "Re: CryptoPPアサーションエラー"
date: 2010-09-05T23:25:32.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=967.msg12062#msg12062"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「CryptoPPアサーションエラー」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/433/"
translationStatus: complete
---

おそらく以下の行をコメントアウトするだけでよいでしょう
cryptopp/secblock.h:187
  //assert(false);

動作するか教えてください。また、メモリリークがないか監視してください。

派生クラスが独自のallocateとdeallocateのバージョンを定義することを保証するテンプレートクラスのようです。これが実際の問題でリリースまで通過してしまったのなら奇妙です。おそらく誤報でしょう。
