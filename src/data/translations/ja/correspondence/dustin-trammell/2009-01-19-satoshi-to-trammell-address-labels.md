---
title: "サトシからダスティン・トランメルへ：Re: Bitcoin Transfer — アドレスラベルと UX 上の課題 (2009-01-19)"
date: 2009-01-19T11:02:37Z
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
description: "サトシがアドレスラベル機能の仕様を説明し、複数アドレス管理 UI の改善計画を共有する。"
isSatoshi: true
tags:
  - "correspondence"
  - "ux"
  - "address-book"
translationStatus: complete
relatedEntries:
  - "aftermath/2009-01-19-satoshi-to-trammell-address-labels"
---

>On Mon, 2009-01-19 at 00:54 +0800, Satoshi Nakamoto wrote:
>> それを受け取ったのは、君の自宅のビットコインアドレスのはずだ。
>> 送金元が誰なのかを知る方法はないので、できることはどのアドレスで
>> 受け取ったかを表示することくらいだ。複数のアドレスを作って、
>> それぞれ別の相手に渡して、ラベルを付けておけば、誰が送って
>> きているのか分かるようになる。
>
>ああ！ それが自宅の自分のアドレスだとすら気付いていなかった、
>そのとおりだ (: 自宅では複数のアドレスを作っていたので、結びつかな
>かったのだ。
>
>> それ以外の名前は教えられたものしか知らない。そこに表示されている
>> 名前は、君のアドレス帳でそのアドレスに紐付けられた名前だ。
>> Address Book ボタンか、君のビットコインアドレスの右にある
>> 「Change...」ボタンから設定したものだろう。
>
>ああ、おっしゃるとおり、Change ボタンのアドレス一覧で、入金を
>受けたアドレスに「Satoshi」が紐付いていた。ただ、自分で
>その値を設定した記憶がないのだが、これはデフォルトか何か
>なのか？（これは初めてアプリケーションを起動したときに自動
>生成された、最初のデフォルトのアドレスだ）

最初のデフォルトのアドレスには、作成時に「Your Address」と
ラベルが付く。

アドレス帳ラベルが設定されるのはすべてユーザーが手動で設定した
場所だ。自動でラベルが追加されるのは、新しいアドレスに送金した
ときに空白のラベルが追加されるときだけだ。たぶん、私のアドレスだと
思って入れたラベルを、ソフトウェアが分かりにくくて間違った場所に
入れてしまったのだろう。

受信用アドレスへのラベル付けは分かりにくいが、他にどうすれば
いいかも分からない。単純な用途以上に使う人なら誰でも、支払い元ごとに
受取アドレスを分けて作り、誰が支払っているのかを区別する必要がある。
この概念は現実世界にあまり類比がない。

Satoshi
