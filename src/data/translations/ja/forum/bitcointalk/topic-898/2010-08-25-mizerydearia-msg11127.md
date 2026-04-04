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
tags: []
translationStatus: complete
---

[Quote from: Macho on August 25, 2010, 03:03:03 AM](#msg11101)
> [Quote from: satoshi on August 24, 2010, 11:51:12 PM](#msg11074)
> > これについてヒステリックになるほど心配性なのであれば、ステータスバーに警告メッセージが表示されたらウェブサイトとフォーラムを確認するくらい心配性なはずだ。
> >
> > オーバーフローバグのような別のバグが発生した場合、自動化されたウェブサイトが管理者が何が起きているか確認して対応を決定できるまで取引を停止することが重要だと思う。誤報だと判断してリスクを取りたい場合は、「-disablesafemode」スイッチを使える。
>
> 分散型の匿名取引システムを作り、信頼に依存せず強力な暗号技術を使うサトシが、我々を心配性と呼んでいる（笑）
>
> 自分のPCで動いているソフトウェアへのリモート操作を望まないのは、心配性ではなく常識だと思う。もちろん良いアイデアではあるが、ユーザーが明示的に要求した場合にのみ有効にすべきだ。オプトアウトではなくオプトインにすべきだ。この2つには大きな違いがある（Facebookに聞いてみるとよい）。デフォルトで有効になっていると、多くの人がその存在に気づかないことを前提とした、悪用可能な・悪意ある機能として認識されるだろう。そして、そうした懸念は正当化されないとは言えない……あなたがコミュニティの最善の利益を心に持っていることは確かだが、このシステムはいかなる中央の信頼にも依存しないよう設計されたものであり、その原則を破るべきではない。
>
> この機能を有効にするために、-disablesafemodeでユーザーに無効化を期待するのではなく、-enablesafetyを使うのはどうか？自分のソフトウェアがリモートアラートに応答するようにしたいなら、明示的に有効にすべきであり、そうすれば自分が何をしているか認識し、自分の意思で行っていることが保証される。デフォルトで有効になっていると、多くの人はこの「機能」が有効であることに気づかず、リモートによる無効化を信頼の裏切りと受け取るかもしれない……もしこの可能性を知らずにソフトウェアが突然動かなくなり、許可を与えていない誰かによってリモートで無効にされたことを発見したら、自分なら確実にそう感じる。
>
> この提案を検討してもらえると嬉しい……ありがとう

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
