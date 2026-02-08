---
title: "Re: Multiple Wallets, one computer"
date: 2010-10-24T19:17:51.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=665.msg18349#msg18349"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Multiple Wallets, one computer\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/497/"
---

I have the beginning of something like this.  It's mostly like what Gavin described.

Some more rpc interface:

move <fromaccount> <toaccount> <amount>
   Move from one internal account to another.  I think blank account name ("") will be your default account.  If you sell something to a user, you could do move "theiraccount" "" 123.45.
   Is "move" the best name for this?  I shied away from "transfer" because that sounds too close to sending a transaction.

I'm thinking a new function getaccountaddress instead of overloading getnewaddress:

getaccountaddress <account>
   Gives you an address allocated from getnewaddress <account>.  It'll keep giving the same address until something is received on the address, then it allocates a new address.  (It automatically does what the sample code I posted some time ago did)

Would these commands make it possible in simple cases to implement your website without needing a database of your own?
