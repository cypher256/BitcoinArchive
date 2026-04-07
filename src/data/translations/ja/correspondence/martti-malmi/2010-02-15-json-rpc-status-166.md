---
title: "Re: JSON-RPCの状況"
date: 2010-02-15T18:33:23Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "python-json-rpcをダウンロードして、Pythonインタプリタで直接テストしました。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "json-rpc"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
---

<!-- speaker: Satoshi Nakamoto -->
> <!-- quote: q1 -->
>>> VPSをいじらなくても済むように、テストやコンパイルができるUbuntuの
>>> ノートパソコンを持っていないか？
<!-- speaker: Martti Malmi -->
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
python-json-rpc（http://json-rpc.org/wiki/python-json-rpc）をSVNからダウンロードして、Pythonインタプリタで直接テストしました。こんな感じですよ：

pythons = ServiceProxy("http://localhost:8332")
s.getblockcount()

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
