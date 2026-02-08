---
title: "Re: auto backing up of wallet.dat"
date: 2010-08-27T02:54:07.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=921.msg11350#msg11350"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"auto backing up of wallet.dat\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/424/"
threadId: "bt-auto-backing-up-of-wallet-dat"
threadTitle: "auto backing up of wallet.dat"
threadPosition: 3
---

I doubt there's an mmap(2) on Windows.  I'd rather call an existing file copy function than make and test my own.

[Quote from: nelisky on August 27, 2010, 01:21:09 AM](https://bitcointalk.org/index.php?topic=921.msg11346#msg11346)But if you are already using features from boost::filesystem you can use copy_file from that. I just think that, if not already required for something else, it's a tad overkill.
Thanks.  I thought it would be in there somewhere.

We already use boost::filesystem in a dozen places.  It's not a new added dependency.  It gives us a lot of portable stuff that we would otherwise have to have a #ifdef for each OS and test everywhere.
