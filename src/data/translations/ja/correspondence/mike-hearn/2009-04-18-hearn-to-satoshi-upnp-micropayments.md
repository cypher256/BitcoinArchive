---
title: "BitCoinに関する質問"
date: 2009-04-18T23:23:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike HearnがUPnPによるポートフォワーディングを提案し、バージョン通知について質問し、EV SSL証明書を使用したウェブブラウザ向けマイクロペイメントシステムを提案する。"
isSatoshi: false
threadId: "satoshi-mike-hearn-questions"
threadTitle: "Questions about BitCoin"
threadPosition: 13
tags:
  - "correspondence"
  - "upnp"
  - "micropayments"
  - "ssl"
  - "browser-extension"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
translationStatus: complete
---

はい、ほとんどのP2Pクライアントはルーターに自動的にポートを開かせるためにUPnPプロトコルを使用していると思います。これでリッスン率が大幅に向上するでしょう。自分のルーターでDMZが有効になっていなかったことに気付きましたが、有効だと思っていました。今は修正しました。

新しいバージョンを知らせてもらう方法はありますか？アプリは自動更新しますか？繰り返しになりますが、何らかのメーリングリストがあれば素晴らしいです。

ここ数日、ウェブ向けの実用的なマイクロペイメント実装がどのように機能するかについて考えていました。重要な問題の一つは、マイクロペイメントを完全に自動化しつつ、ユーザーの口座を容易に使い果たすような悪用ができないようにすることです。正しいアプローチは、EV SSL証明書を提示するウェブサイトがマイクロペイメントを自動的に要求できるようにし、課金が「低額」である限りブラウザがデフォルトで常に承認し、何が起きたかの小さな通知を表示することだと思います。サイトは、サイトデザインに合った任意の方法でコンテンツに支払いが必要であることを示せます。シンプルなガイドライン（例：リンクをクリックすると支払いが発生することを明確に示す、検索エンジンからの直接リンクで課金しない等）を満たさない悪質なサイトは、フィッシング対策フィルターと同様にSSL証明書をブラックリストに載せるだけです。

プロトコルは非常にシンプルで、Firefoxの拡張機能やIEのBHOで実装できます。何らかの静的ファイル（例：protocol buffer）がサイトにホストされます。それは課金額、トランザクションの説明、ターゲットIP、およびトランザクションがターゲットノードに受け入れられた後にブラウザが読み込むURLを指定し、ユーザー識別子がURLパラメータで送信されます。サイトはCookieとペイウォールコンテンツを返すことができます。プロセス全体は自動的で、例えばURLバーに小さなコインのアニメーションが表示されるだけです。したがって、通常のウェブブラウジングと同様に便利です。ユーザーのソフトウェアには、自動的に承認される支払いに何らかの制限があります。

このアプローチの主な問題は、誰かがユーザーインターフェースのガイドラインを決定し、ブラックリストによってそれを強制し、さらにどの支払い要件が自動承認に十分低いか、ユーザープロンプトが必要かを決定しなければならないことです。これにより信頼された権威がシステムに再導入されます。しかし、ユーザーがオープンマーケットで選択できるものです。

ところで、もしノード間通信にまだprotocol buffersを使用していないのであれば、お勧めします。ここGoogleでは全てに使用しており、多くのバージョニングの問題をシンプルかつ効率的に解決します。
