---
title: "Re: 実装が簡単な機能リクエスト"
date: 2010-02-08T16:37:24.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=46.msg284#msg284"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「実装が簡単な機能リクエスト」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/50/"
translationStatus: complete
---

コマンドラインオプションがある：

bitcoin -addnode=1.2.3.4    接続するノードを Bitcoin に指示<br>
bitcoin -connect=1.2.3.4    指定されたノードにのみ接続

これらを複数使用できる。例えば
bitcoin -connect=(最初に試すアドレス) -connect=(次に試すアドレス) ...

-connect で 192.168.x.x のようなルーティング不可能な IP を指定できるので、サーバーファームで 1 台のサーバーを外部に接続し、残りをその 1 台のサーバーに接続させたい場合、そうすることができる。

特に-addnode は、IRC サーバーがすべての TOR 出口ノードをブロックしているため、常に TOR 経由で接続する場合に必要だ。TOR 経由で接続するには、以下を使用できる：

bitcoin -proxy=127.0.0.1:9050 -addnode=212.159.72.216
