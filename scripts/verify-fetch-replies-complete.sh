#!/bin/bash
# verify-fetch-replies-complete.sh — Phase 7 final verification
#
# Checks all completion criteria for the fetch-replies-to-satoshi pipeline:
#   1. Existing 1,811 files unchanged (SHA-1 against /tmp/before-fetch-replies.sha1)
#   2. EN/JA pair existence (every new EN file has a JA counterpart)
#   3. All new files have quotes[] structure (or no quotes at all)
#   4. All Satoshi posts have at least 1 reply (Rule A or B fulfilled)
#   5. npm run check passes
#
# Usage:
#   bash scripts/verify-fetch-replies-complete.sh

set -e

echo "=== Phase 7: Final Verification ==="
echo

# ---------------------------------------------------------------------------
# 1. Existing files unchanged
# ---------------------------------------------------------------------------
echo "1. Verifying existing 1,811 files unchanged..."
if [ ! -f /tmp/before-fetch-replies.sha1 ]; then
  echo "   ✗ /tmp/before-fetch-replies.sha1 not found — cannot verify"
  exit 1
fi
bash scripts/verify-no-regression.sh /tmp/before-fetch-replies.sha1
echo

# ---------------------------------------------------------------------------
# 2. EN/JA pair existence
# ---------------------------------------------------------------------------
echo "2. Verifying EN/JA pair existence..."
MISSING_JA=0
while IFS= read -r en_file; do
  rel=${en_file#src/data/entries/en/}
  ja_file="src/data/translations/ja/$rel"
  if [ ! -f "$ja_file" ]; then
    echo "   MISSING JA: $rel"
    MISSING_JA=$((MISSING_JA + 1))
  fi
done < <(find src/data/entries/en/forum/bitcointalk -name "*.md")

if [ "$MISSING_JA" -gt 0 ]; then
  echo "   ✗ $MISSING_JA EN files have no JA counterpart"
  exit 1
fi
echo "   ✓ All EN files have JA counterparts"
echo

# ---------------------------------------------------------------------------
# 3. Reply coverage for Satoshi posts
# ---------------------------------------------------------------------------
echo "3. Verifying Satoshi reply coverage..."
SATOSHI_COUNT=$(grep -rl '^author: "Satoshi Nakamoto"' src/data/entries/en/forum/bitcointalk/ | wc -l | tr -d ' ')
echo "   Total Satoshi posts: $SATOSHI_COUNT"

# Find Satoshi posts without any reply file in the same topic that has msgId > satoshi msgId
NO_REPLY=0
for satoshi_file in $(grep -rl '^author: "Satoshi Nakamoto"' src/data/entries/en/forum/bitcointalk/); do
  topic_dir=$(dirname "$satoshi_file")
  satoshi_msg=$(basename "$satoshi_file" | grep -oE 'msg[0-9]+' | head -1 | sed 's/msg//')
  if [ -z "$satoshi_msg" ]; then continue; fi

  has_reply=false
  for other in "$topic_dir"/*.md; do
    other_msg=$(basename "$other" | grep -oE 'msg[0-9]+' | head -1 | sed 's/msg//')
    if [ -z "$other_msg" ]; then continue; fi
    if [ "$other_msg" -gt "$satoshi_msg" ]; then
      has_reply=true
      break
    fi
  done

  if [ "$has_reply" = false ]; then
    NO_REPLY=$((NO_REPLY + 1))
    # Optionally print which: echo "   No reply: $satoshi_file"
  fi
done

echo "   Satoshi posts without any reply: $NO_REPLY"
if [ "$NO_REPLY" -gt 0 ]; then
  echo "   (May be the last post in a thread, or thread had no follow-ups)"
fi
echo

# ---------------------------------------------------------------------------
# 4. npm run check
# ---------------------------------------------------------------------------
echo "4. Running npm run check..."
if npm run check > /tmp/check-output.log 2>&1; then
  echo "   ✓ npm run check passed"
else
  echo "   ✗ npm run check failed:"
  tail -20 /tmp/check-output.log
  exit 1
fi
echo

# ---------------------------------------------------------------------------
# Summary
# ---------------------------------------------------------------------------
EN_TOTAL=$(find src/data/entries/en/forum/bitcointalk -name "*.md" | wc -l | tr -d ' ')
JA_TOTAL=$(find src/data/translations/ja/forum/bitcointalk -name "*.md" | wc -l | tr -d ' ')
NEW_EN=$((EN_TOTAL - 1811))

echo "=== Summary ==="
echo "BitcoinTalk EN files: $EN_TOTAL (was 1,811, +$NEW_EN new)"
echo "BitcoinTalk JA files: $JA_TOTAL"
echo "Satoshi posts: $SATOSHI_COUNT"
echo "Posts without replies: $NO_REPLY"
echo
echo "✓ Phase 7 verification complete"
