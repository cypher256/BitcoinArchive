---
title: "Re: tcatmの4-way SSE2 Linux 32/64ビット版 0.3.9 rc2"
date: 2010-08-16T02:57:57.000Z
source: bitcointalk
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
threadId: "bt-tcatm-s-4-way-sse2-for-linux-32-64-bit-0-3-9-rc2"
threadTitle: "tcatm's 4-way SSE2 for Linux 32/64-bit 0.3.9 rc2"
threadPosition: 3
translationStatus: complete
---

[Quote from: tcatm on August 16, 2010, 12:43:39 AM](https://bitcointalk.org/index.php?topic=820.msg9617#msg9617)sha256.cppを-O3 -march=amdfamk10でコンパイルすることを提案します（32ビットと64ビットの両方で動作します）。この命令セットをサポートするCPU（AMD Phenom、Intel i5以降）のみが-4wayの恩恵を受け、性能が約9%向上するためです。
GCC 4.3.3は-march=amdfamk10をサポートしていません。以下のエラーが出ます：
sha256.cpp:1: error: bad value (amdfamk10) for -march= switch

[Quote from: NewLibertyStandard on August 16, 2010, 01:49:01 AM](https://bitcointalk.org/index.php?topic=820.msg9630#msg9630)4wayでは、すべての仮想コアを有効にすると大幅に良い性能が得られます。ハイパースレッディングをオフにすると、4wayの有無にかかわらず、ほぼ同じ量のハッシュが得られると思います。
おお、何か重要な発見をしたかもしれませんね！

以前はハイパースレッディングが役に立たなかったのは、すべての処理が算術論理ユニットで行われ、ハイパースレッドがそれを共有していたためです。

tcatmのSSE2コードは通常のx86命令とSSE2命令の組み合わせのはずで、一方がx86コードを実行している間に、もう一方がSSE2を実行できます。

ハイパースレッディングでどれくらい改善しますか？

数字は？どのCPUですか？
