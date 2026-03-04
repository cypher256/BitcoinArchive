---
title: "Re: TORとI2P"
date: 2010-02-04T00:30:50.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg223#msg223"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「TORとI2P」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/42/"
threadId: "bt-tor-and-i2p"
threadPosition: 2
translationStatus: complete
---

プロキシポート9050を使用する場合、IRCサーバーがすべてのTOR出口ノードをBANしているため、おそらく常に失敗するとわかっているので、IRCへの接続は1回だけ試行し、その後諦める。別のポートを使用している場合、通常の古いプロキシである可能性があると判断し、徐々に間隔を長くしながらIRCへの再試行を続ける。PolipoやPrivoxyは使用しないでほしい。これらはHTTPフィルターおよびキャッシュであり、変更を加えるとBitcoinのメッセージを破損する可能性がある。Bitcoinは再接続によって克服しようとしているのかもしれない。ポート9050を使用してほしい。

riXが言うように、「TorにはIPアドレスしか渡していない。DNSを行うアプリは...」という警告は心配する必要はない。BitcoinはプロキシモードではまったくDNSを使用しない。

BitcoinはTor経由でIRCに接続できないため、現在どのノードがオンラインかわからず、最近確認されたすべてのノードを試す必要がある。接続試行をできるだけ節約しようとするが、起動時に素早く接続し、切断された場合に素早く再接続したいという要望もある。最後に接続に成功してからの時間が長いほど、接続試行の頻度を下げるアルゴリズムを使用している。例えば、24時間前に確認されたノードの場合、接続試行の間隔は5時間だ。少なくとも2つの接続があれば、1週間以上前のものは試行せず、5つの接続があれば24時間以上前のものは試行しない。
