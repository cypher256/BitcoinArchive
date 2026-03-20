---
title: "Re: いくつかの考え... - ウォレットの保存場所とソケット修正"
date: 2009-01-16T12:42:18Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシがウォレットデータの保存場所（%appdata%\\Bitcoin）を明かし、クラッシュや停電に安全なトランザクショナルデータベース（DBM）を使用していることを説明し、Microsoftのディレクトリ命名について言及し、次のリリースに向けてソケットクリーンアップコードを既に追加したことを確認した。"
isSatoshi: true
threadId: "satoshi-dustin-trammell"
threadPosition: 14
tags:
  - "correspondence"
  - "wallet"
  - "data-storage"
  - "bug-fix"
  - "development"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
データ損失とウォレットのバックアップに関するトランメルの懸念に応じて、サトシはウォレットの保存場所と使用技術を開示した：

<!-- speaker: Satoshi Nakamoto -->
> ファイルは「%appdata%\Bitcoin」にある。バックアップすべきディレクトリはそこである。データはトランザクショナルデータベースDBMに保存されているため、クラッシュや停電が発生してもデータ損失からは安全なはずである。

<!-- speaker: Satoshi Nakamoto -->
サトシは、%appdata%がFirefoxなどの最新プログラムが設定に使用するユーザーごとのディレクトリであると説明した。ただし、MicrosoftがWindowsのリリースごとにその名前を変更し、スペースだらけで、画面からはみ出すほど長いことに言及した。

トランメルが報告していたソケットの不正切断については：

<!-- speaker: Satoshi Nakamoto -->
> ちょうど次のリリースに向けてそのコードを追加したところである。

<!-- speaker: Satoshi Nakamoto -->
この短いやり取りは、ビットコイン最初期におけるサトシの迅速な開発サイクルを示している — トランメルがバグを報告し、サトシは返信する時点で既に修正コードを書き上げていた。DBM（Berkeley DB）データベースの選択は、2013年3月にデータベースのロック制限の問題がチェーンのフォークを引き起こした際に重要な意味を持つことになる。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
