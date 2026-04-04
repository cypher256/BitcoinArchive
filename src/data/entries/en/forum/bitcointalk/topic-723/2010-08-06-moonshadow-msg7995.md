---
title: "Re: (quoted post by MoonShadow)"
date: 2010-08-06T22:27:03.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=723.msg7995#msg7995"
author: "MoonShadow"
participants:
  - name: "MoonShadow"
    slug: "moonshadow"
description: "Quoted post by MoonShadow in BitcoinTalk topic 723."
isSatoshi: false
tags: []
---

[Quote from: mkrogh on August 06, 2010, 09:38:46 PM](/BitcoinArchive/entries/forum/bitcointalk/topic-723/2010-08-06-mkrogh-msg7982/)
> creighto, I am only talking about verifying the absence of double spending. Of course, you can always receive a coin and just hope. That is clear.

There is more to it than just hoping.  For starters, you could already have an existing business relationship, and trust built between two parties due to honest prior trading.  

Counterfeiting bitcoins is really difficult as well, and that is what a local blockchain check would protect you against.  It would also protect you against a double spend that wasn't concurrent, as if one guy backs up his wallet file and then spends his coins the night before and attempts to yank your chain.  It does not protect you against a professional criminal, but against the petty attempt.

[/quote]
With bitcoin in the version I have seen (not red's), you cannot build a local machine that verifies it. 
[/quote]

I know from other threads that Red has a different understanding than I about how the system works.  Either or both of us could be wrong.  My understanding is that, at present, the clients attempt to announce a transfer and then wait for the collective to confirm the transfer via accepting the claim as valid in at least two blocks, after which point the network believes that you have valid bitcoins, therefore you do.

However, two clients can interact directly, in theory.

Imagine this picture...

You have a full client on your Iphone running in the background, and then there is a power failure.  You head down to the corner store, and find that the shopkeeper has put everything in the cooler on sale half price, cash or bitcoins only.  Your cellphone client connects with the shopkeeper's cell phone client over ad-hoc bluetooth.  Signs the transfer accouncement (there are no actual cryptocoins in your wallet, they exist only as a series of entries into an encrypted ledger we call the blockchain, more like writing a check than actual coins) over to the shopkeeper's address.  Shopkeeper's client can then (but does not have to) check his copy of the blockchain to verify that you actually owned said bitcoins at the time of his last blockchain update.  If it's good locally, he can assume that you are not trying to cheat him and accept the trade and you leave with your half priced milk.  This does not protect the shopkeeper from an intentional double spend, but you still had to have honestly owned the coins at one time in order to do this.  If you did not own the coins at the time the power went out, his client would have rejected the transfer.

This also means that the shopkeeper can only spend bitcoins that he had at the time of the power failure himself, since any new bitcoins that he receives will not yet be included in the blockchains of any other vendor, and any attempts by his client to transfer his unannounced coins will be rejected by the other clients.  All transfers will either be verified or rejected by the network within 30 minutes of network reconnection.
