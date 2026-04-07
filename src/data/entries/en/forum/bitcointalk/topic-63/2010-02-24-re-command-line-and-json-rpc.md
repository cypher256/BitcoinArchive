---
title: "Re: Command Line and JSON-RPC"
date: 2010-02-24T06:17:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=63.msg482#msg482"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Command Line and JSON-RPC\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/74/"
quotes:
  - id: "q1"
    person: "theymos"
    personSlug: "theymos"
    date: "2010-02-23T18:07:37.000Z"
  - id: "q2"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-02-23T13:15:41.000Z"
---

<!-- quote: q1 -->
> <!-- quote: q2 -->
> > On Linux it needs libgtk2.0-0 installed
> 
> Will this requirement be removed sometime? I'd rather not have to deal with GTK.

How much "dealing with" does GTK actually require?  Is it just a matter of "sudo apt-get install libgtk2.0-0" and having some extra libraries sitting around?  GTK doesn't have to do anything, just be there for bitcoin to link to when it loads up, have the gtk-init-check call fail because no GUI present, then it's done.  

It saves us butchering everything with ifdefs and a separate compile and binary to use wxBase just to try to avoid linking GTK.
