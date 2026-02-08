---
title: "返信: セキュリティ"
date: 2010-07-10T12:58:02.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=240.msg2132#msg2132"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「セキュリティ」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/176/"
translationStatus: complete
---

これをどうやるか考え始めます。

現時点では、-connectをある程度使えます。-connectを使ってLAN上のローカルコンピュータに接続させることができます。例えば-connect=192.168.0.100のように。空白の状態から始めてメインネットワークに接続させなければ、難易度は元の低い難易度のままです。ただし、ポートフォワーディングをしている場合は、外部のノードがまだあなたにインバウンドで接続してくる可能性があります。

-connectを使ってもまだIRCは使用されますが、-connectで特定のノードにのみ接続するよう指示している時はIRCに接続しないようにすべきだと思いますか？-connectの主なシナリオは、サーバーファームがあり、2台がネットワークに接続し、残りが最初の2台に接続するケースです。その場合、-connectのコンピュータをIRCに接続させたくないでしょう。

void ThreadIRCSeed(void* parg)
{
    if (mapArgs.count("-connect"))
        return;
