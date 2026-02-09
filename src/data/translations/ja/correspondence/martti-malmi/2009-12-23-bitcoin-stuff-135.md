---
title: "返信: Bitcoinに関すること"
date: 2009-12-23T09:12:03Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "コインが受信されたかどうかを確認したり、コインを送金したりするためのコマンドラインツールも少なくとも必要です。"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 135
tags:
  - "correspondence"
  - "early-contributor"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

> プログラムから新しいBitcoinアドレスを生成できる方法を
> 作る必要があります。あるいは、あなたのIPアドレスに送金
> させることもできますが、その場合は相手がコメントに注文
> 番号を入れてくれることに頼らなければなりません。

コインが受信されたかどうかを確認したり、コインを送金したりするためのコマンドラインツールも少なくとも必要です。バックグラウンドで動作しているBitcoinプロセスと何らかの方法で通信する必要があります。どうすべきかは分かりませんが、RPCに関連する何かでしょうか。

バックグラウンドプロセスが非グラフィカルであればとても助かります。現在のサービスレベルのVPSでは、X Window環境を動かすのに十分なメモリがありません。メモリを解放する方法を見つけない限りは。

> 注文の確認と入力は、少なくとも最初は手動で行うつもりですか？
> 私ならそうしますね。

はい、少なくとも最初は、顧客がBitcoinを売ってドルを受け取る場合には手動で行います。スクリプトにドルの準備金へのアクセス権を軽々しく与えたくはありません。逆方向（顧客のドル→Bitcoin）はそれほど不安を感じませんし、顧客がすぐにBitcoinを受け取れる方が確実に良いです。

> mmalmi@cc.hut.fi の書き込み:
>> ドメイン名bitcoinexchange.comを登録しました。余暇の活動として
>> 近いうちにサービスのコーディングを始めるつもりです。登録不要で
>> Googleのようなシンプルなインターフェースを構想しています。フロント
>> ページにはテキストフィールドが2つだけあり、取引したい金額を入力し、
>> ドルを買う場合はPayPalアドレスを、Bitcoinを買う場合はBitcoin
>> アドレスを入力します。次のページでは、コインを送金するための
>> 新しいBitcoinアドレスか、PayPal取引テキスト用のチェックコードが
>> 表示されます。
>>
>> PayPalは最初には良い選択肢です。シンプルで初期費用もかかりません。
>> ただし、後々クレジットカードも受け付けるかもしれません。
>>
>> メンテナンス用アカウントはまだ必要ですか？必要なら問題ありませんが、
>> パスワードを別のものに変更してください。
>>

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
