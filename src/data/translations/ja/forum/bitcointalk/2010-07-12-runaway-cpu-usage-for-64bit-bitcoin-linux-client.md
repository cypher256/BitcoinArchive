---
title: "64ビットBitCoin（Linuxクライアント）の暴走CPU使用"
date: 2010-07-12T11:59:16.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=299.msg2378#msg2378"
author: "knightmb"
participants:
  - name: "knightmb"
    slug: "knightmb"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "knightmbがスレッドを開始: 64ビットBitCoin（Linuxクライアント）の暴走CPU使用"
isSatoshi: false
threadId: "bt-runaway-cpu-usage-for-64bit-bitcoin-linux-client"
threadPosition: 1
tags: []
translationStatus: complete
---

フォーラムを検索したが、まだ誰もこの問題について言及していなかった。

5台のビットコインクライアントを持っており、一部はWindows版ビットコイン、その他はLinux版ビットコインを動作させている。

64ビットLinuxシステムは1台だけだが、ビットコインを実行すると約10分後にCPU使用率が暴走し、ビットコインアプリケーションを強制終了しない限りシステムが停止してしまう。

一方、32ビットLinux版ビットコインクライアントを動作させている他の2台のコンピューターは問題なく動作しており、CPUの暴走は発生しない。

64ビットLinuxシステム上で32ビット版ビットコインを実行してみたが、同じ現象が発生する。64ビットLinuxシステムにはデュアルコアプロセッサが搭載されており、「プロセッサを1つだけ使用」オプションを選択しても、しばらくするとビットコインは両方のCPUを100%まで使い切ってしまう。

これは現時点で64ビットLinuxユーザーのみに影響するバグなのだろうか？

ウェブサイトのトップページから入手した最新バージョン0.3.0を使用している。

システムOS: Linux Mandriva 2010.0（64ビット）
RAM 16GB
プロセッサ - Intel デュアルコア 3.06 CPU

フィードバックやアドバイスを歓迎する。

Xunieによる編集: このスレッドを別の「BitcoinがあなたのLinuxシステムを遅くしていませんか？」スレッドと統合したので、一瞬混乱するかもしれない。
