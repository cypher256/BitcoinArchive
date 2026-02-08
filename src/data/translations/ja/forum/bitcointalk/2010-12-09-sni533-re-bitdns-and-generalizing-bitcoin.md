---
title: "Re: BitDNSとBitcoinの汎用化"
date: 2010-12-09T22:46:50.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1790.msg28715#msg28715"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「BitDNSとビットコインの汎用化」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/533/"
threadId: "bt-bitdns-and-generalizing-bitcoin"
threadTitle: "BitDNS and Generalizing Bitcoin"
threadPosition: 2
translationStatus: complete
---

[Quote from: nanotube on December 09, 2010, 09:20:40 PM](https://bitcointalk.org/index.php?topic=1790.msg28700#msg28700)マイナーは基本的に「余分な作業」をしなければならないようです。そして、その余分な作業（もちろん、メインのbitcoin作業を遅くします）からbitdnsマイニングの報酬がないなら、マイナーがbitdns（およびその他のサイドチェーン）を含めるインセンティブは何でしょうか？
インセンティブは、同じ作業で追加のサイドチェーンからも報酬を得ることです。

ビットコインを生成している間に、*同じ作業*で無料のドメイン名も得られるのに、なぜそうしないのですか？

現在週に50 BTCを生成しているなら、50 BTCに加えていくつかのドメイン名も得られます。

1つの作業単位があります。それを解けば、BitcoinとBitDNSの両方のブロックを解決します。概念的には、Merkle Treeで結び付けられています。Bitcoinに提出するにはBitDNSのブランチを切り離し、BitDNSに提出するにはBitcoinのブランチを切り離します。

実際には、Bitcoinに後付けするために、BitDNS側にはおそらく約200バイトの余分が必要ですが、大したことではありません。1ブロックあたり50ドメインの話をしていますが、後方互換性のための1ブロックあたり200バイトは些細なものです。十分に気にするなら、将来のブロックでBitcoinがMerkle Treeを上位に持つ近代化された配置にアップグレードするスケジュールを組むこともできます。

チェーンはこの新しいMerkle Treeの下にあることに注意してください。つまり、BitcoinとBitDNSそれぞれが自分のブロック内に独自のチェーンリンクを持ちます。これは一般的なタイムスタンプサーバーの配置とは逆で、通常はチェーンが上にあってその下にMerkle Treeがあり、1つの共通のマスターチェーンを作ります。これはチェーンを共有しない2つのタイムスタンプサーバーです。
