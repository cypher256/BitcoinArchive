---
title: "Re: [PATCH] 'xlisttransactions'の実装"
date: 2010-07-30T19:48:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=611.msg6709#msg6709"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック611におけるギャビン・アンドレセンの文脈投稿。msg6706の後。"
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-07-30T18:30:40.000Z"
    sourceEntryId: "forum/bitcointalk/topic-611/2010-07-30-jgarzik-msg6687"
  - id: "q2"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-07-30T13:18:06.000Z"
    sourceEntryId: "forum/bitcointalk/topic-611/2010-07-30-gavin-andresen-msg6642"
translationStatus: complete
---

<!-- quote: q1 -->
>
> <!-- quote: q2 -->
> > 簡単な提案を二つほど。
> >
> > キー名に "class" を使うと、少なくともJavaScriptや、おそらく他の "class" が予約語の言語で問題が起きる。"type" や "variety"、その他の類義語にしておけば、後々の問題が少ない。
>
>
> もう少し具体的に言ってくれるか？ 主要なプログラミング言語はどれも、JSを含めて、文字列の中身については素直に無頓着のはずだ。文字列の中身には言語の予約キーワードや構文トークンを含めて構わない。

マップをオブジェクトに変換するのはかなり一般的だから、こういう構文を使えるようにしたい。
  foo.tx_id
…つまり foo['tx_id'] の代わりにだ。特に、データをテンプレートシステムに渡すような場合（それが object.field 構文しか理解しないこともある）には。

そして foo.class はやはりうまくいかない。
