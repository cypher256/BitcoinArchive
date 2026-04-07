---
title: "Re: overflow bug SERIOUS"
date: 2010-08-16T03:09:52.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9657#msg9657"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "BitcoinTalkトピック823におけるNewLibertyStandardの文脈投稿。after msg9648, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "bdonlan"
    personSlug: "bdonlan"
    date: "2010-08-16T02:39:55.000Z"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-16T02:16:10.000Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-16-satoshi-msg9642"
translationStatus: complete
---

<!-- quote: q1 -->
> 
> <!-- quote: q2 -->
> > 不正チェーンも、より多くのノードがアップグレードするにつれて鈍化している。
> > 
> > 74638以降、すでに14ブロック生成している。0.3.10のビルドは2〜3時間前にアップロードされた。私が接続しているノードのうち、半数以上がすでに0.3.10だ。おそらく不正チェーンよりも多くの計算力をすでに持っていると思う。
> 
> それでも、古いバージョンからの接続を拒否する別バージョンを出すのが良いと思う。そうしないとネットワークがしばらく分断されたままになるかもしれない。 :/

古いクライアントは接続させたままにしておきたい。正しいチェーンが不正なチェーンを追い越したときに、彼らも正しいチェーンに戻ってくるからだ。もっとも、古いチェーンが分岐したチェーンをどこまで遡って受け入れるかについて、具体的なことは知らない。
