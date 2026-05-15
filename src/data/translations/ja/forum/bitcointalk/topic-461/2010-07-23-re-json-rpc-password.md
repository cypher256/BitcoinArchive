---
title: "Re: JSON-RPC パスワード"
date: 2010-07-23T17:07:40.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg5337#msg5337"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「JSON-RPC パスワード」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/255/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-07-23T06:11:45.000Z"
    sourceEntryId: "forum/bitcointalk/topic-461/2010-07-23-gavin-andresen-msg5296"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> 皆に質問だ：HTTP Basic認証のやり方を詳しく説明するセクションをwikiページに追加すべきだろうか？ PHPとPythonでは [http://user:pass@host:port/](http://user:pass@host:port/) というURL構文を使うだけで非常に簡単にできる。
<!-- /tone-skip -->

はい、各開発者が自分で調べなくて済むように、それは本当に良いと思う。Python、PHP、Java それぞれで json-rpc ライブラリをインポートして getinfo などを実行する簡単な例が必要だ。HTTP 認証部分も含めて。
