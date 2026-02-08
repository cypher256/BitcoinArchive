---
title: "Re: ブロックサイズ制限"
date: 2010-10-03T23:47:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1347.msg15139#msg15139"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシがブロックサイズ制限と、必要に応じて段階的なアプローチで将来的に引き上げる方法について議論。"
isSatoshi: true
tags:
  - "block-size"
  - "scalability"
  - "future-planning"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/387/"
translationStatus: complete
---

段階的に導入できます。例えば：

if (blocknumber > 115000)
    maxblocksize = largerlimit

かなり前のバージョンから組み込み始めることができるので、そのブロック番号に達して有効になる頃には、それを持たない古いバージョンはすでに廃れています。

カットオフのブロック番号が近づいたら、古いバージョンにアラートを出して、アップグレードが必要であることを確実に知らせることができます。
