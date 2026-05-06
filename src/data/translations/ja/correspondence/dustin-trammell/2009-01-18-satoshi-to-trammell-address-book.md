---
title: "Re: ビットコイン送金 - アドレス帳と複数アドレス"
date: 2009-01-18T11:01:09Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシが「Satoshi」 ラベルはトランメル自身のアドレス帳由来であることを説明。トランザクションは送信者ではなく受信アドレスを示すと解説、支払者ごとに異なるアドレスを推奨。"
isSatoshi: true
tags:
  - "correspondence"
  - "usability"
  - "address-book"
  - "privacy"
  - "multiple-addresses"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

<!-- speaker: narrator -->
サトシはトランメルのトランザクション表示に関する混乱を解消した。表示されたアドレスは実際にはサトシのものではなく、トランメル自身の受信アドレスであった：

<!-- speaker: Satoshi Nakamoto -->
> それは自宅で受け取った際のあなたのビットコインアドレスのはずである。送信者が誰かを知る方法はないため、できることはあなたのどのアドレスで受信されたかを表示することだけである。複数のアドレスを作成して各人に異なるアドレスを渡し、ラベルを付ければ、誰からの送金かを判別する助けになる。

<!-- speaker: narrator -->
サトシはアドレス帳のラベルシステムについても説明した：

<!-- speaker: Satoshi Nakamoto -->
> ソフトウェアはあなたが入力した以外の名前は一切知らない。そこに表示されている名前は、アドレス帳でそのアドレスに関連付けられたもので、Address Bookボタンか、ビットコインアドレスの右にある「Change...」ボタンのいずれかで設定されたものである。

<!-- speaker: narrator -->
このメールには、ビットコインの仮名性に関する最も初期の説明の一つが含まれている — プロトコルには送信者のアイデンティティという概念がなく、支払者を特定するためのベストプラクティスは、各取引相手ごとに固有の受信アドレスを作成することである。この概念は後にビットコインのプライバシーに関するベストプラクティスの基本となる。
