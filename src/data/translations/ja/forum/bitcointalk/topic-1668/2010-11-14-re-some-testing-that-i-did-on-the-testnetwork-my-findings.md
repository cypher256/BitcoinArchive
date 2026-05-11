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
translationStatus: complete
quotes:
  - id: "q1"
    person: "ByteCoin"
    personSlug: "bytecoin"
    date: "2010-11-13T14:55:11.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> もちろん、ネットワークがフラッドされておらず、現在の取引が保留されることをあまり心配していないなら、0 承認の取引を優先的に使って、ネットワークが**実際に**フラッドされた時のために高い優先度のコインを「温存」する方がおそらく価値がある。
<!-- /tone-skip -->

次のブロックの前にフラッド攻撃が来る場合に備えて、少なくともある程度の優先度は使うべきだ。

すべての依存関係が少なくとも 1 承認を持っている限り、トランザクションが最初に十分な優先度を持っていなくても、依存関係が経過時間を重ねて優先度に達する。

<!-- tone-skip -->
> 上述した投稿で説明した、最近回転した 1000 BTC 程度を含めて優先度を上げるシステムのゲーミングは、もちろんまだ機能する！
<!-- /tone-skip -->

またはトランザクションにどれだけの優先度を使うかを管理すること。ソフトウェアが将来の計画を知らなければ、今優先度を使うべきか後のために温存すべきかわからない。しかし、そこまで詳細に踏み込む必要はないと思う。通常のユーザーとフラッド攻撃者の間には十分な差がある。

優先度がすべてを解決する必要はない。フラッド攻撃があると分かったら、-paytxfee=0.01 を追加できる。優先度があれば、その前のトランザクションは最悪でも遅くなるだけで、止まることはないはずだ。
