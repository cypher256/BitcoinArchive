---
title: "返信: SMFフォーラム、MODのインストールが必要"
date: 2009-11-21T21:46:52Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "それではDrupalのセットアップを進めます。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 105
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

それではDrupalのセットアップを進めます。

サイトをデフォルトでhttpsにすべきではないと思います。サイトの公開部分がhttpsであるのはまだ非常に珍しく、おそらく潜在的な技術的問題、遅延、サーバー負荷の増大を招くからでしょう。ユーザーとしては、たまたま見かけた無名のサイトのIDを検証するのに時間がかかるとちょっと苛立ちます。私の感覚では、httpsサイトは読み込みに失敗することがずっと多いように思えます。

重要なのは、必要な人のためにSSLを利用可能にしておくことです。SSLが必要な人は、httpの後に「s」を挿入して動くかどうか試すことを知っていると思います。SMFには、渡されたURLがhttpsであればすべてのリンクをhttpsに変更するコードがあります。

登録ページに、SSLが必要な場合はいつでもhttpをhttpsに変更して自己署名証明書を承認できるという注意書きや、それを行うリンクを追加できます。TORのページでも言及できます。

証明書の取得は、状況が落ち着いてから検討しましょう。Class 1では1年間変更が許可されないため、現在のホストに問題が見つかってIPを変更しなければならない場合にリスクになります。

mmalmi@cc.hut.fi の書き込み：
> お客様向けにJoomlaサイトを作ったことがありますが、Drupalのほうが好きだと言わざるを得ません。主に管理インターフェースが使いやすく、メインサイトに統合されている点がいいです。
>
> https経由だと画像が正しく読み込まれません。時間があるときに確認します。
>
> bitcoin.orgのDNSエントリを変更するだけのほうが簡単です。forum.bitcoin.orgは不要です。
>
> どこかで無料のSSL証明書を取得できないか確認してみましょう。例えばhttp://www.startssl.com/?app=1のように。そうすれば自己署名証明書によるセキュリティ警告がユーザーに表示されなくなります。ただし、匿名で登録されたドメインに証明書を発行してくれるかどうかはわかりません。
>
>> ありがとう、うまくいきました。SSHでFile Managerをインストールできました。Drupalにもいくつかテーマをアップロードしました。利用可能なテーマをすべて徹底的に確認したわけではまだありません。
>>
>> CMSを調べてみたところ、DrupalとJoomlaが人気です。一般的な見解としては、Joomlaのほうがテーマの選択肢が豊富で学びやすいですが、Drupalはプログラマーやカスタマイズにとってより直感的かもしれません。JoomlaはCMSとして優れており、Drupalはブログに向いています。DrupalのURLは検索エンジンフレンドリーですが、Joomlaはそうではありません。
>>
>> どちらもSMFブリッジモジュールが利用可能です。今後の参考のために、Drupal用のものは「SMFforum Integration」という名前です。
>>
>> mmalmi@cc.hut.fi の書き込み：
>>> 今日は設定する時間がありませんが、一時的なアカウント「」をパスワード「」で作成し、
>>>  /var/www/bitcoinへのフル権限を付与しました。ポート30000でsshまたはsftpでアクセスできます。
>
>
>

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
