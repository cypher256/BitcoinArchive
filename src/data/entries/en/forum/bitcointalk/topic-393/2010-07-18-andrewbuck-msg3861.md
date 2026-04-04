---
title: "Re: Source code documentation"
date: 2010-07-18T01:50:06.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3861#msg3861"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
description: "Context post by AndrewBuck in BitcoinTalk topic 393. before msg3999."
isSatoshi: false
tags: []
---

I wondered if they were not really meant to be public facing.  I think they are useful to have documented though, at least for now.  If the program accepts it as valid input it should be documented.  You can either add a notice to the commands in the man-page that are experimental, or just remove them.  In my opinion it makes more sense to label them experimental so people know they might change, but can use them if they need to.  I would just add the following to the beginning of each of the commands in the makefile:

\fBUnsupported - Behaviour may change in future versions\fR

The \fB switches on bold text and the \fR switches back to regular.  This way people can use the program to its fullest potential during the development stages.  Too much documentation is never a bad thing, especially for an open source project.  Since people can see the code they will find these calls anyway and use them whether you want them to or not.  If they are documented and marked as volatile then people can at least make an informed choice on whether or not they want to use them.

For example, just at the moment someone in IRC is making use of the -printblock command to generate statistics about the block chain that might help us understand the program better (as in how it performs in the real world).  Although the output of this command may change in the future, and therefore we shouldn't be building complex frameworks around it, it is nice to know it exists if you need something done as a quick hack.  Also because the program is open source, if someone comes to depend on a certain command line switch they can maintain it.  Eventually what you thought was just a temporary debugging tool make end up being one of the most widely used switches available.

-Buck
