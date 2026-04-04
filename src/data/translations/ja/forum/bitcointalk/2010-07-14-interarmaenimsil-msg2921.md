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
description: "BitcoinTalkトピック286におけるInterArmaEnimSilのコンテキスト投稿。msg2947の前。"
isSatoshi: false
tags: []
translationStatus: complete
---

クライアントリストの維持にDHTを使うアイデアを支持する――何百万人もの人がIRCチャンネルなどに依存するわけにはいかない。スケーリングの問題に関して言えば、HDDの容量は問題ではなく、ネットワーク帯域幅だ。皆忘れているが、bytes_per_transaction*transactionsではない（これは皆が使っている数字だ）。その数字は、皆が言うように完全に管理可能だ。いや、我々が関心を持つべき数字はbytes_per_transaction * transactions * number_of_clients * total_hops_beyond_first_between_all_clients_combinedだ。

これが、ネットワークがスケールするにつれてBTCプロトコルが消費する帯域幅だ。各トランザクションの1コピーを各クライアントに送信するだけではなく、複数のクライアントが互いに冗長なデータをブロードキャストし、それを複数のホップを通じて行うため、何度もリブロードキャストされる。はるかに大きな数字であり、扱いがはるかに難しい。しかし、管理は可能だ。ただし、クライアントの現在のネットワーク処理の形では無理だ。

おそらく「普及」段階では、BTCチェーンを地域ごとに分割できるかもしれない。現在のドメインネーム管理機関の管轄と同様に。そして、これらの地域境界を越えた取引には代替プロトコルを使うとか？ これは問題の生の数字を改善し、レイテンシーや関連する問題も軽減するだろう。これが優れた解決策だとは思わないが――量子コンピューティングなどの大きなブレークスルーがない限り、全アクティブクライアントへのP2Pフラッディングは明らかに無理だ。
