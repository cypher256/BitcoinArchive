---
title: "ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-03T16:23:49Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014818.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "James A. Donald"
    slug: "james-donald"
description: "「善良な者たちの集合体」が単一の攻撃者より多くのCPUパワーを持つことが要件であることをSatoshiが明確にし、小規模な事業者でも利益的にビットコインを生成できることを説明した。"
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 5
isSatoshi: true
tags:
  - "cpu-power"
  - "incentives"
  - "mining"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/3/"
translationStatus: complete
---

>> 正直なノードがネットワーク上で最も多くのCPUパワーを支配している限り、
>> 最も長いチェーンを生成し、攻撃者を上回ることができる。
>
> しかし実際には支配していない。悪者は日常的に10万台以上の
> ゾンビファームを支配している。スパム送信ゾンビのブラックリストを
> 運用している知人によると、1日に100万台の新しいゾンビが
> 確認されることも珍しくないという。
>
> これはhashcashが今日のインターネットで機能しない理由と同じだ
> — 善良な者たちは悪者よりもはるかに少ない計算能力しか持っていない。

その点を指摘してくれてありがとう。

私はその主張を十分に強く表現できていなかった。要件は、善良な者たちが集合的に、単一の攻撃者よりも多くのCPUパワーを持つことである。

ネットワークを圧倒するには小さすぎる多くの小規模ゾンビファームが存在し、それらはビットコインを生成することで利益を得ることができる。小規模ファームが「正直なノード」となる。（「正直」より良い用語が必要だ。）より多くの小規模ファームがビットコイン生成に向かうほど、ネットワークを圧倒するためのハードルは上がり、より大きなファームも圧倒するには小さすぎることになり、それらもビットコインを生成した方が良いことになる。「ロングテール」理論によれば、小規模、中規模、そして単に大規模なファームを合わせれば、最大のゾンビファームよりもはるかに多くなるはずだ。

たとえ悪者がネットワークを圧倒したとしても、すぐに富を得られるわけではない。彼にできることは、不渡り小切手のように、自分自身が使ったお金を取り戻すことだけだ。これを悪用するには、商人から何かを購入し、発送されるまで待ち、それからネットワークを圧倒してお金を取り戻そうとする必要がある。そのようなカーディング詐欺を試みるよりも、ビットコインを生成する方が多くの利益を得られると思う。そのような巨大なゾンビファームがあれば、他の全員を合わせたよりも多くのビットコインを生成できるだろう。

ビットコインネットワークは、ゾンビファームをビットコイン生成に転向させることで、実際にスパムを減らすかもしれない。

Satoshi Nakamoto

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
