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
description: "サトシが PoW トークンを使ったスパム対策の構想を語り、メール送信前の作業証明という発想を示す。"
isSatoshi: true
tags:
  - "correspondence"
  - "spam"
  - "pow-tokens"
  - "hal-finney"
  - "e-gold"
translationStatus: complete
relatedEntries:
  - "aftermath/2009-01-25-satoshi-to-trammell-spam-pow"
---

Hal Finney wrote:
> > * スパマーのボットネットは送信課金型のメールフィルターを
> >   いとも簡単に消費し尽くしてしまうだろう
> もし POW トークンが有用になり、特にマネーになったとすれば、マシンが
> アイドル状態のままで放置されることはなくなる。ユーザーは自分の
> コンピューターが自分のためにお金を稼いでくれることを期待するように
> なる（報酬が運用コストを上回ると仮定して）。稼ぎをボットネットに
> 盗まれているコンピューターは、現在よりも所有者の目に付きやすくなる。
> したがって、その世界ではユーザーがコンピューターの保守と
> ボットネット感染の駆除により真剣に取り組むようになる、と
> 期待してよいだろう。

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
