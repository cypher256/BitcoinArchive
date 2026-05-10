---
title: "Re: Proof-of-work 難易度の上昇"
date: 2010-05-11T21:50:51.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=43.msg1113#msg1113"
author: "DataWraith"
participants:
  - name: "DataWraith"
    slug: "datawraith"
description: "BitcoinTalk トピック 43 における DataWraith の文脈投稿。msg1323 の前。"
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
> 私の理解では、ハッシュされるデータはほぼランダムで、ハッシュアルゴリズムは「雪崩効果」を示すので、1から始めてインクリメントし続けても、代わりに擬似ランダム値を使っても、おそらく違いはない。だが、誰かがこれを裏付けたり反証したりできないか、と思っていた。
<!-- /tone-skip -->

そう、その理解は正しい。何がハッシュされるかは関係なく、いいえ、まず SHA-256 を破らない限りはズルはできない。それは困難とされている。

暗号学的ハッシュ関数の重要な特性は、決定論的でありながら可能な限りランダムであることだ。その強度はそれに依存する――結局のところ、ランダムでなければ、明らかなパターンがあれば、そこから破られてしまう。理想的なハッシュ関数は乱数生成器のように振る舞う。何を入力しても、タイムスタンプがあろうがなかろうが、何を入れようと、ハッシュはランダムに振る舞うべきだ（つまり、すべての可能な結果が同じ事前確率を持つ）。1 ずつインクリメントするのは、毎ステップですべてを完全に変更するのと同じくらいうまくいく（これは雪崩特性から導かれる）。ただし、インクリメントを始める前の初期値は（擬似）ランダムに選ばなければならない。そうしないとすべてのコンピューターが同じ地点から開始し、最速のものが常に勝つことになる。それはここで望まれていることではない。
