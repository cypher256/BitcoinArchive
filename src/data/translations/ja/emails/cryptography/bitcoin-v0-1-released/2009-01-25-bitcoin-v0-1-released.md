---
title: "ビットコイン v0.1 リリース"
date: 2009-01-25T15:47:10.000Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2009-January/015041.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "プルーフ・オブ・ワークトークンがスパムを不採算にする経済的インセンティブを生み出すことでスパムを軽減する方法を、偽メールボックスによるリバーススパミングの概念を含めてサトシが議論した。"
isSatoshi: true
tags:
  - "spam"
  - "proof-of-work"
  - "incentives"
  - "botnet"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/18/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Hal Finney"
    personSlug: "hal-finney"
    date: "2009-01-24T16:48:03Z"
    sourceEntryId: "emails/cryptography/bitcoin-v0-1-released/2009-01-24-re-bitcoin-v0-1-released-finney"
---

<!-- speaker: Hal Finney -->
<!-- quote: q1 -->
<!-- tone-skip -->
> > * スパマーのボットネットは送信課金型のメールフィルターを
> >   いとも簡単に消費し尽くしてしまうだろう
> POW トークンが有用になり、特に貨幣になれば、マシンはもはや
> アイドル状態にならないだろう。ユーザーは自分のコンピューターが
> 収益を生むことを期待するようになる（報酬が運用コストを上回ると
> 仮定して）。ボットネットによって収益を盗まれているコンピューターは、
> 現在よりも所有者に気づかれやすくなるんじゃないかな。だから、
> その世界ではユーザーがコンピューターのメンテナンスに力を入れ、
> ボットネットの感染を除去するようになると予想できるんだ。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->
POW トークンに価値があるとすればスパムを抑制するもう 1 つの要因がある: スパムから POW トークンを刈り取るために、人々が大量の偽メールアカウントを立てる動機が生まれる。実質的に、POW を回収するだけでメッセージは読まない自動化されたメールボックスで、スパマーを「逆スパミング」することになる。偽メールボックスと実在の人間の比率が高くなりすぎて、スパムが採算に乗らなくなる可能性がある。

このプロセスは、そもそも POW トークンの価値を確立する可能性も持っている。ボットネットを持たないスパマーは収集者からトークンを買えるからだ。買い戻しが起きれば一時的にはスパムが増えることになるが、それは収集者がスパマーを食い物にする自滅的な循環を加速するだけだ。

興味深いことに、e-gold システムの 1 つには「ダスティング」と呼ばれるスパムの形態が既に存在する。スパマーはトランザクションのコメント欄にスパムメッセージを入れるために微量の金粉を送信する。システムがユーザーに受け取り可能な最小支払額、あるいは少なくともメッセージ付きの最小額を設定できるようにすれば、ユーザーはスパムを受け取るためにいくら支払われれば良いかを設定できる。

Satoshi Nakamoto

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
