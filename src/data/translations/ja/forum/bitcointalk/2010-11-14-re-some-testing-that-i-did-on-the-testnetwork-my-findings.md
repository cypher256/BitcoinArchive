---
title: "Re: テストネットワークで行ったテスト、私の発見"
date: 2010-11-14T16:53:19.000Z
source: bitcointalk
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
threadTitle: "Some testing that I did on the testnetwork, my findings."
threadPosition: 2
translationStatus: complete
---

[Quote from: ByteCoin on November 13, 2010, 11:55:11 PM](https://bitcointalk.org/index.php?topic=1668.msg21899#msg21899)もちろん、ネットワークがフラッド攻撃を受けておらず、現在のトランザクションが保留されることをそれほど心配していないなら、ネットワークがフラッド攻撃を受けている時のために高優先度のコインを「温存」するため、0承認のトランザクションを優先的に使う方が良いでしょう。
次のブロックの前にフラッド攻撃が来る場合に備えて、少なくともある程度の優先度は使うべきです。

すべての依存関係が少なくとも1承認を持っている限り、トランザクションが最初に十分な優先度を持っていなくても、依存関係が経過時間を重ねて優先度に達します。

引用：上の投稿で説明したように、最近回転させた1000 BTC程度を含めて優先度を上げることでシステムをゲームすることは、もちろん依然として可能です！
またはトランザクションにどれだけの優先度を使うかを管理すること。ソフトウェアが将来の計画を知らなければ、今優先度を使うべきか後のために温存すべきかわかりません。しかし、そこまで詳細に踏み込む必要はないと思います。通常のユーザーとフラッド攻撃者の間には十分な差があります。

優先度がすべてを解決する必要はありません。フラッド攻撃があると分かったら、-paytxfee=0.01を追加できます。優先度があれば、その前のトランザクションは最悪でも遅くなるだけで、止まることはないはずです。
