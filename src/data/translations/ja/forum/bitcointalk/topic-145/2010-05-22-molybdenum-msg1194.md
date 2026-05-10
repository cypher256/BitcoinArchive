---
title: "CLI での Bitcoin 生成"
date: 2010-05-22T18:44:20.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=145.msg1194#msg1194"
author: "molybdenum"
participants:
  - name: "molybdenum"
    slug: "molybdenum"
description: "BitcoinTalk トピック 145 における molybdenum の文脈投稿。msg1256 で引用。"
isSatoshi: false
tags: []
translationStatus: complete
---

シンプルな bitcoin 用ウェブインターフェースを作ろうとしていて（本格的な wx/GTK GUI よりも軽量でステートレスなもの）、検証中の生成ブロックのステータスを確認する方法が見当たらない…残高が 50 ジャンプするのは見たが、もちろんそれは getallreceived には表示されない。

ヘッドレスのコイン生成マシンにとって、すぐにステータスを確認できると良い。少なくとも、確認待ちのブロックが 30 あるのか、まだ最初の 1 つを取得しようとしているのかが分かると良い…純粋に自動化されていて残高のチェックと転送だけなら、それは問題ではないが。

さらに、GUI クライアントではトランザクションは見つかった時点で表示されるが、getallreceived はブロックが経過した後にのみトランザクションを表示する…しかし残高は適切な量だけすぐにジャンプする。

気の毒な神経質な顧客が支払いが通るかどうか心配して行ったり来たりしている姿が想像できるが、本当はその必要はない。悪意のあるマシンが勝利ブロックを生成して自分の支払いを除外すれば、これはシステムを騙すために使える*可能性*はあるが、確認がまだ 0 の段階でも何かが起きているという即座の表示があると良い。「確認がまだ 0 の間はトランザクションを受け入れるな」という警告タグ付きであっても…0 確認のトランザクションを含む別の関数はどうだろうか？ そのトランザクション後の最小ブロック数を指定するオプションパラメーターは？（getallreceived 1 で現在の動作、またはただの getallreceived、getallreceived 5 は慎重派向け、getallreceived 0 で即座の確認）
