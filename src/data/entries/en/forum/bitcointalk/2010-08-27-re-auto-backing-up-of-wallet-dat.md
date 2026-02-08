---
title: "Re: auto backing up of wallet.dat"
date: 2010-08-27T01:13:42.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=921.msg11345#msg11345"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"auto backing up of wallet.dat\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/423/"
---

If you read it into memory and write it out, it could fail in tight memory situations. 

I'm looking for something like copyfile(const char* from, const char* to) or copyfile(path from, path to), preferably something in Boost if it has it.  If you find it for me, it's more likely I'll get to implementing it.

[Quote from: nelisky on August 26, 2010, 01:21:57 AM](https://bitcointalk.org/index.php?topic=921.msg11232#msg11232)As for the file copy, why add to the boost dependency? I for one would love to get a core lib with very little deps.
We require Boost for JSON and a dozen things replacing dependencies on wxWidgets.  Boost is good, portable stuff, we should not shy away from it.
