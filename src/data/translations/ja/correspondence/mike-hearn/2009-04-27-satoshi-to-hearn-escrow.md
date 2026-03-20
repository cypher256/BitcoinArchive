---
title: "エスクロー取引と非可逆性"
date: 2009-04-27T00:11:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread2.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "サトシは、Bitcoinが仲介者なしで二者間の非可逆的な取引のために設計されていることを説明し、述語言語を使用した計画中のエスクロー取引について述べる。"
isSatoshi: true
threadId: "satoshi-mike-hearn-chargeback"
threadPosition: 2
tags:
  - "correspondence"
  - "chargeback"
  - "escrow"
  - "script-language"
  - "legal"
translationStatus: complete
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

私は弁護士ではないので、その質問には答えられない。おそらく、その法律が銀行や金融機関、その他の仲介者に適用されるものであれば、銀行が関与せず、現金での対面取引や物理的な商品との物々交換と同様に、二者が直接取引するだけなので、適用されないと思う。

Bitcoinは根本的に非可逆的な取引ができるように設計されており、それを必要とするアプリケーションは確かに存在する。

チャージバックの可能性を望む人は、エスクロー取引を使用できる。これはまだ実装されていないが、次に実装するものの一つになるだろう。例えば、支払者が解放しない場合に返還するかどうかを第三者が決定するように取引を記述でき、一定日数後に自動解放される。まずはより基本的な形式のエスクローを実装するが、ネットワークインフラストラクチャにはあらゆる数のオプションを表現できる述語言語が含まれている。
