---
title: "SMFフォーラム、MODのインストールが必要"
date: 2009-11-20T05:14:56Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがSMFフォーラムのCSS調整を進め、MODインストールの協力を要請。Liberty Standardが初のBitcoin販売を行ったことも共有。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "forum"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->

SMFフォーラムの設定を進めている。SMFはphpBBよりも設計が優れていて信頼性が高いと言われているので、SMFの見た目をちゃんと整えられるなら、そちらが望ましい選択だ。

ほとんどのフォーラムはvBulletinで運営されている（big-boards.comにはvBulletin 1376件、Invision 275件、phpBB 245件、SMF 41件が掲載されている）。そのため、vBulletinやInvisionの見た目でないと、vBulletinを買えなくて妥協したように見えてしまう。SMFのUIは標準的な見た目からかなり離れていたが、CSSを使って他のものに近づけることができた。

CSSでできることはやり尽くしたので、残りはPHPファイルの編集と画像のアップロードが必要だ。フォーラムにはファイルアップロード/編集の管理機能が組み込まれておらず、SMF File Manager MODとして別途追加される。MODをアップロードしたが、インストールするためにいくつかのファイルをchmod 777にする必要がある。Admin->Packages->Browse Packagesに移動してApply Modをクリックすると、FTPログインを入力すれば自動的に行うオプションが表示される。

以下も必要かもしれないと言っている人がいる：
mkdir /var/www/bitcoin/smf/packages/temp

エラーログのエラーは：<br>
failed to open stream: Permission denied<br>
File: /var/www/bitcoin/smf/Sources/Subs-Package.php<br>
（これは最初のファイルに過ぎないはずだ）

設定が完了したら、このSMFインストールを公開しても大丈夫か？forum.bitcoin.orgをそこに向けられるはずだ。

Libertyからlinux-test8が順調に動いているとの報告があった。私のテストもうまくいっている。Linux版は完全に安定したと思う。

朗報だ：彼が初めてBitcoinを販売したそうだ。誰かが彼の持っている分をすべて買い取った。買い手と売り手のどちらが先に現れるか気になっていたのだが。

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
