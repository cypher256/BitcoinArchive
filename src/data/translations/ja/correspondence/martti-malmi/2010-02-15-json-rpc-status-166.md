---
title: "返信: JSON-RPCの状況"
date: 2010-02-15T18:33:23Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "python-json-rpcをダウンロードして、Pythonインタプリタで直接テストしました。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 166
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
---

> mmalmi@cc.hut.fi wrote:
>>> VPSをいじらなくても済むように、テストやコンパイルができるUbuntuの
>>> ノートパソコンを持っていませんか？
>>
>> はい。PythonのJSON-RPCでテストしましたが、問題なく動作しているようです！
>> 本当に使いやすいです。
>
> やった、一発で動きました。
>
> 使ったPythonのコードを送ってもらえますか？後で自分でテストするとき、
> 一から調べなくて済むので。

python-json-rpc（http://json-rpc.org/wiki/python-json-rpc）をSVNからダウンロードして、Pythonインタプリタで直接テストしました。こんな感じです：

pythons = ServiceProxy("http://localhost:8332")
s.getblockcount()

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
