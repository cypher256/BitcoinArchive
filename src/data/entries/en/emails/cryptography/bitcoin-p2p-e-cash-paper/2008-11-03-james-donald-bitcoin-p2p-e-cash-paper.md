---
title: "Bitcoin P2P e-cash paper"
date: 2008-11-03T20:20:13Z
type: "mailing-list"
source: "cryptography-mailing-list"
sourceUrl: "https://www.metzdowd.com/pipermail/cryptography/2008-November/014819.html"
sourceNote: "Posted Mon Nov 3, 2008 at 15:20:13 EST (20:20:13 UTC) by James A. Donald (jamesd at echeque.com) to the metzdowd cryptography mailing list. Note: Ray Dillinger's Nov 6 reply (014822) headers reference 'Tue, 2008-11-04 at 06:20 +1000' for this message — same instant in Australian Eastern Time."
author: "James A. Donald"
participants:
  - name: "James A. Donald"
    slug: "james-donald"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "James A. Donald asks how Simplified Payment Verification handles double-spending under concurrent network conditions, raising concerns about government attacks on financial networks."
isSatoshi: false
tags:
  - "mailing-list"
  - "simplified-payment-verification"
  - "double-spending"
  - "government-attack"
secondarySources:
  - name: "Satoshi Nakamoto Institute (thread view)"
    url: "https://satoshi.nakamotoinstitute.org/emails/cryptography/threads/1/"
---

<!-- speaker: James A. Donald -->
> To detect and reject a double spending event in a
> timely manner, one must have most past transactions
> of the coins in the transaction, which, naively
> implemented, requires each peer to have most past
> transactions, or most past transactions that
> occurred recently. If hundreds of millions of people
> are doing transactions, that is a lot of bandwidth -
> each must know all, or a substantial part thereof.

<!-- speaker: Satoshi Nakamoto -->
> Long before the network gets anywhere near as large as
> that, it would be Safe for users to use Simplified
> Payment Verification (section 8) to check for double
> spending, which only requires having the chain of
> block headers,

<!-- speaker: James A. Donald -->
If I understand Simplified Payment Verification correctly:

New coin issuers need to store all coins and all recent coin transfers. There are many new coin issuers, as many as want to be issuers, but far more coin users.

Ordinary entities merely transfer coins. To see if a coin transfer is OK, they report it to one or more new coin issuers and see if the new coin issuer accepts it. New coin issuers check transfers of old coins so that their new coins have valid form, and they report the outcome of this check so that people will report their transfers to the new coin issuer.

If someone double spends a coin, and one expenditure is reported to one new coin issuer, and the other simultaneously reported to another new coin issuer, then both issuers to swifly agree on a unique sequence order of payments. This, however, is a non trivial problem of a massively distributed massive database, a notoriously tricky problem, for which there are at present no peer to peer solutions. Obiously it is a solvable problem, people solve it all the time, but not an easy problem. People fail to solve it rather more frequently.

But let us suppose that the coin issue network is dominated by a small number of issuers as seems likely.

If a small number of entities are issuing new coins, this is more resistant to state attack that with a single issuer, but the government regularly attacks financial networks, with the financial collapse ensuing from the most recent attack still under way as I write this.

Government sponsored enterprises enter the business, in due course bad behavior is made mandatory, and the evil financial network is bigger than the honest financial network, with the result that even though everyone knows what is happening, people continue to use the paper issued by the evil financial network, because of network effects - the big, main issuers, are the issuers you use if you want to do business.

Then knowledgeable people complain that the evil financial network is heading for disaster, that the government sponsored enterprises are about to cause a "collapse of the total financial system", as Wallison and Alan Greenspan complained in 2005, the government debates shrinking the evil government sponsored enterprises, as with "S. 190 [109th]: Federal Housing Enterprise Regulatory Reform Act of 2005" but they find easy money too seductive, and S. 190 goes down in flames before a horde of political activists chanting that easy money is sound, and opposing it is racist, nazi, ignorant, and generally hateful, the recent S. 190 debate on limiting portfolios (bond issue supporting dud mortgages) by government sponsored enterprises being a perfect reprise of the debates on limiting the issue of new assignats in the 1790s.

The big and easy government attacks on money target a single central money issuer, as with the first of the modern political attacks, the French Assignat of 1792, but in the late nineteenth century political attacks on financial networks began, as for example the Federal reserve act of 1913, the goal always being to wind up the network into a single too big to fail entity, and they have been getting progressively bigger, more serious, and more disastrous, as with the most recent one. Each attack is hugely successful, and after the cataclysm that the attack causes the attackers are hailed as saviors of the poor, the oppressed, and the nation generally, and the blame for the the bad consequences is dumped elsewhere, usually on Jews, greedy bankers, speculators, etc, because such attacks are difficult for ordinary people understand. I have trouble understanding your proposal - ordinary users will be easily bamboozled by a government sponsored security update. Further, when the crisis hits, to disagree with the line, to doubt that the regulators are right, and the problem is the evil speculators, becomes political suicide, as it did in America in 2007, sometimes physical suicide, as in Weimar Germany.

Still, it is better, and more resistant to attack by government sponsored enterprises, than anything I have seen so far.

<!-- speaker: Satoshi Nakamoto -->
> Visa processed 37 billion transactions in FY2008, or
> an average of 100 million transactions per day. That
> many transactions would take 100GB of bandwidth, or
> the size of 12 DVD or 2 HD quality movies, or about
> $18 worth of bandwidth at current prices.
>
> If the network were to get that big, it would take
> several years, and by then, sending 2 HD movies over
> the Internet would probably not seem like a big deal.

<!-- speaker: James A. Donald -->
If there were a hundred or a thousand money issuers by the time the government attacks, the kind of government attacks on financial networks that we have recently seen might well be more difficult.

But I think we need to concern ourselves with minimizing the data and bandwidth required by money issuers - for small coins, the protocol seems wasteful. It would be nice to have the full protocol for big coins, and some shortcut for small coins wherein people trust account based money for small amounts till they get wrapped up into big coins.

The smaller the data storage and bandwidth required for money issuers, the more resistant the system is the kind of government attacks on financial networks that we have recently seen.

---------------------------------------------------------------------
The Cryptography Mailing List
Unsubscribe by sending "unsubscribe cryptography" to majordomo at metzdowd.com
