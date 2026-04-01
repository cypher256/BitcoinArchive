---
title: "Re: (context post by Gavin Andresen)"
date: 2010-08-11T16:40:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=788.msg8765#msg8765"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック788におけるGavin Andresenのコンテキスト投稿。msg8804の前。"
isSatoshi: false
tags: []
translationStatus: complete
---
[Quote from: davidonpda on August 11, 2010, 04:19:43 PM](https://bitcointalk.org/index.php?topic=788.msg8764#msg8764)
> [Quote from: gavinandresen on August 11, 2010, 04:10:56 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/2010-08-11-gavin-andresen-msg8761/)
> > + クライアント間の接続プロセスの一部としてある程度のプルーフ・オブ・ワークを要求する（「シビル」攻撃の防止に役立つ）。
>
>
> これは素晴らしいアイデアではないか？Hashcashのような？
>
> トランザクションの文字列をハッシュし、プルーフ・オブ・ワーク付きでなければならないようにする。例えば、最新のPCで計算に5秒かかるようにする。POWのチェックはBitcoinと同様に簡単で非常に速いが、攻撃者が無限のCPUパワーを持っていない限り、プルーフ・オブ・ワークなしのランダムデータによるフラッド攻撃を阻止できる。

実は初回接続時に1分から3分のプルーフ・オブ・ワークを考えていたのであって、トランザクション送信時ではないが、ネットワークに送信されるすべてのトランザクションに何らかのプルーフ・オブ・ワークを要求するのは非常に興味深いアイデアだ！実装も簡単なはずだ（トランザクションにnonceと完全または部分的なハッシュを追加する）...
