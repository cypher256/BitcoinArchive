---
title: "Re: Source code documentation"
date: 2010-07-17T15:49:56.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3765#msg3765"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
description: "Context post by AndrewBuck in BitcoinTalk topic 393. before msg3828."
isSatoshi: false
tags: []
---

Sorry to keep replying to myself but I am posting these little snippets as I stumble across them.  I am currently documenting the -dropmessagestest command line switch and I see a minor improvement you may want to add to the code.  Currently if a message is dropped as a result of this switch, a debug message is printed to the log indicating a message was dropped.  It would probably be pretty useful to print the contents of the dropped message to the log as well.  This way if one of the dropped messages really does break bitcoin, you can see what message caused the problem.  It would also allow you to later re-create the problem by adding a filter on the incoming network stream blocking messages like the one that broke it the first time so that you can verify that you have fixed the issue later on.

If you think it is a good idea I can probably add this myself as well.

-Buck
