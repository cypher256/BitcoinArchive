---
title: "Re: 0.3.1リリース候補、テストしてください"
date: 2010-07-15T21:40:34.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=383.msg3295#msg3295"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「0.3.1リリース候補、テストしてください」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/200/"
translationStatus: complete
---

<!-- tone-skip -->
[Quote from: knightmb on July 15, 2010, 07:37:10 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-383/2010-07-15-knightmb-msg3269/)
> Windows上では、コイン生成の優先度は依然として通常のままだ。BitCoinをコイン生成モードで実行し、CPUを全部食い尽くすもの（例えばCPU Hog: http://www.microtask.ca/cpuhog.html）を起動すると、BitCoinとCPU Hogが50/50でCPUを分け合い、CPU Hogが全CPUを取ってBitCoinがアイドル/低プロセスでのみ動くという状態にはならないことが分かる。khash/sも半分に減っているので、スレッドが通常より低い優先度で動いていないさらなる証拠だ。
>
> 事前にコア数を数えておくべきだった Lips sealed。Windows 2000、XP、Vista 32/64、Windows 7 32/64でテストした結果、バグではないことを確認した。
<!-- /tone-skip -->

これを再現できなかった。デュアルプロセッサなので、2つのメモリホグを実行した。タスクマネージャーによると、BitcoinのCPU使用率は0%だった。khash/secメーターはCPUを取得できなかったため更新されず、止まったままだった。

デュアルプロセッサか？シングルプロセッサのホグを実行していたのではないか？
