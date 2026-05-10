---
title: "Windows 用 Bitcoin x86"
date: 2010-07-25T23:17:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=572.msg5823#msg5823"
author: "Olipro"
participants:
  - name: "Olipro"
    slug: "olipro"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Olipro がスレッドを開始: Bitcoin x86 for Windows"
isSatoshi: false
tags: []
translationStatus: complete
---

x86 Windows ユーザーはおそらく x64 スレッドを読もうともしないだろうと思い、新しいトピックを作成しました。ただし、ここに来たからには、この投稿を読んだ後にあのスレッドの 5 ページ目も読むことをお勧めします。

さて、基本的に新しい SHA キャッシュ最適化を施したビットコインのビルドを 2 種類コンパイルしました。1 つは SSE 命令セットに対して完全に最適化されたビルドで、最新の CPU が必要です。もう 1 つは SSE 最適化なしでコンパイルされており、XP 以降を動作可能なほぼすべての CPU で動作するはずです。SSE 版は非 SSE 版より若干高速で、どちらも x64 ビルドには劣ります。64 ビット OS をお使いの方は、これらを使う必要はありません。

**ただし、同梱の libeay32.dll には SSE が含まれている可能性があるため、どちらも動作しない場合は、その DLL を標準のビットコインに同梱されているものに置き換えてください**

[ビルドはこちらからダウンロードできます](http://www.4shared.com/file/kIewrXzp/Bitcoin_x86.html)
