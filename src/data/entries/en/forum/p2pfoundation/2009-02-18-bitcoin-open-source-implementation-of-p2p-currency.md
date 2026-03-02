---
title: "Bitcoin open source implementation of P2P currency"
date: 2009-02-18T20:50:00.000Z
source: p2pfoundation
sourceUrl: "http://p2pfoundation.ning.com/xn/detail/2003008:Comment:9562"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Joerg Baach"
    slug: "joerg-baach"
  - name: "Sepp Hasslberger"
    slug: "sepp-hasslberger"
description: "Satoshi explains Bitcoin's proof-of-work mining, halving schedule, and fixed supply in response to questions from Joerg Baach and Sepp Hasslberger, comparing it to a precious metal where supply is predetermined and value changes."
isSatoshi: true
tags:
  - "mining"
  - "supply-limit"
  - "proof-of-work"
  - "monetary-policy"
threadId: "p2pfoundation-bitcoin-open-source"
threadPosition: 3
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/p2pfoundation/3/"
---

Joerg Baach wrote:
> What I did not understand about your system - how would you use it for a currency of any sort? Everybody can create a coin as they like, as far as I understood, so therefore there is no trusted supply of tokens / coins.

Sepp Hasslberger wrote:
> Is there a formula to decide on what should be the total amount of tokens, and if so, what is the formula?

It is a global distributed database, with additions to the database by consent of the majority, based on a set of rules they follow:

- Whenever someone finds proof-of-work to generate a block, they get some new coins

- The proof-of-work difficulty is adjusted every two weeks to target an average of 6 blocks per hour (for the whole network)

- The coins given per block is cut in half every 4 years

You could say coins are issued by the majority. They are issued in a limited, predetermined amount.

As an example, if there are 1000 nodes, and 6 get coins each hour, it would likely take a week before you get anything.

To Sepp's question, indeed there is nobody to act as central bank or federal reserve to adjust the money supply as the population of users grows. That would have required a trusted party to determine the value, because I don't know a way for software to know the real world value of things. If there was some clever way, or if we wanted to trust someone to actively manage the money supply to peg it to something, the rules could have been programmed for that.

In this sense, it's more typical of a precious metal. Instead of the supply changing to keep the value the same, the supply is predetermined and the value changes. As the number of users grows, the value per coin increases. It has the potential for a positive feedback loop; as users increase, the value goes up, which could attract more users to take advantage of the increasing value.
