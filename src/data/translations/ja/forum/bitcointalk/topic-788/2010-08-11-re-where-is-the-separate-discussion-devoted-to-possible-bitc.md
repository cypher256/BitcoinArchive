---
title: "Re: Bitcoinの潜在的な弱点に関する個別の議論はどこですか"
date: 2010-08-11T22:40:25.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=788.msg8804#msg8804"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがトランザクションへのPoWの適用と、DoS攻撃対策としてのブロック受信減少の検出について議論。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/344/"
translationStatus: complete
---

そこまで破壊的な変更にする必要はない。新しいノードは、PoWなしのトランザクションの受け入れを拒否し始める前に、ほとんどのノードがすでにアップグレードされるまで長い間古いトランザクションを受け入れることができる。あるいは、常に古いトランザクションを受け入れるが、期間あたりの数を制限することもできる。

トランザクションへのPoWについて何度も考えたが、通常は0.01のトランザクション手数料が本質的に同様でより良いという結論に至る。0.01は基本的にProof-of-workだが、無駄にならない。ただし、問題が大量のトランザクションの検証である場合、PoWの方が高速にチェックできるだろう。

より一般的な包括的な部分解決策は、受信ブロック数の異常な減少を検出するアイデアを実装することだ。そうすれば、攻撃者がDoS攻撃から利益を得るにはネットワークパワーのかなりの部分が必要になる。

[Quote from: gavinandresen on August 11, 2010, 04:10:56 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-788/2010-08-11-gavin-andresen-msg8761/)
> BitcoinのP2Pネットワークはさまざまなサービス拒否攻撃を受ける可能性がある。
>
> はい、言った。
>
> 修正方法について建設的な提案があるのか、それともできるからという理由で壊すのを楽しむタイプの人間なのか？
>
> 頭の中で浮かんでいるアイデアで、うまくいくかもしれないしうまくいかないかもしれないもの：
>
> + クライアント同士が、単位時間あたりいくつのトランザクションを受け入れるかを相互に伝える。クライアントがそれ以上送ってきたら（多少の誤差範囲内で）、切断する。一般的なユーザーの推定トランザクション数と現在のユーザー数の推定に基づいたデフォルト値をコンパイル時に設定する。
>
> + クライアント間の接続プロセスの一部としてある程度のプルーフ・オブ・ワークを要求する（「シビル」攻撃の防止に役立つ）。
>
> これは活発な研究分野だ。例えば次を参照：http://scholar.google.com/scholar?q=ddos+attacks+by+subverting+membership

はい、そう言った。
+1

この時点でのデモンストレーションテストは、すでにわかっていることを示すだけで、システムの強化から運用上の火消しに開発時間を転用させるだけだろう。
