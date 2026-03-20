---
title: "Re: Bitcoin API調査状況"
date: 2010-02-05T04:08:54Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがAPI調査結果を報告し、wxWidgetsのスレッド制限を指摘。Bitcoinのコマンドラインインターフェースとして XML-RPCよりJSON-RPCを推す方向に。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
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

<!-- speaker: Satoshi Nakamoto -->
wxSocketServer::Accept(bool wait = true)のドキュメントでこれに気づいた:
「waitがtrueで、受け入れ待ちの接続がない場合、次の着信接続が到着するまで待機する。**警告: これはGUIをブロックする。」

wxWidgetsは病的なまでにシングルスレッドだ。単にシングルスレッドなだけでなく、GUIスレッドでなければならないのだ。wxStandardPathsのようなUI以外のものでもやられた。UIコードであれば問題ない。Windowsが課す制約と同じだからだ。しかしUI無しのサーバーデーモンコードでは、wxの呼び出しは不確実だ。

現在の調査状況:

PHP、Pythonなどからサーバーにアクセスするには、通常のソケットを使う必要がある。localhostにのみバインドすることでローカル専用にできると思う。ループバック経由でしかアクセスできなくなる。受信した接続のIPを確認して127.0.0.1以外を切断するだけでも十分安全だと言われている。両方やった方がいいだろう。

XML-RPCはやや肥大化している。C++用のライブラリは4つあるが、どれも大きくてビルドが難しく、依存関係やライセンスの問題がある。C++やPHPのXML-RPCライブラリはどれもバグが多いと不満を述べる人もいる。

JSON-RPCはよりシンプルでエレガントな標準だ。十分にシンプルなので汎用的なJSONパーサーが使える。

PHP、Python、Javaのいずれにも、JSON-RPCの優れた実装がある。

現在、JSON-RPCに傾いている。

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
