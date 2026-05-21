---
title: "Re: Bitcoin.org のバックアップ"
date: 2010-12-20T17:00:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Martti Malmi のアーカイブで、 Satoshi の返信 ( email #251 ) 内に引用返信として保存されたもの。 2024 年 2 月、 COPA 対 Wright 訴訟における Malmi の証言の一部として GitHub で公開された。 Gavin の元メッセージの正確な送信時刻は記録されていない。 上記の時刻は Malmi の送信 ( 15:55:04 UTC ) と Satoshi の返信 ( 18:10:06 UTC ) の間からの目安。"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
  - name: "Martti Malmi"
    slug: "martti-malmi"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "ギャビンは、 フォーラムの DB 配布は登録者の信頼を裏切ると警告。 PGP 暗号化による日次バックアップを支持し、 1GB 未満なら Amazon S3 費用を負担すると申し出る。"
isSatoshi: false
tags:
  - "correspondence"
  - "bitcoin-org"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
quotes:
  - id: "q1"
    person: "Martti Malmi"
    personSlug: "martti-malmi"
    sourceEntryId: "correspondence/martti-malmi/2010-12-20-bitcoinorg-backups-250"
translationStatus: complete
---

2010 年 12 月 20 日 ( 月 ) 午前 10:55、 <mmalmi@cc.hut.fi> は次のように書いている。

<!-- quote: q1 -->
> ShadowOfHarbringer が bitcoin.org のサイトとフォーラムを
> ミラーする方法をこちらで説明している。
> http://www.bitcoin.org/smf/index.php?topic=2026.msg30043#msg30043
>
> パスワードハッシュごとデータベースを、 サーバーを持っている
> 信頼できる地域社会の有志に預けるべきだろうか ?

問題を招き入れるようなものだし、 フォーラムに登録した全員の暗黙の信頼を裏切ることになると思う。

> もう一つの選択肢は、 PGP でバックアップを暗号化して
> 複数箇所に保管することだ。

そちらの方が賢明だ。 日次バックアップを ... どこか ... へ複製するのが、 やるべきことのように思える。 妥当な大きさ ( 1 ギガバイト未満 ) なら、 Amazon S3 の保存・帯域費用は私が喜んで負担する。
