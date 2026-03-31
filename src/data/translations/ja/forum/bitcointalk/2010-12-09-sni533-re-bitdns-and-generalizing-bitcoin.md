---
title: "Re: BitDNSとBitcoinの汎用化"
date: 2010-12-09T22:46:50.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
---

> [Quote from: nanotube on December 09, 2010, 09:20:40 PM](#msg28700)
> 理論的には素晴らしいが……
> マイナーは基本的に「追加の作業」をしなければならないようだ。その追加作業（当然メインのBitcoin作業を遅くする）に対するBitDNSマイニングからの報酬がないなら、マイナーがBitDNS（やその他のサイドチェーン）を含めるインセンティブは何か？
> これについてのさらなる考えを聞くのがとても楽しみだ。 :)

インセンティブは、同じ作業で追加のサイドチェーンからも報酬を得ることだ。

ビットコインを生成している間に、*同じ作業*で無料のドメイン名も得られるのに、なぜそうしないのか？

現在週に50 BTCを生成しているなら、50 BTCに加えていくつかのドメイン名も得られる。

1つの作業単位がある。それを解けば、BitcoinとBitDNSの両方のブロックを解決する。概念的には、Merkle Treeで結び付けられている。Bitcoinに提出するにはBitDNSのブランチを切り離し、BitDNSに提出するにはBitcoinのブランチを切り離す。

実際には、Bitcoinに後付けするために、BitDNS側にはおそらく約200バイトの余分が必要だが、大したことではない。1ブロックあたり50ドメインの話をしているが、後方互換性のための1ブロックあたり200バイトは些細なものだ。十分に気にするなら、将来のブロックでBitcoinがMerkle Treeを上位に持つ近代化された配置にアップグレードするスケジュールを組むこともできる。

チェーンはこの新しいMerkle Treeの下にあることに注意してほしい。つまり、BitcoinとBitDNSそれぞれが自分のブロック内に独自のチェーンリンクを持つ。これは一般的なタイムスタンプサーバーの配置とは逆で、通常はチェーンが上にあってその下にMerkle Treeがあり、1つの共通のマスターチェーンを作る。これはチェーンを共有しない2つのタイムスタンプサーバーだ。
