---
title: "Re: ビットコイン送金 - アドレスラベルと UX の課題"
date: 2009-01-19T11:02:37Z
type: "article"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルにより公開"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシがデフォルトラベルは「Your Address」と説明し、誤ラベルは紛らわしい UI に起因すると示唆。支払者ごとに受信アドレスを作る概念には現実世界の類似がない UX 課題を認める。"
isSatoshi: true
tags:
  - "correspondence"
  - "usability"
  - "address-book"
  - "ux-design"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
relatedEntries:
  - correspondence/dustin-trammell/2009-01-19-satoshi-to-trammell-address-labels
  - aftermath/2009-01-11-dustin-trammell-biography
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-01-19T11:02:37Z"
    sourceEntryId: "correspondence/dustin-trammell/2009-01-19-satoshi-to-trammell-address-labels"
translationStatus: complete
---

<!-- speaker: narrator -->
サトシは、新しいアドレスのデフォルトラベルは「Satoshi」ではなく「Your Address」であると説明した。トランメルはサトシのアドレスだと思ったものにラベルを付けようとした際に、ソフトウェアの混乱しやすい UI のために誤った場所に入力した可能性が高いと示唆した：

<!-- quote: q1 -->
<!-- speaker: Satoshi Nakamoto -->
> 最初のデフォルトのアドレスには、作成時に `Your Address` とラベルが付く。
>
> アドレス帳ラベルが設定されるのはすべてユーザーが手動で設定した場所だ。自動でラベルが追加されるのは、新しいアドレスに送金したときに空白のラベルが追加されるときだけだ。たぶん、私のアドレスだと思って入れたラベルを、ソフトウェアが分かりにくくて間違った場所に入れてしまったのだろう。

<!-- speaker: narrator -->
サトシはその後、ビットコインの UX の限界について率直に認めた：

<!-- speaker: Satoshi Nakamoto -->
> 受信用アドレスへのラベル付けは分かりにくいが、他にどうすればいいかも分からない。単純な用途以上に使う人なら誰でも、支払い元ごとに受取アドレスを分けて作り、誰が支払っているのかを区別する必要がある。この概念は現実世界にあまり類比がない。

<!-- speaker: narrator -->
これはビットコインの最も根強いユーザービリティの課題の一つについてのサトシの率直な認識である — 支払者ごとに固有のアドレスを生成するという概念は根本的に新しいものであり、ユーザーが直感的に理解するための手がかりとなる従来の金融システムにおける対応物が存在しなかった。
