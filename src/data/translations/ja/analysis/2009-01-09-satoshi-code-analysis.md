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
featured: true
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
translationStatus: complete
---

本分析は、サトシ・ナカモトのBitcoinソースコードをv0.1.0（2009年1月）からv0.3.19（2010年12月）まで、サトシの既知の開発活動全期間にわたって調査したものである。データはオリジナルのBitcoin v0.1.0ソースとBitcoin Coreのgitリポジトリ（git-svn変換により保存されたSVN履歴）から取得した。

**データソース:**
- `s_nakamoto`によるユニークSVNコミット160件（主要データ — オリジナルのタイムスタンプを保持）
- `Satoshi Nakamoto <satoshin@gmx.com>`によるgitコミット34件
- v0.1.0からv0.3.19までの全ソースコード分析

**主な発見:**
- **タイムゾーン:** 06:00〜12:00 UTCにコミットがほぼ皆無であることから、EST（UTC-5）またはCST（UTC-6）在住の可能性が最も高い
- **活動期間:** 420日間（2009年10月〜2010年12月）、109日間にコミット
- **コーディングスタイル:** ハンガリアン記法の変種、四重スラッシュ（`////`）TODOマーカー、独自マクロ（`loop`、`foreach`、`CRITICAL_BLOCK`）、Windows中心開発の一貫した使用
- **コード成長:** 14ヶ月で19,901行→31,909行（+60%）
- **最終活動:** セキュリティ強化、DoS対策、中央集権的セーフモードの除去 — プロジェクトの引き渡しを準備する者の特徴的な作業

以下のインタラクティブなビジュアライゼーションは、本分析の統計データを提示する。
