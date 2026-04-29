---
title: "BitcoinがGitHubへ移行 — 初期コミッターのアクセス権付与記録（2010–2011）"
date: 2011-09-13T00:00:00Z
type: "article"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin"
author: "Bitcoin Project"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Chris Moore"
    slug: "chris-moore"
  - name: "Pieter Wuille"
    slug: "pieter-wuille"
  - name: "Jeff Garzik"
    slug: "jeff-garzik"
  - name: "Wladimir van der Laan"
    slug: "wladimir-van-der-laan"
  - name: "Nils Schneider"
    slug: "nils-schneider"
description: "BitcoinのSourceForge SVNからGitHubへの移行と、2011年にGitHubリポジトリへのコミットアクセスを付与された開発者の時系列記録。"
isSatoshi: false
tags:
  - "github"
  - "repository"
  - "commit-access"
  - "migration"
  - "development"
  - "bitcoin-core"
  - "historic"
secondarySources:
  - name: "BitcoinTalk — List of people who have had commit access to Bitcoin Core"
    url: "https://bitcointalk.org/index.php?topic=1774750.0"
  - name: "Who Controls Bitcoin Core? — Jameson Lopp"
    url: "https://blog.lopp.net/who-controls-bitcoin-core/"
  - name: "b10c.me — The Incomplete History of Bitcoin Development"
    url: "https://b10c.me/blog/004-the-incomplete-history-of-bitcoin-development/"
  - name: "SourceForge — Bitcoin SVN r252 (final commit)"
    url: "https://sourceforge.net/p/bitcoin/code/252/"
relatedEntries:
  - "aftermath/2011-03-17-pieter-wuille-biography"
  - "aftermath/2010-11-19-wladimir-van-der-laan-biography"
  - "aftermath/2009-08-30-bitcoin-svn-repository-committers"
  - "aftermath/2016-01-15-libsecp256k1-replaces-openssl-bitcoin-core-v012"
  - aftermath/2010-12-19-andresen-lead-maintainer-announcement
translationStatus: complete
---

BitcoinのGitHubリポジトリ（`bitcoin/bitcoin`）は**2010年12月19日**に作成された。[SourceForge SVNリポジトリ](/BitcoinArchive/ja/entries/aftermath/2009-08-30-bitcoin-svn-repository-committers/)はまだ稼働中だった。約9ヶ月間、開発は両プラットフォームで並行して行われた。2011年9月13日、[ギャビン・アンドレセン](/BitcoinArchive/ja/participants/gavin-andresen/)が最終SVNコミット（r252）を行い、メッセージに「Development has moved to github.」と記した。

**移行タイムライン：**
- **2010-12-19:** GitHub リポジトリ `bitcoin/bitcoin` 作成 — [ギャビンがプロジェクト管理を公的に引き受けた日](/BitcoinArchive/ja/entries/aftermath/2010-12-19-andresen-lead-maintainer-announcement/)と同日。
- **2011-01〜2011-09:** SVN と GitHub で並行開発。
- **2011-09-13:** 最終 SVN コミット（r252）、メッセージは「Development has moved to github.」。GitHub が唯一のリポジトリとなる。

**移行の意思決定について（記録から確認できる範囲）：**

本アーカイブが確認できているのは：(1) 2010 年 12 月 19 日に GitHub リポジトリ `bitcoin/bitcoin` が作成されたこと、(2) 9 か月の並行開発期間が続いたこと、(3) 2011 年 9 月 13 日の最終 SVN コミットのメッセージが「Development has moved to github.」 だったこと、(4) SVN → GitHub 移行を明示的に議論あるいは告知した BitcoinTalk スレッドや bitcoin-list メーリングリストへの投稿は、本アーカイブの調査範囲では復元できていないこと。

本アーカイブが直接確認できないのは：移行の意思決定が複数の開発者間で私的に審議されたか、本アーカイブに保全されていないチャネル（私的メール、IRC など）でコミュニティ協議があったか、それともギャビン側の単独判断だったか、である。「単独意思決定」 「コミュニティ審議を経ていない」 と推論することは*不在からの推論*としてはあり得るが、直接の文書証拠による確認ではない。今後、明示的な公的告知あるいは私的審議の文書が判明した場合、本エントリーは更新されるべきである。

**2011年のGitHubコミットアクセス付与：**

サトシの離脱（[最後の既知のメール：2011年4月26日](/BitcoinArchive/ja/entries/aftermath/2011-04-26-satoshi-final-known-email/)）に伴い、リポジトリへのアクセスとネットワークアラートキーの両方を保持していたギャビン・アンドレセンが、信頼できる貢献者にコミットアクセスを付与し始めた。2011年にGitHubコミットアクセスを受けた開発者は以下の通り：

| 開発者 | GitHubユーザー名 | アクセス付与日 | 備考 |
|--------|----------------|-------------|------|
| クリス・ムーア | dooglus | 2011-01-21 | ～2011-03-31にアクセス終了 |
| ピーター・ウィーユ | sipa | 2011-05-01 | 主要メンテナーの一人 |
| ジェフ・ガージック | jgarzik | 2011-05-06 | SFプロジェクトメンバーでもあった |
| ウラジミール・ファン・デル・ラーン | laanwj | 2011-06-05 | 2014年にリードメンテナーに就任 |
| ニルス・シュナイダー | tcatm | 2011-09-19 | 2012-05-31にアクセス終了 |

**クリス・ムーア（dooglus）** はGitHubコミットアクセスを最初に受けた人物だが、在任期間は短く約2ヶ月だった。SVNコミットアクセスは持っていなかった。

**ピーター・ウィーユ（sipa）** と**ジェフ・ガージック（jgarzik）** はSourceForgeプロジェクトメンバーとしても追加されたが、どちらもSVNコミットは行っていない — 2011年5月時点で、活発な開発は既にGitHubに移行していた。

**ウラジミール・ファン・デル・ラーン（laanwj）** は当初、QtベースのGUIクライアント用に別リポジトリ `bitcoin-qt`（2011年5月15日作成）を運用していた。これは後にメインリポジトリに統合された。`bitcoin/bitcoin` へのコミットアクセスは2011年6月5日に取得し、2014年にギャビン・アンドレセンからリードメンテナーを引き継いだ。

**ニルス・シュナイダー（tcatm）** は2011年に付与された開発者の中で最も短い継続的アクセスとなり、2012年5月31日にアクセスが終了した。

**権限移譲の変遷：** サトシはプロジェクトをギャビン・アンドレセン一人に委ねた。開発が成長するにつれ、アンドレセンは有能な開発者にコミットアクセスを分配していった — 開発プロセスそのものの段階的な分散化だった。2011年末までに、Bitcoin Coreには6人のコミットアクセスを持つ開発者がいた。SVNリポジトリに一度でもコミットしたのが4人だったことと比べると、開発体制の拡大が見て取れる。
