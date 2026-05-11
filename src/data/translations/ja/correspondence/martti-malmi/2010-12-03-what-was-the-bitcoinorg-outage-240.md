---
title: "Re: bitcoin.org の障害の原因は？"
date: 2010-12-03T10:08:53Z
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
description: "マルッティが障害の調査結果を報告し、サーバー管理者の追加とセキュリティについて提案"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "bitcoin-org"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
> あの障害の原因は分かったか？再起動が必要だったのか、それとも DoS 攻撃か何かだったのか？障害中も IP には ping が通っていた。

<!-- speaker: Martti Malmi -->
原因は分かりません。再起動したら復旧しました。Bitcoin に関する Reddit の投稿による高負荷が原因だったのではないかという意見がありました。ログを調べれば有益でしょうが、今はあまり時間がありません。

<!-- speaker: Satoshi Nakamoto -->
> davidonpda にミラーバックアップの件で返事はしたか？とても良いアイデアだと思う。バックアップは取っているか、それとも VPS が自動的にバックアップしてくれるか？

<!-- speaker: Martti Malmi -->
進めてよいと伝えました。現時点では自動バックアップは行っていません。bitcoinexchange.com を別のサーバーに移したら、サーバー管理者を増やせるはずです。あなたと他の誰かに root パスワードを渡すこともできます。Xunie が志願していますが、もっとプロフェッショナルな人が見つかるかもしれません。障害が高負荷によるものであれば、lighttpd への移行やリソースの最適化を手伝ってもらえるでしょう。フォーラムに募集スレッドを立てた方がいいでしょうか？
