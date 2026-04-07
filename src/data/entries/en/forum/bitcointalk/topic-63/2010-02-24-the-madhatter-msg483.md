---
title: "Re: Command Line and JSON-RPC"
date: 2010-02-24T06:38:37.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg483#msg483"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "Context post by The Madhatter in BitcoinTalk topic 63. after msg482, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-24T06:17:23.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-24-re-command-line-and-json-rpc"
  - id: "q2"
    person: "theymos"
    personSlug: "theymos"
    date: "2010-02-24T03:07:37.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-24-theymos-msg467"
  - id: "q3"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-23T22:15:41.000Z"
    sourceEntryId: "forum/bitcointalk/topic-63/2010-02-23-command-line-and-json-rpc"
---

*NIX peoples are "purists" of sorts. They don't like to pollute their OS installs with libraries that shouldn't be necessary.

A million ifdefs are not the answer either. Hmm.. more thought to this may be required.

<!-- quote: q1 -->
> 
> <!-- quote: q2 -->
> > <!-- quote: q3 -->
> > > 
> > > > On Linux it needs libgtk2.0-0 installed
> > 
> > Will this requirement be removed sometime? I'd rather not have to deal with GTK.
> 
> How much "dealing with" does GTK actually require?  Is it just a matter of "sudo apt-get install libgtk2.0-0" and having some extra libraries sitting around?  GTK doesn't have to do anything, just be there for bitcoin to link to when it loads up, have the gtk-init-check call fail because no GUI present, then it's done.  
> 
> It saves us butchering everything with ifdefs and a separate compile and binary to use wxBase just to try to avoid linking GTK.
