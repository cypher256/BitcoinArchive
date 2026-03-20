---
title: "Source code documentation"
date: 2010-07-15T12:30:23.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=393.msg3292#msg3292"
author: "AndrewBuck"
participants:
  - name: "AndrewBuck"
    slug: "andrewbuck"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "AndrewBuck starts a discussion: Source code documentation."
isSatoshi: false
threadId: "bt-source-code-documentation"
threadPosition: 1
tags: []
---

Hello to the other developers, I finally got a working build environment set up on my Ubuntu machine here and have been perusing the sourcecode a bit.  So far I like what I am seeing, the program makes use of the standard template library to avoid messy data structure code and the class structure seems to make pretty good use of public/private access to promote modularity.

The thing that really seems to be lacking though is a good organizational structure between the .h and .cpp files, as well as a lack of function documentation.  I would be happy to start writing documentation for the functions using the [doxygen](http://www.doxygen.org) documentation system.  I am using this on [OpenDungeons](http://sourceforge.net/projects/opendungeons/) which is a game I am the lead coder on and it has served me well.

For those that are unfamiliar with it, Doxygen works by reading your sourcefiles to extract information which it automatically collects (like function parameters, class organization and inheritance, etc), as well as information you add yourself (comments describing what functions do, what variables are used for, etc).  After it parses all of the code it produces  a directory containing a bunch of HTML files which are very well crosslinked and easy to navigate.  It can also be configured to autogenerate neat little call graphs showing what subfunctions are called from each function (so you can trace dependancies/bugs).

All in all Doxygen is an excellent system and I would be happy to get it set up and begin writing documentation for the functions (at least the ones I can figure out anyway) and provide patches so they can be uploaded to SVN.  I don't want to do this though if other developers would be opposed to it so I wanted to post here before I got started.  Let me know if you would like me to do this.

EDIT:  In case people want to see what the documentation on an existing system looks like, here is a [link](http://www.ogre3d.org/docs/api/html/) to the documentation for the OGRE 3d rendering system.  The best place to get a feel for the documentation is to click the "Classes" link at the top and then look at the pages for a couple of classes.

-Buck
