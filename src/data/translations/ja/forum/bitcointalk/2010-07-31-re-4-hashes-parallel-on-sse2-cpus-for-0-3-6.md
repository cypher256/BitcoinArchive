---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-07-31T00:29:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg6751#msg6751"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoが128ビットレジスタを使用した4つの32ビットデータのSIMD並列処理のアイデアに感銘を受け、加算の桁上がり問題について言及。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/302/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadTitle: "4 hashes parallel on SSE2 CPUs for 0.3.6"
threadPosition: 1
translationStatus: complete
---

すごい...

つまり、128ビットレジスタを使って4つの32ビットデータを一度にSIMD処理しているということですか？ 長い間それを考えていましたが、加算の桁上がりが隣の値に影響するため、不可能だと思っていました。
