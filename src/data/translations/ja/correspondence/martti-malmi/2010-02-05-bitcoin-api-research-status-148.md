---
title: "Re: Bitcoin API 調査状況"
date: 2010-02-05T04:08:54Z
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
description: "サトシが API 調査結果を報告し、wxWidgets のスレッド制限を指摘。Bitcoin のコマンドラインインターフェースとして XML-RPC より JSON-RPC を推す方向に。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "api"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
wxSocketServer::Accept(bool wait = true)のドキュメントでこれに気づいた:
「wait が true で、受け入れ待ちの接続がない場合、次の着信接続が到着するまで待機する。 **警告: これは GUI をブロックする。** 」

wxWidgets は病的なまでにシングルスレッドだ。単にシングルスレッドなだけでなく、GUI スレッドでなければならないのだ。wxStandardPaths のような UI 以外のものでもやられた。UI コードであれば問題ない。Windows が課す制約と同じだからだ。しかし UI 無しのサーバーデーモンコードでは、wx の呼び出しは不確実だ。

現在の調査状況:

PHP、Python などからサーバーにアクセスするには、通常のソケットを使う必要がある。localhost にのみバインドすることでローカル専用にできると思う。ループバック経由でしかアクセスできなくなる。受信した接続の IP を確認して 127.0.0.1 以外を切断するだけでも十分安全だと言われている。両方やった方がいいだろう。

XML-RPC はやや肥大化している。C++用のライブラリは 4 つあるが、どれも大きくてビルドが難しく、依存関係やライセンスの問題がある。C++や PHP の XML-RPC ライブラリはどれもバグが多いと不満を述べる人もいる。

JSON-RPC はよりシンプルでエレガントな標準だ。十分にシンプルなので汎用的な JSON パーサーが使える。

PHP、Python、Java のいずれにも、JSON-RPC の優れた実装がある。

現在、JSON-RPC に傾いている。
