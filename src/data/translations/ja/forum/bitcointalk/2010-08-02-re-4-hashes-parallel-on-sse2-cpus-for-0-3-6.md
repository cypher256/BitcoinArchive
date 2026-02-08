---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-08-02T19:02:46.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg7084#msg7084"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがAMDとIntelでの速度差について質問し、スタック上のアライメント問題について説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/307/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadTitle: "4 hashes parallel on SSE2 CPUs for 0.3.6"
threadPosition: 2
translationStatus: complete
---

AMDでは2倍速で、Intelでは半分の速度ということですか？

[Quote from: tcatm on July 31, 2010, 10:12:38 AM](https://bitcointalk.org/index.php?topic=648.msg6797#msg6797)ちなみに、__attribute__ ((aligned (16)))を使えばコンパイル時にコンパイラがアラインしてくれるのに、なぜalignup<16>関数を使っているのですか？
試しましたが、スタック上のものには機能しません。いくつかテストを行いました。

エラーすら出ず、単にアラインされないだけです。
