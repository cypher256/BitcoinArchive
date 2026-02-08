---
title: "Re: DEB Package?"
date: 2010-02-12T02:33:02.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=49.msg315#msg315"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"DEB Package?\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/51/"
---

Are you just trying to run the program or do you really need to compile it?  There's a 32-bit linux binary that can be run on 64-bit ubuntu if you "sudo apt-get ia32-libs".
[http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.2.0-linux.tar.gz/download](http://sourceforge.net/projects/bitcoin/files/Bitcoin/bitcoin-0.2.0-linux.tar.gz/download)

I recently updated the SVN for building on 64-bit Karmic with wxWidgets 2.9.0.  This was after the 0.2.0 release.  The 0.2.0 release did not build on 64-bit yet.

Unfortunately there currently isn't a -dev deb package of either of the versions of wxWidgets that we can use.  On Karmic they only have the UTF-16 version.  We need either the ANSI (libwxgtk2.8-ansi-dev) version or the UTF-8 (wxWidgets 2.9.0) version.  We're moving towards 2.9.0.

I know you said you didn't want VM, but as a last resort, last I checked the Windows version runs fine in Wine.
