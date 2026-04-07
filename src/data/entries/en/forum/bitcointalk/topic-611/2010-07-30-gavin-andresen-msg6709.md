---
title: "Re: [PATCH] implement 'xlisttransactions'"
date: 2010-07-30T19:48:33.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=611.msg6709#msg6709"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "Context post by Gavin Andresen in BitcoinTalk topic 611. after msg6706."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "jgarzik"
    personSlug: "jgarzik"
    date: "2010-07-30T18:30:40.000Z"
    sourceEntryId: "forum/bitcointalk/topic-611/2010-07-30-jgarzik-msg6687"
  - id: "q2"
    person: "gavinandresen"
    personSlug: "gavin-andresen"
    date: "2010-07-30T13:18:06.000Z"
    sourceEntryId: "forum/bitcointalk/topic-611/2010-07-30-gavin-andresen-msg6642"
---

<!-- quote: q1 -->
> 
> <!-- quote: q2 -->
> > Couple of quick suggestions:
> > 
> > Using the key name "class" will cause problems for, at least, JavaScript, and probably other languages where "class" is a reserved word.  "type" or "variety" or some other synonym will cause fewer problems later.
> 
> 
> Can you be more specific?  All mainstream programming language seem sensibly insensitive to abitrary string contents, JS included.  String content can certainly include language-reserved keywords and parsing tokens.

It's pretty common to turn maps into objects, so you can use syntax like:
  foo.tx_id
... instead of foo['tx_id'].  Especially if you're doing something like passing the data into a templating system (which may ONLY understand the object.field syntax).

And foo.class just doesn't work out nicely.
