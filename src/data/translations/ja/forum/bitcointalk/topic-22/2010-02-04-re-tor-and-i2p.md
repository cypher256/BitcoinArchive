---
title: "Re: TOR と I2P"
date: 2010-02-04T00:30:50.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg223#msg223"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「TOR と I2P」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/42/"
translationStatus: complete
---

プロキシポート 9050 を使用する場合、IRC サーバーがすべての TOR 出口ノードを BAN しているため、おそらく常に失敗するとわかっているので、IRC への接続は 1回だけ試行し、その後諦める。別のポートを使用している場合、通常の古いプロキシである可能性があると判断し、徐々に間隔を長くしながら IRC への再試行を続ける。Polipo や Privoxy は使用しないでほしい。これらは HTTP フィルターおよびキャッシュであり、変更を加えると Bitcoin のメッセージを破損する可能性がある。Bitcoin は再接続によって克服しようとしているのかもしれない。ポート 9050 を使用してほしい。

riX が言うように、「Tor には IP アドレスしか渡していない。DNS を行うアプリは...」という警告は心配する必要はない。Bitcoin はプロキシモードではまったく DNS を使用しない。

Bitcoin は Tor 経由で IRC に接続できないため、現在どのノードがオンラインかわからず、最近確認されたすべてのノードを試す必要がある。接続試行をできるだけ節約しようとするが、起動時に素早く接続し、切断された場合に素早く再接続したいという要望もある。最後に接続に成功してからの時間が長いほど、接続試行の頻度を下げるアルゴリズムを使用している。例えば、24時間前に確認されたノードの場合、接続試行の間隔は 5時間だ。少なくとも 2 つの接続があれば、1 週間以上前のものは試行せず、5 つの接続があれば 24時間以上前のものは試行しない。
