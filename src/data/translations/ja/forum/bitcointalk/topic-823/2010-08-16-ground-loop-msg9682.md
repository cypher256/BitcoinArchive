---
title: "Re: オーバーフローバグ深刻"
date: 2010-08-16T05:07:50.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=823.msg9682#msg9682"
author: "Ground Loop"
participants:
  - name: "Ground Loop"
    slug: "ground-loop"
description: "BitcoinTalkトピック823におけるGround Loopの文脈投稿。サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-16T01:00:45.000Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-16-re-overflow-bug-serious"
  - id: "q2"
    person: "Ground Loop"
    personSlug: "ground-loop"
    date: "2010-08-16T00:29:55.000Z"
    sourceEntryId: "forum/bitcointalk/topic-823/2010-08-16-ground-loop-msg9609"
translationStatus: complete
---

<!-- quote: q1 -->
>
> <!-- quote: q2 -->
> > 影響についての質問：不正ブロックの後、不正ブロックチェーンを使ってトランザクションを送信した。
> >
> > このトランザクションの状態はどうなる？
> > 見たところ、（更新後の）送信側クライアントのウォレットには差し引かれた金額が表示されている。
> >
> > これは修正されたチェーンに取り込まれ直すのか？そして受信者はそれを使えるようになるのか？
>
> そうだ、修正されたチェーンに取り込まれ直す。トランザクションは消えず、両側で引き続き見えるが、コンファメーション数は0に戻ってまたカウントが上がり始める。
>
> 50 BTCが消えるのは、ブロック 74638以降に不正チェーンでブロックを生成した場合だけだ。不正チェーンで生成したブロックは、いずれにしてもまだ成熟していないはずだ。

興味深い。このシステムの奥底をどのように進んでいくかを見るのは魅力的だ。
私が生成したのはブロック 73746だった。
    CTxOut(nValue=50.00000000, scriptPubKey=0x8DDD5C7DADB2D43AC5F186)
08/12/10 02:35 generated 50.00

そしてそのうち49.00を 19Nzg21hQQDAY5GTdTTuUVPA4MaE7AusXz に送った（壊れたチェーンを使って）。

今は、そのノードが受信に気付き、新しいチェーンを使うようになるのを待っている。
