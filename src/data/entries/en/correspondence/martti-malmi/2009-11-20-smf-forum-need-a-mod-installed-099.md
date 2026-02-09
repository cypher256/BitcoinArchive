---
title: "SMF forum, need a mod installed"
date: 2009-11-20T05:14:56Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "I've been configuring the SMF forum.  They're saying SMF is better"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi \u2194 Martti Malmi Correspondence"
threadPosition: 99
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

I've been configuring the SMF forum.  They're saying SMF is better 
written than phpBB and more reliable, so if I can get SMF to look right, 
that's the preferable choice.

Most forums run vBulletin (big-boards.com lists 1376 vBulletin, 275 
Invision, 245 phpBB and 41 SMF), so if you don't look like vBulletin or 
Invision, it looks like you compromised because you couldn't afford 
vBulletin.  SMF's UI started out further away from the standard look, 
but I've been able to use CSS to make it look more like the others.

I've done as much as I can with CSS, the rest requires editing PHP files 
and uploading images.  The forum doesn't have a built in file 
upload/edit admin feature, it's added separately as the SMF File Manager 
mod.  I uploaded the mod but some files need to be chmod 777 so it can 
install.  If you go to Admin->Packages->Browse Packages and click on 
Apply Mod, it offers to do it automatically if you enter an ftp login.

Someone says you might also have to
mkdir /var/www/bitcoin/smf/packages/temp

The error in the error log is:
failed to open stream: Permission denied
File: /var/www/bitcoin/smf/Sources/Subs-Package.php
(I'm sure that's just the first file)

Is it OK to go live with this SMF installation when I'm finished 
configuring it?  I should be able to point forum.bitcoin.org to it.

Liberty reports that linux-test8 has been running smoothly.  My tests 
have been running fine as well.  The Linux version looks fully 
stabilized to me.

Good news: he says he made his first sale of bitcoins.  Someone bought 
out all he had.  I had been wondering whether it would be buyers or sellers.

*Source: Published by Martti Malmi on GitHub in February 2024 as part of his testimony in the COPA v. Wright trial. The full correspondence archive is available at mmalmi.github.io/satoshi/.*
