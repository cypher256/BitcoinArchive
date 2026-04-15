---
title: "Re: Proof-of-work難易度の上昇"
date: 2010-05-11T21:50:51.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg1113#msg1113"
author: "DataWraith"
participants:
  - name: "DataWraith"
    slug: "datawraith"
description: "BitcoinTalkトピック43におけるDataWraithの文脈投稿。msg1323の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "Laszlo Hanyecz"
    personSlug: "laszlo-hanyecz"
    date: "2010-05-11T04:13:07.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> この統計/数学に多少のバックグラウンドがある人が教えてくれないか。
<!-- /tone-skip -->

そう、その理解は正しい。何がハッシュされるかは関係なく、いいえ、まずSHA-256を破らない限りはズルはできない。それは困難とされている。

暗号学的ハッシュ関数の重要な特性は、決定論的でありながら可能な限りランダムであることだ。その強度はそれに依存する――結局のところ、ランダムでなければ、明らかなパターンがあれば、そこから破られてしまう。理想的なハッシュ関数は乱数生成器のように振る舞う。何を入力しても、タイムスタンプがあろうがなかろうが、何を入れようと、ハッシュはランダムに振る舞うべきだ（つまり、すべての可能な結果が同じ事前確率を持つ）。1ずつインクリメントするのは、毎ステップですべてを完全に変更するのと同じくらいうまくいく（これは雪崩特性から導かれる）。ただし、インクリメントを始める前の初期値は（擬似）ランダムに選ばなければならない。そうしないとすべてのコンピューターが同じ地点から開始し、最速のものが常に勝つことになる。それはここで望まれていることではない。
