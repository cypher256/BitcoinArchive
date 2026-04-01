---
title: "Re: （AndrewBuckのコンテキスト投稿）"
date: 2010-07-17T19:46:48.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=419.msg3792#msg3792"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
description: "BitcoinTalkトピック419におけるAndrewBuckのコンテキスト投稿。msg3830の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

正常な動作には1つで十分だが、接続数が多いほどネットワークのセグメント化を防げる。常に15なのが奇妙に思えたので、制限があるのかと思っただけだ。

プロトコル自体がこのようなメカニズムをサポートすべきだと思う。知っておくと良い。自分の理解では、IRCサーバーはより恒久的な解決策が実装されるまでの一時的なものだ。これはおそらく早めに対処する必要がある。システムの成長がすぐにIRCサーバーを圧倒するからだ。単一障害点でもあり、クライアントには他の方法で互いを見つける手段があるが、IRCサーバーを失うとネットワークがフラグメント化し、相互接続されたノードの複数の「島」ができる可能性がある。この島状態が十分長く続くと、トランザクションが失われる可能性がある。

-Buck
