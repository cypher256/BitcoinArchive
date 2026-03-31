---
title: "Re: A few suggestions"
date: 2009-12-11T04:59:19.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg47#msg47"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "Context post by The Madhatter in BitcoinTalk topic 12. quoted by msg50."
isSatoshi: false
threadId: "bt-a-few-suggestions"
tags: []
translationStatus: pending
---

Okay, let me get registered on SF and get you my username. I haven't used SF in years so I'll have to familiarize myself. Will this give me access to the current branch you fellows are currently working on? (0.2)

I have been trying to think of the options that will be needed for the backend process. I wonder which would be better: a long set of command line switches or a configuration file. Hmm...

I have a lot of servers spread across the globe. If we can get to the point where we have a working backend process that will run on FreeBSD I can run always-on seeds.

I really think that having the download package contain a daily seed snapshot will improve the bootstrapping. I have seen instances on new test installs here where the application will sit with 0 connections / 1 block. Upon inspecting the debug.log I find that the IRC server (freenode, I believe) claims I am already connected and refuses to let me seed the application. (Just an example).

I think that a simple network monitor plugin for Nagios would be helpful as well. Something that can emulate a connecting client, and retrieve a valid status code from the backend process. I have a lot of ideas. Smiley

In any event, I would like to help. I have a lot of time and a project like this one is very exciting.

Thanks for letting me be a part of it. Smiley
