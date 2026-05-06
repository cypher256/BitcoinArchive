---
title: "ヴィタリック・ブテリン (1994–) — Bitcoin Magazine 共同創設、19 歳でイーサリアムを立ち上げ、暗号通貨第二勢力を築いた人物"
date: 2011-09-01T00:00:00Z
type: "biography"
source: "wikipedia"
sourceUrl: "https://en.wikipedia.org/wiki/Vitalik_Buterin"
author: "Bitcoin Institute"
participants:
  - name: "Vitalik Buterin"
    slug: "vitalik-buterin"
description: "プログラマー (1994–)。2011 年にビットコイン参入、Bitcoin Magazine 共同創設、pybitcointools 著者、2013 年末イーサリアム白書執筆。"
isSatoshi: false
tags:
  - "vitalik-buterin"
  - "biography"
  - "bitcoin-magazine"
  - "ethereum"
  - "altcoin"
  - "scripting"
secondarySources:
  - name: "Wikipedia — Bitcoin Magazine"
    url: "https://en.wikipedia.org/wiki/Bitcoin_Magazine"
  - name: "Bitcoin Magazine — author archive: Vitalik Buterin"
    url: "https://bitcoinmagazine.com/authors/vitalik-buterin"
  - name: "Ethereum whitepaper (Vitalik Buterin, late 2013)"
    url: "https://ethereum.org/en/whitepaper/"
  - name: "pybitcointools — Vitalik Buterin's Python Bitcoin library"
    url: "https://github.com/vbuterin/pybitcointools"
  - name: "BitcoinTalk profile — Vitalik Buterin (`vbuterin`)"
    url: "https://bitcointalk.org/index.php?action=profile;u=11772"
relatedEntries:
  - analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy
  - aftermath/2012-05-01-bitcoin-magazine-launch
  - forum/bitcointalk/topic-428589/2014-01-23-vbuterin-ethereum-welcome-to-the-beginning
---

ヴィタリック・ブテリン (1994 年 1 月 31 日、ロシア・コロムナ生まれ。6 歳でカナダへ移住) は、2011 年 17 歳でビットコインコミュニティに加わり、初期最も多作のビットコイン記者の一人となった後、2014 年にイーサリアムを立ち上げたプログラマーである。本伝記の Bitcoin Archive 範囲は、ブテリンの公的活動が主にビットコイン中心だった 2011 ~ 2014 年期に絞る。

## ビットコインへの参入 (2011 年、17 歳)

ブテリン自身が公的に語っている経緯 (Wikipedia 経由で多数のインタビュー記事に再録) によれば、彼は 2010 年末から 2011 年初頭にかけて父親からビットコインの話を聞き、当初は流行りものとして退けた。同年中盤に再びこの話題に触れて深く読み込み、技術的に実体のある計画だと結論する。採掘や購入の元手がなかったため、執筆で稼ぐ方法を探し、ミハイ・アリシエが運営する小さな初期ビットコイン専門ブログ Bitcoin Weekly に行き着いた。Bitcoin Weekly は 1 記事あたり約 5 BTC (当時のレートで約 3.50 米ドル) を寄稿者に支払っていた。

## Bitcoin Weekly と Bitcoin Magazine (2011 ~ 2014)

ブテリンの Bitcoin Weekly への寄稿は、ミハイ・アリシエとの本格的な協業へとつながった。両者は *Bitcoin Magazine* を共同創設する ─ 当初オンラインで開始し、初の印刷版は 2012 年 5 月に発行された。ブテリンは 2014 年まで同誌の主筆を務め、ビットコインプロトコルの仕組み、採掘経済の分析、アルトコインプロジェクトの紹介 (Mastercoin や初期のカラードコインシステムを含む)、ブロックサイズ問題に関する論評、ビットコイン開発者へのインタビュー等、長文記事を多数執筆した。`secondarySources` にリンクする Bitcoin Magazine の著者アーカイブが彼の記事一覧を保存している。

ブテリンは同期間にオープンソースのビットコインソフトウェアにも寄稿した。最も引用されるのが **pybitcointools** (GitHub `vbuterin/pybitcointools`) ─ ビットコイン取引の構築、ECDSA 署名、BIP32 階層的決定性ウォレット、マークルツリーのプリミティブを実装した純 Python ライブラリ。2013 ~ 2015 年期に教育者や小規模ツール開発者の間で広く用いられ、現在もビットコインプロトコル学習の参考実装として残っている。

