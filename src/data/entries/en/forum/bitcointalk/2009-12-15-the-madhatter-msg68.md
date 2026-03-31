---
title: "Re: A few suggestions"
date: 2009-12-15T05:21:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg68#msg68"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "Context post by The Madhatter in BitcoinTalk topic 12. quoted by msg70."
isSatoshi: false
threadId: "bt-a-few-suggestions"
tags: []
---

Okay, I will look into the std::string issue. It is also throwing the same std::string issue on the latest version of Ubuntu Linux. So this isn't just OSX related. I have to say that my main background is C, not C++ so I am still learning some of the C++ data types/headers/and other specifics "as I go". Smiley

There are only defines for __WXCOCOA__ and __WXMAC__ in wx/defs.h (I must be missing something here..maybe my wxwidgets needs to be rebuilt -- I'll try that). I have tried combinations of those existing defines without success. The other option is to use gtk on OSX but the windowing will be slower and (my opinion) "ugly". Carbon would be the best selection for OSX.  I'll keep hacking at it until I get it working. Smiley

I also now have a working startup script for FreeBSD that will launch xorg's virtual framebuffer onto the localhost, fire up bitcoin and have the X11 screen output get stuffed into memory (instead of the monitor). This is a real big hack, but it does enable someone to run bitcoin as a pseudo unix daemon. I have had the code running for over 12h now and I don't detect any memory leaks or other weirdness.

Also I have a simple network monitor that will detect if bitcoin has crashed/stopped responding on port 8333, send me a page, and start the daemon back up again. This setup is ideal. I have started deploying seeds on servers I control that are all over the world. Smiley

One question: how do I enable the debug.log? I have tried stopping bitcoin and touching ~/.bitcoin/debug.log and starting bitcoin again. It never seems to write to the file. Am I missing something?

I will include these tools once I get SF setup.

Cheers!
