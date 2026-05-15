---
title: "Re: 接続数"
date: 2010-03-01T02:55:12.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=58.msg580#msg580"
author: "NewLibertyStandard"
participants:
  - name: "NewLibertyStandard"
    slug: "newlibertystandard"
description: "BitcoinTalk トピック 58 における NewLibertyStandard の文脈投稿。after msg413, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Xunie"
    personSlug: "xunie"
    date: "2010-03-01T01:06:07.000Z"
    sourceEntryId: "forum/bitcointalk/topic-58/2010-03-01-xunie-msg579"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-21T03:43:48.000Z"
    sourceEntryId: "forum/bitcointalk/topic-58/2010-02-21-re-number-of-connections"
translationStatus: complete
---

<!-- quote: q1 -->
>
> <!-- quote: q2 -->
> > ノードは接続が15に達すると、それ以上接続を確立しようとしなくなる。
>
> 本当か？ 30以上の接続が簡単に得られるぞ！
> ポート8333は開いているが、ネットワーク上のすべてのノードが俺に接続してくるとは到底思えない。
> （ウェブサイトからダウンロードしたバージョン0.2を使っている。）

クライアントは接続が 15 に達すると外向き接続を作るのをやめるが、ポートが開いていれば、まだ 15 クライアントに接続していない他のクライアントからの着信接続を受け入れ続ける。ポートが開いていなければ着信接続を受け入れられないので、15 を超えるクライアントとつながることはない。
