---
title: "JSON-RPCの状況"
date: 2010-02-07T06:12:04Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "JSON-RPCの実装は順調に進んでいます。ソケットにはboost::asioを使っています。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 153
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

JSON-RPCの実装は順調に進んでいます。ソケットにはboost::asioを使っています。JSON-RPCは素のソケットでもHTTPでも使えますが、他の実装のほとんどはHTTPのようなので、独自のシンプルなHTTPヘッダーを作りました。JSONのパースにはJSON Spiritを使っています。STLをフル活用しており、非常に使いやすいです。ヘッダーオンリーなのでビルド作業が増えることもなく、私たちのソースツリーに追加できるほど小さいです。MITライセンスです。あと数日で全て動くようになるはずです。

フォーラムは確実に盛り上がっていますね。こんなに早く活発になるとは思いませんでした。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
