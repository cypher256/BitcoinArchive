---
title: "Re: ビットコイン v0.1 リリース — アップグレード時の問題"
date: 2009-01-12T21:40:58Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルにより公開"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "v0.1.0からv0.1.3アップグレード時の2問題: 旧プロセス未終了、生成4コイン全てが「Generated (not accepted)」——通信バグによる孤立ブロックか、とトランメル報告。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-adopter"
  - "mining"
  - "bug-report"
  - "orphan-blocks"
  - "v0.1.3"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

<!-- speaker: narrator -->
前回のメールからわずか11分後に送信されたこのメールで、トランメルはv0.1.0からv0.1.3へのアップグレード時に遭遇した2つの問題を報告した。

<!-- speaker: Dustin Trammell -->
> 以前のバージョン（ヘルプには0.1.1と表示されていたが、実際は0.1.0だったと思う）を閉じた時、プロセスが終了しなかった。UIは終了したがプロセスは残っていた。バージョン0.1.3を起動する前に、手動でプロセスをキルしなければならなかった。

<!-- speaker: narrator -->
より深刻だったのは、生成したコインの喪失であった。

<!-- speaker: Dustin Trammell -->
> バージョン0.1.3を開いたところ、4つのトランザクション項目はまだ「unconfirmed」のままだが、今度は説明欄に「Generated (not accepted)」と表示されるようになった。これは、他のノードが先にチェーンを延長して、俺のコインがデッドブランチで生成されたということか？もしそうなら、なぜ以前のバージョンのソフトウェアがこれを即座に検出して、勝利ブランチでコインの生成を始めなかったんだ？0.1.0のバグか？

<!-- speaker: narrator -->
トランメルは問題を正確に診断していた――v0.1.0の通信バグにより彼のノードはブロックをネットワークにブロードキャストできず、採掘したすべてのブロックが孤立していた。サトシは次の返信でこれを確認した。
