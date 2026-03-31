---
title: "Re: Bitcoinに関すること"
date: 2009-12-23T09:12:03Z
type: "correspondence"
source: "malmi-email-archive"
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

<!-- speaker: Satoshi Nakamoto -->
> プログラムから新しいBitcoinアドレスを生成できる方法を
> 作る必要がある。あるいは、あなたのIPアドレスに送金
> させることもできるが、その場合は相手がコメントに注文
> 番号を入れてくれることに頼らなければならない。

<!-- speaker: Martti Malmi -->
コインが受信されたかどうかを確認したり、コインを送金したりするためのコマンドラインツールも少なくとも必要です。バックグラウンドで動作しているBitcoinプロセスと何らかの方法で通信する必要がありますね。どうすべきかは分かりませんが、RPCに関連する何かでしょうか。

バックグラウンドプロセスが非グラフィカルであればとても助かります。現在のサービスレベルのVPSでは、X Window環境を動かすのに十分なメモリがないです。メモリを解放する方法を見つけない限りは。

<!-- speaker: Satoshi Nakamoto -->
> 注文の確認と入力は、少なくとも最初は手動で行うつもりか？
> 私ならそうする。

<!-- speaker: Martti Malmi -->
はい、少なくとも最初は、顧客がBitcoinを売ってドルを受け取る場合には手動で行います。スクリプトにドルの準備金へのアクセス権を軽々しく与えたくはないです。逆方向（顧客のドル→Bitcoin）はそれほど不安を感じないですし、顧客がすぐにBitcoinを受け取れる方が確実に良いですね。

<!-- speaker: Satoshi Nakamoto -->
> mmalmi@cc.hut.fi の書き込み:
<!-- speaker: Martti Malmi -->
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

*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
