---
title: "Not a suggestion"
date: 2010-08-09T20:45:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=770.msg8477#msg8477"
author: "Red"
participants:
  - name: "Red"
    slug: "red"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Red starts a discussion: Not a suggestion."
isSatoshi: false
threadId: "bt-not-a-suggestion"
tags: []
---

As some might have noticed, one of the things that bugs me about bitcoin is that the entire history of transactions is completely public. I totally understand the benefits of how this simplifies things and makes it easy for everyone to prove coins are valid. 

So this is not a suggestion for a change to bitcoin. Rather it is a question about what could be possible, and what couldn't be possible.

The general question is, could the block list be/have been implemented in a way that didn't store the full transactions in the list? Specifically, *perhaps* it would be possible to store only hashes of the in-points, out-points in the block list. These would be time stamped (notarized) in the blocklist exactly as is being done now.

The major difference is that it would be the coin receiver's responsibility to store the full transaction. And perhaps he might have to store previous transactions (X) deep to show history.

Then when he wanted to transfer the coins to the next party, he would create a transaction exactly as is being done now, except he would have to submit the antecedents to the transaction for validation as well. For validation, each antecedent of the in-points would be hashed and validated as existing in the block list. The in-points would be hashed and identified in the blocklist as not yet spent. Then the transaction would be validated as is currently done.

If everything validated correctly, the additional in/out-point hashes would be added to the block. This closes the transaction's in-points, and marks the new out-point hashes as unspent.

Once a node completes the block (by winning the hashing contest), he then broadcasts the block of hashes and the related transactions+plus antecedents to the other nodes for confirmation and acceptance.

as a rough example:

{block-9
 hash-a, hash-b, hash-c, hash-x 
}
{block-12
 hash-a, hash-y, hash-c, hash-d 
}
{block-17
 hash-b, hash-d, hash-e, hash-z, hash-f 
}

{Transaction
 {in-points: hash-x, hash-y, hash-z}
 {address, signature and other transactions stuff}
 {out-points: hash-payed, hash-change
}
 
{generating-block
 hash-x, hash-y, hash-z, hash-payed, hash-change
}

So basically, if the i/o-point hash existed twice in the block list, it has been spent. If it exists only once it has not been spent.

So in after block-17: 
  a, b, c & d are spent. 
  e, f, x, y, z are unspent.

The transaction spends x, y & z and creates hash-payed & hash-change, so the transaction is valid.

After the generating-block:
  a, b, c, d, x, y, & z are spent. 
  e, f, payed, change are unspent.

====
The Goal: 

The goal is to provide all the same security of the existing system, but to avoid creating a public graph of every transaction that is easily correlated. In this case, the hashes don't even have to associate in the block. The block could simply sort all hashes in ascending order.

In effect, I want to create real gold coins. I can give my coins to you, but everyone in the world doesn't know I did. You can give them to the next guy and prove they are pure gold coins, because you have the pedigree of the coins AND every generation in the pedigree was notarized in the public record.

====
The Question:

Satoshi showed that you can remove transactions from the block list through the Merkle tree structure, without compromising security. I guess my real question is: 

"What is the earliest you can remove the transactions?"

You could argue that nodes could remember everything anyway (the web never forgets). But if you structured the protocol so that new nodes would only receive a block list of hashes, they could only remember from this moment forward. That would give a little additional privacy. (Maybe)

====
Any thoughts? Is there an obvious way that people could cheat and get rich?
