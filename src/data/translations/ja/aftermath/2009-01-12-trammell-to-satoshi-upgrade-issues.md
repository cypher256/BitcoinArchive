---
title: "Re: ビットコイン v0.1 リリース — アップグレード時の問題"
date: 2009-01-12T21:40:58Z
type: "article"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルにより公開"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "v0.1.0 から v0.1.3 アップグレード時の 2 問題: 旧プロセス未終了、生成 4 コイン全てが「Generated (not accepted)」。通信バグによる孤立ブロックか、と報告。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-adopter"
  - "mining"
  - "bug-report"
  - "orphan-blocks"
  - "v0.1.3"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
relatedEntries:
  - correspondence/dustin-trammell/2009-01-12-trammell-to-satoshi-upgrade-issues
  - aftermath/2009-01-11-dustin-trammell-biography
  - design/2009-01-03-bitcoin-block-chain-design
quotes:
  - id: "q1"
    person: "Dustin Trammell"
    personSlug: "dustin-trammell"
    date: "2009-01-12T21:40:58Z"
    sourceEntryId: "correspondence/dustin-trammell/2009-01-12-trammell-to-satoshi-upgrade-issues"
translationStatus: complete
---

![二つの封筒アイコンを矢印で結び経過時間を示す時計を添えた図と、ソフトウェアのバージョンを表す二つのバッジをアップグレードの矢印でつないだ図、そして横一列に連なるブロックの本チェーンから、コインを乗せたまま薄れて消えていく点線の分岐を描いたイラスト。](/BitcoinArchive/images/analysis/2009-01-12-trammell-to-satoshi-upgrade-issues-hero.png)

<!-- speaker: narrator -->
前回のメールからわずか 11分後に送信されたこのメールで、トランメルは v0.1.0 から v0.1.3 へのアップグレード時に遭遇した 2 つの問題を報告した。

<!-- quote: q1 -->
<!-- speaker: Dustin Trammell -->
> 以前のバージョン（ヘルプには 0.1.1 と書かれていたが、実際には 0.1.0 だったと思う）を閉じたとき、プロセスが終了しなかった。UI は終了したが、プロセスは残ったままだ。バージョン 0.1.3 を起動できるようにするには、手動でプロセスを kill する必要があった。

<!-- speaker: narrator -->
より深刻だったのは、生成したコインの喪失であった。

<!-- speaker: Dustin Trammell -->
> バージョン 0.1.3 を起動したところ、こちらのトランザクションエントリ 4 件はすべて依然として `unconfirmed` と表示されているが、Description が `Generated (not accepted)` に変わっている。これは、他のノードが先にチェーンを延ばし、こちらのコインが死んだブランチで生成されたという意味か？もしそうなら、以前のソフトウェアのインスタンスはなぜ即座にそれを検知して、勝ち残ったブランチで採掘を始めなかったのか？ 0.1.0 のバグか？

<!-- speaker: narrator -->
トランメルは問題を正確に診断していた――v0.1.0 の通信バグにより彼のノードはブロックをネットワークにブロードキャストできず、採掘したすべてのブロックが孤立していた([ブロック・チェーン設計のエントリー](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-block-chain-design/)が、その背後にある仕組みと、孤児ブロック・失効ブロックという現代的な区別を詳述している)。サトシは次の返信でこれを確認した。
