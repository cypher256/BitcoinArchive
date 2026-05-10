---
title: "サトシのコードが語ること — コーディングスタイル・コミットパターン・コード進化（v0.1.0〜v0.3.19）"
date: 2009-01-09T00:00:00Z
type: "analysis"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシの Bitcoin ソース（v0.1.0〜v0.3.19）の統計分析。コーディングスタイル指紋、EST/CST 示唆のコミット時間、19,901→31,909 行進化、最終コミットの特徴。"
isSatoshi: true
homeOrder: 7
tags:
  - "satoshi-nakamoto"
  - "source-code"
  - "analysis"
  - "coding-style"
  - "timeline"
  - "historic"
secondarySources:
  - name: "Original Bitcoin v0.1.0 Source (trottier/original-bitcoin)"
    url: "https://github.com/trottier/original-bitcoin"
  - name: "Satoshi Nakamoto Institute — Code"
    url: "https://satoshi.nakamotoinstitute.org/code/"
relatedEntries:
  - "analysis/2008-10-31-bitcoin-design-lineage"
  - "analysis/2008-10-31-satoshi-anonymity-architecture"
  - "analysis/2008-10-31-satoshi-identification-asymmetry"
  - "aftermath/2008-10-31-satoshi-nakamoto-biography"
  - "aftermath/2008-08-22-wei-dai-biography"
  - "aftermath/2024-08-06-forensicxs-bitcoin-v01-code-walkthrough"
  - "analysis/2009-01-03-genesis-block-hardcode-analysis"
  - "forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style"
  - "correspondence/martti-malmi/2010-05-14-status-update-191"
  - "correspondence/martti-malmi/2010-05-16-status-update-192"
  - "analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies"
  - "analysis/2008-08-20-satoshi-activity-timeline"
  - "aftermath/2009-05-01-martti-malmi-biography"
  - "aftermath/2009-08-30-bitcoin-svn-repository-committers"
  - "aftermath/2010-06-11-gavin-andresen-biography"
  - "aftermath/2013-04-17-sergio-lerner-patoshi-analysis"
  - "aftermath/2020-11-23-chain-bulletin-satoshi-london-hypothesis"
inlineLinkKeywords:
  - "サトシのコーディングスタイル"
  - "コーディングスタイルの指紋"
  - "コミット時刻パターン"
  - "コードの進化"
translationStatus: complete
---

本分析は Bitcoin Institute が、サトシ・ナカモトのビットコインソースコードを v0.1.0（2009年1月）から v0.3.19（2010年12月）まで調査したものである。2 つの異なるデータセットを組み合わせている：v0.1.0 リリースの**静的ソースコード分析**（2009年1月にバージョン管理なしで配布）と、マルッティ・マルミの協力により 2009年10月に導入された SourceForge SVN リポジトリの**コミット履歴分析**。v0.1.0（2009年1月）から SVN 開始（2009年10月）までの期間にはコミット履歴が保存されていない。

**データソース:**
- **ソースコード:** オリジナルの Bitcoin v0.1.0 ソースと v0.3.19 までのタグ付きリリース
- **コミット履歴:** `s_nakamoto`によるユニーク SVN コミット 160件（主要データ — オリジナルのタイムスタンプを保持）+ `Satoshi Nakamoto <satoshin@gmx.com>`による git コミット 34件

**主な発見:**
- **タイムゾーン:** 06:00〜12:00 UTC にコミットがほぼ皆無であることから、EST（UTC-5）または CST（UTC-6）在住の可能性が最も高い
- **コミット活動期間（SVN）:** 420日間（2009年10月〜2010年12月）、109日間にコミット
- **コーディングスタイル:** ハンガリアン記法の変種、四重スラッシュ（`////`）TODO マーカー、独自マクロ（`loop`、`foreach`、`CRITICAL_BLOCK`）、Windows 中心開発の一貫した使用（v0.1 の配布・開発環境上の選択については[ビットコイン v0.1 の配布・開発環境異例分析](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies/)で別途扱う）
- **コード成長:** 14ヶ月で 19,901 行→31,909 行（+60%）
- **最終活動:** セキュリティ強化、DoS 対策、中央集権的セーフモードの除去 — プロジェクトの引き渡しを準備する者の特徴的な作業

**75日間の空白（2010年3月〜5月）：**

以下の月別コミットチャートには、2010年3月初旬から 5月中旬まで `s_nakamoto` の SVN コミットが一切行われなかった顕著な空白期間が見える。サトシ自身が 2010年5月16日のメールでこの不在を認めて説明している。[マルッティ・マルミが消息を尋ねた](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2010-05-14-status-update-191/)後（「どうしているんですか？ しばらく見かけませんでしたね」）、サトシは[返信した](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2010-05-16-status-update-192/)。*「私もこの 1ヶ月半、他のことで忙しくしていました。4月初めからのメールをたった今ダウンロードしたところです。ほぼ整理がついたので、まもなく Bitcoin に戻れるはずです」*

これはこの空白期間について残されている唯一の一人称の記録である。サトシは「他のこと」が何であったかは明示していない。

以下のインタラクティブなビジュアライゼーションは、本分析の統計データを提示する。
