---
title: "Bitcoin x86 for Windows"
date: 2010-07-25T23:17:20.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=572.msg5823#msg5823"
author: "Olipro"
participants:
  - name: "Olipro"
    slug: "olipro"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Oliproがスレッドを開始: Bitcoin x86 for Windows"
isSatoshi: false
threadId: "bt-bitcoin-x86-for-windows"
threadPosition: 1
tags: []
translationStatus: complete
---

x86 Windowsユーザーはおそらくx64スレッドを読もうともしないだろうと思い、新しいトピックを作成しました。ただし、ここに来たからには、この投稿を読んだ後にあのスレッドの5ページ目も読むことをお勧めします。

さて、基本的に新しいSHAキャッシュ最適化を施したビットコインのビルドを2種類コンパイルしました。1つはSSE命令セットに対して完全に最適化されたビルドで、最新のCPUが必要です。もう1つはSSE最適化なしでコンパイルされており、XP以降を動作可能なほぼすべてのCPUで動作するはずです。SSE版は非SSE版より若干高速で、どちらもx64ビルドには劣ります。64ビットOSをお使いの方は、これらを使う必要はありません。

**ただし、同梱のlibeay32.dllにはSSEが含まれている可能性があるため、どちらも動作しない場合は、そのDLLを標準のビットコインに同梱されているものに置き換えてください**

[ビルドはこちらからダウンロードできます](http://www.4shared.com/file/kIewrXzp/Bitcoin_x86.html)
