---
title: "Re: スケーラビリティ"
date: 2010-07-14T19:23:50.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=286.msg2921#msg2921"
author: "InterArmaEnimSil"
participants:
  - name: "InterArmaEnimSil"
    slug: "interarmaenimsil"
description: "BitcoinTalkトピック286におけるInterArmaEnimSilの文脈投稿。msg2947の前。"
isSatoshi: false
threadId: "bt-scalability"
tags: []
translationStatus: complete
---

クライアントリストの維持にDHTを使うというアイデアに賛成だ――何百万人もの人がIRCチャンネル等に依存するわけにはいかない。スケーリングの問題に関しては、HDDの容量は全く問題ではなく、ネットワーク帯域幅が問題だ。皆が忘れているのは、bytes_per_transaction * transactionsではないということだ。みんなが使っているのはこの数字だが、これは誰もが言うように十分管理可能だ。いや、我々が注目すべき数字はbytes_per_transaction * transactions * number_of_clients * total_hops_beyond_first_between_all_clients_combinedだ。

これがネットワークの規模拡大に伴ってBTCプロトコルが消費する帯域幅量だ。各トランザクションのコピーを各クライアントに1つ送る話だけではない――複数のクライアントが潜在的に冗長なデータを互いにブロードキャストし、多数のホップを経由して行うため、多数の再ブロードキャストが発生する。はるかに大きな数字であり、扱いがはるかに難しい。しかし管理可能ではある。ただし、現在のクライアントのネットワーク処理の実装ではない。

おそらく「普及」段階では、BTCチェーンを地域ごとに分割できるかもしれない。現在のドメイン名管理機関の管轄と同様に。そしてこれらの地域境界を越えるトランザクション用の代替プロトコルを用意する。これは問題の絶対数を減らし、レイテンシーや関連する問題も軽減するだろう。優れた解決策だとは思わないが、量子コンピュータの大規模なブレークスルー等がない限り、すべてのアクティブクライアントへのP2Pフラッディングは明らかに不可能だ。
