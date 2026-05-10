---
title: "0.3.8 で Bitcoin 生成が壊れた？"
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
description: "lfm がスレッドを開始: 0.3.8 で Bitcoin 生成が壊れた？"
isSatoshi: false
tags: []
translationStatus: complete
---

何か問題が発生しているのではないかと疑い始めていた。システムがコインの生成をやめたように見えたからである。1日あたり約 1 ブロックだったのが、1 週間でゼロになった。

IRC で ArtForz が、空のウォレットディレクトリで互いにのみ接続された 2 つのノードだけの隔離テストネットを実行してみることを提案した。クアッドコアのシステムを 2 台用意してセットアップした。合計 8000 khash/秒以上のハッシュレートでありながら、約 90分間ブロックが 1 つも生成されていない。これは問題の証拠と言えるだろうか、それともさらなる不運に過ぎないのだろうか？

システムは Linux 64 ビットで、1 台は Intel クアッド Q6600、もう 1 台は AMD クアッド Phenom II 940 である。
