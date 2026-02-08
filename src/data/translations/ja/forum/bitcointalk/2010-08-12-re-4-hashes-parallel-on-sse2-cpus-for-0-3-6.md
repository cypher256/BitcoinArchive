---
title: "Re: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-08-12T22:07:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg8929#msg8929"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoが各CPU間の速度差を分析し、古いチップの弱点が原因である可能性を指摘。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/352/"
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadTitle: "4 hashes parallel on SSE2 CPUs for 0.3.6"
threadPosition: 4
translationStatus: complete
---

4倍や6倍のこれほど大きな速度差は、古いチップが苦手とする何か癖のある弱点や命令があるように感じます。SSE2を6倍速くしたというi5の売りの機能でない限りは。

要約：
Xeon Quad        41%低下
Core 2 Duo        55%低下
Core 2 Duo        変化なし（vess）
Core 2 Quad      50%低下
Core i5            200%向上（nelisky）
Core i5            100%向上（vess）
AMD Opteron    105%向上

aceat64:
私のシステムは約7100から約4200に低下しました。
このシステムはデュアルIntel Xeon Quad-Core CPU（E5335）@ 2.00GHzです。

impossible7:
Intel Core 2 Duo T7300でx86_64 Linuxを実行したところ、ストック版（r121）と比べて55%低下しました

nelisky:
私のCore2Quad（Q6600）は50%低下しました、
i5は約200%向上しました、

impossible7:
AMD Opteron 2374 HEでx86_64 Linuxを実行したところ、105%向上しました（！）
