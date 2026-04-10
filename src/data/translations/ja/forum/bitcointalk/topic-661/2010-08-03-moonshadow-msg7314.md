---
title: "Re: ネットワークが長期間分断された後に再接続されたらどうなるか？"
date: 2010-08-03T20:01:22.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=661.msg7314#msg7314"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
description: "BitcoinTalkトピック661におけるMoonShadowの文脈投稿。msg7356の前。"
isSatoshi: false
tags: []
translationStatus: complete
quotes:
  - id: "q1"
    person: "throughput"
    personSlug: "throughput"
    date: "2010-08-03T04:33:08.000Z"
    sourceEntryId: "forum/bitcointalk/topic-661/2010-08-03-throughput-msg7230"
---

<!-- quote: q1 -->
<!-- tone-skip -->
> はい……
> しかし、あなたが説明していることは、誰かがネットワーク分裂が起きていると気づき証明した後でのみ可能だ。
> ネットワーク分裂の始まりを検出する方法を提案しているか？
<!-- /tone-skip -->

この方向で別のスレッドを始めたが、個々の販売者にとっては、最後の公式難易度変更以降のブロック間の平均時間を追跡するシンプルなウォッチドッグデーモンが良いだろう。1つのブロックが平均の2倍以上かかった場合に販売者に警告し、販売者が状況を確認するまで新しいコインの受け入れを一時停止する。平均より長いブロックが連続するほど、偽陽性に対する信頼度が上がる。つまり、1ブロックが平均の2倍かかり、その後一連のブロックが平均の75%長くかかれば、もはや多数派ネットワーク上にいないとかなり確信できる。
