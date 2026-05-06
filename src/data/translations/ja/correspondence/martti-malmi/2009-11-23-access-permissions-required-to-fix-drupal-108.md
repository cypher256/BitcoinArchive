---
title: "Drupalを修正するためにアクセス権限が必要"
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
description: "サトシがDrupalのApache設定を修正するためにマルミにサーバーのアクセス権限を要求し、mod_rewriteのクリーンURL有効化の詳細な手順を提供。"
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

Drupalの.htaccessファイルは、mod_rewriteを使用して?パラメーターなしのクリーンURLを有効にしているが、Apacheが「AllowOverride All」に設定されていないため、変更が拒否されて動作していない。これは、私たちが望む形でDrupalを他のサイトと共存させるために必要だ。

修正するために以下のファイルへのアクセス権限が必要だ：<br>
  /etc/apache2/sites-available/default<br>
  /etc/apache2/sites-available/default-ssl<br>
  /etc/apache2/httpd.conf

修正計画は以下の通りだ。もし自分でやる場合でも、後で変更が必要になるかもしれないので、httpd.confへのアクセス権限は付与してほしい。

/etc/apache2/sites-available/defaultで<br>
「AllowOverride None」の2番目のインスタンスを<br>
「AllowOverride All」に変更

そして/etc/apache2/sites-available/default-sslで<br>
「AllowOverride AuthConfig」の2番目のインスタンスを<br>
「AllowOverride All」に変更

  /etc/apache2/httpd.conf<br>
を<br>
  /home/maintenance/httpd.conf<br>
に置き換え

おそらくこの後Apacheの再起動が必要だ。
(apache2ctl graceful)
