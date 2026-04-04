---
title: "The current Bitcoin economic model doesn't work"
date: 2010-02-17T22:12:50.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=57.msg390#msg390"
author: "Suggester"
participants:
  - name: "Suggester"
    slug: "suggester"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Suggester starts a discussion: The current Bitcoin economic model doesn't work."
isSatoshi: false
tags: []
---

Edit 24 May 2011: *This post has just been majorly updated after more than a year to address the technical issues raised against the original suggestions. The ones presented now are practical. They're also credible as the early warning turned out to be true: Bitcoin has transformed into a ridiculously volatile speculation and hoarding tool rather than a stable medium of exchange.*

[](http://postimage.org/image/2zivvoft0/)

I dare not spend a coin today lest its price doubles tomorrow, nor dare I receive a payment in coins today lest their price crashes before I rush to sell them, nor dare I, naturally, store my wealth in the form coins so I'm relying on vulnerable exchangers to store it in the form of fiat currency. Something must be very wrong...

Yet that was all but unexpected; it was inevitable given how the limited supply system was designed. Let's stop and think about this for a minute:

Satoshi stated in his FAQ that *When Bitcoins start having real exchange value, the competition for coin creation will drive the price of electricity needed for generating a coin close to the value of the coin*. Now the only problem is that this "real exchange value" itself would be determined in part by electricity, computer deterioration, and time expenditures needed to generate new BTCs. And those expenditures increase with time. We have a loop.

**Every four years a miner needs to exert double the virtual effort to create the same amount of coins**, which means he'll be constantly demanding higher prices to compensate for his costs. Which also means that bitcoins won't generally be spendable. Why? Because only an idiot spends a currency which he is certain its price will double within 4 years, effectively granting him about **19% real annual interest**--significantly better than any bank or mutual fund.

*Great!* I hear you say, *free money for everyone, right?*

Wrong. 

Just as it's futile to create and distribute free extra coins to anyone already owning them "to make everyone richer", built-in deflation won't be helping anyone on the long term. That free money will encourage people to **hoard BTCs forever** or until another wishful investor buys them, fueling **speculation and price bubbles**. Bitcoin will ultimately be regarded as a phony *investment* with no real value, just like the good ol' **Pyramid (Ponzi) Scheme** where everyone purchases a ticket just to sell it to someone else later for a high profit until **the whole system collapses when it runs out of new victims**.

**This scenario can only be avoided if the cost of generating new BTCs got constant**. Which can only happen if participating nodes needed to exert a more or less constant amount of work (cost) to generate a given amount of BTCs. Only then will people be inclined to actually spend their coins, and they can finally serve their purpose as a stable medium of exchange.

But that's not it. The very fact that the **newly-generated coin supply dwindles as its user base (hopefully) continues to grow will raise that 19% deflation rate even higher**. Let alone that many coins are forever destroyed via HDD failures and lost thumb drives, pushing the deflation even higher and higher. **High deflation is bad because nobody spends their money, they only save it because it gains value over time**. Can you imagine what would've happened if, say, the Japanese government hasn't printed any (or very few) Yens during the last century while the population exploded? One 1911 Yen would have been more than enough to buy a house today. Who then would've spent their Yens in 1911? Why, almost noone of course! **This scenario is only avoidable if the number of available BTCs continues to grow with its user base at least proportionally.** If both figures match, **we won't have deflation nor inflation**.

But under the current model the price wouldn't necessarily be tied to the increasing generating electricity costs forever, which means there's a different scenario other than a perpetually deflating currency, and it's much worse: After about 14 years almost no new coins will be produced. Generating costs could then be largely irrelevant, resulting in a **lack of a price anchor**. This would leave the price solely to the market's supply and demand forces. **Just like Picasso paintings**, a coin could then be worth $1 on a given day then literally be worth $100 on the next and vice versa.

So what's the solution? Well, as you might have already guessed, **we should remove both the 4-years doubling interval rule and the 21M limit. Just allow BTCs to be generated indefinitely**.

Don't sigh in relief just yet. After removing the limit we're better off but **still have another issue: The number of users and generating nodes grows exponentially while the existing coins grow arithmetically**. We therefore need a mechanism to reflect the number of generating nodes (i.e the total exerted effort) into the resulting bitcoins. But blocks aren't the answer: Technical difficulties have been addressed against my original suggestion which advised rendering the amount of generatable blocks unlimited and totally dependent on the number of nodes. The problem was that a minimum "cooling down" period is needed to propagate who owns the new block across the entire network to avoid conflicts.

**My modified suggestion therefore is to reflect the total exerted effort in the number of coins**, not blocks. So we'd still have only 144 new daily blocks, but the amount of coins in these new blocks will depend on the proof-of-work difficulty (which automatically adjusts to the number of generating nodes). That makes sense. **A late adopter who needs to spend weeks, months, or even years to generate a block should end up with more coins in that block than an early adopter who had to spend only a couple of hours.**

And no, sorry, early adopters didn't take any risk to deserve a reward. Running a computer program which pops deflationary money isn't a risky activity, not one that warrants a 1,000,000% profit anyway. **No wonder Satoshi (not his real name, which is unknown) was fiercely defending the original design** and wanted to keep it going for as long as possible. It allowed him to initially produce all 144 daily blocks (7200 coins/day) for quite a while before having competing miners drive his coins' price way up. He's probably following up on this forum from his Caribbean beach seat now, with other "early adopters" eager to join him. The proposed system is the way to halt this pyramid scheme.

**The coins' price will then depend on the total cost of electricity sacrificed to generate the newest block**. Think of it as if everyone in the network bought some electricity from their utilities company before loading it all onto the network where the roulette runs every ten minutes on average with one lucky winner hitting the jackpot. **Bitcoins would have a real value equal to the amount of electricity sacrificed to create them, and their price would essentially be a function of the (pretty stable) average worldwide home electricity costs**, not a function of the number of generating nodes nor total demand, which will never stabilize in the foreseeable future. **Under the proposed system, if the number of generating users doubles tomorrow, the number of coins generated tomorrow will double as well, offsetting the demand surge with a supply surge without the need for a price jump followed by price crash as is the case now**.

This flexible supply system will be telling everyone **there's no advantage to being an early adopter**. A user doesn't need another victim to reap rewards later because there are no rewards to begin with. **Bitcoin is a medium of exchange, not a profit-making tool**. Speculators and investors can go ruin another currency for there's nothing for them to gain here until they can manipulate global electricity prices. By **eliminating risk and uncertainty** we're showing them the door, thus accomplishing the most important task towards achieving a stable medium of exchange the general population can trust.

Finally, a simple numerical example: If we assume the average worldwide cost of running a modern CPU for 24 hours is 20 cents, and if our initial goal is to have one BTC roughly equaling one US dollar, then the amount of coins each new block contains should equal: (fifth of a BTC/144 * the estimated equivalent of the modern CPUs number in the network). Thus, if the exerted power was then estimated to equal 10,000 CPUs, the new block created at that point would contain 14 BTC because the whole network spent $14 during the last 10 minutes to create it. If it was 20,000 CPUs, the new block would have 28 BTC and so on. **Once enough coins are produced for &#3647;1 equaling $1, miners would generate just enough to cover the economy's expansion** because any excess will come to them at a loss. The price would then fluctuate approximately along the lines of 99�-$1.03.

Practically speaking, if the price of 1 BTC after implementing the new system was, say $10, we could simply add a zero to increase the amount of existing coins ten-fold, making 1 BTC equaling 1 dollar, after which **the price will essentially stabilize itself automatically forever**. Note that the estimated CPUs figure is arbitrarily set using current computer power and running costs. Errors won't be detrimental because the market will correct itself resulting in 1 BTC equaling slightly more or less than $1. For example, if computers became more energy-efficient while electricity costs stayed constant, then &#3647;1 will equal a bit less than $1 because it now costs less to produce and vice versa. Whatever the case may be, the price would be stable on the short term and move slowly along with electricity costs and CPU/GPU efficiency on the long term, rendering coins as stable as major fiat currencies.

*Note that some replies before page 7 might seem irrelevant because of the suggestion improvements addressing them. The removed obsolete paragraphs from the original entry have been copied below in the third post of this thread just in case anyone wants to have a look to understand the full context of the discussion.*

*Note2: I've revived the thread at the bottom of page 20 due to the increased hacking and abuse of intermediary services such as the MtGox and Bitcoin7 exchangers. The underlying logic is that, had the coin's price been stable, we wouldn't have needed to trust them as often because we wouldn't have been forced to keep our wealth with them in the form of stable fiat instead of in our computers in the form of unstable coins.*
