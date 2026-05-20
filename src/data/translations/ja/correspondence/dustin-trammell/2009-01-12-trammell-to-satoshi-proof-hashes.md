---
title: "ダスティン・トランメルからサトシへ：proof-hashes グループとアップグレード予定 (2009-01-12)"
date: 2009-01-12T21:29:52Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルが原文ママで公開。完全な mbox アーカイブはトランメルのブログ (https://blog.dustintrammell.com/i-am-not-satoshi/) から Satoshi_Nakamoto.zip として配布された"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "トランメルがハッシュレートの内訳とプルーフ・ハッシュの確認手段について質問する。"
isSatoshi: false
tags:
  - "correspondence"
  - "proof-hashes"
  - "feedback"
translationStatus: complete
relatedEntries:
  - "aftermath/2009-01-12-trammell-to-satoshi-proof-hashes"
---

On Tue, 2009-01-13 at 02:33 +0800, Satoshi Nakamoto wrote:
> ありがとう、これは知らなかった。よく作り込まれている。
> もっと古いものが長らく動いていて、ハッシュを Usenet に公開している。
> このサービスが Usenet を使っていないのは意外だ。もっとも、最近では
> 自動投稿用に Usenet へのアクセス権を取るのが難しいから仕方ないかもしれない。
> 雑誌や新聞にハッシュを掲載してもらえれば、彼らの目的（法廷での証拠利用）
> にはずっと有効に働くだろう。ビットコインとすべてのタイムスタンプサーバーは、
> 事項を定期的にブロックにまとめてチェーンへとハッシュ化していくという
> 基本的な機能を共有している。

実は 'proof-hashes' という Google Group にハッシュブロックを投稿
していて、Usenet に投稿するのと似たような結果になる。

http://groups.google.com/group/proof-hashes

そのグループはこちらが運営していて、唯一の目的が proof-of-work ハッシュの
アーカイブだ。よければアカウントを取得して、そちらのシステムからも
ここに投稿するようにして構わない。

> そう、Credit 欄は成熟するまで 0.00 のままで、成熟すると 50.00 に
> なる。成熟するまでは Credit 欄を空欄にしておいた方が分かりやすいだろうか？
> 取引の詳細（行をダブルクリックしたときに表示される画面）に
> 仕組みの説明文を入れるべきだろう。（そもそも行をダブルクリックで
> 詳細を見られることに気付いてもらえていただろうか？）

いや、空欄よりも $0.00 と表示されている方が適切だと思う。
ただ、こちらのビットコインソフトウェアのエントリ（今 4 件ある）はすべて
'unconfirmed' と表示されているので、その意味するところが分からない。
ただコインが生成されていてまだ「成熟」していないだけだと
理解はできたが、ホワイトペーパーも読んでいたので、
そちらから概念を理解していたのかもしれない。コインが成熟したら、
新しい 'credit' トランザクションが生成されるのか、それとも
既存の生成トランザクション行の Credit 欄が更新されるのか？

いや、トランザクション行をダブルクリックすれば詳細が見られるとは
気付いていなかった…… 今やってみたが、現状ではトランザクション
行と同じ情報が表示されるだけだ。ここにもっと多くの情報を入れれば、
確かに有用になると思う。

> まだなら v0.1.3 に更新しておいてほしい。このバージョンで安定性が
> かなり上がった。

こちらは 0.1.1 を実行していた…… これから更新する。新バージョン通知か
自動更新機能があった方が良いかもしれない (:

電子マネーと暗号はこちらが非常に興味を持っている 2 つの分野だ。
ご想像のとおり、暗号メーリングリストへの投稿を目にしてすぐに
このプロジェクトに引き付けられた。フィードバックや新機能の検証など、
いつでも声をかけてくれ。喜んで協力する。

それでは。

-- 
Dustin D. Trammell
dtrammell@dustintrammell.com
http://www.dustintrammell.com
