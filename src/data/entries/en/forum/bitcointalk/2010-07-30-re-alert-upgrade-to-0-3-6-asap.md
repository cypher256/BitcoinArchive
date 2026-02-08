---
title: "Re: *** ALERT *** Upgrade to 0.3.6 ASAP!"
date: 2010-07-30T19:53:06.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=626.msg6711#msg6711"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi Nakamoto's reply in the thread \"*** ALERT *** Upgrade to 0.3.6 ASAP!\"."
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/300/"
threadId: "bt-alert-upgrade-to-0-3-6-asap"
threadTitle: "*** ALERT *** Upgrade to 0.3.6 ASAP!"
threadPosition: 4
---

[Quote from: knightmb on July 30, 2010, 07:24:07 PM](https://bitcointalk.org/index.php?topic=626.msg6702#msg6702)I can only imagine the pain you went through to get these builds because I'm trying to build the program on a Ubuntu 9.04 box and so far I can't seem to find all the dependencies to compile no matter how much I keep installing packages and compiling source, LOL.
I can't understand why you're having so much pain.  I just followed the instructions in build-unix.txt.  I made a couple little corrections for Boost 1.37, which I'll put on SVN the next time I update it, noted below:

Dependencies
------------
sudo apt-get install build-essential
sudo apt-get install libgtk2.0-dev
sudo apt-get install libssl-dev
sudo apt-get install libdb4.7-dev
sudo apt-get install libdb4.7++-dev
sudo apt-get install libboost-all-dev (or libboost1.37-dev)

wxWidgets
---------
cd /usr/local
tar -xzvf wxWidgets-2.9.0.tar.gz
cd /usr/local/wxWidgets-2.9.0
mkdir buildgtk
cd buildgtk
../configure --with-gtk --enable-debug --disable-shared --enable-monolithic
make
sudo su
make install
ldconfig

added a comment in makefile.unix:

# for boost 1.37, add -mt to the boost libraries
LIBS= \
 -Wl,-Bstatic \
   -l boost_system \
   -l boost_filesystem \
   -l boost_program_options \
   -l boost_thread \
   -l db_cxx \
   -l crypto \
 -Wl,-Bdynamic \
   -l gthread-2.0
