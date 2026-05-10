---
title: "JSON-RPC の状況"
date: 2010-02-07T06:12:04Z
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
description: "サトシが boost::asio と JSON Spirit を使用した Bitcoin の JSON-RPC 実装の進捗を報告し、フォーラムの急成長にも言及。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "json-rpc"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->

JSON-RPC の実装は順調に進んでいる。ソケットには boost::asio を使っている。JSON-RPC は素のソケットでも HTTP でも使えるが、他の実装のほとんどは HTTP のようなので、独自のシンプルな HTTP ヘッダーを作った。JSON のパースには JSON Spirit を使っている。STL をフル活用しており、非常に使いやすい。ヘッダーオンリーなのでビルド作業が増えることもなく、私たちのソースツリーに追加できるほど小さい。MIT ライセンスだ。あと数日で全て動くようになるはずだ。

フォーラムは確実に盛り上がっているな。こんなに早く活発になるとは思わなかった。
