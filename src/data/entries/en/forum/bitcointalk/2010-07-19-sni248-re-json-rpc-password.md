---
title: "Re: JSON-RPC password"
date: 2010-07-19T16:20:50.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4268#msg4268"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"JSON-RPC password\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/248/"
---

So you drop a settings file in the ~/.bitcoin directory, that sounds better.  In the "no password is set" warning, it could tell you where the file is and what to do.

What is the most popular and common settings file format?

HTTP basic authentication should be considered.  In actual practice though, it's more work for web developers to figure out how to specify the password through some extra parameter in the HTTP or JSON-RPC wrapper than to just stick an extra parameter at the beginning of the parameter list.  What do you think?  Does HTTP basic authentication get us any additional benefits?  Moving it off the parameter list but then you still have to specific it in a more esoteric place I'm not sure is a net win. 

[Quote from: gavinandresen on July 19, 2010, 12:02:39 PM](https://bitcointalk.org/index.php?topic=461.msg4215#msg4215)I was confused for a bit because the password is given LAST on the command line, but FIRST in the JSON-RPC params list.  I agree that reading the command-line password from a file would be more convenient and more secure.
You're also confusing me, what do you mean?  Did I do something unintended?
