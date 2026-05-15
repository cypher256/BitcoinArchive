---
title: "Re: JSON-RPC の状況"
date: 2010-02-14T21:48:31Z
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
description: "サトシが Linux 上で Bitcoin の GUI 版と非 GUI 版のバイナリを分離する方針を議論し、マルミに VPS ではなく Ubuntu ノート PC でのテストを提案する。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "json-rpc"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
    sourceEntryId: "correspondence/martti-malmi/2010-02-14-exchange-options-162"
---

<!-- speaker: Martti Malmi -->

<!-- quote: q1 -->
<!-- tone-skip -->
>> まだ私のJSON-RPCサーバーを他のものでテストしていない。もしテストしたら、
>> 結果を教えてほしい。Pythonを使っているのか？
>>
>> Linux版をGTKなしで動作させるのは別の作業になる。
>
> はい、Pythonを使っています。VPSでまだBitcoinを動かしていないので、JSON-RPC
> のテストはまだしていません。GTKライブラリがインストールされていても、ウィンドウ
> マネージャーなしでは動作しません。wxWidgetsフォーラム
> （http://wxforum.shadonet.com/viewtopic.php?t=26954）で質問しましたが、
> あまり手がかりはありませんでした。2つの異なるバイナリを作る必要があるかも
> しれません。
<!-- /tone-skip -->

<!-- speaker: Satoshi Nakamoto -->

おそらく折れてそうすることになるだろう。init と shutdown を init.cpp か start.cpp などに移動し、wxbase だけをリンクして ui.o と uibase.o はリンクしないようにできる。

wxWidgets は Windows の人が多いので、GTK についてはあまり詳しくないだろう。

VPS をいじらなくても済むように、テストやコンパイルができる Ubuntu のノートパソコンを持っていないか？
