---
title: "Re: A few suggestions"
date: 2009-12-14T13:09:48.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=12.msg64#msg64"
author: "The Madhatter"
participants:
  - name: "The Madhatter"
    slug: "the-madhatter"
description: "Context post by The Madhatter in BitcoinTalk topic 12. before msg67."
isSatoshi: false
threadId: "bt-a-few-suggestions"
tags: []
translationStatus: pending
---

Got it working on FreeBSD! I'll submit my work here soon.

$gmake -f makefile.fbsd      
g++ -c -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -o headers.h.gch headers.h
g++ -c -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -o obj/util.o util.cpp
g++ -c -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -o obj/script.o script.cpp
g++ -c -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -o obj/db.o db.cpp
g++ -c -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -o obj/net.o net.cpp
g++ -c -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -o obj/main.o main.cpp
g++ -c -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -o obj/market.o market.cpp
g++ -c -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -o obj/ui.o ui.cpp
g++ -c -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -o obj/uibase.o uibase.cpp
g++ -c -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -O3 -o obj/sha.o sha.cpp
g++ -c -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -o obj/irc.o irc.cpp
g++ -O0 -Wno-invalid-offsetof -Wformat  -D__WXGTK__ -DNOPCH -DBUILD_FREEBSD -I"/usr/include" -I"/usr/local/include" -I"/usr/local/include/db47" -I"/usr/local/include/wx-2.8" -I"/usr/local/lib/wx/include/gtk2-ansi-release-2.8" -o bitcoin -L"/usr/lib" -L"/usr/local/lib" -L"/usr/local/lib/db47" obj/util.o obj/script.o obj/db.o obj/net.o obj/main.o obj/market.o obj/ui.o obj/uibase.o obj/sha.o obj/irc.o -Wl,-Bstatic -l boost_system -l boost_filesystem -l db_cxx -Wl,-Bdynamic -l wx_base-2.8 -l wx_gtk2_core-2.8 -l wx_gtk2_html-2.8 -l wx_gtk2_richtext-2.8 -l crypto -l gtk-x11-2.0 -l gthread-2.0 -l SM
$ file ./bitcoin 
./bitcoin: ELF 32-bit LSB executable, Intel 80386, version 1 (FreeBSD), for FreeBSD 7.2, dynamically linked (uses shared libs), FreeBSD-style, not stripped
