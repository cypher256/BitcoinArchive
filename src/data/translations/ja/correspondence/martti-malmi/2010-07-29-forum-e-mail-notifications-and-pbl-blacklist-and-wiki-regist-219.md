---
title: "フォーラムのメール通知とPBLブラックリストとWiki登録"
date: 2010-07-29T02:18:56Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "フォーラムのメール通知がスパム問題を引き起こしている可能性を指摘し、メール認証の有効化を実施"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 219
tags:
  - "correspondence"
  - "early-contributor"
  - "forum"
  - "wiki"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

http://www.bitcoin.org/smf/index.php?topic=338.0

> メールブラックホールリスト、もしくは少なくとも登録用メールサーバーをホストしているISPがそれらのリストに載っています。
>
> 「bitcoin.orgがPBLに載っているようです。」
> http://www.spamhaus.org/pbl/query/PBL340779

問題は、PMを受信した際のメール通知などのフォーラム通知が有効になっている一方で、新規アカウントのメール認証がないことかもしれません。認証なしに他人のメールアドレスを登録して、そこに通知を送ることができてしまうのでしょうか？悪用される前にすぐに止める必要があります。通知を全て無効にするか、メールアドレスの認証を確実にするかのどちらかです。

個人的には、通知やフォーラムからメールが送られる機能を全て無効にする方に傾いています。メール認証を必須にしないのは割と気に入っています。でも、未認証のアドレスにメールを送らないようにする唯一の方法がそれなら、そうするしかありません。

PBLからの除外を申請するなら、まず問題を確実に解決してからにすべきです。

Registration->settings->新規メンバーの登録を「Member Activation」に変更しました。これでメール認証が行われると思います。
「Member Activation
このオプションが有効な場合、フォーラムに登録するメンバーには有効化リンクがメールで送信され、正式なメンバーになる前にそれをクリックする必要があります」

フォーラムが他人のメールアドレスへの送信に使われたり、スパムに利用されたりしないようにする唯一の方法はこれだと思います。

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
