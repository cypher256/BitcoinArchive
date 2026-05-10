---
title: "Re: 同じウォレットを複数のコンピューターで同時に使うのは安全か？"
date: 2010-11-28T18:06:39.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1986.msg25154#msg25154"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「複数のコンピューターで同じウォレットを同時に実行しても安全ですか？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/519/"
translationStatus: complete
---

> 自動的に同期されますか？

まったくそうではない。wallet.dat の複数のコピーを使用することは推奨も対応もされておらず、実際 Bitcoin のすべてはそれを防ぐように設計されている。両方のコピーがおかしくなる。

生成したコインを 1 つのウォレットにまとめようとしているなら、今はより良い解決策として追加システムで getwork マイナーを実行することだ。jgarzik に CPU マイナーがあり、tcatm の 4-way SSE2 をサポートしているので、Windows では AMD または最近の Intel（Core 3、5、7）をお持ちなら、内蔵 SHA の最大 2倍速だ。

新しいデモ CPU マイナーが利用可能：
[topic 1925](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-1925/2010-11-26-jgarzik-msg24681/)
