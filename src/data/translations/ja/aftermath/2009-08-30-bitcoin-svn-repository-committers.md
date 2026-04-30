---
title: "Bitcoin SourceForge SVNリポジトリ — コミッター全記録（2009–2011）"
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
description: "BitcoinのSourceForge SVNリポジトリにコミット権を持っていた全4名の開発者の完全な記録。2009年8月30日から2011年9月13日までの252リビジョンを網羅。"
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
  - sourceforge/2008-11-09-bitcoin-project-registered
  - aftermath/2010-05-22-bitcoin-pizza-day
  - correspondence/martti-malmi/2010-12-03-handover-to-gavin
  - analysis/2009-01-09-satoshi-distribution-and-tooling-anomalies
  - analysis/2009-01-09-satoshi-code-analysis
translationStatus: complete
---

Bitcoinが[GitHubに移行する](/BitcoinArchive/ja/entries/aftermath/2011-09-13-bitcoin-github-migration-committers/)以前、すべての開発はSourceForgeでホストされたSubversion（SVN）リポジトリで行われていた。リポジトリは2009年8月30日に作成され、2011年9月13日の最終コミットまでに252リビジョンが記録された。このリポジトリにコードをコミットしたのは、わずか4人だった。

**SVN以前：**
サトシ・ナカモトはSVNリポジトリが存在する前、SourceForge上で`.rar`アーカイブとしてソースコードを配布していた。SourceForgeプロジェクトは[2008年11月9日に登録](/BitcoinArchive/ja/entries/sourceforge/2008-11-09-bitcoin-project-registered/)され、Bitcoin v0.1は[2009年1月9日にリリース](/BitcoinArchive/ja/entries/sourceforge/2009-01-09-bitcoin-v01-released/)された。最初の8ヶ月間、ソースコードはバージョン管理システムではなく、ダウンロード可能なアーカイブとして配布されていた。

**SVNコミッター（完全なリスト）：**

| ユーザー名 | 開発者 | 最初のコミット | 最後のコミット | コミット数 |
|-----------|--------|-------------|-------------|-----------|
| sirius-m | マルッティ・マルミ | r1（2009-08-30） | r56 | 21 |
| s_nakamoto | サトシ・ナカモト | r15 | r202（2010-12-15） | 164 |
| laszloh | ラズロ・ハニエツ | r123（2010-08-04） | r123 | 1 |
| gavinandresen | ギャビン・アンドレセン | r165（2010-10-11） | r252（2011-09-13） | 81 |

**マルッティ・マルミ（sirius-m）** はr1の"First commit"でSVNリポジトリを作成した。サトシがVisual C++ 6.0を使用してWindows上で開発したコードベースをLinuxに移植し、56リビジョンまでに21のコミットを行った。

**サトシ・ナカモト（s_nakamoto）** のコミット数は252リビジョン中164件と圧倒的に多い。最後のリリースコミットはr201（"version 0.3.19 release"、2010年12月13日）。その2日後、小さな修正をもう1件 — r202（"get external ip from irc"、2010年12月15日）を入れた。r202以降にs_nakamotoのコミットはない。

**ラズロ・ハニエツ（laszloh）** — [史上初のビットコインによる実世界での購入](/BitcoinArchive/ja/entries/aftermath/2010-05-22-bitcoin-pizza-day/)（ピザ2枚に1万BTC）とGPUマイニングの先駆者として知られる — のSVNコミットはたった1件：2010年8月4日のr123で、macOSのコンパイル問題を修正した。

**ギャビン・アンドレセン（gavinandresen）** は2010年10月にコミットアクセスを取得した。サトシがプロジェクトを段階的に引き渡す過程の一環だった。81件のコミットはサトシに次いで2番目に多い。2010年12月3日、サトシは[マルッティ・マルミにこう書いている](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2010-12-03-handover-to-gavin/)：

> 「ギャビンがいいと思う。信頼できるし、責任感があり、プロフェッショナルで、技術的にもLinuxに関しては私よりずっと上だ」

アンドレセンの最後のSVNコミットは2011年9月13日のr252で、メッセージには「Development has moved to github.」と記されていた。これがSourceForge SVN時代の正式な終焉となった。

**注目すべき不在：** ジェフ・ガージックとピーター・ウィーユはSourceForgeプロジェクトメンバーとして登録されているが、SVNコミットは一度も行っていない。彼らのコミットアクセスはGitHubから始まった。
