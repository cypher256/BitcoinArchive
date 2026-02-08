---
title: "Re: JSON-RPC password"
date: 2010-07-21T16:07:57.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=461.msg4758#msg4758"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"JSON-RPC password\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/252/"
threadId: "bt-json-rpc-password"
threadTitle: "JSON-RPC password"
threadPosition: 6
---

[Quote from: gavinandresen on July 21, 2010, 12:11:10 PM](https://bitcointalk.org/index.php?topic=461.msg4709#msg4709)I just did a quick survey of 20 .conf files in /etc on my debian system, and found:
 1 file used "key value"
 5 used "key=value"  
Thanks for that survey!

I find "key value" a little unnatural.  There ought to be a more definite separator between key and value that suggests assignment.  The space people may just be getting lazy using their language's split function.
key=some full sentence with spaces in it.  # seems more clear
key some full sentence with spaces in it.  # than this

Allright then, lets go with self-parsed mapConfig, syntax:
# comment
key=value

file extension .conf.  What's the filename, is it ~/.bitcoin/settings.conf or ~/.bitcoin/bitcoin.conf or what?   

I think we better strip whitespace at the beginning and end of the key and the value.
# user who likes column formatted 
k            = value
key         = value
longerkey =   this sentence would be this    # "this sentence would be this"
        key = value   # guess this is ok too
  nextkey = value
      right = justified

The normal syntax should be "key=value", but you can't blame people for the occasional "key = value".
