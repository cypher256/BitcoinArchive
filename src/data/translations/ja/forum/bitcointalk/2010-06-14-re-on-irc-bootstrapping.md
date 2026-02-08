---
title: "返信: IRCブートストラッピングについて"
date: 2010-06-14T18:13:21.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=84.msg1579#msg1579"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「IRCブートストラッピングについて」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/117/"
threadId: "bt-on-irc-bootstrapping"
threadTitle: "On IRC bootstrapping"
threadPosition: 2
translationStatus: complete
---

Bitcoinには「addr」メッセージを使った独自の分散型アドレスディレクトリがあります。現在の長期稼働している静的ノードのリストをシードとしてコードに組み込む時期が来ました。新しいノードがシードノードに優先的に接続し続けないようにするコードを追加できます。接続してリストを取得するだけなので、シードノードの負担にはなりません。

どう思いますか、シードの追加を進めるべきでしょうか？

最初にIRCを試すことに変わりはありません。IRCにはリスト上にいるために接続を維持する必要があるため、現在オンラインのノードをリストアップできるという利点がありますが、単一障害点であるという欠点があります。「addr」システムには単一障害点がありませんが、最近見られたノードしか教えてくれないため、試したノードの一部がオフラインになっているので、接続に少し時間がかかります。両方の組み合わせにより、両方の長所と、より高い全体的な堅牢性が得られます。

Freenodeが我々にうんざりした場合に備えて、IRCサーバーを運用するボランティアをしてくださる方はいますか？
