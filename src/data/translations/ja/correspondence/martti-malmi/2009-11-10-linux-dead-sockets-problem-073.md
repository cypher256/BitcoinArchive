---
title: "Re: Linux - デッドソケット問題"
date: 2009-11-10T16:46:04Z
type: "correspondence"
source: "malmi-email-archive"
sourceUrl: "https://mmalmi.github.io/satoshi/"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
  - name: "Martti Malmi"
    slug: "martti-malmi"
description: "サトシがLinux上のゾンビソケット問題を診断。デッド接続により生成ブロックが失われた原因を特定し、ブロック確認ステータス表示の改善案を検討。"
isSatoshi: true
tags:
  - "correspondence"
  - "early-contributor"
  - "linux"
secondarySources:
  - name: "COPA v. Wright Trial Exhibits"
    url: "https://www.opencrypto.org/2024-02-22-witnesses-satoshi-correspondence/"
translationStatus: complete
quotes:
  - id: "q1"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
  - id: "q2"
    person: "Liberty Standard"
    personSlug: "newlibertystandard"
    parent: "q1"
---

<!-- speaker: Satoshi Nakamoto -->
何が起こったか分かった。すべてのソケットが何らかの理由でデッドになった。ネットワークとの通信がなかったのに、8つのゾンビ接続があったため、まだオンラインだと思い込んでブロックの生成を続けていた。これが起きている時は、ブロックが他の人のブロックが間に入ることなく連番になっていることで分かる：
2/unconfirmed
3/unconfirmed
4/unconfirmed
5/unconfirmed
6 blocks
7 blocks

6ブロック連続であなただけがブロックを見つけるというのは現実的ではない。

終了して再起動した時、接続してあなたがいない間にネットワークが見つけた45ブロックをダウンロードした。あなたのブロックはすぐにネットワークにブロードキャストされなかったため、ネットワークはそれらなしで進んだ。

Wine上でもまったく同じ問題があったようだな。Linuxのソケットハンドリングに何かがあり、いずれの場合もそれが影響しているようだ。

調査を始める。最終的に問題の根本原因を見つけられない場合は、メッセージの不在を監視して切断する何らかのメカニズムを作る必要がある。今のところの回避策は、より頻繁に終了して再起動することだけだ。

あなたのノード接続のうち1つを除いてすべてが同時にデッドになり、1つがその少し後にデッドになった。IRCはまだ動いていたので、インターネットからオフラインになったわけではない。

ブロックのステータスは熟成まで「#/unconfirmed」と表示すべきだろうか（119/unconfirmedから120 blocksへ）。ブロックについては、数字の意味がトランザクションほど強くない。

自分自身のブロックを確認としてカウントしないようにすることは改善になると思う。欠点は、異なるノードで表示されるステータス番号が一致しなくなることだ。ステータス番号はブロックの熟成カウントダウンとも連動しなくなる。より軽い選択肢としては、すべての確認が自分自身のものである場合のみ特別扱いすることだ。

<!-- speaker: Liberty Standard -->
<!-- quote: q1 -->
<!-- tone-skip -->
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
> 2009年11月10日午前1:45、Liberty Standard
> <!-- quote: q2 -->
>
>> Linuxビルドは過去20時間でかなりの量のBitcoinを生成しましたし、
>> データベースエラーについてのお話を信じているので、今後はLinuxビルドを
>> 実行する方向に向かっています。Linuxビルドの唯一のちょっと困った点は、
>> コンピューターのファンが50%から100%になったことです。:-P CPUを制限
>> できることは分かっているので、あまりにも気になって少ないBitcoin
>> 生成で済ませるなら、そうするかもしれません。あるいは、もっと音楽を
>> 聴き始めるべきかもしれません…
<!-- /tone-skip -->
...
>
<!-- speaker: Satoshi Nakamoto -->
>                    未確認の状態でシャットダウンしてもリスクはない。
>                     トランザクションや新しいブロックを作成すると、すぐに
>                    ネットワークにブロードキャストされる。その後の
>                    確認数/#の増加は結果を監視しているだけだ。
>                    その間にあなたのノードが承認を促進するために
>                    何かをすることはない。
>
>
>
