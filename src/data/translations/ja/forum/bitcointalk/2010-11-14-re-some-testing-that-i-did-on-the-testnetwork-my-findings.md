---
title: "Re: テストネットワークで行ったテスト、私の発見"
date: 2010-11-14T16:53:19.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg21959#msg21959"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「テストネットワークで行ったテスト、私の発見」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/503/"
threadId: "bt-some-testing-that-i-did-on-the-testnetwork-my-find"
translationStatus: complete
---

> [Quote from: ByteCoin on November 13, 2010, 11:55:11 PM](#msg21899)
> もちろん、ネットワークがフラッディングされておらず、現在のトランザクションが保留されることをあまり心配していないのであれば、0確認トランザクションを優先的に使い、より高い優先度のコインをネットワークが**実際に**フラッディングされている時のために「温存」する方が良いだろう。
> 自分の理解が間違っていなければ、現在のロジックは古いトランザクションの蓄積された優先度を消費しやすいように見える。些細な点ではあるが。
> 上の自分の投稿で述べたように、最近回転させた1000 BTC程度を含めて優先度を引き上げるというシステムの悪用は、もちろんまだ可能だ！
> ByteCoin

次のブロックの前にフラッド攻撃が来る場合に備えて、少なくともある程度の優先度は使うべきだ。

すべての依存関係が少なくとも1承認を持っている限り、トランザクションが最初に十分な優先度を持っていなくても、依存関係が経過時間を重ねて優先度に達する。

引用：上の投稿で説明したように、最近回転させた1000 BTC程度を含めて優先度を上げることでシステムをゲームすることは、もちろん依然として可能です！
またはトランザクションにどれだけの優先度を使うかを管理すること。ソフトウェアが将来の計画を知らなければ、今優先度を使うべきか後のために温存すべきかわからない。しかし、そこまで詳細に踏み込む必要はないと思う。通常のユーザーとフラッド攻撃者の間には十分な差がある。

優先度がすべてを解決する必要はない。フラッド攻撃があると分かったら、-paytxfee=0.01を追加できる。優先度があれば、その前のトランザクションは最悪でも遅くなるだけで、止まることはないはずだ。
