---
title: "ルーク・ダッシュジュニア — Bitcoin Core 長期貢献者、Bitcoin Knots メンテナー、Ocean マイニングプール共同創業者（生年不明）"
date: 2012-07-22T21:35:45Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Luke_Dashjr"
author: "Luke Dashjr"
participants:
  - name: "Luke Dashjr"
    slug: "luke-dashjr"
description: "アメリカのソフトウェア開発者（luke-jr）。長期Bitcoin Core貢献者、Bitcoin Knots維持、Ocean共同創業（2023）。2022年末に350万ドル超のウォレット盗難。"
isSatoshi: false
tags:
  - "luke-dashjr"
  - "biography"
  - "bitcoin-core"
  - "bitcoin-knots"
  - "ocean"
  - "mining-pool"
  - "historic"
secondarySources:
  - name: "Luke Dashjr — Wikipedia"
    url: "https://en.wikipedia.org/wiki/Luke_Dashjr"
relatedEntries:
  - forum/github/pr-1620/2012-07-22-pr-1620-change-window-titles-to-bitcoin-qt-purpose-misc-re
translationStatus: complete
---

ルーク・ダッシュジュニア（GitHub および BitcoinTalk 上のハンドル名 **Luke-Jr**）はアメリカのソフトウェア開発者で、長期にわたる Bitcoin Core 貢献者である。Bitcoin 関連の公開活動を除き、個人の伝記的情報はあまり流通していない。

```mermaid
timeline
    2010年代初頭 : Bitcoin Core 貢献開始
    2012 : アーカイブ初登場 PR #1620 bitcoin-qt ウィンドウタイトル (7月22日)
    2013 : v0.8 コンセンサスバグ後の チェーン再統合調整 (3月)
         : Bitcoin Knots 派生クライアントの 維持開始
    2015 : ブロックサイズ論争 — 小ブロック側 主要論者
    2017 : OP_RETURN 制限論議 主要論者
    2022 : 個人ウォレット盗難 — 約 216.93 BTC、 PGP 鍵侵害 (12月末)
    2023 : Ocean マイニングプール 共同創業 — 透明な ブロックテンプレート
```

### Bitcoin Core
ダッシュジュニアはアーカイブに2012年7月22日、bitcoin-qt のウィンドウタイトルに関する [PR #1620](/BitcoinArchive/ja/entries/forum/github/pr-1620/2012-07-22-pr-1620-change-window-titles-to-bitcoin-qt-purpose-misc-re/) を開く形で登場する。2010年代初頭から継続的に Bitcoin Core の貢献者であり、パッチのレビュー、改善の提案、そして Bitcoin の原意と一致しないと判断した変更への反論を続けてきた。2013年3月、v0.8 のコンセンサスバグによって Bitcoin が2つの非互換なチェーンに分裂した際、彼はノードを v0.7 互換の挙動に戻してチェーンを再統合するコミュニティの対応を調整する役割を担った。

### Bitcoin Knots
ダッシュジュニアは **Bitcoin Knots** を維持している。これは Bitcoin Core の派生クライアントで、追加の設定可能性──特にメンプール・フィルターと `OP_RETURN` データ搬送出力に対する制限──を備える。Bitcoin Knots は、Bitcoin ノードが非金融データをどの程度中継することを許容すべきかというコミュニティ内の継続的な議論のなかで、くり返し参照される位置を占めてきた。

### Ocean マイニングプール
2023年、ダッシュジュニアは **Ocean** マイニングプールを共同創業した。掲げた目的は、ブロックテンプレートを透明に公開し、マイナーがマイニングするトランザクション集合に対する制御権を持てるようにすることで、Bitcoin のマイニングを分散化することである。

### ウォレット盗難（2022–2023）
2022年12月末、ダッシュジュニアの個人ウォレット──約216.93 BTC を保有していたと報告された──が流出した。彼はこの攻撃を、自身の PGP 鍵の侵害に起因すると説明した。侵害された PGP 鍵を通じて攻撃者がホットウォレットに到達したという。当時、個人開発者のウォレット損失としては比較的大きな公的議論の的となった事件の一つだった。

### 意義
ダッシュジュニアは、サトシ離脱後の Bitcoin の全期にわたって活動を続けてきた数少ない参加者の一人である──初期の Core パッチから、ブロックサイズ論争（小ブロック側）を経て、OP_RETURN・インスクリプションをめぐる議論まで、そして近年のマイニング分散化の取り組みまで。彼の立場はベースレイヤーの挙動変更に対して一貫して保守的であり、Bitcoin Knots の継続的なメンテナンスはその保守性の具体的な表現である。
