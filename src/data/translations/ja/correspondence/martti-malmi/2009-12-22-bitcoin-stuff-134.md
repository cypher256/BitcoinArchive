---
title: "Re: Bitcoinに関すること"
date: 2009-12-22T19:00:41Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがマルミの取引所計画に回答し、プログラムによるBitcoinアドレス生成、アドレスの使い回しの懸念、支払い受信のUI改善を議論。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
---

<!-- speaker: Satoshi Nakamoto -->
メンテナンス用アカウントを作成してくれてありがとう。それがなければあれだけの作業は不可能だった。今後も常に必要になる。了解した、パスワードは20文字のランダムなものに変更した。

良いドメインだ。最近はドメイン名を直接入力する人はほとんどいない。オートコンプリートを使うか、検索エンジンのリンクをクリックする。

プログラムから新しいBitcoinアドレスを生成できる方法を作る必要がある。あるいは、あなたのIPアドレスに送金させることもできるが、その場合は相手がコメントに注文番号を入れてくれることに頼らなければならない。

新しいアドレスを生成する際に、アドレス帳にそのアドレスに関連付けたエントリを追加するオプションを付けることができる。そうすれば受信したトランザクションにラベルが付く。初期のユーザーが分かりにくいと感じたので、ラベル機能はちょっと隠してしまったが、このアプリケーションにはとても役立つだろう。コメント列を広げれば見えるようになる。

注文の確認と入力は、少なくとも最初は手動で行うつもりか？私ならそうする。

UIの方向性として、ユーザーが必要な時にBitcoinアドレスを要求するようにしたいと考えている。<!-- tone-skip -->「支払いを受け取るためのBitcoinアドレスをください」<!-- /tone-skip -->というような感じだ。送信ボタンの隣に受信ボタンがあって、押すと「使用する新しいアドレスはこちらだ。クリップボードにコピーするボタンはこちら。ラベルを付けるか？」と表示され、アドレスを使い回すべきでない理由の説明もあるかもしれない。

あるいは、アドレスボックスの隣に「新しいアドレス」ボタンを置いて、毎回それを押して変更するだけでもいいかもしれない。

<!-- speaker: Martti Malmi -->
<!-- quote: q1 -->
<!-- tone-skip -->
> ドメイン名bitcoinexchange.comを登録しました。余暇の活動として近いうちに
> サービスのコーディングを始めるつもりです。登録不要でGoogleのような
> シンプルなインターフェースを構想しています。フロントページにはテキスト
> フィールドが2つだけあり、取引したい金額を入力し、ドルを買う場合は
> PayPalアドレスを、Bitcoinを買う場合はBitcoinアドレスを入力します。
> 次のページでは、コインを送金するための新しいBitcoinアドレスか、
> PayPal取引テキスト用のチェックコードが表示されます。
>
> PayPalは最初には良い選択肢です。シンプルで初期費用もかかりません。
> ただし、後々クレジットカードも受け付けるかもしれません。
>
> メンテナンス用アカウントはまだ必要ですか？必要なら問題ありませんが、
> パスワードを別のものに変更してください。
>
<!-- /tone-skip -->
