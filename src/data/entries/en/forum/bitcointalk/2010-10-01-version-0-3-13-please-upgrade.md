---
title: "Version 0.3.13, please upgrade"
date: 2010-10-01T00:34:35.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1327.msg14788#msg14788"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"Version 0.3.13, please upgrade\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/472/"
threadId: "bt-version-0-3-13-please-upgrade"
threadTitle: "Version 0.3.13, please upgrade"
threadPosition: 1
---

Version 0.3.13 is now available.  You should upgrade to prevent potential problems with 0/unconfirmed transactions.  Note: 0.3.13 prevents problems if you haven't already spent a 0/unconfirmed transaction, but if that already happened, you need 0.3.13.2.

Changes:
- Don't count or spend payments until they have 1 confirmation.
- Internal version number from 312 to 31300.
- Only accept transactions sent by IP address if -allowreceivebyip is specified.
- Dropped DB_PRIVATE Berkeley DB flag.
- Fix problem sending the last cent with sub-cent fractional change.
- Auto-detect whether to use 128-bit 4-way SSE2 on Linux.
Gavin Andresen:
- Option -rpcallowip= to accept json-rpc connections from another machine.
- Clean shutdown on SIGTERM on Linux.

Download:
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.13/](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.3.13/)

(Thanks Laszlo for the Mac OSX build!)

Note:
The SSE2 auto-detect in the Linux 64-bit version doesn't work with AMD in 64-bit mode.  Please try this instead and let me know if it gets it right:
[http://www.bitcoin.org/download/bitcoin-0.3.13.1-specialbuild-linux64.tar.gz](http://www.bitcoin.org/download/bitcoin-0.3.13.1-specialbuild-linux64.tar.gz)

You can still control the SSE2 use manually with -4way and -4way=0.

Version 0.3.13.2 (SVN rev 161) has improvements for the case where you already had 0/unconfirmed transactions that you might have already spent.  Here's a Windows build of it:
[http://www.bitcoin.org/download/bitcoin-0.3.13.2-win32-setup.exe](http://www.bitcoin.org/download/bitcoin-0.3.13.2-win32-setup.exe)
