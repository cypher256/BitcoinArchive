---
title: "返信: bitcoin.orgの障害の原因は？"
date: 2010-12-03T10:08:53Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Marttiが障害の調査結果を報告し、サーバー管理者の追加とセキュリティについて提案"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 240
tags:
  - "correspondence"
  - "early-contributor"
  - "bitcoin-org"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

> あの障害の原因は分かりましたか？再起動が必要だったのか、それともDoS攻撃か何かだったのでしょうか？障害中もIPにはpingが通っていました。

原因は分かりません。再起動したら復旧しました。Bitcoinに関するRedditの投稿による高負荷が原因だったのではないかという意見がありました。ログを調べれば有益でしょうが、今はあまり時間がありません。

> davidonpdaにミラーバックアップの件で返事はしましたか？とても良いアイデアだと思います。バックアップは取っていますか、それともVPSが自動的にバックアップしてくれますか？

進めてよいと伝えました。現時点では自動バックアップは行っていません。bitcoinexchange.comを別のサーバーに移したら、サーバー管理者を増やせるはずです。あなたと他の誰かにrootパスワードを渡すこともできます。Xunieが志願していますが、もっとプロフェッショナルな人が見つかるかもしれません。障害が高負荷によるものであれば、lighttpdへの移行やリソースの最適化を手伝ってもらえるでしょう。フォーラムに募集スレッドを立てた方がいいでしょうか？

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
