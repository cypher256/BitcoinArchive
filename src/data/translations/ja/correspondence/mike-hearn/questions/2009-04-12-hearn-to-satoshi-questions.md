---
title: "マイク・ハーンからサトシへの最初の質問（2009-04-12）"
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
description: "マイク・ハーンがサトシ・ナカモトに初めて連絡を取り、ビットコインのスケーラビリティ、マイニングハードウェア、インフレスケジュール、コインの額面について質問する。"
isSatoshi: false
tags:
  - "correspondence"
  - "first-contact"
  - "scalability"
  - "mining"
  - "inflation"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://web.archive.org/web/20240809162549/https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
relatedEntries:
  - aftermath/2009-04-12-mike-hearn-biography
  - aftermath/2011-04-23-mike-hearn-satoshi-email-exchange
  - aftermath/2017-08-11-mike-hearn-publishes-emails
translationStatus: complete
---

<!-- speaker: Mike Hearn -->
Satoshi さん、こんにちは。

あなたの[ビットコインに関する論文](/BitcoinArchive/ja/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/)を大変興味深く読んだ。しかし少し分かりにくいと感じた――いくつかの例を示してもらえれば、より理解しやすくなると思う。

具体的には、ブロックに何が含まれているのかがよく分からない。私の理解が正しければ、すべてのトランザクションがハッシュ化されるグローバルなチェーンは 1 つ（あるいはいくつか）だけだ。いわば「経済の物語」を記録するチェーンが 1 つしかないとすれば、どのようにスケールするのだろうか？仮に地球規模で展開された場合、毎時数百万、あるいは数十億のトランザクションがチェーンにハッシュ化されることになる。各 PoW が 1 つのブロックに多くのトランザクションをまとめられることは理解しているが、それでもハッシュ化するデータ量は膨大だ。もし複数のチェーンがある場合、ネットワークを圧倒することが依然として困難であるように、トランザクションは各チェーンにどのように割り当てられるのだろうか？例えば、10個のグローバルチェーンがある場合、システムを打ち負かすために必要な CPU パワーは以前の 10%に過ぎない。

また、1 コア＝1 票という前提が妥当かどうかも疑問に思う。ノードの大多数が標準的なコンピューター上にある場合、攻撃者が FPGA やカスタム ASIC を使用して大幅に優れたパフォーマンスを得られる可能性が高いように思える。カスタムハードウェアを使ってチェーンを打ち負かすことについて、どのようにお考えだろうか？

インセンティブに関するセクションは理解しにくいと感じた。特に、ノードを運営する理由として新しいコインを鋳造することから、取引手数料を課すことへの移行が何によって引き起こされるのかが明確ではない（そもそも BitCoin の要点は取引コストをゼロにすることではないのだろうか？）。おそらくシステムを管理する人間がいて――例えばあなたが 2,400 万枚のコインが適切な数だと何らかの方法で決定し、「このタイムスタンプ以降に鋳造されたコインは N+1 のゼロビットプレフィックスを持たなければならない」というルールファイルを配布し、正直なノードがそれを強制するのだろう。

v1 のインフレスケジュールはどのように決定されたのだろうか？2,400 万枚のコインという数字はどこから来たのだろうか？これらのコインの額面は何だろうか？価値を結合・分割する方法について言及されているが、これがどのように機能するのかよく分からない。例えば、ビットコインは常に整数で表されるのか、それとも小数のビットコインを持つことができるのだろうか？

質問がたくさんだ :) しかし、真に革命的なアイデアに出会うことは稀だ。新しい通貨スキームにこれほど興奮したのは、リップルを発見して以来だ。リップルについて何かお考えがあれば、ぜひ聞かせてほしい。

よろしく。 -mike
