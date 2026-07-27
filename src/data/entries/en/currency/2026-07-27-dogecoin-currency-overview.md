---
title: "Dogecoin: No Whitepaper, No Supply Cap, and a Decade in the Top Ten"
date: 2026-07-27T00:00:00Z
type: "currency"
source: "github"
sourceUrl: "https://github.com/dogecoin/dogecoin/blob/master/README.md"
sourceNote: "Dogecoin has no whitepaper. Its GitHub README, which states only that the code is adapted from Bitcoin Core and other cryptocurrencies, is the closest thing to a design document this project has ever published."
author: "Bitcoin Institute"
participants:
  - name: "Jackson Palmer"
    slug: "jackson-palmer"
  - name: "Billy Markus"
    slug: "billy-markus"
description: "Dogecoin has no whitepaper, no company, and no cap on its supply — a decade-old test of whether Bitcoin's scarcity is what a market actually pays for."
isSatoshi: false
tags:
  - "currency"
  - "dogecoin"
  - "altcoin"
  - "merge-mining"
  - "monetary-policy"
secondarySources:
  - name: "Dogecoin — repository FAQ (block-reward history)"
    url: "https://github.com/dogecoin/dogecoin/blob/master/doc/FAQ.md"
  - name: "CoinDesk — Dogecoin to allow Litecoin merge-mining in network-security bid (August 4, 2014)"
    url: "https://www.coindesk.com/markets/2014/08/04/dogecoin-to-allow-litecoin-merge-mining-in-network-security-bid"
  - name: "International Business Times UK — 'Jackson Palmer: a year of Dogecoin' (December 8, 2014)"
    url: "https://www.ibtimes.co.uk/jackson-palmer-year-dogecoin-jar-nutella-all-i-have-show-1478649"
  - name: "Decrypt — 'Dogecoin inventor Jackson Palmer regrets nothing' (October 16, 2018)"
    url: "https://decrypt.co/3722/dogecoin-inventor-jackson-palmer-regrets-nothing"
  - name: "Newsweek — 'Dogecoin co-creator calls cryptocurrency inherently right-wing technology' (July 2021)"
    url: "https://www.newsweek.com/dogecoin-co-creator-says-cryptocurrency-inherently-right-wing-technology-1609862"
  - name: "CoinDesk — Dogecoin Foundation returns with Ethereum's Buterin as adviser (August 17, 2021)"
    url: "https://www.coindesk.com/markets/2021/08/17/dogecoin-foundation-returns-with-ethereums-buterin-as-adviser"
relatedEntries:
  - aftermath/2013-12-06-dogecoin-launch
  - aftermath/2015-04-24-jackson-palmer-biography
  - aftermath/2011-10-13-litecoin-launch
  - analysis/2026-07-26-altcoin-count-and-design-comparison
  - analysis/2008-10-31-bitcoin-digital-gold-structural-features
  - analysis/2008-10-31-fixed-supply-vs-adjustable-money
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
inlineLinkKeywords:
  - "Dogecoin's supply design"
  - "merge-mining with Litecoin"
  - "Dogecoin Foundation"
translationStatus: complete
---

![Editorial infographic on a dark background: a rounded infinity symbol curving into a downward-sloping line, two interlocking gears, a blank document icon crossed out with a diagonal line, and three caption boxes along the bottom.](/BitcoinArchive/images/analysis/2026-07-27-dogecoin-currency-overview-hero.png)

Dogecoin's own repository settles, in one sentence, what its design owes to anyone else's thinking:

<!-- audit:quote-skip -->
> It is adapted from Bitcoin Core and other cryptocurrencies.

That line is the closest thing Dogecoin has ever published to a design rationale. There is no whitepaper. The chain launched on December 6, 2013, as [Billy Markus](/BitcoinArchive/participants/billy-markus/)'s working fork of [Jackson Palmer](/BitcoinArchive/participants/jackson-palmer/)'s joke — itself a fork of [Litecoin](/BitcoinArchive/entries/aftermath/2011-10-13-litecoin-launch/), which had forked Bitcoin two years earlier. Dogecoin is Bitcoin's grandfork: two generations removed from the codebase, and no generations removed from an argument for why any of its parameters should be what they are. Measured against Bitcoin, the gap this record opens is not technical. It is the question of what a currency is for.

