---
title: "SMFフォーラム、MODのインストールが必要"
date: 2009-11-20T05:14:56Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "SMFフォーラムの設定を進めています。SMFはphpBBよりも設計が優れていて信頼性が高いと言われています。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 99
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

SMFフォーラムの設定を進めています。SMFはphpBBよりも設計が優れていて信頼性が高いと言われているので、SMFの見た目をちゃんと整えられるなら、そちらが望ましい選択です。

ほとんどのフォーラムはvBulletinで運営されています（big-boards.comにはvBulletin 1376件、Invision 275件、phpBB 245件、SMF 41件が掲載されています）。そのため、vBulletinやInvisionの見た目でないと、vBulletinを買えなくて妥協したように見えてしまいます。SMFのUIは標準的な見た目からかなり離れていましたが、CSSを使って他のものに近づけることができました。

CSSでできることはやり尽くしたので、残りはPHPファイルの編集と画像のアップロードが必要です。フォーラムにはファイルアップロード/編集の管理機能が組み込まれておらず、SMF File Manager MODとして別途追加されます。MODをアップロードしましたが、インストールするためにいくつかのファイルをchmod 777にする必要があります。Admin->Packages->Browse Packagesに移動してApply Modをクリックすると、FTPログインを入力すれば自動的に行うオプションが表示されます。

以下も必要かもしれないと言っている人がいます：
mkdir /var/www/bitcoin/smf/packages/temp

エラーログのエラーは：
failed to open stream: Permission denied
File: /var/www/bitcoin/smf/Sources/Subs-Package.php
（これは最初のファイルに過ぎないはずです）

設定が完了したら、このSMFインストールを公開しても大丈夫ですか？forum.bitcoin.orgをそこに向けられるはずです。

Libertyからlinux-test8が順調に動いているとの報告がありました。私のテストもうまくいっています。Linux版は完全に安定したと思います。

朗報です：彼が初めてBitcoinを販売したそうです。誰かが彼の持っている分をすべて買い取りました。買い手と売り手のどちらが先に現れるか気になっていたのですが。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
