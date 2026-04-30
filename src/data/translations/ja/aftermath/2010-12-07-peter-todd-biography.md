---
title: "ピーター・トッド（1985–） — Bitcoin Core開発者、Replace-by-Feeの提唱者"
date: 2010-12-07T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Peter_Todd"
author: "Peter Todd"
participants:
  - name: "Peter Todd"
    slug: "peter-todd"
description: "ピーター・トッド：カナダの暗号学者でBitcoin Core開発者。Replace-by-Fee（RBF）の提唱やOpenTimestampsの開発で知られる。2010年12月7日にユーザー名「retep」でBitcoinTalkに登録し、3日後にサトシ・ナカモトの投稿に返信した。2024年10月、HBOのドキュメンタリーでサトシ・ナカモト候補として取り上げられたが、本人は否定した。"
isSatoshi: false
tags:
  - "peter-todd"
  - "biography"
  - "replace-by-fee"
  - "opentimestamps"
  - "bitcoin-core"
secondarySources:
  - name: "Wikidata — Peter Todd (Q130523424)"
    url: "https://www.wikidata.org/wiki/Q130523424"
  - name: "Peter Todd — OpenTimestamps"
    url: "https://opentimestamps.org/"
  - name: "BIP 125 — Opt-in Full Replace-by-Fee Signaling"
    url: "https://github.com/bitcoin/bips/blob/master/bip-0125.mediawiki"
  - name: "HBO — Money Electric: The Bitcoin Mystery（2024年10月）"
    url: "https://www.hbo.com/movies/money-electric-the-bitcoin-mystery"
  - name: "Peter Todd — BitcoinTalkプロフィール"
    url: "https://bitcointalk.org/index.php?action=profile;u=2546"
  - name: "Peter Todd — GitHubプロフィール"
    url: "https://github.com/petertodd"
  - name: "Gregory Maxwell — Hacker Newsコメント（retepの逆綴りに気づくのに10年近くかかった）"
    url: "https://news.ycombinator.com/item?id=41784567"
  - name: "Peter Todd — 公式ウェブサイト"
    url: "https://petertodd.org/"
relatedEntries:
  - aftermath/2010-12-07-retep-diaspora-invite-first-post
  - aftermath/2014-10-01-peter-todd-bip-65-checklocktimeverify
  - aftermath/2015-12-04-peter-todd-bip-125-replace-by-fee
  - aftermath/2016-09-15-peter-todd-opentimestamps-announcement
  - aftermath/2016-10-22-peter-todd-zcash-trusted-setup
  - aftermath/2024-10-08-hbo-money-electric-peter-todd
  - analysis/2024-10-08-todd-satoshi-identity-hypothesis
  - forum/bitcointalk/topic-2181/2010-12-10-retep-re-fees-in-bitdns-confusion
  - forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post
  - bip/2015-11-03-bip-0125
  - analysis/2008-10-31-satoshi-identity-hypotheses-overview
  - analysis/2008-10-31-satoshi-identification-asymmetry
  - analysis/2008-10-31-satoshi-anonymity-architecture
translationStatus: complete
---

ピーター・トッド（1985年3月14日、カナダ・バンクーバー生まれ）は暗号学者、応用暗号コンサルタント、Bitcoin Core開発者である。2011年にOCAD University（Ontario College of Art and Design）のIntegrated Media専攻を卒業し、以前は地球物理学スタートアップGedex Inc.でアナログ電子工学の設計者として勤務していた。2008年4月にGitHubアカウントを登録している。Bitcoinプロトコルのセキュリティ、スケーラビリティ、および技術的トレードオフに関する率直な発言で知られる。

