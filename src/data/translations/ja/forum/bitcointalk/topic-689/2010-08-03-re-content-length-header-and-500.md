---
title: "Re: 認証、JSON RPCとPython"
date: 2010-08-03T21:26:26.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=689.msg7335#msg7335"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "サトシ・ナカモトがContent-Lengthパラメーターがない場合のサポートについて議論。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/311/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-08-03T09:56:44.000Z"
    sourceEntryId: "forum/bitcointalk/topic-689/2010-08-03-gavin-andresen-msg7299"
  - id: "q2"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-08-03T09:09:08.000Z"
    sourceEntryId: "forum/bitcointalk/topic-689/2010-08-03-jgarzik-msg7288"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> <!-- quote: q2 -->
> > bitcoinはContent-Lengthヘッダーを必要とするが、いくつかのJSON-RPCライブラリはそれを提供しない。Content-Lengthヘッダーがない場合、bitcoinは500 Internal Server Errorを返す。
> 
> Content-Lengthを提供しないJSONライブラリを具体的に教えてもらえないか？ドキュメントに記載できると助かる。
<!-- /tone-skip -->

Content-Lengthパラメーターがない場合のサポートを試みるべきだろう。ただし、ストリームを全面的に書き換えたくはない。1文字ずつ読む必要があっても構わない。

編集：つまり、Content-Lengthをサポートしないライブラリが実際にある場合の話だが。
