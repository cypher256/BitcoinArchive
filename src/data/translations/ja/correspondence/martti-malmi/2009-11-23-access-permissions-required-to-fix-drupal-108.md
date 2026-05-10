---
title: "Drupal を修正するためにアクセス権限が必要"
date: 2009-11-23T05:48:19Z
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
description: "サトシが Drupal の Apache 設定を修正するためにマルミにサーバーのアクセス権限を要求し、mod_rewrite のクリーン URL 有効化の詳細な手順を提供。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "website"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->

Drupal の.htaccess ファイルは、mod_rewrite を使用して?パラメーターなしのクリーン URL を有効にしているが、Apache が「AllowOverride All」に設定されていないため、変更が拒否されて動作していない。これは、私たちが望む形で Drupal を他のサイトと共存させるために必要だ。

修正するために以下のファイルへのアクセス権限が必要だ：<br>
  /etc/apache2/sites-available/default<br>
  /etc/apache2/sites-available/default-ssl<br>
  /etc/apache2/httpd.conf

修正計画は以下の通りだ。もし自分でやる場合でも、後で変更が必要になるかもしれないので、httpd.conf へのアクセス権限は付与してほしい。

/etc/apache2/sites-available/default で<br>
「AllowOverride None」の 2番目のインスタンスを<br>
「AllowOverride All」に変更

そして/etc/apache2/sites-available/default-ssl で<br>
「AllowOverride AuthConfig」の 2番目のインスタンスを<br>
「AllowOverride All」に変更

  /etc/apache2/httpd.conf<br>
を<br>
  /home/maintenance/httpd.conf<br>
に置き換え

おそらくこの後 Apache の再起動が必要だ。
(apache2ctl graceful)
