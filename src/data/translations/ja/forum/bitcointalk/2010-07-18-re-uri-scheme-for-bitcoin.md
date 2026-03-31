---
title: "Re: BitcoinのURIスキーム"
date: 2010-07-18T16:06:16.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=55.msg4008#msg4008"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「BitcoinのURIスキーム」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/240/"
threadId: "bt-uri-scheme-for-bitcoin"
translationStatus: complete
---

> [Quote from: lachesis on June 16, 2010, 06:14:05 AM](#msg1597)
> I think you're misunderstanding the issue. My browser will always be able to go to 127.0.0.1 (barring some strange IE settings or a virus). If I type the address into the URL bar or click a link, it will work fine. However, it isn't possible to use Javascript to complete POST requests between domains (or ports on the same domain).

私もそう思っていた。

> [Quote from: sirius-m on June 16, 2010, 08:26:14 AM](#msg1598)
> ああ、言いたかったのはクロスドメインのJavaScript呼び出しは禁止されているということだ。つまり、127.0.0.1に存在しないJavaScriptから127.0.0.1を呼び出すことはできない。考えてみれば、もしブラウザが悪意あるクロスドメインJavaScriptで他人のFacebookページを変更できたら、かなり面白いことになるだろうな。

JavaScriptが127.0.0.1へのクロスドメインPOSTリクエストを実行することが可能だという報告が入ってきた。他のドメインではなく、特にそのドメインだけだ。素晴らしい……

もしこれが事実であれば、ウェブブラウジングをするシステムで-serverスイッチやbitcoindを使用しないでほしい。

パスワードフィールドの追加に取りかかる。
