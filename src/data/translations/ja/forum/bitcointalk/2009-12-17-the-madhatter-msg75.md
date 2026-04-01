---
title: "Re: いくつかの提案"
date: 2009-12-17T13:21:49.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg75#msg75"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "BitcoinTalkトピック12におけるThe Madhatterのコンテキスト投稿。msg77の前。"
isSatoshi: false
threadId: "bt-a-few-suggestions"
tags: []
translationStatus: complete
---

[madhatter@10 /home/madhatter/src/bitcoin]# diff -u headers.h.orig headers.h      
--- headers.h.orig      2009-12-14 12:29:39.000000000 +0000
+++ headers.h   2009-12-14 12:41:08.000000000 +0000
@@ -35,7 +35,12 @@
 #include <limits.h>
 #include <float.h>
 #include <assert.h>
+#ifndef BUILD_FREEBSD //malloc.h is part of stdlib.h on FreeBSD
 #include <malloc.h>
+#endif
+#ifdef BUILD_FREEBSD
+#include <netinet/in.h>
+#endif
 #include <memory>
 #define BOUNDSCHECK 1
 #include <sstream>

[madhatter@10 /home/madhatter/src/bitcoin]# cat makefile.fbsd 
# Copyright (c) 2009 Satoshi Nakamoto
# Distributed under the MIT/X11 software license, see the accompanying
# file license.txt or http://www.opensource.org/licenses/mit-license.php.

ifneq "$(BUILD)" "debug"
ifneq "$(BUILD)" "release"
BUILD=debug
endif
endif
ifeq "$(BUILD)" "debug"
D=d
DEBUGFLAGS=-g
endif

INCLUDEPATHS= \
 -I"/usr/include" \
 -I"/usr/local/include" \
 -I"/usr/local/include/db47" \
 -I"/usr/local/include/wx-2.8" \
 -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8"

LIBPATHS= \
 -L"/usr/lib" \
 -L"/usr/local/lib" \
 -L"/usr/local/lib/db47"

LIBS= \
 -Wl,-Bstatic \
   -l boost_system -l boost_filesystem \
   -l db_cxx \
 -Wl,-Bdynamic \
   -l wx_base-2.8 \
   -l wx_gtk2_core-2.8 \
   -l wx_gtk2_html-2.8 \
   -l wx_gtk2_richtext-2.8 \
   -l crypto \
   -l gtk-x11-2.0 -l gthread-2.0 -l SM

WXDEFS=-D__WXGTK__ -DNOPCH -DBUILD_FREEBSD
CFLAGS=-O0 -Wno-invalid-offsetof -Wformat $(DEBUGFLAGS) $(WXDEFS) $(INCLUDEPATHS)
HEADERS=headers.h util.h main.h serialize.h uint256.h key.h bignum.h script.h db.h base58.h

all: bitcoin

headers.h.gch: headers.h $(HEADERS) net.h irc.h market.h uibase.h ui.h
        g++ -c $(CFLAGS) -o $@ $<

obj/util.o: util.cpp                $(HEADERS)
        g++ -c $(CFLAGS) -o $@ $<

obj/script.o: script.cpp            $(HEADERS)
        g++ -c $(CFLAGS) -o $@ $<

obj/db.o: db.cpp                    $(HEADERS) market.h
        g++ -c $(CFLAGS) -o $@ $<

obj/net.o: net.cpp                  $(HEADERS) net.h
        g++ -c $(CFLAGS) -o $@ $<

obj/main.o: main.cpp                $(HEADERS) net.h market.h sha.h
        g++ -c $(CFLAGS) -o $@ $<

obj/market.o: market.cpp            $(HEADERS) market.h
        g++ -c $(CFLAGS) -o $@ $<

obj/ui.o: ui.cpp                    $(HEADERS) net.h uibase.h ui.h market.h
        g++ -c $(CFLAGS) -o $@ $<

obj/uibase.o: uibase.cpp            uibase.h
        g++ -c $(CFLAGS) -o $@ $<

obj/sha.o: sha.cpp                  sha.h
        g++ -c $(CFLAGS) -O3 -o $@ $<

obj/irc.o: irc.cpp                  $(HEADERS)
        g++ -c $(CFLAGS) -o $@ $<

OBJS=obj/util.o obj/script.o obj/db.o obj/net.o obj/main.o obj/market.o \
        obj/ui.o obj/uibase.o obj/sha.o obj/irc.o

bitcoin: headers.h.gch $(OBJS)
        g++ $(CFLAGS) -o $@ $(LIBPATHS) $(OBJS) $(LIBS)

clean:
        -rm obj/*
        -rm headers.h.gch
