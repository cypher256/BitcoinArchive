---
title: "Re: 新しいデモCPUマイナーが利用可能"
date: 2010-11-26T22:02:41.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1925.msg24719#msg24719"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「新しいデモCPUマイナーが利用可能」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/516/"
translationStatus: complete
---

sha256.cppにあるtcatmの4-way SSE2 SHAで試してみてくれ。Cファイルとして問題なくコンパイルできる。sha256.cppをsha256.cにリネームするだけだ。Windowsでの簡単なテストでは動作させることができたが、Bitcoinとリンクした時はうまくいかなかった。C++プログラムの一部としてよりも、Cプログラムの一部としての方がうまくいく可能性があるかもしれない。

現在はLinuxビルドでのみ有効なので、動作させることができればWindowsユーザーに提供できるだろう。AMD CPUでは約100%のスピードアップだ。
