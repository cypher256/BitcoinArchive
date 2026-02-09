---
title: "返信: Bitcoin API調査状況"
date: 2010-02-05T04:08:54Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "wxSocketServer::Accept(bool wait = true)のドキュメントでこれに気づきました。wxWidgetsは病的なまでにシングルスレッドです。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 148
tags:
  - "correspondence"
  - "early-contributor"
  - "api"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

wxSocketServer::Accept(bool wait = true)のドキュメントでこれに気づきました:
「waitがtrueで、受け入れ待ちの接続がない場合、次の着信接続が到着するまで待機します。**警告: これはGUIをブロックします。」

wxWidgetsは病的なまでにシングルスレッドです。単にシングルスレッドなだけでなく、GUIスレッドでなければならないのです。wxStandardPathsのようなUI以外のものでもやられました。UIコードであれば問題ありません。Windowsが課す制約と同じですから。しかしUI無しのサーバーデーモンコードでは、wxの呼び出しは不確実です。

現在の調査状況:

PHP、Pythonなどからサーバーにアクセスするには、通常のソケットを使う必要があります。localhostにのみバインドすることでローカル専用にできると思います。ループバック経由でしかアクセスできなくなります。受信した接続のIPを確認して127.0.0.1以外を切断するだけでも十分安全だと言われています。両方やった方がいいでしょう。

XML-RPCはやや肥大化しています。C++用のライブラリは4つありますが、どれも大きくてビルドが難しく、依存関係やライセンスの問題があります。C++やPHPのXML-RPCライブラリはどれもバグが多いと不満を述べる人もいます。

JSON-RPCはよりシンプルでエレガントな標準です。十分にシンプルなので汎用的なJSONパーサーが使えます。

PHP、Python、Javaのいずれにも、JSON-RPCの優れた実装があります。

現在、JSON-RPCに傾いています。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
