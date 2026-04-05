---
title: "Re: CLIビットコイン生成"
date: 2010-05-26T20:09:34.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=145.msg1256#msg1256"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "スレッド「CLIビットコイン生成」におけるサトシ・ナカモトの返信。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/109/"
translationStatus: complete
---

[Quote from: molybdenum on May 22, 2010, 06:44:20 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-145/2010-05-22-molybdenum-msg1194/)
> シンプルなbitcoin用ウェブインターフェースを作ろうとしていて（本格的なwx/GTK GUIよりも軽量でステートレスなもの）、検証中の生成ブロックのステータスを確認する方法が見当たらない…残高が50ジャンプするのは見たが、もちろんそれはgetallreceivedには表示されない。
>
> ヘッドレスのコイン生成マシンにとって、すぐにステータスを確認できると良い。少なくとも、確認待ちのブロックが30あるのか、まだ最初の1つを取得しようとしているのかが分かると良い…純粋に自動化されていて残高のチェックと転送だけなら、それは問題ではないが。
>
> さらに、GUIクライアントではトランザクションは見つかった時点で表示されるが、getallreceivedはブロックが経過した後にのみトランザクションを表示する…しかし残高は適切な量だけすぐにジャンプする。
>
> 気の毒な神経質な顧客が支払いが通るかどうか心配して行ったり来たりしている姿が想像できるが、本当はその必要はない。悪意のあるマシンが勝利ブロックを生成して自分の支払いを除外すれば、これはシステムを騙すために使える*可能性*はあるが、確認がまだ0の段階でも何かが起きているという即座の表示があると良い。「確認がまだ0の間はトランザクションを受け入れるな」という警告タグ付きであっても…0確認のトランザクションを含む別の関数はどうだろうか？ そのトランザクション後の最小ブロック数を指定するオプションパラメータは？（getallreceived 1で現在の動作、またはただのgetallreceived、getallreceived 5は慎重派向け、getallreceived 0で即座の確認）
ああ、実際にそういう仕組みだ。getallreceived 0で望むことができるはずだ。（現在はlistreceivedbyaddress 0に名前が変更されている）デフォルトは1確認だが、実際にはほとんどのデジタル商品やサービスは0確認で問題ないと思う。その通り、0確認以上が必要な場合は、未確認と利用可能残高の2つの数字を表示すれば、トランザクションが通ったことをすぐに確認できる。

listreceivedbyaddress [minconf=1] [includeempty=false]<br>
[minconf]は支払いが含まれる前の最小確認数だ。<br>
[includeempty]はまだ支払いを受けていないアドレスを含めるかどうかだ。<br>
以下を含むオブジェクトの配列を返す:<br>
  "address" : 受取アドレス<br>
  "label" : 受取アドレスのラベル<br>
  "amount" : アドレスが受け取った合計金額<br>
  "confirmations" : 含まれる最新トランザクションの確認数

アドレスにユーザー名でラベルを付けている場合はlistreceivedbylabelも使える。

今のところ、ウェブ加盟店向けの機能に集中しており、ヘッドレスコイン生成器のリモート管理用の機能にはまだあまり取り組んでいない。
