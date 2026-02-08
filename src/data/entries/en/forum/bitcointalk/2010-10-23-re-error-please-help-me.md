---
title: "Re: ERROR - PLEASE HELP ME!"
date: 2010-10-23T18:22:49.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1530.msg18241#msg18241"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"ERROR - PLEASE HELP ME!\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/493/"
---

[Quote from: theymos on October 21, 2010, 10:00:26 PM](https://bitcointalk.org/index.php?topic=1530.msg17955#msg17955)his block count remains "stuck" at 1698.
He was generating invalid blocks at difficulty 1.0.  He must have a corrupted entry in his blk0001.dat or blkindex.dat file.  He just needs to delete blk*.dat and let it redownload.

The safety lockdown detected the problem and was displaying "WARNING: Displayed transactions may not be correct!" because it saw a longer chain existed that it was unable to accept.  The safety lockdown cannot stop generation or it would create an attack possibility.

[Quote from: gavinandresen on October 22, 2010, 02:25:14 PM](https://bitcointalk.org/index.php?topic=1530.msg18074#msg18074)The Bitcoin client really shouldn't allow coin generation until you have all of the blocks up to the last block checkpoint.
Good idea, I made a change to make sure it won't generate before checkpoint block 74000.
