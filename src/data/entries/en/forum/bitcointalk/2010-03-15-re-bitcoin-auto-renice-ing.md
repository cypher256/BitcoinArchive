---
title: "Re: bitcoin auto-renice-ing"
date: 2010-03-15T18:44:12.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=72.msg717#msg717"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"bitcoin auto-renice-ing\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/90/"
threadId: "bt-bitcoin-auto-renice-ing"
threadTitle: "bitcoin auto-renice-ing"
threadPosition: 1
---

It sets different priorities for each thread.  The generate threads run at PRIO_MIN.  The other threads rarely take any CPU and run at normal.

#define THREAD_PRIORITY_LOWEST          PRIO_MIN
#define THREAD_PRIORITY_BELOW_NORMAL    2
#define THREAD_PRIORITY_NORMAL          0

The priorities converted from Windows priorities were probably from a table like this:

   "The following table shows the mapping between nice values and Win32 priorities. Refer to the Win32 documentation for SetThreadPriority() for more information on Win32 priority issues.

nice value    Win32 Priority
-20 to -16    THREAD_PRIORITY_HIGHEST
-15 to -6    THREAD_PRIORITY_ABOVE_NORMAL
-5 to +4    THREAD_PRIORITY_NORMAL
+5 to +14    THREAD_PRIORITY_BELOW_NORMAL
+15 to +19    THREAD_PRIORITY_LOWEST"

If you have better values, suggestions welcome.

Also, there was some advice on the web that PRIO_PROCESS is used on Linux because threads are processes.  If that's not true, maybe it accounts for unexpectedly setting the priority of the whole app.

    // threads are processes on linux, so PRIO_PROCESS affects just the one thread
    setpriority(PRIO_PROCESS, getpid(), nPriority);
