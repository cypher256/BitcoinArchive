---
title: "Re: いくつかの考え... - ウォレットの保存場所とソケット修正"
date: 2009-01-16T12:42:18Z
type: "article"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルにより公開"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシがウォレット保存場所（%appdata%\\Bitcoin）を明かし、トランザクショナル DB（DBM）でクラッシュや停電に安全と説明、次回リリースのソケットクリーンアップ追加も確認。"
isSatoshi: true
tags:
  - "correspondence"
  - "wallet"
  - "data-storage"
  - "bug-fix"
  - "development"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
relatedEntries:
  - correspondence/dustin-trammell/2009-01-16-satoshi-to-trammell-wallet-location
  - aftermath/2009-01-11-dustin-trammell-biography
  - design/2009-01-03-bitcoin-storage-design
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-01-16T12:42:18Z"
    sourceEntryId: "correspondence/dustin-trammell/2009-01-16-satoshi-to-trammell-wallet-location"
translationStatus: complete
---

![ウォレットのファイルパスが枠からはみ出す様子、シールド付きのデータベース円柱アイコン、バグアイコンから封印済みのチェック入り封筒へつながる 2 枚のカードを、右上に日付バッジを添えた紺色の背景で描いたイラスト。](/BitcoinArchive/images/analysis/2009-01-16-satoshi-to-trammell-wallet-location-hero.png)

<!-- speaker: narrator -->
データ損失とウォレットのバックアップに関するトランメルの懸念に応じて、サトシはウォレットの保存場所と使用技術を開示した：

<!-- quote: q1 -->
<!-- speaker: Satoshi Nakamoto -->
> ファイルは「%appdata%\Bitcoin」にある。バックアップ対象はこのディレクトリだ。データはトランザクション対応のデータベース DBM に保存されているから、クラッシュや停電が起きても失われないはずだ。

<!-- speaker: narrator -->
サトシは、%appdata%が Firefox などの最新プログラムが設定に使用するユーザーごとのディレクトリであると説明した。ただし、Microsoft が Windows のリリースごとにその名前を変更し、スペースだらけで、画面からはみ出すほど長いことに言及した。

トランメルが報告していたソケットが正常に閉じない問題については：

<!-- speaker: Satoshi Nakamoto -->
> 今その対応コードを次回リリース向けに追加した。

<!-- speaker: narrator -->
この短いやり取りは、ビットコイン最初期におけるサトシの迅速な開発サイクルを示している。トランメルがバグを報告し、サトシは返信する時点で既に修正コードを書き上げていた。DBM（Berkeley DB）データベースの選択は、[2013年3月にデータベースのロック制限の問題がチェーンのフォークを引き起こした際](/BitcoinArchive/ja/entries/design/2009-01-03-bitcoin-storage-design/)に重要な意味を持つことになる。
