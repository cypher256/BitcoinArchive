---
title: "Drupalを修正するためにアクセス権限が必要"
date: 2009-11-23T05:48:19Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Drupalの.htaccessファイルがmod_rewriteを使用してクリーンURLを有効にしているが、Apacheが「AllowOverride All」に設定されていないため動作していない"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 108
tags:
  - "correspondence"
  - "early-contributor"
  - "website"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

Drupalの.htaccessファイルは、mod_rewriteを使用して?パラメータなしのクリーンURLを有効にしていますが、Apacheが「AllowOverride All」に設定されていないため、変更が拒否されて動作していません。これは、私たちが望む形でDrupalを他のサイトと共存させるために必要です。

修正するために以下のファイルへのアクセス権限が必要です：
  /etc/apache2/sites-available/default
  /etc/apache2/sites-available/default-ssl
  /etc/apache2/httpd.conf

修正計画は以下の通りです。もし自分でやる場合でも、後で変更が必要になるかもしれないので、httpd.confへのアクセス権限は付与してください。

/etc/apache2/sites-available/defaultで
「AllowOverride None」の2番目のインスタンスを
「AllowOverride All」に変更

そして/etc/apache2/sites-available/default-sslで
「AllowOverride AuthConfig」の2番目のインスタンスを
「AllowOverride All」に変更

  /etc/apache2/httpd.conf
を
  /home/maintenance/httpd.conf
に置き換え

おそらくこの後Apacheの再起動が必要です。
(apache2ctl graceful)

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