## A currency with no design document

Palmer registered dogecoin.com while working in marketing at Adobe in Sydney, watching cryptocurrencies multiply through 2013 and treating the joke as a comment on the trend rather than an entry into it. Markus, a software engineer, saw the joke, reached out, and had a working chain within days — not by writing new consensus rules, but by taking Litecoin's codebase and pointing it at a different genesis block. No design document preceded that decision and none has followed it since. Litecoin argued for changing four parameters, each by a factor of four; Ethereum's own whitepaper argues against a supply cap by name. Dogecoin never made an argument for anything. Its code came first, stayed first, and is still waiting for a paper to catch up to it.

## Dogecoin's supply design: from a dice roll to a permanent floor

For its first 145,000 blocks, Dogecoin didn't fix a reward — it rolled one. Blocks 1 through 99,999 paid out anywhere from 0 to 1,000,000 DOGE, drawn by a Mersenne Twister pseudo-random generator; blocks 100,000 through 144,999 halved that ceiling to 0–500,000 DOGE. The project's own documentation calls the randomness a comedic touch, and the mechanism reads as one: a per-block payout that is, literally, a dice roll.

At block 145,000, in February 2014, the dice stopped. The stated reason was defensive: large mining pools were gaming the schedule by mining only the high-reward blocks. The reward switched to a fixed 250,000 DOGE, halving every 100,000 blocks, until block 600,000 in 2015 — where the halving stopped for good and the reward has sat at 10,000 DOGE per block ever since. Early observers assumed the total would plateau somewhere near 100 billion coins; Markus later confirmed there was no such ceiling, and the 10,000-DOGE reward would repeat indefinitely.

| Block range | Reward | Period |
|---|---|---|
| 1 – 99,999 | 0–1,000,000 DOGE (random) | Dec 2013 – early 2014 |
| 100,000 – 144,999 | 0–500,000 DOGE (random) | early 2014 |
| 145,000 – 599,999 | 250,000 DOGE, halving every 100,000 blocks | Feb 2014 – 2015 |
| 600,000 – present | 10,000 DOGE, fixed | 2015 – present |

At one block a minute, that fixed reward compounds to roughly 525,600 blocks and 5.256 billion new DOGE every year, forever. Bitcoin fixed a ceiling — 21 million units, however long the last satoshi takes to mine. Dogecoin fixed a floor: the same 5.256 billion units added every year, no matter how large the circulating supply has already grown. Both designs use the word "fixed," for opposite halves of the same fraction. Bitcoin fixed the numerator at a final value; Dogecoin fixed the annual numerator and let the denominator grow without limit, so the newly issued share of the total keeps falling even though the rule minting it never changes. [The twelve-chain design comparison](/BitcoinArchive/entries/analysis/2026-07-26-altcoin-count-and-design-comparison/) tracks that same distinction — a permanently fixed annual issuance against a fixed total cap — across every chain that picked one or the other.

## Merge-mining: borrowing Litecoin's hash rate

By early 2014, Dogecoin's dedicated Scrypt hash rate was thin enough that a 51% attack was a live risk rather than a theoretical one. [Charlie Lee](/BitcoinArchive/participants/charlie-lee/), Litecoin's creator, proposed the fix that April: let Dogecoin accept Litecoin's mining work as its own. The Dogecoin team announced the plan that August, and a hard fork implementing auxiliary proof-of-work went live that September.

The mechanism is simple to state and easy to underrate. A Litecoin miner assembling a block already builds a coinbase transaction and hashes it with Scrypt, hunting for a result under Litecoin's difficulty target. Merge-mining adds a commitment to a Dogecoin block header inside that same coinbase transaction. If the hash clears Litecoin's target, the miner wins a Litecoin block as before. If that identical hash also clears Dogecoin's much lower difficulty target — a cheaper bar, since Dogecoin's own network is smaller — the same proof of work is simultaneously valid as a Dogecoin block, and the miner collects both rewards for one unit of computation. No dedicated Dogecoin mining hardware is required, and none is discouraged.

The consequence for Dogecoin's security is structural, not incidental. Its resistance to a 51% attack is now a function of how Litecoin's mining pools choose to operate, not of any hash rate Dogecoin assembled on its own.

## No company, then a foundation

