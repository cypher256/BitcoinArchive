---
title: "Re: Bitcoin stuff"
date: 2009-12-23T09:12:03Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "I'd also need at least the command line tools to check if coins have"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 135
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
---

> I need to make a way for you to programmatically get new generated
> bitcoin addresses.  Either that or you could have them send to your IP
> address, but then you have to rely on them to put the order number in
> the comment.

I'd also need at least the command line tools to check if coins have  
been received and to send coins. It would require some way to  
communicate with the Bitcoin process running in the background. I  
don't know how that should be done, maybe with something RPC related.

It would also be great if the background process was non-graphical -  
the VPS on the current service level doesn't have enough memory to run  
the X Windowing environment, unless I come up with some ways to free  
memory.

> Are you going to manually review and enter orders, at least to begin
> with?  I sure would.

Yes, at least to begin with, when the customer sells bc's and receives  
dollars. I wouldn't give a script the access to my dollar reserves so  
lightly. The other way around (customer's dollars -> bitcoins) it  
doesn't feel that insecure, and it's certainly nicer for the customer  
to receive his bitcoins immediately.

> mmalmi@cc.hut.fi wrote:
>> I have registered the domain name bitcoinexchange.com and will   
>> start coding the service sometime soon as a nice leisure activity.   
>> I'm envisioning a simple Google-like interface with no registration  
>>  and only two texts fields on the front page, where you insert the   
>> amount of money you wish to trade, and either your PayPal address   
>> to buy dollars or bitcoin address to buy bitcoins. On the next page  
>>  you'll get a new bitcoin address for sending the coins or a check   
>> code for the PayPal transaction text.
>>
>> PayPal is good for the beginning - it's simple and has no startup   
>> costs, but later on I might accept credit cards also.
>>
>> Do you still need the maintenance account? It's ok if you do, but   
>> change the password to something else.
>>

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
