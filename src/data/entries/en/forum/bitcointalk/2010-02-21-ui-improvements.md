---
title: "UI improvements"
date: 2010-02-21T21:48:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=60.msg426#msg426"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's post: \"UI improvements\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/66/"
---

Uploaded some UI changes to SVN as version 0.2.5.

Instead of View->Show Generated, we now have tabs:
- All Transactions
- Sent/Received
- Sent
- Received

Makes it a lot easier to flip to received and check for payments.

Moved the "Your Addresses" book inside the main address book.  It was confusing having two address books.

I found the "To:" in "From: unknown, To: (one of your bitcoin addresses)" still confusing, so I changed it to "From: unknown, Received with:".  The bitcoin address is abbreviated so you can see the label that you set in the Receiving tab of the address book.

Fixed a few UI glitches from the upgrade to wxWidgets 2.9.0.

I haven't forgotten about you people who want non-UI, but I had to do some fun stuff before more build bashing.
