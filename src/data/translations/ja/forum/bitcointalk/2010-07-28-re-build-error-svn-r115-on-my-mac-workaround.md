---
title: "Re: Macでのビルドエラー SVN r115：回避策"
date: 2010-07-28T21:23:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=604.msg6273#msg6273"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがOSXビルドの問題について対応し、Crypto++ ASM SHA-256の互換性とmidstate最適化による1.7倍の高速化について説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/285/"
translationStatus: complete
---

OSXビルドで壊したのはそれだけだったのか？！ その一箇所の変更だけで実際に動作するのか？

makefile.vcでも同じことをしなければならなかった。コンパイルはできたが、SHA-256が正しく動作せず、毎回同じ不正なハッシュを返していた。

今は無効にしておき、誰かが修正方法を見つけたら再度有効にしよう。midstate最適化により、まだ1.7倍高速だ。

Crypto++ ASM SHA-256はLinuxとWindows（MinGW）のGCCで動作する。

このmakefile.osxの変更をSVNにアップロードした。（これでコンパイルできるか教えてくれ）
