---
title: "Re: [パッチ] ブロックサイズ制限の引き上げ"
date: 2010-10-04T19:48:40.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1347.msg15366#msg15366"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「[パッチ] ブロックサイズ制限の引き上げ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/485/"
threadId: "bt-patch-increase-block-size-limit"
threadTitle: "[PATCH] increase block size limit"
threadPosition: 2
translationStatus: complete
---

段階的に導入できます。例えば：

if (blocknumber > 115000)
    maxblocksize = largerlimit

かなり前のバージョンから組み込み始めることができるので、そのブロック番号に達して有効になる頃には、それを持たない古いバージョンはすでに廃れています。

カットオフのブロック番号が近づいたら、古いバージョンにアラートを出して、アップグレードが必要であることを確実に知らせることができます。
