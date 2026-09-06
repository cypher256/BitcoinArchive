---
title: "Re: Drupal を修正するためにアクセス権限が必要"
date: 2009-11-23T06:44:35Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミが bitcoin.org サーバー上の必要な Apache 設定ファイルへのアクセス権限をサトシに付与したことを確認。"
isSatoshi: false
tags:
  - "early-contributor"
  - "bitcoin-org"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-11-23T05:48:19Z"
    sourceEntryId: "correspondence/martti-malmi/2009-11-23-access-permissions-required-to-fix-drupal-108"
translationStatus: complete
---

<!-- speaker: Martti Malmi -->
完了しました。すべてのファイルへのアクセス権限を付与しました。

<!-- quote: q1 -->
<!-- speaker: Satoshi Nakamoto -->
> Drupal の.htaccess ファイルは、mod_rewrite を使用して?パラメーターなしのクリーン URL を有効にしているが、Apache が「AllowOverride All」に設定されていないため、変更が拒否されて動作していない。これは、私たちが望む形で Drupal を他のサイトと共存させるために必要だ。
>
> 修正するために以下のファイルへのアクセス権限が必要だ：
>  /etc/apache2/sites-available/default
>  /etc/apache2/sites-available/default-ssl
>  /etc/apache2/httpd.conf
>
> 修正計画は以下の通りだ。もし自分でやる場合でも、後で変更が必要になるかもしれないので、httpd.conf へのアクセス権限は付与してほしい。
>
> /etc/apache2/sites-available/default で<br>
> 「AllowOverride None」の 2番目のインスタンスを<br>
> 「AllowOverride All」に変更
>
> そして/etc/apache2/sites-available/default-ssl で<br>
> 「AllowOverride AuthConfig」の 2番目のインスタンスを<br>
> 「AllowOverride All」に変更
>
>  /etc/apache2/httpd.conf
> を
>  /home/maintenance/httpd.conf
> に置き換え
>
> おそらくこの後 Apache の再起動が必要だ。 (apache2ctl graceful)

<!-- speaker: Martti Malmi -->
