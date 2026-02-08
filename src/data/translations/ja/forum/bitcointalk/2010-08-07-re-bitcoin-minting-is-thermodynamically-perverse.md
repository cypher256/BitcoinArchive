---
title: "Re: Bitcoinの鋳造は熱力学的に逆説的"
date: 2010-08-07T17:46:09.000Z
source: bitcointalk
sourceUrl: "https://bitcointalk.org/index.php?topic=721.msg8114#msg8114"
author: "Satoshi Nakamoto"
participants:
  - name: "Satoshi Nakamoto"
    slug: "satoshi-nakamoto"
description: "Satoshi NakamotoがBitcoinマイニングのコストを金の採掘と比較し、交換手段としての有用性がコストを上回ると主張。Proof-of-workの必要性も解説。"
isSatoshi: true
secondarySources:
  - name: "Satoshi Nakamoto Institute"
    url: "https://satoshi.nakamotoinstitute.org/posts/bitcointalk/327/"
threadId: "bt-bitcoin-minting-is-thermodynamically-perverse"
threadTitle: "Bitcoin minting is thermodynamically perverse"
threadPosition: 1
translationStatus: complete
---

これは金と金の採掘と同じ状況です。金の採掘の限界費用は金の価格付近にとどまる傾向があります。金の採掘は無駄ですが、その無駄は交換手段として金が利用可能であることの有用性よりもはるかに小さいです。

Bitcoinの場合も同じだと思います。Bitcoinによって可能になる取引の有用性は、使用される電力のコストをはるかに上回るでしょう。したがって、Bitcoinを*持たない*ことこそが正味の無駄になるでしょう。

[Quote from: gridecon on August 06, 2010, 04:48:00 PM](https://bitcointalk.org/index.php?topic=721.msg7889#msg7889)全体的な観点として、コイン生成の非常に高い計算負荷が現在のシステムの必要条件であるという考えにも同意しません。私の理解では、通貨の発行は基本的に時間によって制御されます。時間が基本的な制御変数であるなら、その期間内に全員が「できるだけ多くのサイコロを振る」必要があるのはなぜですか？ コインの所有権とトランザクションの「証明のチェーン」はコインの生成方法に依存しません。
各ノードのネットワークへの影響力はCPUパワーに比例します。ネットワークにどれだけのCPUパワーを持っているかを示す唯一の方法は、実際にそれを使うことです。

一人一票のためにカウントできる、各人が有限な量を持つ何か他のものがあれば、私には思いつきません。IPアドレスは...CPUよりもはるかに簡単に大量に入手できます。

*特定の時間に*CPUパワーを測定することは可能かもしれません。例えば、CPUパワーのチャレンジが10分ごとに平均1分だけ実行されるような場合。常に実行しなくても、特定の時点での合計パワーを証明できるでしょう。ただし、どのように実装できるかはわかりません。その時点に存在していなかったノードが、過去のチェーンが連続ではなく9分の休憩を挟んだデューティサイクルで実際に生成されたかを知る方法はありません。

Proof-of-workには、信頼できない仲介者を通じてリレーできるという素晴らしい特性があります。通信の管理連鎖を心配する必要がありません。最長チェーンを誰が教えてくれるかは関係なく、Proof-of-workがそれ自体で語ります。
