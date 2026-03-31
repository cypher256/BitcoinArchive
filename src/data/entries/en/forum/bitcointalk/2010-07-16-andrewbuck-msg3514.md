---
title: "Re: Source code documentation"
date: 2010-07-16T15:52:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3514#msg3514"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
description: "Context post by AndrewBuck in BitcoinTalk topic 393. before msg3534."
isSatoshi: false
threadId: "bt-source-code-documentation"
tags: []
---

No problem, that is why I asked about documentation before I started writing it.  I still would like to document it though and maybe we can come to some system which you would find acceptable.  One possible way is that I just run Doxygen on my own code and just use the auto-generated docs without adding any descriptions, etc.  This would have no impact on the project and myself or anyone else could do this whenever but it limits the usefulness of the documentation.

A second, and perhaps more appealing method would be to utilize the fact that Doxygen does not require the added documentation to be in the same file as the source code it is documenting.  We could add a single file that contains the documentation blocks with links pointing to the function names.  Doxygen then combines this with the auto-generated info it collects from the source to produce the docs.

Finally, whether we use Doxygen or not, I would like to write a "man page" for the program documenting the command-line options it takes.  Where is the command line processed in the code?  I looked at main.cpp and didn't see it (in fact I couldn't even find the "main" function).

-Buck
