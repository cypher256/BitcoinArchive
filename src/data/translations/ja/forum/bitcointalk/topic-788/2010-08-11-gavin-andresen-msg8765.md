---
title: "Re:（ギャビン・アンドレセンの文脈投稿）"
date: 2010-08-11T16:40:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=788.msg8765#msg8765"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック788におけるギャビン・アンドレセンの文脈投稿。msg8804の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "gavinandresen"
    date: "2010-08-11T07:10:56.000Z"
    sourceEntryId: "forum/bitcointalk/topic-788/2010-08-11-gavin-andresen-msg8761"
---
[Deleted] Quote from: davidonpda on August 11, 2010, 04:19:43 PM
> <!-- quote: q1 -->
> > + クライアント間の接続プロセスの一部として何らかのプルーフ・オブ・ワークを要求する（「シビル」攻撃の防止に役立つ）。
> 
> 
> それは素晴らしいアイデアではないか？hashcashのような？
> 
> トランザクションの文字列をハッシュすることが要求される。プルーフ・オブ・ワーク付きで、例えば現代のPCで計算に5秒かかるような。bitcoinと同様にPOWのチェックは受信側マシンにとって簡単で非常に高速だが、攻撃者が無限のCPUパワーを持たない限りランダムデータによるフラッド攻撃を阻止できる。

実は初回接続時に1分から3分のプルーフ・オブ・ワークを考えていたのであって、トランザクション送信時ではないが、ネットワークに送信されるすべてのトランザクションに何らかのプルーフ・オブ・ワークを要求するのは非常に興味深いアイデアだ！実装も簡単なはずだ（トランザクションにnonceと完全または部分的なハッシュを追加する）...
