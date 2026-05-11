---
title: "Re: Proof-of-work 難易度の上昇"
date: 2010-02-26T01:35:08.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg541#msg541"
author: "Suggester"
participants:
  - name: "Suggester"
    slug: "suggester"
description: "BitcoinTalk トピック 43 における Suggester の文脈投稿。after msg510, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-25T23:06:29.000Z"
    sourceEntryId: "forum/bitcointalk/topic-43/2010-02-25-re-proof-of-work-difficulty-increasing"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-16T17:36:40.000Z"
    sourceEntryId: "forum/bitcointalk/topic-43/2010-02-16-re-proof-of-work-difficulty-increasing"
translationStatus: complete
---

<!-- quote: q1 -->
> より低い難易度を受け入れるという話が何のことかわからない。

俺たちが本質的に議論していたのは、Sabunir の質問だ。すなわち、誰かがプログラムのソースコードをいじってブロック生成難易度を非常に簡単に調整し、自分でネットワークを作って、例えば 50,000 ブロックの proof-of-work を数秒で生成し、最終的にそれを実際のネットワークに伝播させて、技術的には彼の証明が「最長」になるので、彼の新しい偽ブロックへの「投票」を盗む――これを何が防ぐのかという話だ。だから、与えられた PoW に実際にどれだけの作業が投入されたかを検証する方法はあるのか（例えば、各ハッシュの先頭にゼロがいくつあるかとか）？

<!-- quote: q2 -->
> どのみちうまくいかない。なぜならブロック間の平均は1分しかなく、ネットワークが大きくなったときのブロードキャスト遅延に近すぎるからだ。

ついでに、約 100,000 台のマシンのネットワーク全体に proof-of-work を伝播させるおおよその時間は？ ピラミッド型でブロードキャストするように接続を最適化して必要な時間を最小化する方法はあるのか？ 例えば、ブロックの作成者がそれを 10 ノードに送り、その 10 ノードが 100 ノードに送る（ただしその 100 ノードが元の 11 ノードに含まれていない場合）、そしてその 100 ノードが 1000 ノードに伝える（ただしその 1000 ノードが元の 111 ノードに含まれていない場合）、というふうにして時間を節約する。
