---
title: "Re: tcatmの4-way SSE2（Linux 32/64ビット対応）が0.3.10に搭載"
date: 2010-08-16T01:49:01.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9630#msg9630"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "BitcoinTalkトピック820におけるNewLibertyStandardのコンテキスト投稿。msg9655に引用。"
isSatoshi: false
threadId: "bt-tcatm-s-4-way-sse2-for-linux-32-64-bit-0-3-9-rc2"
tags: []
translationStatus: complete
---
[Quote from: aceat64 on August 16, 2010, 12:37:54 AM](#msg9613)
> 結果を記録できるようにWikiページを作成した：http://www.bitcoin.org/wiki/doku.php?id=4-way_sse2

ハイパースレッディングが有効かどうか、物理コア数、Bitcoinが使用しているコア数の列を追加した方がいい。4wayなしでは、仮想コアの半分でハッシュした方がわずかに良い結果が出る。4wayでは、すべての仮想コアを有効にするとパフォーマンスが大幅に向上する。ハイパースレッディングをオフにすると、4wayの有無にかかわらずほぼ同じハッシュ量になると思う。
