---
title: "Re: 複数のコンピュータで同じウォレットを同時に実行しても安全ですか？"
date: 2010-11-28T18:06:39.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1986.msg25154#msg25154"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「複数のコンピュータで同じウォレットを同時に実行しても安全ですか？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/519/"
translationStatus: complete
---

引用：自動的に同期されますか？
まったくそうではありません。wallet.datの複数のコピーを使用することは推奨も対応もされておらず、実際Bitcoinのすべてはそれを防ぐように設計されています。両方のコピーがおかしくなります。

生成したコインを1つのウォレットにまとめようとしているなら、今はより良い解決策として追加システムでgetworkマイナーを実行することです。jgarzikにCPUマイナーがあり、tcatmの4-way SSE2をサポートしているので、WindowsではAMDまたは最近のIntel（Core 3、5、7）をお持ちなら、内蔵SHAの最大2倍速です。

新しいデモCPUマイナーが利用可能：
[http://bitcointalk.org/index.php?topic=1925.0](http://bitcointalk.org/index.php?topic=1925.0)
