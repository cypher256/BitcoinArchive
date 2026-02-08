---
title: "Re: BitDNSとBitcoinの汎用化"
date: 2010-12-09T21:02:42.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1790.msg28696#msg28696"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「BitDNSとビットコインの汎用化」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/532/"
threadId: "bt-bitdns-and-generalizing-bitcoin"
threadTitle: "BitDNS and Generalizing Bitcoin"
threadPosition: 1
translationStatus: complete
---

BitDNSが完全に別のネットワークと別のブロックチェーンでありながら、BitcoinとCPUパワーを共有できるようにすることは可能だと思います。唯一の重複は、マイナーが両方のネットワークのプルーフ・オブ・ワークを同時に検索できるようにすることです。

ネットワーク間の調整は不要です。マイナーは両方のネットワークに並行して接続します。ヒットを得た場合、潜在的に両方を同時に解決するようにSHAをスキャンします。一方のネットワークの難易度が低い場合、その片方のネットワークだけの解決になるかもしれません。

外部マイナーが両方のプログラムでgetworkを呼び出し、作業を組み合わせることができると思います。例えばBitcoinを呼び出し、そこから作業を取得し、BitDNS getworkに渡して組み合わせた作業にするとか。

断片化する代わりに、ネットワークは互いの合計CPUパワーを共有し強化します。これは、複数のネットワークがある場合に利用可能なCPUパワーが1つのネットワークに集中すると互いに危険になるという問題を解決します。代わりに、世界中のすべてのネットワークが合算されたCPUパワーを共有し、全体の強度を高めます。小さなネットワークが既存のマイナーの基盤を活用して容易にスタートできるようになります。
