---
title: "Re: [4+ EH] Slush Pool (slushpool.com); Overt AsicBoost; 世界初のマイニングプール"
date: 2010-11-28T16:03:30.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=1976.msg25119#msg25119"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「協力マイニング」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/517/"
translationStatus: complete
---

ribuck の説明はまさにその通りだ。

プールオペレーターは getwork を修正して、シェアの送付先アドレスという追加パラメーターを 1 つ受け取るようにできる。

プールオペレーターにとって簡単な方法は、次のブロックが見つかるまで待って、以下の割合で分配することだ：
ユーザーのニアヒット数/全員からの合計ニアヒット数

そうすればより簡単かつ安全に開始できる。同じユーザーからの複数のヒットを 1 つのトランザクションにまとめられるという利点もある。ヒットの多くは通常同じ人からのものになるだろう。

即時報酬の方法は、各ニアヒットに対して即座に固定額を支払い、オペレーターがブロックが見つかるまでのニアヒット数の多寡によるランダムさのリスクを負うことだ。

どちらの方法でも、ブロックを解決するヒットを提出したユーザーは、例えば 10 BTC のように、上乗せの追加額を受け取るべきだ。

新規ユーザーは Bitcoin ソフトウェアすら必要ない。マイナーをダウンロードし、mtgox や mybitcoin でアカウントを作成し、入金アドレスをマイナーに入力して、誰かのプールサーバーに向ければよいのだ。マイナーが何かを見つけたと表示したら、しばらくしてアカウントにいくらかのコインが表示される。

マイナーの開発者は、ニアヒットの偽陽性を決して出さないようにする方が良い。ユーザーはプールオペレーターが不正をしていないかチェックするためにそれに依存する。マイナーが誤って何か見つけたと表示すると、ユーザーはアカウントを確認し、何もないのを見て、プールオペレーターに怒ることになる。
