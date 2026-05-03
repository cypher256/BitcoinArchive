---
title: "knightmb（生年不明）— 2010年のオーバーフローバグ復旧で起点となったブロックチェーン・スナップショットを公開した初期ノード運営者"
date: 2010-07-12T11:59:16Z
type: "biography"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?action=profile;u=35"
author: "knightmb"
participants:
  - name: "knightmb"
    slug: "knightmb"
description: "匿名の初期ユーザー。2010年当時に大規模ノードを運営、公開スナップショットがバリュー・オーバーフロー事件の復旧パッチの起点となった。"
isSatoshi: false
tags:
  - "knightmb"
  - "biography"
  - "bitcointalk"
  - "node-operator"
  - "blockchain-snapshot"
  - "historic"
secondarySources:
  - name: "BitcoinTalk Forum"
    url: "https://bitcointalk.org/"
relatedEntries:
  - aftermath/2010-08-15-value-overflow-incident
translationStatus: complete
---

**knightmb** は BitcoinTalk フォーラムで2010年に最も活発だったユーザーの一人だが、本名は公表されていない。アーカイブでも識別子はハンドル名のみである。

**活動：**
knightmb はアーカイブに2010年7月12日、[64 ビット Linux の Bitcoin クライアントで CPU 使用率が暴走する問題](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-299/2010-07-12-runaway-cpu-usage-for-64bit-bitcoin-linux-client/)を立ち上げる形で初めて登場する。そこから関与が急速に広がり、2010年末までに技術的なデバッグ、攻撃シナリオの分析、マイニング実験、そして一般ユーザーのサポートにまたがる100件以上の投稿を積み上げた。新参の質問にコア開発者との設計議論と同じ辛抱強さで応えるタイプのフォーラム参加者だった。

**ブロックチェーン・スナップショット：**
knightmb の最も長く影響を残した貢献は、Bitcoin ブロックチェーンの公開スナップショットをホストしたことである。これにより、新しいユーザーがピアから全ブロックをダウンロード・検証するのに何日も待つことなく同期できるようになった。このスナップショットはコミュニティ内で広く利用されるようになった。その重要性が浮き彫りになったのが[2010年8月のバリュー・オーバーフロー事件](/BitcoinArchive/ja/entries/aftermath/2010-08-15-value-overflow-incident/)で、[ギャビン・アンドレセン](/BitcoinArchive/ja/participants/gavin-andresen/)が復旧パッチをテストする際、クリーンな開始点として knightmb のスナップショットを利用した。彼は[パッチの告知](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-823/2010-08-15-gavin-andresen-msg9524/)で明言している──「knightmb のブロックチェーン・スナップショットから始めた」と。

**意義：**
初期の Bitcoin ネットワークは、クライアントをオンラインに保ちブロックチェーンを提供し続ける選択をしたホビイストのノード運営者たちに依存していた。knightmb はその中でさらに一歩踏み込み──スナップショットを公開し、質問に答え、まだほとんど利用者のいないネットワークの弱点を探った、ごく少数の一人である。本名は公には知られていないが、彼の仕事の痕跡は BitcoinTalk と、Bitcoin 最初期で最も深刻なバグからの復旧の記録に埋め込まれている。
