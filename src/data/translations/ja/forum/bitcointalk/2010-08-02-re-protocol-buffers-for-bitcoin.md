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

Protocol Buffersやboostシリアライゼーションを使わなかった理由は、完全に気密でセキュアにするには複雑すぎるように見えたからです。コードが大きすぎて、予期しないことを行うような入力を形成する方法がないと確認できるほど読み通せません。

車輪の再発明は嫌いですし、自分でシリアライゼーションルーチンを書くことにしたのは不本意でした。現在のシリアライゼーション形式は可能な限りシンプルでフラットです。入力ストリームの形成方法に余分な自由度はありません。各ポイントで、データ構造の次のフィールドが期待されます。与えられる選択肢は受信者が期待しているもののみです。アップグレードが可能なようにバージョニングがあります。

CAddressは、かなりの予約スペースを持つ数少ないオブジェクトです。（フラグ用に約7バイト、将来のIPv6拡張の可能性のために12バイト）

ブロックやトランザクションのような大きなものは、サイズに関してこれ以上あまり最適化できません。データの大部分はハッシュ、鍵、署名であり、これらは圧縮不可能です。シリアライゼーションのオーバーヘッドは非常に小さく、通常サイズフィールドに1バイトです。

GavinのP2Pブロードキャストインフラの既存のものを使うというアイデアについてですが、存在しないと思います。ブロードキャストのみを必要とするP2Pシステムはほとんどありません。分散ハッシュテーブルインフラを提供しようとするChordのようなライブラリがありますが、それは私たちが必要としない、また望まない非常に大きくて困難な問題です。それらのライブラリは、私たち自身のものよりもインストールがはるかに難しいです。
