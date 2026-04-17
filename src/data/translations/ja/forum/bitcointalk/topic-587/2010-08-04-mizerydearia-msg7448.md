---
title: "Re: 難易度"
date: 2010-08-04T09:06:57.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=587.msg7448#msg7448"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "BitcoinTalkトピック587におけるmizerydeariaの文脈投稿。msg6301の後。"
isSatoshi: false
tags: []
translationStatus: complete
---

C++のSetCompact(unsigned int nCompact)関数が以下のようだとして、

```cpp
CBigNum& SetCompact(unsigned int nCompact) {
    unsigned int nSize = nCompact >> 24;
    std::vector<unsigned char> vch(4 + nSize);
    vch[3] = nSize;
    if (nSize >= 1) vch[4] = (nCompact >> 16) & 0xff;
    if (nSize >= 2) vch[5] = (nCompact >> 8) & 0xff;
    if (nSize >= 3) vch[6] = (nCompact >> 0) & 0xff;
    BN_mpi2bn(&vch[0], vch.size(), this);
    return *this;
}
これに対応するPythonが
```

```python
def uint256_from_compact(c):
	nbytes = (c >> 24) & 0xFF
	v = (c & 0xFFFFFFL) << (8 * (nbytes - 3))
	return v
対応するPHPが
```

```php
function uint256_from_compact($c) {
	$nbytes = ($c >> 24) & 0xFF;
	return bcmul($c & 0xFFFFFF,bcpow(2,8 * ($nbytes - 3)));
}
```

そして、C++のGetcompact()関数

```cpp
unsigned int GetCompact() const {
    unsigned int nSize = BN_bn2mpi(this, NULL);
    std::vector<unsigned char> vch(nSize);
    nSize -= 4;
    BN_bn2mpi(this, &vch[0]);
    unsigned int nCompact = nSize << 24;
    if (nSize >= 1) nCompact |= (vch[4] << 16);
    if (nSize >= 2) nCompact |= (vch[5] << 8);
    if (nSize >= 3) nCompact |= (vch[6] << 0);
    return nCompact;
}
```

であるとき、C++のGetcompact()関数に対応するPython/PHPの単純なコードはどう書けばいい？

このphpスニペットの中で関数を使うつもりだ

```php
function GetNextWorkRequired($block, $bits, $nActualTimespan) {
	$nTargetTimespan = 60 * 60 * 24 * 14; // 2 weeks
	if ($nActualTimespan < $nTargetTimespan / 4) { $nActualTimespan = $nTargetTimespan / 4; }
	if ($nActualTimespan > $nTargetTimespan * 4) { $nActualTimespan = $nTargetTimespan * 4; }
	$bits = uint256_from_compact($bits);
	$bits = bcmul($bits,$nActualTimespan);
	$bits = bcdiv($bits,$nTargetTimespan);
	$bits = uint256_to_compact($bits); // <-- Need to translate C++ code for GetCompact()
	return $bits;
}
```
