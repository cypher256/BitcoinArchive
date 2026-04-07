---
title: "Re: JSON-RPCパスワード"
date: 2010-07-21T16:07:57.000Z
type: "forum-post"
source: "bitcointalk"
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
translationStatus: complete
quotes:
  - id: "q1"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-07-21T03:11:10.000Z"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> Linuxには「典型的な」設定ファイルというものはないと思う！
<!-- /tone-skip -->

 1ファイルが"key value"を使用
 5ファイルが"key=value"を使用
調査ありがとう！

「key value」は少し不自然に感じる。キーと値の間に、代入を示唆するより明確な区切りがあるべきだ。スペースを使う人は、自分の言語のsplit関数を使って手を抜いているだけかもしれない。
```
key=some full sentence with spaces in it.  # こちらの方がより明確
key some full sentence with spaces in it.  # これよりも
```

それでは、自前パースのmapConfigで行こう。構文:
```
# コメント
key=value
```

ファイル拡張子は.conf。ファイル名は~/.bitcoin/settings.confか、それとも~/.bitcoin/bitcoin.confか、それとも他の何かか？

キーと値の先頭と末尾の空白を除去した方が良いと思う。
```
# カラム整形が好きなユーザー
k            = value
key         = value
longerkey =   this sentence would be this    # "this sentence would be this"
        key = value   # これも大丈夫だろう
  nextkey = value
      right = justified
```

通常の構文は「key=value」にすべきだが、時々「key = value」にする人を責めることはできない。
