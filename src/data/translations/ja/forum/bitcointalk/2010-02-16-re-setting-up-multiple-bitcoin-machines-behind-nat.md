---
title: "Re: NAT背後での複数Bitcoinマシンのセットアップ"
date: 2010-02-16T01:34:56.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=54.msg360#msg360"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「NAT背後での複数Bitcoinマシンのセットアップ」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/59/"
translationStatus: complete
---

現在のところ、それを行うためのポート番号設定はありません。まだ実装されていない機能です。NATのポートフォワーディングは1台のコンピュータにしか設定できません。（以前NATポート変換について何か言いましたが、それは機能しないでしょう。他のノードはそのポートに接続することを知らないからです）

もし希望であれば、小さな最適化として、残りのコンピュータを以下のように実行できます：
bitcoin -connect=<最初のコンピュータのIP>

これにより、すべてのネットワーク通信を最初のコンピュータから取得し、同じ情報のために個別にネット経由で接続しなくなります。これは帯域幅を節約しますが、そもそも多くの帯域幅を使用しないため、大量のコンピュータがない限り実際には問題になりません。

最初のコンピュータがダウンした場合の冗長性のために、2台を外部接続し、残りを両方に接続させることができます。最初の2台は通常通り実行し、残りは以下のように実行します：
bitcoin -connect=<IP1> -connect=<IP2>
