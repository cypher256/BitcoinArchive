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
---

[Quote from: sirius-m on August 11, 2010, 02:01:53 AM](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-08-11-sirius-msg8657/)
> FAQに各トランザクション後のバックアップの警告を追加した。ちなみに、バックアップ前にクライアントを停止する必要があるのか？ ちょっと不便だな。自動バックアップがあると便利だ。

バックアップの数秒前（5秒程度）以内に何もしなかったり、支払いを受けたりしなければ、クライアントを停止せずにバックアップを取ることができる。

[Quote from: gridecon on August 11, 2010, 08:46:08 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-08-11-gridecon-msg8795/)
> 待ってくれ、また混乱している。Bitcoinは各トランザクションごとにウォレットを「空にする」ようプログラムされているのが驚きの本質だと思っていた。

いいえ、通常は各トランザクションでウォレットを空にするわけではない。金額に近くなるように合計できる最小のコインセットを使う。この場合、残念ながら彼のウォレットには9000 BTCの単一の「紙幣」が入っており、1 BTCと8999 BTCのお釣りを得るために崩す必要があった。
