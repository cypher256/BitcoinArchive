---
title: "Re: フラッド攻撃 0.00000001 BC"
date: 2010-08-05T16:37:53.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=287.msg7695#msg7695"
author: "17ujzChRb6VPQGyANVyktc1du"
participants:
  - name: "17ujzChRb6VPQGyANVyktc1du"
    slug: "17ujzchrb6vpqgyanvyktc1du"
description: "BitcoinTalk トピック 287 における 17ujzChRb6VPQGyANVyktc1du の文脈投稿。msg7687 の後。"
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "lfm"
    personSlug: "lfm"
    date: "2010-08-05T14:52:32.000Z"
    sourceEntryId: "forum/bitcointalk/topic-287/2010-08-05-lfm-msg7675"
translationStatus: complete
---

<!-- quote: q1 -->
> 1 BTCを100万回行ったり来たり送ると、トランザクションチェーンが1本できる。100万件の0.000001 BTCのトランザクションを送ると、100万件のほぼ独立したトランザクションができ、それらをすべて記憶しておく必要がある。bitcoinが古い深く確認済みのトランザクションを破棄できる仕組みのため、長期的には前者のオーバーヘッドは後者よりはるかに小さい。ネットワークコストは似たり寄ったりかもしれないが、単一チェーンの場合はディスク容量のコストを大幅に削減できる。
>
> 「ダスト」が再び一つに集約され、再び十分に深く確認された場合に限り、ダストの領域は破棄できる。

改良された攻撃はこんな感じになる：1BTC から始めて、0.999999999BTC を送金し、次に 0.999999998BTC を……と続ける。
結果として、100 万個（マイナス 10000）のアカウントがそれぞれ 0.000000001BTC を持つことになる。
