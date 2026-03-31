---
title: "Re: tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載"
date: 2010-08-16T01:49:01.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9630#msg9630"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "BitcoinTalkトピック820におけるNewLibertyStandardの投稿。msg9655による引用。"
isSatoshi: false
threadId: "bt-tcatm-s-4-way-sse2-for-linux-32-64-bit-0-3-9-rc2"
tags: []
translationStatus: complete
---

> [Quote from: aceat64 on August 16, 2010, 12:37:54 AM](https://bitcointalk.org/index.php?topic=820.msg9613#msg9613)
> 結果を追跡できるようにwikiページを作った：http://www.bitcoin.org/wiki/doku.php?id=4-way_sse2

ハイパースレッディングが有効かどうか、物理コア数、Bitcoinが使用しているコア数のカラムを追加した方がいいかもしれない。4wayなしだと、仮想コアの半分でハッシュした方がわずかに良い結果が出る。4wayありだと、すべての仮想コアを有効にした方がかなり良いパフォーマンスが出る。ハイパースレッディングをオフにすると、4wayの有無にかかわらず同じくらいのハッシュ量になると思う。
