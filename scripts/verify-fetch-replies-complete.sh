#!/bin/bash
# verify-fetch-replies-complete.sh — Phase 7 final verification
#
# Checks all completion criteria for the fetch-replies-to-satoshi pipeline:
#   1. (optional) Existing files unchanged (SHA-1 against snapshot)
#   2. EN/JA pair existence (every new EN file has a JA counterpart)
#   3. Rule A / Rule B coverage (delegated to verify-rule-ab.mjs)
#   4. npm run check passes
#
# Usage:
#   bash scripts/verify-fetch-replies-complete.sh
#
# Optional SHA-1 regression check:
#   Before running fetch-replies-to-satoshi.mjs, create a snapshot:
#     find src/data/entries/en/forum/bitcointalk -name "*.md" \
#       -exec shasum {} \; | sort > /tmp/before-fetch-replies.sha1
#   Then this script will use it to verify no existing file was touched.
#   If the snapshot is absent, the check is skipped with a warning.

set -e

echo "=== Phase 7: Final Verification ==="
echo

EXIT_CODE=0

# ---------------------------------------------------------------------------
# 1. Existing files unchanged (optional — skipped if snapshot is missing)
# ---------------------------------------------------------------------------
echo "1. Verifying existing files unchanged (SHA-1 regression check)..."
if [ ! -f /tmp/before-fetch-replies.sha1 ]; then
  echo "   ⚠️  /tmp/before-fetch-replies.sha1 not found — regression check SKIPPED"
  echo "   (To enable: create the snapshot before running fetch-replies-to-satoshi.mjs)"
else
  if bash scripts/verify-no-regression.sh /tmp/before-fetch-replies.sha1; then
    echo "   ✓ No existing files modified"
  else
    echo "   ✗ Existing files were modified — regression detected"
    EXIT_CODE=1
  fi
fi
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
  EXIT_CODE=1
else
  echo "   ✓ All EN files have JA counterparts"
fi
echo

# ---------------------------------------------------------------------------
# 3. Rule A / Rule B coverage (delegated to verify-rule-ab.mjs)
# ---------------------------------------------------------------------------
echo "3. Verifying Rule A / Rule B coverage..."
if node scripts/verify-rule-ab.mjs --quiet > /tmp/rule-ab-output.log 2>&1; then
  grep -E '(Satoshi posts|Spec coverage|Disk shortfall|On-disk lower bound)' /tmp/rule-ab-output.log | sed 's/^/   /'
  echo "   ✓ Rule A disk-consistent"
else
  echo "   ✗ verify-rule-ab.mjs failed:"
  tail -20 /tmp/rule-ab-output.log | sed 's/^/   /'
  EXIT_CODE=1
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
  tail -20 /tmp/check-output.log | sed 's/^/   /'
  EXIT_CODE=1
fi
echo

# ---------------------------------------------------------------------------
# Summary
# ---------------------------------------------------------------------------
EN_TOTAL=$(find src/data/entries/en/forum/bitcointalk -name "*.md" | wc -l | tr -d ' ')
JA_TOTAL=$(find src/data/translations/ja/forum/bitcointalk -name "*.md" | wc -l | tr -d ' ')

echo "=== Summary ==="
echo "BitcoinTalk EN files: $EN_TOTAL"
echo "BitcoinTalk JA files: $JA_TOTAL"
echo

if [ "$EXIT_CODE" -eq 0 ]; then
  echo "✓ Phase 7 verification complete"
else
  echo "✗ Phase 7 verification FAILED"
fi

exit "$EXIT_CODE"
