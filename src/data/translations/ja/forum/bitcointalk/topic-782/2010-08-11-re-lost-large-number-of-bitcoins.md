---
title: "Re: 大量のビットコインを紛失"
date: 2010-08-11T21:46:51.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=782.msg8803#msg8803"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがウォレットのバックアップ方法と、トランザクション時のコイン選択の仕組みについて説明。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/343/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "sirius-m"
    date: "2010-08-10T17:01:53.000Z"
    sourceEntryId: "forum/bitcointalk/topic-782/2010-08-11-sirius-msg8657"
  - id: "q2"
    person: "gridecon"
    date: "2010-08-11T11:46:08.000Z"
    sourceEntryId: "forum/bitcointalk/topic-782/2010-08-11-gridecon-msg8795"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> FAQに各トランザクション後にバックアップを取るという警告を追加した。ちなみにバックアップを取る前にクライアントを停止する必要があるのか？それは少し不便だ。自動バックアップは確かに便利だろう。
<!-- /tone-skip -->

バックアップの数秒前（5秒程度）以内に何もしなかったり、支払いを受けたりしなければ、クライアントを停止せずにバックアップを取ることができる。

<!-- quote: q2 -->
<!-- tone-skip -->
> 待ってくれ、また混乱した。驚きの本質は、Bitcoinが各トランザクションで「ウォレットを空にする」ようプログラムされていることだと思っていた。
<!-- /tone-skip -->

いいえ、通常は各トランザクションでウォレットを空にするわけではない。金額に近くなるように合計できる最小のコインセットを使う。この場合、残念ながら彼のウォレットには9000 BTCの単一の「紙幣」が入っており、1 BTCと8999 BTCのお釣りを得るために崩す必要があった。
