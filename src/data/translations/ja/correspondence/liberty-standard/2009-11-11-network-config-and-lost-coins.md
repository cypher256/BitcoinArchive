---
title: "Re: Linux - linux-0.1.6-test2 ( ネットワーク構成と続けて失われたコイン )"
date: 2009-11-11T13:08:00Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
sourceNote: "Satoshi と Martti Malmi の往復メール内に引用返信として保存。 2024 年 2 月、 COPA 対 Wright 訴訟での Malmi の証言として GitHub で公開。 Satoshi のメール内引用ヘッダ「On Wed, Nov 11, 2009 at 8:08 AM, Liberty Standard」 の 8:08 を米国現地時刻と解釈し、 概ね 13:08 UTC として換算した。"
author: "Liberty Standard"
participants:
  - name: "Liberty Standard"
    slug: "newlibertystandard"
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Liberty Standard が自宅ネットワーク構成 ( VPN、 NIC、 NAT ) を説明。 test2 でコインを再び失い、 再起動運用を述べる。"
isSatoshi: false
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

私のネットワーク接続はコンピューター直結です。 ISP はインターネット接続に VPN を要求してきます。 そして 2 枚目の NIC を持っていて、 そこからインターネットを他の機器に共有しています。 自分のコンピューター利用時の IP アドレスは実 IP ですが、 2 枚目の NIC 経由で接続する機器は NAT を使います。 仮想マシン経由で接続する時も NAT です。 設定の手間はほぼかかっていません。 Ubuntu の NetworkManager に 2 枚目の NIC 経由でインターネット接続を共有するオプションがあり、 VirtualBox にも NAT を使うオプションがあります。

ビットコインを 2 セット分また失ってしまいましたので、 その問題はまだ直っていません。 状況が理解できるようになった今、 少しは耐えられます。 当面はビットコインのセットが熟成し始めるたびにビットコインを再起動する運用にします。 Linux と Wine の間を行ったり来たりするかもしれませんが、 新版が出るたびに必ず検査します。 今この瞬間も Linux ビルドを動かしています。
