---
title: "Re: ビットコイン v0.1 リリース — アップグレード時の問題"
date: 2009-01-12T21:40:58Z
source: correspondence
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

> When closing my previous version (help said 0.1.1 but I think it was really 0.1.0), the process did not exit. The UI exited but the process remained. I had to manually kill the process before I was able to start version 0.1.3.

より深刻だったのは、生成したコインの喪失であった。

> Upon opening version 0.1.3, all four of my transaction entries still say 'unconfirmed', but now the Descriptions say 'Generated (not accepted)'. Does this mean that some other node had extended the chain first and my coins were generated in a dead branch? If so, why did the previous instance of the software not detect this immediately and begin generating coins in the winning branch? Bug in 0.1.0?

トランメルは問題を正確に診断していた――v0.1.0の通信バグにより彼のノードはブロックをネットワークにブロードキャストできず、採掘したすべてのブロックが孤立していた。サトシは次の返信でこれを確認した。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
