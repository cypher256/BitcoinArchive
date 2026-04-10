---
title: "Re: tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載"
date: 2010-08-16T02:57:57.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9655#msg9655"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「tcatmの4-way SSE2 Linux 32/64ビット版 0.3.9 rc2」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/384/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "tcatm"
    personSlug: "tcatm"
    date: "2010-08-15T15:43:39.000Z"
  - id: "q2"
    person: "NewLibertyStandard"
    personSlug: "newlibertystandard"
    date: "2010-08-15T16:49:01.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> sha256.cppを-O3 -march=amdfamk10でコンパイルすることを提案する（32ビットと64ビットの両方で動作する）。この命令セットをサポートするCPU（AMD Phenom、Intel i5以降）のみが-4wayの恩恵を受け、パフォーマンスが約9%向上する。
<!-- /tone-skip -->

GCC 4.3.3は-march=amdfamk10をサポートしていない。以下のエラーが出る：
sha256.cpp:1: error: bad value (amdfamk10) for -march= switch

<!-- quote: q2 -->
<!-- tone-skip -->
> 4wayでは、すべての仮想コアを有効にするとパフォーマンスが大幅に向上する。ハイパースレッディングをオフにすると、4wayの有無にかかわらずほぼ同じハッシュ量になると思う。
<!-- /tone-skip -->

おお、何か重要な発見をしたかもしれないな！

以前はハイパースレッディングが役に立たなかったのは、すべての処理が算術論理ユニットで行われ、ハイパースレッドがそれを共有していたためだ。

tcatmのSSE2コードは通常のx86命令とSSE2命令の組み合わせのはずで、一方がx86コードを実行している間に、もう一方がSSE2を実行できる。

ハイパースレッディングでどれくらい改善する？

数字は？どのCPUだ？
