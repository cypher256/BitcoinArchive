---
title: "Re: Bitcoin.orgのバックアップ"
date: 2010-12-20T21:21:27Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "マルミがbitcoin.orgの別サーバーへのバックアップ開始に同意し、PGP鍵を共有。バックアップサイズは約50MBと報告。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "bitcoin-org"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "Gavin Andresen"
    personSlug: "gavin-andresen"
  - id: "q2"
    person: "mmalmi@cc.hut.fi"
    personSlug: "martti-malmi"
    parent: "q1"
translationStatus: complete
---

<!-- speaker: Martti Malmi -->
分かりました。使用している別のサーバーへのバックアップを開始します。設定が完了したらSSH鍵を送りますので、お好きなサーバーにバックアップできるようになります。バックアップファイルのサイズは現在約50MBです。

ちなみに、僕のPGP鍵はこちらです：http://www.bitcoin.org/mmalmi.asc

<!-- tone-skip -->
<!-- speaker: Satoshi Nakamoto -->
> <!-- quote: q1 -->
>> <!-- quote: q2 -->
>> <!-- speaker: Satoshi Nakamoto -->
>>> ShadowOfHarbringerがbitcoin.orgのウェブサイトとフォーラムのミラーリング方法をここで説明している：
>>> http://www.bitcoin.org/smf/index.php?topic=2026.msg30043#msg30043
>>>
>>> この方法に従って、パスワードハッシュを含むデータベースをサーバーを持つ信頼できるコミュニティメンバーに預けるべきだろうか？
>> <!-- speaker: Martti Malmi -->
>>
>> それは問題を招くことになりそうですし、フォーラムに登録した全員の暗黙の信頼を裏切ることになると思います。
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
>> その方が賢明だと思います。毎日のバックアップをどこかにコピーするのが正しいやり方でしょう。合理的なサイズ（1ギガバイト未満）であれば、Amazon S3のストレージと帯域幅の費用を喜んで負担します。
> <!-- speaker: Satoshi Nakamoto -->
>
> +1
>
> 暗号化していたとしても、信頼できる保管場所の方が良い。

<!-- /tone-skip -->

<!-- speaker: Martti Malmi -->
*出典：COPA対ライト裁判の証言の一環として、2024年2月にマルッティ・マルミによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
