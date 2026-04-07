---
title: "Re: URI-scheme for bitcoin"
date: 2010-05-01T13:40:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg1039#msg1039"
author: "DataWraith"
participants:
  - name: "DataWraith"
    slug: "datawraith"
description: "Context post by DataWraith in BitcoinTalk topic 55. after msg481."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Karmicads"
    date: "2010-05-01T06:06:53.000Z"
    sourceEntryId: "forum/bitcointalk/topic-55/2010-05-01-karmicads-msg1038"
---

> Before this can happen there needs to be a consensus about what form the URI would take. [snip] ...the most suitable scheme, seems to be the magnet URI, which was designed to find a resource by the hash being a product of its content uniqueness, rather than by specific address.
> [snip]The beauty of magnet is that it can be shared and is open in that sense.

I think that using magnet-links just because they are already somewhat popular does not outweigh the disadvantages. Magnet links were designed to reference a file or set of files on peer-to-peer networks, and as such all well-known parameters refer to files (file name, size, etc.). Bitcoin would have to rely on application-specific xBitcoin-parameter(s), and since we probably don't want to mix files with bitcoin transactions in a single link, there's no really compelling reason not to use our own, seperate format, especially since magnet-links aren't officially recognized either.

QuoteIn the process of investigating URI's I was reminded of freenet and the magnet like system they use, and I ended up back there checking it out. [snip] Couldn't this be used for hooking the URI into a rich database of application specific data, that has been designed for the publishers own website functionality or business system? While your bitcoin node takes care of the actual transaction, the freenet node takes care of the individual data presented.
Woah! Going from a lightweight URL-handler that brings up the Bitcoin client to requiring Freenet is a bit of a leap. This really should be optional.

However, it really would be very nice to add additional information to a transaction. Building on ec's initial post, and the need for further details, I think we should have the following url parameters (or shorter versions of them):

- address: An address to send bitcoins to. Since one can hand out different addresses to different people, this can also define the sender.
- amount (optional): The amount to send.
- message (optional): A short message that describes the transaction (same as the field in the Bitcoin client)
- details (optional): An encoded URL with further details of the transaction. For a purchase in an online shop, this could link to the details of the purchase for example. Since this would be a full-featured URL in itself, you could also link to freenet, i2p and tor to keep things anonymous.
