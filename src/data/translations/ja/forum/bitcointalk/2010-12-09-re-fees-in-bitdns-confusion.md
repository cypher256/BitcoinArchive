---
title: "Re: BitDNSの手数料に関する混乱"
date: 2010-12-09T23:58:54.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=2181.msg28729#msg28729"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「BitDNSの手数料に関する混乱」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/534/"
translationStatus: complete
---

locktimeではない。

将来のための可能な設計がある：

意図的に二重支払いを書き込む。同じ入力と出力で書き込むが、今回は手数料付きだ。二重支払いがブロックに入ると、最初の支払いは無効になる。新しいトランザクションが有効になった瞬間に古いものが無効になり、新しいトランザクションが単にその場所を取るだけなので、受取人は実際には気づかない。

言うは易く行うは難しだ。二重支払いを正しく書き込むクライアントを作り、どちらかが選ばれるまでウォレット内で2つのバージョンを管理し、すべてのコーナーケースを処理するには、かなりの量の作業が必要だろう。既存コードのすべての前提は、二重支払いを書き込もうとしていないということだ。

Bitcoin Miner側にもいくつかの変更が必要で、入力と出力が一致しトランザクション手数料が高い場合にのみ厳密に、二重支払いをトランザクションプールに受け入れる可能性を作る必要がある。現在、二重支払いはトランザクションプールに受け入れられることはなく、すべてのノードは最初に見たトランザクションをブロックに入れるよう作業することで、どのトランザクションを最初に見たかを証明する。
