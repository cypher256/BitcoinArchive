---
title: "Re: A few suggestions"
date: 2009-12-15T20:37:32.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg70#msg70"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"A few suggestions\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/24/"
quotes:
  - id: "q1"
    person: "madhatter2"
    date: "2009-12-14T20:21:09.000Z"
---

<!-- quote: q1 -->
> It is also throwing the same std::string issue on the latest version of Ubuntu Linux.

Then it must be something you're doing differently with building or configuring wxWidgets.

What options did you use on the wxWidgets "configure" script?  The options I used are in build-unix.txt.

> One question: how do I enable the debug.log? I have tried stopping bitcoin and touching ~/.bitcoin/debug.log and starting bitcoin again. It never seems to write to the file. Am I missing something?

Never heard of that happening.  Is there anything in debug.log?  If you touched the file, that sounds like something is there.  Does the program have write access to the file?
