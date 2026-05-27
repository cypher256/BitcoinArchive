---
title: "Re: ユーザーが知っておくべきことをまとめた投稿が必要"
date: 2010-08-23T01:31:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=873.msg10728#msg10728"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "BitcoinTalk トピック 873 における mizerydearia の文脈投稿。after msg10715, サトシを引用."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "nelisky"
    personSlug: "nelisky"
    date: "2010-08-23T00:38:10.000Z"
    sourceEntryId: "forum/bitcointalk/topic-873/2010-08-23-nelisky-msg10725"
  - id: "q2"
    parent: "q1"
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
> > - wallet.dat ファイルをいじらないよう警告。これはデータベースファイルであり、思っているほど単純ではない。このベータ版では、まだいじり防止対策をする時間がなかった。入れ替えたりし始めると、期待通りに動作しないかもしれない。
>
>
> 具体的にどのくらい単純なのか？昨日投稿した宝くじサイトの確実なバックアップについて今考えているが、これに関する情報を見つけるのに苦労している。bitcoind は安全な状態でダンプできるのか、少なくとも要求に応じてフラッシュできるのか？トランザクション中にファイルをバックアップしたら、全体を失うのか、進行中の更新だけを失うのか？いつバックアップが必要か？送金ごとに必要なのは明らかだ。鍵ペアは自動的に作成されるが、受け取ったトランザクションについてはどうか？鍵ペアは既にあった。新しいアドレスを作成する必要はないようだ。それとも Bitcoin は受取側でも同じおつりの処理をするのか？
>
> この部分が最も重要だと思う。MSE やクロックスキューは通常のプログラム使用を妨げるかもしれないが、ウォレットバックアップの問題は人々に大量のコインを失わせた。これは明らかに最悪であり、継続的な使用のサポートにはあまり役立たない。

このコメントは、議論が指数的に広がるよう、このスレッドをスレッド表示にする価値があると思える。ただ、このフォーラムがスレッド表示でない場合のために、簡単に（話が逸れないように）述べると、Bitcoin プロセスを中断せずに定期的またはトリガーされたバックアップを扱うための、何らかの確立された手順や仕組みがあるべきだ。普及への動機をより強く与えるためには、データの信頼性/可用性をできる限り「完璧に」することが必須に思える。

実は、これはそんなに脱線していない。

<!-- quote: q3 -->
> - wallet.dat ファイルをいじらないよう警告。これはデータベースファイルであり、思っているほど単純ではない。このベータ版では、まだいじり防止対策をする時間がなかった。入れ替えたりし始めると、期待通りに動作しないかもしれない。

ウォレットファイルやバックアップの取り扱いについて警告を導入したり、注意と遅延の前例を確立したりする代わりに、上で提案した通り、データ/ウォレットファイルのバックアップ実装にもっと考察と確立が必要だ。

現在のデータフローのプロセス/構造には詳しくないが、誰かがデータの流れを示す図のようなものを書いたり描いたりしてくれたら、その図のような情報を元に、私のような他の人もどう動くかを理解する助けになり、改善の提案ができるかもしれない。あるいは、どのデータ送受信の後に自動化された/トリガーされたバックアップや類似のアクションを実装する価値があるかといったことを認識できるかもしれない。

**バックアップに関する継続的な議論については http://bitcointalk.org/index.php?topic=921.0 を参照**
