---
title: "Re: JSON-RPC の状況"
date: 2010-02-15T18:33:23Z
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
description: "python-json-rpc をダウンロードして、Python インタプリタで直接テストしました。"
isSatoshi: false
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
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-15T18:11:53Z"
    sourceEntryId: "correspondence/martti-malmi/2010-02-15-json-rpc-status-165"
  - id: "q2"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
    parent: "q1"
    date: "2010-02-15T13:00:34Z"
    sourceEntryId: "correspondence/martti-malmi/2010-02-15-json-rpc-status-164"
  - id: "q3"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    parent: "q2"
    date: "2010-02-14T21:48:31Z"
    sourceEntryId: "correspondence/martti-malmi/2010-02-14-json-rpc-status-163"
---

<!-- quote: q1 -->
> <!-- speaker: Satoshi Nakamoto -->
> <!-- quote: q2 -->
>> <!-- speaker: Martti Malmi -->
>> <!-- quote: q3 -->
>>> <!-- speaker: Satoshi Nakamoto -->
>>> VPSをいじらなくても済むように、テストやコンパイルができるUbuntuの
>>> ノートパソコンを持っていないか？
>>
>> はい。PythonのJSON-RPCでテストしましたが、問題なく動作しているようです！
>> 本当に使いやすいです。
<!-- speaker: Satoshi Nakamoto -->
>
> やった、一発で動いた。
>
> 使ったPythonのコードを送ってもらえるか？後で自分でテストするとき、
> 一から調べなくて済むので。

<!-- speaker: Martti Malmi -->
python-json-rpc（http://json-rpc.org/wiki/python-json-rpc）を SVN からダウンロードして、Python インタプリタで直接テストしました。こんな感じですよ：

pythons = ServiceProxy("http://localhost:8332")
s.getblockcount()
