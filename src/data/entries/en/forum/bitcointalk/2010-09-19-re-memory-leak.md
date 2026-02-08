---
title: "Re: Memory leak"
date: 2010-09-19T17:22:03.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=1023.msg13201#msg13201"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Memory leak\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/452/"
---

Bouncing between 0 and 2 connections could be if it's connecting to itself.  Are you using the "-connect" switch?

Did you compile it or is this a release build, and what version? 

I'm not sure how the 200Kb/sec, since it waits at least a half second between connection attempts.  How fast is it flickering between 0 and 2 connections?  Faster than twice a second?

The wait function on linux is:

inline void Sleep(int64 n)
{
    boost::thread::sleep(boost::get_system_time() + boost::posix_time::milliseconds(n));
}

If that doesn't work right, then it would be possible for it to spin through the loop as fast as it can.
