---
title: "Re: Source code documentation"
date: 2010-07-18T15:48:27.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg4005#msg4005"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
description: "Context post by AndrewBuck in BitcoinTalk topic 393. after msg3828."
isSatoshi: false
tags: []
---

So basically what you are saying is that the program you are writing, one which you expect people to do banking and financial transactions with, should have undocumented interfaces available only to the people who dig through the sourcecode -- and then even then after finding these interfaces they should have no indication of whether they are meant to be there (and were left out of the docs by accident) or whether they could be removed/changed at any time.

The -printblock command is an excellent interface for other people to build frameworks that want to study the usage and scalability of the client.  The -noirc command would be good for privacy concerned people who want to limit how much they advertise their presence on the network.  The -dropmessagetest would be very useful to the guy who built a modified client with a new blockchain to form a test network for security/scalability testing.  All of these are "for developers only" according to your definition, even though they are quite useful.

I have spent the last week setting up a build environment, learning your codebase, helping people on IRC, and writing tools to make the bitcoinmarket function more effectively.  In addition to that I spent ~2 days preparing the man page so others wouldn't have to spend as much time doing the same thing.  I did this with the intention of improving the client as well as the protocol since I think the idea behind the program is a brilliant one.  Frankly however, given your approach to the open-source development process, I am beginning to think my time would be better spent elsewhere.

I have posted the current version of the man page to the wiki here if anyone is interested in using it.  I may or may not continue to develop the client, but will likely continue to work with Dwdollar on the market stuff.

-Buck
