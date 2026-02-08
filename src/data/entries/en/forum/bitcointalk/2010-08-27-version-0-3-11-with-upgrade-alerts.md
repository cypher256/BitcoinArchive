---
title: "Version 0.3.11 with upgrade alerts"
date: 2010-08-27T21:54:12.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=941.msg11439#msg11439"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"Version 0.3.11 with upgrade alerts\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/429/"
---

Version 0.3.11 is now available.

Changes:
- Some blk*.dat checking on load
- Built the -4way code with -march=amdfam10, which makes it a little faster
- Warning if your clock is too far off
- Warnings/errors/alerts can also be seen in the getinfo command
- Alert system

The alert system can display notifications on the status bar to alert you if you're running a version that needs to be upgraded for an important security update.

In response to an alert, your node may also go into safe mode, which disables the following json-rpc commands (used by automated websites) to protect it from losing money until you get a chance to upgrade:
 sendtoaddress
 getbalance
 getreceivedbyaddress
 getreceivedbylabel
 listreceivedbyaddress
 listreceivedbylabel

If you decide it's a false alarm and want to take your chances, you can use the switch -disablesafemode to re-enable them.

This is an important safety improvement.  For a large segment of possible problems, this can warn everyone immediately once a problem is discovered and prevent them from acting on bad information.

Nodes keep operating and do not stop generating in response to an alert, so old versions may still try to make a fork, but the alert system can make sure users are warned not to act on anything in the fork.

Download:
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.11/](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.11/)
