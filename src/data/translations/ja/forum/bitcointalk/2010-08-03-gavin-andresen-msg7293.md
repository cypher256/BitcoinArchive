---
title: "Re:（ギャビン・アンドレセンの引用投稿）"
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
---

[Quote from: BeeCee1 on August 03, 2010, 03:12:42 PM](https://bitcointalk.org/index.php?topic=661.msg7249#msg7249)
> 良いことだと言っているわけでもない。長期間にわたる単一の分裂があれば人々は解決策を考え出せるが、数時間続く分裂が何度もあるとトランザクションがランダムに消え、システムへの信頼が損なわれる。

トランザクションが有効であれば消えることはない。より長いブロックチェーンに移動するだけだ。

無効なトランザクションとは、分裂したチェーン間で二重支払いを試みる誰かのことだ（これは巧妙でなければならない――改変クライアントを実行するか、もう一方のブロックチェーンで作業しているマシンにウォレットをコピーする必要がある）。

あるいは、分裂が十分に長く続いた場合（100ブロック以上）、短い方のチェーンで生成されたコインを含むトランザクションは合流時に無効となる。

より短い分裂の場合、短い方のチェーンの未成熟な生成コインはチェーンの合流時に消えるが、正直なユーザーにとってはそれが最悪の結果だろう（不正を試みる誰かから無効なコインを受け取るほど不運でない限り）。
