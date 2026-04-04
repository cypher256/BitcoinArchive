---
title: "JSON-RPCの状況"
date: 2010-02-07T06:12:04Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがboost::asioとJSON Spiritを使用したBitcoinのJSON-RPC実装の進捗を報告し、フォーラムの急成長にも言及。"
isSatoshi: true
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

<!-- speaker: Satoshi Nakamoto -->

JSON-RPCの実装は順調に進んでいる。ソケットにはboost::asioを使っている。JSON-RPCは素のソケットでもHTTPでも使えるが、他の実装のほとんどはHTTPのようなので、独自のシンプルなHTTPヘッダーを作った。JSONのパースにはJSON Spiritを使っている。STLをフル活用しており、非常に使いやすい。ヘッダーオンリーなのでビルド作業が増えることもなく、私たちのソースツリーに追加できるほど小さい。MITライセンスだ。あと数日で全て動くようになるはずだ。

フォーラムは確実に盛り上がっているな。こんなに早く活発になるとは思わなかった。

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
