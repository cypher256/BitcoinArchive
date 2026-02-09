---
title: "Re: Linux build, proxy"
date: 2009-11-03T15:53:25Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Great, I've been looking forward to working on the Linux build."
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 53
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
  - "networking"
  - "development"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

Great, I've been looking forward to working on the Linux build.

If you connect to Freenode's hidden service, then they tell you they've 
also banned TOR from that due to abuse and it kicks you off.  There's a 
several step procedure you can do to run a password utility on unix and 
e-mail request an account that you could login with, but that's getting 
pretty complicated.  I wonder if we could get away with applying for one 
account and then everyone use the same account?  I suppose the IRC 
server probably limits accounts to one login, or some admin might not 
like to see a dozen logins on the same account.

Besides the IRC part, how did your test of proxy go?  Since you've been 
connected before, your addr.dat contains known node addresses, but 
without IRC to know which ones are online, it takes a long time to find 
them.  There are normally 1 to 3 other nodes besides you that can accept 
incoming connections, and existing nodes that already know you would 
eventually connect to you.  How many connections did you get, and how 
long did it take?  I guess to know whether it successfully connected 
outbound through TOR you'd need to search debug.log for "connected".

To originally connect with TOR without connecting normally once to get 
seeded, you'd have to know the address of an existing node that can 
accept incoming connections and seed it like this:
bitcoin -proxy=127.0.0.1:9050 -addnode=<ip of a node>

If some nodes that accept incoming connects were willing to have their 
IP coded into the program, it could seed automatically.  Or some IP seed 
addresses posted on a Wiki page with the instructions.

Another option is to search the world again for an IRC server that 
doesn't ban TOR nodes.  Or if we could get someone to set one up.  IRC 
servers ban TOR because they have actual text chat on them... if there 
was one with just bots and junk then it wouldn't care.  Probably should 
post a question on the forum or the mailing list and see if anyone knows 
one.

Another problem is that TOR users can't accept incoming connections, and 
we have so few that can.  If everyone goes to TOR, there won't be any 
nodes to connect to.

We have a shortage of nodes that can accept incoming connections.  It 
generally ranges from 2 to 4 lately.  We need to emphasize the 
importance to people of setting up port forwarding on their router. 
Every P2P file sharing program has instructions how to do it.  We should 
have a paragraph on the bitcoin.sourceforge.net homepage urging people 
to set up port forwarding to accept incoming connections, and a link to 
a site that describes how to do it for each router.

mmalmi@cc.hut.fi wrote:
> I uploaded what I've ported so far to the svn/branches. Util, script, db 
> and the headers compile fully now and net.cpp partially, so there's 
> still work to do.
> 
> _beginthread doesn't have a direct Linux equivalent, so I used Boost 
> threads instead.
> 
> I couldn't get connected using the Tor SOCKS proxy. That might be 
> because of the Freenode Tor policy which requires connecting to their 
> hidden service: http://freenode.net/irc_servers.shtml#tor
> 
>> heapchk() is just a MSVCRT debugging thing that's not being used.  It
>> can be a no-op on Linux.  OpenSSL automatically uses /dev/urandom to
>> seed on Linux, so RandAddSeedPerfmon can also be a no-op.
>>
>> Don't let it connect to the network before we've tested it thoroughly
>> off-net.  If you have two computers, unplug the internet and use
>> "bitcoin -connect=<ip>" to connect to each other, one windows and one
>> linux.  -connect will allow you to connect to non-routable addresses
>> like 192.168.x.x.  We don't want to reflect badly on the reliability of
>> the network if it throws off some malformed crud we hadn't thought to
>> check for yet, or discovers something else anti-social to do on the
>> network.
>>
>> I have time that I can do some testing when you've got something
>> buildable to test.  I can include it in the stress test I'm currently
>> running on the changes so far.
>>
>> mmalmi@cc.hut.fi wrote:
>>> I made an #ifdef to replace QueryPerformanceCounter with Linux's  
>>> gettimeofday in util.h. Some Unicode/ANSI errors were resolved  
>>> without code changes when I updated to wxWidgets 2.9. The only  
>>> compile error I'm getting in Linux at the moment is from heapchk()  
>>> in util.h.
>>>
>>>> I fixed some non-portable stuff I came across:
>>>> QueryPerformanceCounter
>>>> %I64d in printf format strings
>>>> Sleep
>>>> CheckDiskSpace
>>>>
>>>> If there's any other unportable stuff you know of I should fix,  let 
>>>> me know.
>>>>
>>>> I think I'll move debug.log and db.log into the same directory as the
>>>> data files (%appdata%\Bitcoin), rather than whatever the current
>>>> directory happens to be.
>>>
>>>
>>>
> 
> 
>

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