BitcoinTalk のプロフィール (`secondarySources` にリンク、ハンドル `vbuterin`) には 2011 年 10 月以降の投稿が記録されており、2014 年まで活動が集中している。

## スクリプト拡張をめぐる問い (2013 年)

2013 年を通してブテリンは、ビットコインのスクリプト言語を汎用計算に拡張する方向性 ─ 限定的でほぼ無効化された Bitcoin Script のオペコード集合ではなく、任意の状態機械を表現できるプログラム可能な契約 ─ を強く志向するようになった。Bitcoin Magazine の記事や、Mastercoin チーム (ビットコイン取引にメタデータを重ねてトークン発行や契約類似のプリミティブを追加するプロトコル) との対話の中で、彼は汎用計算はメタデータ層のオーバーレイではなく合意層の内側に置かれるべきだと論じた。

ビットコインコミュニティはこの方向に収束しなかった。後に [Bitcoin Core](/BitcoinArchive/ja/entries/analysis/2014-03-19-bitcoin-core-rebrand-authority-effects/) として明文化される保守的なプロトコル進化文化は、スクリプト拡張をハードフォーク経由で取り込むには高リスクとみなし、Mastercoin プロトコルを汎化する提案も採用されなかった。ブテリンはこの結論を 2013 年末のイーサリアム白書序文で記録している:

> 「彼らがやろうとしていた方法はやや見当外れだと感じるようになった... そこで、ビットコインを拡張してあらゆることをやらせようとするのではなく、最初から汎用的なスクリプト言語を備えた、まったく新しい基盤が必要だと判断した。」

白書 ─ `Ethereum: A Next-Generation Smart Contract and Decentralized Application Platform` ─ は 2013 年末に公開され、当初はビットコインコミュニティのチャネルで回覧された。

## ビットコインからの離脱 (2014 年)

2014 年 1 月、ブテリンはマイアミで開催された North American Bitcoin Conference でイーサリアムを発表した。同年中に資金調達 (イーサリアムクラウドセール、2014 年 7 月) を完了し、共同創業者を集める ─ そのほとんどが当時ビットコイン / サイファーパンク圏で活動していた人物だった: ギャヴィン・ウッド (後の Polkadot)、チャールズ・ホスキンソン (後のカルダノ)、ジョセフ・ルビン (後の ConsenSys)、アンソニー・ディ・イオリオ、ミハイ・アリシエ、アミール・チェトリット。彼は 2015 年 7 月 30 日のイーサリアムメインネット (Frontier リリース) を生んだ開発を主導した。

ブテリンの 2014 年以降の活動は主にイーサリアム関連で、本アーカイブの対象範囲外である。それ以降に彼が関わったチェーンとプロトコル (イーサリアムメインネット、PoS への Beacon Chain 合流、レイヤー 2 ロールアップ等) はイーサリアム自身の歴史記録に文書化されている。

## ビットコインにおける意義

ブテリンのビットコイン期の記録が本アーカイブで意味を持つのは二点。第一に、彼は 2012 ~ 2014 年期の Bitcoin Magazine に最も多作で寄稿した一人であり、彼の記事アーカイブはビットコインの中初期 (ローンチ期とブロックサイズ戦争の間) の同時代的な公開ドキュメンテーションのかなりの部分を占める。第二に、[ビットコイン系譜の分析](/BitcoinArchive/ja/entries/analysis/2008-10-31-bitcoin-fork-and-altcoin-genealogy/) はイーサリアムを、起源そのものがビットコインを**経由している**「次世代」 チェーンとして最も多く引用される銘柄として記録する ─ コードベースは独立しているものの、設計動機はブテリンの Bitcoin Magazine 期のスクリプト限界に関する思考から直接出ている。

*[編者注：本伝記はブテリンの 2011 ~ 2014 年のビットコイン期に焦点を絞る。彼の後年のイーサリアム関連活動は広く取り上げられているが、Bitcoin Archive のドキュメント対象範囲外である。本エントリーで用いている 2011-09-01 という日付は、彼のビットコインコミュニティ参入の代表的なプレースホルダーであり、彼の公開インタビュー間で正確な月は一意に確定していない。]*
