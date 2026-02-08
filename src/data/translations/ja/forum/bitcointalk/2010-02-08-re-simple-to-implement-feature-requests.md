---
title: "Re: 実装が簡単な機能リクエスト"
date: 2010-02-08T16:37:24.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=46.msg284#msg284"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「実装が簡単な機能リクエスト」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/50/"
translationStatus: complete
---

コマンドラインオプションがあります：

bitcoin -addnode=1.2.3.4    接続するノードをBitcoinに指示
bitcoin -connect=1.2.3.4    指定されたノードにのみ接続

これらを複数使用できます。例えば
bitcoin -connect=(最初に試すアドレス) -connect=(次に試すアドレス) ...

-connectで192.168.x.xのようなルーティング不可能なIPを指定できるので、サーバーファームで1台のサーバーを外部に接続し、残りをその1台のサーバーに接続させたい場合、そうすることができます。

特に-addnodeは、IRCサーバーがすべてのTOR出口ノードをブロックしているため、常にTOR経由で接続する場合に必要です。TOR経由で接続するには、以下を使用できます：

bitcoin -proxy=127.0.0.1:9050 -addnode=212.159.72.216
