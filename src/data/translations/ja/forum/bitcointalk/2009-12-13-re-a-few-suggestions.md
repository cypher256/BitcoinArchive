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
threadPosition: 5
translationStatus: complete
---

実行時にUIなしで動作させるためのコマンドラインスイッチがある。メインウィンドウを作成しないだけだ。簡単な方法としては、ui.cppの「pframeMain->Show」と「ptaskbaricon->Show」を無効にすることだ。ネットワークスレッドはUIが存在しなくても気にしない。他のUIはCheckDiskSpaceでディスク容量が不足した場合のメッセージボックスだけだ。

次に、操作を行うために通信する別のコマンドラインユーティリティを用意する。名前を何にすべきかはまだわからない。

「自然デフレーション」... 良い名前だな。はい、支払いのミスやデータの紛失により自然デフレーションが発生する。コインの生成は最終的に自然デフレーションを下回るほど遅くなり、純デフレーションが起こることになる。
