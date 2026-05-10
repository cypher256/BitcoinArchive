---
title: "Re: IRC ブートストラッピングについて"
date: 2010-06-14T18:13:21.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=84.msg1579#msg1579"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「IRC ブートストラッピングについて」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/117/"
translationStatus: complete
---

Bitcoin には「addr」メッセージを使った独自の分散型アドレスディレクトリがある。現在の長期稼働している静的ノードのリストをシードとしてコードに組み込む時期が来た。新しいノードがシードノードに優先的に接続し続けないようにするコードを追加できる。接続してリストを取得するだけなので、シードノードの負担にはならない。

どう思うか、シードの追加を進めるべきだろうか？

最初に IRC を試すことに変わりはない。IRC にはリスト上にいるために接続を維持する必要があるため、現在オンラインのノードをリストアップできるという利点があるが、単一障害点であるという欠点がある。「addr」システムには単一障害点がないが、最近見られたノードしか教えてくれないため、試したノードの一部がオフラインになっているので、接続に少し時間がかかる。両方の組み合わせにより、両方の長所と、より高い全体的な堅牢性が得られる。

Freenode が我々にうんざりした場合に備えて、IRC サーバーを運用するボランティアをしてくれる方はいるか？
