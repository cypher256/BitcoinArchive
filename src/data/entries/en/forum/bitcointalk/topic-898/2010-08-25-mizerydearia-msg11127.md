---
title: "Re: (quoted post by mizerydearia)"
date: 2010-08-25T09:14:31.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=898.msg11127#msg11127"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "Quoted post by mizerydearia in BitcoinTalk topic 898."
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Macho"
    personSlug: "macho"
    date: "2010-08-25T03:03:03.000Z"
    sourceEntryId: "forum/bitcointalk/topic-898/2010-08-25-macho-msg11101"
---

<!-- quote: q1 -->
> 

I agree, however, if you compile from source, a single change from

rpc.cpp

```
!mapArgs.count("-disablesafemode")
to
```

```
mapArgs.count("-safemode")
will then
```

```cpp
// Observe lockdown
throw runtime_error(strWarning);
```

You can examine the code at http://bitcoin.svn.sourceforge.net/viewvc/bitcoin/trunk/rpc.cpp?revision=142&view=markup to see what is happening.

It seems a bit strange to only show an error when -enablesafety is used.  Perhaps it is unsafe or insecure for this to happen?

http://www.bitcoin.org/wiki/doku.php?id=api

From my understanding of the code it appears that when using one of these http://www.bitcoin.org/wiki/doku.php?id=api methods other than getinfo, help, stop, getgenerate, setgenerate and most importantly when there is a warning, that:

if -disablesafemode was passed to the running process, then the warning will not be displayed
if -disablesafemode was not passed to the running process, then the warning will be displayed

http://www.cplusplus.com/reference/std/stdexcept/runtime_error/

<!-- audit:quote-skip -->
> necrodearia> http://www.cplusplus.com/reference/std/stdexcept/runtime_error/ - Does this cause the running process to stop or does it just produce output to the terminal/shell?  
> \<Adrinael\> necrodearia, "this"?  
> \<necrodearia\> runtime_error  
> \<Adrinael\> necrodearia, if you create a runtime_error object, nothing happens. If you throw a runtime_error object, it all depends on if someone catches it, and where.  
> \<Adrinael\> { try {  throw runtime_error("Error, halp!");  }  catch (runtime_error& e) { cout << "caught a runtime error: " << e.what(); }   cout << " but still continuing..."; }  
> \<clang\> terminated by runtime_error: Error, halp!  
> \<Adrinael\> Hmm awesome  
> \<Adrinael\> geordi { try {  throw runtime_error("Error, halp!");  }  catch (runtime_error& e) { cout << "caught a runtime error: " << e.what(); }   cout << " but still continuing..."; }  
> \<geordi\> caught a runtime error: Error, halp! but still continuing...  
> \<Sausage\> How in the hell did it get that wrong?  
> \<Adrinael\> Asked Eelis on #geordi, now move along
