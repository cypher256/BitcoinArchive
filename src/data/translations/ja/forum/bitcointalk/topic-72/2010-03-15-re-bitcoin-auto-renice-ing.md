---
title: "Re: Bitcoin の自動 renice"
date: 2010-03-15T18:44:12.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=72.msg717#msg717"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "「Bitcoin の自動 renice」スレッドにおけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/90/"
translationStatus: complete
---

各スレッドに異なる優先度を設定している。生成スレッドは PRIO_MIN で実行される。他のスレッドは CPU をほとんど使用せず、通常の優先度で実行される。

#define THREAD_PRIORITY_LOWEST          PRIO_MIN
#define THREAD_PRIORITY_BELOW_NORMAL    2
#define THREAD_PRIORITY_NORMAL          0

Windows の優先度から変換された優先度は、おそらく以下のようなテーブルに基づいている：

<!-- tone-skip -->
   「以下のテーブルは nice 値と Win32 優先度の対応を示しています。Win32 の優先度に関する詳細は SetThreadPriority()の Win32 ドキュメントを参照してください。

nice 値        Win32 優先度
-20 to -16    THREAD_PRIORITY_HIGHEST
-15 to -6    THREAD_PRIORITY_ABOVE_NORMAL
-5 to +4    THREAD_PRIORITY_NORMAL
+5 to +14    THREAD_PRIORITY_BELOW_NORMAL
+15 to +19    THREAD_PRIORITY_LOWEST」
<!-- /tone-skip -->

より良い値があれば、提案を歓迎する。

また、Linux ではスレッドがプロセスであるためにプロセスに使用される PRIO_PROCESS についてのウェブ上のアドバイスがあった。それが正しくない場合、アプリ全体の優先度を予期せず設定してしまっている原因かもしれない。

    // Linux ではスレッドはプロセスなので、PRIO_PROCESS は 1 つのスレッドだけに影響する
    setpriority(PRIO_PROCESS, getpid(), nPriority);
