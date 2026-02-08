---
title: "返信: IPアドレスの代わりにホスト名"
date: 2010-06-14T19:53:44.000Z
source: bitcointalk
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

SirArthurは通常のオンライン加盟店のケースについて良い指摘をしています。これはIP送信オプションがより適している場合です。加盟店が固定IPのサーバーを持ち、独自のドメイン名とSSL証明書を持つケースです。

IPで接続する代わりに、既存のCA基盤を使用して、そのドメインの所有者に接続していることを認証しながら、SSLでドメイン名に接続できます。

ユーザーはdomain.com（または[www.domain.com](http://www.domain.com)でもOK）に送信します。これは非常に自然で、ユーザーは入力した内容が支払いたい相手であることを確認できます。

SSLはTORユーザーにとっても安全になります。

問題は、加盟店は支払いが何のためのものか確実に把握するために、やはりビットコインアドレスの使用を好むだろうということです。コメント欄にトランザクションを識別するための正しい情報を入力してくれるとユーザーに期待することは、単純にできません。注文番号でコメント欄を事前入力するmailtoスタイルのリンクがあれば実用に近づきますが、そのリンクにはビットコインアドレスを入れても同じことです。

domain.comにユーザーが身元不明の支払いを送信できるオープンなビットコインサーバーを持つだけでは、リスクが大きすぎます。一般ユーザーは支払いを識別する必要があるという考えに慣れていません。加盟店は空白の支払いを大量に受け取り、その後1週間後に「支払いましたが、商品はどこですか？！」というクレームが来ることになるでしょう。

支払いシーケンスには、受取人が受け入れる前に注文を確認するステップがあります。有効な注文番号が含まれていない場合、支払いを拒否してエラーメッセージを返すことができます。しかし、それにはビットコインサーバーとカスタムコードの困難なレベルの統合が必要です。
