---
title: "Satoshi to Dustin Trammell: re: Bitcoin Transfer — address labels and UX challenges (January 19, 2009)"
date: 2009-01-19T11:02:37Z
type: "correspondence"
source: "bitcoin-wiki"
sourceUrl: "https://en.bitcoin.it/wiki/Source:Trammell/Nakamoto_emails"
sourceNote: "Published verbatim by Dustin Trammell in November 2013. Full mbox archive distributed as Satoshi_Nakamoto.zip via Trammell's blog (https://blog.dustintrammell.com/i-am-not-satoshi/)."
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Dustin Trammell"
    slug: "dustin-trammell"
description: "Satoshi explains the default address label is 'Your Address', suggests the mislabeling was a UI-driven user error, and acknowledges per-payer receiving addresses have no real-world analogy."
isSatoshi: true
tags:
  - "correspondence"
  - "ux"
  - "address-book"
relatedEntries:
  - "aftermath/2009-01-19-satoshi-to-trammell-address-labels"
---

>On Mon, 2009-01-19 at 00:54 +0800, Satoshi Nakamoto wrote:
>> It should be your Bitcoin address at home that you received it
>> with.  There's no way for it to know who it's from, so the best
>> it can do is tell which of your addresses it was received on.
>> You can create multiple addresses and give a different address
>> to each person and label them to help figure out who's sending
>> to you.
>
>Ah!  I didn't even notice it was my address at home, you're right (:  I
>do have multiple addresses created at home so I didn't make the
>connection.
>
>> It doesn't know any names other than what you tell it.  The name
>> printed there is what's associated in your address book for that
>> address, either under the Address Book button or the "Change..."
>> button to the right of your Bitcoin address.
>
>Ahh you're right, 'Satoshi' is associated with the address that received
>the payment under the Change button's addresses.  I don't recall setting
>that value though, is that the default or something? (this is the first,
>default, address that the application generated itself when I first ran
>it)

The first default one is labelled "Your Address" when it's created.

All the places where address book labels are set are where the user manually sets it.  The only time it automatically adds a label is a blank one when you send to a new address.  I guess you could have entered the label on an address you thought was mine but the software was confusing and you put it in the wrong place.

Address book labels for receiving addresses is confusing but I'm not sure what else to do.  Anyone using it for more than just simple purposes would need to create different receiving addresses for each payer so they could tell who's paying them.  That concept doesn't have much analogy in the real world.

Satoshi
