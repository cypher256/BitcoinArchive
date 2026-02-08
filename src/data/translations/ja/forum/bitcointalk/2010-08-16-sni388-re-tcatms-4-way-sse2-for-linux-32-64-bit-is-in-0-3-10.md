---
title: "Re: tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載"
date: 2010-08-16T13:38:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9736#msg9736"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/388/"
threadId: "bt-tcatm-s-4-way-sse2-for-linux-32-64-bit-is-in-0-3-1"
threadTitle: "tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"
threadPosition: 3
translationStatus: complete
---

sha256.cppを以下で囲みました：
#ifdef FOURWAYSSE2
#endif // FOURWAYSSE2

今試してみてください。
