---
title: "返信: SMFフォーラム、MODのインストールが必要"
date: 2009-11-21T10:50:00Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "お客様向けにJoomlaサイトを作ったことがありますが、Drupalのほうが好きだと言わざるを得ません。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 104
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

お客様向けにJoomlaサイトを作ったことがありますが、Drupalのほうが好きだと言わざるを得ません。主に管理インターフェースが使いやすく、メインサイトに統合されている点がいいです。

https経由だと画像が正しく読み込まれません。時間があるときに確認します。

bitcoin.orgのDNSエントリを変更するだけのほうが簡単です。forum.bitcoin.orgは不要です。

どこかで無料のSSL証明書を取得できないか確認してみましょう。例えばhttp://www.startssl.com/?app=1のように。そうすれば自己署名証明書によるセキュリティ警告がユーザーに表示されなくなります。ただし、匿名で登録されたドメインに証明書を発行してくれるかどうかはわかりません。

> ありがとう、うまくいきました。SSHでFile Managerをインストールできました。Drupalにもいくつかテーマをアップロードしました。利用可能なテーマをすべて徹底的に確認したわけではまだありません。
>
> CMSを調べてみたところ、DrupalとJoomlaが人気です。一般的な見解としては、Joomlaのほうがテーマの選択肢が豊富で学びやすいですが、Drupalはプログラマーやカスタマイズにとってより直感的かもしれません。JoomlaはCMSとして優れており、Drupalはブログに向いています。DrupalのURLは検索エンジンフレンドリーですが、Joomlaはそうではありません。
>
> どちらもSMFブリッジモジュールが利用可能です。今後の参考のために、Drupal用のものは「SMFforum Integration」という名前です。
>
> mmalmi@cc.hut.fi の書き込み：
>> 今日は設定する時間がありませんが、一時的なアカウント「」をパスワード「」で作成し、
>>  /var/www/bitcoinへのフル権限を付与しました。ポート30000でsshまたはsftpでアクセスできます。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
