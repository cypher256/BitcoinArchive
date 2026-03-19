---
title: "トランザクションとスクリプト：DUP HASH160 ... EQUALVERIFY CHECKSIG"
date: 2010-06-17T02:38:31.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=195.msg1606#msg1606"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Gavin Andresenがスレッドを開始: トランザクションとスクリプト：DUP HASH160 ... EQUALVERIFY CHECKSIG"
isSatoshi: false
threadId: "bt-transactions-and-scripts-dup-hash160-equalverify-c"
threadPosition: 1
tags: []
translationStatus: complete
---

ビットコインのwallet.datを解析する小さなツールを書いているところだ。主にビットコインが正確にどのように動作するのかをよりよく理解したいからだ。

トランザクションの出力には値（ビットコインの数量）と、ビットコインに組み込まれたForth風の小さなスクリプト言語を通して実行されるバイト列があることがわかった。例えば：
['TxOut: value: 100.00 Script: DUP HASH160 6fad...ab90 EQUALVERIFY CHECKSIG']

まず、ビットコインにスクリプト言語が組み込まれていることに少し不安を感じる。非常にシンプルなスクリプト言語（ループなし、ポインタなし、数学と暗号だけ）であるにもかかわらずだ。不安なのは、より複雑であり、複雑さはセキュリティの敵だからだ。また、2番目の互換性のある実装を作ることも難しくなる。しかし、これは乗り越えられると思う。

コードを見ると、新しいトランザクションは署名をプッシュし、次に公開鍵をインタプリタのスタックにプッシュし、その後TxOutスクリプトを実行することで検証されている（この理解で合っているだろうか？）。

TxOutに任意の有効なスクリプトを持つトランザクションを作成するコードを書くことは可能だろうか？
例えば、以下のスクリプトでTxOutを作成できるか：OP_2DROP OP_TRUE
…誰でも使えるコインを作成するために？

そして、作成できるコインの種類における柔軟性こそが、このように設計された理由なのだろうか？
