---
title: "SMF フォーラム、MOD のインストールが必要"
date: 2009-11-20T05:14:56Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシが SMF フォーラムの CSS 調整を進め、MOD インストールの協力を要請。Liberty Standard が初の Bitcoin 販売を行ったことも共有。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "forum"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->

SMF フォーラムの設定を進めている。SMF は phpBB よりも設計が優れていて信頼性が高いと言われているので、SMF の見た目をちゃんと整えられるなら、そちらが望ましい選択だ。

ほとんどのフォーラムは vBulletin で運営されている（big-boards.com には vBulletin 1376件、Invision 275件、phpBB 245件、SMF 41件が掲載されている）。そのため、vBulletin や Invision の見た目でないと、vBulletin を買えなくて妥協したように見えてしまう。SMF の UI は標準的な見た目からかなり離れていたが、CSS を使って他のものに近づけることができた。

CSS でできることはやり尽くしたので、残りは PHP ファイルの編集と画像のアップロードが必要だ。フォーラムにはファイルアップロード/編集の管理機能が組み込まれておらず、SMF File Manager MOD として別途追加される。MOD をアップロードしたが、インストールするためにいくつかのファイルを chmod 777 にする必要がある。Admin->Packages->Browse Packages に移動して Apply Mod をクリックすると、FTP ログインを入力すれば自動的に行うオプションが表示される。

以下も必要かもしれないと言っている人がいる：
mkdir /var/www/bitcoin/smf/packages/temp

エラーログのエラーは：<br>
failed to open stream: Permission denied<br>
File: /var/www/bitcoin/smf/Sources/Subs-Package.php<br>
（これは最初のファイルに過ぎないはずだ）

設定が完了したら、この SMF インストールを公開しても大丈夫か？forum.bitcoin.org をそこに向けられるはずだ。

Liberty から linux-test8 が順調に動いているとの報告があった。私のテストもうまくいっている。Linux 版は完全に安定したと思う。

朗報だ：彼が初めて Bitcoin を販売したそうだ。誰かが彼の持っている分をすべて買い取った。買い手と売り手のどちらが先に現れるか気になっていたのだが。
