---
title: "Re: JSON-RPCの状況"
date: 2010-02-07T10:45:53Z
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
description: "マルミがJSON-RPCの進捗に好意的に反応し、取引所サービスのためにLiberty Reserve APIの勉強を始めると発表。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "json-rpc"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Martti Malmi -->
それは素晴らしいですね！Liberty ReserveとそのAPIについて勉強し始めます。

<!-- speaker: Satoshi Nakamoto -->
> JSON-RPCの実装は順調に進んでいる。ソケットにはboost::asioを使って
> いる。JSON-RPCは素のソケットでもHTTPでも使えるが、他の実装のほとんど
> はHTTPのようなので、独自のシンプルなHTTPヘッダーを作った。JSONの
> パースにはJSON Spiritを使っている。STLをフル活用しており、非常に使い
> やすい。ヘッダーオンリーなのでビルド作業が増えることもなく、私たちの
> ソースツリーに追加できるほど小さい。MITライセンスだ。あと数日で
> 全て動くようになるはずだ。
>
> フォーラムは確実に盛り上がっているな。こんなに早く活発になるとは
> 思わなかった。

<!-- speaker: Martti Malmi -->
