---
title: "Re: 更新 - libcrypto と GLIBCXX_3.4.11 の問題がある人向け Linux x64 バイナリ"
date: 2010-07-15T14:33:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=326.msg3157#msg3157"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「libcrypto の問題を抱える人向けの静的 Linux x86_64 バイナリ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/191/"
translationStatus: complete
---

glibcxx_3.4.11 のリンクは指定していないので、gcc が裏側で自動的にリンクしているのだろう。静的リンクを指示するコンパイラースイッチがおそらくあるはずだ。ライセンスの問題がどうなるかは不明だ。通常、コンパイラー関連のものは完全に再配布可能だ。
