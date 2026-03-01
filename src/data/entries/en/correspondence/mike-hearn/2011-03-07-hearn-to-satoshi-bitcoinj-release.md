---
title: "BitcoinJ open-source release and protocol questions"
date: 2011-03-07T14:13:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread4.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearn announces the open-source release of BitcoinJ under the Apache 2 license, and asks about merkle branch verification, scripting language ideas, and why transaction replacement was disabled."
isSatoshi: false
threadId: "satoshi-mike-hearn-bitcoinj"
threadTitle: "Open sourced my Java SPV impl"
threadPosition: 1
tags:
  - "correspondence"
  - "bitcoinj"
  - "open-source"
  - "spv"
  - "merkle-branch"
  - "script-language"
  - "transaction-replacement"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Hi Satoshi,

I hope you are doing well. I finally got all the lawyers happy enough to release BitCoinJ under the Google name using the Apache 2 license:

http://www.bitcoin.org/smf/index.php?topic=4236.0

It's incomplete - notably it doesn't properly handle block chain splits yet - but the rest is coming. I put a lot of work into documentation and comments so hopefully it'll open up BitCoin to a new audience who weren't able to understand/build the current code. Over the next month or two I'll be finishing off some of the bigger missing pieces for a full client-mode implementation.

I know you are busy right now but I'm hoping you can find time to answer a few questions I had.

As part of doing full SPV I'm thinking of adding a getmerklebranch message to the protocol. This would return a set of {blockhash, branch} pairs given tx hashes, so allowing verification of a broadcast transaction before it was incorporated into a block without storing the full chain. Does that approach sound good to you?

Also, I've been thinking of exploring different transaction types lately, eg by removing the IsStandard() checks for the testnet. It's clear you put a lot of thought into transactions beyond simply moving coins around up front, but unfortunately none of it was in the paper or documented in the code. Escrow, multi-pay and so on are all interesting but I was wondering if you could compile a list of ideas for things we can do with the scripting language at some point.

Finally, the code that allows for transaction replacement has been disabled but the comment doesn't say why. Is this just to reduce the attack surface/complexity or is there a deeper reason? I haven't fully understood why sequence numbers are a property of the tx inputs rather than the tx itself.

Hope you can find the time/energy to rejoin us soon! I don't know if you've seen this:

http://bitcoin.sipa.be/speed-lin.png

but it's exciting times for the network!

thanks!
/mike
