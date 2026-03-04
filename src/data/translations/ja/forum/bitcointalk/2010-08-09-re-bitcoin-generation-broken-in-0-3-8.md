---
title: "Re: 0.3.8でBitcoin生成が壊れた？"
date: 2010-08-09T18:50:41.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=753.msg8388#msg8388"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがSSE2の速度向上が2%とわずかであったこと、Crypto++でのSSE2の実行時検出の問題を説明。"
isSatoshi: true
threadId: "bt-bitcoin-generation-broken-in-0-3-8"
threadPosition: 1
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/331/"
translationStatus: complete
---

SSE2はわずか2%の高速化しか追加せず、互換性の問題に見合わないと判断した。より安全なオプションを選ぼうとしていた。

Crypto++が実行時にSSE2を使用するかどうかを決定しているようには見えない。ブロックカウントパラメータを決定するためにSSE2を検出する箇所が1つあるが、SSE2関連の部分はすべてコンパイル時の#ifdefであり、実行時にどのように切り替わるかわからない。見ている場所が間違っているのかもしれない。

すべてのmakefileでSSE2を有効にすべきだろうか？ 64ビットでコンパイルする人がいる場合はそうしなければならないようだ。

Linux 0.3.8リリースの64ビット部分を再コンパイルする。
