---
title: "Re: Some testing that I did on the testnetwork, my findings."
date: 2010-11-13T23:25:26.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1668.msg21896#msg21896"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Some testing that I did on the testnetwork, my findings.\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/501/"
---

Thank you for limiting flood tests to the testnet.

Version 0.3.15 combines several features to help legitimate transactions jump the queue during a flood attack.  The key was Gavin's idea for prioritising transactions based on the age of their dependencies.  Every coin is entitled to turn over so often.  The longer waited, the more priority accumulates.  Priority is sum(valuein * age) / txsize.  Transaction fee still takes precedence over priority, and priority determines the order of processing within a fee strata.

In support of the priority feature, SelectCoins only uses your own 0 conf transactions only as a last resort if that's all you have left.  This helps keep you from turning your coins over rapidly unless you're forcing it by actually turning all your coins over rapidly.
