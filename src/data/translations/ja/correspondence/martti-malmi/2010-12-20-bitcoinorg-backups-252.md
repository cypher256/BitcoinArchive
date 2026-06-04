---
title: "Re: Bitcoin.org のバックアップ"
date: 2010-12-20T21:21:27Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "2024 年 2 月、COPA 対ライト裁判の証言の一環として GitHub で公開"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミが bitcoin.org の別サーバーへのバックアップ開始に同意し、PGP 鍵を共有。バックアップサイズは約 50MB と報告。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "bitcoin-org"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "Satoshi Nakamoto"
    personSlug: "satoshi-nakamoto"
    date: "2010-12-20T18:10:06Z"
    sourceEntryId: "correspondence/martti-malmi/2010-12-20-bitcoinorg-backups-251"
  - id: "q2"
    person: "Gavin Andresen"
    personSlug: "gavin-andresen"
    parent: "q1"
    date: "2010-12-20T17:00:00Z"
    sourceEntryId: "correspondence/gavin-andresen/2010-12-20-bitcoinorg-backups"
  - id: "q3"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
    parent: "q2"
    date: "2010-12-20T15:55:04Z"
    sourceEntryId: "correspondence/martti-malmi/2010-12-20-bitcoinorg-backups-250"
translationStatus: complete
---

<!-- speaker: Martti Malmi -->
分かりました。使用している別のサーバーへのバックアップを開始します。設定が完了したら SSH 鍵を送りますので、お好きなサーバーにバックアップできるようになります。バックアップファイルのサイズは現在約 50MB です。

ちなみに、僕の PGP 鍵はこちらです：http://www.bitcoin.org/mmalmi.asc

<!-- tone-skip -->
<!-- quote: q1 -->
<!-- speaker: Satoshi Nakamoto -->
> <!-- quote: q2 -->
>> <!-- quote: q3 -->
>>> <!-- speaker: Martti Malmi -->
>>> ShadowOfHarbringerがbitcoin.orgのウェブサイトとフォーラムのミラーリング方法をここで説明しています：<br>
>>> http://www.bitcoin.org/smf/index.php?topic=2026.msg30043#msg30043
>>>
>>> この方法に従って、パスワードハッシュを含むデータベースをサーバーを持つ信頼できるコミュニティメンバーに預けるべきだろうか？
>> <!-- speaker: Martti Malmi -->
>>
>> 問題を招き入れるようなものだし、 フォーラムに登録した全員の暗黙の信頼を裏切ることになると思う。
> <!-- speaker: Satoshi Nakamoto -->
>
> 同意だ。データベースは手元から出さないでほしい。プライベートメッセージ、メールアドレス、パスワードが入っている。
>
> ちなみに、パスワードハッシュ＝パスワードだ。フォーラムで人々が使う短いパスワードのハッシュを破るのは簡単だ。
> 6文字 = 3の難易度
> 7文字 = 410の難易度
> 8文字 = 25418の難易度
>
>
>>> もう一つの選択肢は
>>> <!-- speaker: Martti Malmi -->
>>>> バックアップをPGPで暗号化して複数の場所に保管することです。
>>
>> そちらの方が賢明だ。 日次バックアップを ... どこか ... へ複製するのが、 やるべきことのように思える。 妥当な大きさ ( 1 ギガバイト未満 ) なら、 Amazon S3 の保存・帯域費用は私が喜んで負担する。
> <!-- speaker: Satoshi Nakamoto -->
>
> +1
>
> 暗号化していたとしても、信頼できる保管場所の方が良い。

<!-- /tone-skip -->

<!-- speaker: Martti Malmi -->
