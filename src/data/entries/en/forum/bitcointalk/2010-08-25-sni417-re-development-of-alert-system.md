---
title: "Re: Development of alert system"
date: 2010-08-25T17:59:30.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=898.msg11158#msg11158"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Development of alert system\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/417/"
threadId: "bt-development-of-alert-system"
threadTitle: "Development of alert system"
threadPosition: 7
---

[Quote from: nelisky on August 25, 2010, 01:28:32 AM](https://bitcointalk.org/index.php?topic=898.msg11092#msg11092)So what kind of warning do admins get from bitcoind? Is there something we can grep from debug.log? Or will rpc calls raise some specific error? Is there a way to locally force this to happen, for unittesting services?
getinfo has a new field that shows any alert messages or other errors that would be displayed on the status bar.

The rpc methods return a json-rpc error with the error description "Safe mode: " followed by additional text specified by the alert.

I added the switch "-testsafemode" for you.  SVN rev 145.

This stuff is very new and may still be subject to change.

[Quote from: mizerydearia on August 25, 2010, 12:11:50 AM](https://bitcointalk.org/index.php?topic=898.msg11079#msg11079)I just discovered [http://www.bitcoin.org/wiki/doku.php?id=man_page](http://www.bitcoin.org/wiki/doku.php?id=man_page) and don't see any reference to -disablesafemode.  Perhaps it should be added!  Also others liek -4way should be added as well.
Many switches are intentionally undocumented, like if their functionality is still under construction or I haven't settled on their name yet, or just test code not intended for release.

-4way should eventually be replaced by an auto-detect.
