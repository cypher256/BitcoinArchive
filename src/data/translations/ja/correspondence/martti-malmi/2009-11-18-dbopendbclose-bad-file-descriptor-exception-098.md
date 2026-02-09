---
title: "返信: Db::open/Db::close \"Bad file descriptor\" 例外"
date: 2009-11-18T19:32:15Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "テストバージョン5だったと思いますが、完全には確かではありません。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
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

テストバージョン5だったと思いますが、完全には確かではありません。Linux版をノートパソコンで実行していて、異なる場所間で持ち運び、電源を切る代わりにハイバネート機能を使用しています。

> ありがとうございます。db::open/closeのエラーはパターンを裏付けています。
>
> より興味深いのは、終盤のゾンビソケットの活動と、ソケットスレッドモニターが反応したものの復旧できなかったことです。マシンがネットから切断されましたか？test5のMSG_DONTWAITがLibertyのゾンビ問題を解決しました。どのテストバージョンを実行していましたか？（ログにテストバージョンを出力するようにすべきですね）
>
> mmalmi@cc.hut.fi の書き込み：
>> まだ役に立つかもしれないので、ログをお送りします。
>>
>>> 回避策のアイデアがありますが、エラーがどのファイルで発生しているかによります。db.logにエラーがいくつか蓄積されているなら、送ってもらえますか？（たとえ非常にシンプルで退屈な内容でも）記録されているファイルは常にblkindex.datですか、それともaddr.datやwallet.datも含まれますか？
>>

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
