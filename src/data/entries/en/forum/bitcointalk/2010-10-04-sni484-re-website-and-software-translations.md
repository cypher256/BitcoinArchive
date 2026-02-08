---
title: "Re: Website and software translations"
date: 2010-10-04T19:21:01.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=151.msg15360#msg15360"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Website and software translations\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/484/"
threadId: "bt-website-and-software-translations"
threadTitle: "Website and software translations"
threadPosition: 4
---

[Quote from: eurekafag on October 04, 2010, 10:55:56 AM](https://bitcointalk.org/index.php?topic=151.msg15248#msg15248)Where can I find the latest English .po file to keep the translation up-to-date?
poedit does it.  Either get the src directory from a release, or download it with SVN.  Place your .po file 3 directories deep under the src directory.  Open it with poedit and do Catalog->Update from sources.

So for example, you have:
src
src\base58.h
src\bignum.h
...
src\util.cpp
src\util.h
src\xpm
src\localeu\LC_MESSAGES\bitcoin.po

Open bitcoin.po with poedit, do Catalog->Update from sources.  It looks for the sourcecode up 3 directories (..\..\..) from where bitcoin.po is.

This updates your existing .po file you already worked on and adds any news strings.  It may try to match close strings, so check things over and make sure it didn't make any bad guesses.

Make sure you use the .po file I uploaded to SVN or in a release, because I always fix up at least a few things.  I'm attaching your Russian one to this message.
