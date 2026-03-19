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

> The first default one is labelled "Your Address" when it's created.
>
> All the places where address book labels are set are where the user manually sets it. The only time it automatically adds a label is a blank one when you send to a new address. I guess you could have entered the label on an address you thought was mine but the software was confusing and you put it in the wrong place.

サトシはその後、ビットコインのUXの限界について率直に認めた：

> Address book labels for receiving addresses is confusing but I'm not sure what else to do. Anyone using it for more than just simple purposes would need to create different receiving addresses for each payer so they could tell who's paying them. That concept doesn't have much analogy in the real world.

これはビットコインの最も根強いユーザビリティの課題の一つについてのサトシの率直な認識である — 支払者ごとに固有のアドレスを生成するという概念は根本的に新しいものであり、ユーザーが直感的に理解するための手がかりとなる従来の金融システムにおける対応物が存在しなかった。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
