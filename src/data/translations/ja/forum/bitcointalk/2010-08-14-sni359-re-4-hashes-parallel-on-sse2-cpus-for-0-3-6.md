---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-08-14T04:22:29.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg9159#msg9159"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoがthashのアラインメントを提案し、MinGW GCC 3.4.5がおそらく問題の原因であることを特定。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/359/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadTitle: "4 hashes parallel on SSE2 CPUs for 0.3.6"
threadPosition: 6
translationStatus: complete
---

まだであれば、thashのアラインを試してみてください。効果があるかもしれません。損にはなりません。

[Quote from: tcatm on August 14, 2010, 12:53:07 AM](https://bitcointalk.org/index.php?topic=648.msg9147#msg9147)ツリーオプティマイザのコンパイラバグを引き起こしているようです。-O0でコンパイルしてみてもらえますか？
-O0でも効果なし、同じエラーです。

MinGWはGCC 3.4.5です。おそらくそれが問題です。

新しいバージョンのMinGWを入手できるか試してみます。
