---
title: "Re: Db::open/Db::close \"Bad file descriptor\" 例外"
date: 2009-11-18T05:14:45Z
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
description: "サトシがマルミのログから DB エラーのパターンを確認し、ゾンビソケットの活動にも注目。実行していたテストバージョンを確認。"
isSatoshi: true
tags:
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
    date: "2009-11-18T01:50:24Z"
    sourceEntryId: "correspondence/martti-malmi/2009-11-18-dbopendbclose-bad-file-descriptor-exception-094"
  - id: "q2"
    parent: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-11-16T06:20:52Z"
    sourceEntryId: "correspondence/martti-malmi/2009-11-16-dbopendbclose-bad-file-descriptor-exception-086"
---

<!-- speaker: Satoshi Nakamoto -->

ありがとう。db::open/close のエラーはパターンを裏付けている。

より興味深いのは、終盤のゾンビソケットの活動と、ソケットスレッドモニターが反応したものの復旧できなかったことだ。マシンがネットから切断されたのか？test5 の MSG_DONTWAIT が Liberty のゾンビ問題を解決した。どのテストバージョンを実行していたのか？（ログにテストバージョンを出力するようにすべきだな）

<!-- speaker: Martti Malmi -->

<!-- quote: q1 -->
<!-- tone-skip -->
> まだ役に立つかもしれないので、ログをお送りします。
>
> <!-- quote: q2 -->
>> 回避策のアイデアがあるが、エラーがどのファイルで発生しているかによる。db.log にエラーがいくつか蓄積されているなら、送ってもらえるか？（たとえ非常にシンプルで退屈な内容でも）記録されているファイルは常に blkindex.dat か、それとも addr.dat や wallet.dat も含まれるか？
>
<!-- /tone-skip -->
