---
title: "Questions about BitCoin"
date: 2009-04-19T02:14:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Satoshi provides the bitcoin-list mailing list info, agrees with Mike's micropayment approach, and explains why he chose a custom serialization format over protocol buffers for security reasons."
isSatoshi: true
threadId: "satoshi-mike-hearn-questions"
tags:
  - "correspondence"
  - "mailing-list"
  - "micropayments"
  - "protocol-buffers"
  - "sourceforge"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

The list is:<br>
bitcoin-list@lists.sourceforge.net<br>
Subscribe/unsubscribe page:<br>
http://lists.sourceforge.net/mailman/listinfo/bitcoin-list<br>
Archives:<br>
http://sourceforge.net/mailarchive/forum.php?forum_name=bitcoin-list

I'll always announce new versions there. Automatic update, or at least notification of new versions, is definitely on the list. There could potentially be necessary changes in the future where nobody will want to talk to you until you upgrade, and there needs to be code in the older version to convey that to the user. This is all the harder in the context of not trusting anyone.

Your approach to micropayments sounds right. At first, it might be a good idea to default to asking permission until the user gets comfortable and is ready to set it to automatic. The end goal though should get to something like you describe, where it's similar to using your cell phone without really having to think about the per minute charges.

I looked at Google protocol buffers when they were released last year, but I had already written everything by then. What I did was something similar to Boost Serialisation. For this application, where I was parsing messages from strangers who might have extreme incentive to hack the protocol, it was necessary to make it as basic as possible so I could crawl over every line of code to convince myself it was airtight. It became clear that any unnecessary degrees of freedom in the binary format multiplied the potential angles of attack. You guys are so right though to standardize across the company on protocol buffers. I think you've got the optimal solution in the general case.
