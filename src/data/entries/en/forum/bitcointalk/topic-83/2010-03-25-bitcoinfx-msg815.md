---
title: "Re: Idea for file hosting and proxy services"
date: 2010-03-25T18:20:45.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=83.msg815#msg815"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "Context post by BitcoinFX in BitcoinTalk topic 83. after msg810, quotes Satoshi."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "satoshi"
    personSlug: "satoshi-nakamoto"
    date: "2010-03-24T18:01:57.000Z"
---

<!-- quote: q1 -->
> Title changed.
>
> It helps that we have someone with actual experience running a proxy service.  Do you think Psiphon is the best one currently?  (sometimes the one you run was the best when you started but you found better ones later)

All proxy services and software solutions have advantages and disadvantages for both the operator and it users.

The 1st version of Psiphon is very easy to install and implement. Users are only known to the operator via a registered email address, access passwords can be changed on demand and logging is enabled for any 'problem' usage. User accounts can also be deleted.

I update the above mentioned .dll's etc. to keep it running as fast and securely as possible.

Users receive the https address to connect to, they then accept the self signed SSL cert. (which can be changed) This gives them the login page where they enter the username and password and begin browsing.

The https address defaults to https :// xxx.xxx.xxx.xxx:443/*random_sub_domain* I use DynDNS.com updater, so that my IP is protected and so that I can provide any 'blocked' users with a new 'random' domain. i.e. https://*random*.ath.cx:443/*random_sub_domain*

This means that my service doesn't even operate on a TLD and I can change the address whenever I like.

This has advantages over something like Tor, because it just looks like a secure browser connection to a random service. The main problem with Tor, for say users in China is that Tor is easily identifiable as Tor. In many respects a Psiphon type proxy is much more Private and Secure.

I use an Untangle Gateway and OpenDNS with some advanced blocking to control 'unwanted' content access.
