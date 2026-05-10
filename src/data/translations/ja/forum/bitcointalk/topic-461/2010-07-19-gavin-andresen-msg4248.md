---
title: "Re: JSON-RPC パスワード"
date: 2010-07-19T15:20:35.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4248#msg4248"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalk トピック 461 におけるギャビン・アンドレセンの文脈投稿。msg4268 の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

さらに調査した結果……Transmission のアプローチと、既存の「127.0.0.1 からの接続のみ許可」を組み合わせるのが、短期・中期的には良い解決策だと思う。

Bitcoin ディレクトリ内の settings.json ファイルに username:password を置く方式はうまく機能するはずだ（Bitcoin はすでに JSON をパースできるので）。認証をコマンドラインから HTTP ヘッダーに移し、JSON リクエストパラメーターの代わりにトランスポート層に置くのはすっきりしていて良い。

長期的には、認証付きセキュア JSON-RPC の「正しい」方法はクライアント側証明書と https だ。しかし、実装には多大な作業が必要で、ユーザーがクライアント側証明書の生成方法や JSON-RPC 接続の両端での使用方法を理解するのは大きな学習曲線となる。そして、本格的なクライアント証明書ソリューションが、悪意のある Javascript が XMLHttpRequests で localhost に JSON-RPC リクエストを送る問題を解決するかどうかさえ確信が持てない。もしユーザーがブラウザーにクライアント証明書をインストールしたら（JSON-RPC ベースの Web フロントエンドがあったとして）、悪意のあるウェブサイトがリクエストを送った時にブラウザーは自動的にクライアント証明書を送信するだろうか？
