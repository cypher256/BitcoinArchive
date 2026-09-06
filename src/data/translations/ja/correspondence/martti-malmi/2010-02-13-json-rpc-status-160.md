---
title: "Re: JSON-RPC の状況"
date: 2010-02-13T01:08:42Z
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
description: "サトシが JSON-RPC とコマンドラインの実装を SVN にアップロードしたことを報告し、コマンド例を示してマルミに Python でのテストを依頼する。"
isSatoshi: true
tags:
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
    date: "2010-02-12T10:06:43Z"
    sourceEntryId: "correspondence/martti-malmi/2010-02-12-translation-159"
  - id: "q2"
    parent: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-07T06:12:04Z"
    sourceEntryId: "correspondence/martti-malmi/2010-02-07-json-rpc-status-153"
---

<!-- speaker: Satoshi Nakamoto -->

JSON-RPC とコマンドラインの実装を SVN にアップロードした。コマンドについてもう少し考える時間ができたら、フォーラムに投稿するつもりだ。少なくともいくつかのメソッド名は変更する予定だ。

RPC サーバーを有効にするには、-server スイッチを追加してほしい。デフォルトでは無効だ。

クライアントコマンドはスイッチなしで、以下のように使う：

```
bitcoin getblockcount
bitcoin getdifficulty
bitcoin getnewaddress somelabel
bitcoin sendtoaddress 1DvqsbZ... 1.00
bitcoin getallpayments 0
bitcoin stop
```

アプリケーションは通常、コマンドラインではなく JSON-RPC を直接使用する。

まだ私の JSON-RPC サーバーを他のものでテストしていない。もしテストしたら、結果を教えてほしい。Python を使っているのか？

Linux 版を GTK なしで動作させるのは別の作業になる。

<!-- speaker: Martti Malmi -->

<!-- quote: q1 -->
<!-- tone-skip -->
> それは素晴らしいですね！Liberty Reserve とその API について勉強し始めます。
>
> <!-- quote: q2 -->
> <!-- speaker: Satoshi Nakamoto -->
>> JSON-RPC の実装は順調に進んでいる。ソケットには boost::asio を使っている。
>> JSON-RPC は素のソケットでも HTTP でも使えるが、他の実装のほとんどは HTTP のようなので、独自のシンプルな HTTP ヘッダーを作った。
>> JSON のパースには JSON Spirit を使っている。STL をフル活用しており、非常に使いやすい。
>> ヘッダーオンリーなのでビルド作業が増えることもなく、私たちのソースツリーに追加できるほど小さい。
>> MIT ライセンスだ。あと数日で全て動くようになるはずだ。
>>
>> フォーラムは確実に盛り上がっているな。
>> こんなに早く活発になるとは思わなかった。
>
>
>
<!-- /tone-skip -->
