---
title: "サトシの後継者 — プロジェクトマネージャー：ギャビン・アンドレセンへの引き継ぎ"
date: 2010-12-12T00:00:00Z
type: "article"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Gavin_Andresen"
sourceNote: "ギャビン・アンドレセンの Bitcointalk フォーラム公開投稿（2010年12月）、マルッティ・マルミの公開メールアーカイブ（mmalmi.github.io/satoshi/）、および移行に関する複数の公開された記録に基づく"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがギャビン・アンドレセンにソースコード管理権を与え、ビットコインプロジェクトのリーダーとして承認。アンドレセンは Bitcointalk フォーラムで移行を公式発表。"
isSatoshi: false
tags:
  - "correspondence"
  - "handover"
  - "leadership"
  - "succession"
  - "svn-access"
  - "project-management"
secondarySources:
  - name: "CoinMarketCap - Satoshi Files: Gavin Andresen"
    url: "https://coinmarketcap.com/academy/article/satoshi-files-gavin-andresen"
  - name: "Satoshi ↔ Martti Malmi - Recommending Gavin"
    url: "https://mmalmi.github.io/satoshi/"
relatedEntries:
  - forum/bitcointalk/topic-2367/2010-12-19-gavin-andresen-msg31651
  - correspondence/martti-malmi/2010-12-06-what-was-the-bitcoinorg-outage-243
  - "aftermath/2010-12-03-handover-to-gavin"
  - aftermath/2010-09-01-satoshi-andresen-other-projects-notice
  - aftermath/2010-12-19-andresen-lead-maintainer-announcement
  - analysis/2008-10-31-bitcoin-digital-gold-structural-features
inlineLinkKeywords:
  - "SVN 引き継ぎ"
quotes:
  - id: "q1"
    person: "Gavin Andresen"
    personSlug: "gavin-andresen"
    date: "2010-12-19T16:41:39Z"
    sourceEntryId: "forum/bitcointalk/topic-2367/2010-12-19-gavin-andresen-msg31651"
translationStatus: complete
---

![サトシとアンドレセンと記された顔のない 2 つのシルエットが金色の点線の年表でつながれ、ソースリポジトリのアイコンと日付入りの節目が並ぶ、暗い背景の図解。](/BitcoinArchive/images/analysis/2010-12-12-satoshi-handover-to-andresen-hero.png)

<!-- speaker: narrator -->
ギャビン・アンドレセンへの引き継ぎは、ひとつの発表ではなかった。ソースリポジトリの管理権と、プロジェクトを公に代表する権限という、同時に移る必要のある二つのものが束ねられていた。2010年後半、サトシ・ナカモトがビットコインへの積極的な関与から身を引くにあたり、アンドレセンに SVN アクセスを与え、リード開発者として承認したのである。

この決定は、2010年12月3日にサトシが[マルッティ・マルミ](/BitcoinArchive/ja/participants/martti-malmi/)にメールで伝えた内容と一致している。開発の責任を誰が引き継ぐべきかと問われた際、サトシは次のように答えた：

<!-- speaker: Satoshi Nakamoto -->
<!-- audit:quote-skip -->
> ギャビンが適任だ。彼は信頼できる。責任感があり、プロフェッショナルで、Linux に関しては私よりずっと上だ。

<!-- speaker: narrator -->
アンドレセンは正式にリーダーの役割に就き、2010年12月に Bitcointalk フォーラムで公に発表した：

<!-- quote: q1 -->
> サトシの祝福を受けて、正直かなり気が進まないが、ビットコインのプロジェクト管理にもっと積極的に関わっていくことにする。

<!-- speaker: narrator -->
この承認は、2010 年を通じたアンドレセンの貢献の積み重ねを経たもので、引き継ぎではコミット権限と公的な看板が同時に手渡された。アンドレセンはその後、後に Bitcoin Core と改称される参照実装を、2014 年に引き継ぐまで維持した。

12 月 12 日の引き継ぎは、周囲に密に集まる記録群の中心に位置している。 [2010 年 9 月 1 日のアンドレセン宛「他のプロジェクトに取り組む」通知](/BitcoinArchive/ja/entries/aftermath/2010-09-01-satoshi-andresen-other-projects-notice/)は撤退の連鎖の最初期シグナルであり、そこから 3 か月後の本 SVN 引き継ぎは、この通知が予期した中心的な公的移行事件と読める。 [2010 年 12 月 3 日のアンドレセン推薦](/BitcoinArchive/ja/entries/aftermath/2010-12-03-handover-to-gavin/)は前段階として読め、その 9 日後の 12 月 12 日の SVN アクセス変更によって正式なものとなる。そして [2010 年 12 月 19 日のアンドレセンによるリードメンテナー就任表明](/BitcoinArchive/ja/entries/aftermath/2010-12-19-andresen-lead-maintainer-announcement/)は、本 SVN 移譲を「公的役割の引き受けを可能にした前提事件」として扱い、冒頭の年表、事件順序のリスト、そしてガバナンス総括の各箇所で繰り返し戻ってくる。

<!-- entry-closing -->

この記録が保存しているのは、式典を伴う継承ではない。実務的な継承である。コミット権限と公的な責任が結び付いた形で引き継がれ、その発表自体にはアンドレセンの気の進まなさも残っている。12 月 12 日に変わったのは、誰が後継者と呼ばれたかだけではない。サトシなしでプロジェクトが次の一歩を進める場所が移ったのである。
