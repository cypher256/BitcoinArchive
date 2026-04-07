---
title: "Re: (quoted post by DataWraith)"
date: 2010-05-02T11:13:09.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg1045#msg1045"
author: "DataWraith"
participants:
  - name: "DataWraith"
    slug: "datawraith"
description: "Quoted post by DataWraith in BitcoinTalk topic 55."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Karmicads"
    personSlug: "karmicads"
    date: "2010-05-01T17:15:51.000Z"
---

Karmicaids, thanks for taking the time for such a detailed reply.

<!-- quote: q1 -->
> It seems there is, as it just so happens, an existing protocol precisely for interacting with stored data files on freenet   

Oh, I thought you meant that when you spoke of using freenet. The user runs freenet and Bitcoin would communicate with it using its control protocol. However, running Freenet requires considerable computer resources, especially bandwidth, and personally, I do not want to run a freenet node for that reason alone. That's why I wanted this to be optional.

I had the impression that you did not want to re-invent the wheel, and that's why popularity played a part -- that the existing acceptance of magnet links in other software was a plus. 

Sorry DataWraith, but with all due respect, I have to disagree. The first issue is that files on a hard drive are mapped to a hierarchical namespace of nested locations, i.e. domains and directories. The fundamental difference, in approach of the many P2P networks is that the namespace is not hierarchal and the data it supports is referenced not by address but by the uniqueness of it's content. Whether the target is a file or anything else it's not referenced by a specific fixed address, but by the identity of it's unique contents. Identical files, are essentially the same identity and the P2P application can use multiple instances as multiple feeds to the same item. The parameters of magnet are well suited to any P2P application. 
Okay, sorry, seems I haven't made entirely clear what I mean here. I'm aware of how magnet links refer to content, rather than a location in a hierachical namespace.

Perhaps it's just a difference of mental models: For me, a bitcoin transaction is, for lack of better words, not a **thing** so much as a **process**. In my mind, magnet links refer to things (usually a file -- whether by content hash or by location), and trying to use them to refer to a process strikes me as a little awkward. Magnet links identify things you then have to go fetch, while a bitcoin transaction is completely described by the link itself (although you still have to say "Yes, send the coins." once you click the link).

To me it seems that using magnet links would be to (ab)use them for something they were not meant to describe, as they orignated as a replacement for ed2k://, freenet://, et al., describing how to get a file.

A bitcoin-link should be more like mailto: than magnet: IMHO.

Yeah, my mistake, sorry.

IIRC the web server is pretty much integrated into Freenet itself. You can use the simpler FCP protocol to talk to a Freenet instance, but because of the type of content on Freenet, not many people are willing to host a publicly accessible instance, so you would have to run your own. I don't begrudge that you want to be able to do this, I'm just not willing to do it myself. I'd much rather host a TOR hidden service -- that's why I suggested to use a general, full-featured URL as the details parameter, instead of making it freenet specific.

Not sure what you mean by address, other than the 'address' that is provided by your bitcoin signature (which is more like a name than a place). I cant see how you can hand out different addresses to different people, unless you already have some aliases defined. So you are suggesting an added naming system to encode and translate aliases for a bitcoin node, is that what you mean? That could be done without too much hassle I suppose.
Well, yeah, I meant the bitcoin signature. I called it address, because that's what it says in the bitcoin client (i.e. "Change your address"). I indeed thought that one should use different aliases, just like the exchange sites currently do: You get an address (or signature, or whatever) to send coins to, and because that address was only given to you, the recipient knows the payment is from you.

A system to translate aliases would of course be nice, but I think that's better handled with an address book or mybitcoin.com or something.

Yes, exactly! The text for the sending party can use the normal route. But what if I want to pre-specify the text that should be sent?

This has an analogue in mailto:-links: If you want someone to send you an email, you can also specify a subject he/she should use: mailto:alice@example.org?subject=Test. So if I am selling something on, say, ebay, I can give the buyer a bitcoin link that includes the message "Payment for Ebay auction #12345", so he/she does not have to enter it themselves, possibly making a mistake if the code is more cryptic than #12345.

Sorry, I mistakenly tend to use the terms URI, URL, etc. interchangeably because you enter it into the address bar %). Again, sorry if this lead to confusion.

What I wanted here was to make this additional information general. Some examples might clarify this:

- https://www.myonlineshop.com/purchaseDetails/123456
- http://pastie.org/942292
- freenet://[a ressource on freenet]/
- http://kpvz7ki2v5agwt35.onion/wiki/index.php/PurchaseDetailsHere
- magnet:?xt=urn:sha1:YNCKHTQCWBTRNJIV4WNAE52SJUQCZO5C

The creator of the link chooses where to put the additional details, and the recipient decides whether he needs the supplemental information badly enough to install Freenet/Tor/I2P. That's one of the reasons for including a short message in the link itself: the additional information should not be critical to the transaction.

But wouldn't that make the use of Freenet mandatory? I would like this to stay more flexible.

Also, if I were to run an online shop, I'd rather have people look the details up on my own website rather than them having to install freenet. That might also link my shop's reputation with Freenet, which given Freenet's reputation, might be undesirable.

Yup. That's another reason for wanting to also allow normal HTTP(S) URLs. If I have not misunderstood, you seem to want to make the use of Freenet for transactions mandatory, which is something I strongly disagree with.

Not every single transaction needs bulletproof anonymity. Think Open Source projects receiving donations, or online shops. If you (a) need more details than the short message parameter provides, and (b) you want to be totally anonymous, you can just specify a freenet or Tor or I2P-URL (or URN? -- this is confusing :-/ ). If you don't need the added anonymity, you don't have to make the effort to run Freenet/Tor/I2P/whatever.

Well, we're all together in this. I just hope to arrive at the best possible system. :-)

Thank you for your thorough explanation, and patience with my suggestions.
