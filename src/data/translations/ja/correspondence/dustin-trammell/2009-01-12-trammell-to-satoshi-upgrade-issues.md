---
title: "ダスティン・トランメルからサトシへ：v0.1.0 から v0.1.3 へのアップグレード問題 (2009-01-12)"
date: 2009-01-12T21:40:58Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルが原文ママで公開。完全な mbox アーカイブはトランメルのブログ (https://blog.dustintrammell.com/i-am-not-satoshi/) から Satoshi_Nakamoto.zip として配布された"
author: "Dustin Trammell"
participants:
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "トランメルが v0.1.3 更新後に発生した認証エラーと UI 問題を報告し、複数アドレス管理についての困惑を伝える。"
isSatoshi: false
tags:
  - "correspondence"
  - "bug-report"
  - "v0-1-3"
translationStatus: complete
relatedEntries:
  - "aftermath/2009-01-12-trammell-to-satoshi-upgrade-issues"
---

On Tue, 2009-01-13 at 02:33 +0800, Satoshi Nakamoto wrote:
> まだなら v0.1.3 に更新しておいてほしい。このバージョンで安定性が
> かなり上がった。

アップグレードで 2 つ問題があった。

以前のバージョン（ヘルプには 0.1.1 と書かれていたが、実際には
0.1.0 だったと思う）を閉じたとき、プロセスが終了しなかった。
UI は終了したが、プロセスは残ったままだ。バージョン 0.1.3 を
起動できるようにするには、手動でプロセスを kill する必要があった。

バージョン 0.1.3 を起動したところ、こちらのトランザクションエントリ 4 件は
すべて依然として 'unconfirmed' と表示されているが、Description が
'Generated (not accepted)' に変わっている。これは、他のノードが先に
チェーンを延ばし、こちらのコインが死んだブランチで生成されたという意味
か？ もしそうなら、以前のソフトウェアのインスタンスはなぜ即座に
それを検知して、勝ち残ったブランチで採掘を始めなかったのか？
0.1.0 のバグか？

このまま様子を見てみる……

それでは。

-- 
Dustin D. Trammell
dtrammell@dustintrammell.com
http://www.dustintrammell.com
