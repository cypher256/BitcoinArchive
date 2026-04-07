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
description: "BitcoinTalkトピック820におけるNewLibertyStandardの文脈投稿。msg9655に引用。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "aceat64"
    personSlug: "aceat64"
    date: "2010-08-15T15:37:54.000Z"
---
<!-- quote: q1 -->
<!-- tone-skip -->
> 結果を記録できるようにWikiページを作成した：http://www.bitcoin.org/wiki/doku.php?id=4-way_sse2
<!-- /tone-skip -->

ハイパースレッディングが有効かどうか、物理コア数、Bitcoinが使用しているコア数の列を追加した方がいい。4wayなしでは、仮想コアの半分でハッシュした方がわずかに良い結果が出る。4wayでは、すべての仮想コアを有効にするとパフォーマンスが大幅に向上する。ハイパースレッディングをオフにすると、4wayの有無にかかわらずほぼ同じハッシュ量になると思う。
