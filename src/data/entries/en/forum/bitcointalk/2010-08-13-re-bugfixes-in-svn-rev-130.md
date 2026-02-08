---
title: "Re: Bugfixes in SVN rev 130"
date: 2010-08-13T03:15:23.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=795.msg8960#msg8960"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Bugfixes in SVN rev 130\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/353/"
threadId: "bt-bugfixes-in-svn-rev-130"
threadTitle: "Bugfixes in SVN rev 130"
threadPosition: 2
---

No, that's not what it is.

-paytxfee allows you to include a transaction fee with your transactions.  If transaction confirmations become slow, you can get priority by using "-paytxfee=0.01".  Any transactions you send would cost an extra 0.01.  There's no reason to use more than 0.01.

It's just there in case we need it.  It probably won't be needed, and it can be explained more if we do.
