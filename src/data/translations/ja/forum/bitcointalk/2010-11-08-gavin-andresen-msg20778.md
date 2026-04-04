---
title: "Re: テストネットワークで行ったテストとその発見。"
date: 2010-11-08T23:57:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg20778#msg20778"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック1668におけるGavin Andresenの文脈投稿。msg21896の前。"
isSatoshi: false
threadId: "bt-some-testing-that-i-did-on-the-testnetwork-my-find"
tags: []
translationStatus: complete
---

[Quote from: ByteCoin on November 08, 2010, 02:31:22 AM](#msg20570)
> [Quote from: gavinandresen on November 07, 2010, 02:14:29 AM](#msg20419)
> > 実は…金額とその「年齢」の両方に基づいて無料トランザクションに優先順位を付ければ、この攻撃は無力化できるはずだ。
> > 
> > より大きな金額のトランザクションや、ブロックチェーンの深いところに入力がある無料トランザクション（「古いお金」）に優先順位を付ければ、通常のトランザクションは通過できる。
>
> より大きな金額のトランザクションに優先順位を付けても、問題は本当には解決しない。自分のアドレス間で大きな金額のBitcoinを無限に送り続けることでスパムが完全に可能だからだ。
>
> 古いトランザクションに優先順位を付けると、Bitcoinの購入時に大量のおつりが発生しないよう保有を分割するインセンティブが生まれる。保有を2のべき乗 * 0.01で持っていれば、おつりなしで何でも支払え、断片化も最小限になる。もちろん支出後に保有を再バランスする必要があるが、すぐにできる最善の方法は自明ではない。おつりをどう分割するか指定できるなら、特定の状況では有利かもしれない。複数の購入には3のべき乗が最適かもしれない。
> いずれにせよ、最終的な効果はトランザクションの入出力が増えることだ。おそらく平均的な入出力の数は、トランザクション内のBitcoinペニー数の対数の何らかの非常に小さい倍数（あるいは大きい分数）になるだろう。これにより平均トランザクションサイズが10倍以上増加する可能性があると見積もる。
>
> ByteCoin

いや、できない。送るたびに「新しい」ものになり、優先度は年齢に金額を掛けたものだからだ：
Code:// Priority is sum(valuein * age) / txsize  (valuein is the size of the bitcoin input, age is # of blocks deep, and txsize is the number of bytes the transaction takes up)

ウォレット内のコインをいじればいじるほど、（他の全員に比べて）それらは新しくなり、優先度は低くなる。深く考えてはいないが、コインをそのままにして必要に応じてお釣りを作る方がおそらく最善だと思う。しかし、ぜひ自分のクライアントを作成してテストネットワークで何かを壊してみてほしい！
