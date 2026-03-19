---
title: "Linux distribution download"
date: 2010-07-28T18:22:37.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=612.msg6312#msg6312"
author: "Odin"
participants:
  - name: "Odin"
    slug: "odin"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Odin starts a discussion: Linux distribution download."
isSatoshi: false
threadId: "bt-linux-distribution-download"
threadPosition: 1
tags: []
---

Hi,

I am a software developer and while I am well versed with building things on Linux I thought I might provide some pointers to making like easier for others.

There is one aspect with distributing a single download package for Linux that is dynamically linked, "You should use the oldest versions of glibc/libstdc++ you can get away with.  i.e. unless you know you need a new feature or a bug fix take is as a given that the libraries at runtime will be newer and contain those fixes."

The problem with linking against the bleeding edge versions of glibc/libstdc++ is that you force the users to have a bleeding edge system also (to run these binaries).  Which should not be a necessary pre-requisite unless you know of specific cause for it to be so.  Such causes should be explained in documentation. Where as if you simply linked on an older system it would work both on that older system and on the bleeding edge system.

If there are areas of C code which you really-really need some new and recent GCC optimization to be enabled, consider providing the dumped out ASM file *.s which you generate once from your bleeding edge GCC version but include in the source to allow anyone to complile (even on older GCC versions).

Here are some recomendations:
 * Use the oldest base distribution you can get away with to build the binaries.  For example the most recent copy of the _PREVIOUS_ release of debian.  Not the most update to date copy of the current release of debian.
 * Provide a download containing static binaries (use the "-static" option to linking and maybe add this so the name of the executables "bitcoind-static"). Provide this in a seperate download file.
 * Make the source distribution build work from working copies of the libraries they need.  In particular boost and wxWidgets, if you know you need very recent versions of these to build against, then make building and linking work right out of their respective build tree (so you don't have to install them).  Installing them in /usr/local maybe an issue (it certainly is for me) but having themin the current working directory just for bitcoin's use would be fine.  At the end of the day all bincoin needs is access to header filer and DSOs or *.a to build and access to the DSOs at runtime.

I can put a 24/7 headless bitcoind up but because of these issues, until I find/make time to resolve them I can not at this time.
