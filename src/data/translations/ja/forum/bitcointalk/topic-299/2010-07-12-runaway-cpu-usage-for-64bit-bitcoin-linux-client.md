---
title: "64 ビット BitCoin（Linux クライアント）の暴走 CPU 使用"
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
description: "knightmb がスレッドを開始: 64 ビット BitCoin（Linux クライアント）の暴走 CPU 使用"
isSatoshi: false
tags: []
translationStatus: complete
---

フォーラムを検索したが、まだ誰もこの問題について言及していなかった。

5 台のビットコインクライアントを持っており、一部は Windows 版ビットコイン、その他は Linux 版ビットコインを動作させている。

64 ビット Linux システムは 1 台だけだが、ビットコインを実行すると約 10分後に CPU 使用率が暴走し、ビットコインアプリケーションを強制終了しない限りシステムが停止してしまう。

一方、32 ビット Linux 版ビットコインクライアントを動作させている他の 2 台のコンピューターは問題なく動作しており、CPU の暴走は発生しない。

64 ビット Linux システム上で 32 ビット版ビットコインを実行してみたが、同じ現象が発生する。64 ビット Linux システムにはデュアルコアプロセッサーが搭載されており、「プロセッサーを 1 つだけ使用」オプションを選択しても、しばらくするとビットコインは両方の CPU を 100%まで使い切ってしまう。

これは現時点で 64 ビット Linux ユーザーのみに影響するバグなのだろうか？

ウェブサイトのトップページから入手した最新バージョン 0.3.0 を使用している。

システム OS: Linux Mandriva 2010.0（64 ビット）
RAM 16GB
プロセッサー - Intel デュアルコア 3.06 CPU

フィードバックやアドバイスを歓迎する。

Xunie による編集: このスレッドを別の「Bitcoin があなたの Linux システムを遅くしていませんか？」スレッドと統合したので、一瞬混乱するかもしれない。
