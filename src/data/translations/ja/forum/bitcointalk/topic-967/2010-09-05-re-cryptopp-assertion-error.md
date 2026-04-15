---
title: "Re: CryptoPPのアサーションエラー"
date: 2010-09-05T23:25:32.000Z
type: "forum-post"
source: "bitcointalk"
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

おそらく以下の行をコメントアウトするだけでよいだろう
cryptopp/secblock.h:187
  //assert(false);

動作するか教えてくれ。また、メモリーリークがないか監視してほしい。

派生クラスが独自のallocateとdeallocateのバージョンを定義することを保証するテンプレートクラスのようだ。これが実際の問題でリリースまで通過してしまったのなら奇妙だ。おそらく誤報だろう。
