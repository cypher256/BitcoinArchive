---
title: "開発プロセスのたたき台"
date: 2010-12-19T16:41:39.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2367.msg31651#msg31651"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "ギャビン・アンドレセンがサトシの了承の下、ビットコインの能動的なプロジェクト管理を引き受けることを公に発表。bitcoin/bitcoin の GitHub ツリーを作成。"
isSatoshi: false
tags:
  - "gavin-andresen"
  - "leadership"
  - "transition"
  - "succession"
  - "lead-maintainer"
  - "github"
  - "historic"
relatedEntries:
  - aftermath/2010-12-12-satoshi-handover-to-andresen
  - aftermath/2010-12-19-andresen-lead-maintainer-announcement
translationStatus: complete
---

サトシの了承を得て、そして大いに気が進まないながらも、私はビットコインのより能動的なプロジェクト管理に着手する。

どうか辛抱してほしい。スタートアップでのプロジェクト管理経験は豊富にあるが、ある程度の規模のオープンソースプロジェクトに関わるのはこれが初めてだ。ともあれ、統合・ステージング用のツリーを作成した：
  https://github.com/bitcoin/bitcoin

…そして開発プロセスとして以下を提案する：

ビットコイン開発のたたき台 (オープンソースの熟練者の方々、どうぞ遠慮なく批判して、もっと良いものにする手助けをしてほしい)：

開発者は各自のツリーで作業し、機能の準備ができたと判断したらプルリクエストを送信する。

リクエストは議論される (どこで？ ビットコインフォーラムのここで？)。良いものでよく書かれていてコーディングスタイルに合うなど幅広い合意が得られたら、`master` ブランチにマージされる。

`master` ブランチは定期的にビルド・テストされ (誰が？ 品質保証テスターを引き受けてくれる人が必要)、定期的に subversion リポジトリへ push されて公式・安定・リリース版のビットコインとなる。

複数人で大きな新機能に取り組む場合は、必要に応じて feature ブランチを作る。

議論・フィードバック等、**特に**他のオープンソースプロジェクトを率いた経験や関わった経験のある方々からのものは、大いに歓迎する。
