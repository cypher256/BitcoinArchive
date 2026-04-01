---
title: "Re: A few suggestions"
date: 2009-12-10T14:00:17.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg44#msg44"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "Context post by The Madhatter in BitcoinTalk topic 12. before msg50."
isSatoshi: false
threadId: "bt-a-few-suggestions"
tags: []
---

Most modern P2P software tries UPnP by default. You can (of course) disable it (usually) in the options.

Hmm. I had thought about that as well. Your first idea is probably best. That way you can run the server daemon "headless" and have your choice of a front end. (One of the front ends could be a PHP [or C++ CGI] program that runs on your favorite webserver).

This would also enable you to run the front end and back end on different machines. (Ex. headless on a linux server that has a static IP to make receiving payments easier [pay by ip mode] and a front end client for management that can be ran on windows/mac/or something else). Front ends can also be ran on clients with very low cpu power such as mobile phones. *nudge nudge* Wink

One other thing I have thought of is the seeding. The app could be pre-seeded before downloading. You could prepare a new archive daily that is pre-seeded. That would do away with the IRC connection. (Or it could be used as a fallback, I suppose. I still haven't audited the IRC connection code. I am thinking of a few exploits but I don't want to mention them until I am sure they exist.) Pre-seeding would also cure the TOR+IRC problem. I know that people will want to run this system over I2P+TOR. Tongue

Also you could pre-seed the blocks so they won't have to be downloaded upon initial run. (Downloading 28,000 blocks on a slower ADSL takes forever I couldn't imagine how long it would take when there are millions of blocks -- a lifetime).

Can you give me CVS access or something? (If not, can I send you patches?) I'd like to help out. I am mostly a Linux/BSD guy and I would like to lend my expertise in those areas.

Cheers! Smiley

[Quote from: satoshi on December 09, 2009, 06:45:10 PM](https://bitcointalk.org/index.php?topic=12.msg41#msg41)
> I'm looking forward to trying UPnP.  Do most P2P clients typically have UPnP enabled by default?
> 
> I'm still thinking about how best to structure the management interface.  Maybe command line commands to communicate with the background daemon to query transactions received and initiate sending transfers.  That would be more automation friendly.  Or what about an http interface on some port other than 80 to manage it with a browser?
