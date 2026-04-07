---
title: "Re: Source code documentation"
date: 2010-07-17T14:27:04.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3756#msg3756"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
description: "Context post by AndrewBuck in BitcoinTalk topic 393. after msg3534."
isSatoshi: false
tags: []
---

I am still crunching along on the man page, it is starting to look pretty good.  I did come across a couple of issues though.  First, there is a "-printtodebugger" command line option.  I added it to the "usage" information when you give -h and I also added it to the man page but I can't tell what it does by looking at the code, other than to see that it is only used on windows machines.

Secondly, in the process of investigating the OutputDebugStringF() function I discovered that the code has the ability to output to a console by setting the global variable fPrintToConsole to true.  The variable, however, was initialized to false and there was no where in the code that sets it to true.  Because of this I added a -printtoconsole which sets both this variable and fDebug to true.  I think both should be set but I am wondering if I should leave fDebug alone.  If I don't set it in the code then the user would have to do "-printtoconsole -debug" on the command line instead, we may or may not want this depending on whether there is more/less verbosity implied by debug but from a quick grep of the code it looks like it should be the way I currently have it where it automatically sets both variables.

-Buck
