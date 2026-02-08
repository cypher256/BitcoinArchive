---
title: "tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載"
date: 2010-08-15T15:52:09.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9452#msg9452"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/363/"
threadId: "bt-tcatm-s-4-way-sse2-for-linux-32-64-bit-is-in-0-3-1"
threadTitle: "tcatm's 4-way SSE2 for Linux 32/64-bit is in 0.3.10"
threadPosition: 1
translationStatus: complete
---

0.3.10にはtcatmの4-way SSE2がオプションスイッチとして含まれています。

「-4way」スイッチを使って有効にしてください。スイッチなしではCrypto++ ASM SHA-256が使用されます。

Linuxでのみ動作させることができました。

ダウンロード：
0.3.10は[http://bitcointalk.org/index.php?topic=827.0](http://bitcointalk.org/index.php?topic=827.0)から入手してください。

お使いのCPUと結果を報告してください！Core 2以下では遅く、i5では速いことはかなり明らかだと思います。i7の結果はまだ聞いていないと思います。AMDやその他のあまり一般的でないCPUの各モデルについて知る必要があります。
