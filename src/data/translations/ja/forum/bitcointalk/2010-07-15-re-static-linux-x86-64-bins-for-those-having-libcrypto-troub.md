---
title: "Re: libcryptoの問題を抱える人向けの静的Linux x86_64バイナリ"
date: 2010-07-15T14:33:04.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=326.msg3157#msg3157"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「libcryptoの問題を抱える人向けの静的Linux x86_64バイナリ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/191/"
translationStatus: complete
---

glibcxx_3.4.11のリンクは指定していないので、gccが裏側で自動的にリンクしているのでしょう。静的リンクを指示するコンパイラスイッチがおそらくあるはずです。ライセンスの問題がどうなるかは不明です。通常、コンパイラ関連のものは完全に再配布可能です。
