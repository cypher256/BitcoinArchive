---
title: "サトシからダスティン・トランメルへ：Re: いくつか思うところ — ウォレットの場所とソケット修正 (2009-01-16)"
date: 2009-01-16T12:42:18Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルが原文ママで公開。完全な mbox アーカイブはトランメルのブログ (https://blog.dustintrammell.com/i-am-not-satoshi/) から Satoshi_Nakamoto.zip として配布された"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシがウォレットファイルの場所と、複数マシン間で持ち運ぶ際の注意点を説明する。"
isSatoshi: true
tags:
  - "correspondence"
  - "wallet-backup"
  - "bug-fix"
translationStatus: complete
relatedEntries:
  - "aftermath/2009-01-16-satoshi-to-trammell-wallet-location"
---

> この話題で思いついたことが 1 つある。システム障害が起きた場合の
> ビットコイン消失の可能性についてだ。アプリケーションは実行
> ディレクトリ内には何もデータを保存していないようなので、おそらく
> レジストリやその他の場所に保存しているのだろう（まだ ProcessExplorer を
> 取り出して自分で確認していない）。なので、復旧に必要なすべてを
> システム外にバックアップできるファイルにエクスポートする機能を入れて
> おくのは、良いアイデアかもしれない。
 
ファイルは「%appdata%\Bitcoin」にある。バックアップ対象はこの
ディレクトリだ。データはトランザクション対応のデータベース DBM に
保存されているから、クラッシュや停電が起きても失われないはずだ。

%appdata% はユーザー別のアクセス権限になっている。Firefox を
はじめとする新しいプログラムは設定ファイルをそこに保存するのが普通だ。
もっとも、Microsoft が Windows のリリースごとにディレクトリ名を
変えてくる上、空白を含み、画面外まではみ出すほど長いという逆風はあるが。

> 今日もう 1 つ気づいたのだが、アプリケーションを閉じても
> ネットワークソケットをきれいに閉じていないようだ（TCP RST が
> 飛び始める）。優先度の低い todo に入れる項目かもしれない (:
 
今その対応コードを次回リリース向けに追加した。

Satoshi
