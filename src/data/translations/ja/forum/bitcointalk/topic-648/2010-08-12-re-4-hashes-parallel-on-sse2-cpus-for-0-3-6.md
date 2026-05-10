---
title: "Re: 0.3.6 向け SSE2 CPU での 4 ハッシュ並列処理"
date: 2010-08-12T22:07:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg8929#msg8929"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが各 CPU 間の速度差を分析し、古いチップの弱点が原因である可能性を指摘。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/352/"
translationStatus: complete
---

4倍や 6倍のこれほど大きな速度差は、古いチップが苦手とする何か癖のある弱点や命令があるように感じる。SSE2 を 6倍速くしたという i5 の売りの機能でない限りは。

要約：<br>
Xeon Quad        41%低下<br>
Core 2 Duo        55%低下<br>
Core 2 Duo        変化なし（vess）<br>
Core 2 Quad      50%低下<br>
Core i5            200%向上（nelisky）<br>
Core i5            100%向上（vess）<br>
AMD Opteron    105%向上

<!-- tone-skip -->
aceat64:
私のシステムは約 7100 から約 4200 に低下しました。
このシステムはデュアル Intel Xeon Quad-Core CPU（E5335）@ 2.00GHz です。

impossible7:
Intel Core 2 Duo T7300 で x86_64 Linux を実行したところ、ストック版（r121）と比べて 55%低下しました

nelisky:
私の Core2Quad（Q6600）は 50%低下しました、
i5 は約 200%向上しました、

impossible7:
AMD Opteron 2374 HE で x86_64 Linux を実行したところ、105%向上しました（！）
<!-- /tone-skip -->