**BitcoinTalkとサトシ：**
トッドは2010年12月7日にユーザー名「retep」でBitcoinTalkに登録した。当時、このハンドルネームがPeterの逆綴りであることに気づいた者はほとんどいなかった（Bitcoin Core開発者のグレゴリー・マクスウェルですら「気づくのに10年近くかかった」と2024年にHacker Newsで述べている）。数年後、トッドはこのアカウントのユーザー名を自ら「Peter Todd」に変更した。3日後の12月10日、「Fees in BitDNS confusion」スレッドで[サトシ・ナカモト](/BitcoinArchive/ja/participants/satoshi-nakamoto/)の[投稿に返信した](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2181/2010-12-10-retep-re-fees-in-bitdns-confusion/)。サトシはそこでトランザクション置換の概念 — 後にReplace-by-Feeとして知られるもの — を説明していた。これはトッドのフォーラムでの2番目の投稿だった。サトシの[最後の公開投稿](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post/)はその2日後の2010年12月12日だった。

**Bitcoin Coreへの貢献：**
トッドは2012年4月からBitcoin Coreの活発な貢献者となり、最終的にBitcoin CoreのGitHubリポジトリで11番目に多い貢献者となった。プロトコルレベルのセキュリティ、トランザクションポリシー、ネットワークの耐障害性に注力した。

**BIP 65: OP_CHECKLOCKTIMEVERIFY（2014年10月）：**
トッドは[BIP 65](/BitcoinArchive/ja/entries/aftermath/2014-10-01-peter-todd-bip-65-checklocktimeverify/)を提案し、トランザクション出力を指定された将来の時点まで使用不能にする新しいオペコードを導入した。ソフトフォークとしてデプロイされ、ペイメントチャネルおよびLightning Networkの構成要素となった。

**Replace-by-Fee（RBF）— BIP 125（2015年12月）：**
トッドが最も知られているのはReplace-by-Fee（RBF）の推進である。未確認トランザクションを手数料の高い新しいバージョンに置き換えることを可能にする仕組みで、[BIP 125](/BitcoinArchive/ja/entries/bip/2015-11-03-bip-0125/)としてデイヴィッド・A・ハーディングとの共著で正式に策定された。BIPのRationale（根拠）は、サトシ・ナカモトのオリジナルのトランザクション置換メカニズムに概念を明示的に辿っている。

**[OpenTimestamps](/BitcoinArchive/ja/entries/aftermath/2016-09-15-peter-todd-opentimestamps-announcement/)（2016年9月）：**
トッドはOpenTimestampsを開発した。Bitcoinブロックチェーンを利用して改ざん不可能なタイムスタンプを作成するオープンソースプロジェクトで、特定の時点で文書が存在していたことを証明できる。サトシがBitcoinのコア設計に組み込んだタイムスタンプ機能を一般化したプロジェクトである。

**Zcashトラステッドセットアップセレモニー（2016年10月）：**
トッドはZcashのトラステッドセットアップセレモニーの6人の参加者の1人だった。ブリティッシュコロンビア州をドライブしながら計算を実行し、ラップトップをファラデーケージで遮蔽し、終了後にハードウェアをプロパントーチで破壊した。参加したにもかかわらず、プロセスを痛烈に批判し、参加者間の共謀は証明不可能であり、未監査の決定論的ビルドはセレモニーを「暗号的なまやかし」にしていると述べた。

**その他の役職：**
トッドはMastercoinおよびDark Walletでチーフサイエンティストを務め、プライバシー強化のためのステルスアドレス（BIP 63、未実装）の設計にも貢献した。2014年7月からCoinkiteのコンサルタントとして勤務した。

**HBOドキュメンタリー（2024年10月）：**

<!-- speaker: narrator -->
2024年10月、HBOのドキュメンタリー[「Money Electric: The Bitcoin Mystery」](/BitcoinArchive/ja/entries/aftermath/2024-10-08-hbo-money-electric-peter-todd/)は、トッドをサトシ・ナカモトの正体候補として取り上げ、2010年12月のサトシの投稿への返信を証拠として指摘した。トッドはこの主張を否定し、無責任で危険だと述べた。

