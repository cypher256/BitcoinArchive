---
title: "Re: Bitcoinの自動renice"
date: 2010-03-15T18:44:12.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=72.msg717#msg717"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Bitcoinの自動renice」スレッドにおけるSatoshi Nakamotoの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/90/"
threadId: "bt-bitcoin-auto-renice-ing"
threadTitle: "bitcoin auto-renice-ing"
threadPosition: 1
translationStatus: complete
---

各スレッドに異なる優先度を設定しています。生成スレッドはPRIO_MINで実行されます。他のスレッドはCPUをほとんど使用せず、通常の優先度で実行されます。

#define THREAD_PRIORITY_LOWEST          PRIO_MIN
#define THREAD_PRIORITY_BELOW_NORMAL    2
#define THREAD_PRIORITY_NORMAL          0

Windowsの優先度から変換された優先度は、おそらく以下のようなテーブルに基づいています：

   「以下のテーブルはnice値とWin32優先度の対応を示しています。Win32の優先度に関する詳細はSetThreadPriority()のWin32ドキュメントを参照してください。

nice値        Win32優先度
-20 to -16    THREAD_PRIORITY_HIGHEST
-15 to -6    THREAD_PRIORITY_ABOVE_NORMAL
-5 to +4    THREAD_PRIORITY_NORMAL
+5 to +14    THREAD_PRIORITY_BELOW_NORMAL
+15 to +19    THREAD_PRIORITY_LOWEST」

より良い値があれば、提案を歓迎します。

また、Linuxではスレッドがプロセスであるためにプロセスに使用されるPRIO_PROCESSについてのウェブ上のアドバイスがありました。それが正しくない場合、アプリ全体の優先度を予期せず設定してしまっている原因かもしれません。

    // Linuxではスレッドはプロセスなので、PRIO_PROCESSは1つのスレッドだけに影響する
    setpriority(PRIO_PROCESS, getpid(), nPriority);
