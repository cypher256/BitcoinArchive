---
title: "Re: ビットコイン v0.1 リリース - スパム、POWトークン、リバース・スパミング"
date: 2009-01-25T10:03:21Z
source: correspondence
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "サトシがハル・フィニーのボットネットと送金時課金型メールに関する指摘に応答し、偽のメールボックスがスパマーのPOWトークンを回収することで「リバース・スパミング」を行い、自滅的なサイクルを生み出すという経済的議論を提案した。また、e-goldの「ダスティング」スパム問題についても言及した。"
isSatoshi: true
threadId: "satoshi-dustin-trammell"
threadPosition: 20
tags:
  - "correspondence"
  - "spam"
  - "proof-of-work"
  - "pay-to-send"
  - "economics"
  - "hal-finney"
  - "e-gold"
secondarySources:
  - name: "Bitcoin Wiki - Trammell/Nakamoto Emails"
    url: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
  - name: "Dustin Trammell's Blog"
    url: "https://blog.dustintrammell.com/"
translationStatus: complete
---

サトシとトランメルの書簡における最後のメールで、前回のやり取りから約1週間後に送信された。サトシはプルーフ・オブ・ワークトークンに価値がある場合のスパムの経済学について論じた。ハル・フィニーが、価値のあるPOWトークンはボットネット感染をコンピュータの所有者にとってより気づきやすいものにするだろうと指摘した観察を引用した。

サトシはその後、新しい経済的対抗メカニズムである「リバース・スパミング」を提案した：

> Another factor that would mitigate spam if POW tokens have value: there would be a profit motive for people to set up massive quantities of fake e-mail accounts to harvest POW tokens from spam. They'd essentially be reverse-spamming the spammers with automated mailboxes that collect their POW and don't read the message. The ratio of fake mailboxes to real people could become too high for spam to be cost effective.

サトシは、このプロセスが逆説的にトークンの価値を確立するのに役立つ可能性があると述べた：

> The process has the potential to establish the POW token's value in the first place, since spammers that don't have a botnet could buy tokens from harvesters. While the buying back would temporarily let more spam through, it would only hasten the self-defeating cycle leading to too many harvesters exploiting the spammers.

サトシはまた既存のシステムとの類似点を指摘し、e-goldでは既に「ダスティング」と呼ばれるスパムの一形態が存在しており、スパマーがトランザクションのコメント欄にメッセージを含めるために微量のゴールドダストを送金していたことに言及した。その解決策として、設定可能な最低支払い閾値を提案した。

このメールはサトシの最も創造的な経済的思考の一つを表している。ゲーム理論をスパム経済学に適用し、プルーフ・オブ・ワークシステムにおいて市場の力がいかに自然に悪用を軽減しうるかを示した。

*出典：2013年11月にダスティン・トランメルにより公開。完全な書簡はBitcoin Wiki（en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails）にアーカイブされている。*
