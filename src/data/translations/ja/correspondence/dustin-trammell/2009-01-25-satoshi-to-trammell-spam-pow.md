---
title: "サトシからダスティン・トランメルへ：スパム、POW トークン、逆スパミング (2009-01-25)"
date: 2009-01-25T10:03:21Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルが原文ママで公開。完全な mbox アーカイブはトランメルのブログ (https://blog.dustintrammell.com/i-am-not-satoshi/) から Satoshi_Nakamoto.zip として配布された"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシが、偽メールボックスで POW トークンを刈り取りスパマーを「逆スパミング」する構想と、e-gold の「ダスティング」問題を語る。"
isSatoshi: true
tags:
  - "spam"
  - "proof-of-work"
  - "hal-finney"
  - "e-gold"
translationStatus: complete
relatedEntries:
  - "aftermath/2009-01-25-satoshi-to-trammell-spam-pow"
quotes:
  - id: "q1"
    person: "Hal Finney"
    personSlug: "hal-finney"
    date: "2009-01-24T16:48:03Z"
    sourceEntryId: "emails/cryptography/bitcoin-v0-1-released/2009-01-24-re-bitcoin-v0-1-released-finney"
---

<!-- speaker: Hal Finney -->
<!-- quote: q1 -->
> > * スパマーのボットネットは送信課金型のメールフィルターを
> >   いとも簡単に消費し尽くしてしまうだろう
> POW トークンが有用になり、特に貨幣になれば、マシンはもはや
> アイドル状態にならないだろう。ユーザーは自分のコンピューターが
> 収益を生むことを期待するようになる（報酬が運用コストを上回ると
> 仮定して）。ボットネットによって収益を盗まれているコンピューターは、
> 現在よりも所有者に気づかれやすくなるんじゃないかな。だから、
> その世界ではユーザーがコンピューターのメンテナンスに力を入れ、
> ボットネットの感染を除去するようになると予想できるんだ。

POW トークンに価値があるとすればスパムを抑制するもう 1 つの要因がある:
スパムから POW トークンを刈り取るために、人々が大量の偽メール
アカウントを立てる動機が生まれる。実質的に、POW を回収するだけで
メッセージは読まない自動化されたメールボックスで、スパマーを
「逆スパミング」することになる。偽メールボックスと実在の人間の
比率が高くなりすぎて、スパムが採算に乗らなくなる可能性がある。

このプロセスは、そもそも POW トークンの価値を確立する可能性も持って
いる。ボットネットを持たないスパマーは収集者からトークンを買えるからだ。
買い戻しが起きれば一時的にはスパムが増えることになるが、それは
収集者がスパマーを食い物にする自滅的な循環を加速するだけだ。

興味深いことに、e-gold 系のシステムのうち 1 つには、すでに「ダスティング」
と呼ばれるスパムの一形態が存在する。スパマーは取引のコメント欄に
スパムメッセージを入れるために、ごく少量の金（ゴールド）の塵を
送り付けるのだ。もしユーザーが受け取りに応じる最低金額を設定できる
ようにする、あるいは少なくともメッセージを伴う場合の最低金額を設定
できるようにすれば、ユーザーは「スパムを受け取るためにいくらもらうか」
を自分で決められるようになる。

Satoshi Nakamoto
