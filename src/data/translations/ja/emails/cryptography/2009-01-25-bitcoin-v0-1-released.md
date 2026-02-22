---
title: "ビットコイン v0.1 リリース"
date: 2009-01-25T15:47:10.000Z
source: cryptography-mailing-list
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2009-January/015041.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Hal Finney"
    slug: "hal-finney"
description: "プルーフ・オブ・ワークトークンがスパムを不採算にする経済的インセンティブを生み出すことでスパムを軽減する方法を、偽メールボックスによるリバーススパミングの概念を含めてSatoshiが議論した。"
threadId: "bitcoin-v0-1-released"
threadTitle: "Bitcoin v0.1 released"
threadPosition: 8
isSatoshi: true
tags:
  - "spam"
  - "proof-of-work"
  - "incentives"
  - "botnet"
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/18/"
translationStatus: complete
---

Hal Finneyの投稿：
> > * スパマーのボットネットは送信ごとの支払いメールフィルターを
> >   簡単に突破できるだろう
> POWトークンが有用になり、特に通貨になれば、
> マシンはもはやアイドル状態ではなくなる。ユーザーは自分の
> コンピューターが収益を上げることを期待するだろう（報酬が
> 運用コストより大きいと仮定して）。ボットネットに収益を
> 盗まれているコンピューターは、現在よりも所有者に
> 気づかれやすくなるため、その世界ではユーザーは
> コンピューターの保守とボットネット感染の駆除に
> より注力するようになるだろう。

POWトークンに価値がある場合にスパムを軽減するもう1つの要因：スパマーからPOWトークンを収穫するために、大量の偽メールアカウントを設置する金銭的動機が生まれる。本質的にスパマーに対する逆スパムであり、POWを収集しメッセージを読まない自動化されたメールボックスである。偽メールボックスと実際の人の比率がスパムのコスト効率を下回るほど高くなる可能性がある。

このプロセスにはPOWトークンの価値をそもそも確立する可能性がある。ボットネットを持たないスパマーがハーベスターからトークンを購入できるからだ。買い戻しは一時的にスパムの通過を増やすが、スパマーを搾取するハーベスターが多くなりすぎるという自滅的なサイクルを加速させるだけだろう。

興味深いことに、e-goldシステムの1つには「ダスティング」と呼ばれるスパムの形態が既に存在する。スパマーはトランザクションのコメント欄にスパムメッセージを入れるために微量の金粉を送信する。システムがユーザーに受け取り可能な最小支払額、あるいは少なくともメッセージ付きの最小額を設定できるようにすれば、ユーザーはスパムを受け取るためにいくら支払われれば良いかを設定できる。

Satoshi Nakamoto

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
