---
title: "bitcoind without wxWidgets"
date: 2010-07-26T17:23:33.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=576.msg5904#msg5904"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"bitcoind without wxWidgets\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/278/"
---

I replaced the last of the few wxBase dependencies in bitcoind.

bitcoind now compiles without wxWidgets or wxBase in SVN rev 112.

main(int argc, char* argv[]) is added to init.cpp.  CMyApp and the Startup folder stuff are moved to ui.cpp.  ui.cpp and uibase.cpp aren't linked by bitcoind.

The makefiles have -DGUI to control whether the GUI is used.

I test compiled MinGW, VC and Ubuntu.  I don't know if I broke the Mac OSX build, someone will need to check that.
