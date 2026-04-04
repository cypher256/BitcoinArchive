---
title: "Re: JSON-RPCパスワード"
date: 2010-07-19T15:20:35.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4248#msg4248"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック461におけるGavin Andresenの文脈投稿。msg4268の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

さらに調査した結果……Transmissionのアプローチと、既存の「127.0.0.1からの接続のみ許可」を組み合わせるのが、短期・中期的には良い解決策だと思う。

Bitcoinディレクトリ内のsettings.jsonファイルにusername:passwordを置く方式はうまく機能するはずだ（BitcoinはすでにJSONをパースできるので）。認証をコマンドラインからHTTPヘッダーに移し、JSONリクエストパラメータの代わりにトランスポート層に置くのはすっきりしていて良い。

長期的には、認証付きセキュアJSON-RPCの「正しい」方法はクライアント側証明書とhttpsだ。しかし、実装には多大な作業が必要で、ユーザーがクライアント側証明書の生成方法やJSON-RPC接続の両端での使用方法を理解するのは大きな学習曲線となる。そして、本格的なクライアント証明書ソリューションが、悪意のあるJavascriptがXMLHttpRequestsでlocalhostにJSON-RPCリクエストを送る問題を解決するかどうかさえ確信が持てない。もしユーザーがブラウザにクライアント証明書をインストールしたら（JSON-RPCベースのWebフロントエンドがあったとして）、悪意のあるウェブサイトがリクエストを送った時にブラウザは自動的にクライアント証明書を送信するだろうか？
