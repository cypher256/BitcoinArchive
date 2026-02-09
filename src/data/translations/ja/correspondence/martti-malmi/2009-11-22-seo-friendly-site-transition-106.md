---
title: "SEOフレンドリーなサイト移行"
date: 2009-11-22T19:47:56Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "検索エンジンが新しいサイトだと判断してサイト開始日とPRデータをリセットしないように、bitcoin.orgの継続性を保った移行が必要です。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 106
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

検索エンジンが新しいサイトだと判断してサイト開始日とPRデータをリセットしないように、bitcoin.orgの継続性を保った移行が必要です。GoogleはIPアドレスやサイトのコンテンツなど、一定数のプロパティの変更をサイト履歴を削除せずに許可しています。安全を期すために、IPアドレスが変わるときはコンテンツを同じに保ち、その逆も同様にすべきです。まだそれほどランクが蓄積されていなくても、サイトが後で人気になった場合、元の開始日が非常に重要になります。

手順：
1) 現在のbitcoin.orgのindex.htmlをそのまま新しいサーバーにコピーする。
2) bitcoin.orgのDNSエントリを切り替える。
3) 裏でDrupalサイトの作業を続ける。
4) Googleが記録を更新する時間が経ったら、Drupalサイトに切り替える。

タイミング的にうまくいきます。今すぐ新しいフォーラムに切り替えて、準備ができたら後からDrupalサイトをリリースできます。

Drupalを一時的にdrupal.phpや/drupal/などに移動して、引き続き簡単にアクセスして作業できるようにする方法を調べてみます。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
