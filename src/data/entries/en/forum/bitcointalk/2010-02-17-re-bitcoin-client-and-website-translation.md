---
title: "Re: Bitcoin client and website translation"
date: 2010-02-17T19:19:43.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=47.msg389#msg389"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Bitcoin client and website translation\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/62/"
threadId: "bt-bitcoin-client-and-website-translation"
threadTitle: "Bitcoin client and website translation"
threadPosition: 3
---

I updated the SVN with changes to support translation.  Translatable strings are all enclosed in _(""), and we're using UTF-8 on all platforms.

When the program runs, it looks in the directory of the EXE for the file: locale\<langcode>\LC_MESSAGES\bitcoin.mo

<langcode> is the two letter code of the language your OS is set to, like "de" or "nl".

On Linux, it also looks for:
/usr/share/locale/<langcode>/LC_MESSAGES/bitcoin.mo
/usr/local/share/locale/<langcode>/LC_MESSAGES/bitcoin.mo
(are there other standard places it should look on linux?)

Here's a quick walkthrough using poedit to make a .po and .mo file:

- Download the bitcoin sourcecode from SVN
- In the trunk directory, mkdir locale\<lang>\LC_MESSAGES
- In poedit, File->New catalog->Paths tab
- Click the "New item" dotted rectangle button
- Put "../../.." and MAKE SURE TO PRESS ENTER to add the path
- Click OK
- Save the file as "bitcoin.po" in the LC_MESSAGES directory you made
- It should then scan the sourcecode and find about 170 strings
- If it didn't find anything, check Catalog->Settings->Path tab, make sure the "../../.." was added

When you're done translating, commit both bitcoin.po (the editable catalog file) and bitcoin.mo (compiled data used by the program).
