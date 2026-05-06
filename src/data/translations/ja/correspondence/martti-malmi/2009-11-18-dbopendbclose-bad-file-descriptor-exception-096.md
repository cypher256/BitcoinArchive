---
title: "Re: Db::open/Db::close \"Bad file descriptor\" 例外"
date: 2009-11-18T05:14:45Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがマルミのログからDBエラーのパターンを確認し、ゾンビソケットの活動にも注目。実行していたテストバージョンを確認。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
---

<!-- speaker: Satoshi Nakamoto -->

ありがとう。db::open/closeのエラーはパターンを裏付けている。

より興味深いのは、終盤のゾンビソケットの活動と、ソケットスレッドモニターが反応したものの復旧できなかったことだ。マシンがネットから切断されたのか？test5のMSG_DONTWAITがLibertyのゾンビ問題を解決した。どのテストバージョンを実行していたのか？（ログにテストバージョンを出力するようにすべきだな）

<!-- speaker: Martti Malmi -->

<!-- quote: q1 -->
<!-- tone-skip -->
> まだ役に立つかもしれないので、ログをお送りします。
>
>> 回避策のアイデアがあるが、エラーがどのファイルで発生しているかによる。db.logにエラーがいくつか蓄積されているなら、送ってもらえるか？（たとえ非常にシンプルで退屈な内容でも）記録されているファイルは常にblkindex.datか、それともaddr.datやwallet.datも含まれるか？
>
<!-- /tone-skip -->
