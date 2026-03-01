---
title: "SPV client-mode implementation"
date: 2010-12-29T22:42:00Z
source: correspondence
sourceUrl: "https://plan99.net/~mike/satoshi-emails/thread3.html"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Mike Hearn"
    slug: "mike-hearn"
description: "Satoshi provides his most detailed explanation of SPV client-mode implementation, discusses the origin of the 21 million coin limit and 10-minute block target, and confirms the block size limit is temporary."
isSatoshi: true
threadId: "satoshi-mike-hearn-more-questions"
threadTitle: "More BitCoin questions"
threadPosition: 2
tags:
  - "correspondence"
  - "spv"
  - "client-mode"
  - "scalability"
  - "block-size"
  - "coin-supply"
  - "moores-law"
secondarySources:
  - name: "Bitcoin.com — Satoshi Archive: Mike Hearn Emails"
    url: "https://www.bitcoin.com/satoshi-archive/emails/mike-hearn/"
---

> I have been working on a Java implementation of the simplified payment verification, with an eye to building a client that runs on Android phones. So I've been thinking a lot about storage requirements and the scalability of BitCoin, which led to some questions that the paper did not answer (maybe there could be a new version of the paper at some point, as I think aspects of it are now out of date).

The simplified payment verification in the paper imagined you would receive transactions directly, as with sending to IP address which nobody uses, or a node would index all transactions by public key and you could download them like downloading mail from a mail server.

Instead, I think client-only nodes should receive full blocks so they can scan them for their own transactions. They don't need to store them or index them. For the initial download, they only need to download headers, since there couldn't be any payments before the first time the program was run (a header download command was added in 0.3.18). From then on, they download full blocks (but only store the headers).

Code for client-only mode is mostly implemented. There's a feature branch on github with it, also I'm attaching the patch to this message.

Here's some more about it:

"Here's my client-mode implementation so far. Client-only mode only records block headers and doesn't use the tx index. It can't generate, but it can still send and receive transactions. It's not fully finished for use by end-users, but it doesn't matter because it's a complete no-op if fClient is not enabled. At this point it's mainly documentation showing the cut-lines for client-only re-implementers.

With fClient=true, I've only tested the header-only initial download.

A little background. CBlockIndex contains all the information of the block header, so to operate with headers only, I just maintain the CBlockIndex structure as usual. The nFile/nBlockPos are null, since the full block is not recorded on disk.

The code to gracefully switch between client-mode on/off without deleting blk*.dat in between is not implemented yet. It would mostly be a matter of having non-client LoadBlockIndex ignore block index entries with null block pos. That would make it re-download those as full blocks. Switching back to client-mode is no problem, it doesn't mind if the full blocks are there.

If the initial block download becomes too long, we'll want client mode as an option so new users can get running quickly. With graceful switch-off of client mode, they can later turn off client mode and have it download the full blocks if they want to start generating. They should rather just use a getwork miner to join a pool instead.

Client-only re-implementations would not need to implement EvalScript at all, or at most just implement the five ops used by the standard transaction templates."

> Specifically, BitCoin has a variety of magic numbers and neither the code nor the paper explain where they came from. For example, the fact that inflation ceases when 21 million coins have been issued. This number must have been arrived at somehow, but I can't see how.

Educated guess, and the maths work out to round numbers. I wanted something that would be not too low if it was very popular and not too high if it wasn't.

> Another is the 10 minute block target. I understand this was chosen to allow transactions to propagate through the network. However existing large P2P networks like BGP can propagate new data worldwide in <1 minute.

If propagation is 1 minute, then 10 minutes was a good guess. Then nodes are only losing 10% of their work (1 minute/10 minutes). If the CPU time wasted by latency was a more significant share, there may be weaknesses I haven't thought of. An attacker would not be affected by latency, since he's chaining his own blocks, so he would have an advantage. The chain would temporarily fork more often due to latency.

> The final number I'm interested in is the 500kb limit on block sizes. According to Wikipedia, Visa alone processed 62 billion transactions in 2009. Dividing through we get an average of 2000 transactions per second, so peak rate is probably around double that at 4000 transactions/sec. With a ten minute block target, at peak a block might need to contain 2.4 million transactions, which just won't fit into 500kb. Is this 500kb a temporary limitation that will be slowly removed over time from the official client or something more fundamental?

A higher limit can be phased in once we have actual use closer to the limit and make sure it's working OK.

Eventually when we have client-only implementations, the block chain size won't matter much. Until then, while all users still have to download the entire block chain to start, it's nice if we can keep it down to a reasonable size.

With very high transaction volume, network nodes would consolidate and there would be more pooled mining and GPU farms, and users would run client-only. With dev work on optimising and parallelising, it can keep scaling up.

Whatever the current capacity of the software is, it automatically grows at the rate of Moore's Law, about 60% per year.
