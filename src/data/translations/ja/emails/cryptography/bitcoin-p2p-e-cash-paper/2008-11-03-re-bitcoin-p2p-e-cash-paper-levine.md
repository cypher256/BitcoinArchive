---
title: "Re: ビットコイン P2P 電子キャッシュ論文"
date: 2008-11-03T13:32:39Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014817.html"
author: "John Levine"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "John Levine"
    slug: "john-levine"
description: "ジョン・レヴィンがビットコインの安全性前提を否定。ボットネット運営者は10万台超のゾンビファームを日常的に制御、hashcashも同理由で失敗——悪者が善人より計算力で勝る、と主張。"
inReplyTo: "emails/cryptography/2008-10-31-bitcoin-p2p-e-cash-paper"
isSatoshi: false
tags:
  - "botnet"
  - "hashcash"
  - "security"
  - "skepticism"
secondarySources:
  - name: "Satoshi Nakamoto Institute (thread view)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/"
  - name: "Mail Archive mirror"
    url: "https://www.mail-archive.com/cryptography@metzdowd.com/msg09966.html"
translationStatus: complete
---

<!-- speaker: Satoshi Nakamoto -->
> 正直なノードがネットワーク上で最も多くのCPUパワーを支配している限り、
> 最長のチェーンを生成し、いかなる攻撃者も出し抜くことができる。

<!-- speaker: John Levine -->
しかし実際にはそうなっていない。悪者は日常的に10万台以上のマシンのゾンビファームを支配している。スパム送信ゾンビのブラックリストを運用している私の知人は、1日に100万もの新しいゾンビを目にすることが珍しくないと言う。

これはhashcashが今日のインターネットで機能しないのと同じ理由だ——善人は悪者よりはるかに少ない計算能力しか持っていない。

他の点についても疑問はあるが、これが致命的な問題だ。

R's,
John
