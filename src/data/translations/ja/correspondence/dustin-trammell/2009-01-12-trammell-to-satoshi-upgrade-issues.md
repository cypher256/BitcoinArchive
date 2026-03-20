---
title: "Re: ビットコイン v0.1 リリース — アップグレード時の問題"
date: 2009-01-12T21:40:58Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "トランメルがv0.1.0からv0.1.3へのアップグレード時に遭遇した2つの問題を報告。旧プロセスが終了しなかったことと、生成された4つのコインがすべて「Generated (not accepted)」と表示されるようになったこと――通信バグによる孤立ブロックが原因と考えられる。"
isSatoshi: false
threadId: "satoshi-dustin-trammell"
threadPosition: 4
tags:
  - "correspondence"
  - "early-adopter"
  - "mining"
  - "bug-report"
  - "orphan-blocks"
  - "v0.1.3"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

前回のメールからわずか11分後に送信されたこのメールで、トランメルはv0.1.0からv0.1.3へのアップグレード時に遭遇した2つの問題を報告した。

> 以前のバージョン（ヘルプには0.1.1と表示されていたが、実際は0.1.0だったと思う）を閉じた時、プロセスが終了しなかった。UIは終了したがプロセスは残っていた。バージョン0.1.3を起動する前に、手動でプロセスをキルしなければならなかった。

より深刻だったのは、生成したコインの喪失であった。

> バージョン0.1.3を開いたところ、4つのトランザクション項目はまだ「unconfirmed」のままだが、今度は説明欄に「Generated (not accepted)」と表示されるようになった。これは、他のノードが先にチェーンを延長して、俺のコインがデッドブランチで生成されたということか？もしそうなら、なぜ以前のバージョンのソフトウェアがこれを即座に検出して、勝利ブランチでコインの生成を始めなかったんだ？0.1.0のバグか？

トランメルは問題を正確に診断していた――v0.1.0の通信バグにより彼のノードはブロックをネットワークにブロードキャストできず、採掘したすべてのブロックが孤立していた。サトシは次の返信でこれを確認した。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
