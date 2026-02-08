---
title: "Re: TORとI2P"
date: 2010-02-04T00:30:50.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=22.msg223#msg223"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「TORとI2P」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/42/"
threadId: "bt-tor-and-i2p"
threadTitle: "TOR and I2P"
threadPosition: 2
translationStatus: complete
---

プロキシポート9050を使用する場合、IRCサーバーがすべてのTOR出口ノードをBANしているため、おそらく常に失敗するとわかっているので、IRCへの接続は1回だけ試行し、その後諦めます。別のポートを使用している場合、通常の古いプロキシである可能性があると判断し、徐々に間隔を長くしながらIRCへの再試行を続けます。PolipoやPrivoxyは使用しないでください。これらはHTTPフィルターおよびキャッシュであり、変更を加えるとBitcoinのメッセージを破損する可能性があります。Bitcoinは再接続によって克服しようとしているのかもしれません。ポート9050を使用してください。

riXが言うように、「TorにはIPアドレスしか渡していません。DNSを行うアプリは...」という警告は心配する必要はありません。BitcoinはプロキシモードではまったくDNSを使用しません。

BitcoinはTor経由でIRCに接続できないため、現在どのノードがオンラインかわからず、最近確認されたすべてのノードを試す必要があります。接続試行をできるだけ節約しようとしますが、起動時に素早く接続し、切断された場合に素早く再接続したいという要望もあります。最後に接続に成功してからの時間が長いほど、接続試行の頻度を下げるアルゴリズムを使用しています。例えば、24時間前に確認されたノードの場合、接続試行の間隔は5時間です。少なくとも2つの接続があれば、1週間以上前のものは試行せず、5つの接続があれば24時間以上前のものは試行しません。
