---
title: "0.3.8でBitcoin生成が壊れた？"
date: 2010-08-07T18:06:59.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=753.msg8191#msg8191"
author: "lfm"
participants:
  - name: "lfm"
    slug: "lfm"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "lfmがスレッドを開始: 0.3.8でBitcoin生成が壊れた？"
isSatoshi: false
threadId: "bt-bitcoin-generation-broken-in-0-3-8"
threadPosition: 1
tags: []
translationStatus: complete
---

何か問題が発生しているのではないかと疑い始めていた。システムがコインの生成をやめたように見えたからである。1日あたり約1ブロックだったのが、1週間でゼロになった。

IRCでArtForzが、空のウォレットディレクトリで互いにのみ接続された2つのノードだけの隔離テストネットを実行してみることを提案した。クアッドコアのシステムを2台用意してセットアップした。合計8000 khash/秒以上のハッシュレートでありながら、約90分間ブロックが1つも生成されていない。これは問題の証拠と言えるだろうか、それともさらなる不運に過ぎないのだろうか？

システムはLinux 64ビットで、1台はIntelクアッドQ6600、もう1台はAMDクアッドPhenom II 940である。
