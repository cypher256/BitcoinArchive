---
title: "返信: Bitcoin.orgのバックアップ"
date: 2010-12-20T21:21:27Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Martti Malmi"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "Marttiが別サーバーへのバックアップ開始を報告し、PGP鍵を共有"
isSatoshi: false
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 252
tags:
  - "correspondence"
  - "early-contributor"
  - "bitcoin-org"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

分かりました。使用している別のサーバーへのバックアップを開始します。設定が完了したらSSH鍵を送りますので、お好きなサーバーにバックアップできるようになります。バックアップファイルのサイズは現在約50MBです。

ちなみに、私のPGP鍵はこちらです：http://www.bitcoin.org/mmalmi.asc

> Gavin Andresen の書き込み：
>> Mon, Dec 20, 2010 at 10:55 AM に <mmalmi@cc.hut.fi> が書きました：
>>> ShadowOfHarbringerがbitcoin.orgのウェブサイトとフォーラムのミラーリング方法をここで説明しています：
>>> http://www.bitcoin.org/smf/index.php?topic=2026.msg30043#msg30043
>>>
>>> この方法に従って、パスワードハッシュを含むデータベースをサーバーを持つ信頼できるコミュニティメンバーに預けるべきでしょうか？
>>
>> それは問題を招くことになりそうですし、フォーラムに登録した全員の暗黙の信頼を裏切ることになると思います。
>
> 同意です。データベースは手元から出さないでください。プライベートメッセージ、メールアドレス、パスワードが入っています。
>
> ちなみに、パスワードハッシュ＝パスワードです。フォーラムで人々が使う短いパスワードのハッシュを破るのは簡単です。
> 6文字 = 3の難易度
> 7文字 = 410の難易度
> 8文字 = 25418の難易度
>
>
>>> もう一つの選択肢は
>>>> バックアップをPGPで暗号化して複数の場所に保管することです。
>>
>> その方が賢明だと思います。毎日のバックアップをどこかにコピーするのが正しいやり方でしょう。合理的なサイズ（1ギガバイト未満）であれば、Amazon S3のストレージと帯域幅の費用を喜んで負担します。
>
> +1
>
> 暗号化していたとしても、信頼できる保管場所の方が良いですね。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
