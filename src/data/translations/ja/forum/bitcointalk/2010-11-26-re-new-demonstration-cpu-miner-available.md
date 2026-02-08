---
title: "Re: 新しいデモCPUマイナーが利用可能"
date: 2010-11-26T22:02:41.000Z
source: bitcointalk
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

sha256.cppにあるtcatmの4-way SSE2 SHAで試してみてください。Cファイルとして問題なくコンパイルできます。sha256.cppをsha256.cにリネームするだけです。Windowsでの簡単なテストでは動作させることができましたが、Bitcoinとリンクした時はうまくいきませんでした。C++プログラムの一部としてよりも、Cプログラムの一部としての方がうまくいく可能性があるかもしれません。

現在はLinuxビルドでのみ有効なので、動作させることができればWindowsユーザーに提供できるでしょう。AMD CPUでは約100%のスピードアップです。
