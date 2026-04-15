---
title: "BitCoinに関する質問"
date: 2009-04-12T12:46:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "マイク・ハーンがサトシ・ナカモトに初めて連絡を取り、Bitcoinのスケーラビリティ、マイニングハードウェア、インフレスケジュール、コインの額面について質問する。"
isSatoshi: false
tags:
  - "correspondence"
  - "first-contact"
  - "scalability"
  - "mining"
  - "inflation"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
relatedEntries:
  - aftermath/2009-04-12-mike-hearn-biography
  - aftermath/2011-04-23-mike-hearn-satoshi-email-exchange
  - aftermath/2017-08-11-mike-hearn-publishes-emails
translationStatus: complete
---

<!-- speaker: Mike Hearn -->
Satoshiさん、こんにちは。

あなたの[BitCoinに関する論文](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/)を大変興味深く読んだ。しかし少し分かりにくいと感じた――いくつかの例を示してもらえれば、より理解しやすくなると思う。

具体的には、ブロックに何が含まれているのかがよく分からない。私の理解が正しければ、すべてのトランザクションがハッシュ化されるグローバルなチェーンは1つ（あるいはいくつか）だけだ。いわば「経済の物語」を記録するチェーンが1つしかないとすれば、どのようにスケールするのだろうか？仮に地球規模で展開された場合、毎時数百万、あるいは数十億のトランザクションがチェーンにハッシュ化されることになる。各PoWが1つのブロックに多くのトランザクションをまとめられることは理解しているが、それでもハッシュ化するデータ量は膨大だ。もし複数のチェーンがある場合、ネットワークを圧倒することが依然として困難であるように、トランザクションは各チェーンにどのように割り当てられるのだろうか？例えば、10個のグローバルチェーンがある場合、システムを打ち負かすために必要なCPUパワーは以前の10%に過ぎない。

また、1コア＝1票という前提が妥当かどうかも疑問に思う。ノードの大多数が標準的なコンピューター上にある場合、攻撃者がFPGAやカスタムASICを使用して大幅に優れたパフォーマンスを得られる可能性が高いように思える。カスタムハードウェアを使ってチェーンを打ち負かすことについて、どのようにお考えだろうか？

インセンティブに関するセクションは理解しにくいと感じた。特に、ノードを運営する理由として新しいコインを鋳造することから、取引手数料を課すことへの移行が何によって引き起こされるのかが明確ではない（そもそもBitCoinの要点は取引コストをゼロにすることではないのだろうか？）。おそらくシステムを管理する人間がいて――例えばあなたが2,400万枚のコインが適切な数だと何らかの方法で決定し、「このタイムスタンプ以降に鋳造されたコインはN+1のゼロビットプレフィックスを持たなければならない」というルールファイルを配布し、正直なノードがそれを強制するのだろう。

v1のインフレスケジュールはどのように決定されたのだろうか？2,400万枚のコインという数字はどこから来たのだろうか？これらのコインの額面は何だろうか？価値を結合・分割する方法について言及されているが、これがどのように機能するのかよく分からない。例えば、ビットコインは常に整数で表されるのか、それとも小数のビットコインを持つことができるのだろうか？

質問がたくさんだ :) しかし、真に革命的なアイデアに出会うことは稀だ。新しい通貨スキームにこれほど興奮したのは、Rippleを発見して以来だ。Rippleについて何かお考えがあれば、ぜひ聞かせてほしい。

よろしく。 -mike
