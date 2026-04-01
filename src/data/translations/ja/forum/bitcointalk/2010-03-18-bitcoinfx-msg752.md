---
title: "Re: Idea for file hosting and proxy services"
date: 2010-03-18T14:36:50.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=83.msg752#msg752"
author: "BitcoinFX"
participants:
  - name: "BitcoinFX"
    slug: "bitcoinfx"
description: "Context post by BitcoinFX in BitcoinTalk topic 83. before msg810."
isSatoshi: false
threadId: "bt-idea-for-file-hosting-and-proxy-services"
tags: []
translationStatus: pending
---

Yes. Any built proxy implementation would be open source and automated bitcoin payments would be great.

I will post the psiphon info. and links because the project has just moved from v1 to v2 and the implementations are very different.

Psiphon is a free 'circumvention' tool and should remain so. However, I've run a private and personally updated / secured 1.6 version and do accept 'token' donations from some of my users.

"Psiphon is a web proxy designed to help Internet users securely bypass the content-filtering systems used to censor the internet. Psiphon was developed by the Citizen Lab at the University of Toronto.

License: GNU General Public License
Source code: http://psiphon.ca/download/psiphon-src-1.6.tar.gz

http://wikipedia.org/wiki/Psiphon

http://psiphon.ca/

https://launchpad.net/psiphon

Psiphon is a user-friendly, simple to administer, web-based proxy application. It allows users in regions with unrestricted Internet access to provide access to denied content to their friends, family, and associates in regions with restricted access.

Please contact the project leader if you're interested in helping us take Psiphon forward.

NOTE: The Psiphon 1.x and 2.x series are essentially different products with different architectures. Psiphon 1.x is a light-weight web proxy designed to run on a home PC (MS Windows-based) with no central management component. With Psiphon 1.x, a user asks a friend to run a proxy and can then access blocked sites via his or her friend's Internet connection. The Psiphon 1.x source code is available here: https://code.launchpad.net/~psiphon-inc/psiphon/psiphon-1.6.

The new project is Psiphon 2.x, a centrally managed web proxy system deployed by Psiphon Inc. to provide censorship circumvention services."

Great source code here in reference to designing and building our own separate bitcoin style implementation. I'd grab the 1.6.tar.gz for your reference satoshi, before it becomes to 'historical'. It's also not that easy to compile the 1.6 version on Linux anymore.

The 1.6 Win32 version has now been removed from the original project website. I actually run my existing proxy service on a windows box, with additional security. I have the msi and documentation if anyone can't find it elsewhere or would like it for reference etc. I keep it up-to-date and secure from the following sources;

SSL - http://www.slproweb.com/products/Win32OpenSSL.html

Visual C++ 2008 Redistributables for msvcpXX.dll and msvcrXX.dll

http://www.sqlite.org/download.html

Precompiled Binaries For Windows for sqlite3.dll

Java and some flash support is always an issue though !

I would be happy to work on and share contributions for a 'bitcoin' proxy software, but have limited time and developer experience myself. Maybe you should contact the psiphon developers for a separate v1.6 style implementation yourself satoshi ?

I understand that the Tor project is also looking for a payment / incentive system for it's server operators. Smiley

Could you change the thread title to "Re: Idea for file hosting and proxy services". Thanks.

Regards,

BitcoinFX
