---
title: "Re: いくつかの提案"
date: 2009-12-13T16:51:25.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg62#msg62"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「いくつかの提案」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/22/"
threadId: "bt-a-few-suggestions"
threadTitle: "A few suggestions"
threadPosition: 5
translationStatus: complete
---

実行時にUIなしで動作させるためのコマンドラインスイッチがあります。メインウィンドウを作成しないだけです。簡単な方法としては、ui.cppの「pframeMain->Show」と「ptaskbaricon->Show」を無効にすることです。ネットワークスレッドはUIが存在しなくても気にしません。他のUIはCheckDiskSpaceでディスク容量が不足した場合のメッセージボックスだけです。

次に、操作を行うために通信する別のコマンドラインユーティリティを用意します。名前を何にすべきかはまだわかりません。

「自然デフレーション」... 良い名前ですね。はい、支払いのミスやデータの紛失により自然デフレーションが発生します。コインの生成は最終的に自然デフレーションを下回るほど遅くなり、純デフレーションが起こることになります。
