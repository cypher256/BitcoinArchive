---
title: "Re: SMF フォーラム、MOD のインストールが必要"
date: 2009-11-21T21:46:52Z
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
description: "サトシが Drupal でのセットアップ続行を決定。サイトの HTTPS デフォルト化には反対し、プライバシーを重視するユーザー向けのオプション機能として SSL を提供する方針を提案。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "forum"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
    sourceEntryId: "correspondence/martti-malmi/2009-11-21-smf-forum-need-a-mod-installed-104"
  - id: "q2"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
    sourceEntryId: "correspondence/martti-malmi/2009-11-21-smf-forum-need-a-mod-installed-104"
---

<!-- speaker: Satoshi Nakamoto -->

それでは Drupal のセットアップを進める。

サイトをデフォルトで https にすべきではないと思う。サイトの公開部分が https であるのはまだ非常に珍しく、おそらく潜在的な技術的問題、遅延、サーバー負荷の増大を招くからだろう。ユーザーとしては、たまたま見かけた無名のサイトの ID を検証するのに時間がかかるとちょっと苛立つ。私の感覚では、https サイトは読み込みに失敗することがずっと多いように思える。

重要なのは、必要な人のために SSL を利用可能にしておくことだ。SSL が必要な人は、http の後に「s」を挿入して動くかどうか試すことを知っていると思う。SMF には、渡された URL が https であればすべてのリンクを https に変更するコードがある。

登録ページに、SSL が必要な場合はいつでも http を https に変更して自己署名証明書を承認できるという注意書きや、それを行うリンクを追加できる。TOR のページでも言及できる。

証明書の取得は、状況が落ち着いてから検討しよう。Class 1 では 1年間変更が許可されないため、現在のホストに問題が見つかって IP を変更しなければならない場合にリスクになる。

<!-- speaker: Martti Malmi -->

<!-- quote: q1 -->
<!-- tone-skip -->
> お客様向けにJoomlaサイトを作ったことがありますが、Drupalのほうが好きだと言わざるを得ません。主に管理インターフェースが使いやすく、メインサイトに統合されている点がいいです。
>
> https経由だと画像が正しく読み込まれません。時間があるときに確認します。
>
> bitcoin.orgのDNSエントリを変更するだけのほうが簡単です。forum.bitcoin.orgは不要です。
>
> どこかで無料のSSL証明書を取得できないか確認してみましょう。例えば http://www.startssl.com/?app=1 のように。そうすれば自己署名証明書によるセキュリティ警告がユーザーに表示されなくなります。ただし、匿名で登録されたドメインに証明書を発行してくれるかどうかはわかりません。
>
>> ありがとう、うまくいった。SSHでFile Managerをインストールできた。Drupalにもいくつかテーマをアップロードした。利用可能なテーマをすべて徹底的に確認したわけではまだない。
>>
>> CMSを調べてみたところ、DrupalとJoomlaが人気です。一般的な見解としては、Joomlaのほうがテーマの選択肢が豊富で学びやすいですが、Drupalはプログラマーやカスタマイズにとってより直感的かもしれません。JoomlaはCMSとして優れており、Drupalはブログに向いています。DrupalのURLは検索エンジンフレンドリーですが、Joomlaはそうではありません。
>>
>> どちらもSMFブリッジモジュールが利用可能です。今後の参考のために、Drupal用のものは「SMFforum Integration」という名前です。
>>
>> <!-- quote: q2 -->
>>> 今日は設定する時間がありませんが、一時的なアカウント「」をパスワード「」で作成し、
>>>  /var/www/bitcoinへのフル権限を付与しました。ポート30000でsshまたはsftpでアクセスできます。
>
>
>
<!-- /tone-skip -->
