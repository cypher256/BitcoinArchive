---
title: "Re: JSON-RPCパスワード"
date: 2010-07-21T17:31:09.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4775#msg4775"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCパスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/253/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 7
translationStatus: complete
---

boost::program_optionsは同じ「key=value」形式を持っています。Gavinが指摘したように、型付き値抽出のような難解なC++構文に踏み込むことなく、シンプルなパーサーとして使用できます。後で必要に応じてより多くの機能を使うことができます。

パラメータとしてのパスワードではなく、HTTPベーシック認証で進めましょう。
