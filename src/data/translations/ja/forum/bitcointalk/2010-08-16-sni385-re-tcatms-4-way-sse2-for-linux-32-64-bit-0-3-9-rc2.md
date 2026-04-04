---
title: "Re: tcatmの4-way SSE2 Linux 32/64ビット版 0.3.9 rc2"
date: 2010-08-16T03:23:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9661#msg9661"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「tcatmの4-way SSE2 Linux 32/64ビット版 0.3.9 rc2」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/385/"
threadId: "bt-tcatm-s-4-way-sse2-for-linux-32-64-bit-0-3-9-rc2"
translationStatus: complete
---

[Quote from: Vasiliev on August 16, 2010, 03:17:07 AM](#msg9660)
> [Quote from: satoshi on August 16, 2010, 02:57:57 AM](#msg9655)
> [Quote from: tcatm on August 16, 2010, 12:43:39 AM](#msg9617)
> > > sha256.cppを-O3 -march=amdfamk10でコンパイルすることを提案する（32ビットと64ビットの両方で動作する）。この命令セットをサポートするCPU（AMD Phenom、Intel i5以降）のみが-4wayの恩恵を受け、パフォーマンスが約9%向上する。
> >
> > GCC 4.3.3は-march=amdfamk10をサポートしていない。以下のエラーが出る：
> > sha256.cpp:1: error: bad value (amdfamk10) for -march= switch
>
> -march=amdfam10を試してみてくれ。

動いた。

おかしいな……同じものだと確信できるか？tcatm、amdfam10で試して同じ速度測定結果が得られるか確認してくれ。
