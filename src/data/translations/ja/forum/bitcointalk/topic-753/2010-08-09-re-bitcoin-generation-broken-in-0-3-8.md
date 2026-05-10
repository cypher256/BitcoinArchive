---
title: "Re: 0.3.8 で Bitcoin 生成が壊れた？"
date: 2010-08-09T18:50:41.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=753.msg8388#msg8388"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが SSE2 の速度向上が 2%とわずかであったこと、Crypto++での SSE2 の実行時検出の問題を説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/331/"
translationStatus: complete
---

SSE2 はわずか 2%の高速化しか追加せず、互換性の問題に見合わないと判断した。より安全なオプションを選ぼうとしていた。

Crypto++が実行時に SSE2 を使用するかどうかを決定しているようには見えない。ブロックカウントパラメーターを決定するために SSE2 を検出する箇所が 1 つあるが、SSE2 関連の部分はすべてコンパイル時の#ifdef であり、実行時にどのように切り替わるかわからない。見ている場所が間違っているのかもしれない。

すべての makefile で SSE2 を有効にすべきだろうか？ 64 ビットでコンパイルする人がいる場合はそうしなければならないようだ。

Linux 0.3.8 リリースの 64 ビット部分を再コンパイルする。
