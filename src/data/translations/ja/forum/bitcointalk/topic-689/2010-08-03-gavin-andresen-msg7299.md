---
title: "Re:（ギャビン・アンドレセンの引用投稿）"
date: 2010-08-03T18:56:44.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=689.msg7299#msg7299"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック689におけるギャビン・アンドレセンの投稿。"
isSatoshi: false
tags: []
translationStatus: complete
---

[Quote from: jgarzik on August 03, 2010, 06:09:08 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-689/2010-08-03-jgarzik-msg7288/)
> [Quote from: vess on August 03, 2010, 06:02:00 PM](/BitcoinArchive/ja/entries/forum/bitcointalk/topic-689/2010-08-03-vess-msg7287/)
> > 情報ありがとう、興味深いが、自分の問題とは違うようだ。
> >
> > 以下が現在のコードだ（Google App Engineで動作）
> >
> > postdata = jsonrpc.dumps({"method": 'getbalance', "params":'','id':'jsonrpc'})
> > req = urllib2.Request('http://127.0.0.1:8332', postdata)
> > userpass = 'user:a'.encode('base64')[:-1]
> > authheader =  "Basic %s" % userpass
> > req.add_header("Authorization",authheader)
> > handle = urllib2.urlopen(req)
> > json_response = handle.read()
> > self.response.out.write (json_response)
> >
> > これはHTTPError: HTTP Error 500: Internal Server Errorを返す。
> >
> > GAEのローカルPythonスクリプトからだ。
> >
> > 以下を使っても
> >    postdata = jsonrpc.dumps([{"jsonrpc": "2.0","method": 'getbalance', "params":'','id':'1'}])
> >
> > 同じ結果になる。
>
> これはbitcoinの確認済みバグだ。
>
> bitcoinはContent-Lengthヘッダーを必要とするが、いくつかのJSON-RPCライブラリはそれを提供しない。Content-Lengthヘッダーがない場合、bitcoinは500 Internal Server Errorを返す。

どのJSONライブラリがContent-Lengthを提供しないか、もう少し具体的に教えてもらえないか？ドキュメントに記載できると助かる。
