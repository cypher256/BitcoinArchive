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
description: "ソフトウェア開発者（luke-jr）。Bitcoin Core 長期貢献者、Bitcoin Knots 維持、Ocean 共同創業（2023）。2022年末に 350 万ドル超のウォレット盗難。"
isSatoshi: false
tags:
  - "luke-dashjr"
  - "biography"
  - "bitcoin-core"
  - "bitcoin-knots"
  - "ocean"
  - "mining-pool"
  - "historic"
relatedEntries:
  - forum/github/pr-1620/2012-07-22-pr-1620-change-window-titles-to-bitcoin-qt-purpose-misc-re
translationStatus: complete
---

2022 年 12 月下旬、ルーク・ダッシュジュニアの個人ウォレットから約 216.93 BTC が流出した —— ダッシュジュニアは PGP 鍵の漏洩によるものだとした。流出の被害者は、ビットコインで最も妥協のないスモールブロック・コンセンサス保守派の一人だった。2012 年からの Bitcoin Core 貢献者、[PR #1620](/BitcoinArchive/ja/entries/forum/github/pr-1620/2012-07-22-pr-1620-change-window-titles-to-bitcoin-qt-purpose-misc-re/) の起票者、2013 年 3 月の v0.8 コンセンサスバグによるチェーン分裂時に再統合を調整した人物、そしてメンプールのデータ運搬出力をより厳しくフィルターリングする Bitcoin Core 派生クライアント **Bitcoin Knots** の長期メンテナー。2023 年、透明なブロックテンプレートを持つマイニングプール **Ocean** を共同設立した。

ダッシュジュニアは GitHub および BitcoinTalk 上のハンドル名 **Luke-Jr** で知られるアメリカのソフトウェア開発者である。

```mermaid
timeline
    2010年代初頭 : Bitcoin Core 貢献開始
    2012 : 最初の GitHub PR #1620 bitcoin-qt ウィンドウタイトル (7月22日)
    %% link: /BitcoinArchive/ja/entries/forum/github/pr-1620/2012-07-22-pr-1620-change-window-titles-to-bitcoin-qt-purpose-misc-re/
    2013 : v0.8 コンセンサスバグ後の チェーン再統合調整 (3月)
         : Bitcoin Knots 派生クライアントの 維持開始
    2015 : ブロックサイズ論争 — 小ブロック側 主要論者
    2017 : OP_RETURN 制限論議 主要論者
    2022 : 個人ウォレット盗難 — 約 216.93 BTC、 PGP 鍵侵害 (12月末)
    2023 : Ocean マイニングプール 共同創業 — 透明な ブロックテンプレート
```

### Bitcoin Core
ダッシュジュニアは bitcoin/bitcoin リポジトリーに 2012年7月22日、bitcoin-qt のウィンドウタイトルに関する [PR #1620](/BitcoinArchive/ja/entries/forum/github/pr-1620/2012-07-22-pr-1620-change-window-titles-to-bitcoin-qt-purpose-misc-re/) を開く形で登場する。2010年代初頭から継続的に Bitcoin Core の貢献者であり、パッチのレビュー、改善の提案、そしてビットコインの原意と一致しないと判断した変更への反論を続けてきた。2013年3月、v0.8 のコンセンサスバグによってビットコインが 2 つの非互換なチェーンに分裂した際、彼はノードを v0.7 互換の挙動に戻してチェーンを再統合するコミュニティの対応を調整する役割を担った。

### Bitcoin Knots
ダッシュジュニアは **Bitcoin Knots** を維持している。これは Bitcoin Core の派生クライアントで、追加の設定可能性──特にメンプール・フィルターーと `OP_RETURN` データ搬送出力に対する制限──を備える。Bitcoin Knots は、ビットコインノードが非金融データをどの程度中継することを許容すべきかというコミュニティ内の継続的な議論のなかで、くり返し参照される位置を占めてきた。

### Ocean マイニングプール
2023年、ダッシュジュニアは **Ocean** マイニングプールを共同創業した。掲げた目的は、ブロックテンプレートを透明に公開し、マイナーがマイニングするトランザクション集合に対する制御権を持てるようにすることで、ビットコインのマイニングを分散化することである。

### ウォレット盗難（2022–2023）
2022年12月末、ダッシュジュニアの個人ウォレット──約 216.93 BTC を保有していたと報告された──が流出した。彼はこの攻撃を、自身の PGP 鍵の侵害に起因すると説明した。侵害された PGP 鍵を通じて攻撃者がホットウォレットに到達したという。当時、個人開発者のウォレット損失としては比較的大きな公的議論の的となった事件の一つだった。

### 意義
ダッシュジュニアは、サトシ離脱後のビットコインの全期にわたって活動を続けてきた数少ない参加者の一人である──初期の Core パッチから、ブロックサイズ論争（小ブロック側）を経て、OP_RETURN・インスクリプションをめぐる議論まで、そして近年のマイニング分散化の取り組みまで。彼の立場はベースレイヤーの挙動変更に対して一貫して保守的であり、Bitcoin Knots の継続的なメンテナンスはその保守性の具体的な表現である。
