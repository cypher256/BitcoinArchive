---
title: "ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-14T18:55:35Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014853.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "現在の最良ブランチの保留トランザクションプールのみ維持すればよいことをSatoshiが説明し、ブロック伝播におけるTCPの信頼性について議論し、システムがリバタリアンの原則に合致することに言及した。"
threadId: "bitcoin-p2p-e-cash-paper"
threadTitle: "Bitcoin P2P e-cash paper"
threadPosition: 25
isSatoshi: true
tags:
  - "pending-transactions"
  - "networking"
  - "tcp"
  - "libertarian"
  - "incentives"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/12/"
translationStatus: complete
---

Hal Finneyの投稿：
> 各候補チェーンに関連付けた別々の
> 保留トランザクションリストをノードが保持する必要があると思う。
> ... また、任意の時点でノードはいくつの候補チェーンを
> 追跡する必要があるのか平均的に尋ねたい。

幸いにも、現在の最良ブランチに対する保留トランザクションプールのみを維持すれば十分だ。新しいブロックが最良ブランチに到着すると、ConnectBlockがそのブロックのトランザクションを保留トランザクションプールから削除する。別のブランチがより長くなった場合、フォークまでのメインブランチに対してDisconnectBlockを呼び出し、ブロックのトランザクションを保留トランザクションプールに戻し、新しいブランチに対してConnectBlockを呼び出し、両方のブランチに含まれていたトランザクションを吸い上げる。このような再編成は稀で浅いものになると予想される。

この最適化により、候補ブランチは実際にはほとんど負担にならない。ディスク上に存在するだけで、メインチェーンにならない限り注意を払う必要がない。

> あるいはJamesが先に提起したように、ネットワークブロードキャストが
> 信頼性はあるが潜在的に遅いフラッディングアルゴリズムに依存している場合、
> パフォーマンスにどのような影響があるか？

ブロードキャストはほぼ完全に信頼できるだろう。TCP送信が今日ドロップされることはめったにないし、ブロードキャストプロトコルにはしばらく後に他のノードからデータを取得するリトライメカニズムがある。実際にブロードキャストが予想より遅いことが判明した場合、リソースの無駄を避けるためにブロック間の目標時間を増やす必要があるかもしれない。ブロックを生成するのにかかる時間よりもはるかに短い時間でブロックが伝播することを望んでいる。そうでなければ、ノードは廃れたブロックの作業に時間を費やしすぎることになる。

コンピュータがランダムに支払いを送信し、ランダムにパケットをドロップする自動テストを実行する予定だ。

> 3. ビットコインシステムが社会的に有用で価値あるものであると判明し、
> ノードオペレーターが自分たちの努力が世界への有益な貢献だと感じる
> （人々が善い目的のために計算資源を提供する様々な「@Home」計算
> プロジェクトに類似）。
>
> この場合、単純な利他主義がネットワークを適切に
> 稼働させ続けるのに十分であるように思われる。

適切に説明できれば、リバタリアンの視点にとって非常に魅力的だ。ただ、私は言葉よりコードの方が得意なのだが。

Satoshi Nakamoto

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
