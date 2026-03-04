---
title: "Re: Bitcoinの潜在的な弱点に関する個別の議論はどこですか"
date: 2010-08-11T22:40:25.000Z
source: bitcointalk
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

[Quote from: gavinandresen on August 11, 2010, 04:10:56 PM](https://bitcointalk.org/index.php?topic=788.msg8761#msg8761)BitcoinのP2Pネットワークはさまざまな種類のサービス拒否攻撃を受ける可能性があります。

はい、そう言った。
+1

この時点でのデモンストレーションテストは、すでにわかっていることを示すだけで、システムの強化から運用上の火消しに開発時間を転用させるだけだろう。
