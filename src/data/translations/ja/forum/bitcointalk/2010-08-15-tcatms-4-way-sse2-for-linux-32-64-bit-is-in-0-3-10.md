---
title: "tcatmの4-way SSE2 Linux 32/64ビット版が0.3.10に搭載"
date: 2010-08-15T15:52:09.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

0.3.10にはtcatmの4-way SSE2がオプションスイッチとして含まれている。

「-4way」スイッチを使って有効にしてほしい。スイッチなしではCrypto++ ASM SHA-256が使用される。

Linuxでのみ動作させることができた。

ダウンロード：
0.3.10は[topic 827](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-08-15-version-0-3-10-block-74638-overflow-patch/)から入手してほしい。

お使いのCPUと結果を報告してほしい！Core 2以下では遅く、i5では速いことはかなり明らかだと思う。i7の結果はまだ聞いていないと思う。AMDやその他のあまり一般的でないCPUの各モデルについて知る必要がある。
