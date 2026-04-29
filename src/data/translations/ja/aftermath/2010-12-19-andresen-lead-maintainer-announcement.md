---
title: "ギャビン・アンドレセン、ビットコインのプロジェクト管理引き継ぎを公式告知（2010 年 12 月 19 日）"
date: 2010-12-19T00:00:00Z
type: "article"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ最後のソースコミット（12/15）から 4 日後、SVN 引き継ぎ（12/12）から 7 日後、ギャビン・アンドレセンが BitcoinTalk フォーラムで「プロジェクト管理を本格的に引き受ける」ことを公式に告知した。冒頭は「サトシの祝福を受けて、正直かなり気が進まないが、ビットコインのプロジェクト管理にもっと積極的に関わっていくことにする」。同日、ギャビンは bitcoin/bitcoin GitHub リポジトリを作成し、9 か月にわたる SVN／GitHub 並列開発期間が始まった。"
isSatoshi: false
tags:
  - "gavin-andresen"
  - "leadership"
  - "transition"
  - "succession"
  - "lead-maintainer"
  - "historic"
secondarySources:
  - name: "Wikipedia — Gavin Andresen"
    url: "https://en.wikipedia.org/wiki/Gavin_Andresen"
  - name: "CoinMarketCap — Satoshi Files: Gavin Andresen"
    url: "https://coinmarketcap.com/academy/article/satoshi-files-gavin-andresen"
relatedEntries:
  - aftermath/2010-06-11-gavin-andresen-biography
  - correspondence/gavin-andresen/2010-12-12-satoshi-handover-to-andresen
  - aftermath/2016-05-02-gavin-andresen-satoshi-retrospective
  - aftermath/2011-09-13-bitcoin-github-migration-committers
  - forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post
  - aftermath/2010-09-01-satoshi-andresen-other-projects-notice
translationStatus: complete
---

2010 年 12 月 19 日、サトシ最後のソースコミット（12 月 15 日の v0.3.19 リリース）から 4 日後、[SVN アクセスの引き継ぎ](/BitcoinArchive/ja/entries/correspondence/gavin-andresen/2010-12-12-satoshi-handover-to-andresen/)から 7 日後、[ギャビン・アンドレセン](/BitcoinArchive/ja/participants/gavin-andresen/)は BitcoinTalk フォーラムにリーダーシップ就任の公的承諾を投稿した:

> With Satoshi's blessing, and with great reluctance, I will begin to do more active project management for Bitcoin.
>
> Everyone please be patient with me; I've had a lot of project management experience at startups, but this is the first open source project of any size I've been involved in.
>
> （サトシの祝福を受けて、正直かなり気が進まないが、ビットコインのプロジェクト管理にもっと積極的に関わっていくことにする。皆さん、どうか我慢してほしい。スタートアップでのプロジェクト管理の経験はそれなりにあるが、規模のあるオープンソースプロジェクトに関わるのは今回が初めてだ。）

（[ウィキペディア「ギャビン・アンドレセン」記事](https://en.wikipedia.org/wiki/Gavin_Andresen) および [CoinMarketCap「サトシ・ファイル：ギャビン・アンドレセン」記事](https://coinmarketcap.com/academy/article/satoshi-files-gavin-andresen) で引用。元の BitcoinTalk トピック URL は本アーカイブの記録には残っていない。）

同日、ギャビンは [`bitcoin/bitcoin` GitHub リポジトリ](/BitcoinArchive/ja/entries/aftermath/2011-09-13-bitcoin-github-migration-committers/)を作成した — 9 か月にわたる SVN／GitHub 並列開発期間の始まりであり、SVN が 2011 年 9 月に廃止されるまで続いた。

この公式告知は、リーダーシップ移行の対外的な流れの締めくくりに当たる。時系列:

- **2010 年 12 月 3 日**: サトシは [マルティ・マルミ宛の私信](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2010-12-03-handover-to-gavin/)でギャビンを後継者として推薦 — 「ギャビンであるべきだ。彼は信頼でき、責任感があり、プロフェッショナルで…」
- **2010 年 12 月 12 日**: SVN アクセスの引き継ぎ。サトシの [BitcoinTalk 最後の公開投稿](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post/) は「バトンを渡す予定だ」で締めくくられる
- **2010 年 12 月 15 日**: 最後のソースコミット（v0.3.19）
- **2010 年 12 月 19 日**: ギャビンの公的承諾（本エントリー）と GitHub リポジトリ作成

サトシは [マイク・ハーン](/BitcoinArchive/ja/participants/mike-hearn/) との[私信](/BitcoinArchive/ja/entries/correspondence/mike-hearn/more-questions/2010-12-29-satoshi-to-hearn-client-mode/)を 12 月末まで続けたが、BitcoinTalk での公的活動は 12 月 12 日で終わっている。私的な側は 4 か月後の 2011 年 4 月 26 日に [ギャビンへの最終メール](/BitcoinArchive/ja/entries/correspondence/gavin-andresen/2011-04-26-satoshi-to-andresen-alert-key/)（alert key 引き渡し）で閉じる。

**リードメンテナーの地位はどう確立されたか（編集的な読解）：**

形式的なガバナンス・プロセス — メンテナー選挙、コミュニティ投票、リーダーシップ確認のための組織化されたスレッド — は、本アーカイブの調査範囲では復元されていない。2010 年末の Bitcoin コミュニティ（フォーラム参加者は数百人規模）にそうした構造は存在しなかった。

公的記録に残るのは以下の要素：

- サトシによる [2010 年 12 月 3 日のマルティ・マルミ宛の私的推薦](/BitcoinArchive/ja/entries/correspondence/martti-malmi/2010-12-03-handover-to-gavin/) と、[12 月 12 日の SVN アクセス譲渡](/BitcoinArchive/ja/entries/correspondence/gavin-andresen/2010-12-12-satoshi-handover-to-andresen/)。
- 本エントリーで扱う 12 月 19 日の告知で、アンドレセンが自身を新しい active project manager と名乗ったこと。
- 他開発者・ユーザーによる継続的な参加、および反対表明や対抗主張が（本アーカイブの調査範囲では）記録に残っていないこと。

これらの要素を「前任者の祝福 + 自己宣言 + 暗黙の受容 → de facto に役職が成立」 と読むことは可能だが、これは編集的な再構成であり、直接観察された制度プロセスではない。当時の参加者たちが具体的にどのように「リードメンテナー」 を理解・受容したか — 明示的に受け入れたのか、なし崩し的に流れ込んだのか、コミット権を持つ者が新しいメンテナーになったと暗黙に前提して仕事を続けただけなのか — は、本アーカイブが直接観察できる範囲を超えている。

この役割は 2012 年 9 月の Bitcoin Foundation 設立に伴い、アンドレセンが同財団のチーフサイエンティストに就任した時点で制度化された。

*[編者注：本エントリーは 2010 年 12 月 19 日の公式告知を独立した移行イベントとして記録するためのもの。元の BitcoinTalk トピック URL は本アーカイブの調査範囲では復元できず、引用テキストは [ギャビン・アンドレセンの回顧記事](/BitcoinArchive/ja/entries/aftermath/2016-05-02-gavin-andresen-satoshi-retrospective/) と Wikipedia ／ CoinMarketCap の引用経由で保全されている。今後 URL が判明した場合、本エントリーは type を `article` から `forum-post` に格上げし、一次資料の BitcoinTalk URL を sourceUrl に設定すべきである。]*
