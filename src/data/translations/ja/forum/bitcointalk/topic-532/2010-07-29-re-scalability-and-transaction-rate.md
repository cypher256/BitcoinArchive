---
title: "Re: スケーラビリティとトランザクションレート"
date: 2010-07-29T02:00:38.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=532.msg6306#msg6306"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトが大規模運用時にはすべてのユーザーがノードである必要はないと説明し、支払い処理業者による高速な取引検証の可能性を示唆。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/287/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "bytemaster"
    personSlug: "daniel-larimer"
    date: "2010-07-28T11:59:42.000Z"
    sourceEntryId: "forum/bitcointalk/topic-532/2010-07-28-bytemaster-msg6269"
relatedEntries:
  - aftermath/2010-07-28-daniel-larimer-biography
---

すべてのユーザーがネットワークノードであるという現在のシステムは、大規模運用を想定した構成ではない。それはすべてのUsenetユーザーが自分のNNTPサーバーを運用するようなものだ。この設計はユーザーが単なるユーザーでいられるように対応している。ノードを運用する負担が大きくなるほど、ノードの数は少なくなる。その少数のノードは大規模なサーバーファームになるだろう。残りはトランザクションのみを行い生成はしないクライアントノードになる。

<!-- quote: q1 -->
<!-- tone-skip -->
> トランザクションの配信と「確定」に必要な帯域幅、ディスク容量、計算時間は、マイクロペイメントには法外に高くつくと確信している。現在の銀行業界でさえ、合理的な額の入金を要求し合理的な額が蓄積した後でのみ出金を許可するもの以外に、合理的なマイクロペイメントソリューションを提供できていないことを考えてほしい。
<!-- /tone-skip -->

自動販売機のスレッドを見てほしい。支払い処理業者が十分に、実際にはかなりよく（クレジットカードよりもはるかに低い不正率で）、10秒程度かそれ以下で支払いを検証できる方法を概説している。信じないか理解できないなら、説得するための時間はない、すまない。
[topic 423](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-423/2010-07-17-newlibertystandard-msg3708/)
