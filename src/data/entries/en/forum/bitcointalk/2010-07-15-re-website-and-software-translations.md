---
title: "Re: Website and software translations"
date: 2010-07-15T18:30:22.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=151.msg3238#msg3238"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"Website and software translations\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/196/"
---

[Quote from: aidos on July 15, 2010, 12:49:11 AM](https://bitcointalk.org/index.php?topic=151.msg3017#msg3017)Ok here is the .po file for French. While I'm at it, I noted a couple of issues:

1. The "About" box didn't take the translation into account, it still displays the english version to me, even though the rest of the software is using the translated strings, and the .po file contains the translation string of the "About" box message. Same problem with the "Apply" button in the Settings window.
I need to give an updated .po file.

[Quote from: aidos on July 15, 2010, 12:49:11 AM](https://bitcointalk.org/index.php?topic=151.msg3017#msg3017)2. If an transaction's description in the list of transaction in the main window contains a diacritical character (such as "éàèç"), it's not displayed. I suppose the string is not being properly handled as UTF8 somewhere.
OK, this must be a problem somewhere, I'll have to take a look at it or one of the other devs can.

[Quote from: aidos on July 15, 2010, 12:49:11 AM](https://bitcointalk.org/index.php?topic=151.msg3017#msg3017)4. About the .po file :
   - There are a few strings in the .po file that don't needs translation (ie: "Bitcoin"). Maybe those shouldn't be inside _("...") ?
   - Others shouldn't be split. I can remember one message about transaction fee where the string is split in two to insert the fee value, where you could simply have put a %s. It makes the message harder to translate as I had to go in the source to find exactly what was going on.
   - Some strings have whitespace at the end or start, which necessity is very debatable, and it's easy to miss in PoEdit.
Many of the strings are in code automatically generated from uiproject.fbp where nothing can be done about these things.  I have a program I use to find all the spacing inconsistencies at the beginning and ending of strings in your .po file and manually fix them up before I upload them to SVN.
