---
title: "Re: SMFフォーラム、MODのインストールが必要"
date: 2009-11-21T10:50:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミが自身の経験からJoomlaよりもDrupalを推薦し、bitcoin.orgのDNSエントリ変更と無料SSL証明書の取得を提案。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "forum"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
translationStatus: complete
---

<!-- speaker: Martti Malmi -->
お客様向けにJoomlaサイトを作ったことがありますが、Drupalのほうが好きだと言わざるを得ません。主に管理インターフェースが使いやすく、メインサイトに統合されている点がいいです。

https経由だと画像が正しく読み込まれません。時間があるときに確認します。

bitcoin.orgのDNSエントリを変更するだけのほうが簡単です。forum.bitcoin.orgは不要です。

どこかで無料のSSL証明書を取得できないか確認してみましょう。例えば http://www.startssl.com/?app=1 のように。そうすれば自己署名証明書によるセキュリティ警告がユーザーに表示されなくなります。ただし、匿名で登録されたドメインに証明書を発行してくれるかどうかはわかりません。

<!-- tone-skip -->
> <!-- speaker: Satoshi Nakamoto -->
> ありがとう、うまくいった。SSHでFile Managerをインストールできた。Drupalにもいくつかテーマをアップロードした。利用可能なテーマをすべて徹底的に確認したわけではまだない。
>
> CMSを調べてみたところ、DrupalとJoomlaが人気だ。一般的な見解としては、Joomlaのほうがテーマの選択肢が豊富で学びやすいが、Drupalはプログラマーやカスタマイズにとってより直感的かもしれない。JoomlaはCMSとして優れており、Drupalはブログに向いている。DrupalのURLは検索エンジンフレンドリーだが、Joomlaはそうではない。
>
> どちらもSMFブリッジモジュールが利用可能だ。今後の参考のために、Drupal用のものは「SMFforum Integration」という名前だ。
>
> <!-- quote: q1 -->
>> <!-- speaker: Martti Malmi -->
>> 今日は設定する時間がありませんが、一時的なアカウント「」をパスワード「」で作成し、
>>  /var/www/bitcoinへのフル権限を付与しました。ポート30000でsshまたはsftpでアクセスできます。

<!-- /tone-skip -->
