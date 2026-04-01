---
title: "Re:（mizerydearia の引用投稿）"
date: 2010-08-25T09:14:31.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=898.msg11127#msg11127"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "BitcoinTalkトピック898におけるmizerydearia の引用投稿。"
isSatoshi: false
threadId: "bt-development-of-alert-system"
tags: []
translationStatus: complete
---

[Quote from: Macho on August 25, 2010, 03:03:03 AM](#msg11101)
> 

同意するが、ソースからコンパイルする場合、

rpc.cpp
Code:!mapArgs.count("-disablesafemode")
を
Code:mapArgs.count("-safemode")
に変更するだけで

Code:// Observe lockdown
throw runtime_error(strWarning);
となる。
コードはこちらで確認できる：http://bitcoin.svn.sourceforge.net/viewvc/bitcoin/trunk/rpc.cpp?revision=142&view=markup

-enablesafetyを使ったときだけエラーを表示するのは少し奇妙だ。これが起きると安全でない、あるいはセキュリティ上問題があるのだろうか？

http://www.bitcoin.org/wiki/doku.php?id=api

コードを理解した限りでは、getinfo、help、stop、getgenerate、setgenerate以外の http://www.bitcoin.org/wiki/doku.php?id=api のメソッドを使用する際、かつ警告がある場合：

-disablesafemodeが実行中のプロセスに渡されていれば、警告は表示されない
-disablesafemodeが実行中のプロセスに渡されていなければ、警告が表示される

http://www.cplusplus.com/reference/std/stdexcept/runtime_error/
