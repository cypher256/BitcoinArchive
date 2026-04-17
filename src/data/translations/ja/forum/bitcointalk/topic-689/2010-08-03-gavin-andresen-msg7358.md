---
title: "Re: 認証、JSON RPCとPython"
date: 2010-08-03T22:52:10.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=689.msg7358#msg7358"
author: "Gavin Andresen"
participants:
  - name: "Gavin Andresen"
    slug: "gavin-andresen"
description: "BitcoinTalkトピック689におけるギャビン・アンドレセンの文脈投稿。msg7335の後。"
isSatoshi: false
tags: []
quotes:
  - id: "q1"
    person: "Jeff Garzik"
    personSlug: "jeff-garzik"
    date: "2010-08-03T18:58:58.000Z"
    sourceEntryId: "forum/bitcointalk/topic-689/2010-08-03-jgarzik-msg7300"
translationStatus: complete
---

<!-- quote: q1 -->
> CPANにあるJSON RPCライブラリ2つ（Perl）と、挙動を確認するためにローカルで書いた準拠Cライブラリだ。

PerlのLWPモジュールは間違いなくContent-Lengthヘッダーを設定している。HTTP 1.0では必須で、HTTP 1.1の仕様でもクライアントは「SHOULD」設定すべきとされているので、設定していなかったらむしろ驚きだ。

少し格闘した末に、CPANの最初のJSON::RPCライブラリで動かすことができた：

```
use JSON::RPC::Client;
use Data::Dumper;
```

my $client = new JSON::RPC::Client;

$client->ua->credentials(
   'localhost:8332', 'jsonrpc', 'my rpcusername' => 'my rpcpassword'   # Replace with real user/pass
    );
my @foo = $client->ua->credentials('localhost:8332', 'jsonrpc');
print "@foo\n";

my $uri = 'http://localhost:8332/';
my $obj = {
    method  => 'getinfo',
    params  => ],
 };

my $res = $client->call( $uri, $obj );

if($res){
    if ($res->is_error) {
        print "Error : ", $res->error_message;
    }
    else {
        print Dumper($res->result);
    }
}
else {
    print $client->status_line;
}
苦労したのはrealmを 'jsonrpc' に設定する点だ（ここがうるさい）。これはwikiにドキュメントとして書いておく。
