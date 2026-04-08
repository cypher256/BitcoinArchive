---
title: "Re: Need a post writing up some things users should know"
date: 2010-08-23T01:31:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=873.msg10728#msg10728"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "BitcoinTalkトピック873におけるmizerydeariaの文脈投稿。after msg10715, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "nelisky"
    personSlug: "nelisky"
    date: "2010-08-23T00:38:10.000Z"
    sourceEntryId: "forum/bitcointalk/topic-873/2010-08-23-nelisky-msg10725"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-19T20:14:01.000Z"
    sourceEntryId: "forum/bitcointalk/topic-873/2010-08-19-need-a-post-writing-up-some-things-users-should-know"
  - id: "q3"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-08-19T20:14:01.000Z"
    sourceEntryId: "forum/bitcointalk/topic-873/2010-08-19-need-a-post-writing-up-some-things-users-should-know"
translationStatus: complete
---

**バックアップに関する継続的な議論については http://bitcointalk.org/index.php?topic=921.0 を参照**

<!-- quote: q1 -->
> <!-- quote: q2 -->
> > - wallet.datファイルをいじり回さないようにという警告。データベースファイルであり、思っているほど単純ではない。このBeta版では、まだ改ざん防止対策を施す時間が取れていない。動かしたりすると期待通りに動作しない可能性がある。
>
>
> では、どれくらい単純なんだろう？ちょうど今、昨日投稿したくじサイトに対して確実なバックアップを考えていて、この情報を探すのに苦労している。bitcoindは安全な状態でダンプできるのか、あるいは少なくともリクエストに応じてフラッシュできるのか？トランザクションの最中にファイルをバックアップしたら、全体を失うのか、それとも進行中の更新だけを失うのか？いつバックアップする必要があるのか？送金は明らかで、自動的に鍵ペアが作られる。しかし受信した送金についてはどうなんだ？私が知る限り、すでに持っていた鍵ペアで、新しいアドレスを作る必要はないはずだ。それともbitcoinは受信側でも同じおつりのダンスをやっているのか？
>
> この部分は、私が思うに、この中でも最も重要な部分だ。MSEや時計のずれは通常のプログラム利用を妨げるかもしれないが、ウォレットバックアップの問題は人々に大量のコインを失わせており、それは明らかに最悪で、継続利用の支援にはほとんどならない。

このコメントは、議論が指数的に広がるよう、このスレッドをスレッド表示にする価値があると思える。ただ、このフォーラムがスレッド表示でない場合のために、簡単に（話が逸れないように）述べると、Bitcoinプロセスを中断せずに定期的またはトリガーされたバックアップを扱うための、何らかの確立された手順や仕組みがあるべきだ。普及への動機をより強く与えるためには、データの信頼性/可用性をできる限り「完璧に」することが必須に思える。

実は、これはそんなに脱線していない。

<!-- quote: q3 -->
> - wallet.datファイルをいじり回さないようにという警告。データベースファイルであり、思っているほど単純ではない。このBeta版では、まだ改ざん防止対策を施す時間が取れていない。動かしたりすると期待通りに動作しない可能性がある。

ウォレットファイルやバックアップの取り扱いについて警告を導入したり、注意と遅延の前例を確立したりする代わりに、上で提案した通り、データ/ウォレットファイルのバックアップ実装にもっと考察と確立が必要だ。

現在のデータフローのプロセス/構造には詳しくないが、誰かがデータの流れを示す図のようなものを書いたり描いたりしてくれたら、その図のような情報を元に、私のような他の人もどう動くかを理解する助けになり、改善の提案ができるかもしれない。あるいは、どのデータ送受信の後に自動化された/トリガーされたバックアップや類似のアクションを実装する価値があるかといったことを認識できるかもしれない。

**バックアップに関する継続的な議論については http://bitcointalk.org/index.php?topic=921.0 を参照**
