---
title: "ギャビン・アンドレセン、ビットコインのプロジェクト管理引き継ぎを公式告知（2010 年 12 月 19 日）"
date: 2010-12-19T00:00:00Z
type: "article"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2367.msg31651#msg31651"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "アンドレセンが BitcoinTalk topic 2367 でサトシの祝福を受けてプロジェクト管理引き継ぎを公式告知。同日 bitcoin/bitcoin GitHub 作成。"
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
  - forum/bitcointalk/topic-2367/2010-12-19-gavin-andresen-msg31651
  - aftermath/2010-06-11-gavin-andresen-biography
  - aftermath/2010-12-12-satoshi-handover-to-andresen
  - aftermath/2016-05-02-gavin-andresen-satoshi-retrospective
  - aftermath/2011-09-13-bitcoin-github-migration-committers
  - forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post
  - aftermath/2010-09-01-satoshi-andresen-other-projects-notice
  - aftermath/2011-11-20-bitcoin-v05-removes-cryptopp-dependency
  - analysis/2014-03-19-bitcoin-core-rebrand-authority-effects
quotes:
  - id: "q1"
    person: "Gavin Andresen"
    personSlug: "gavin-andresen"
    date: "2010-12-19T16:41:39Z"
    sourceEntryId: "forum/bitcointalk/topic-2367/2010-12-19-gavin-andresen-msg31651"
translationStatus: complete
---

2010 年 12 月 19 日、サトシ最後のソースコミット（12 月 15 日の v0.3.19 リリース）から 4 日後、[SVN アクセスの引き継ぎ](/BitcoinArchive/ja/entries/aftermath/2010-12-12-satoshi-handover-to-andresen/)から 7 日後、[ギャビン・アンドレセン](/BitcoinArchive/ja/participants/gavin-andresen/)は BitcoinTalk フォーラムにリーダーシップ就任の公的承諾を投稿した:

<!-- quote: q1 -->
> サトシの了承を得て、そして大いに気が進まないながらも、私はビットコインのより能動的なプロジェクト管理に着手する。
>
> 皆さん、どうか我慢してほしい。スタートアップでのプロジェクト管理の経験はそれなりにあるが、規模のあるオープンソースプロジェクトに関わるのは今回が初めてだ。

（一次資料：[BitcoinTalk topic 2367 msg31651『Development process straw-man』](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2367/2010-12-19-gavin-andresen-msg31651/)。ウィキペディア「ギャビン・アンドレセン」記事および CoinMarketCap「サトシ・ファイル：ギャビン・アンドレセン」記事でも二次的に引用されているが、いずれも上記の原文の文言から軽微な意訳がある。）

同日、ギャビンは [`bitcoin/bitcoin` GitHub リポジトリ](/BitcoinArchive/ja/entries/aftermath/2011-09-13-bitcoin-github-migration-committers/)を作成した — 9 か月にわたる SVN／GitHub 並列開発期間の始まりであり、SVN が 2011 年 9 月に廃止されるまで続いた。

この公式告知は、リーダーシップ移行の対外的な流れの締めくくりに当たる。時系列:

- **2010 年 12 月 3 日**: サトシは[マルティ・マルミ宛のメール](/BitcoinArchive/ja/entries/aftermath/2010-12-03-handover-to-gavin/)でギャビンを後継者として推薦 — 「ギャビンであるべきだ。彼は信頼でき、責任感があり、プロフェッショナルで…」
- **2010 年 12 月 12 日**: SVN アクセスの引き継ぎ。サトシの [BitcoinTalk 最後の公開投稿](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2228/2010-12-12-satoshi-final-post/)は「バトンを渡す予定だ」で締めくくられる
- **2010 年 12 月 15 日**: 最後のソースコミット（v0.3.19）
- **2010 年 12 月 19 日**: ギャビンの公的承諾（本エントリー）と GitHub リポジトリ作成

サトシは[マイク・ハーン](/BitcoinArchive/ja/participants/mike-hearn/)との[メール](/BitcoinArchive/ja/entries/correspondence/mike-hearn/more-questions/2010-12-29-satoshi-to-hearn-client-mode/)を 12 月末まで続けたが、BitcoinTalk での公的活動は 12 月 12 日で終わっている。メール側は 4 か月後の 2011 年 4 月 26 日に[ギャビンへの最終メール](/BitcoinArchive/ja/entries/aftermath/2011-04-26-satoshi-to-andresen-alert-key/)（alert key 引き渡し）で閉じる。

## リードメンテナーの地位はどう確立されたか（編集的な読解）

形式的なガバナンス・プロセス — メンテナー選挙、コミュニティ投票、リーダーシップ確認のための組織化されたスレッド — は、本アーカイブの調査範囲では見つかっていない。2010 年末のビットコインコミュニティ（フォーラム参加者は数百人規模）にそうした構造は存在しなかった。

公的記録に残るのは以下の要素：

- サトシによる [2010 年 12 月 3 日のマルティ・マルミ宛のメールでの推薦](/BitcoinArchive/ja/entries/aftermath/2010-12-03-handover-to-gavin/)と、[12 月 12 日の SVN アクセス譲渡](/BitcoinArchive/ja/entries/aftermath/2010-12-12-satoshi-handover-to-andresen/)。
- 本エントリーで扱う 12 月 19 日の告知で、アンドレセンが自らをプロジェクトの新たな積極的な管理者と位置づけたこと。
- 他開発者・ユーザーによる継続的な参加、および反対表明や対抗主張が（本アーカイブの調査範囲では）記録に残っていないこと。

これらの要素を「前任者の祝福 + 自己宣言 + 暗黙の受容 → 事実上、役職が成立」と読むことは可能だが、これは編集的な再構成であり、直接観察された制度プロセスではない。当時の参加者たちが具体的にどのように「リードメンテナー」を理解・受容したか — 明示的に受け入れたのか、なし崩し的に流れ込んだのか、コミット権を持つ者が新しいメンテナーになったと暗黙に前提して仕事を続けただけなのか — は、本アーカイブが直接観察できる範囲を超えている。

この役割は 2012 年 9 月の Bitcoin Foundation 設立に伴い、アンドレセンが同財団のチーフサイエンティストに就任した時点で制度化された。

のちの記録は、この 12 月 19 日告知を三つの異なる文脈で拠り所として参照する。 [ギャビン・アンドレセン伝記](/BitcoinArchive/ja/participants/gavin-andresen/)は本告知を参加者年表、「サトシの後継者 ― 段階的引き継ぎ」対比表、そして専用のリードメンテナー節で繰り返し参照する。 [2010 年 9 月 1 日のアンドレセン宛「他のプロジェクトに取り組む」通知](/BitcoinArchive/ja/entries/aftermath/2010-09-01-satoshi-andresen-other-projects-notice/)は 9 月のシグナルを撤退連鎖の時系列的な起点として捉え、 12 月 19 日告知をその公的な終結点として位置付ける。そして [2016 年のアンドレセン自身によるサトシ回顧](/BitcoinArchive/ja/entries/aftermath/2016-05-02-gavin-andresen-satoshi-retrospective/)は本告知の BitcoinTalk 上の文面 (「サトシの祝福を受けて……」の冒頭) を拠り所となる引用の一つとして引き、結びの段落で本エントリへとリンクを戻す。

*[編者注：本エントリーは 2010 年 12 月 19 日の公式告知を独立した移行イベントとして記録するためのもの。一次資料の投稿は[併走するフォーラムエントリー](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-2367/2010-12-19-gavin-andresen-msg31651/)に保全されており、本エントリーは編集的な読解として並走させる。]*
