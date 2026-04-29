---
title: "サトシ・ナカモトのソースコード分析 — コーディングスタイル・コミットパターン・コード進化（v0.1.0〜v0.3.19）"
date: 2009-01-09T00:00:00Z
type: "analysis"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin"
author: "Bitcoin Institute"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトのBitcoinソースコード（v0.1.0〜v0.3.19）の統計的分析。コーディングスタイルの指紋、EST/CSTタイムゾーンを示唆するコミット時間帯パターン、14ヶ月で19,901行から31,909行へのコード進化、失踪前の最終コミットの特徴。"
isSatoshi: true
homeOrder: 5
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
  - "aftermath/2008-10-31-satoshi-nakamoto-biography"
  - "aftermath/2008-08-22-wei-dai-biography"
  - "aftermath/2024-08-06-forensicxs-bitcoin-v01-code-walkthrough"
  - "analysis/2009-01-03-genesis-block-hardcode-analysis"
  - "forum/github/pr-4641/2014-08-06-pr-4641-doc-remove-satoshi-s-variable-naming-style"
  - "correspondence/martti-malmi/2010-05-14-status-update-191"
  - "correspondence/martti-malmi/2010-05-16-status-update-192"
  - "analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies"
  - "analysis/2008-08-20-satoshi-activity-timeline"
inlineLinkKeywords:
  - "サトシのコーディングスタイル"
  - "コーディングスタイルの指紋"
  - "コミット時刻パターン"
  - "コードの進化"
translationStatus: complete
---

本分析はビットコイン・インスティテュートが、サトシ・ナカモトのBitcoinソースコードをv0.1.0（2009年1月）からv0.3.19（2010年12月）まで調査したものである。2つの異なるデータセットを組み合わせている：v0.1.0リリースの**静的ソースコード分析**（2009年1月にバージョン管理なしで配布）と、マルッティ・マルミの協力により2009年10月に導入されたSourceForge SVNリポジトリの**コミット履歴分析**。v0.1.0（2009年1月）からSVN開始（2009年10月）までの期間にはコミット履歴が保存されていない。

**データソース:**
- **ソースコード:** オリジナルのBitcoin v0.1.0ソースとv0.3.19までのタグ付きリリース
- **コミット履歴:** `s_nakamoto`によるユニークSVNコミット160件（主要データ — オリジナルのタイムスタンプを保持）+ `Satoshi Nakamoto <satoshin@gmx.com>`によるgitコミット34件

**主な発見:**
- **タイムゾーン:** 06:00〜12:00 UTCにコミットがほぼ皆無であることから、EST（UTC-5）またはCST（UTC-6）在住の可能性が最も高い
- **コミット活動期間（SVN）:** 420日間（2009年10月〜2010年12月）、109日間にコミット
- **コーディングスタイル:** ハンガリアン記法の変種、四重スラッシュ（`////`）TODOマーカー、独自マクロ（`loop`、`foreach`、`CRITICAL_BLOCK`）、Windows中心開発の一貫した使用
- **コード成長:** 14ヶ月で19,901行→31,909行（+60%）
- **最終活動:** セキュリティ強化、DoS対策、中央集権的セーフモードの除去 — プロジェクトの引き渡しを準備する者の特徴的な作業

**75日間の空白（2010年3月〜5月）：**

以下の月別コミットチャートには、2010年3月初旬から5月中旬まで `s_nakamoto` のSVNコミットが一切行われなかった顕著な空白期間が見える。サトシ自身が2010年5月16日のメールでこの不在を認めて説明している。[マルッティ・マルミが消息を尋ねた](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2010-05-14-status-update-191/)後（「どうしているんですか？ しばらく見かけませんでしたね」）、サトシは[返信した](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2010-05-16-status-update-192/)。*「私もこの1ヶ月半、他のことで忙しくしていました。4月初めからのメールをたった今ダウンロードしたところです。ほぼ整理がついたので、まもなくBitcoinに戻れるはずです」*

これはこの空白期間について残されている唯一の一人称の記録である。サトシは「他のこと」が何であったかは明示していない。

以下のインタラクティブなビジュアライゼーションは、本分析の統計データを提示する。
