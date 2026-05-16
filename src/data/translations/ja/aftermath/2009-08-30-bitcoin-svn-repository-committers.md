---
title: "ビットコイン SourceForge SVN リポジトリ — コミッター全記録（2009–2011）"
date: 2009-08-30T00:00:00Z
type: "article"
source: "sourceforge"
sourceUrl: "https://sourceforge.net/p/bitcoin/code/log/"
author: "Bitcoin Project"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
  - name: "Laszlo Hanyecz"
    slug: "laszlo-hanyecz"
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "ビットコインの SourceForge SVN リポジトリにコミット権を持っていた全 4名の開発者の完全な記録。2009年8月30日から 2011年9月13日までの 252 リビジョンを網羅。"
isSatoshi: true
tags:
  - "sourceforge"
  - "svn"
  - "repository"
  - "commit-access"
  - "development"
  - "historic"
secondarySources:
  - name: "BitcoinTalk — List of people who have had commit access to Bitcoin Core"
    url: "https://bitcointalk.org/index.php?topic=1774750.0"
  - name: "b10c.me — The Incomplete History of Bitcoin Development"
    url: "https://b10c.me/blog/004-the-incomplete-history-of-bitcoin-development/"
  - name: "GitHub Issue #7512 — Misattributed authorship in commit log"
    url: "https://github.com/bitcoin/bitcoin/issues/7512"
  - name: "research-note/bitcoin-legacy — Git mirror of Bitcoin SVN"
    url: "https://github.com/research-note/bitcoin-legacy"
relatedEntries:
  - "aftermath/2011-09-13-bitcoin-github-migration-committers"
  - aftermath/2008-11-09-bitcoin-project-registered
  - aftermath/2010-05-22-bitcoin-pizza-day
  - correspondence/martti-malmi/2010-12-03-handover-to-gavin
  - analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies
  - analysis/2009-01-09-satoshi-code-analysis
translationStatus: complete
---

ビットコインが [GitHub に移行する](/BitcoinArchive/ja/entries/aftermath/2011-09-13-bitcoin-github-migration-committers/)以前、すべての開発は SourceForge でホストされた Subversion（SVN）リポジトリで行われていた。リポジトリは 2009年8月30日に作成され、2011年9月13日の最終コミットまでに 252 リビジョンが記録された。このリポジトリにコードをコミットしたのは、わずか 4人だった。

**SVN 以前：**
サトシ・ナカモトは SVN リポジトリが存在する前、SourceForge 上で`.rar`アーカイブとしてソースコードを配布していた。SourceForge プロジェクトは [2008年11月9日に登録](/BitcoinArchive/ja/entries/aftermath/2008-11-09-bitcoin-project-registered/)され、Bitcoin v0.1 は [2009年1月9日にリリース](/BitcoinArchive/ja/entries/aftermath/2009-01-09-bitcoin-v01-released/)された。最初の 8ヶ月間、ソースコードはバージョン管理システムではなく、ダウンロード可能なアーカイブとして配布されていた。

**SVN コミッター（完全なリスト）：**

| ユーザー名 | 開発者 | 最初のコミット | 最後のコミット | コミット数 |
|-----------|--------|-------------|-------------|-----------|
| sirius-m | [マルッティ・マルミ](/BitcoinArchive/ja/participants/martti-malmi/) | r1（2009-08-30） | r56 | 21 |
| s_nakamoto | [サトシ・ナカモト](/BitcoinArchive/ja/participants/satoshi-nakamoto/) | r15 | r202（2010-12-15） | 約 160（ミラーや重複除外の数え方で差あり） |
| laszloh | [ラズロ・ハニエツ](/BitcoinArchive/ja/participants/laszlo-hanyecz/) | r123（2010-08-04） | r123 | 1 |
| gavinandresen | [ギャビン・アンドレセン](/BitcoinArchive/ja/participants/gavin-andresen/) | r165（2010-10-11） | r252（2011-09-13） | 81 |

**マルッティ・マルミ（sirius-m）** は r1 の"First commit"で SVN リポジトリを作成した。サトシが Visual C++ 6.0 を使用して Windows 上で開発したコードベースを Linux に移植し、56 リビジョンまでに 21 のコミットを行った。

**サトシ・ナカモト（s_nakamoto）** のコミット数は 252 リビジョン中およそ 160件と圧倒的に多い（[コード分析](/BitcoinArchive/ja/entries/analysis/2009-01-09-satoshi-code-analysis/)ではユニークコミット 160 件として扱う。164 という値もミラー側の数え方として流通している — 集計対象がブランチを含むか・ミラー由来の重複をどう扱うかで差が出る）。最後のリリースコミットは r201（"version 0.3.19 release"、2010年12月13日）。その 2日後、小さな修正をもう 1件 — r202（"get external ip from irc"、2010年12月15日）を入れた。r202 以降に s_nakamoto のコミットはない。

**ラズロ・ハニエツ（laszloh）** — [史上初のビットコインによる実世界での購入](/BitcoinArchive/ja/entries/aftermath/2010-05-22-bitcoin-pizza-day/)（ピザ 2枚に 1 万 BTC）と GPU マイニングの先駆者として知られる — の SVN コミットはたった 1件：2010年8月4日の r123 で、macOS のコンパイル問題を修正した。

**ギャビン・アンドレセン（gavinandresen）** は 2010年10月にコミットアクセスを取得した。サトシがプロジェクトを段階的に引き渡す過程の一環だった。81件のコミットはサトシに次いで 2番目に多い。2010年12月3日、サトシは[マルッティ・マルミにこう書いている](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2010-12-03-handover-to-gavin/)：

> 「ギャビンがいいと思う。信頼できるし、責任感があり、プロフェッショナルで、技術的にもLinuxに関しては私よりずっと上だ」

アンドレセンの最後の SVN コミットは 2011年9月13日の r252 で、メッセージには「Development has moved to github.」と記されていた。これが SourceForge SVN 時代の正式な終焉となった。

**注目すべき不在：** ジェフ・ガージックとピーター・ウィーユは SourceForge プロジェクトメンバーとして登録されているが、SVN コミットは一度も行っていない。彼らのコミットアクセスは GitHub から始まった。
