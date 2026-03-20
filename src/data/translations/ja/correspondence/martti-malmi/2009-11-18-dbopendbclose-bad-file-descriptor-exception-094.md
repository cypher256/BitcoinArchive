---
title: "Re: Db::open/Db::close \"Bad file descriptor\" 例外"
date: 2009-11-18T01:50:24Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミがBerkeley DBの「Bad file descriptor」例外の調査に役立てるため、デバッグログとデータベースログをサトシに送付。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadPosition: 94
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Martti Malmi -->
まだ役に立つかもしれないので、ログをお送りします。

<!-- speaker: Satoshi Nakamoto -->
> 回避策のアイデアがあるが、エラーがどのファイルで発生しているかによる。db.logにエラーがいくつか蓄積されているなら、送ってもらえるか？（たとえ非常にシンプルで退屈な内容でも）記録されているファイルは常にblkindex.datか、それともaddr.datやwallet.datも含まれるか？

<!-- speaker: Martti Malmi -->
*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
