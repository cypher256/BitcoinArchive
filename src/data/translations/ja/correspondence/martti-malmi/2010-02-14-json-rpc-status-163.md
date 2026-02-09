---
title: "返信: JSON-RPCの状況"
date: 2010-02-14T21:48:31Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "おそらく折れてそうすることになるでしょう。initとshutdownをinit.cppかstart.cppなどに移動できます。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 163
tags:
  - "correspondence"
  - "early-contributor"
  - "json-rpc"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

mmalmi@cc.hut.fi wrote:
>> まだ私のJSON-RPCサーバーを他のものでテストしていません。もしテストしたら、
>> 結果を教えてください。Pythonを使っていますよね？
>>
>> Linux版をGTKなしで動作させるのは別の作業になります。
>
> はい、Pythonを使っています。VPSでまだBitcoinを動かしていないので、JSON-RPC
> のテストはまだしていません。GTKライブラリがインストールされていても、ウィンドウ
> マネージャーなしでは動作しません。wxWidgetsフォーラム
> （http://wxforum.shadonet.com/viewtopic.php?t=26954）で質問しましたが、
> あまり手がかりはありませんでした。2つの異なるバイナリを作る必要があるかも
> しれません。

おそらく折れてそうすることになるでしょう。initとshutdownをinit.cppかstart.cppなどに移動し、wxbaseだけをリンクしてui.oとuibase.oはリンクしないようにできます。

wxWidgetsはWindowsの人が多いので、GTKについてはあまり詳しくないでしょう。

VPSをいじらなくても済むように、テストやコンパイルができるUbuntuのノートパソコンを持っていませんか？

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
