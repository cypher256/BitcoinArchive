---
title: "Re: Block-header-only, faster startup client"
date: 2010-12-20T17:44:49.000Z
type: "forum-post"
source: "github"
sourceUrl: "https://github.com/bitcoin/bitcoin/issues/7#issuecomment-625002"
author: "gavinandresen"
participants:
  - name: "gavinandresen"
    slug: "gavinandresen"
description: "Comment by gavinandresen in bitcoin/bitcoin issue #7. mentions Satoshi."
isSatoshi: false
tags:
  - "github"
---

See the blockheaders feature branch here for initial work on this.  Notes from Satoshi:

CBlockIndex contains all the information of the block header, so to operate with headers only, I just maintain the CBlockIndex structure as usual.  The nFile/nBlockPos are null, since the full block is not recorded on disk.

The code to gracefully switch between client-mode on/off without deleting blk*.dat in between is not implemented yet.  It would mostly be a matter of having non-client LoadBlockIndex ignore block index entries with null block pos.  That would make it re-download those as full blocks.  Switching back to client-mode is no problem, it doesn't mind if the full blocks are there.

If the initial block download becomes too long, we'll want client mode as an option so new users can get running quickly.  With graceful switch-off of client mode, they can later turn off client mode and have it download the full blocks if they want to start generating.
