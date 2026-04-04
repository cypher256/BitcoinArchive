---
title: "Re: Fees in BitDNS confusion"
date: 2010-12-09T21:41:58.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2181.msg28704#msg28704"
author: "RHorning"
participants:
  - name: "RHorning"
    slug: "rhorning"
  - name: "davout"
    slug: "davout"
description: "RHorning explains that transaction replacement is theoretically possible via the version field, though not yet implemented in the UI. Once a transaction is included in a block, cancellation becomes impractical."
isSatoshi: false
inReplyTo: "forum/bitcointalk/2010-12-09-davout-re-fees-in-bitdns-confusion"
tags:
  - "transaction-fees"
  - "transaction-replacement"
---

Yes, although I don't think the canceled transaction protocol is necessarily complete in terms of its current implementation.

See also:
http://www.bitcoin.org/wiki/doku.php?id=bitcoins_draft_spec_0_0_1#tx

The 'version' field allows somebody to send out a new transaction that effectively replaces an existing transaction with perhaps some new data.  As long as the transaction hasn't been accepted into a block, in theory you can 'recall' the transaction and modify the transaction in any way.

Like I said, this is incomplete and the exact protocol to pull that off hasn't been included into Bitcoin yet.  But it certainly is a possibility and may be a feature in a future version of Bitcoin.

Certainly the ability to 'recall' a transaction hasn't been implemented yet in the UI, and once the transaction has been accepted into a block the only hope to really kill a transaction after that is to hope that the block doesn't get accepted into the main block chain.

Then again, if the transaction has been accepted into a block without fees it shouldn't be a problem in terms of recalling the transaction for adding fees either as the issue is moot at that point.
