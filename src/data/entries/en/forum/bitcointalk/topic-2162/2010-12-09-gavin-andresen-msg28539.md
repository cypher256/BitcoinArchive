---
title: "Re: Version 0.3.18"
date: 2010-12-09T14:51:07.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=2162.msg28539#msg28539"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 2162. before msg28549."
isSatoshi: false
tags: []
---

[Quote from: chaord on December 09, 2010, 07:17:12 AM](#msg28448)
> by default disallow non-standard transactions that exceed 128 bytes (or whatever threshold is agreeable)?
> 
> I would like to hear why the above option was thrown out by the developers.

Several months ago, around the time when the 0.3.9 bugs were found, I privately told Satoshi that I thought whitelisting acceptable transaction types was a better way to go, rather than blacklisting transaction types that we find out cause problems.

The danger is similar websites that try to blacklist <script> tags in HTML entered by users to prevent cross-site-scripting hacks.  See http://ha.ckers.org/xss.html for a nice sampling of how creative hackers can be.

I haven't asked Satoshi if the recent discussion of BitDNS putting extra data in the block chain swayed his opinion or if he woke up in the middle of the night and realized that a creative use of OP_SOMETHING might lead to an exploit.  I don't think it matters; I'm still convinced that whitelisting acceptable transaction types is the right thing to do.

As for "the above option was thrown out by the developers"  -- **nothing** has been thrown out!  Again, I haven't talked to Satoshi, but I'm open to the idea of a third 'standard' transaction type that includes extra, arbitrary data.   Lets have that discussion, implement it on the -testnet, poke at it, try to imagine all the possible ways it can be misused, try to estimate the benefits and costs... and if there's general consensus that it is a good idea, roll it into production.
