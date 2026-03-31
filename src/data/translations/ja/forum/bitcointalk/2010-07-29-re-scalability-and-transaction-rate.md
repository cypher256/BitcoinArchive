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
---

すべてのユーザーがネットワークノードであるという現在のシステムは、大規模運用を想定した構成ではない。それはすべてのUsenetユーザーが自分のNNTPサーバーを運用するようなものだ。この設計はユーザーが単なるユーザーでいられるように対応している。ノードを運用する負担が大きくなるほど、ノードの数は少なくなる。その少数のノードは大規模なサーバーファームになるだろう。残りはトランザクションのみを行い生成はしないクライアントノードになる。

<!-- tone-skip -->
> [Quote from: bytemaster on July 28, 2010, 08:59:42 PM](https://bitcointalk.org/index.php?topic=532.msg6269#msg6269)
> それに、支払いが正当であることを確認するのに10分は長すぎます。今日のクレジットカードをスワイプするのと同じくらい速くなければなりません。
<!-- /tone-skip -->

自動販売機のスレッドを見てほしい。支払い処理業者が十分に、実際にはかなりよく（クレジットカードよりもはるかに低い不正率で）、10秒程度かそれ以下で支払いを検証できる方法を概説している。信じないか理解できないなら、説得するための時間はない、すまない。
[http://bitcointalk.org/index.php?topic=423.msg3819#msg3819](http://bitcointalk.org/index.php?topic=423.msg3819#msg3819)
