---
title: "Re: Fw: bitcoin.sourceforge.net"
date: 2009-10-27T03:02:49Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Published on GitHub in February 2024 as part of Martti Malmi's testimony in the COPA v. Wright trial"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Malmi explains the Bitweaver IS_LIVE setting and slow SourceForge hosting, then asks Satoshi about using Boost's cross-platform thread and socket libraries."
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "Eugen Leitl"
    personSlug: "eugen-leitl"
    date: "2009-10-26T12:46:27Z"
    sourceEntryId: "emails/bitcoin-list/2009-10-26-re-does-bitcoin-crash-in-windows-leitl"
  - id: "q2"
    parent: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2009-10-26T17:50:10Z"
    sourceEntryId: "correspondence/martti-malmi/2009-10-26-bitcoinsourceforgenet-042"
  - id: "q3"
    parent: "q1"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    date: "2009-10-26T15:00:00Z"
    sourceEntryId: "correspondence/liberty-standard/2009-10-26-bitcoin-website-is-down"
---

IS_LIVE option was indeed set to false, but it only affects the  
visibility of error messages to user. I've noticed the site being slow  
at times, sometimes taking up to 30 seconds to load. I think it's  
related to the Sourceforge hosting. Bitweaver should be among the  
lightest PHP CMS'es, but I can check out if there are any issues to it.

Off the topic, do you think that we could use Boost's thread and  
socket libraries instead of the Windows-specific ones? Are there other  
windows-only-functions used in the code?

<!-- quote: q1 -->
> Any idea what's going on with it?  Every time I look, it's fine.
>
>
> <!-- quote: q2 -->
>> > bitcoin.sourceforge.net looks fine now.  Maybe sourceforge was doing
>
> Doesn't work right now.
>
> <!-- quote: q2 -->
>> > some maintenance.
>
>
> <!-- quote: q3 -->
>> In case you weren't aware, the Bitcoin website is down.
>>
>> http://bitcoin.sourceforge.net/
>>
>> -----
>> You are running bitweaver in TEST mode
>>
>>     * Click here to log a bug, if this appears to be an error with the
>> application.
>>     * Go here to begin the installation process, if you haven't done so
>> already.
>>     * To hide this message, please set the IS_LIVE constant to TRUE in your
>> kernel/config_inc.php file.
