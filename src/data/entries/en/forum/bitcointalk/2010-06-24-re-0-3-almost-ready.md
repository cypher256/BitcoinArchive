---
title: "Re: 0.3 almost ready"
date: 2010-06-24T17:40:05.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=199.msg1748#msg1748"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"0.3 almost ready\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/144/"
---

Here's RC1 for linux for testing:
(link removed, see below)

It contains both 32-bit and 64-bit binaries.

Recent changes:

build-unix.txt:
- Added instructions for building wxBase, which is needed to compile bitcoind.
- The package libboost-dev doesn't install anything anymore, you need to get libboost-all-dev.
- Updated version numbers.

makefile.unix:
- The libboost libraries have removed the "-mt" from their filenames in 1.40.  If you're compiling with Boost 1.38 or lower, like on Ubuntu Karmic, you would need to change it back to boost_system-mt and boost_filesystem-mt.
