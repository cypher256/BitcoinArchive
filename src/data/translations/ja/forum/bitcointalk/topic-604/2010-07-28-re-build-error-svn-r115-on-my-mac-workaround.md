---
title: "Re: Mac での SVN r115 ビルドエラー：回避策"
date: 2010-07-28T21:23:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=604.msg6273#msg6273"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが OSX ビルドの問題について対応し、Crypto++ ASM SHA-256 の互換性と midstate 最適化による 1.7倍の高速化について説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/285/"
translationStatus: complete
---

OSX ビルドで壊したのはそれだけだったのか？！ その一箇所の変更だけで実際に動作するのか？

makefile.vc でも同じことをしなければならなかった。コンパイルはできたが、SHA-256 が正しく動作せず、毎回同じ不正なハッシュを返していた。

今は無効にしておき、誰かが修正方法を見つけたら再度有効にしよう。midstate 最適化により、まだ 1.7倍高速だ。

Crypto++ ASM SHA-256 は Linux と Windows（MinGW）の GCC で動作する。

この makefile.osx の変更を SVN にアップロードした。（これでコンパイルできるか教えてくれ）
