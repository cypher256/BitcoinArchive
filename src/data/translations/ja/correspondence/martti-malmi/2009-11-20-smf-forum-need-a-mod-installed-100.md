---
title: "Re: SMFフォーラム、MODのインストールが必要"
date: 2009-11-20T07:05:34Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミがフォーラム設定用にサトシにVPSへのSSHアクセスを提供し、公開を承認。自身のBitcoin取引所の立ち上げへの期待も表明。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "forum"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Martti Malmi -->
今日は設定する時間がありませんが、一時的なアカウント「maintenance」をパスワード「6648ku5HeK」で作成し、/var/www/bitcoinへのフル権限を付与しました。ポート30000でsshまたはsftpでアクセスできます。

公開して大丈夫です。リダイレクトとDNSエントリのどちらを設定しますか？DNSエントリの場合は、フォーラムのアドレスがhttp://forum.bitcoin.org/になるようにApache vhostを設定できます。

Linuxビルドが動くようになって良かったです。新しいリリースとフォーラムで物事が動き出すのを見るのは楽しみです。自分の取引所を立ち上げて、（ウェブ）ビジネス関係者に通貨を宣伝し始めるのもそう遠くないでしょう。

NewLibertyStandardはコインが枯渇しないように、価格を市場価格（つまり、人々が買いたい・売りたいと思う価格）に変更すべきかもしれません。

<!-- speaker: Satoshi Nakamoto -->
> SMFフォーラムの設定を進めている。SMFはphpBBよりも設計が優れていて信頼性が高いと言われているので、SMFの見た目をちゃんと整えられるなら、そちらが望ましい選択だ。
>
> ほとんどのフォーラムはvBulletinで運営されている（big-boards.comにはvBulletin 1376件、Invision 275件、phpBB 245件、SMF 41件が掲載されている）。そのため、vBulletinやInvisionの見た目でないと、vBulletinを買えなくて妥協したように見えてしまう。SMFのUIは標準的な見た目からかなり離れていたが、CSSを使って他のものに近づけることができた。
>
> CSSでできることはやり尽くしたので、残りはPHPファイルの編集と画像のアップロードが必要だ。フォーラムにはファイルアップロード/編集の管理機能が組み込まれておらず、SMF File Manager MODとして別途追加される。MODをアップロードしたが、インストールするためにいくつかのファイルをchmod 777にする必要がある。Admin->Packages->Browse Packagesに移動してApply Modをクリックすると、FTPログインを入力すれば自動的に行うオプションが表示される。
>
> 以下も必要かもしれないと言っている人がいる：
> mkdir /var/www/bitcoin/smf/packages/temp
>
> エラーログのエラーは：
> failed to open stream: Permission denied
> File: /var/www/bitcoin/smf/Sources/Subs-Package.php
> （これは最初のファイルに過ぎないはずだ）
>
> 設定が完了したら、このSMFインストールを公開しても大丈夫か？forum.bitcoin.orgをそこに向けられるはずだ。
>
> Libertyからlinux-test8が順調に動いているとの報告があった。私のテストもうまくいっている。Linux版は完全に安定したと思う。
>
> 朗報だ：彼が初めてBitcoinを販売したそうだ。誰かが彼の持っている分をすべて買い取った。買い手と売り手のどちらが先に現れるか気になっていたのだが。

<!-- speaker: Martti Malmi -->
