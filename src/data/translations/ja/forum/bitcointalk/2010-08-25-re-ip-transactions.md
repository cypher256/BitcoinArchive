---
title: "Re: 接続制限"
date: 2010-08-25T21:02:00Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=862.msg10143#msg10143"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshiがビットコインのネットワーク設計とノードの接続方法について議論し、接続管理を説明。"
isSatoshi: true
tags:
  - "networking"
  - "nodes"
  - "connections"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/243/"
threadId: "bt-connection-limits"
threadTitle: "Connection limits"
threadPosition: 2
translationStatus: complete
---

ソフトウェアは8つのアウトバウンド接続を維持しようとし、最大125のインバウンド接続を許可します。ファイアウォールの背後にいてインバウンド接続を受信できない場合でも、アウトバウンド接続だけでBitcoinを問題なく使用できます。ただし、インバウンド接続を許可することはネットワークの助けになります。

ノードは見たアドレスを記憶し、他のノードと共有します。これが新しいノードがネットワークを見つけ、ネットワークが接続を維持する方法です。
