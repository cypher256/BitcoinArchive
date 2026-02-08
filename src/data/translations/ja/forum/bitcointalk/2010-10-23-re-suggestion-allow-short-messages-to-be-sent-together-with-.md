---
title: "Re: 提案：ビットコインと一緒に短いメッセージを送れるようにする？"
date: 2010-10-23T19:02:57.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1545.msg18250#msg18250"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「提案：ビットコインと一緒に短いメッセージを送れるようにする？」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/496/"
translationStatus: complete
---

ECDSAはメッセージを暗号化できません。署名のみ可能です。

全員が見られるように平文メッセージを永続的に記録するのは賢明ではありません。事故が起きるのを待っているようなものです。

メッセージシステムを作るなら、ビットコインネットワークと並行する別のシステムにすべきです。メッセージはブロックチェーンに記録すべきではありません。メッセージは、誰からのものかを証明するためにビットコインアドレスの鍵ペアで署名できるでしょう。
