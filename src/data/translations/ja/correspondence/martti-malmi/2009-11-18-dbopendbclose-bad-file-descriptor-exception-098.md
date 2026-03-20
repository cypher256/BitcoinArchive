---
title: "Re: Db::open/Db::close \"Bad file descriptor\" 例外"
date: 2009-11-18T19:32:15Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミがテストバージョン5だったと思われると報告し、ノートパソコンでハイバネート機能を使いながら異なる場所で使用している状況を説明。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadPosition: 98
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
テストバージョン5だったと思いますが、完全には確かではありません。Linux版をノートパソコンで実行していて、異なる場所間で持ち運び、電源を切る代わりにハイバネート機能を使用しています。

<!-- speaker: Satoshi Nakamoto -->
> ありがとう。db::open/closeのエラーはパターンを裏付けている。
>
> より興味深いのは、終盤のゾンビソケットの活動と、ソケットスレッドモニターが反応したものの復旧できなかったことだ。マシンがネットから切断されたか？test5のMSG_DONTWAITがLibertyのゾンビ問題を解決した。どのテストバージョンを実行していたか？（ログにテストバージョンを出力するようにすべきだな）
>
> mmalmi@cc.hut.fi の書き込み：
<!-- speaker: Martti Malmi -->
>> まだ役に立つかもしれないので、ログをお送りします。
>>
<!-- speaker: Satoshi Nakamoto -->
>>> 回避策のアイデアがあるが、エラーがどのファイルで発生しているかによる。db.logにエラーがいくつか蓄積されているなら、送ってもらえるか？（たとえ非常にシンプルで退屈な内容でも）記録されているファイルは常にblkindex.datか、それともaddr.datやwallet.datも含まれるか？
<!-- speaker: Martti Malmi -->
>>

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
