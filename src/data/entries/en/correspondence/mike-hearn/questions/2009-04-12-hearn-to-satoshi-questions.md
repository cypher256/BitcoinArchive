---
title: "Questions about BitCoin"
date: 2009-04-12T12:46:00Z
type: "correspondence"
source: "plan99"
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread1.html"
author: "Mike Hearn"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Mike Hearn contacts Satoshi Nakamoto for the first time with questions about Bitcoin's scalability, mining hardware, inflation schedule, and coin denominations."
isSatoshi: false
tags:
  - "correspondence"
  - "first-contact"
  - "scalability"
  - "mining"
  - "inflation"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

Hi Satoshi,

I read [your paper](/BitcoinArchive/entries/emails/cryptography/bitcoin-p2p-e-cash-paper/2008-10-31-bitcoin-p2p-e-cash-paper/) on BitCoin with great interest. I found it a bit confusing though - I believe it may be easier to follow if you provide some examples.

Specifically, it's not quite clear to me what blocks contain. If I understand correctly, there is only one (or maybe a few) global chain[s] into which all transactions are hashed. If there is only one chain recording "the story of the economy" so to speak, how does this scale? In an imaginary planet-wide deployment there would be millions of even billions of transactions per hour being hashed into the chain. I realize that each PoW can wrap many transactions in one block, nonetheless, that's a large amount of data to hash. If there are many chains, how are transactions assigned to each chain such that it is still difficult to overpower the network? Eg, if there are 10 global chains, the amount of cpu power you need to beat the system is only 10% of what it was previously.

I also wonder if the assumption of 1 core = 1 vote is sound. If the majority of nodes are on standard computers, it seems likely that an attacker could use FPGA or custom ASICs to get significantly better performance. What are your thoughts on using custom hardware to beat the chain?

I found the section on incentives hard to follow. In particular, I'm not clear on what triggers the transition from minting new coins as a reason to run a node, to charging transaction fees (isn't the point of BitCoin largely to zero transaction costs anyway?). Presumably there's some human in charge of the system - eg, you decided somehow that 24 million coins was a good number to have, and would distribute some kind of rules file saying "coins minted after this timestamp must have an N+1 zero bits prefix", which honest nodes enforce.

How did you decide on the inflation schedule for v1? Where did 24 million coins come from? What denominations are these coins? You mention a way to combine and split value but I'm not clear on how this works. For instance are bitcoins always denominated by an integer or can you have fractional bitcoins?

So many questions :) But it's rare that I encounter truly revolutionary ideas. The last time I was this excited about a new monetary scheme was when I discovered Ripple. If you have any thoughts on Ripple, I'd also love to hear them.

thanks -mike
