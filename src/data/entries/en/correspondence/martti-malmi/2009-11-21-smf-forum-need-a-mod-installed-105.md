---
title: "Re: SMF forum, need a mod installed"
date: 2009-11-21T21:46:52Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "I'll go ahead with setting up Drupal then."
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 105
tags:
  - "correspondence"
  - "early-contributor"
  - "forum"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

I'll go ahead with setting up Drupal then.

I don't think we should make the site https by default.  It's still very 
unusual for the public part of sites to be https, probably because it 
introduces potential technical complications, delays and greater server 
load.  As a user I'm a little annoyed when it takes time to verify the 
identity of some no-name site I casually came across.  For me it seems 
like https sites fail to load a lot more often.

The important thing is to have SSL available for those who need it. 
Those who need SSL I think know to try inserting an "s" after http and 
see if it works.  SMF has code that changes all the links to https if 
the URL handed in is https.

We could add a note on the registration page that if you want SSL, you 
can change http to https at any time and approve the self-signed 
certificate, or a link that does it, and the TOR page can mention it too.

We can look into getting a certificate later when things have settled 
down.  With Class 1, no changes are allowed for a year, which is a risk 
if we find issues with the current host and have to change IP.

mmalmi@cc.hut.fi wrote:
> I've done a Joomla site for a customer, and I must say I like Drupal 
> better, mostly for the admin interface which is easier to use and 
> integrated into the main site.
> 
> Images aren't loading properly over https, I'll check it out when I can.
> 
> It's easier to just change the bitcoin.org DNS entry, forum.bitcoin.org 
> is not necessary.
> 
> We could see if we can get a free SSL certificate somewhere, like 
> http://www.startssl.com/?app=1, so the users wouldn't get a security 
> warning from a self-signed certificate. However I don't know if they 
> give certificates for anonymously registered domains.
> 
>> Thanks, that worked, I got File Manager installed with SSH.  I also
>> uploaded a few themes into Drupal.  I haven't thoroughly gone through
>> all the available themes yet.
>>
>> Looked around at CMSes, Drupal and Joomla are popular.  Consensus is
>> Joomla has a better selection of themes and is easier to learn, though
>> Drupal may be more intuitive for programmers and customization.  Joomla
>> better for CMS, Drupal better for blogs.  Drupal's URLs are search
>> engine friendly, Joomla not.
>>
>> Both have SMF bridge modules available.  For future reference, Drupal's
>> is named "SMFforum Integration".
>>
>> mmalmi@cc.hut.fi wrote:
>>> I don't have the time to configure it today, but I made a temporary 
>>>  account "" with password "" and full permissions to  
>>> /var/www/bitcoin. You can access it via ssh or sftp at port 30000.
> 
> 
>

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
