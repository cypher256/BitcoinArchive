---
title: "Re: ウォレットを壊してしまい、送金が承認されなくなった"
date: 2010-09-30T16:38:53.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1306.msg14714#msg14714"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「ウォレットを壊してしまい、送金が承認されなくなった」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/464/"
translationStatus: complete
---

お気づきの通り、根本的な問題は、少なくとも 1回の承認があるまでトランザクションをカウントしたり使用したりすべきではないということだ。0/未承認のトランザクションは非常に二級市民的な扱いだ。せいぜい、何かが受信されたという通知程度であり、残高としてカウントしたり使用したりするのは時期尚早だ。

変更を加え、それらが薄い文字で表示され、入金額が[+1.23]のように角括弧で囲まれ、残高にカウントされず、使用もできないようにした。これは自分が送信したトランザクションには適用されない。自分で書いたものなので暗黙的に信頼しているからだ。

(+1.23)にしなかったのは、会計では括弧がマイナスを意味するからだ。角括弧なら意味が明確に区別できることを期待している。

JSON-RPC インターフェースでは、0回の承認を指定することで、引き続き 0/未承認のトランザクションを確認できる。

変更を SVN rev 158 にアップロードした。まもなく 0.3.13 RC を投稿する。

これらのトランザクションがウォレットにある場合は、まもなくリリースされる 0.3.13 にアップグレードするまで支払いを送信しないでほしい。

これらのトランザクションをすでに送信した場合、またはそれらの作成者である場合は、theymos のパッチを使用するか、以下の変更を加えて、クリーンなトランザクションを新しいウォレットに送信してクリーンアップしてほしい。

変更前:
```cpp
    if (pcoin->GetDepthInMainChain() < 1 && pcoin->GetDebit() <= 0)
        continue;
```
変更後:
```cpp
    if (pcoin->GetDepthInMainChain() < 1)
        continue;
```
