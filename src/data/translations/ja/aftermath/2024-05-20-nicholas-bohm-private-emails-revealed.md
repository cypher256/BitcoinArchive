---
title: "COPA 証拠で判明したニコラス・ボームとサトシの未公開メール"
date: 2024-05-20T00:00:00Z
source: aftermath
sourceUrl: "https://bitcoindefense.org/assets/documents/COPA-v-Wright-Main-Judgment.pdf"
author: "Nicholas Bohm"
participants:
  - name: "Nicholas Bohm"
    slug: "nicholas-bohm"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "ニコラス・ボームは、これまで2009年1月の bitcoin-list における公開バグ報告で知られていたが、COPA v Wright の証拠開示により、実際にはサトシと私信でも継続的にやり取りしていたことが判明した。提出資料には、ルーター設定、ポート8333、'not accepted' ブロック、2009年7月時点のネットワークの極端な小ささに関するやり取りが含まれている。"
isSatoshi: false
aftermathType: "court-testimony"
tags:
  - "nicholas-bohm"
  - "copa-trial"
  - "email-archive"
  - "bitcoin-list"
  - "network"
  - "early-adopter"
secondarySources:
  - name: "Hugging Face — COPA v Wright raw trial documents"
    url: "https://huggingface.co/datasets/YL95/copa_v_wright_CPT_raw"
  - name: "decashed.eth — Node IP Disclosed in COPA/Wright Case Likely Belonged to Dustin Trammell"
    url: "https://decashed.eth.loan/2025/03/node-ip-disclosed-in-copa-wright-case-likely-belonged-to-dustin-trammel/"
  - name: "Satoshi Nakamoto Institute — Re: [bitcoin-list] Problems"
    url: "https://satoshi.nakamotoinstitute.org/emails/bitcoin-list/24/"
translationStatus: complete
---

**COPA v Wright** の裁判記録から見えてきた発見のひとつが、**ニコラス・ボーム** に関するものだ。

裁判以前、ニコラス・ボームは主に 2009年1月25日の bitcoin-list 投稿で知られていた。そこではソフトウェアの問題を報告し、サトシは `debug.log` を直接送ってほしいと返信していた。だが、2024年5月の Mellor 判決は、さらに重要な事実を明記している。

> 「ボーム氏は、これまで公表されていなかったサトシとのメール通信の証拠を提出した」

これは重要である。なぜなら、公開メーリングリストで姿が見えていた参加者が、その後も何か月にもわたりサトシと私信でやり取りしていたことを意味するからだ。

**新たに開示されたメールが示すこと：**

提出資料によれば、ニコラス・ボームとサトシは 2009年を通じて、実際のノード運用上の問題について直接メールを交わしていた。

- **2009年6月4日**、ニコラス・ボームは新しいルーターを導入して以来、Bitcoin が接続できなくなったと報告した。
- **2009年6月5日**、サトシは **ポート8333** を転送設定して、ノードが着信接続を受けられるようにすべきだと返信した。オンラインのノードが誰も着信を受けられなければ、接続できなくなるとも説明している。
- **2009年7月18日〜19日**、ニコラス・ボームは「ここ1日ほど」接続が一切確立できないと報告した。これに対しサトシは、IPアドレスが変わったのではないかと尋ね、さらにこう述べた。

> 「今は、他に誰も動かしていないだけなのかもしれない」

サトシはまた、もし新しい利用者が来たときに誰にも接続できないと諦めてしまうかもしれないので、サーバーを動かし続けてほしいとも勧めていた。

他の提出資料の断片からは、ニコラス・ボームが "Generated +50.10" の異常表示を報告していたことや、サトシが "not accepted" ブロックと、それを UI 上で隠す案について論じていたことも分かる。

*[これらの提出資料が重要なのは、サトシの未公開メールが増えたからだけではない。2009年半ばの時点で、ネットワークがいかに小さく脆弱だったかを具体的に示しているからでもある。また、「bitcoin-list で一度やり取りしただけの人物」ではなく、ニコラス・ボームが継続的な私信相手でもあったことを明確にしている。]*
