---
title: "サトシからダスティン・トランメルへ：コイン成熟と v0.1.3 へのアップグレード (2009-01-12)"
date: 2009-01-12T18:52:45Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルが原文ママで公開。完全な mbox アーカイブはトランメルのブログ (https://blog.dustintrammell.com/i-am-not-satoshi/) から Satoshi_Nakamoto.zip として配布された"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシが v0.1.0 のスレッドバグを説明し、コイン成熟ルール（0.00 → 50.00）を解説、v0.1.3 への更新を促す。"
isSatoshi: true
tags:
  - "correspondence"
  - "coin-maturity"
  - "timestamp"
  - "v0-1-3"
translationStatus: complete
relatedEntries:
  - "aftermath/2009-01-12-satoshi-to-trammell-coin-maturity"
---

> ちょうどそちらの論文を読み進めているところだ。タイムスタンプサーバーの
> 節で新聞や Usenet に言及されていたので、もしまだ知らなければ
> 興味を持つかもしれないと思った。
>
> http://www.publictimestamp.org/

ありがとう、これは知らなかった。よく作り込まれている。
もっと古いものが長らく動いていて、ハッシュを Usenet に公開している。
このサービスが Usenet を使っていないのは意外だ。もっとも、最近では
自動投稿用に Usenet へのアクセス権を取るのが難しいから仕方ないかもしれない。
雑誌や新聞にハッシュを掲載してもらえれば、彼らの目的（法廷での証拠利用）
にはずっと有効に働くだろう。ビットコインとすべてのタイムスタンプサーバーは、
事項を定期的にブロックにまとめてチェーンへとハッシュ化していくという
基本的な機能を共有している。


> ところで、こちらもアルファコードをワークステーションの 1 台で動かして
> いる。これまで「Generated」のメッセージが 2 件出ているが、
> 「Credit」欄は 0.00 のままで残高も変わっていない。これはコインが
> 有効になるための経過時間／成熟の要件によるものか？

そう、Credit 欄は成熟するまで 0.00 のままで、成熟すると 50.00 に
なる。成熟するまでは Credit 欄を空欄にしておいた方が分かりやすいだろうか？
取引の詳細（行をダブルクリックしたときに表示される画面）に
仕組みの説明文を入れるべきだろう。（そもそも行をダブルクリックで
詳細を見られることに気付いてもらえていただろうか？）

まだなら v0.1.3 に更新しておいてほしい。このバージョンで安定性が
かなり上がった。

Satoshi
