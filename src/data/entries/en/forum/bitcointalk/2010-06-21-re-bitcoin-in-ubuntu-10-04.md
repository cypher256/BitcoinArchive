---
title: "Re: Bitcoin in Ubuntu 10.04"
date: 2010-06-21T17:20:21.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=149.msg1646#msg1646"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Bitcoin in Ubuntu 10.04\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/130/"
---

[Quote from: NewLibertyStandard on May 23, 2010, 04:28:12 PM](https://bitcointalk.org/index.php?topic=149.msg1203#msg1203)Bitcoin looks ugly in Ubuntu's new default theme. It seems that some, but not all of the theme settings are being picked up. The unselected file menu should have light text with a dark background, but it incorrectly has light text with a light background. They're similar enough that it's unreadable on my display. It should be fixed before the next stable release.
This is now fixed in the SVN version.
1) Menu bar default color.
2) Balance bar not a different color.
3) Background behind bitcoin address and balance now the same color as toolbar.

I checked all the standard themes and it seems reasonable with all of them.

Ubuntu minimize,maximize,close buttons to the right:
gconf-editor
apps->metacity->general
button_layout=menu:minimize,maximize,close

They've got it awfully buried considering 9 out of 10 users are used to having it on the right.
