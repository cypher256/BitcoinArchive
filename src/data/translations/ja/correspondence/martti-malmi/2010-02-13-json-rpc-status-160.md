---
title: "返信: JSON-RPCの状況"
date: 2010-02-13T01:08:42Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "JSON-RPCとコマンドラインの実装をSVNにアップロードしました。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 160
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

JSON-RPCとコマンドラインの実装をSVNにアップロードしました。コマンドについてもう少し考える時間ができたら、フォーラムに投稿するつもりです。少なくともいくつかのメソッド名は変更する予定です。

RPCサーバーを有効にするには、-serverスイッチを追加してください。デフォルトでは無効です。

クライアントコマンドはスイッチなしで、以下のように使います：
bitcoin getblockcount
bitcoin getdifficulty
bitcoin getnewaddress somelabel
bitcoin sendtoaddress 1DvqsbZ... 1.00
bitcoin getallpayments 0
bitcoin stop

アプリケーションは通常、コマンドラインではなくJSON-RPCを直接使用します。

まだ私のJSON-RPCサーバーを他のもので テストしていません。もしテストしたら、結果を教えてください。Pythonを使っていますよね？

Linux版をGTKなしで動作させるのは別の作業になります。

mmalmi@cc.hut.fi wrote:
> それは素晴らしいですね！Liberty ReserveとそのAPIについて調べ始めます。
>
>> JSON-RPCの実装は順調に進んでいます。ソケットにはboost::asioを使って
>> います。JSON-RPCはプレーンソケットでもHTTPでも可能ですが、他のほとんどの
>> 実装はHTTPのようなので、自分でシンプルなHTTPヘッダーを作りました。JSON
>> パースにはJSON Spiritを使っています。STLを最大限に活用しており、使い心地が
>> とても良いです。ヘッダーオンリーなのでビルド作業の追加はなく、ソースツリーに
>> 加えるには十分小さいです。MITライセンスです。あと数日で全部動くはずです。
>>
>> フォーラムは確実に盛り上がっていますね。こんなに早くこれほどの活動があるとは
>> 思いませんでした。
>
>
>

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
