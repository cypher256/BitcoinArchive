#!/bin/bash
# verify-no-regression.sh — Verify that no existing files were modified
#
# Usage:
#   # Before running a data-modifying script:
#   find src/data/entries/en/forum/bitcointalk -name "*.md" \
#     -exec sha1sum {} \; | sort > /tmp/before.sha1
#
#   # After running the script:
#   bash scripts/verify-no-regression.sh /tmp/before.sha1
#
# Exit codes:
#   0 - all existing files unchanged (new files are OK)
#   1 - one or more existing files were modified (regression!)

set -e

if [ -z "$1" ]; then
  echo "Usage: $0 <snapshot-file>" >&2
  exit 2
fi

SNAPSHOT="$1"
if [ ! -f "$SNAPSHOT" ]; then
  echo "Error: snapshot file not found: $SNAPSHOT" >&2
  exit 2
fi

REGRESSIONS=0

while IFS= read -r line; do
  hash_before=$(echo "$line" | awk '{print $1}')
  file=$(echo "$line" | awk '{print $2}')

  if [ ! -f "$file" ]; then
    echo "DELETED: $file"
    REGRESSIONS=$((REGRESSIONS + 1))
    continue
  fi

  hash_after=$(sha1sum "$file" | awk '{print $1}')
  if [ "$hash_before" != "$hash_after" ]; then
    echo "MODIFIED: $file"
    REGRESSIONS=$((REGRESSIONS + 1))
  fi
done < "$SNAPSHOT"

if [ "$REGRESSIONS" -gt 0 ]; then
  echo ""
  echo "✗ REGRESSION: $REGRESSIONS existing file(s) were modified or deleted!"
  echo "  Run: git reset --hard backup/<branch-name>"
  exit 1
fi

echo "✓ No existing files modified ($(wc -l < "$SNAPSHOT") files verified)"
exit 0
