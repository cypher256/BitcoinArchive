---
title: "Re: (quoted post by Gavin Andresen)"
date: 2010-09-27T15:14:55.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=665.msg14254#msg14254"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Quoted post by Gavin Andresen in BitcoinTalk topic 665."
isSatoshi: false
threadId: "bt-multiple-wallets-one-computer"
tags: []
translationStatus: pending
---

The "label" mechanism (setlabel / getreceivedbylabel) is supposed to meet this need, but only solves part of the problem.

If the API was extended as I describe below, would it solve the same problems as having multiple wallets?

Proposal:

+ new send method: send TO a given bitcoin address specifically FROM the bitcoins sent to <label>
  (change generated would be automatically tagged with <label>)
+ add optional [label] param to getbalance.
+ new method: listsentbylabel
  (returns array of [ "address" : "bcaddresssentto", "amount" : x.yz, "confirmations": n ]) 

Each customer "account" would be a bitcoin <label>.  Account handling would look like:

Create account / create new address for account:
  getnewaddress [account_id_label]
   ... tell user "fund your account by sending coins to {the address returned}"

Customer withdraws/spends:
  sendfrom [account_id_label] [address] [amount]
   (FAILS if balance for that account too low)

Show customer their balance:
  getbalance [account_id_label]

Show customer their transactions in/out
  listreceivedbylabel [account_id_label]
  listsentbylabel [account_id_label]

---------

Seems to me this would be a much better direction to go in, rather than having separate wallet.dat files for each customer.  At the very least, backing up thousands of customer's wallet files would be inefficient and error-prone, and constantly switching between them would also be incredibly inefficient.
