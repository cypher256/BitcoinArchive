---
title: "0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
date: 2010-07-30T12:23:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=648.msg6722#msg6722"
author: "tcatm"
participants:
  - name: "tcatm"
    slug: "tcatm"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "tcatmがスレッドを開始: 0.3.6向けSSE2 CPUでの4ハッシュ並列処理"
isSatoshi: false
threadId: "bt-4-hashes-parallel-on-sse2-cpus-for-0-3-6"
threadPosition: 1
tags: []
translationStatus: complete
---

このパッチは、ベクトル命令を使用して1つのコアで4つのハッシュを同時に計算するものである。新しいハッシュ関数を旧来のものと照合するテストプログラムが含まれているため、正確性は担保されているはずである。

このパッチは0.3.6に対するものである。khash/sが約115%向上する。

[http://pastebin.com/XN1JDb53](http://pastebin.com/XN1JDb53)
