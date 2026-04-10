---
title: "Re: ネットワークが長期間分断された後に再接続されたらどうなるか？"
date: 2010-08-03T18:38:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=661.msg7293#msg7293"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック661におけるギャビン・アンドレセンの投稿。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "BeeCee1"
    personSlug: "beecee1"
    date: "2010-08-03T06:12:42.000Z"
    sourceEntryId: "forum/bitcointalk/topic-661/2010-08-03-beecee1-msg7249"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> それが良いことだとも言っていない。かなり長期間にわたる単一の分裂は人々に解決策を考え出す時間を与えるが、数時間ごとに起きる多くの分裂はトランザクションがランダムに消失し、システムへの信頼を損なうことを意味する。
<!-- /tone-skip -->

トランザクションが有効であれば消えることはない。より長いブロックチェーンに移動するだけだ。

無効なトランザクションとは、分裂したチェーン間で二重支払いを試みる誰かのことだ（これは巧妙でなければならない――改変クライアントを実行するか、もう一方のブロックチェーンで作業しているマシンにウォレットをコピーする必要がある）。

あるいは、分裂が十分に長く続いた場合（100ブロック以上）、短い方のチェーンで生成されたコインを含むトランザクションは合流時に無効となる。

より短い分裂の場合、短い方のチェーンの未成熟な生成コインはチェーンの合流時に消えるが、正直なユーザーにとってはそれが最悪の結果だろう（不正を試みる誰かから無効なコインを受け取るほど不運でない限り）。
