---
title: "Re: Technical clarifications"
date: 2010-07-18T03:47:36.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=179.msg3911#msg3911"
author: "Quantumplation"
participants:
  - name: "Quantumplation"
    slug: "quantumplation"
description: "Context post by Quantumplation in BitcoinTalk topic 179. after msg1588."
isSatoshi: false
tags: []
---

The network operates on standard DHT node discovery principles.  As of yet, there is no TRUE way to COMPLETELY decentralize the node discovery (without getting stupid like scanning entire subnets for someone listening), as you must know at least one person on the network.  After you connect to that one person, they notify you of other connections, and you connect to them, etc.

The client comes with a list of "likely candidates" to be online, but there's still the chance that all of them will be offline at some point.  The IRC server is provided simply as a backup, last-ditch resort for finding ANYONE to connect to.  Try blocking the IRC port to see that it's not strictly necessary.

As for the transaction fee:

Right now, transaction fees are only used in one instance, when dealing with extremely large amounts of bitcoins in a single transaction.  Even in that case, it's extremely low (something of a fraction of a percent).

Later on, when bitcoin generation stops "paying off", people will have less of a reason for solving these blocks (and thus transactions will take more and more time to be confirmed, the target value will become easier and easier, making it more likely that an attacker can violate the system.)  In order to keep the "block generational powerhouses" in business, a small transaction fee will be introduced, to keep their profit margin ever so slightly above the electricity/cooling costs of solving said blocks.

(At least, this is my understanding from the PDF.)
