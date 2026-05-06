---
title: "Re: ビットコイン v0.1 リリース - スパム、POWトークン、リバース・スパミング"
date: 2009-01-25T10:03:21Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシがハル・フィニーのボットネット指摘に応答し、偽メールボックスがスパマーのPOWトークンを回収する「リバース・スパミング」 案を提示。e-goldの「ダスティング」 問題にも言及。"
isSatoshi: true
tags:
  - "correspondence"
  - "spam"
  - "proof-of-work"
  - "pay-to-send"
  - "economics"
  - "hal-finney"
  - "e-gold"
secondarySources:
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

<!-- speaker: narrator -->
サトシとトランメルのやり取りにおける最後のメールで、前回のやり取りから約1週間後に送信された。サトシはプルーフ・オブ・ワークトークンに価値がある場合のスパムの経済学について論じた。[ハル・フィニー](/BitcoinArchive/ja/participants/hal-finney/)が、価値のあるPOWトークンはボットネット感染をコンピューターの所有者にとってより気づきやすいものにするだろうと指摘した観察を引用した。

サトシはその後、新しい経済的対抗メカニズムである「リバース・スパミング」を提案した：

<!-- speaker: Satoshi Nakamoto -->
> POWトークンに価値がある場合、スパムを軽減するもう一つの要因がある。スパムからPOWトークンを回収するために大量の偽メールアカウントを作成する利益動機が生まれるのである。実質的に、POWを回収しメッセージを読まない自動メールボックスによってスパマーにリバース・スパミングを行うことになる。偽メールボックスと実際の人間の比率が高くなりすぎて、スパムの費用対効果が合わなくなる可能性がある。

<!-- speaker: narrator -->
サトシは、このプロセスが逆説的にトークンの価値を確立するのに役立つ可能性があると述べた：

<!-- speaker: Satoshi Nakamoto -->
> このプロセスはそもそもPOWトークンの価値を確立する可能性を持っている。ボットネットを持たないスパマーが回収者からトークンを購入できるためである。買い戻しによって一時的にスパムが増加するが、それはスパマーを搾取する回収者が多くなりすぎるという自滅的サイクルを加速させるだけである。

<!-- speaker: narrator -->
サトシはまた既存のシステムとの類似点を指摘し、e-goldでは既に「ダスティング」と呼ばれるスパムの一形態が存在しており、スパマーがトランザクションのコメント欄にメッセージを含めるために微量のゴールドダストを送金していたことに言及した。その解決策として、設定可能な最低支払い閾値を提案した。

このメールはサトシの最も創造的な経済的思考の一つを表している。ゲーム理論をスパム経済学に適用し、プルーフ・オブ・ワークシステムにおいて市場の力がいかに自然に悪用を軽減しうるかを示した。
