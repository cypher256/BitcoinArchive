---
title: "Re: ビットコイン送金 - アドレスラベルとUXの課題"
date: 2009-01-19T11:02:37Z
source: correspondence
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシがデフォルトのアドレスラベルは「Your Address」であると説明し、誤ラベルは紛らわしいUIに起因するユーザーの操作ミスであったと示唆し、支払者ごとに受信アドレスを作成するという概念は現実世界に類似するものがないという根本的なUXの課題を認めた。"
isSatoshi: true
threadId: "satoshi-dustin-trammell"
threadPosition: 18
tags:
  - "correspondence"
  - "usability"
  - "address-book"
  - "ux-design"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

サトシは、新しいアドレスのデフォルトラベルは「Satoshi」ではなく「Your Address」であると説明した。トランメルはサトシのアドレスだと思ったものにラベルを付けようとした際に、ソフトウェアの混乱しやすいUIのために誤った場所に入力した可能性が高いと示唆した：

> 最初のデフォルトアドレスは作成時に「Your Address」というラベルが付けられる。
>
> アドレス帳のラベルが設定される箇所はすべてユーザーが手動で設定するものである。自動的にラベルが追加されるのは、新しいアドレスに送金した際に空のラベルが追加される時だけである。おそらく私のアドレスだと思ったものにラベルを入力したが、ソフトウェアがわかりにくく、間違った場所に入力してしまったのだろう。

サトシはその後、ビットコインのUXの限界について率直に認めた：

> 受信アドレスのアドレス帳ラベルはわかりにくいが、他にどうすればよいかわからない。単純な用途以上に使う人は、誰から支払いを受けているかを判別するために、支払者ごとに異なる受信アドレスを作成する必要がある。この概念には現実世界にあまり類似するものがない。

これはビットコインの最も根強いユーザビリティの課題の一つについてのサトシの率直な認識である — 支払者ごとに固有のアドレスを生成するという概念は根本的に新しいものであり、ユーザーが直感的に理解するための手がかりとなる従来の金融システムにおける対応物が存在しなかった。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
