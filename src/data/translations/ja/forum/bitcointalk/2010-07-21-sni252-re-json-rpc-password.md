---
title: "Re: JSON-RPCパスワード"
date: 2010-07-21T16:07:57.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4758#msg4758"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPCパスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/252/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 6
translationStatus: complete
---

[Quote from: gavinandresen on July 21, 2010, 12:11:10 PM](https://bitcointalk.org/index.php?topic=461.msg4709#msg4709)Debianシステムの/etc内の20個の.confファイルを簡単に調査したところ:
 1ファイルが"key value"を使用
 5ファイルが"key=value"を使用
調査ありがとうございます！

「key value」は少し不自然に感じます。キーと値の間に、代入を示唆するより明確な区切りがあるべきです。スペースを使う人は、自分の言語のsplit関数を使って手を抜いているだけかもしれません。
key=some full sentence with spaces in it.  # こちらの方がより明確
key some full sentence with spaces in it.  # これよりも

それでは、自前パースのmapConfigで行きましょう。構文:
# コメント
key=value

ファイル拡張子は.conf。ファイル名は~/.bitcoin/settings.confですか、それとも~/.bitcoin/bitcoin.confですか、それとも他の何かですか？

キーと値の先頭と末尾の空白を除去した方が良いと思います。
# カラム整形が好きなユーザー
k            = value
key         = value
longerkey =   this sentence would be this    # "this sentence would be this"
        key = value   # これも大丈夫でしょう
  nextkey = value
      right = justified

通常の構文は「key=value」にすべきですが、時々「key = value」にする人を責めることはできません。
