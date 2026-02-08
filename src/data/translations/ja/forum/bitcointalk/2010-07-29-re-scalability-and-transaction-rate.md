---
title: "Re: スケーラビリティとトランザクションレート"
date: 2010-07-29T02:00:38.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=532.msg6306#msg6306"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamotoが大規模運用時にはすべてのユーザーがノードである必要はないと説明し、支払い処理業者による高速な取引検証の可能性を示唆。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/287/"
translationStatus: complete
---

すべてのユーザーがネットワークノードであるという現在のシステムは、大規模運用を想定した構成ではありません。それはすべてのUsenetユーザーが自分のNNTPサーバーを運用するようなものです。この設計はユーザーが単なるユーザーでいられるように対応しています。ノードを運用する負担が大きくなるほど、ノードの数は少なくなります。その少数のノードは大規模なサーバーファームになるでしょう。残りはトランザクションのみを行い生成はしないクライアントノードになります。

[Quote from: bytemaster on July 28, 2010, 08:59:42 PM](https://bitcointalk.org/index.php?topic=532.msg6269#msg6269)それに、支払いが正当であることを確認するのに10分は長すぎます。今日のクレジットカードをスワイプするのと同じくらい速くなければなりません。
自動販売機のスレッドを見てください。支払い処理業者が十分に、実際にはかなりよく（クレジットカードよりもはるかに低い不正率で）、10秒程度かそれ以下で支払いを検証できる方法を概説しています。信じないか理解できないなら、説得するための時間はありません、すみません。
[http://bitcointalk.org/index.php?topic=423.msg3819#msg3819](http://bitcointalk.org/index.php?topic=423.msg3819#msg3819)
