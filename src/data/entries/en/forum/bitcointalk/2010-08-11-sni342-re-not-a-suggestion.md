---
title: "Re: Not a suggestion"
date: 2010-08-11T21:07:59.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=770.msg8798#msg8798"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Not a suggestion\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/342/"
threadId: "bt-not-a-suggestion"
threadTitle: "Not a suggestion"
threadPosition: 3
---

Still thinking this idea through...

The only job the network needs to do is to tell whether a spend of an outpoint is the first or not.

If we're willing to have clients keep the history for their own money, then some of the information may not need to be stored by the network, such as:
- the value
- the association of inpoints and outpoints in one transaction

The network would track a bunch of independent outpoints.  It doesn't know what transactions or amounts they belong to.  A client can find out if an outpoint has been spent, and it can submit a satisfying inpoint to mark it spent.  The network keeps the outpoint and the first valid inpoint that proves it spent.  The inpoint signs a hash of its associated next outpoint and a salt, so it can privately be shown that the signature signs a particular next outpoint if you know the salt, but publicly the network doesn't know what the next outpoint is.

I believe the clients would have to keep the entire history back to the original generated coins.  Someone sending a payment would have to send data to the recipient, as well as still communicating with the network to mark outpoints spent and check that the spend is the first spend.  Maybe the data transfer could be done as an e-mail attachment.

The fact that clients have to keep the entire history reduces the privacy benefit.  Someone handling a lot of money still gets to see a lot of transaction history.  The way it retrospectively fans out, they might end up seeing a majority of the history.  Denominations could be made granular to limit fan-out, but a business handling a lot of money might still end up seeing a lot of the history.
