---
title: "tcatmの4-way SSE2 Linux 32/64ビット版 0.3.9 rc2"
date: 2010-08-15T06:52:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9452#msg9452"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "satoshiがスレッドを開始: tcatmの4-way SSE2 Linux 32/64ビット版 0.3.9 rc2"
isSatoshi: true
threadId: "bt-tcatm-s-4-way-sse2-for-linux-32-64-bit-0-3-9-rc2"
tags: []
translationStatus: complete
---

0.3.10にtcatmの4-way SSE2がオプションスイッチとして搭載された。

有効にするには「-4way」スイッチを使用する。スイッチなしの場合はCrypto++ ASM SHA-256が使用される。

Linuxでのみ動作を確認できた。

ダウンロード：
0.3.10は[topic 827](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-08-15-version-0-3-10-block-74638-overflow-patch/)から入手可能。

CPUと結果をぜひ報告してほしい！ Core 2以下では遅く、i5では速いことはかなり明らかだと思われる。i7の結果はまだ得られていないと思う。AMDやその他のあまり一般的でないCPUの各モデルについての情報が必要である。
