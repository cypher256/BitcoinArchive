---
title: "バリュー・オーバーフロー事件 — ブロック 74638 で 1,840 億 BTC が生成される"
date: 2010-08-15T18:08:00Z
type: "article"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=822.0"
author: "Jeff Garzik"
participants:
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "整数オーバーフローバグ（CVE-2010-5139）の悪用でブロック 74638 に 1,840 億 BTC が生成された。サトシは 5 時間以内に修正、15 時間以内に正常チェーンが追い越した。"
isSatoshi: false
tags:
  - "overflow-bug"
  - "block-74638"
  - "CVE-2010-5139"
  - "security"
  - "soft-fork"
  - "historic"
secondarySources:
  - name: "Bitcoin Wiki — Value overflow incident"
    url: "https://en.bitcoin.it/wiki/Value_overflow_incident"
  - name: "Blockchain Explorer — ブロック 74638"
    url: "https://www.blockchain.com/explorer/blocks/btc/74638"
  - name: "Decrypt — The Day Someone Created 184 Billion Bitcoin"
    url: "https://decrypt.co/39750/184-billion-bitcoin-anonymous-creator"
relatedEntries:
  - analysis/2010-08-15-overflow-incident-structure-and-paradox
  - aftermath/2010-08-15-bitcoin-v0310-overflow-bug-fix
  - forum/bitcointalk/topic-822/2010-08-15-jgarzik-msg9474
  - forum/bitcointalk/topic-823/2010-08-15-overflow-bug-serious
  - forum/bitcointalk/topic-827/2010-08-15-version-0-3-10-block-74638-overflow-patch
  - analysis/2010-08-15-knightmb-snapshot-and-legend
  - aftermath/2010-07-12-knightmb-biography
  - aftermath/2010-06-11-gavin-andresen-biography
  - aftermath/2010-07-15-jeff-garzik-biography
  - aftermath/2010-07-11-slashdot-bitcoin-article
  - aftermath/2014-02-28-mt-gox-bankruptcy
translationStatus: complete
---

2010年8月15日18:08 UTC 頃、ビットコイン開発者[ジェフ・ガージック](/BitcoinArchive/ja/participants/jeff-garzik/)がブロック 74638 で異常を発見し、BitcoinTalk フォーラムの[討論スレッド (topic 823)](/BitcoinArchive/ja/entries/threads/forum/bitcointalk/topic-823/)に投稿した：

> 「奇妙な block 74638 — 92233720368.54277039 BTC？UINT64_MAXかな？」

ブロック 74638 の単一トランザクションが **184,467,440,737.09551616 BTC** を生成していた — 92,233,720,368.54277039 BTC の出力が 2 つ — ビットコインの総発行予定量 2,100 万 BTC の約 9,000倍である。

**バグの内容:** トランザクション検証コードは個々の出力が非負であることを確認していたが、出力の合計における整数オーバーフローをチェックしていなかった。64 ビット符号付き整数の最大値（INT64_MAX ≈ 9.2 × 10¹⁸）に近い 2 つの出力を足すと負の値にオーバーフローし、検証チェックを通過した：0.5 BTC 入力 ≥ -0.01 BTC 出力（オーバーフロー後）。

**対応:** 発見から約 5時間以内に、[サトシ](/BitcoinArchive/ja/participants/satoshi-nakamoto/)は [Bitcoin version 0.3.10](/BitcoinArchive/ja/entries/aftermath/2010-08-15-bitcoin-v0310-overflow-bug-fix/) を公開。`CheckTransaction()`に 2 つの新しいチェックを追加するソフトフォークだった：

1. 各出力は MAX_MONEY（21,000,000 BTC）を超えてはならない
2. すべての出力の合計は MAX_MONEY を超えてはならない

[ギャビン・アンドレセン](/BitcoinArchive/ja/participants/gavin-andresen/)は並行して独自の緊急パッチをテストし、フォーラム参加者 [knightmb](/BitcoinArchive/ja/participants/knightmb/) が事前に公開していた清浄なブロックチェーン・スナップショットを復旧の起点として使用した。

サトシは同日中にオーバーフロー修正を取り込んだ v0.3.10 をリリースし、BitcoinTalk で [Version 0.3.10 - block 74638 overflow PATCH!](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-827/2010-08-15-version-0-3-10-block-74638-overflow-patch/) として告知し、読者をバグそのものの議論スレッドへ誘導した。

**結果:** 修正チェーンは事件発生から約 15時間後のブロック 74691 で無効なチェーンを追い越した。1,840 億 BTC はブロックチェーンの承認済み履歴から事実上消去された。

**偶発か悪用か？** 自然な問い: これは偶発的に起きたのか、それとも意図的な悪用だったのか。v0.3 のソースコードとトランザクション構造を分析すると、一点は確定でき、もう一点は不確定のまま残る。

**トランザクション構造から偶発的発生は否定される。** オーバーフローを発動させるには、合計が INT64_MAX（約 9.2 × 10¹⁸ satoshi）を超える 2 つの出力が必要で、それぞれ約 922 億 BTC 近辺の値でなければならない。この値が通常のウォレット利用で現れる可能性は事実上ない。2010 年当時、個人が 922 億 BTC を保有することは不可能で、現実的な残高は最大でも数千 BTC 程度だった。標準のビットコインウォレットのインターフェースは、出力額を残高と MAX_MONEY で検証してからトランザクションを構築する。92,233,720,368.54277039 BTC という値はタイプミスや丸め誤差で偶然現れる数字ではない — これは int64 の最大値を 10⁸ で割った値であり、オーバーフロー直前を狙って意図的に設定しなければ到達しない。ブロック 74638 に現れたトランザクションを作成するには、通常のウォレット検証をバイパスして raw トランザクションのバイト列を手動で構築し、`CheckTransaction()` の int64 加算でオーバーフローするよう出力値を狙って設定し、署名してネットワークにブロードキャストする必要があった。いずれも意図的で技術的知識を要する行為であり、偶然の組み合わせで発生することは構造上不可能である。

**実行者と動機は公開記録からは特定できない。** ブロックチェーンにはトランザクションと 2 つの受取アドレスが記録されているが、作成者の身元はオンチェーンデータから復元できない。悪意による攻撃か、概念実証のデモンストレーションか、ストレステストだったかは、コードやトランザクション自体からは判断できない。ブロック 74638 を採掘したマイナーが共謀していたかも不明 — バグのある検証ロジックの下では、正直に動作していたノードもそのトランザクションを「有効」と判定するため、包含は共謀を意味しない。

**バグと悪用は別カテゴリだが、両方が成立する。** `CheckTransaction()` の int64 オーバーフローの存在はバグ（CVE-2010-5139）。オーバーフローをトリガーするトランザクションの作成とブロードキャストは意図的な悪用行為であり、トランザクション構成の要件からそれは確定できる。その行為が悪意を伴ったかは公開記録からは判定できない。セキュリティ用語では、脆弱性を意図的に突く行為は、実行者の主張する意図に関係なく「攻撃」と呼ぶ — この語自体は悪意を含意しない。したがって本事件はバグ（根底の欠陥）と攻撃（悪用行為）の両方として記述される。

この事件は根本的なパラドックスを露呈した。分散型システムが中央集権的な意思決定によって救われたのだ。緊急対応の中でコミュニティは独立した検証を経ずに修正クライアントを採用し、サトシの判断を信頼した。非中央集権を掲げる設計と、危機対応における単一の権威への依存という矛盾が、このとき初めて可視化された。
