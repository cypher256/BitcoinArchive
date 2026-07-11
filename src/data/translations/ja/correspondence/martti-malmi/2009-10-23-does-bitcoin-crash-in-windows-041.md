---
title: "Re: [bitcoin-list] ビットコインは Windows でクラッシュしますか？"
date: 2009-10-23T23:55:06Z
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
description: "サトシが Liberty Standard のクラッシュ報告に対し問題はビットコインではなく Wine に起因すると回答し、マルミと共に次期リリースに取り組んでいることに言及する。"
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
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    date: "2009-10-23T11:50:10Z"
    sourceEntryId: "emails/bitcoin-list/2009-10-23-does-bitcoin-crash-in-windows"
---

<!-- speaker: Satoshi Nakamoto -->
<!-- quote: q1 -->
<!-- tone-skip -->
> Windows ユーザーは時々ビットコインがクラッシュすることがあるか？
> 最近 wine-1.0.1 上で動作しているビットコインが頻繁にクラッシュしている。
> これが Wine の問題なのかビットコインの問題なのか気になった。
<!-- /tone-skip -->

v0.1.5 でのクラッシュ報告は受けていない。Windows では非常に安定している。Wine に関連した問題だと思う。Wine でまたクラッシュしてターミナルに何か表示されたら、メールしてほしい。何が起きたか突き止められるかもしれないし、回避策を見つけられるかもしれない。マルッティと一緒に近くリリースする新しいバージョンに取り組んでいて、Wine の修正も入れられるといいんだけど。

<!-- speaker: Liberty Standard -->
> ビットコインを起動するとターミナルに以下の 4 行が出力される。
> fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
> fixme:toolhelp:Heap32ListFirst : stub
> fixme:toolhelp:CreateToolhelp32Snapshot Unimplemented: heap list snapshot
> fixme:toolhelp:Heap32ListFirst : stub

<!-- speaker: reset -->
それらは心配するようなものには見えない。おそらく Wine で実装されていない関数が無害にスタブアウトされているだけだ。

<!-- speaker: Liberty Standard -->
> これまでビットコインをターミナルから起動していなかったので、クラッシュ時に何が出力されるかは分からない。次にクラッシュしたら結果を返信する。
>
> ビットコインが既存ブロックをダウンロードしている間、debug.log は 17.4 MB まで増加して、その後増加が止まる。ビットコインが採掘されるにつれて、また増加していくのだろうと想像している。

<!-- speaker: reset -->
ディスク容量を節約したければ、debug.log は時々削除して構わない。デバッグに役立つステータスメッセージに過ぎないからね。

bitcoin.sourceforge.net は今は正常に見える。おそらく sourceforge がメンテナンスを行っていたのだろう。

Satoshi

------------------------------------------------------------------------------<br>
Come build with us! The BlackBerry(R) Developer Conference in SF, CA<br>
is the only developer event you need to attend this year. Jumpstart your<br>
developing skills, take BlackBerry mobile applications to market and stay<br>
ahead of the curve. Join us from November 9 - 12, 2009. Register now!<br>
http://p.sf.net/sfu/devconference<br>
_______________________________________________<br>
bitcoin-list mailing list<br>
bitcoin-list@lists.sourceforge.net<br>
https://lists.sourceforge.net/lists/listinfo/bitcoin-list
