---
title: "Re: Difficulty"
date: 2010-08-04T09:06:57.000Z
type: "forum-post"
source: "bitcointalk"
sourceUrl: "https://bitcointalk.org/index.php?topic=587.msg7448#msg7448"
author: "mizerydearia"
participants:
  - name: "mizerydearia"
    slug: "mizerydearia"
description: "Context post by mizerydearia in BitcoinTalk topic 587. after msg6301."
isSatoshi: false
tags: []
---

If C++ SetCompact(unsigned int nCompact) function is

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
With Python equivalent of
```

```python
def uint256_from_compact(c):
	nbytes = (c >> 24) & 0xFF
	v = (c & 0xFFFFFFL) << (8 * (nbytes - 3))
	return v
And PHP equvalent of
```

```php
function uint256_from_compact($c) {
	$nbytes = ($c >> 24) & 0xFF;
	return bcmul($c & 0xFFFFFF,bcpow(2,8 * ($nbytes - 3)));
}
```

then for C++ Getcompact() function

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

how can I produce simplistic code for python/php to produce equivalent function?

My intention is to use the function in this php snippet

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
