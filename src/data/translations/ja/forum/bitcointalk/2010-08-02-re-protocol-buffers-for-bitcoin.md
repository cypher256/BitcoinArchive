---
title: "Re: Bitcoin用Protocol Buffers"
date: 2010-08-02T20:22:08.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=632.msg7090#msg7090"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがProtocol Buffersやboostシリアライゼーションを使わなかった理由を説明し、独自のシンプルなシリアライゼーション形式の設計思想を解説。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/308/"
translationStatus: complete
---

Protocol Buffersやboostシリアライゼーションを使わなかった理由は、完全に気密でセキュアにするには複雑すぎるように見えたからだ。コードが大きすぎて、予期しないことを行うような入力を形成する方法がないと確認できるほど読み通せない。

車輪の再発明は嫌いだし、自分でシリアライゼーションルーチンを書くことにしたのは不本意だった。現在のシリアライゼーション形式は可能な限りシンプルでフラットだ。入力ストリームの形成方法に余分な自由度はない。各ポイントで、データ構造の次のフィールドが期待される。与えられる選択肢は受信者が期待しているもののみだ。アップグレードが可能なようにバージョニングがある。

CAddressは、かなりの予約スペースを持つ数少ないオブジェクトだ。（フラグ用に約7バイト、将来のIPv6拡張の可能性のために12バイト）

ブロックやトランザクションのような大きなものは、サイズに関してこれ以上あまり最適化できない。データの大部分はハッシュ、鍵、署名であり、これらは圧縮不可能だ。シリアライゼーションのオーバーヘッドは非常に小さく、通常サイズフィールドに1バイトだ。

GavinのP2Pブロードキャストインフラの既存のものを使うというアイデアについてだが、存在しないと思う。ブロードキャストのみを必要とするP2Pシステムはほとんどない。分散ハッシュテーブルインフラを提供しようとするChordのようなライブラリがあるが、それは私たちが必要としない、また望まない非常に大きくて困難な問題だ。それらのライブラリは、私たち自身のものよりもインストールがはるかに難しい。
