---
title: "tcatm の 4-way SSE2 Linux 32/64 ビット版が 0.3.10 に搭載"
date: 2010-08-15T15:52:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=820.msg9452#msg9452"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトの投稿：「tcatm の 4-way SSE2 Linux 32/64 ビット版が 0.3.10 に搭載」。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/363/"
translationStatus: complete
---

0.3.10 には tcatm の 4-way SSE2 がオプションスイッチとして含まれている。

「-4way」スイッチを使って有効にしてほしい。スイッチなしでは Crypto++ ASM SHA-256 が使用される。

Linux でのみ動作させることができた。

ダウンロード：
0.3.10 は [topic 827](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-827/2010-08-15-version-0-3-10-block-74638-overflow-patch/) から入手してほしい。

お使いの CPU と結果を報告してほしい！Core 2 以下では遅く、i5 では速いことはかなり明らかだと思う。i7 の結果はまだ聞いていないと思う。AMD やその他のあまり一般的でない CPU の各モデルについて知る必要がある。
