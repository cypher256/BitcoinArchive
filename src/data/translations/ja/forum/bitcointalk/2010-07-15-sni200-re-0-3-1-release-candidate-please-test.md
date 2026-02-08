---
title: "Re: 0.3.1リリース候補、テストしてください"
date: 2010-07-15T21:40:34.000Z
source: bitcointalk
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
threadId: "bt-0-3-1-release-candidate-please-test"
threadTitle: "0.3.1 release candidate, please test"
threadPosition: 3
translationStatus: complete
---

[Quote from: knightmb on July 15, 2010, 07:37:10 PM](https://bitcointalk.org/index.php?topic=383.msg3269#msg3269)Windowsでは、コイン生成の優先度はまだ通常のままです。BitCoinをコイン生成モードで実行し、CPUをすべて使い切るもの（例えばCPU hog: [http://www.microtask.ca/cpuhog.html](http://www.microtask.ca/cpuhog.html)）を起動すると、CPU HogがすべてのCPUを使いBitCoinがアイドル/低優先度でのみ実行されるのではなく、BitCoinとCPU hogがCPUを50/50で共有しているのがわかります。khash/sも半減しており、スレッドが通常より低い優先度で実行されていないことのさらなる証拠です。
これを再現できませんでした。デュアルプロセッサなので、2つのメモリホグを実行しました。タスクマネージャーによると、BitcoinのCPU使用率は0%でした。khash/secメーターはCPUを取得できなかったため更新されず、止まったままでした。

デュアルプロセッサですか？シングルプロセッサのホグを実行していたのではありませんか？
