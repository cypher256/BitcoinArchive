---
title: "Re: バージョン0.3.18"
date: 2010-12-09T14:51:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2162.msg28539#msg28539"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック2162におけるGavin Andresenの文脈投稿。msg28549の前。"
isSatoshi: false
threadId: "bt-version-0-3-18"
tags: []
translationStatus: complete
---

数ヶ月前、0.3.9のバグが発見された頃、受け入れ可能な取引タイプのホワイトリスト化の方が、問題を引き起こすことがわかった取引タイプのブラックリスト化よりも良い方法だとサトシに個人的に伝えた。

ユーザーが入力したHTMLの<script>タグをブラックリスト化してクロスサイトスクリプティングハッキングを防ごうとするウェブサイトと危険性は似ている。

受け入れ可能な取引タイプのホワイトリスト化が正しいことだと今でも確信している。

「開発者によって却下された」については——**何も**却下されていない！ まだサトシと話していないが、任意の追加データを含む第三の「標準」取引タイプのアイデアには前向きだ。その議論を行い、-testnetで実装し、突いてみて、悪用される可能性のあるあらゆる方法を想像してみて、利益とコストを見積もり……一般的なコンセンサスがそれが良いアイデアだと判断されれば、本番環境に展開しよう。
