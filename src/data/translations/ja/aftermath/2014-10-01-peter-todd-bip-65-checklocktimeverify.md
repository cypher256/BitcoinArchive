---
title: "ピーター・トッドがBIP 65: OP_CHECKLOCKTIMEVERIFYを提案"
date: 2014-10-01T00:00:00Z
type: "bip"
source: "github"
sourceUrl: "https://github.com/bitcoin/bips/blob/master/bip-0065.mediawiki"
author: "Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
description: "ピーター・トッドが BIP 65（OP_CHECKLOCKTIMEVERIFY）を提案。出力を指定将来時点まで使用不能とする命令を導入し、エスクローやペイメントチャネルを実現。"
isSatoshi: false
tags:
  - "peter-todd"
  - "bip"
  - "timelocks"
  - "bitcoin-core"
  - "soft-fork"
secondarySources:
  - name: "Bitcoin Wiki — BIP 0065"
    url: "https://en.bitcoin.it/wiki/BIP_0065"
  - name: "Cointelegraph — Peter Todd and the Expansion of Bitcoin"
    url: "https://cointelegraph.com/news/peter-todd-and-the-expansion-of-bitcoin"
  - name: "Bitcoin-dev mailing list — BIP 65 discussion"
    url: "https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2014-November/006948.html"
relatedEntries:
  - aftermath/2010-12-07-peter-todd-biography
  - aftermath/2010-12-07-retep-diaspora-invite-first-post
  - aftermath/2015-12-04-peter-todd-bip-125-replace-by-fee
  - aftermath/2016-09-15-peter-todd-opentimestamps-announcement
  - aftermath/2016-10-22-peter-todd-zcash-trusted-setup
  - aftermath/2024-10-08-hbo-money-electric-peter-todd
translationStatus: complete
---

<!-- speaker: narrator -->
2014年10月1日、ピーター・トッドはBIP 65を提案し、Bitcoinのスクリプトシステムに新しいオペコード「OP_CHECKLOCKTIMEVERIFY」を導入した。この提案は既存のNOP2オペコードを再定義し、タイムロックされたトランザクション出力——指定されたブロック高またはタイムスタンプに達するまで使用できない出力——を可能にした。

**仕組み：**

<!-- speaker: narrator -->
このオペコードはスクリプトスタック上の値をトランザクションのnLockTimeフィールドと比較する。nLockTimeに達していなければスクリプトは失敗し、トランザクションは拒否される。これにより、将来の特定時点まで資金をロックするスクリプトを強制できる。

**ユースケース：**

<!-- speaker: narrator -->
- **遅延アクセス付きエスクロー：** 三者間エスクローで、弁護士がタイムアウト後にのみ資金にアクセスできるようにし、即時の窃盗を防止する
- **二要素ウォレット：** 2-of-2マルチシグでコインを保持するサービスが、サービス停止時に自動返金を実装できる
- **ペイメントチャネル：** トランザクション展性の回避策に依存しない非対話型の返金メカニズム
- **資金凍結：** 指定時刻まで証明可能にビットコインをロックし、強迫や没収のリスクを軽減する

**意義：**

<!-- speaker: narrator -->
BIP 65はコンセンサースレベルのソフトフォークとしてデプロイされた。より高度なBitcoinスマートコントラクトの構成要素の一つであり、後にLightning Networkを支えるペイメントチャネルの基盤となった。BIP 125（Replace-by-Fee）と並んで、ピーター・トッドのBitcoinプロトコルへの最も重要な貢献である。
