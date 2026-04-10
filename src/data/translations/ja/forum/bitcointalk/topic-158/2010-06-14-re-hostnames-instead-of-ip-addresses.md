---
title: "Re: IPアドレスの代わりにホスト名を"
date: 2010-06-14T19:53:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=158.msg1582#msg1582"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「IPアドレスの代わりにホスト名」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/118/"
translationStatus: complete
---

SirArthurは通常のオンライン加盟店のケースについて良い指摘をしている。これはIP送信オプションがより適している場合だ。加盟店が固定IPのサーバーを持ち、独自のドメイン名とSSL証明書を持つケースだ。

IPで接続する代わりに、既存のCA基盤を使用して、そのドメインの所有者に接続していることを認証しながら、SSLでドメイン名に接続できる。

ユーザーはdomain.com（または[www.domain.com](http://www.domain.com)でもOK）に送信する。これは非常に自然で、ユーザーは入力した内容が支払いたい相手であることを確認できる。

SSLはTORユーザーにとっても安全になる。

問題は、加盟店は支払いが何のためのものか確実に把握するために、やはりビットコインアドレスの使用を好むだろうということだ。コメント欄にトランザクションを識別するための正しい情報を入力してくれるとユーザーに期待することは、単純にできない。注文番号でコメント欄を事前入力するmailtoスタイルのリンクがあれば実用に近づくが、そのリンクにはビットコインアドレスを入れても同じことだ。

domain.comにユーザーが身元不明の支払いを送信できるオープンなビットコインサーバーを持つだけでは、リスクが大きすぎる。一般ユーザーは支払いを識別する必要があるという考えに慣れていない。加盟店は空白の支払いを大量に受け取り、その後1週間後に「支払ったが、商品はどこだ？！」というクレームが来ることになるだろう。

支払いシーケンスには、受取人が受け入れる前に注文を確認するステップがある。有効な注文番号が含まれていない場合、支払いを拒否してエラーメッセージを返すことができる。しかし、それにはビットコインサーバーとカスタムコードの困難なレベルの統合が必要だ。
