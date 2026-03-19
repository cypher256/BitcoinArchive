---
title: "Re: ビットコイン送金 - アドレス帳と複数アドレス"
date: 2009-01-18T11:01:09Z
source: correspondence
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシが、トランメルに表示された「Satoshi」ラベルはトランメル自身のアドレス帳に由来するものであると説明し、トランザクションは送信者ではなく使用された受信アドレスを表示することを解説し、支払い元を特定するために各支払者ごとに異なるアドレスを作成することを推奨した。"
isSatoshi: true
threadId: "satoshi-dustin-trammell"
threadPosition: 16
tags:
  - "correspondence"
  - "usability"
  - "address-book"
  - "privacy"
  - "multiple-addresses"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

サトシはトランメルのトランザクション表示に関する混乱を解消した。表示されたアドレスは実際にはサトシのものではなく、トランメル自身の受信アドレスであった：

> It should be your Bitcoin address at home that you received it with. There's no way for it to know who it's from, so the best it can do is tell which of your addresses it was received on. You can create multiple addresses and give a different address to each person and label them to help figure out who's sending to you.

サトシはアドレス帳のラベルシステムについても説明した：

> It doesn't know any names other than what you tell it. The name printed there is what's associated in your address book for that address, either under the Address Book button or the "Change……" button to the right of your Bitcoin address.

このメールには、ビットコインの仮名性に関する最も初期の説明の一つが含まれている — プロトコルには送信者のアイデンティティという概念がなく、支払者を特定するためのベストプラクティスは、各取引相手ごとに固有の受信アドレスを作成することである。この概念は後にビットコインのプライバシーに関するベストプラクティスの基本となる。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
