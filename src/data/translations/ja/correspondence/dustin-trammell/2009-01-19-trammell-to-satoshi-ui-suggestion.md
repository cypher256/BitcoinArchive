---
title: "ダスティン・トランメルからサトシへ：Re: Bitcoin Transfer — UI 表記の改善提案 (2009-01-19)"
date: 2009-01-19T19:58:23Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルが原文ママで公開。完全な mbox アーカイブはトランメルのブログ (https://blog.dustintrammell.com/i-am-not-satoshi/) から Satoshi_Nakamoto.zip として配布された"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "トランメルがアドレス帳と送金 UI の改善提案を行い、初心者の使いやすさへの懸念を示す。"
isSatoshi: false
tags:
  - "correspondence"
  - "ux"
  - "address-book"
translationStatus: complete
relatedEntries:
  - "aftermath/2009-01-19-trammell-to-satoshi-ui-suggestion"
---

On Tue, 2009-01-20 at 00:44 +0800, Satoshi Nakamoto wrote:
> 最初のデフォルトのアドレスには、作成時に「Your Address」と
> ラベルが付く。
> 
> アドレス帳ラベルが設定されるのはすべてユーザーが手動で設定した
> 場所だ。自動でラベルが追加されるのは、新しいアドレスに送金した
> ときに空白のラベルが追加されるときだけだ。たぶん、私のアドレスだと
> 思って入れたラベルを、ソフトウェアが分かりにくくて間違った場所に
> 入れてしまったのだろう。

それなら筋が通る、たぶんそれが起きたのだろう。

> 受信用アドレスへのラベル付けは分かりにくいが、他にどうすれば
> いいかも分からない。単純な用途以上に使う人なら誰でも、支払い元ごとに
> 受取アドレスを分けて作り、誰が支払っているのかを区別する必要がある。
> この概念は現実世界にあまり類比がない。

単に「Received with: X」ではなく「Received with address: X」と表示
されていれば理解できたと思う。とはいえ、そのアドレスに「Satoshi」と
誤ラベル付けされていたことが、最初の混乱の主な原因だったのは確かだ。
ただ、おっしゃるとおりだ。現在の金融システムで人々が慣れているもの
のうち、強いて言えば PayPal で複数の受信用メールアドレスを使える
くらいのものしか比較対象はない。「Received payment to: X」と
するのはどうだろうか？

-- 
Dustin D. Trammell
dtrammell@dustintrammell.com
http://www.dustintrammell.com
