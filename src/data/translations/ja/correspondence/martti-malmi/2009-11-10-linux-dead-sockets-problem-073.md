---
title: "返信: Linux - デッドソケット問題"
date: 2009-11-10T16:46:04Z
source: correspondence
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "ゾンビ接続によりネットワークと通信できず、生成したブロックが失われた問題の分析。Linuxのソケットハンドリングの問題と、確認ステータスの表示改善案について議論。"
isSatoshi: true
threadId: "satoshi-martti-malmi"
threadTitle: "Satoshi ↔ Martti Malmi Correspondence"
threadPosition: 73
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "Martti Malmi's Published Email Archive"
    url: "https://mmalmi.github.io/satoshi/"
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
---

何が起こったか分かりました。すべてのソケットが何らかの理由でデッドになりました。ネットワークとの通信がなかったのに、8つのゾンビ接続があったため、まだオンラインだと思い込んでブロックの生成を続けていました。これが起きている時は、ブロックが他の人のブロックが間に入ることなく連番になっていることで分かります：
2/unconfirmed
3/unconfirmed
4/unconfirmed
5/unconfirmed
6 blocks
7 blocks

6ブロック連続であなただけがブロックを見つけるというのは現実的ではありません。

終了して再起動した時、接続してあなたがいない間にネットワークが見つけた45ブロックをダウンロードしました。あなたのブロックはすぐにネットワークにブロードキャストされなかったため、ネットワークはそれらなしで進みました。

Wine上でもまったく同じ問題があったようですね。Linuxのソケットハンドリングに何かがあり、いずれの場合もそれが影響しているようです。

調査を始めます。最終的に問題の根本原因を見つけられない場合は、メッセージの不在を監視して切断する何らかのメカニズムを作る必要があります。今のところの回避策は、より頻繁に終了して再起動することだけです。

あなたのノード接続のうち1つを除いてすべてが同時にデッドになり、1つがその少し後にデッドになりました。IRCはまだ動いていたので、インターネットからオフラインになったわけではありません。

ブロックのステータスは熟成まで「#/unconfirmed」と表示すべきでしょうか（119/unconfirmedから120 blocksへ）。ブロックについては、数字の意味がトランザクションほど強くありません。

自分自身のブロックを確認としてカウントしないようにすることは改善になると思います。欠点は、異なるノードで表示されるステータス番号が一致しなくなることです。ステータス番号はブロックの熟成カウントダウンとも連動しなくなります。より軽い選択肢としては、すべての確認が自分自身のものである場合のみ特別扱いすることです。

Liberty Standardの書き込み：
> 6セットの熟成中のコインを失いました！10セットのBitcoinが熟成中でした。
> 最後のセットは約0:22に生成されました。Bitcoinが固まる前に2/unconfirmedまで
> 行きました。10:10の時点で、0:22に生成されたBitcoinはまだ2/unconfirmedの
> ままでした。コインを失うことはないと教えてくれていたので、Bitcoinを
> シャットダウンして再起動しました。良い面としては、シャットダウンと起動は
> 非常にスムーズでした。しかし残念なことに、ブロックが更新された時、
> 6セットのBitcoinを失いました。4セットはまだ未確認でしたが、2セットは
> 確認済みでした。そして今はそれらの痕跡がありません。「生成されたコインを
> 表示」オプションが使えるようになったので、失敗したBitcoin生成も表示に
> 戻してもらえないでしょうか。それらのBitcoinがただ消えてしまったのが
> 納得できません。現時点ではまだLinuxビルドを実行していますが、過去24時間に
> 生成した10セットのBitcoinのうち6セットが消えた今、Wine版が急に魅力的に
> 見えてきました。debug.logを添付しました。
>
>
> 2009年11月10日 午前1:45、Liberty Standard
> <newlibertystandard@gmail.com <mailto:newlibertystandard@gmail.com>> の書き込み：
>
>     Linuxビルドは過去20時間でかなりの量のBitcoinを生成しましたし、
>     データベースエラーについてのお話を信じているので、今後はLinuxビルドを
>     実行する方向に向かっています。Linuxビルドの唯一のちょっと困った点は、
>     コンピュータのファンが50%から100%になったことです。:-P CPUを制限
>     できることは分かっているので、あまりにも気になって少ないBitcoin
>     生成で済ませるなら、そうするかもしれません。あるいは、もっと音楽を
>     聴き始めるべきかもしれません…
>
...
>
>                    未確認の状態でシャットダウンしてもリスクはありません。
>                     トランザクションや新しいブロックを作成すると、すぐに
>                    ネットワークにブロードキャストされます。その後の
>                    確認数/#の増加は結果を監視しているだけです。
>                    その間にあなたのノードが承認を促進するために
>                    何かをすることはありません。
>
>
>

*出典：COPA対Wright裁判の証言の一環として、2024年2月にMartti MalmiによりGitHubで公開。完全な書簡アーカイブはmmalmi.github.io/satoshi/で閲覧可能。*