On who started with an advantage, Dogecoin gave Bitcoin's own answer: nobody. There was no presale and no premine — even the dice-roll years handed every miner identical odds — and no company ever held equity in the chain. [Palmer left the project in 2015](/BitcoinArchive/participants/jackson-palmer/), citing the community's toxic speculative culture; Markus stepped back from development around the same time and later returned only as a public commentator, posting as `@BillyM2k`. For roughly six years afterward, Dogecoin had no company, no visible founder, and no foundation — a small, informal group of volunteer contributors kept the code running.

That changed in August 2021, when a nonprofit Dogecoin Foundation relaunched with a stated purpose of funding and hiring developers rather than replacing them. Its advisory roster is where the parallel with Bitcoin breaks down: Ethereum's Vitalik Buterin as blockchain adviser, Jared Birchall — who runs Elon Musk's family office — as legal and financial adviser, Dogecoin core developer Max Keller on the technical side, and Markus himself, credited for community and memes. No single body holds protocol authority; mining and merge-mining still decide every block, foundation or not. But the chain that once had no one to call now has an advisory board that includes a rival chain's co-founder and the representative of one of the world's wealthiest people.

## What Palmer has said about Bitcoin

A year after the launch, Palmer described the original tweet for what it was:

<!-- audit:quote-skip -->
> a jab at the Bitcoin and altcoin scene at the time

He was just as direct about the claim he had never made:

<!-- audit:quote-skip -->
> I've never really promoted Dogecoin as the 'fiat killer' like Bitcoin and its community like to prophesize.

And about what the coin was actually for:

<!-- audit:quote-skip -->
> Dogecoin is a really fun, absurd community and a currency that people use to throw change at each other on the internet in the form of micro-tips. ... Is Dogecoin ever going to rock the foundations of the financial world? No, and that was never its intent.

That is a co-founder, on the record in 2014, declining the pitch every other chain in this record makes for itself. By 2018 the criticism had moved from Bitcoin's rhetoric to its culture:

<!-- audit:quote-skip -->
> Bitcoin's become a little bit like a religion, a little cult-like, and I think that's not a good way to treat a technology.

By 2021, the target was Bitcoin's founding design decision itself:

<!-- audit:quote-skip -->
> After years of studying it, I believe that cryptocurrency is an inherently right-wing, hyper-capitalistic technology built primarily to amplify the wealth of its proponents through a combination of tax avoidance, diminished regulatory oversight and artificially enforced scarcity.

"Artificially enforced scarcity" names [the 21-million cap](/BitcoinArchive/entries/analysis/2008-10-31-fixed-supply-vs-adjustable-money/) directly — the one design decision Dogecoin's own uncapped, permanently inflationary supply refuses to make.

Dogecoin's fixed annual issuance, plotted against Bitcoin's cap and ten other currencies' curves on one normalized index:

<!-- chart: supply-curve-comparison -->

## Significance to Bitcoin

[Bitcoin's claim to being "digital gold"](/BitcoinArchive/entries/analysis/2008-10-31-bitcoin-digital-gold-structural-features/) rests on six structural features held at once: system decentralization, no controlling person or organization, a fair launch, a departed founder, a fixed supply, and the accumulated weight of being first. Dogecoin matches two of the six outright — the fair launch, and, for roughly six years, the absence of any company — and inverts a third on purpose: where Bitcoin's cap enforces scarcity, Dogecoin's fixed annual issuance enforces the opposite, a currency built to be spent rather than hoarded. On system decentralization, its security is borrowed from Litecoin's miners rather than assembled independently. On founder departure, Palmer and Markus both left and both came back — one as a critic, one as a commentator — which is not the silence Satoshi's departure has been.

What Dogecoin actually demonstrates is narrower than a competing monetary theory. It is a decade-long natural experiment nobody set out to run: a currency with no whitepaper, no supply cap, and no independently assembled mining base has held a market capitalization most chains with all three would envy — on community and brand, according to [its own launch record](/BitcoinArchive/entries/aftermath/2013-12-06-dogecoin-launch/). That does not settle whether Bitcoin's scarcity is what gives it value. It shows only that scarcity is not the only thing a market will pay for. Dogecoin's own co-creator has said as much directly, and named Bitcoin's defining feature while he said it: a founder arguing, on the record, against the one design decision his own coin was built to avoid.
