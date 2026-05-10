---
title: "SEO フレンドリーなサイト移行"
date: 2009-11-22T19:47:56Z
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
description: "サトシが検索エンジンの履歴とサイト開始日を保持するための bitcoin.org の SEO フレンドリーなサーバー移行計画を説明。"
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

検索エンジンが新しいサイトだと判断してサイト開始日と PR データをリセットしないように、bitcoin.org の継続性を保った移行が必要だ。Google は IP アドレスやサイトのコンテンツなど、一定数のプロパティの変更をサイト履歴を削除せずに許可している。安全を期すために、IP アドレスが変わるときはコンテンツを同じに保ち、その逆も同様にすべきだ。まだそれほどランクが蓄積されていなくても、サイトが後で人気になった場合、元の開始日が非常に重要になる。

手順：
1) 現在の bitcoin.org の index.html をそのまま新しいサーバーにコピーする。
2) bitcoin.org の DNS エントリを切り替える。
3) 裏で Drupal サイトの作業を続ける。
4) Google が記録を更新する時間が経ったら、Drupal サイトに切り替える。

タイミング的にうまくいく。今すぐ新しいフォーラムに切り替えて、準備ができたら後から Drupal サイトをリリースできる。

Drupal を一時的に drupal.php や/drupal/などに移動して、引き続き簡単にアクセスして作業できるようにする方法を調べてみる。
