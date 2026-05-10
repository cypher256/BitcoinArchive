---
title: "tcatm の 4-way SSE2 Linux 32/64 ビット版 0.3.9 rc2"
date: 2010-08-15T06:52:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9452#msg9452"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがスレッドを開始: tcatm の 4-way SSE2 Linux 32/64 ビット版 0.3.9 rc2"
isSatoshi: true
tags: []
translationStatus: complete
---

0.3.10 に tcatm の 4-way SSE2 がオプションスイッチとして搭載された。

有効にするには「-4way」スイッチを使用する。スイッチなしの場合は Crypto++ ASM SHA-256 が使用される。

Linux でのみ動作を確認できた。

ダウンロード：
0.3.10 は [topic 827](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-827/2010-08-15-version-0-3-10-block-74638-overflow-patch/) から入手可能。

CPU と結果をぜひ報告してほしい！ Core 2 以下では遅く、i5 では速いことはかなり明らかだと思われる。i7 の結果はまだ得られていないと思う。AMD やその他のあまり一般的でない CPU の各モデルについての情報が必要である。
