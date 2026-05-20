---
title: "Re: ビットコイン v0.1 リリース - スパム、POW トークン、リバース・スパミング"
date: 2009-01-25T10:03:21Z
type: "article"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "2013 年 11 月にダスティン・トランメルにより公開"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシがハル・フィニーのボットネット指摘に応答し、偽メールボックスがスパマーの POW トークンを回収する「リバース・スパミング」 案を提示。e-gold の「ダスティング」 問題にも言及。"
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
relatedEntries:
  - correspondence/dustin-trammell/2009-01-25-satoshi-to-trammell-spam-pow
  - aftermath/2009-01-11-dustin-trammell-biography
translationStatus: complete
---

<!-- speaker: narrator -->
サトシとトランメルのやり取りにおける最後のメールで、前回のやり取りから約 1 週間後に送信された。サトシはプルーフ・オブ・ワークトークンに価値がある場合のスパムの経済学について論じた。[ハル・フィニー](/BitcoinArchive/ja/participants/hal-finney/)が、価値のある POW トークンはボットネット感染をコンピューターの所有者にとってより気づきやすいものにするだろうと指摘した観察を引用した。

サトシはその後、新しい経済的対抗メカニズムである「リバース・スパミング」を提案した：

<!-- speaker: Satoshi Nakamoto -->
> POW トークンに価値がある場合にスパムを軽減するもう 1 つの要因：スパマーから POW トークンを収穫するために、大量の偽メールアカウントを設置する金銭的動機が生まれる。本質的にスパマーに対する逆スパムであり、POW を収集しメッセージを読まない自動化されたメールボックスだ。偽メールボックスと実際の人の比率がスパムのコスト効率を下回るほど高くなる可能性がある。

<!-- speaker: narrator -->
サトシは、このプロセスが逆説的にトークンの価値を確立するのに役立つ可能性があると述べた：

<!-- speaker: Satoshi Nakamoto -->
> このプロセスには POW トークンの価値をそもそも確立する可能性がある。ボットネットを持たないスパマーがハーベスターからトークンを購入できるからだ。買い戻しは一時的にスパムの通過を増やすが、スパマーを搾取するハーベスターが多くなりすぎるという自滅的なサイクルを加速させるだけだろう。

<!-- speaker: narrator -->
サトシはまた既存のシステムとの類似点を指摘し、e-gold では既に「ダスティング」と呼ばれるスパムの一形態が存在しており、スパマーがトランザクションのコメント欄にメッセージを含めるために微量のゴールドダストを送金していたことに言及した。その解決策として、設定可能な最低支払い閾値を提案した。

このメールはサトシの最も創造的な経済的思考の一つを表している。ゲーム理論をスパム経済学に適用し、プルーフ・オブ・ワークシステムにおいて市場の力がいかに自然に悪用を軽減しうるかを示した。
